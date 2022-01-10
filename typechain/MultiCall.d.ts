/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MultiCallInterface extends ethers.utils.Interface {
  functions: {
    "gasLeft()": FunctionFragment;
    "gaslimit()": FunctionFragment;
    "multicall(tuple[])": FunctionFragment;
    "multicallWithGas(tuple[])": FunctionFragment;
    "multicallWithGasLimitation(tuple[],uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "gasLeft", values?: undefined): string;
  encodeFunctionData(functionFragment: "gaslimit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [{ to: string; data: BytesLike }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicallWithGas",
    values: [{ to: string; data: BytesLike }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicallWithGasLimitation",
    values: [{ to: string; data: BytesLike }[], BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "gasLeft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gaslimit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multicallWithGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multicallWithGasLimitation",
    data: BytesLike
  ): Result;

  events: {};
}

export class MultiCall extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MultiCallInterface;

  functions: {
    gasLeft(overrides?: CallOverrides): Promise<[BigNumber]>;

    gaslimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    multicall(
      calls: { to: string; data: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multicallWithGas(
      calls: { to: string; data: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multicallWithGasLimitation(
      calls: { to: string; data: BytesLike }[],
      gasBuffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  gasLeft(overrides?: CallOverrides): Promise<BigNumber>;

  gaslimit(overrides?: CallOverrides): Promise<BigNumber>;

  multicall(
    calls: { to: string; data: BytesLike }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multicallWithGas(
    calls: { to: string; data: BytesLike }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multicallWithGasLimitation(
    calls: { to: string; data: BytesLike }[],
    gasBuffer: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    gasLeft(overrides?: CallOverrides): Promise<BigNumber>;

    gaslimit(overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      calls: { to: string; data: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    multicallWithGas(
      calls: { to: string; data: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { results: string[]; gasUsed: BigNumber[] }
    >;

    multicallWithGasLimitation(
      calls: { to: string; data: BytesLike }[],
      gasBuffer: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber] & { results: string[]; lastSuccessIndex: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    gasLeft(overrides?: CallOverrides): Promise<BigNumber>;

    gaslimit(overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      calls: { to: string; data: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multicallWithGas(
      calls: { to: string; data: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multicallWithGasLimitation(
      calls: { to: string; data: BytesLike }[],
      gasBuffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    gasLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gaslimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multicall(
      calls: { to: string; data: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multicallWithGas(
      calls: { to: string; data: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multicallWithGasLimitation(
      calls: { to: string; data: BytesLike }[],
      gasBuffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}