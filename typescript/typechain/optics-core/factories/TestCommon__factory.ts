/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestCommon, TestCommonInterface } from "../TestCommon";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "current",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueEnd",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "testIsUpdaterSignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162000f6c38038062000f6c833981810160405260408110156200003757600080fd5b5080516020909101516001600160e01b031960e083901b166080526200005d8162000065565b50506200024b565b600054610100900460ff16806200008157506200008162000142565b8062000090575060005460ff16155b620000cd5760405162461bcd60e51b815260040180806020018281038252602e81526020018062000f3e602e913960400191505060405180910390fd5b600054610100900460ff16158015620000f9576000805460ff1961ff0019909116610100171660011790555b6200010362000160565b603480546001600160a01b0319166001600160a01b0384161760ff60a01b1916600160a01b17905580156200013e576000805461ff00191690555b5050565b60006200015a306200022160201b620007431760201c565b15905090565b600054610100900460ff16806200017c57506200017c62000142565b806200018b575060005460ff16155b620001c85760405162461bcd60e51b815260040180806020018281038252602e81526020018062000f3e602e913960400191505060405180910390fd5b600054610100900460ff16158015620001f4576000805460ff1961ff0019909116610100171660011790555b6200020b60016200022760201b620007491760201c565b80156200021e576000805461ff00191690555b50565b3b151590565b80546001600160801b03166200021e5780546001600160801b031916600117815550565b60805160e01c610cd06200026e6000398061060c528061067a5250610cd06000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80639d54f41911610081578063c19d93fb1161005b578063c19d93fb146102fe578063df034cd014610327578063f6d1610214610358576100c9565b80639d54f419146102bb5780639fa6a6e3146102ee578063ab91c7b0146102f6576100c9565b80632bef2892116100b25780632bef28921461026357806345630b1a146102805780638d3638f41461029a576100c9565b806319d9d21a146100ce57806325605c021461019d575b600080fd5b61019b600480360360a08110156100e457600080fd5b813591602081019181019060808101606082013564010000000081111561010a57600080fd5b82018360208201111561011c57600080fd5b8035906020019184600183028401116401000000008311171561013e57600080fd5b91939092909160208101903564010000000081111561015c57600080fd5b82018360208201111561016e57600080fd5b8035906020019184600183028401116401000000008311171561019057600080fd5b509092509050610360565b005b61024f600480360360608110156101b357600080fd5b8135916020810135918101906060810160408201356401000000008111156101da57600080fd5b8201836020820111156101ec57600080fd5b8035906020019184600183028401116401000000008311171561020e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105bd945050505050565b604080519115158252519081900360200190f35b61024f6004803603602081101561027957600080fd5b50356105d2565b6102886105e5565b60408051918252519081900360200190f35b6102a2610678565b6040805163ffffffff9092168252519081900360200190f35b61019b600480360360208110156102d157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661069c565b6102886106e3565b6102886106e9565b6103066106fa565b6040518082600281111561031657fe5b815260200191505060405180910390f35b61032f61071b565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610288610737565b600260345474010000000000000000000000000000000000000000900460ff16600281111561038b57fe5b14156103f857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f860181900481028201810190925284815261043a918891883591889088908190840183828082843760009201919091525061078e92505050565b8015610489575061048986866001602002013584848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061078e92505050565b801561049a57508435602086013514155b156105b5576104a7610820565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b60006105ca84848461078e565b949350505050565b60006105df60018361082a565b92915050565b604080517fffffffff000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060e01b166020808301919091527f4f5054494353000000000000000000000000000000000000000000000000000060248301528251600a818403018152602a909201909252805191012090565b7f000000000000000000000000000000000000000000000000000000000000000081565b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60355481565b60006106f560016108a4565b905090565b60345474010000000000000000000000000000000000000000900460ff1681565b60345473ffffffffffffffffffffffffffffffffffffffff1681565b60006106f560016108dc565b3b151590565b80546fffffffffffffffffffffffffffffffff1661078b5780547fffffffffffffffffffffffffffffffff000000000000000000000000000000001660011781555b50565b6000806107996105e5565b85856040516020018084815260200183815260200182815260200193505050506040516020818303038152906040528051906020012090506107da81610919565b60345490915073ffffffffffffffffffffffffffffffffffffffff16610800828561096a565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b610828610a04565b565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff16811161089a5760008181526001850160205260409020548314156108925760019150506105df565b600101610842565b5060009392505050565b80546000906fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811691166105ca8282610a45565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b600081516041146109dc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a6109fa86828585610a5f565b9695505050505050565b603480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674020000000000000000000000000000000000000000179055565b60019103016fffffffffffffffffffffffffffffffff1690565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610ada576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610c576022913960400191505060405180910390fd5b8360ff16601b1480610aef57508360ff16601c145b610b44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610c796022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610ba0573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116610c4d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b9594505050505056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565a2646970667358221220dc07ae5dd82ec50764cb41772d10bbd0ed39de19c0bb28f968c5d8be6eb4f04964736f6c63430007060033496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564";

export class TestCommon__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    _updater: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestCommon> {
    return super.deploy(
      _localDomain,
      _updater,
      overrides || {}
    ) as Promise<TestCommon>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    _updater: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, _updater, overrides || {});
  }
  attach(address: string): TestCommon {
    return super.attach(address) as TestCommon;
  }
  connect(signer: Signer): TestCommon__factory {
    return super.connect(signer) as TestCommon__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCommonInterface {
    return new utils.Interface(_abi) as TestCommonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCommon {
    return new Contract(address, _abi, signerOrProvider) as TestCommon;
  }
}
