/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Validity } from "../crossdomain/validity";

export const protobufPackage = "crossdomain.crossdomain";

export interface CooperationNetworkFeatures {
  depth: number;
  cost: number;
  interestList: string[];
  locationList: string[];
  lastUpdate: string;
  validity: Validity | undefined;
  creator: string;
}

const baseCooperationNetworkFeatures: object = {
  depth: 0,
  cost: 0,
  interestList: "",
  locationList: "",
  lastUpdate: "",
  creator: "",
};

export const CooperationNetworkFeatures = {
  encode(
    message: CooperationNetworkFeatures,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.depth !== 0) {
      writer.uint32(8).uint64(message.depth);
    }
    if (message.cost !== 0) {
      writer.uint32(16).uint64(message.cost);
    }
    for (const v of message.interestList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(34).string(v!);
    }
    if (message.lastUpdate !== "") {
      writer.uint32(42).string(message.lastUpdate);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(50).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CooperationNetworkFeatures {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCooperationNetworkFeatures,
    } as CooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.interestList.push(reader.string());
          break;
        case 4:
          message.locationList.push(reader.string());
          break;
        case 5:
          message.lastUpdate = reader.string();
          break;
        case 6:
          message.validity = Validity.decode(reader, reader.uint32());
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

  fromJSON(object: any): CooperationNetworkFeatures {
    const message = {
      ...baseCooperationNetworkFeatures,
    } as CooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.interestList !== undefined && object.interestList !== null) {
      for (const e of object.interestList) {
        message.interestList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = String(object.lastUpdate);
    } else {
      message.lastUpdate = "";
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

  toJSON(message: CooperationNetworkFeatures): unknown {
    const obj: any = {};
    message.depth !== undefined && (obj.depth = message.depth);
    message.cost !== undefined && (obj.cost = message.cost);
    if (message.interestList) {
      obj.interestList = message.interestList.map((e) => e);
    } else {
      obj.interestList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CooperationNetworkFeatures>
  ): CooperationNetworkFeatures {
    const message = {
      ...baseCooperationNetworkFeatures,
    } as CooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.interestList !== undefined && object.interestList !== null) {
      for (const e of object.interestList) {
        message.interestList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = object.lastUpdate;
    } else {
      message.lastUpdate = "";
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
