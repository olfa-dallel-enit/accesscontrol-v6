/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Validity } from "../cdac/validity";

export const protobufPackage = "crossdomain.cdac";

export interface InterDomainDclPolicy {
  id: number;
  label: string;
  delegatorList: string[];
  delegateeList: string[];
  permissionList: string[];
  creationTimestamp: string;
  updateTimestamp: string;
  depth: number;
  maxDelegations: number;
  validity: Validity | undefined;
  creator: string;
}

const baseInterDomainDclPolicy: object = {
  id: 0,
  label: "",
  delegatorList: "",
  delegateeList: "",
  permissionList: "",
  creationTimestamp: "",
  updateTimestamp: "",
  depth: 0,
  maxDelegations: 0,
  creator: "",
};

export const InterDomainDclPolicy = {
  encode(
    message: InterDomainDclPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    for (const v of message.delegatorList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.delegateeList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.permissionList) {
      writer.uint32(42).string(v!);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(50).string(message.creationTimestamp);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(58).string(message.updateTimestamp);
    }
    if (message.depth !== 0) {
      writer.uint32(64).uint64(message.depth);
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(72).uint64(message.maxDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(82).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(90).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InterDomainDclPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterDomainDclPolicy } as InterDomainDclPolicy;
    message.delegatorList = [];
    message.delegateeList = [];
    message.permissionList = [];
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
          message.delegatorList.push(reader.string());
          break;
        case 4:
          message.delegateeList.push(reader.string());
          break;
        case 5:
          message.permissionList.push(reader.string());
          break;
        case 6:
          message.creationTimestamp = reader.string();
          break;
        case 7:
          message.updateTimestamp = reader.string();
          break;
        case 8:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.maxDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 11:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterDomainDclPolicy {
    const message = { ...baseInterDomainDclPolicy } as InterDomainDclPolicy;
    message.delegatorList = [];
    message.delegateeList = [];
    message.permissionList = [];
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
    if (object.delegatorList !== undefined && object.delegatorList !== null) {
      for (const e of object.delegatorList) {
        message.delegatorList.push(String(e));
      }
    }
    if (object.delegateeList !== undefined && object.delegateeList !== null) {
      for (const e of object.delegateeList) {
        message.delegateeList.push(String(e));
      }
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(String(e));
      }
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = String(object.creationTimestamp);
    } else {
      message.creationTimestamp = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = String(object.updateTimestamp);
    } else {
      message.updateTimestamp = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = Number(object.maxDelegations);
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: InterDomainDclPolicy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    if (message.delegatorList) {
      obj.delegatorList = message.delegatorList.map((e) => e);
    } else {
      obj.delegatorList = [];
    }
    if (message.delegateeList) {
      obj.delegateeList = message.delegateeList.map((e) => e);
    } else {
      obj.delegateeList = [];
    }
    if (message.permissionList) {
      obj.permissionList = message.permissionList.map((e) => e);
    } else {
      obj.permissionList = [];
    }
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    message.depth !== undefined && (obj.depth = message.depth);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<InterDomainDclPolicy>): InterDomainDclPolicy {
    const message = { ...baseInterDomainDclPolicy } as InterDomainDclPolicy;
    message.delegatorList = [];
    message.delegateeList = [];
    message.permissionList = [];
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
    if (object.delegatorList !== undefined && object.delegatorList !== null) {
      for (const e of object.delegatorList) {
        message.delegatorList.push(e);
      }
    }
    if (object.delegateeList !== undefined && object.delegateeList !== null) {
      for (const e of object.delegateeList) {
        message.delegateeList.push(e);
      }
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(e);
      }
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = object.creationTimestamp;
    } else {
      message.creationTimestamp = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = object.updateTimestamp;
    } else {
      message.updateTimestamp = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = object.maxDelegations;
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
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
