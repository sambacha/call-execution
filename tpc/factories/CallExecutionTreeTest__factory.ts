/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CallExecutionTreeTest,
  CallExecutionTreeTestInterface,
} from "../CallExecutionTreeTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_callGraph",
        type: "bytes",
      },
      {
        internalType: "uint256[]",
        name: "_callPath",
        type: "uint256[]",
      },
    ],
    name: "extractTargetFromCallGraph1",
    outputs: [
      {
        internalType: "uint256",
        name: "targetBlockchainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionCall",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d32806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ac23902614610030575b600080fd5b61004a60048036038101906100459190610673565b610062565b604051610059939291906109fc565b60405180910390f35b600080606061007385856001610080565b9250925092509250925092565b60008060606000805b86518110156101a05760008061009f8a856102e8565b905060008160ff16141561010157600189516100bb9190610ba4565b83146100fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100f39061095c565b60405180910390fd5b61017d565b600089848151811061013c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506101738b60016004846101599190610b4a565b886101649190610af4565b61016e9190610af4565b61034f565b63ffffffff169250505b81846101899190610af4565b93505050808061019890610c56565b915050610089565b50600086600188516101b29190610ba4565b815181106101e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101511461025b57600061020288836102e8565b905060008160ff161461024a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102419061091c565b60405180910390fd5b6001826102579190610af4565b9150505b61026587826103b6565b93506020816102749190610af4565b9050610280878261041d565b925084156102cb576014816102959190610af4565b905060006102a3888361042e565b90506002826102b29190610af4565b91506102c388838361ffff16610495565b9250506102de565b6040518060200160405280600081525091505b5093509350939050565b60006001826102f79190610af4565b8351101561033a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610331906109bc565b60405180910390fd5b60008260010184015190508091505092915050565b600060048261035e9190610af4565b835110156103a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103989061099c565b60405180910390fd5b60008260040184015190508091505092915050565b60006020826103c59190610af4565b83511015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff906109dc565b60405180910390fd5b60008260200184015190508091505092915050565b600081601401830151905092915050565b600060028261043d9190610af4565b83511015610480576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104779061093c565b60405180910390fd5b60008260020184015190508091505092915050565b606081836104a39190610af4565b845110156104e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104dd9061097c565b60405180910390fd5b606082156000811461050357604051915060208201604052610554565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156105415780518352602083019250602081019050610524565b50868552601f19601f8301166040525050505b50809150509392505050565b600061057361056e84610a6b565b610a3a565b9050808382526020820190508285602086028201111561059257600080fd5b60005b858110156105c257816105a8888261065e565b845260208401935060208301925050600181019050610595565b5050509392505050565b60006105df6105da84610a97565b610a3a565b9050828152602081018484840111156105f757600080fd5b610602848285610c14565b509392505050565b600082601f83011261061b57600080fd5b813561062b848260208601610560565b91505092915050565b600082601f83011261064557600080fd5b81356106558482602086016105cc565b91505092915050565b60008135905061066d81610d0e565b92915050565b6000806040838503121561068657600080fd5b600083013567ffffffffffffffff8111156106a057600080fd5b6106ac85828601610634565b925050602083013567ffffffffffffffff8111156106c957600080fd5b6106d58582860161060a565b9150509250929050565b6106e881610bd8565b82525050565b60006106f982610ac7565b6107038185610ad2565b9350610713818560208601610c23565b61071c81610cfd565b840191505092915050565b6000610734601783610ae3565b91507f4578706563746564206c6561662066756e6374696f6e2e0000000000000000006000830152602082019050919050565b6000610774601d83610ae3565b91507f736c6963696e67206f7574206f662072616e6765202875696e743136290000006000830152602082019050919050565b60006107b4603283610ae3565b91507f52656163686564206c6561662066756e6374696f6e206275742074686572652060008301527f6973206d6f72652063616c6c20706174682e00000000000000000000000000006020830152604082019050919050565b600061081a601283610ae3565b91507f52656164206f7574206f6620626f756e647300000000000000000000000000006000830152602082019050919050565b600061085a601d83610ae3565b91507f736c6963696e67206f7574206f662072616e6765202875696e743332290000006000830152602082019050919050565b600061089a601c83610ae3565b91507f736c6963696e67206f7574206f662072616e6765202875696e743829000000006000830152602082019050919050565b60006108da601e83610ae3565b91507f736c6963696e67206f7574206f662072616e6765202875696e743235362900006000830152602082019050919050565b61091681610c0a565b82525050565b6000602082019050818103600083015261093581610727565b9050919050565b6000602082019050818103600083015261095581610767565b9050919050565b60006020820190508181036000830152610975816107a7565b9050919050565b600060208201905081810360008301526109958161080d565b9050919050565b600060208201905081810360008301526109b58161084d565b9050919050565b600060208201905081810360008301526109d58161088d565b9050919050565b600060208201905081810360008301526109f5816108cd565b9050919050565b6000606082019050610a11600083018661090d565b610a1e60208301856106df565b8181036040830152610a3081846106ee565b9050949350505050565b6000604051905081810181811067ffffffffffffffff82111715610a6157610a60610cce565b5b8060405250919050565b600067ffffffffffffffff821115610a8657610a85610cce565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610ab257610ab1610cce565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610aff82610c0a565b9150610b0a83610c0a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b3f57610b3e610c9f565b5b828201905092915050565b6000610b5582610c0a565b9150610b6083610c0a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610b9957610b98610c9f565b5b828202905092915050565b6000610baf82610c0a565b9150610bba83610c0a565b925082821015610bcd57610bcc610c9f565b5b828203905092915050565b6000610be382610bea565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610c41578082015181840152602081019050610c26565b83811115610c50576000848401525b50505050565b6000610c6182610c0a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c9457610c93610c9f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610d1781610c0a565b8114610d2257600080fd5b5056fea164736f6c6343000800000a";

export class CallExecutionTreeTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CallExecutionTreeTest> {
    return super.deploy(overrides || {}) as Promise<CallExecutionTreeTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CallExecutionTreeTest {
    return super.attach(address) as CallExecutionTreeTest;
  }
  connect(signer: Signer): CallExecutionTreeTest__factory {
    return super.connect(signer) as CallExecutionTreeTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallExecutionTreeTestInterface {
    return new utils.Interface(_abi) as CallExecutionTreeTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallExecutionTreeTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CallExecutionTreeTest;
  }
}