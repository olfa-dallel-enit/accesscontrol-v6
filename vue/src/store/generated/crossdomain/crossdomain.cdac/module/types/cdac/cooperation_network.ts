/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { DomainMap } from "../cdac/domain_map";
import { CooperationData } from "../cdac/cooperation_data";
import { CooperationNetworkFeatures } from "../cdac/cooperation_network_features";

export const protobufPackage = "crossdomain.cdac";

export interface CooperationNetwork {
  id: number;
  label: string;
  domainMapList: DomainMap[];
  cooperationDataList: CooperationData[];
  features: CooperationNetworkFeatures | undefined;
  creationTimestamp: string;
  updateTimestamp: string;
  creator: string;
}

const baseCooperationNetwork: object = {
  id: 0,
  label: "",
  creationTimestamp: "",
  updateTimestamp: "",
  creator: "",
};

export const CooperationNetwork = {
  encode(
    message: CooperationNetwork,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    for (const v of message.domainMapList) {
      DomainMap.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.cooperationDataList) {
      CooperationData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.features !== undefined) {
      CooperationNetworkFeatures.encode(
        message.features,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(50).string(message.creationTimestamp);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(58).string(message.updateTimestamp);
    }
    if (message.creator !== "") {
      writer.uint32(66).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CooperationNetwork {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCooperationNetwork } as CooperationNetwork;
    message.domainMapList = [];
    message.cooperationDataList = [];
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
          message.domainMapList.push(DomainMap.decode(reader, reader.uint32()));
          break;
        case 4:
          message.cooperationDataList.push(
            CooperationData.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.features = CooperationNetworkFeatures.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.creationTimestamp = reader.string();
          break;
        case 7:
          message.updateTimestamp = reader.string();
          break;
        case 8:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CooperationNetwork {
    const message = { ...baseCooperationNetwork } as CooperationNetwork;
    message.domainMapList = [];
    message.cooperationDataList = [];
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
    if (object.domainMapList !== undefined && object.domainMapList !== null) {
      for (const e of object.domainMapList) {
        message.domainMapList.push(DomainMap.fromJSON(e));
      }
    }
    if (
      object.cooperationDataList !== undefined &&
      object.cooperationDataList !== null
    ) {
      for (const e of object.cooperationDataList) {
        message.cooperationDataList.push(CooperationData.fromJSON(e));
      }
    }
    if (object.features !== undefined && object.features !== null) {
      message.features = CooperationNetworkFeatures.fromJSON(object.features);
    } else {
      message.features = undefined;
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

  toJSON(message: CooperationNetwork): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    if (message.domainMapList) {
      obj.domainMapList = message.domainMapList.map((e) =>
        e ? DomainMap.toJSON(e) : undefined
      );
    } else {
      obj.domainMapList = [];
    }
    if (message.cooperationDataList) {
      obj.cooperationDataList = message.cooperationDataList.map((e) =>
        e ? CooperationData.toJSON(e) : undefined
      );
    } else {
      obj.cooperationDataList = [];
    }
    message.features !== undefined &&
      (obj.features = message.features
        ? CooperationNetworkFeatures.toJSON(message.features)
        : undefined);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<CooperationNetwork>): CooperationNetwork {
    const message = { ...baseCooperationNetwork } as CooperationNetwork;
    message.domainMapList = [];
    message.cooperationDataList = [];
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
    if (object.domainMapList !== undefined && object.domainMapList !== null) {
      for (const e of object.domainMapList) {
        message.domainMapList.push(DomainMap.fromPartial(e));
      }
    }
    if (
      object.cooperationDataList !== undefined &&
      object.cooperationDataList !== null
    ) {
      for (const e of object.cooperationDataList) {
        message.cooperationDataList.push(CooperationData.fromPartial(e));
      }
    }
    if (object.features !== undefined && object.features !== null) {
      message.features = CooperationNetworkFeatures.fromPartial(
        object.features
      );
    } else {
      message.features = undefined;
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
