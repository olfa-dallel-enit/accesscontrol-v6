/* eslint-disable */
import { Domain } from "../cdac/domain";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.cdac";

export interface DomainMap {
  domainIndex: string;
  domainList: Domain | undefined;
  creator: string;
}

const baseDomainMap: object = { domainIndex: "", creator: "" };

export const DomainMap = {
  encode(message: DomainMap, writer: Writer = Writer.create()): Writer {
    if (message.domainIndex !== "") {
      writer.uint32(10).string(message.domainIndex);
    }
    if (message.domainList !== undefined) {
      Domain.encode(message.domainList, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DomainMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDomainMap } as DomainMap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domainIndex = reader.string();
          break;
        case 2:
          message.domainList = Domain.decode(reader, reader.uint32());
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DomainMap {
    const message = { ...baseDomainMap } as DomainMap;
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = String(object.domainIndex);
    } else {
      message.domainIndex = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      message.domainList = Domain.fromJSON(object.domainList);
    } else {
      message.domainList = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: DomainMap): unknown {
    const obj: any = {};
    message.domainIndex !== undefined &&
      (obj.domainIndex = message.domainIndex);
    message.domainList !== undefined &&
      (obj.domainList = message.domainList
        ? Domain.toJSON(message.domainList)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<DomainMap>): DomainMap {
    const message = { ...baseDomainMap } as DomainMap;
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = object.domainIndex;
    } else {
      message.domainIndex = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      message.domainList = Domain.fromPartial(object.domainList);
    } else {
      message.domainList = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
