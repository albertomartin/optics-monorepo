use async_trait::async_trait;
use color_eyre::{
    eyre::{eyre, WrapErr},
    Result,
};
use futures_util::future::select_all;
use std::{collections::HashMap, sync::Arc};

use crate::settings::Settings;
use optics_core::traits::{Home, Replica};

/// Properties shared across all agents
#[derive(Debug)]
pub struct AgentCore {
    /// A boxed Home
    pub home: Arc<Box<dyn Home>>,
    /// A map of boxed Replicas
    pub replicas: HashMap<String, Arc<Box<dyn Replica>>>,
}

/// A trait for an application that runs on a replica and a reference to a
/// home.
#[async_trait]
pub trait OpticsAgent: Send + Sync + std::fmt::Debug + AsRef<AgentCore> {
    /// The settings object for this agent
    type Settings: AsRef<Settings>;

    /// Instantiate the agent from the standard settings object
    async fn from_settings(settings: Self::Settings) -> Result<Self>
    where
        Self: Sized;

    /// Return a reference to a home contract
    fn home(&self) -> Arc<Box<dyn Home>> {
        self.as_ref().home.clone()
    }

    /// Get a reference to the replicas map
    fn replicas(&self) -> &HashMap<String, Arc<Box<dyn Replica>>> {
        &self.as_ref().replicas
    }

    /// Get a reference to a replica by its name
    fn replica_by_name(&self, name: &str) -> Option<Arc<Box<dyn Replica>>> {
        self.replicas().get(name).map(Clone::clone)
    }

    /// Run the agent with the given home and replica
    async fn run(&self, replica: &str) -> Result<()>;

    /// Run the Agent, and tag errors with the domain ID of the replica
    #[allow(clippy::unit_arg)]
    #[tracing::instrument(err)]
    async fn run_report_error(&self, replica: &str) -> Result<()> {
        let m = format!("Replica named {} failed", replica);
        self.run(replica).await.wrap_err(m)
    }

    /// Run several agents by replica name
    #[allow(clippy::unit_arg)]
    #[tracing::instrument(err)]
    async fn run_many(&self, replicas: &[&str]) -> Result<()> {
        let mut futs: Vec<_> = replicas
            .iter()
            .map(|replica| self.run_report_error(replica))
            .collect();

        loop {
            // This gets the first future to resolve.
            let (res, _, remaining) = select_all(futs).await;
            if res.is_err() {
                tracing::error!("Replica shut down: {:#}", res.unwrap_err());
            }
            futs = remaining;
            if futs.is_empty() {
                return Err(eyre!("All replicas have shut down"));
            }
        }
    }

    /// Run several agents
    #[allow(clippy::unit_arg)]
    #[tracing::instrument(err)]
    async fn run_all(&self) -> Result<()> {
        let names: Vec<&str> = self.replicas().keys().map(|k| k.as_str()).collect();
        self.run_many(&names).await
    }
}