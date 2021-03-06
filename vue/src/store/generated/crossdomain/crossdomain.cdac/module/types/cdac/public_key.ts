/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.cdac";

export interface PublicKey {
  id: number;
  n: number;
  e: number;
  creator: string;
}

const basePublicKey: object = { id: 0, n: 0, e: 0, creator: "" };

export const PublicKey = {
  encode(message: PublicKey, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.n !== 0) {
      writer.uint32(16).uint64(message.n);
    }
    if (message.e !== 0) {
      writer.uint32(24).uint64(message.e);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PublicKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePublicKey } as PublicKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.n = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.e = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublicKey {
    const message = { ...basePublicKey } as PublicKey;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = Number(object.n);
    } else {
      message.n = 0;
    }
    if (object.e !== undefined && object.e !== null) {
      message.e = Number(object.e);
    } else {
      message.e = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: PublicKey): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.n !== undefined && (obj.n = message.n);
    message.e !== undefined && (obj.e = message.e);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<PublicKey>): PublicKey {
    const message = { ...basePublicKey } as PublicKey;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = object.n;
    } else {
      message.n = 0;
    }
    if (object.e !== undefined && object.e !== null) {
      message.e = object.e;
    } else {
      message.e = 0;
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
