/// Dispatches a transaction, logs the tx id, and returns the result
#[macro_export]
macro_rules! report_tx {
    ($tx:expr) => {{

        // "0x..."
        let data = format!("0x{}", hex::encode(&$tx.tx.data().map(|b| b.to_vec()).unwrap_or_default()));

        let to = $tx.tx.to().cloned().unwrap_or_else(|| ethers::types::NameOrAddress::Address(Default::default()));

        tracing::info!(
            to = ?to,
            data = %data,
            "Dispatching transaction"
        );
        let dispatch_fut = $tx.send();
        let dispatched = dispatch_fut.await?;

        let tx_hash: ethers::core::types::H256 = *dispatched;

        tracing::info!(
            to = ?to,
            data = %data,
            tx_hash = ?tx_hash,
            "Dispatched tx with tx_hash {:?}",
            tx_hash
        );

        // Return error if confirmation wait time exceeds 15 min (900 sec)
        let result = match tokio::time::timeout(std::time::Duration::from_secs(900), dispatched).await {
            Ok(result) => result,
            Err(_) => Err(
                ethers::prelude::ProviderError::CustomError(
                    format!("Waiting for dispatched tx confirmation timed out! Tx_hash: {}.", tx_hash).into()
                )),
        }?
        .ok_or_else(||optics_core::traits::ChainCommunicationError::DroppedError(tx_hash))?;

        tracing::info!(
            "confirmed transaction with tx_hash {:?}",
            result.transaction_hash
        );
        result
    }};
}
