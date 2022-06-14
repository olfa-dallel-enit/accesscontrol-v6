/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { DelegationConditions } from "../cdac/delegation_conditions";

export const protobufPackage = "crossdomain.cdac";

export interface DelegationRule {
  id: number;
  label: string;
  effect: string;
  delegationConditions: DelegationConditions | undefined;
  priority: number;
  creator: string;
  creationDate: string;
  creationTimestamp: string;
  updateDate: string;
  updateTimestamp: string;
}

const baseDelegationRule: object = {
  id: 0,
  label: "",
  effect: "",
  priority: 0,
  creator: "",
  creationDate: "",
  creationTimestamp: "",
  updateDate: "",
  updateTimestamp: "",
};

export const DelegationRule = {
  encode(message: DelegationRule, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.effect !== "") {
      writer.uint32(26).string(message.effect);
    }
    if (message.delegationConditions !== undefined) {
      DelegationConditions.encode(
        message.delegationConditions,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.priority !== 0) {
      writer.uint32(40).uint64(message.priority);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.creationDate !== "") {
      writer.uint32(58).string(message.creationDate);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(66).string(message.creationTimestamp);
    }
    if (message.updateDate !== "") {
      writer.uint32(74).string(message.updateDate);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(82).string(message.updateTimestamp);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DelegationRule {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationRule } as DelegationRule;
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
          message.effect = reader.string();
          break;
        case 4:
          message.delegationConditions = DelegationConditions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.priority = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.creationDate = reader.string();
          break;
        case 8:
          message.creationTimestamp = reader.string();
          break;
        case 9:
          message.updateDate = reader.string();
          break;
        case 10:
          message.updateTimestamp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationRule {
    const message = { ...baseDelegationRule } as DelegationRule;
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
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = String(object.effect);
    } else {
      message.effect = "";
    }
    if (
      object.delegationConditions !== undefined &&
      object.delegationConditions !== null
    ) {
      message.delegationConditions = DelegationConditions.fromJSON(
        object.delegationConditions
      );
    } else {
      message.delegationConditions = undefined;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = Number(object.priority);
    } else {
      message.priority = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.creationDate !== undefined && object.creationDate !== null) {
      message.creationDate = String(object.creationDate);
    } else {
      message.creationDate = "";
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = String(object.creationTimestamp);
    } else {
      message.creationTimestamp = "";
    }
    if (object.updateDate !== undefined && object.updateDate !== null) {
      message.updateDate = String(object.updateDate);
    } else {
      message.updateDate = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = String(object.updateTimestamp);
    } else {
      message.updateTimestamp = "";
    }
    return message;
  },

  toJSON(message: DelegationRule): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    message.effect !== undefined && (obj.effect = message.effect);
    message.delegationConditions !== undefined &&
      (obj.delegationConditions = message.delegationConditions
        ? DelegationConditions.toJSON(message.delegationConditions)
        : undefined);
    message.priority !== undefined && (obj.priority = message.priority);
    message.creator !== undefined && (obj.creator = message.creator);
    message.creationDate !== undefined &&
      (obj.creationDate = message.creationDate);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateDate !== undefined && (obj.updateDate = message.updateDate);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationRule>): DelegationRule {
    const message = { ...baseDelegationRule } as DelegationRule;
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
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = object.effect;
    } else {
      message.effect = "";
    }
    if (
      object.delegationConditions !== undefined &&
      object.delegationConditions !== null
    ) {
      message.delegationConditions = DelegationConditions.fromPartial(
        object.delegationConditions
      );
    } else {
      message.delegationConditions = undefined;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.creationDate !== undefined && object.creationDate !== null) {
      message.creationDate = object.creationDate;
    } else {
      message.creationDate = "";
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = object.creationTimestamp;
    } else {
      message.creationTimestamp = "";
    }
    if (object.updateDate !== undefined && object.updateDate !== null) {
      message.updateDate = object.updateDate;
    } else {
      message.updateDate = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = object.updateTimestamp;
    } else {
      message.updateTimestamp = "";
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
