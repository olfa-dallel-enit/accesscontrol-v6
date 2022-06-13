/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.cdac";

export interface CalculationTime {
  id: number;
  operation: string;
  startTimestamp: string;
  endTimestamp: string;
  duration: number;
  creator: string;
}

const baseCalculationTime: object = {
  id: 0,
  operation: "",
  startTimestamp: "",
  endTimestamp: "",
  duration: 0,
  creator: "",
};

export const CalculationTime = {
  encode(message: CalculationTime, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.operation !== "") {
      writer.uint32(18).string(message.operation);
    }
    if (message.startTimestamp !== "") {
      writer.uint32(26).string(message.startTimestamp);
    }
    if (message.endTimestamp !== "") {
      writer.uint32(34).string(message.endTimestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(40).uint64(message.duration);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CalculationTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCalculationTime } as CalculationTime;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.operation = reader.string();
          break;
        case 3:
          message.startTimestamp = reader.string();
          break;
        case 4:
          message.endTimestamp = reader.string();
          break;
        case 5:
          message.duration = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CalculationTime {
    const message = { ...baseCalculationTime } as CalculationTime;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = String(object.operation);
    } else {
      message.operation = "";
    }
    if (object.startTimestamp !== undefined && object.startTimestamp !== null) {
      message.startTimestamp = String(object.startTimestamp);
    } else {
      message.startTimestamp = "";
    }
    if (object.endTimestamp !== undefined && object.endTimestamp !== null) {
      message.endTimestamp = String(object.endTimestamp);
    } else {
      message.endTimestamp = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Number(object.duration);
    } else {
      message.duration = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: CalculationTime): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.operation !== undefined && (obj.operation = message.operation);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp);
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp);
    message.duration !== undefined && (obj.duration = message.duration);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<CalculationTime>): CalculationTime {
    const message = { ...baseCalculationTime } as CalculationTime;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = object.operation;
    } else {
      message.operation = "";
    }
    if (object.startTimestamp !== undefined && object.startTimestamp !== null) {
      message.startTimestamp = object.startTimestamp;
    } else {
      message.startTimestamp = "";
    }
    if (object.endTimestamp !== undefined && object.endTimestamp !== null) {
      message.endTimestamp = object.endTimestamp;
    } else {
      message.endTimestamp = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = 0;
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
