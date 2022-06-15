/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.cdac";

export interface DelegationLog {
  id: number;
  creator: string;
  decision: string;
  transaction: string;
  reason: string;
}

const baseDelegationLog: object = {
  id: 0,
  creator: "",
  decision: "",
  transaction: "",
  reason: "",
};

export const DelegationLog = {
  encode(message: DelegationLog, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.decision !== "") {
      writer.uint32(26).string(message.decision);
    }
    if (message.transaction !== "") {
      writer.uint32(34).string(message.transaction);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DelegationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationLog } as DelegationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.decision = reader.string();
          break;
        case 4:
          message.transaction = reader.string();
          break;
        case 5:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationLog {
    const message = { ...baseDelegationLog } as DelegationLog;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = String(object.reason);
    } else {
      message.reason = "";
    }
    return message;
  },

  toJSON(message: DelegationLog): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.decision !== undefined && (obj.decision = message.decision);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationLog>): DelegationLog {
    const message = { ...baseDelegationLog } as DelegationLog;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
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
