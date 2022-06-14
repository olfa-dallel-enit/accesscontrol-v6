/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.cdac";

export interface DelegationPolicyTarget {
  id: number;
  delegatorList: string[];
  permissionList: string[];
  action: string;
  creator: string;
}

const baseDelegationPolicyTarget: object = {
  id: 0,
  delegatorList: "",
  permissionList: "",
  action: "",
  creator: "",
};

export const DelegationPolicyTarget = {
  encode(
    message: DelegationPolicyTarget,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.delegatorList) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.permissionList) {
      writer.uint32(26).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DelegationPolicyTarget {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationPolicyTarget } as DelegationPolicyTarget;
    message.delegatorList = [];
    message.permissionList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.delegatorList.push(reader.string());
          break;
        case 3:
          message.permissionList.push(reader.string());
          break;
        case 4:
          message.action = reader.string();
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

  fromJSON(object: any): DelegationPolicyTarget {
    const message = { ...baseDelegationPolicyTarget } as DelegationPolicyTarget;
    message.delegatorList = [];
    message.permissionList = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.delegatorList !== undefined && object.delegatorList !== null) {
      for (const e of object.delegatorList) {
        message.delegatorList.push(String(e));
      }
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(String(e));
      }
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: DelegationPolicyTarget): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.delegatorList) {
      obj.delegatorList = message.delegatorList.map((e) => e);
    } else {
      obj.delegatorList = [];
    }
    if (message.permissionList) {
      obj.permissionList = message.permissionList.map((e) => e);
    } else {
      obj.permissionList = [];
    }
    message.action !== undefined && (obj.action = message.action);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DelegationPolicyTarget>
  ): DelegationPolicyTarget {
    const message = { ...baseDelegationPolicyTarget } as DelegationPolicyTarget;
    message.delegatorList = [];
    message.permissionList = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.delegatorList !== undefined && object.delegatorList !== null) {
      for (const e of object.delegatorList) {
        message.delegatorList.push(e);
      }
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(e);
      }
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
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
