/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { DelegationPolicyTarget } from "../cdac/delegation_policy_target";
import { DelegationRule } from "../cdac/delegation_rule";

export const protobufPackage = "crossdomain.cdac";

export interface DelegationPolicy {
  id: number;
  label: string;
  target: DelegationPolicyTarget | undefined;
  combiningAlgorithm: string;
  ruleList: DelegationRule | undefined;
  creator: string;
}

const baseDelegationPolicy: object = {
  id: 0,
  label: "",
  combiningAlgorithm: "",
  creator: "",
};

export const DelegationPolicy = {
  encode(message: DelegationPolicy, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.target !== undefined) {
      DelegationPolicyTarget.encode(
        message.target,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.combiningAlgorithm !== "") {
      writer.uint32(34).string(message.combiningAlgorithm);
    }
    if (message.ruleList !== undefined) {
      DelegationRule.encode(
        message.ruleList,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DelegationPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationPolicy } as DelegationPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.target = DelegationPolicyTarget.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.combiningAlgorithm = reader.string();
          break;
        case 5:
          message.ruleList = DelegationRule.decode(reader, reader.uint32());
          break;
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationPolicy {
    const message = { ...baseDelegationPolicy } as DelegationPolicy;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = DelegationPolicyTarget.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
      message.combiningAlgorithm = String(object.combiningAlgorithm);
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.ruleList !== undefined && object.ruleList !== null) {
      message.ruleList = DelegationRule.fromJSON(object.ruleList);
    } else {
      message.ruleList = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: DelegationPolicy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    message.target !== undefined &&
      (obj.target = message.target
        ? DelegationPolicyTarget.toJSON(message.target)
        : undefined);
    message.combiningAlgorithm !== undefined &&
      (obj.combiningAlgorithm = message.combiningAlgorithm);
    message.ruleList !== undefined &&
      (obj.ruleList = message.ruleList
        ? DelegationRule.toJSON(message.ruleList)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationPolicy>): DelegationPolicy {
    const message = { ...baseDelegationPolicy } as DelegationPolicy;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = DelegationPolicyTarget.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
      message.combiningAlgorithm = object.combiningAlgorithm;
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.ruleList !== undefined && object.ruleList !== null) {
      message.ruleList = DelegationRule.fromPartial(object.ruleList);
    } else {
      message.ruleList = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
