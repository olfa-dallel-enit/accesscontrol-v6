/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { CooperativeDomain } from "../cdac/cooperative_domain";
import { Path } from "../cdac/path";

export const protobufPackage = "crossdomain.cdac";

export interface DelegationPath {
  id: number;
  delegator: CooperativeDomain | undefined;
  delegatee: CooperativeDomain | undefined;
  pathList: Path[];
  creator: string;
  label: string;
}

const baseDelegationPath: object = { id: 0, creator: "", label: "" };

export const DelegationPath = {
  encode(message: DelegationPath, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.delegator !== undefined) {
      CooperativeDomain.encode(
        message.delegator,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.delegatee !== undefined) {
      CooperativeDomain.encode(
        message.delegatee,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.pathList) {
      Path.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DelegationPath {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationPath } as DelegationPath;
    message.pathList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.delegator = CooperativeDomain.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegatee = CooperativeDomain.decode(reader, reader.uint32());
          break;
        case 4:
          message.pathList.push(Path.decode(reader, reader.uint32()));
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.label = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationPath {
    const message = { ...baseDelegationPath } as DelegationPath;
    message.pathList = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = CooperativeDomain.fromJSON(object.delegator);
    } else {
      message.delegator = undefined;
    }
    if (object.delegatee !== undefined && object.delegatee !== null) {
      message.delegatee = CooperativeDomain.fromJSON(object.delegatee);
    } else {
      message.delegatee = undefined;
    }
    if (object.pathList !== undefined && object.pathList !== null) {
      for (const e of object.pathList) {
        message.pathList.push(Path.fromJSON(e));
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    return message;
  },

  toJSON(message: DelegationPath): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.delegator !== undefined &&
      (obj.delegator = message.delegator
        ? CooperativeDomain.toJSON(message.delegator)
        : undefined);
    message.delegatee !== undefined &&
      (obj.delegatee = message.delegatee
        ? CooperativeDomain.toJSON(message.delegatee)
        : undefined);
    if (message.pathList) {
      obj.pathList = message.pathList.map((e) =>
        e ? Path.toJSON(e) : undefined
      );
    } else {
      obj.pathList = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationPath>): DelegationPath {
    const message = { ...baseDelegationPath } as DelegationPath;
    message.pathList = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = CooperativeDomain.fromPartial(object.delegator);
    } else {
      message.delegator = undefined;
    }
    if (object.delegatee !== undefined && object.delegatee !== null) {
      message.delegatee = CooperativeDomain.fromPartial(object.delegatee);
    } else {
      message.delegatee = undefined;
    }
    if (object.pathList !== undefined && object.pathList !== null) {
      for (const e of object.pathList) {
        message.pathList.push(Path.fromPartial(e));
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
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
