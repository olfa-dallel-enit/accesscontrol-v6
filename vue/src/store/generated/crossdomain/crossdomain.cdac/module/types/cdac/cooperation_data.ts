/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Validity } from "../cdac/validity";

export const protobufPackage = "crossdomain.cdac";

export interface CooperationData {
  labelIndex: string;
  validity: Validity | undefined;
  status: string;
  cost: number;
  lastUpdate: string;
  interestList: string[];
  creator: string;
}

const baseCooperationData: object = {
  labelIndex: "",
  status: "",
  cost: 0,
  lastUpdate: "",
  interestList: "",
  creator: "",
};

export const CooperationData = {
  encode(message: CooperationData, writer: Writer = Writer.create()): Writer {
    if (message.labelIndex !== "") {
      writer.uint32(10).string(message.labelIndex);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.cost !== 0) {
      writer.uint32(32).uint64(message.cost);
    }
    if (message.lastUpdate !== "") {
      writer.uint32(42).string(message.lastUpdate);
    }
    for (const v of message.interestList) {
      writer.uint32(50).string(v!);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CooperationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCooperationData } as CooperationData;
    message.interestList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.labelIndex = reader.string();
          break;
        case 2:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 3:
          message.status = reader.string();
          break;
        case 4:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.lastUpdate = reader.string();
          break;
        case 6:
          message.interestList.push(reader.string());
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CooperationData {
    const message = { ...baseCooperationData } as CooperationData;
    message.interestList = [];
    if (object.labelIndex !== undefined && object.labelIndex !== null) {
      message.labelIndex = String(object.labelIndex);
    } else {
      message.labelIndex = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = String(object.lastUpdate);
    } else {
      message.lastUpdate = "";
    }
    if (object.interestList !== undefined && object.interestList !== null) {
      for (const e of object.interestList) {
        message.interestList.push(String(e));
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: CooperationData): unknown {
    const obj: any = {};
    message.labelIndex !== undefined && (obj.labelIndex = message.labelIndex);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.cost !== undefined && (obj.cost = message.cost);
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    if (message.interestList) {
      obj.interestList = message.interestList.map((e) => e);
    } else {
      obj.interestList = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<CooperationData>): CooperationData {
    const message = { ...baseCooperationData } as CooperationData;
    message.interestList = [];
    if (object.labelIndex !== undefined && object.labelIndex !== null) {
      message.labelIndex = object.labelIndex;
    } else {
      message.labelIndex = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = object.lastUpdate;
    } else {
      message.lastUpdate = "";
    }
    if (object.interestList !== undefined && object.interestList !== null) {
      for (const e of object.interestList) {
        message.interestList.push(e);
      }
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
