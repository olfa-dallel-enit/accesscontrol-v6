/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.cdac";

export interface InterDomainAclPolicy {
  id: number;
  label: string;
  subjectList: string[];
  actionList: string[];
  objectList: string[];
  status: string;
  creationTimestamp: string;
  updateTimestamp: string;
  creator: string;
}

const baseInterDomainAclPolicy: object = {
  id: 0,
  label: "",
  subjectList: "",
  actionList: "",
  objectList: "",
  status: "",
  creationTimestamp: "",
  updateTimestamp: "",
  creator: "",
};

export const InterDomainAclPolicy = {
  encode(
    message: InterDomainAclPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    for (const v of message.subjectList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.actionList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.objectList) {
      writer.uint32(42).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(58).string(message.creationTimestamp);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(66).string(message.updateTimestamp);
    }
    if (message.creator !== "") {
      writer.uint32(74).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InterDomainAclPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterDomainAclPolicy } as InterDomainAclPolicy;
    message.subjectList = [];
    message.actionList = [];
    message.objectList = [];
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
          message.subjectList.push(reader.string());
          break;
        case 4:
          message.actionList.push(reader.string());
          break;
        case 5:
          message.objectList.push(reader.string());
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.creationTimestamp = reader.string();
          break;
        case 8:
          message.updateTimestamp = reader.string();
          break;
        case 9:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterDomainAclPolicy {
    const message = { ...baseInterDomainAclPolicy } as InterDomainAclPolicy;
    message.subjectList = [];
    message.actionList = [];
    message.objectList = [];
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
    if (object.subjectList !== undefined && object.subjectList !== null) {
      for (const e of object.subjectList) {
        message.subjectList.push(String(e));
      }
    }
    if (object.actionList !== undefined && object.actionList !== null) {
      for (const e of object.actionList) {
        message.actionList.push(String(e));
      }
    }
    if (object.objectList !== undefined && object.objectList !== null) {
      for (const e of object.objectList) {
        message.objectList.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: InterDomainAclPolicy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    if (message.subjectList) {
      obj.subjectList = message.subjectList.map((e) => e);
    } else {
      obj.subjectList = [];
    }
    if (message.actionList) {
      obj.actionList = message.actionList.map((e) => e);
    } else {
      obj.actionList = [];
    }
    if (message.objectList) {
      obj.objectList = message.objectList.map((e) => e);
    } else {
      obj.objectList = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<InterDomainAclPolicy>): InterDomainAclPolicy {
    const message = { ...baseInterDomainAclPolicy } as InterDomainAclPolicy;
    message.subjectList = [];
    message.actionList = [];
    message.objectList = [];
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
    if (object.subjectList !== undefined && object.subjectList !== null) {
      for (const e of object.subjectList) {
        message.subjectList.push(e);
      }
    }
    if (object.actionList !== undefined && object.actionList !== null) {
      for (const e of object.actionList) {
        message.actionList.push(e);
      }
    }
    if (object.objectList !== undefined && object.objectList !== null) {
      for (const e of object.objectList) {
        message.objectList.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
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
