/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Validity } from "../cdac/validity";

export const protobufPackage = "crossdomain.cdac";

export interface DelegationConditions {
  id: number;
  depth: number;
  validity: Validity | undefined;
  maxDelegations: number;
  creator: string;
}

const baseDelegationConditions: object = {
  id: 0,
  depth: 0,
  maxDelegations: 0,
  creator: "",
};

export const DelegationConditions = {
  encode(
    message: DelegationConditions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.depth !== 0) {
      writer.uint32(16).uint64(message.depth);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(32).uint64(message.maxDelegations);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DelegationConditions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationConditions } as DelegationConditions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationConditions {
    const message = { ...baseDelegationConditions } as DelegationConditions;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = Number(object.maxDelegations);
    } else {
      message.maxDelegations = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: DelegationConditions): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.depth !== undefined && (obj.depth = message.depth);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationConditions>): DelegationConditions {
    const message = { ...baseDelegationConditions } as DelegationConditions;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = object.maxDelegations;
    } else {
      message.maxDelegations = 0;
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
