/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../cdac/params";
import { PublicKey } from "../cdac/public_key";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Validity } from "../cdac/validity";
import { Certificate } from "../cdac/certificate";
import { IbcConnection } from "../cdac/ibc_connection";
import { Domain } from "../cdac/domain";
import { AuthenticationLog } from "../cdac/authentication_log";
import { DomainCooperation } from "../cdac/domain_cooperation";
import { CooperationLog } from "../cdac/cooperation_log";
import { ForwardPolicy } from "../cdac/forward_policy";
import { DomainMap } from "../cdac/domain_map";
import { CooperationNetworkFeatures } from "../cdac/cooperation_network_features";
import { CooperationData } from "../cdac/cooperation_data";
import { CooperationNetwork } from "../cdac/cooperation_network";
import { UpdatePolicy } from "../cdac/update_policy";
import { CooperativeDomain } from "../cdac/cooperative_domain";
import { DelegationPath } from "../cdac/delegation_path";
import { Path } from "../cdac/path";
import { TimeCalculation } from "../cdac/time_calculation";
import { CalculationTime } from "../cdac/calculation_time";
import { InterDomainAclPolicy } from "../cdac/inter_domain_acl_policy";

export const protobufPackage = "crossdomain.cdac";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPublicKeyRequest {
  id: number;
}

export interface QueryGetPublicKeyResponse {
  PublicKey: PublicKey | undefined;
}

export interface QueryAllPublicKeyRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPublicKeyResponse {
  PublicKey: PublicKey[];
  pagination: PageResponse | undefined;
}

export interface QueryGetValidityRequest {
  id: number;
}

export interface QueryGetValidityResponse {
  Validity: Validity | undefined;
}

export interface QueryAllValidityRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllValidityResponse {
  Validity: Validity[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCertificateRequest {
  id: number;
}

export interface QueryGetCertificateResponse {
  Certificate: Certificate | undefined;
}

export interface QueryAllCertificateRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCertificateResponse {
  Certificate: Certificate[];
  pagination: PageResponse | undefined;
}

export interface QueryGetIbcConnectionRequest {
  id: number;
}

export interface QueryGetIbcConnectionResponse {
  IbcConnection: IbcConnection | undefined;
}

export interface QueryAllIbcConnectionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllIbcConnectionResponse {
  IbcConnection: IbcConnection[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDomainRequest {
  id: number;
}

export interface QueryGetDomainResponse {
  Domain: Domain | undefined;
}

export interface QueryAllDomainRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDomainResponse {
  Domain: Domain[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAuthenticationLogRequest {
  id: number;
}

export interface QueryGetAuthenticationLogResponse {
  AuthenticationLog: AuthenticationLog | undefined;
}

export interface QueryAllAuthenticationLogRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAuthenticationLogResponse {
  AuthenticationLog: AuthenticationLog[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDomainCooperationRequest {
  id: number;
}

export interface QueryGetDomainCooperationResponse {
  DomainCooperation: DomainCooperation | undefined;
}

export interface QueryAllDomainCooperationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDomainCooperationResponse {
  DomainCooperation: DomainCooperation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCooperationLogRequest {
  id: number;
}

export interface QueryGetCooperationLogResponse {
  CooperationLog: CooperationLog | undefined;
}

export interface QueryAllCooperationLogRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCooperationLogResponse {
  CooperationLog: CooperationLog[];
  pagination: PageResponse | undefined;
}

export interface QueryCheckEstablishedCooperationByChannelRequest {
  channel: string;
}

export interface QueryCheckEstablishedCooperationByChannelResponse {
  label: string;
  found: boolean;
}

export interface QueryEstablishedCooperationByChannelRequest {
  channel: string;
}

export interface QueryEstablishedCooperationByChannelResponse {
  domainCooperation: DomainCooperation | undefined;
  found: boolean;
}

export interface QueryGetForwardPolicyRequest {
  id: number;
}

export interface QueryGetForwardPolicyResponse {
  ForwardPolicy: ForwardPolicy | undefined;
}

export interface QueryAllForwardPolicyRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllForwardPolicyResponse {
  ForwardPolicy: ForwardPolicy[];
  pagination: PageResponse | undefined;
}

export interface QueryRetrieveForwardPolicyRequest {}

export interface QueryRetrieveForwardPolicyResponse {
  forwardPolicy: ForwardPolicy | undefined;
}

export interface QueryGetDomainMapRequest {
  domainIndex: string;
}

export interface QueryGetDomainMapResponse {
  domainMap: DomainMap | undefined;
}

export interface QueryAllDomainMapRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDomainMapResponse {
  domainMap: DomainMap[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCooperationNetworkFeaturesRequest {
  id: number;
}

export interface QueryGetCooperationNetworkFeaturesResponse {
  CooperationNetworkFeatures: CooperationNetworkFeatures | undefined;
}

export interface QueryAllCooperationNetworkFeaturesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCooperationNetworkFeaturesResponse {
  CooperationNetworkFeatures: CooperationNetworkFeatures[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCooperationDataRequest {
  labelIndex: string;
}

export interface QueryGetCooperationDataResponse {
  cooperationData: CooperationData | undefined;
}

export interface QueryAllCooperationDataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCooperationDataResponse {
  cooperationData: CooperationData[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCooperationNetworkRequest {
  id: number;
}

export interface QueryGetCooperationNetworkResponse {
  CooperationNetwork: CooperationNetwork | undefined;
}

export interface QueryAllCooperationNetworkRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCooperationNetworkResponse {
  CooperationNetwork: CooperationNetwork[];
  pagination: PageResponse | undefined;
}

export interface QueryGetUpdatePolicyRequest {}

export interface QueryGetUpdatePolicyResponse {
  UpdatePolicy: UpdatePolicy | undefined;
}

export interface QueryGetCooperativeDomainRequest {
  id: number;
}

export interface QueryGetCooperativeDomainResponse {
  CooperativeDomain: CooperativeDomain | undefined;
}

export interface QueryAllCooperativeDomainRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCooperativeDomainResponse {
  CooperativeDomain: CooperativeDomain[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDelegationPathRequest {
  id: number;
}

export interface QueryGetDelegationPathResponse {
  DelegationPath: DelegationPath | undefined;
}

export interface QueryAllDelegationPathRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDelegationPathResponse {
  DelegationPath: DelegationPath[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPathRequest {
  id: number;
}

export interface QueryGetPathResponse {
  Path: Path | undefined;
}

export interface QueryAllPathRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPathResponse {
  Path: Path[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTimeCalculationRequest {
  id: number;
}

export interface QueryGetTimeCalculationResponse {
  TimeCalculation: TimeCalculation | undefined;
}

export interface QueryAllTimeCalculationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTimeCalculationResponse {
  TimeCalculation: TimeCalculation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCalculationTimeRequest {
  id: number;
}

export interface QueryGetCalculationTimeResponse {
  CalculationTime: CalculationTime | undefined;
}

export interface QueryAllCalculationTimeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCalculationTimeResponse {
  CalculationTime: CalculationTime[];
  pagination: PageResponse | undefined;
}

export interface QueryRequestAccessRequest {
  object: string;
  action: string;
}

export interface QueryRequestAccessResponse {
  decision: string;
}

export interface QueryGetInterDomainAclPolicyRequest {
  id: number;
}

export interface QueryGetInterDomainAclPolicyResponse {
  InterDomainAclPolicy: InterDomainAclPolicy | undefined;
}

export interface QueryAllInterDomainAclPolicyRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllInterDomainAclPolicyResponse {
  InterDomainAclPolicy: InterDomainAclPolicy[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetPublicKeyRequest: object = { id: 0 };

export const QueryGetPublicKeyRequest = {
  encode(
    message: QueryGetPublicKeyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPublicKeyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPublicKeyRequest,
    } as QueryGetPublicKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPublicKeyRequest {
    const message = {
      ...baseQueryGetPublicKeyRequest,
    } as QueryGetPublicKeyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPublicKeyRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPublicKeyRequest>
  ): QueryGetPublicKeyRequest {
    const message = {
      ...baseQueryGetPublicKeyRequest,
    } as QueryGetPublicKeyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPublicKeyResponse: object = {};

export const QueryGetPublicKeyResponse = {
  encode(
    message: QueryGetPublicKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.PublicKey !== undefined) {
      PublicKey.encode(message.PublicKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPublicKeyResponse,
    } as QueryGetPublicKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PublicKey = PublicKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPublicKeyResponse {
    const message = {
      ...baseQueryGetPublicKeyResponse,
    } as QueryGetPublicKeyResponse;
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      message.PublicKey = PublicKey.fromJSON(object.PublicKey);
    } else {
      message.PublicKey = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPublicKeyResponse): unknown {
    const obj: any = {};
    message.PublicKey !== undefined &&
      (obj.PublicKey = message.PublicKey
        ? PublicKey.toJSON(message.PublicKey)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPublicKeyResponse>
  ): QueryGetPublicKeyResponse {
    const message = {
      ...baseQueryGetPublicKeyResponse,
    } as QueryGetPublicKeyResponse;
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      message.PublicKey = PublicKey.fromPartial(object.PublicKey);
    } else {
      message.PublicKey = undefined;
    }
    return message;
  },
};

const baseQueryAllPublicKeyRequest: object = {};

export const QueryAllPublicKeyRequest = {
  encode(
    message: QueryAllPublicKeyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPublicKeyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPublicKeyRequest,
    } as QueryAllPublicKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPublicKeyRequest {
    const message = {
      ...baseQueryAllPublicKeyRequest,
    } as QueryAllPublicKeyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPublicKeyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPublicKeyRequest>
  ): QueryAllPublicKeyRequest {
    const message = {
      ...baseQueryAllPublicKeyRequest,
    } as QueryAllPublicKeyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPublicKeyResponse: object = {};

export const QueryAllPublicKeyResponse = {
  encode(
    message: QueryAllPublicKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.PublicKey) {
      PublicKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPublicKeyResponse,
    } as QueryAllPublicKeyResponse;
    message.PublicKey = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PublicKey.push(PublicKey.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPublicKeyResponse {
    const message = {
      ...baseQueryAllPublicKeyResponse,
    } as QueryAllPublicKeyResponse;
    message.PublicKey = [];
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      for (const e of object.PublicKey) {
        message.PublicKey.push(PublicKey.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPublicKeyResponse): unknown {
    const obj: any = {};
    if (message.PublicKey) {
      obj.PublicKey = message.PublicKey.map((e) =>
        e ? PublicKey.toJSON(e) : undefined
      );
    } else {
      obj.PublicKey = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPublicKeyResponse>
  ): QueryAllPublicKeyResponse {
    const message = {
      ...baseQueryAllPublicKeyResponse,
    } as QueryAllPublicKeyResponse;
    message.PublicKey = [];
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      for (const e of object.PublicKey) {
        message.PublicKey.push(PublicKey.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetValidityRequest: object = { id: 0 };

export const QueryGetValidityRequest = {
  encode(
    message: QueryGetValidityRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetValidityRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidityRequest,
    } as QueryGetValidityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidityRequest {
    const message = {
      ...baseQueryGetValidityRequest,
    } as QueryGetValidityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetValidityRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidityRequest>
  ): QueryGetValidityRequest {
    const message = {
      ...baseQueryGetValidityRequest,
    } as QueryGetValidityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetValidityResponse: object = {};

export const QueryGetValidityResponse = {
  encode(
    message: QueryGetValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Validity !== undefined) {
      Validity.encode(message.Validity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidityResponse,
    } as QueryGetValidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidityResponse {
    const message = {
      ...baseQueryGetValidityResponse,
    } as QueryGetValidityResponse;
    if (object.Validity !== undefined && object.Validity !== null) {
      message.Validity = Validity.fromJSON(object.Validity);
    } else {
      message.Validity = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetValidityResponse): unknown {
    const obj: any = {};
    message.Validity !== undefined &&
      (obj.Validity = message.Validity
        ? Validity.toJSON(message.Validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidityResponse>
  ): QueryGetValidityResponse {
    const message = {
      ...baseQueryGetValidityResponse,
    } as QueryGetValidityResponse;
    if (object.Validity !== undefined && object.Validity !== null) {
      message.Validity = Validity.fromPartial(object.Validity);
    } else {
      message.Validity = undefined;
    }
    return message;
  },
};

const baseQueryAllValidityRequest: object = {};

export const QueryAllValidityRequest = {
  encode(
    message: QueryAllValidityRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllValidityRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidityRequest,
    } as QueryAllValidityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidityRequest {
    const message = {
      ...baseQueryAllValidityRequest,
    } as QueryAllValidityRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidityRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidityRequest>
  ): QueryAllValidityRequest {
    const message = {
      ...baseQueryAllValidityRequest,
    } as QueryAllValidityRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllValidityResponse: object = {};

export const QueryAllValidityResponse = {
  encode(
    message: QueryAllValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Validity) {
      Validity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidityResponse,
    } as QueryAllValidityResponse;
    message.Validity = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Validity.push(Validity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidityResponse {
    const message = {
      ...baseQueryAllValidityResponse,
    } as QueryAllValidityResponse;
    message.Validity = [];
    if (object.Validity !== undefined && object.Validity !== null) {
      for (const e of object.Validity) {
        message.Validity.push(Validity.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidityResponse): unknown {
    const obj: any = {};
    if (message.Validity) {
      obj.Validity = message.Validity.map((e) =>
        e ? Validity.toJSON(e) : undefined
      );
    } else {
      obj.Validity = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidityResponse>
  ): QueryAllValidityResponse {
    const message = {
      ...baseQueryAllValidityResponse,
    } as QueryAllValidityResponse;
    message.Validity = [];
    if (object.Validity !== undefined && object.Validity !== null) {
      for (const e of object.Validity) {
        message.Validity.push(Validity.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCertificateRequest: object = { id: 0 };

export const QueryGetCertificateRequest = {
  encode(
    message: QueryGetCertificateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCertificateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCertificateRequest,
    } as QueryGetCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCertificateRequest {
    const message = {
      ...baseQueryGetCertificateRequest,
    } as QueryGetCertificateRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCertificateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCertificateRequest>
  ): QueryGetCertificateRequest {
    const message = {
      ...baseQueryGetCertificateRequest,
    } as QueryGetCertificateRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCertificateResponse: object = {};

export const QueryGetCertificateResponse = {
  encode(
    message: QueryGetCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Certificate !== undefined) {
      Certificate.encode(
        message.Certificate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCertificateResponse,
    } as QueryGetCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Certificate = Certificate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCertificateResponse {
    const message = {
      ...baseQueryGetCertificateResponse,
    } as QueryGetCertificateResponse;
    if (object.Certificate !== undefined && object.Certificate !== null) {
      message.Certificate = Certificate.fromJSON(object.Certificate);
    } else {
      message.Certificate = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCertificateResponse): unknown {
    const obj: any = {};
    message.Certificate !== undefined &&
      (obj.Certificate = message.Certificate
        ? Certificate.toJSON(message.Certificate)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCertificateResponse>
  ): QueryGetCertificateResponse {
    const message = {
      ...baseQueryGetCertificateResponse,
    } as QueryGetCertificateResponse;
    if (object.Certificate !== undefined && object.Certificate !== null) {
      message.Certificate = Certificate.fromPartial(object.Certificate);
    } else {
      message.Certificate = undefined;
    }
    return message;
  },
};

const baseQueryAllCertificateRequest: object = {};

export const QueryAllCertificateRequest = {
  encode(
    message: QueryAllCertificateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCertificateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCertificateRequest,
    } as QueryAllCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCertificateRequest {
    const message = {
      ...baseQueryAllCertificateRequest,
    } as QueryAllCertificateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCertificateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCertificateRequest>
  ): QueryAllCertificateRequest {
    const message = {
      ...baseQueryAllCertificateRequest,
    } as QueryAllCertificateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCertificateResponse: object = {};

export const QueryAllCertificateResponse = {
  encode(
    message: QueryAllCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Certificate) {
      Certificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCertificateResponse,
    } as QueryAllCertificateResponse;
    message.Certificate = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Certificate.push(Certificate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCertificateResponse {
    const message = {
      ...baseQueryAllCertificateResponse,
    } as QueryAllCertificateResponse;
    message.Certificate = [];
    if (object.Certificate !== undefined && object.Certificate !== null) {
      for (const e of object.Certificate) {
        message.Certificate.push(Certificate.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCertificateResponse): unknown {
    const obj: any = {};
    if (message.Certificate) {
      obj.Certificate = message.Certificate.map((e) =>
        e ? Certificate.toJSON(e) : undefined
      );
    } else {
      obj.Certificate = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCertificateResponse>
  ): QueryAllCertificateResponse {
    const message = {
      ...baseQueryAllCertificateResponse,
    } as QueryAllCertificateResponse;
    message.Certificate = [];
    if (object.Certificate !== undefined && object.Certificate !== null) {
      for (const e of object.Certificate) {
        message.Certificate.push(Certificate.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetIbcConnectionRequest: object = { id: 0 };

export const QueryGetIbcConnectionRequest = {
  encode(
    message: QueryGetIbcConnectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetIbcConnectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetIbcConnectionRequest,
    } as QueryGetIbcConnectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetIbcConnectionRequest {
    const message = {
      ...baseQueryGetIbcConnectionRequest,
    } as QueryGetIbcConnectionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetIbcConnectionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetIbcConnectionRequest>
  ): QueryGetIbcConnectionRequest {
    const message = {
      ...baseQueryGetIbcConnectionRequest,
    } as QueryGetIbcConnectionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetIbcConnectionResponse: object = {};

export const QueryGetIbcConnectionResponse = {
  encode(
    message: QueryGetIbcConnectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.IbcConnection !== undefined) {
      IbcConnection.encode(
        message.IbcConnection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetIbcConnectionResponse,
    } as QueryGetIbcConnectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IbcConnection = IbcConnection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetIbcConnectionResponse {
    const message = {
      ...baseQueryGetIbcConnectionResponse,
    } as QueryGetIbcConnectionResponse;
    if (object.IbcConnection !== undefined && object.IbcConnection !== null) {
      message.IbcConnection = IbcConnection.fromJSON(object.IbcConnection);
    } else {
      message.IbcConnection = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetIbcConnectionResponse): unknown {
    const obj: any = {};
    message.IbcConnection !== undefined &&
      (obj.IbcConnection = message.IbcConnection
        ? IbcConnection.toJSON(message.IbcConnection)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetIbcConnectionResponse>
  ): QueryGetIbcConnectionResponse {
    const message = {
      ...baseQueryGetIbcConnectionResponse,
    } as QueryGetIbcConnectionResponse;
    if (object.IbcConnection !== undefined && object.IbcConnection !== null) {
      message.IbcConnection = IbcConnection.fromPartial(object.IbcConnection);
    } else {
      message.IbcConnection = undefined;
    }
    return message;
  },
};

const baseQueryAllIbcConnectionRequest: object = {};

export const QueryAllIbcConnectionRequest = {
  encode(
    message: QueryAllIbcConnectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllIbcConnectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllIbcConnectionRequest,
    } as QueryAllIbcConnectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIbcConnectionRequest {
    const message = {
      ...baseQueryAllIbcConnectionRequest,
    } as QueryAllIbcConnectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllIbcConnectionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllIbcConnectionRequest>
  ): QueryAllIbcConnectionRequest {
    const message = {
      ...baseQueryAllIbcConnectionRequest,
    } as QueryAllIbcConnectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllIbcConnectionResponse: object = {};

export const QueryAllIbcConnectionResponse = {
  encode(
    message: QueryAllIbcConnectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.IbcConnection) {
      IbcConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllIbcConnectionResponse,
    } as QueryAllIbcConnectionResponse;
    message.IbcConnection = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IbcConnection.push(
            IbcConnection.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIbcConnectionResponse {
    const message = {
      ...baseQueryAllIbcConnectionResponse,
    } as QueryAllIbcConnectionResponse;
    message.IbcConnection = [];
    if (object.IbcConnection !== undefined && object.IbcConnection !== null) {
      for (const e of object.IbcConnection) {
        message.IbcConnection.push(IbcConnection.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllIbcConnectionResponse): unknown {
    const obj: any = {};
    if (message.IbcConnection) {
      obj.IbcConnection = message.IbcConnection.map((e) =>
        e ? IbcConnection.toJSON(e) : undefined
      );
    } else {
      obj.IbcConnection = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllIbcConnectionResponse>
  ): QueryAllIbcConnectionResponse {
    const message = {
      ...baseQueryAllIbcConnectionResponse,
    } as QueryAllIbcConnectionResponse;
    message.IbcConnection = [];
    if (object.IbcConnection !== undefined && object.IbcConnection !== null) {
      for (const e of object.IbcConnection) {
        message.IbcConnection.push(IbcConnection.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDomainRequest: object = { id: 0 };

export const QueryGetDomainRequest = {
  encode(
    message: QueryGetDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDomainRequest } as QueryGetDomainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainRequest {
    const message = { ...baseQueryGetDomainRequest } as QueryGetDomainRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDomainRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainRequest>
  ): QueryGetDomainRequest {
    const message = { ...baseQueryGetDomainRequest } as QueryGetDomainRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDomainResponse: object = {};

export const QueryGetDomainResponse = {
  encode(
    message: QueryGetDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Domain !== undefined) {
      Domain.encode(message.Domain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDomainResponse } as QueryGetDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Domain = Domain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainResponse {
    const message = { ...baseQueryGetDomainResponse } as QueryGetDomainResponse;
    if (object.Domain !== undefined && object.Domain !== null) {
      message.Domain = Domain.fromJSON(object.Domain);
    } else {
      message.Domain = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDomainResponse): unknown {
    const obj: any = {};
    message.Domain !== undefined &&
      (obj.Domain = message.Domain ? Domain.toJSON(message.Domain) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainResponse>
  ): QueryGetDomainResponse {
    const message = { ...baseQueryGetDomainResponse } as QueryGetDomainResponse;
    if (object.Domain !== undefined && object.Domain !== null) {
      message.Domain = Domain.fromPartial(object.Domain);
    } else {
      message.Domain = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainRequest: object = {};

export const QueryAllDomainRequest = {
  encode(
    message: QueryAllDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDomainRequest } as QueryAllDomainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainRequest {
    const message = { ...baseQueryAllDomainRequest } as QueryAllDomainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainRequest>
  ): QueryAllDomainRequest {
    const message = { ...baseQueryAllDomainRequest } as QueryAllDomainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainResponse: object = {};

export const QueryAllDomainResponse = {
  encode(
    message: QueryAllDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Domain) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDomainResponse } as QueryAllDomainResponse;
    message.Domain = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Domain.push(Domain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainResponse {
    const message = { ...baseQueryAllDomainResponse } as QueryAllDomainResponse;
    message.Domain = [];
    if (object.Domain !== undefined && object.Domain !== null) {
      for (const e of object.Domain) {
        message.Domain.push(Domain.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainResponse): unknown {
    const obj: any = {};
    if (message.Domain) {
      obj.Domain = message.Domain.map((e) =>
        e ? Domain.toJSON(e) : undefined
      );
    } else {
      obj.Domain = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainResponse>
  ): QueryAllDomainResponse {
    const message = { ...baseQueryAllDomainResponse } as QueryAllDomainResponse;
    message.Domain = [];
    if (object.Domain !== undefined && object.Domain !== null) {
      for (const e of object.Domain) {
        message.Domain.push(Domain.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAuthenticationLogRequest: object = { id: 0 };

export const QueryGetAuthenticationLogRequest = {
  encode(
    message: QueryGetAuthenticationLogRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuthenticationLogRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthenticationLogRequest,
    } as QueryGetAuthenticationLogRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuthenticationLogRequest {
    const message = {
      ...baseQueryGetAuthenticationLogRequest,
    } as QueryGetAuthenticationLogRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetAuthenticationLogRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuthenticationLogRequest>
  ): QueryGetAuthenticationLogRequest {
    const message = {
      ...baseQueryGetAuthenticationLogRequest,
    } as QueryGetAuthenticationLogRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetAuthenticationLogResponse: object = {};

export const QueryGetAuthenticationLogResponse = {
  encode(
    message: QueryGetAuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.AuthenticationLog !== undefined) {
      AuthenticationLog.encode(
        message.AuthenticationLog,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthenticationLogResponse,
    } as QueryGetAuthenticationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AuthenticationLog = AuthenticationLog.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuthenticationLogResponse {
    const message = {
      ...baseQueryGetAuthenticationLogResponse,
    } as QueryGetAuthenticationLogResponse;
    if (
      object.AuthenticationLog !== undefined &&
      object.AuthenticationLog !== null
    ) {
      message.AuthenticationLog = AuthenticationLog.fromJSON(
        object.AuthenticationLog
      );
    } else {
      message.AuthenticationLog = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAuthenticationLogResponse): unknown {
    const obj: any = {};
    message.AuthenticationLog !== undefined &&
      (obj.AuthenticationLog = message.AuthenticationLog
        ? AuthenticationLog.toJSON(message.AuthenticationLog)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuthenticationLogResponse>
  ): QueryGetAuthenticationLogResponse {
    const message = {
      ...baseQueryGetAuthenticationLogResponse,
    } as QueryGetAuthenticationLogResponse;
    if (
      object.AuthenticationLog !== undefined &&
      object.AuthenticationLog !== null
    ) {
      message.AuthenticationLog = AuthenticationLog.fromPartial(
        object.AuthenticationLog
      );
    } else {
      message.AuthenticationLog = undefined;
    }
    return message;
  },
};

const baseQueryAllAuthenticationLogRequest: object = {};

export const QueryAllAuthenticationLogRequest = {
  encode(
    message: QueryAllAuthenticationLogRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuthenticationLogRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuthenticationLogRequest,
    } as QueryAllAuthenticationLogRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuthenticationLogRequest {
    const message = {
      ...baseQueryAllAuthenticationLogRequest,
    } as QueryAllAuthenticationLogRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuthenticationLogRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuthenticationLogRequest>
  ): QueryAllAuthenticationLogRequest {
    const message = {
      ...baseQueryAllAuthenticationLogRequest,
    } as QueryAllAuthenticationLogRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAuthenticationLogResponse: object = {};

export const QueryAllAuthenticationLogResponse = {
  encode(
    message: QueryAllAuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.AuthenticationLog) {
      AuthenticationLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuthenticationLogResponse,
    } as QueryAllAuthenticationLogResponse;
    message.AuthenticationLog = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AuthenticationLog.push(
            AuthenticationLog.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuthenticationLogResponse {
    const message = {
      ...baseQueryAllAuthenticationLogResponse,
    } as QueryAllAuthenticationLogResponse;
    message.AuthenticationLog = [];
    if (
      object.AuthenticationLog !== undefined &&
      object.AuthenticationLog !== null
    ) {
      for (const e of object.AuthenticationLog) {
        message.AuthenticationLog.push(AuthenticationLog.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuthenticationLogResponse): unknown {
    const obj: any = {};
    if (message.AuthenticationLog) {
      obj.AuthenticationLog = message.AuthenticationLog.map((e) =>
        e ? AuthenticationLog.toJSON(e) : undefined
      );
    } else {
      obj.AuthenticationLog = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuthenticationLogResponse>
  ): QueryAllAuthenticationLogResponse {
    const message = {
      ...baseQueryAllAuthenticationLogResponse,
    } as QueryAllAuthenticationLogResponse;
    message.AuthenticationLog = [];
    if (
      object.AuthenticationLog !== undefined &&
      object.AuthenticationLog !== null
    ) {
      for (const e of object.AuthenticationLog) {
        message.AuthenticationLog.push(AuthenticationLog.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDomainCooperationRequest: object = { id: 0 };

export const QueryGetDomainCooperationRequest = {
  encode(
    message: QueryGetDomainCooperationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDomainCooperationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDomainCooperationRequest,
    } as QueryGetDomainCooperationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainCooperationRequest {
    const message = {
      ...baseQueryGetDomainCooperationRequest,
    } as QueryGetDomainCooperationRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDomainCooperationRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainCooperationRequest>
  ): QueryGetDomainCooperationRequest {
    const message = {
      ...baseQueryGetDomainCooperationRequest,
    } as QueryGetDomainCooperationRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDomainCooperationResponse: object = {};

export const QueryGetDomainCooperationResponse = {
  encode(
    message: QueryGetDomainCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.DomainCooperation !== undefined) {
      DomainCooperation.encode(
        message.DomainCooperation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDomainCooperationResponse,
    } as QueryGetDomainCooperationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DomainCooperation = DomainCooperation.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainCooperationResponse {
    const message = {
      ...baseQueryGetDomainCooperationResponse,
    } as QueryGetDomainCooperationResponse;
    if (
      object.DomainCooperation !== undefined &&
      object.DomainCooperation !== null
    ) {
      message.DomainCooperation = DomainCooperation.fromJSON(
        object.DomainCooperation
      );
    } else {
      message.DomainCooperation = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDomainCooperationResponse): unknown {
    const obj: any = {};
    message.DomainCooperation !== undefined &&
      (obj.DomainCooperation = message.DomainCooperation
        ? DomainCooperation.toJSON(message.DomainCooperation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainCooperationResponse>
  ): QueryGetDomainCooperationResponse {
    const message = {
      ...baseQueryGetDomainCooperationResponse,
    } as QueryGetDomainCooperationResponse;
    if (
      object.DomainCooperation !== undefined &&
      object.DomainCooperation !== null
    ) {
      message.DomainCooperation = DomainCooperation.fromPartial(
        object.DomainCooperation
      );
    } else {
      message.DomainCooperation = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainCooperationRequest: object = {};

export const QueryAllDomainCooperationRequest = {
  encode(
    message: QueryAllDomainCooperationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDomainCooperationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDomainCooperationRequest,
    } as QueryAllDomainCooperationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainCooperationRequest {
    const message = {
      ...baseQueryAllDomainCooperationRequest,
    } as QueryAllDomainCooperationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainCooperationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainCooperationRequest>
  ): QueryAllDomainCooperationRequest {
    const message = {
      ...baseQueryAllDomainCooperationRequest,
    } as QueryAllDomainCooperationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainCooperationResponse: object = {};

export const QueryAllDomainCooperationResponse = {
  encode(
    message: QueryAllDomainCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.DomainCooperation) {
      DomainCooperation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDomainCooperationResponse,
    } as QueryAllDomainCooperationResponse;
    message.DomainCooperation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DomainCooperation.push(
            DomainCooperation.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainCooperationResponse {
    const message = {
      ...baseQueryAllDomainCooperationResponse,
    } as QueryAllDomainCooperationResponse;
    message.DomainCooperation = [];
    if (
      object.DomainCooperation !== undefined &&
      object.DomainCooperation !== null
    ) {
      for (const e of object.DomainCooperation) {
        message.DomainCooperation.push(DomainCooperation.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainCooperationResponse): unknown {
    const obj: any = {};
    if (message.DomainCooperation) {
      obj.DomainCooperation = message.DomainCooperation.map((e) =>
        e ? DomainCooperation.toJSON(e) : undefined
      );
    } else {
      obj.DomainCooperation = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainCooperationResponse>
  ): QueryAllDomainCooperationResponse {
    const message = {
      ...baseQueryAllDomainCooperationResponse,
    } as QueryAllDomainCooperationResponse;
    message.DomainCooperation = [];
    if (
      object.DomainCooperation !== undefined &&
      object.DomainCooperation !== null
    ) {
      for (const e of object.DomainCooperation) {
        message.DomainCooperation.push(DomainCooperation.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCooperationLogRequest: object = { id: 0 };

export const QueryGetCooperationLogRequest = {
  encode(
    message: QueryGetCooperationLogRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationLogRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationLogRequest,
    } as QueryGetCooperationLogRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperationLogRequest {
    const message = {
      ...baseQueryGetCooperationLogRequest,
    } as QueryGetCooperationLogRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationLogRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationLogRequest>
  ): QueryGetCooperationLogRequest {
    const message = {
      ...baseQueryGetCooperationLogRequest,
    } as QueryGetCooperationLogRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCooperationLogResponse: object = {};

export const QueryGetCooperationLogResponse = {
  encode(
    message: QueryGetCooperationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CooperationLog !== undefined) {
      CooperationLog.encode(
        message.CooperationLog,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationLogResponse,
    } as QueryGetCooperationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperationLog = CooperationLog.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperationLogResponse {
    const message = {
      ...baseQueryGetCooperationLogResponse,
    } as QueryGetCooperationLogResponse;
    if (object.CooperationLog !== undefined && object.CooperationLog !== null) {
      message.CooperationLog = CooperationLog.fromJSON(object.CooperationLog);
    } else {
      message.CooperationLog = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationLogResponse): unknown {
    const obj: any = {};
    message.CooperationLog !== undefined &&
      (obj.CooperationLog = message.CooperationLog
        ? CooperationLog.toJSON(message.CooperationLog)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationLogResponse>
  ): QueryGetCooperationLogResponse {
    const message = {
      ...baseQueryGetCooperationLogResponse,
    } as QueryGetCooperationLogResponse;
    if (object.CooperationLog !== undefined && object.CooperationLog !== null) {
      message.CooperationLog = CooperationLog.fromPartial(
        object.CooperationLog
      );
    } else {
      message.CooperationLog = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationLogRequest: object = {};

export const QueryAllCooperationLogRequest = {
  encode(
    message: QueryAllCooperationLogRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationLogRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationLogRequest,
    } as QueryAllCooperationLogRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationLogRequest {
    const message = {
      ...baseQueryAllCooperationLogRequest,
    } as QueryAllCooperationLogRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationLogRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationLogRequest>
  ): QueryAllCooperationLogRequest {
    const message = {
      ...baseQueryAllCooperationLogRequest,
    } as QueryAllCooperationLogRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationLogResponse: object = {};

export const QueryAllCooperationLogResponse = {
  encode(
    message: QueryAllCooperationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CooperationLog) {
      CooperationLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationLogResponse,
    } as QueryAllCooperationLogResponse;
    message.CooperationLog = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperationLog.push(
            CooperationLog.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationLogResponse {
    const message = {
      ...baseQueryAllCooperationLogResponse,
    } as QueryAllCooperationLogResponse;
    message.CooperationLog = [];
    if (object.CooperationLog !== undefined && object.CooperationLog !== null) {
      for (const e of object.CooperationLog) {
        message.CooperationLog.push(CooperationLog.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationLogResponse): unknown {
    const obj: any = {};
    if (message.CooperationLog) {
      obj.CooperationLog = message.CooperationLog.map((e) =>
        e ? CooperationLog.toJSON(e) : undefined
      );
    } else {
      obj.CooperationLog = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationLogResponse>
  ): QueryAllCooperationLogResponse {
    const message = {
      ...baseQueryAllCooperationLogResponse,
    } as QueryAllCooperationLogResponse;
    message.CooperationLog = [];
    if (object.CooperationLog !== undefined && object.CooperationLog !== null) {
      for (const e of object.CooperationLog) {
        message.CooperationLog.push(CooperationLog.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCheckEstablishedCooperationByChannelRequest: object = {
  channel: "",
};

export const QueryCheckEstablishedCooperationByChannelRequest = {
  encode(
    message: QueryCheckEstablishedCooperationByChannelRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.channel !== "") {
      writer.uint32(10).string(message.channel);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCheckEstablishedCooperationByChannelRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCheckEstablishedCooperationByChannelRequest,
    } as QueryCheckEstablishedCooperationByChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckEstablishedCooperationByChannelRequest {
    const message = {
      ...baseQueryCheckEstablishedCooperationByChannelRequest,
    } as QueryCheckEstablishedCooperationByChannelRequest;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    return message;
  },

  toJSON(message: QueryCheckEstablishedCooperationByChannelRequest): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCheckEstablishedCooperationByChannelRequest>
  ): QueryCheckEstablishedCooperationByChannelRequest {
    const message = {
      ...baseQueryCheckEstablishedCooperationByChannelRequest,
    } as QueryCheckEstablishedCooperationByChannelRequest;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    return message;
  },
};

const baseQueryCheckEstablishedCooperationByChannelResponse: object = {
  label: "",
  found: false,
};

export const QueryCheckEstablishedCooperationByChannelResponse = {
  encode(
    message: QueryCheckEstablishedCooperationByChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.found === true) {
      writer.uint32(16).bool(message.found);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCheckEstablishedCooperationByChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCheckEstablishedCooperationByChannelResponse,
    } as QueryCheckEstablishedCooperationByChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.label = reader.string();
          break;
        case 2:
          message.found = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckEstablishedCooperationByChannelResponse {
    const message = {
      ...baseQueryCheckEstablishedCooperationByChannelResponse,
    } as QueryCheckEstablishedCooperationByChannelResponse;
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (object.found !== undefined && object.found !== null) {
      message.found = Boolean(object.found);
    } else {
      message.found = false;
    }
    return message;
  },

  toJSON(message: QueryCheckEstablishedCooperationByChannelResponse): unknown {
    const obj: any = {};
    message.label !== undefined && (obj.label = message.label);
    message.found !== undefined && (obj.found = message.found);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCheckEstablishedCooperationByChannelResponse>
  ): QueryCheckEstablishedCooperationByChannelResponse {
    const message = {
      ...baseQueryCheckEstablishedCooperationByChannelResponse,
    } as QueryCheckEstablishedCooperationByChannelResponse;
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (object.found !== undefined && object.found !== null) {
      message.found = object.found;
    } else {
      message.found = false;
    }
    return message;
  },
};

const baseQueryEstablishedCooperationByChannelRequest: object = { channel: "" };

export const QueryEstablishedCooperationByChannelRequest = {
  encode(
    message: QueryEstablishedCooperationByChannelRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.channel !== "") {
      writer.uint32(10).string(message.channel);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryEstablishedCooperationByChannelRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryEstablishedCooperationByChannelRequest,
    } as QueryEstablishedCooperationByChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEstablishedCooperationByChannelRequest {
    const message = {
      ...baseQueryEstablishedCooperationByChannelRequest,
    } as QueryEstablishedCooperationByChannelRequest;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    return message;
  },

  toJSON(message: QueryEstablishedCooperationByChannelRequest): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryEstablishedCooperationByChannelRequest>
  ): QueryEstablishedCooperationByChannelRequest {
    const message = {
      ...baseQueryEstablishedCooperationByChannelRequest,
    } as QueryEstablishedCooperationByChannelRequest;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    return message;
  },
};

const baseQueryEstablishedCooperationByChannelResponse: object = {
  found: false,
};

export const QueryEstablishedCooperationByChannelResponse = {
  encode(
    message: QueryEstablishedCooperationByChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.domainCooperation !== undefined) {
      DomainCooperation.encode(
        message.domainCooperation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.found === true) {
      writer.uint32(16).bool(message.found);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryEstablishedCooperationByChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryEstablishedCooperationByChannelResponse,
    } as QueryEstablishedCooperationByChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domainCooperation = DomainCooperation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.found = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEstablishedCooperationByChannelResponse {
    const message = {
      ...baseQueryEstablishedCooperationByChannelResponse,
    } as QueryEstablishedCooperationByChannelResponse;
    if (
      object.domainCooperation !== undefined &&
      object.domainCooperation !== null
    ) {
      message.domainCooperation = DomainCooperation.fromJSON(
        object.domainCooperation
      );
    } else {
      message.domainCooperation = undefined;
    }
    if (object.found !== undefined && object.found !== null) {
      message.found = Boolean(object.found);
    } else {
      message.found = false;
    }
    return message;
  },

  toJSON(message: QueryEstablishedCooperationByChannelResponse): unknown {
    const obj: any = {};
    message.domainCooperation !== undefined &&
      (obj.domainCooperation = message.domainCooperation
        ? DomainCooperation.toJSON(message.domainCooperation)
        : undefined);
    message.found !== undefined && (obj.found = message.found);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryEstablishedCooperationByChannelResponse>
  ): QueryEstablishedCooperationByChannelResponse {
    const message = {
      ...baseQueryEstablishedCooperationByChannelResponse,
    } as QueryEstablishedCooperationByChannelResponse;
    if (
      object.domainCooperation !== undefined &&
      object.domainCooperation !== null
    ) {
      message.domainCooperation = DomainCooperation.fromPartial(
        object.domainCooperation
      );
    } else {
      message.domainCooperation = undefined;
    }
    if (object.found !== undefined && object.found !== null) {
      message.found = object.found;
    } else {
      message.found = false;
    }
    return message;
  },
};

const baseQueryGetForwardPolicyRequest: object = { id: 0 };

export const QueryGetForwardPolicyRequest = {
  encode(
    message: QueryGetForwardPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetForwardPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetForwardPolicyRequest,
    } as QueryGetForwardPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetForwardPolicyRequest {
    const message = {
      ...baseQueryGetForwardPolicyRequest,
    } as QueryGetForwardPolicyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetForwardPolicyRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetForwardPolicyRequest>
  ): QueryGetForwardPolicyRequest {
    const message = {
      ...baseQueryGetForwardPolicyRequest,
    } as QueryGetForwardPolicyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetForwardPolicyResponse: object = {};

export const QueryGetForwardPolicyResponse = {
  encode(
    message: QueryGetForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ForwardPolicy !== undefined) {
      ForwardPolicy.encode(
        message.ForwardPolicy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetForwardPolicyResponse,
    } as QueryGetForwardPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ForwardPolicy = ForwardPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetForwardPolicyResponse {
    const message = {
      ...baseQueryGetForwardPolicyResponse,
    } as QueryGetForwardPolicyResponse;
    if (object.ForwardPolicy !== undefined && object.ForwardPolicy !== null) {
      message.ForwardPolicy = ForwardPolicy.fromJSON(object.ForwardPolicy);
    } else {
      message.ForwardPolicy = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetForwardPolicyResponse): unknown {
    const obj: any = {};
    message.ForwardPolicy !== undefined &&
      (obj.ForwardPolicy = message.ForwardPolicy
        ? ForwardPolicy.toJSON(message.ForwardPolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetForwardPolicyResponse>
  ): QueryGetForwardPolicyResponse {
    const message = {
      ...baseQueryGetForwardPolicyResponse,
    } as QueryGetForwardPolicyResponse;
    if (object.ForwardPolicy !== undefined && object.ForwardPolicy !== null) {
      message.ForwardPolicy = ForwardPolicy.fromPartial(object.ForwardPolicy);
    } else {
      message.ForwardPolicy = undefined;
    }
    return message;
  },
};

const baseQueryAllForwardPolicyRequest: object = {};

export const QueryAllForwardPolicyRequest = {
  encode(
    message: QueryAllForwardPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllForwardPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllForwardPolicyRequest,
    } as QueryAllForwardPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllForwardPolicyRequest {
    const message = {
      ...baseQueryAllForwardPolicyRequest,
    } as QueryAllForwardPolicyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllForwardPolicyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllForwardPolicyRequest>
  ): QueryAllForwardPolicyRequest {
    const message = {
      ...baseQueryAllForwardPolicyRequest,
    } as QueryAllForwardPolicyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllForwardPolicyResponse: object = {};

export const QueryAllForwardPolicyResponse = {
  encode(
    message: QueryAllForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ForwardPolicy) {
      ForwardPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllForwardPolicyResponse,
    } as QueryAllForwardPolicyResponse;
    message.ForwardPolicy = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ForwardPolicy.push(
            ForwardPolicy.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllForwardPolicyResponse {
    const message = {
      ...baseQueryAllForwardPolicyResponse,
    } as QueryAllForwardPolicyResponse;
    message.ForwardPolicy = [];
    if (object.ForwardPolicy !== undefined && object.ForwardPolicy !== null) {
      for (const e of object.ForwardPolicy) {
        message.ForwardPolicy.push(ForwardPolicy.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllForwardPolicyResponse): unknown {
    const obj: any = {};
    if (message.ForwardPolicy) {
      obj.ForwardPolicy = message.ForwardPolicy.map((e) =>
        e ? ForwardPolicy.toJSON(e) : undefined
      );
    } else {
      obj.ForwardPolicy = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllForwardPolicyResponse>
  ): QueryAllForwardPolicyResponse {
    const message = {
      ...baseQueryAllForwardPolicyResponse,
    } as QueryAllForwardPolicyResponse;
    message.ForwardPolicy = [];
    if (object.ForwardPolicy !== undefined && object.ForwardPolicy !== null) {
      for (const e of object.ForwardPolicy) {
        message.ForwardPolicy.push(ForwardPolicy.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryRetrieveForwardPolicyRequest: object = {};

export const QueryRetrieveForwardPolicyRequest = {
  encode(
    _: QueryRetrieveForwardPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRetrieveForwardPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRetrieveForwardPolicyRequest,
    } as QueryRetrieveForwardPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryRetrieveForwardPolicyRequest {
    const message = {
      ...baseQueryRetrieveForwardPolicyRequest,
    } as QueryRetrieveForwardPolicyRequest;
    return message;
  },

  toJSON(_: QueryRetrieveForwardPolicyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryRetrieveForwardPolicyRequest>
  ): QueryRetrieveForwardPolicyRequest {
    const message = {
      ...baseQueryRetrieveForwardPolicyRequest,
    } as QueryRetrieveForwardPolicyRequest;
    return message;
  },
};

const baseQueryRetrieveForwardPolicyResponse: object = {};

export const QueryRetrieveForwardPolicyResponse = {
  encode(
    message: QueryRetrieveForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.forwardPolicy !== undefined) {
      ForwardPolicy.encode(
        message.forwardPolicy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRetrieveForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRetrieveForwardPolicyResponse,
    } as QueryRetrieveForwardPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forwardPolicy = ForwardPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRetrieveForwardPolicyResponse {
    const message = {
      ...baseQueryRetrieveForwardPolicyResponse,
    } as QueryRetrieveForwardPolicyResponse;
    if (object.forwardPolicy !== undefined && object.forwardPolicy !== null) {
      message.forwardPolicy = ForwardPolicy.fromJSON(object.forwardPolicy);
    } else {
      message.forwardPolicy = undefined;
    }
    return message;
  },

  toJSON(message: QueryRetrieveForwardPolicyResponse): unknown {
    const obj: any = {};
    message.forwardPolicy !== undefined &&
      (obj.forwardPolicy = message.forwardPolicy
        ? ForwardPolicy.toJSON(message.forwardPolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRetrieveForwardPolicyResponse>
  ): QueryRetrieveForwardPolicyResponse {
    const message = {
      ...baseQueryRetrieveForwardPolicyResponse,
    } as QueryRetrieveForwardPolicyResponse;
    if (object.forwardPolicy !== undefined && object.forwardPolicy !== null) {
      message.forwardPolicy = ForwardPolicy.fromPartial(object.forwardPolicy);
    } else {
      message.forwardPolicy = undefined;
    }
    return message;
  },
};

const baseQueryGetDomainMapRequest: object = { domainIndex: "" };

export const QueryGetDomainMapRequest = {
  encode(
    message: QueryGetDomainMapRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.domainIndex !== "") {
      writer.uint32(10).string(message.domainIndex);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDomainMapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDomainMapRequest,
    } as QueryGetDomainMapRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domainIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainMapRequest {
    const message = {
      ...baseQueryGetDomainMapRequest,
    } as QueryGetDomainMapRequest;
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = String(object.domainIndex);
    } else {
      message.domainIndex = "";
    }
    return message;
  },

  toJSON(message: QueryGetDomainMapRequest): unknown {
    const obj: any = {};
    message.domainIndex !== undefined &&
      (obj.domainIndex = message.domainIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainMapRequest>
  ): QueryGetDomainMapRequest {
    const message = {
      ...baseQueryGetDomainMapRequest,
    } as QueryGetDomainMapRequest;
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = object.domainIndex;
    } else {
      message.domainIndex = "";
    }
    return message;
  },
};

const baseQueryGetDomainMapResponse: object = {};

export const QueryGetDomainMapResponse = {
  encode(
    message: QueryGetDomainMapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.domainMap !== undefined) {
      DomainMap.encode(message.domainMap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDomainMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDomainMapResponse,
    } as QueryGetDomainMapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domainMap = DomainMap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainMapResponse {
    const message = {
      ...baseQueryGetDomainMapResponse,
    } as QueryGetDomainMapResponse;
    if (object.domainMap !== undefined && object.domainMap !== null) {
      message.domainMap = DomainMap.fromJSON(object.domainMap);
    } else {
      message.domainMap = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDomainMapResponse): unknown {
    const obj: any = {};
    message.domainMap !== undefined &&
      (obj.domainMap = message.domainMap
        ? DomainMap.toJSON(message.domainMap)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainMapResponse>
  ): QueryGetDomainMapResponse {
    const message = {
      ...baseQueryGetDomainMapResponse,
    } as QueryGetDomainMapResponse;
    if (object.domainMap !== undefined && object.domainMap !== null) {
      message.domainMap = DomainMap.fromPartial(object.domainMap);
    } else {
      message.domainMap = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainMapRequest: object = {};

export const QueryAllDomainMapRequest = {
  encode(
    message: QueryAllDomainMapRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDomainMapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDomainMapRequest,
    } as QueryAllDomainMapRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainMapRequest {
    const message = {
      ...baseQueryAllDomainMapRequest,
    } as QueryAllDomainMapRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainMapRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainMapRequest>
  ): QueryAllDomainMapRequest {
    const message = {
      ...baseQueryAllDomainMapRequest,
    } as QueryAllDomainMapRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainMapResponse: object = {};

export const QueryAllDomainMapResponse = {
  encode(
    message: QueryAllDomainMapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.domainMap) {
      DomainMap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDomainMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDomainMapResponse,
    } as QueryAllDomainMapResponse;
    message.domainMap = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domainMap.push(DomainMap.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainMapResponse {
    const message = {
      ...baseQueryAllDomainMapResponse,
    } as QueryAllDomainMapResponse;
    message.domainMap = [];
    if (object.domainMap !== undefined && object.domainMap !== null) {
      for (const e of object.domainMap) {
        message.domainMap.push(DomainMap.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainMapResponse): unknown {
    const obj: any = {};
    if (message.domainMap) {
      obj.domainMap = message.domainMap.map((e) =>
        e ? DomainMap.toJSON(e) : undefined
      );
    } else {
      obj.domainMap = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainMapResponse>
  ): QueryAllDomainMapResponse {
    const message = {
      ...baseQueryAllDomainMapResponse,
    } as QueryAllDomainMapResponse;
    message.domainMap = [];
    if (object.domainMap !== undefined && object.domainMap !== null) {
      for (const e of object.domainMap) {
        message.domainMap.push(DomainMap.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCooperationNetworkFeaturesRequest: object = { id: 0 };

export const QueryGetCooperationNetworkFeaturesRequest = {
  encode(
    message: QueryGetCooperationNetworkFeaturesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationNetworkFeaturesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesRequest,
    } as QueryGetCooperationNetworkFeaturesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperationNetworkFeaturesRequest {
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesRequest,
    } as QueryGetCooperationNetworkFeaturesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationNetworkFeaturesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationNetworkFeaturesRequest>
  ): QueryGetCooperationNetworkFeaturesRequest {
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesRequest,
    } as QueryGetCooperationNetworkFeaturesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCooperationNetworkFeaturesResponse: object = {};

export const QueryGetCooperationNetworkFeaturesResponse = {
  encode(
    message: QueryGetCooperationNetworkFeaturesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CooperationNetworkFeatures !== undefined) {
      CooperationNetworkFeatures.encode(
        message.CooperationNetworkFeatures,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationNetworkFeaturesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesResponse,
    } as QueryGetCooperationNetworkFeaturesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperationNetworkFeatures = CooperationNetworkFeatures.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperationNetworkFeaturesResponse {
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesResponse,
    } as QueryGetCooperationNetworkFeaturesResponse;
    if (
      object.CooperationNetworkFeatures !== undefined &&
      object.CooperationNetworkFeatures !== null
    ) {
      message.CooperationNetworkFeatures = CooperationNetworkFeatures.fromJSON(
        object.CooperationNetworkFeatures
      );
    } else {
      message.CooperationNetworkFeatures = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationNetworkFeaturesResponse): unknown {
    const obj: any = {};
    message.CooperationNetworkFeatures !== undefined &&
      (obj.CooperationNetworkFeatures = message.CooperationNetworkFeatures
        ? CooperationNetworkFeatures.toJSON(message.CooperationNetworkFeatures)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationNetworkFeaturesResponse>
  ): QueryGetCooperationNetworkFeaturesResponse {
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesResponse,
    } as QueryGetCooperationNetworkFeaturesResponse;
    if (
      object.CooperationNetworkFeatures !== undefined &&
      object.CooperationNetworkFeatures !== null
    ) {
      message.CooperationNetworkFeatures = CooperationNetworkFeatures.fromPartial(
        object.CooperationNetworkFeatures
      );
    } else {
      message.CooperationNetworkFeatures = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationNetworkFeaturesRequest: object = {};

export const QueryAllCooperationNetworkFeaturesRequest = {
  encode(
    message: QueryAllCooperationNetworkFeaturesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationNetworkFeaturesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationNetworkFeaturesRequest,
    } as QueryAllCooperationNetworkFeaturesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationNetworkFeaturesRequest {
    const message = {
      ...baseQueryAllCooperationNetworkFeaturesRequest,
    } as QueryAllCooperationNetworkFeaturesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationNetworkFeaturesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationNetworkFeaturesRequest>
  ): QueryAllCooperationNetworkFeaturesRequest {
    const message = {
      ...baseQueryAllCooperationNetworkFeaturesRequest,
    } as QueryAllCooperationNetworkFeaturesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationNetworkFeaturesResponse: object = {};

export const QueryAllCooperationNetworkFeaturesResponse = {
  encode(
    message: QueryAllCooperationNetworkFeaturesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CooperationNetworkFeatures) {
      CooperationNetworkFeatures.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationNetworkFeaturesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationNetworkFeaturesResponse,
    } as QueryAllCooperationNetworkFeaturesResponse;
    message.CooperationNetworkFeatures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperationNetworkFeatures.push(
            CooperationNetworkFeatures.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationNetworkFeaturesResponse {
    const message = {
      ...baseQueryAllCooperationNetworkFeaturesResponse,
    } as QueryAllCooperationNetworkFeaturesResponse;
    message.CooperationNetworkFeatures = [];
    if (
      object.CooperationNetworkFeatures !== undefined &&
      object.CooperationNetworkFeatures !== null
    ) {
      for (const e of object.CooperationNetworkFeatures) {
        message.CooperationNetworkFeatures.push(
          CooperationNetworkFeatures.fromJSON(e)
        );
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationNetworkFeaturesResponse): unknown {
    const obj: any = {};
    if (message.CooperationNetworkFeatures) {
      obj.CooperationNetworkFeatures = message.CooperationNetworkFeatures.map(
        (e) => (e ? CooperationNetworkFeatures.toJSON(e) : undefined)
      );
    } else {
      obj.CooperationNetworkFeatures = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationNetworkFeaturesResponse>
  ): QueryAllCooperationNetworkFeaturesResponse {
    const message = {
      ...baseQueryAllCooperationNetworkFeaturesResponse,
    } as QueryAllCooperationNetworkFeaturesResponse;
    message.CooperationNetworkFeatures = [];
    if (
      object.CooperationNetworkFeatures !== undefined &&
      object.CooperationNetworkFeatures !== null
    ) {
      for (const e of object.CooperationNetworkFeatures) {
        message.CooperationNetworkFeatures.push(
          CooperationNetworkFeatures.fromPartial(e)
        );
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCooperationDataRequest: object = { labelIndex: "" };

export const QueryGetCooperationDataRequest = {
  encode(
    message: QueryGetCooperationDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.labelIndex !== "") {
      writer.uint32(10).string(message.labelIndex);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationDataRequest,
    } as QueryGetCooperationDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.labelIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperationDataRequest {
    const message = {
      ...baseQueryGetCooperationDataRequest,
    } as QueryGetCooperationDataRequest;
    if (object.labelIndex !== undefined && object.labelIndex !== null) {
      message.labelIndex = String(object.labelIndex);
    } else {
      message.labelIndex = "";
    }
    return message;
  },

  toJSON(message: QueryGetCooperationDataRequest): unknown {
    const obj: any = {};
    message.labelIndex !== undefined && (obj.labelIndex = message.labelIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationDataRequest>
  ): QueryGetCooperationDataRequest {
    const message = {
      ...baseQueryGetCooperationDataRequest,
    } as QueryGetCooperationDataRequest;
    if (object.labelIndex !== undefined && object.labelIndex !== null) {
      message.labelIndex = object.labelIndex;
    } else {
      message.labelIndex = "";
    }
    return message;
  },
};

const baseQueryGetCooperationDataResponse: object = {};

export const QueryGetCooperationDataResponse = {
  encode(
    message: QueryGetCooperationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cooperationData !== undefined) {
      CooperationData.encode(
        message.cooperationData,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationDataResponse,
    } as QueryGetCooperationDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cooperationData = CooperationData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperationDataResponse {
    const message = {
      ...baseQueryGetCooperationDataResponse,
    } as QueryGetCooperationDataResponse;
    if (
      object.cooperationData !== undefined &&
      object.cooperationData !== null
    ) {
      message.cooperationData = CooperationData.fromJSON(
        object.cooperationData
      );
    } else {
      message.cooperationData = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationDataResponse): unknown {
    const obj: any = {};
    message.cooperationData !== undefined &&
      (obj.cooperationData = message.cooperationData
        ? CooperationData.toJSON(message.cooperationData)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationDataResponse>
  ): QueryGetCooperationDataResponse {
    const message = {
      ...baseQueryGetCooperationDataResponse,
    } as QueryGetCooperationDataResponse;
    if (
      object.cooperationData !== undefined &&
      object.cooperationData !== null
    ) {
      message.cooperationData = CooperationData.fromPartial(
        object.cooperationData
      );
    } else {
      message.cooperationData = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationDataRequest: object = {};

export const QueryAllCooperationDataRequest = {
  encode(
    message: QueryAllCooperationDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationDataRequest,
    } as QueryAllCooperationDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationDataRequest {
    const message = {
      ...baseQueryAllCooperationDataRequest,
    } as QueryAllCooperationDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationDataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationDataRequest>
  ): QueryAllCooperationDataRequest {
    const message = {
      ...baseQueryAllCooperationDataRequest,
    } as QueryAllCooperationDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationDataResponse: object = {};

export const QueryAllCooperationDataResponse = {
  encode(
    message: QueryAllCooperationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.cooperationData) {
      CooperationData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationDataResponse,
    } as QueryAllCooperationDataResponse;
    message.cooperationData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cooperationData.push(
            CooperationData.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationDataResponse {
    const message = {
      ...baseQueryAllCooperationDataResponse,
    } as QueryAllCooperationDataResponse;
    message.cooperationData = [];
    if (
      object.cooperationData !== undefined &&
      object.cooperationData !== null
    ) {
      for (const e of object.cooperationData) {
        message.cooperationData.push(CooperationData.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationDataResponse): unknown {
    const obj: any = {};
    if (message.cooperationData) {
      obj.cooperationData = message.cooperationData.map((e) =>
        e ? CooperationData.toJSON(e) : undefined
      );
    } else {
      obj.cooperationData = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationDataResponse>
  ): QueryAllCooperationDataResponse {
    const message = {
      ...baseQueryAllCooperationDataResponse,
    } as QueryAllCooperationDataResponse;
    message.cooperationData = [];
    if (
      object.cooperationData !== undefined &&
      object.cooperationData !== null
    ) {
      for (const e of object.cooperationData) {
        message.cooperationData.push(CooperationData.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCooperationNetworkRequest: object = { id: 0 };

export const QueryGetCooperationNetworkRequest = {
  encode(
    message: QueryGetCooperationNetworkRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationNetworkRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationNetworkRequest,
    } as QueryGetCooperationNetworkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperationNetworkRequest {
    const message = {
      ...baseQueryGetCooperationNetworkRequest,
    } as QueryGetCooperationNetworkRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationNetworkRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationNetworkRequest>
  ): QueryGetCooperationNetworkRequest {
    const message = {
      ...baseQueryGetCooperationNetworkRequest,
    } as QueryGetCooperationNetworkRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCooperationNetworkResponse: object = {};

export const QueryGetCooperationNetworkResponse = {
  encode(
    message: QueryGetCooperationNetworkResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CooperationNetwork !== undefined) {
      CooperationNetwork.encode(
        message.CooperationNetwork,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationNetworkResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationNetworkResponse,
    } as QueryGetCooperationNetworkResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperationNetwork = CooperationNetwork.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperationNetworkResponse {
    const message = {
      ...baseQueryGetCooperationNetworkResponse,
    } as QueryGetCooperationNetworkResponse;
    if (
      object.CooperationNetwork !== undefined &&
      object.CooperationNetwork !== null
    ) {
      message.CooperationNetwork = CooperationNetwork.fromJSON(
        object.CooperationNetwork
      );
    } else {
      message.CooperationNetwork = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationNetworkResponse): unknown {
    const obj: any = {};
    message.CooperationNetwork !== undefined &&
      (obj.CooperationNetwork = message.CooperationNetwork
        ? CooperationNetwork.toJSON(message.CooperationNetwork)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationNetworkResponse>
  ): QueryGetCooperationNetworkResponse {
    const message = {
      ...baseQueryGetCooperationNetworkResponse,
    } as QueryGetCooperationNetworkResponse;
    if (
      object.CooperationNetwork !== undefined &&
      object.CooperationNetwork !== null
    ) {
      message.CooperationNetwork = CooperationNetwork.fromPartial(
        object.CooperationNetwork
      );
    } else {
      message.CooperationNetwork = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationNetworkRequest: object = {};

export const QueryAllCooperationNetworkRequest = {
  encode(
    message: QueryAllCooperationNetworkRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationNetworkRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationNetworkRequest,
    } as QueryAllCooperationNetworkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationNetworkRequest {
    const message = {
      ...baseQueryAllCooperationNetworkRequest,
    } as QueryAllCooperationNetworkRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationNetworkRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationNetworkRequest>
  ): QueryAllCooperationNetworkRequest {
    const message = {
      ...baseQueryAllCooperationNetworkRequest,
    } as QueryAllCooperationNetworkRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationNetworkResponse: object = {};

export const QueryAllCooperationNetworkResponse = {
  encode(
    message: QueryAllCooperationNetworkResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CooperationNetwork) {
      CooperationNetwork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationNetworkResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationNetworkResponse,
    } as QueryAllCooperationNetworkResponse;
    message.CooperationNetwork = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperationNetwork.push(
            CooperationNetwork.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationNetworkResponse {
    const message = {
      ...baseQueryAllCooperationNetworkResponse,
    } as QueryAllCooperationNetworkResponse;
    message.CooperationNetwork = [];
    if (
      object.CooperationNetwork !== undefined &&
      object.CooperationNetwork !== null
    ) {
      for (const e of object.CooperationNetwork) {
        message.CooperationNetwork.push(CooperationNetwork.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationNetworkResponse): unknown {
    const obj: any = {};
    if (message.CooperationNetwork) {
      obj.CooperationNetwork = message.CooperationNetwork.map((e) =>
        e ? CooperationNetwork.toJSON(e) : undefined
      );
    } else {
      obj.CooperationNetwork = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationNetworkResponse>
  ): QueryAllCooperationNetworkResponse {
    const message = {
      ...baseQueryAllCooperationNetworkResponse,
    } as QueryAllCooperationNetworkResponse;
    message.CooperationNetwork = [];
    if (
      object.CooperationNetwork !== undefined &&
      object.CooperationNetwork !== null
    ) {
      for (const e of object.CooperationNetwork) {
        message.CooperationNetwork.push(CooperationNetwork.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetUpdatePolicyRequest: object = {};

export const QueryGetUpdatePolicyRequest = {
  encode(
    _: QueryGetUpdatePolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetUpdatePolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUpdatePolicyRequest,
    } as QueryGetUpdatePolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetUpdatePolicyRequest {
    const message = {
      ...baseQueryGetUpdatePolicyRequest,
    } as QueryGetUpdatePolicyRequest;
    return message;
  },

  toJSON(_: QueryGetUpdatePolicyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetUpdatePolicyRequest>
  ): QueryGetUpdatePolicyRequest {
    const message = {
      ...baseQueryGetUpdatePolicyRequest,
    } as QueryGetUpdatePolicyRequest;
    return message;
  },
};

const baseQueryGetUpdatePolicyResponse: object = {};

export const QueryGetUpdatePolicyResponse = {
  encode(
    message: QueryGetUpdatePolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.UpdatePolicy !== undefined) {
      UpdatePolicy.encode(
        message.UpdatePolicy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetUpdatePolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUpdatePolicyResponse,
    } as QueryGetUpdatePolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UpdatePolicy = UpdatePolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUpdatePolicyResponse {
    const message = {
      ...baseQueryGetUpdatePolicyResponse,
    } as QueryGetUpdatePolicyResponse;
    if (object.UpdatePolicy !== undefined && object.UpdatePolicy !== null) {
      message.UpdatePolicy = UpdatePolicy.fromJSON(object.UpdatePolicy);
    } else {
      message.UpdatePolicy = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUpdatePolicyResponse): unknown {
    const obj: any = {};
    message.UpdatePolicy !== undefined &&
      (obj.UpdatePolicy = message.UpdatePolicy
        ? UpdatePolicy.toJSON(message.UpdatePolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUpdatePolicyResponse>
  ): QueryGetUpdatePolicyResponse {
    const message = {
      ...baseQueryGetUpdatePolicyResponse,
    } as QueryGetUpdatePolicyResponse;
    if (object.UpdatePolicy !== undefined && object.UpdatePolicy !== null) {
      message.UpdatePolicy = UpdatePolicy.fromPartial(object.UpdatePolicy);
    } else {
      message.UpdatePolicy = undefined;
    }
    return message;
  },
};

const baseQueryGetCooperativeDomainRequest: object = { id: 0 };

export const QueryGetCooperativeDomainRequest = {
  encode(
    message: QueryGetCooperativeDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperativeDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperativeDomainRequest,
    } as QueryGetCooperativeDomainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperativeDomainRequest {
    const message = {
      ...baseQueryGetCooperativeDomainRequest,
    } as QueryGetCooperativeDomainRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCooperativeDomainRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperativeDomainRequest>
  ): QueryGetCooperativeDomainRequest {
    const message = {
      ...baseQueryGetCooperativeDomainRequest,
    } as QueryGetCooperativeDomainRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCooperativeDomainResponse: object = {};

export const QueryGetCooperativeDomainResponse = {
  encode(
    message: QueryGetCooperativeDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CooperativeDomain !== undefined) {
      CooperativeDomain.encode(
        message.CooperativeDomain,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperativeDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperativeDomainResponse,
    } as QueryGetCooperativeDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperativeDomain = CooperativeDomain.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperativeDomainResponse {
    const message = {
      ...baseQueryGetCooperativeDomainResponse,
    } as QueryGetCooperativeDomainResponse;
    if (
      object.CooperativeDomain !== undefined &&
      object.CooperativeDomain !== null
    ) {
      message.CooperativeDomain = CooperativeDomain.fromJSON(
        object.CooperativeDomain
      );
    } else {
      message.CooperativeDomain = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCooperativeDomainResponse): unknown {
    const obj: any = {};
    message.CooperativeDomain !== undefined &&
      (obj.CooperativeDomain = message.CooperativeDomain
        ? CooperativeDomain.toJSON(message.CooperativeDomain)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperativeDomainResponse>
  ): QueryGetCooperativeDomainResponse {
    const message = {
      ...baseQueryGetCooperativeDomainResponse,
    } as QueryGetCooperativeDomainResponse;
    if (
      object.CooperativeDomain !== undefined &&
      object.CooperativeDomain !== null
    ) {
      message.CooperativeDomain = CooperativeDomain.fromPartial(
        object.CooperativeDomain
      );
    } else {
      message.CooperativeDomain = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperativeDomainRequest: object = {};

export const QueryAllCooperativeDomainRequest = {
  encode(
    message: QueryAllCooperativeDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperativeDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperativeDomainRequest,
    } as QueryAllCooperativeDomainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperativeDomainRequest {
    const message = {
      ...baseQueryAllCooperativeDomainRequest,
    } as QueryAllCooperativeDomainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperativeDomainRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperativeDomainRequest>
  ): QueryAllCooperativeDomainRequest {
    const message = {
      ...baseQueryAllCooperativeDomainRequest,
    } as QueryAllCooperativeDomainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperativeDomainResponse: object = {};

export const QueryAllCooperativeDomainResponse = {
  encode(
    message: QueryAllCooperativeDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CooperativeDomain) {
      CooperativeDomain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperativeDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperativeDomainResponse,
    } as QueryAllCooperativeDomainResponse;
    message.CooperativeDomain = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperativeDomain.push(
            CooperativeDomain.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperativeDomainResponse {
    const message = {
      ...baseQueryAllCooperativeDomainResponse,
    } as QueryAllCooperativeDomainResponse;
    message.CooperativeDomain = [];
    if (
      object.CooperativeDomain !== undefined &&
      object.CooperativeDomain !== null
    ) {
      for (const e of object.CooperativeDomain) {
        message.CooperativeDomain.push(CooperativeDomain.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperativeDomainResponse): unknown {
    const obj: any = {};
    if (message.CooperativeDomain) {
      obj.CooperativeDomain = message.CooperativeDomain.map((e) =>
        e ? CooperativeDomain.toJSON(e) : undefined
      );
    } else {
      obj.CooperativeDomain = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperativeDomainResponse>
  ): QueryAllCooperativeDomainResponse {
    const message = {
      ...baseQueryAllCooperativeDomainResponse,
    } as QueryAllCooperativeDomainResponse;
    message.CooperativeDomain = [];
    if (
      object.CooperativeDomain !== undefined &&
      object.CooperativeDomain !== null
    ) {
      for (const e of object.CooperativeDomain) {
        message.CooperativeDomain.push(CooperativeDomain.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDelegationPathRequest: object = { id: 0 };

export const QueryGetDelegationPathRequest = {
  encode(
    message: QueryGetDelegationPathRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDelegationPathRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDelegationPathRequest,
    } as QueryGetDelegationPathRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDelegationPathRequest {
    const message = {
      ...baseQueryGetDelegationPathRequest,
    } as QueryGetDelegationPathRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDelegationPathRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDelegationPathRequest>
  ): QueryGetDelegationPathRequest {
    const message = {
      ...baseQueryGetDelegationPathRequest,
    } as QueryGetDelegationPathRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDelegationPathResponse: object = {};

export const QueryGetDelegationPathResponse = {
  encode(
    message: QueryGetDelegationPathResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.DelegationPath !== undefined) {
      DelegationPath.encode(
        message.DelegationPath,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDelegationPathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDelegationPathResponse,
    } as QueryGetDelegationPathResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DelegationPath = DelegationPath.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDelegationPathResponse {
    const message = {
      ...baseQueryGetDelegationPathResponse,
    } as QueryGetDelegationPathResponse;
    if (object.DelegationPath !== undefined && object.DelegationPath !== null) {
      message.DelegationPath = DelegationPath.fromJSON(object.DelegationPath);
    } else {
      message.DelegationPath = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDelegationPathResponse): unknown {
    const obj: any = {};
    message.DelegationPath !== undefined &&
      (obj.DelegationPath = message.DelegationPath
        ? DelegationPath.toJSON(message.DelegationPath)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDelegationPathResponse>
  ): QueryGetDelegationPathResponse {
    const message = {
      ...baseQueryGetDelegationPathResponse,
    } as QueryGetDelegationPathResponse;
    if (object.DelegationPath !== undefined && object.DelegationPath !== null) {
      message.DelegationPath = DelegationPath.fromPartial(
        object.DelegationPath
      );
    } else {
      message.DelegationPath = undefined;
    }
    return message;
  },
};

const baseQueryAllDelegationPathRequest: object = {};

export const QueryAllDelegationPathRequest = {
  encode(
    message: QueryAllDelegationPathRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDelegationPathRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDelegationPathRequest,
    } as QueryAllDelegationPathRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDelegationPathRequest {
    const message = {
      ...baseQueryAllDelegationPathRequest,
    } as QueryAllDelegationPathRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDelegationPathRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDelegationPathRequest>
  ): QueryAllDelegationPathRequest {
    const message = {
      ...baseQueryAllDelegationPathRequest,
    } as QueryAllDelegationPathRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDelegationPathResponse: object = {};

export const QueryAllDelegationPathResponse = {
  encode(
    message: QueryAllDelegationPathResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.DelegationPath) {
      DelegationPath.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDelegationPathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDelegationPathResponse,
    } as QueryAllDelegationPathResponse;
    message.DelegationPath = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DelegationPath.push(
            DelegationPath.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDelegationPathResponse {
    const message = {
      ...baseQueryAllDelegationPathResponse,
    } as QueryAllDelegationPathResponse;
    message.DelegationPath = [];
    if (object.DelegationPath !== undefined && object.DelegationPath !== null) {
      for (const e of object.DelegationPath) {
        message.DelegationPath.push(DelegationPath.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDelegationPathResponse): unknown {
    const obj: any = {};
    if (message.DelegationPath) {
      obj.DelegationPath = message.DelegationPath.map((e) =>
        e ? DelegationPath.toJSON(e) : undefined
      );
    } else {
      obj.DelegationPath = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDelegationPathResponse>
  ): QueryAllDelegationPathResponse {
    const message = {
      ...baseQueryAllDelegationPathResponse,
    } as QueryAllDelegationPathResponse;
    message.DelegationPath = [];
    if (object.DelegationPath !== undefined && object.DelegationPath !== null) {
      for (const e of object.DelegationPath) {
        message.DelegationPath.push(DelegationPath.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPathRequest: object = { id: 0 };

export const QueryGetPathRequest = {
  encode(
    message: QueryGetPathRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPathRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPathRequest } as QueryGetPathRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPathRequest {
    const message = { ...baseQueryGetPathRequest } as QueryGetPathRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPathRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPathRequest>): QueryGetPathRequest {
    const message = { ...baseQueryGetPathRequest } as QueryGetPathRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPathResponse: object = {};

export const QueryGetPathResponse = {
  encode(
    message: QueryGetPathResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Path !== undefined) {
      Path.encode(message.Path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPathResponse } as QueryGetPathResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Path = Path.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPathResponse {
    const message = { ...baseQueryGetPathResponse } as QueryGetPathResponse;
    if (object.Path !== undefined && object.Path !== null) {
      message.Path = Path.fromJSON(object.Path);
    } else {
      message.Path = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPathResponse): unknown {
    const obj: any = {};
    message.Path !== undefined &&
      (obj.Path = message.Path ? Path.toJSON(message.Path) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPathResponse>): QueryGetPathResponse {
    const message = { ...baseQueryGetPathResponse } as QueryGetPathResponse;
    if (object.Path !== undefined && object.Path !== null) {
      message.Path = Path.fromPartial(object.Path);
    } else {
      message.Path = undefined;
    }
    return message;
  },
};

const baseQueryAllPathRequest: object = {};

export const QueryAllPathRequest = {
  encode(
    message: QueryAllPathRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPathRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPathRequest } as QueryAllPathRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPathRequest {
    const message = { ...baseQueryAllPathRequest } as QueryAllPathRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPathRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPathRequest>): QueryAllPathRequest {
    const message = { ...baseQueryAllPathRequest } as QueryAllPathRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPathResponse: object = {};

export const QueryAllPathResponse = {
  encode(
    message: QueryAllPathResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Path) {
      Path.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPathResponse } as QueryAllPathResponse;
    message.Path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Path.push(Path.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPathResponse {
    const message = { ...baseQueryAllPathResponse } as QueryAllPathResponse;
    message.Path = [];
    if (object.Path !== undefined && object.Path !== null) {
      for (const e of object.Path) {
        message.Path.push(Path.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPathResponse): unknown {
    const obj: any = {};
    if (message.Path) {
      obj.Path = message.Path.map((e) => (e ? Path.toJSON(e) : undefined));
    } else {
      obj.Path = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPathResponse>): QueryAllPathResponse {
    const message = { ...baseQueryAllPathResponse } as QueryAllPathResponse;
    message.Path = [];
    if (object.Path !== undefined && object.Path !== null) {
      for (const e of object.Path) {
        message.Path.push(Path.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTimeCalculationRequest: object = { id: 0 };

export const QueryGetTimeCalculationRequest = {
  encode(
    message: QueryGetTimeCalculationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTimeCalculationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTimeCalculationRequest,
    } as QueryGetTimeCalculationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimeCalculationRequest {
    const message = {
      ...baseQueryGetTimeCalculationRequest,
    } as QueryGetTimeCalculationRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTimeCalculationRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTimeCalculationRequest>
  ): QueryGetTimeCalculationRequest {
    const message = {
      ...baseQueryGetTimeCalculationRequest,
    } as QueryGetTimeCalculationRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetTimeCalculationResponse: object = {};

export const QueryGetTimeCalculationResponse = {
  encode(
    message: QueryGetTimeCalculationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.TimeCalculation !== undefined) {
      TimeCalculation.encode(
        message.TimeCalculation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTimeCalculationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTimeCalculationResponse,
    } as QueryGetTimeCalculationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TimeCalculation = TimeCalculation.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimeCalculationResponse {
    const message = {
      ...baseQueryGetTimeCalculationResponse,
    } as QueryGetTimeCalculationResponse;
    if (
      object.TimeCalculation !== undefined &&
      object.TimeCalculation !== null
    ) {
      message.TimeCalculation = TimeCalculation.fromJSON(
        object.TimeCalculation
      );
    } else {
      message.TimeCalculation = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTimeCalculationResponse): unknown {
    const obj: any = {};
    message.TimeCalculation !== undefined &&
      (obj.TimeCalculation = message.TimeCalculation
        ? TimeCalculation.toJSON(message.TimeCalculation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTimeCalculationResponse>
  ): QueryGetTimeCalculationResponse {
    const message = {
      ...baseQueryGetTimeCalculationResponse,
    } as QueryGetTimeCalculationResponse;
    if (
      object.TimeCalculation !== undefined &&
      object.TimeCalculation !== null
    ) {
      message.TimeCalculation = TimeCalculation.fromPartial(
        object.TimeCalculation
      );
    } else {
      message.TimeCalculation = undefined;
    }
    return message;
  },
};

const baseQueryAllTimeCalculationRequest: object = {};

export const QueryAllTimeCalculationRequest = {
  encode(
    message: QueryAllTimeCalculationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTimeCalculationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTimeCalculationRequest,
    } as QueryAllTimeCalculationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimeCalculationRequest {
    const message = {
      ...baseQueryAllTimeCalculationRequest,
    } as QueryAllTimeCalculationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTimeCalculationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTimeCalculationRequest>
  ): QueryAllTimeCalculationRequest {
    const message = {
      ...baseQueryAllTimeCalculationRequest,
    } as QueryAllTimeCalculationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTimeCalculationResponse: object = {};

export const QueryAllTimeCalculationResponse = {
  encode(
    message: QueryAllTimeCalculationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.TimeCalculation) {
      TimeCalculation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTimeCalculationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTimeCalculationResponse,
    } as QueryAllTimeCalculationResponse;
    message.TimeCalculation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TimeCalculation.push(
            TimeCalculation.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimeCalculationResponse {
    const message = {
      ...baseQueryAllTimeCalculationResponse,
    } as QueryAllTimeCalculationResponse;
    message.TimeCalculation = [];
    if (
      object.TimeCalculation !== undefined &&
      object.TimeCalculation !== null
    ) {
      for (const e of object.TimeCalculation) {
        message.TimeCalculation.push(TimeCalculation.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTimeCalculationResponse): unknown {
    const obj: any = {};
    if (message.TimeCalculation) {
      obj.TimeCalculation = message.TimeCalculation.map((e) =>
        e ? TimeCalculation.toJSON(e) : undefined
      );
    } else {
      obj.TimeCalculation = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTimeCalculationResponse>
  ): QueryAllTimeCalculationResponse {
    const message = {
      ...baseQueryAllTimeCalculationResponse,
    } as QueryAllTimeCalculationResponse;
    message.TimeCalculation = [];
    if (
      object.TimeCalculation !== undefined &&
      object.TimeCalculation !== null
    ) {
      for (const e of object.TimeCalculation) {
        message.TimeCalculation.push(TimeCalculation.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCalculationTimeRequest: object = { id: 0 };

export const QueryGetCalculationTimeRequest = {
  encode(
    message: QueryGetCalculationTimeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCalculationTimeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCalculationTimeRequest,
    } as QueryGetCalculationTimeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCalculationTimeRequest {
    const message = {
      ...baseQueryGetCalculationTimeRequest,
    } as QueryGetCalculationTimeRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCalculationTimeRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCalculationTimeRequest>
  ): QueryGetCalculationTimeRequest {
    const message = {
      ...baseQueryGetCalculationTimeRequest,
    } as QueryGetCalculationTimeRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCalculationTimeResponse: object = {};

export const QueryGetCalculationTimeResponse = {
  encode(
    message: QueryGetCalculationTimeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CalculationTime !== undefined) {
      CalculationTime.encode(
        message.CalculationTime,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCalculationTimeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCalculationTimeResponse,
    } as QueryGetCalculationTimeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CalculationTime = CalculationTime.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCalculationTimeResponse {
    const message = {
      ...baseQueryGetCalculationTimeResponse,
    } as QueryGetCalculationTimeResponse;
    if (
      object.CalculationTime !== undefined &&
      object.CalculationTime !== null
    ) {
      message.CalculationTime = CalculationTime.fromJSON(
        object.CalculationTime
      );
    } else {
      message.CalculationTime = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCalculationTimeResponse): unknown {
    const obj: any = {};
    message.CalculationTime !== undefined &&
      (obj.CalculationTime = message.CalculationTime
        ? CalculationTime.toJSON(message.CalculationTime)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCalculationTimeResponse>
  ): QueryGetCalculationTimeResponse {
    const message = {
      ...baseQueryGetCalculationTimeResponse,
    } as QueryGetCalculationTimeResponse;
    if (
      object.CalculationTime !== undefined &&
      object.CalculationTime !== null
    ) {
      message.CalculationTime = CalculationTime.fromPartial(
        object.CalculationTime
      );
    } else {
      message.CalculationTime = undefined;
    }
    return message;
  },
};

const baseQueryAllCalculationTimeRequest: object = {};

export const QueryAllCalculationTimeRequest = {
  encode(
    message: QueryAllCalculationTimeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCalculationTimeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCalculationTimeRequest,
    } as QueryAllCalculationTimeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCalculationTimeRequest {
    const message = {
      ...baseQueryAllCalculationTimeRequest,
    } as QueryAllCalculationTimeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCalculationTimeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCalculationTimeRequest>
  ): QueryAllCalculationTimeRequest {
    const message = {
      ...baseQueryAllCalculationTimeRequest,
    } as QueryAllCalculationTimeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCalculationTimeResponse: object = {};

export const QueryAllCalculationTimeResponse = {
  encode(
    message: QueryAllCalculationTimeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CalculationTime) {
      CalculationTime.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCalculationTimeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCalculationTimeResponse,
    } as QueryAllCalculationTimeResponse;
    message.CalculationTime = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CalculationTime.push(
            CalculationTime.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCalculationTimeResponse {
    const message = {
      ...baseQueryAllCalculationTimeResponse,
    } as QueryAllCalculationTimeResponse;
    message.CalculationTime = [];
    if (
      object.CalculationTime !== undefined &&
      object.CalculationTime !== null
    ) {
      for (const e of object.CalculationTime) {
        message.CalculationTime.push(CalculationTime.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCalculationTimeResponse): unknown {
    const obj: any = {};
    if (message.CalculationTime) {
      obj.CalculationTime = message.CalculationTime.map((e) =>
        e ? CalculationTime.toJSON(e) : undefined
      );
    } else {
      obj.CalculationTime = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCalculationTimeResponse>
  ): QueryAllCalculationTimeResponse {
    const message = {
      ...baseQueryAllCalculationTimeResponse,
    } as QueryAllCalculationTimeResponse;
    message.CalculationTime = [];
    if (
      object.CalculationTime !== undefined &&
      object.CalculationTime !== null
    ) {
      for (const e of object.CalculationTime) {
        message.CalculationTime.push(CalculationTime.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryRequestAccessRequest: object = { object: "", action: "" };

export const QueryRequestAccessRequest = {
  encode(
    message: QueryRequestAccessRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.object !== "") {
      writer.uint32(10).string(message.object);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRequestAccessRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRequestAccessRequest,
    } as QueryRequestAccessRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.object = reader.string();
          break;
        case 2:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestAccessRequest {
    const message = {
      ...baseQueryRequestAccessRequest,
    } as QueryRequestAccessRequest;
    if (object.object !== undefined && object.object !== null) {
      message.object = String(object.object);
    } else {
      message.object = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    return message;
  },

  toJSON(message: QueryRequestAccessRequest): unknown {
    const obj: any = {};
    message.object !== undefined && (obj.object = message.object);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRequestAccessRequest>
  ): QueryRequestAccessRequest {
    const message = {
      ...baseQueryRequestAccessRequest,
    } as QueryRequestAccessRequest;
    if (object.object !== undefined && object.object !== null) {
      message.object = object.object;
    } else {
      message.object = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
    }
    return message;
  },
};

const baseQueryRequestAccessResponse: object = { decision: "" };

export const QueryRequestAccessResponse = {
  encode(
    message: QueryRequestAccessResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.decision !== "") {
      writer.uint32(10).string(message.decision);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRequestAccessResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRequestAccessResponse,
    } as QueryRequestAccessResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decision = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestAccessResponse {
    const message = {
      ...baseQueryRequestAccessResponse,
    } as QueryRequestAccessResponse;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    return message;
  },

  toJSON(message: QueryRequestAccessResponse): unknown {
    const obj: any = {};
    message.decision !== undefined && (obj.decision = message.decision);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRequestAccessResponse>
  ): QueryRequestAccessResponse {
    const message = {
      ...baseQueryRequestAccessResponse,
    } as QueryRequestAccessResponse;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    return message;
  },
};

const baseQueryGetInterDomainAclPolicyRequest: object = { id: 0 };

export const QueryGetInterDomainAclPolicyRequest = {
  encode(
    message: QueryGetInterDomainAclPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetInterDomainAclPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetInterDomainAclPolicyRequest,
    } as QueryGetInterDomainAclPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInterDomainAclPolicyRequest {
    const message = {
      ...baseQueryGetInterDomainAclPolicyRequest,
    } as QueryGetInterDomainAclPolicyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetInterDomainAclPolicyRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetInterDomainAclPolicyRequest>
  ): QueryGetInterDomainAclPolicyRequest {
    const message = {
      ...baseQueryGetInterDomainAclPolicyRequest,
    } as QueryGetInterDomainAclPolicyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetInterDomainAclPolicyResponse: object = {};

export const QueryGetInterDomainAclPolicyResponse = {
  encode(
    message: QueryGetInterDomainAclPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.InterDomainAclPolicy !== undefined) {
      InterDomainAclPolicy.encode(
        message.InterDomainAclPolicy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetInterDomainAclPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetInterDomainAclPolicyResponse,
    } as QueryGetInterDomainAclPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.InterDomainAclPolicy = InterDomainAclPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInterDomainAclPolicyResponse {
    const message = {
      ...baseQueryGetInterDomainAclPolicyResponse,
    } as QueryGetInterDomainAclPolicyResponse;
    if (
      object.InterDomainAclPolicy !== undefined &&
      object.InterDomainAclPolicy !== null
    ) {
      message.InterDomainAclPolicy = InterDomainAclPolicy.fromJSON(
        object.InterDomainAclPolicy
      );
    } else {
      message.InterDomainAclPolicy = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetInterDomainAclPolicyResponse): unknown {
    const obj: any = {};
    message.InterDomainAclPolicy !== undefined &&
      (obj.InterDomainAclPolicy = message.InterDomainAclPolicy
        ? InterDomainAclPolicy.toJSON(message.InterDomainAclPolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetInterDomainAclPolicyResponse>
  ): QueryGetInterDomainAclPolicyResponse {
    const message = {
      ...baseQueryGetInterDomainAclPolicyResponse,
    } as QueryGetInterDomainAclPolicyResponse;
    if (
      object.InterDomainAclPolicy !== undefined &&
      object.InterDomainAclPolicy !== null
    ) {
      message.InterDomainAclPolicy = InterDomainAclPolicy.fromPartial(
        object.InterDomainAclPolicy
      );
    } else {
      message.InterDomainAclPolicy = undefined;
    }
    return message;
  },
};

const baseQueryAllInterDomainAclPolicyRequest: object = {};

export const QueryAllInterDomainAclPolicyRequest = {
  encode(
    message: QueryAllInterDomainAclPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllInterDomainAclPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllInterDomainAclPolicyRequest,
    } as QueryAllInterDomainAclPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInterDomainAclPolicyRequest {
    const message = {
      ...baseQueryAllInterDomainAclPolicyRequest,
    } as QueryAllInterDomainAclPolicyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInterDomainAclPolicyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllInterDomainAclPolicyRequest>
  ): QueryAllInterDomainAclPolicyRequest {
    const message = {
      ...baseQueryAllInterDomainAclPolicyRequest,
    } as QueryAllInterDomainAclPolicyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllInterDomainAclPolicyResponse: object = {};

export const QueryAllInterDomainAclPolicyResponse = {
  encode(
    message: QueryAllInterDomainAclPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.InterDomainAclPolicy) {
      InterDomainAclPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllInterDomainAclPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllInterDomainAclPolicyResponse,
    } as QueryAllInterDomainAclPolicyResponse;
    message.InterDomainAclPolicy = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.InterDomainAclPolicy.push(
            InterDomainAclPolicy.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInterDomainAclPolicyResponse {
    const message = {
      ...baseQueryAllInterDomainAclPolicyResponse,
    } as QueryAllInterDomainAclPolicyResponse;
    message.InterDomainAclPolicy = [];
    if (
      object.InterDomainAclPolicy !== undefined &&
      object.InterDomainAclPolicy !== null
    ) {
      for (const e of object.InterDomainAclPolicy) {
        message.InterDomainAclPolicy.push(InterDomainAclPolicy.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInterDomainAclPolicyResponse): unknown {
    const obj: any = {};
    if (message.InterDomainAclPolicy) {
      obj.InterDomainAclPolicy = message.InterDomainAclPolicy.map((e) =>
        e ? InterDomainAclPolicy.toJSON(e) : undefined
      );
    } else {
      obj.InterDomainAclPolicy = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllInterDomainAclPolicyResponse>
  ): QueryAllInterDomainAclPolicyResponse {
    const message = {
      ...baseQueryAllInterDomainAclPolicyResponse,
    } as QueryAllInterDomainAclPolicyResponse;
    message.InterDomainAclPolicy = [];
    if (
      object.InterDomainAclPolicy !== undefined &&
      object.InterDomainAclPolicy !== null
    ) {
      for (const e of object.InterDomainAclPolicy) {
        message.InterDomainAclPolicy.push(InterDomainAclPolicy.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a PublicKey by id. */
  PublicKey(
    request: QueryGetPublicKeyRequest
  ): Promise<QueryGetPublicKeyResponse>;
  /** Queries a list of PublicKey items. */
  PublicKeyAll(
    request: QueryAllPublicKeyRequest
  ): Promise<QueryAllPublicKeyResponse>;
  /** Queries a Validity by id. */
  Validity(request: QueryGetValidityRequest): Promise<QueryGetValidityResponse>;
  /** Queries a list of Validity items. */
  ValidityAll(
    request: QueryAllValidityRequest
  ): Promise<QueryAllValidityResponse>;
  /** Queries a Certificate by id. */
  Certificate(
    request: QueryGetCertificateRequest
  ): Promise<QueryGetCertificateResponse>;
  /** Queries a list of Certificate items. */
  CertificateAll(
    request: QueryAllCertificateRequest
  ): Promise<QueryAllCertificateResponse>;
  /** Queries a IbcConnection by id. */
  IbcConnection(
    request: QueryGetIbcConnectionRequest
  ): Promise<QueryGetIbcConnectionResponse>;
  /** Queries a list of IbcConnection items. */
  IbcConnectionAll(
    request: QueryAllIbcConnectionRequest
  ): Promise<QueryAllIbcConnectionResponse>;
  /** Queries a Domain by id. */
  Domain(request: QueryGetDomainRequest): Promise<QueryGetDomainResponse>;
  /** Queries a list of Domain items. */
  DomainAll(request: QueryAllDomainRequest): Promise<QueryAllDomainResponse>;
  /** Queries a AuthenticationLog by id. */
  AuthenticationLog(
    request: QueryGetAuthenticationLogRequest
  ): Promise<QueryGetAuthenticationLogResponse>;
  /** Queries a list of AuthenticationLog items. */
  AuthenticationLogAll(
    request: QueryAllAuthenticationLogRequest
  ): Promise<QueryAllAuthenticationLogResponse>;
  /** Queries a DomainCooperation by id. */
  DomainCooperation(
    request: QueryGetDomainCooperationRequest
  ): Promise<QueryGetDomainCooperationResponse>;
  /** Queries a list of DomainCooperation items. */
  DomainCooperationAll(
    request: QueryAllDomainCooperationRequest
  ): Promise<QueryAllDomainCooperationResponse>;
  /** Queries a CooperationLog by id. */
  CooperationLog(
    request: QueryGetCooperationLogRequest
  ): Promise<QueryGetCooperationLogResponse>;
  /** Queries a list of CooperationLog items. */
  CooperationLogAll(
    request: QueryAllCooperationLogRequest
  ): Promise<QueryAllCooperationLogResponse>;
  /** Queries a list of CheckEstablishedCooperationByChannel items. */
  CheckEstablishedCooperationByChannel(
    request: QueryCheckEstablishedCooperationByChannelRequest
  ): Promise<QueryCheckEstablishedCooperationByChannelResponse>;
  /** Queries a list of EstablishedCooperationByChannel items. */
  EstablishedCooperationByChannel(
    request: QueryEstablishedCooperationByChannelRequest
  ): Promise<QueryEstablishedCooperationByChannelResponse>;
  /** Queries a ForwardPolicy by id. */
  ForwardPolicy(
    request: QueryGetForwardPolicyRequest
  ): Promise<QueryGetForwardPolicyResponse>;
  /** Queries a list of ForwardPolicy items. */
  ForwardPolicyAll(
    request: QueryAllForwardPolicyRequest
  ): Promise<QueryAllForwardPolicyResponse>;
  /** Queries a list of RetrieveForwardPolicy items. */
  RetrieveForwardPolicy(
    request: QueryRetrieveForwardPolicyRequest
  ): Promise<QueryRetrieveForwardPolicyResponse>;
  /** Queries a DomainMap by index. */
  DomainMap(
    request: QueryGetDomainMapRequest
  ): Promise<QueryGetDomainMapResponse>;
  /** Queries a list of DomainMap items. */
  DomainMapAll(
    request: QueryAllDomainMapRequest
  ): Promise<QueryAllDomainMapResponse>;
  /** Queries a CooperationNetworkFeatures by id. */
  CooperationNetworkFeatures(
    request: QueryGetCooperationNetworkFeaturesRequest
  ): Promise<QueryGetCooperationNetworkFeaturesResponse>;
  /** Queries a list of CooperationNetworkFeatures items. */
  CooperationNetworkFeaturesAll(
    request: QueryAllCooperationNetworkFeaturesRequest
  ): Promise<QueryAllCooperationNetworkFeaturesResponse>;
  /** Queries a CooperationData by index. */
  CooperationData(
    request: QueryGetCooperationDataRequest
  ): Promise<QueryGetCooperationDataResponse>;
  /** Queries a list of CooperationData items. */
  CooperationDataAll(
    request: QueryAllCooperationDataRequest
  ): Promise<QueryAllCooperationDataResponse>;
  /** Queries a CooperationNetwork by id. */
  CooperationNetwork(
    request: QueryGetCooperationNetworkRequest
  ): Promise<QueryGetCooperationNetworkResponse>;
  /** Queries a list of CooperationNetwork items. */
  CooperationNetworkAll(
    request: QueryAllCooperationNetworkRequest
  ): Promise<QueryAllCooperationNetworkResponse>;
  /** Queries a UpdatePolicy by index. */
  UpdatePolicy(
    request: QueryGetUpdatePolicyRequest
  ): Promise<QueryGetUpdatePolicyResponse>;
  /** Queries a CooperativeDomain by id. */
  CooperativeDomain(
    request: QueryGetCooperativeDomainRequest
  ): Promise<QueryGetCooperativeDomainResponse>;
  /** Queries a list of CooperativeDomain items. */
  CooperativeDomainAll(
    request: QueryAllCooperativeDomainRequest
  ): Promise<QueryAllCooperativeDomainResponse>;
  /** Queries a DelegationPath by id. */
  DelegationPath(
    request: QueryGetDelegationPathRequest
  ): Promise<QueryGetDelegationPathResponse>;
  /** Queries a list of DelegationPath items. */
  DelegationPathAll(
    request: QueryAllDelegationPathRequest
  ): Promise<QueryAllDelegationPathResponse>;
  /** Queries a Path by id. */
  Path(request: QueryGetPathRequest): Promise<QueryGetPathResponse>;
  /** Queries a list of Path items. */
  PathAll(request: QueryAllPathRequest): Promise<QueryAllPathResponse>;
  /** Queries a TimeCalculation by id. */
  TimeCalculation(
    request: QueryGetTimeCalculationRequest
  ): Promise<QueryGetTimeCalculationResponse>;
  /** Queries a list of TimeCalculation items. */
  TimeCalculationAll(
    request: QueryAllTimeCalculationRequest
  ): Promise<QueryAllTimeCalculationResponse>;
  /** Queries a CalculationTime by id. */
  CalculationTime(
    request: QueryGetCalculationTimeRequest
  ): Promise<QueryGetCalculationTimeResponse>;
  /** Queries a list of CalculationTime items. */
  CalculationTimeAll(
    request: QueryAllCalculationTimeRequest
  ): Promise<QueryAllCalculationTimeResponse>;
  /** Queries a list of RequestAccess items. */
  RequestAccess(
    request: QueryRequestAccessRequest
  ): Promise<QueryRequestAccessResponse>;
  /** Queries a InterDomainAclPolicy by id. */
  InterDomainAclPolicy(
    request: QueryGetInterDomainAclPolicyRequest
  ): Promise<QueryGetInterDomainAclPolicyResponse>;
  /** Queries a list of InterDomainAclPolicy items. */
  InterDomainAclPolicyAll(
    request: QueryAllInterDomainAclPolicyRequest
  ): Promise<QueryAllInterDomainAclPolicyResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("crossdomain.cdac.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  PublicKey(
    request: QueryGetPublicKeyRequest
  ): Promise<QueryGetPublicKeyResponse> {
    const data = QueryGetPublicKeyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "PublicKey",
      data
    );
    return promise.then((data) =>
      QueryGetPublicKeyResponse.decode(new Reader(data))
    );
  }

  PublicKeyAll(
    request: QueryAllPublicKeyRequest
  ): Promise<QueryAllPublicKeyResponse> {
    const data = QueryAllPublicKeyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "PublicKeyAll",
      data
    );
    return promise.then((data) =>
      QueryAllPublicKeyResponse.decode(new Reader(data))
    );
  }

  Validity(
    request: QueryGetValidityRequest
  ): Promise<QueryGetValidityResponse> {
    const data = QueryGetValidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "Validity",
      data
    );
    return promise.then((data) =>
      QueryGetValidityResponse.decode(new Reader(data))
    );
  }

  ValidityAll(
    request: QueryAllValidityRequest
  ): Promise<QueryAllValidityResponse> {
    const data = QueryAllValidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "ValidityAll",
      data
    );
    return promise.then((data) =>
      QueryAllValidityResponse.decode(new Reader(data))
    );
  }

  Certificate(
    request: QueryGetCertificateRequest
  ): Promise<QueryGetCertificateResponse> {
    const data = QueryGetCertificateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "Certificate",
      data
    );
    return promise.then((data) =>
      QueryGetCertificateResponse.decode(new Reader(data))
    );
  }

  CertificateAll(
    request: QueryAllCertificateRequest
  ): Promise<QueryAllCertificateResponse> {
    const data = QueryAllCertificateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CertificateAll",
      data
    );
    return promise.then((data) =>
      QueryAllCertificateResponse.decode(new Reader(data))
    );
  }

  IbcConnection(
    request: QueryGetIbcConnectionRequest
  ): Promise<QueryGetIbcConnectionResponse> {
    const data = QueryGetIbcConnectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "IbcConnection",
      data
    );
    return promise.then((data) =>
      QueryGetIbcConnectionResponse.decode(new Reader(data))
    );
  }

  IbcConnectionAll(
    request: QueryAllIbcConnectionRequest
  ): Promise<QueryAllIbcConnectionResponse> {
    const data = QueryAllIbcConnectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "IbcConnectionAll",
      data
    );
    return promise.then((data) =>
      QueryAllIbcConnectionResponse.decode(new Reader(data))
    );
  }

  Domain(request: QueryGetDomainRequest): Promise<QueryGetDomainResponse> {
    const data = QueryGetDomainRequest.encode(request).finish();
    const promise = this.rpc.request("crossdomain.cdac.Query", "Domain", data);
    return promise.then((data) =>
      QueryGetDomainResponse.decode(new Reader(data))
    );
  }

  DomainAll(request: QueryAllDomainRequest): Promise<QueryAllDomainResponse> {
    const data = QueryAllDomainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "DomainAll",
      data
    );
    return promise.then((data) =>
      QueryAllDomainResponse.decode(new Reader(data))
    );
  }

  AuthenticationLog(
    request: QueryGetAuthenticationLogRequest
  ): Promise<QueryGetAuthenticationLogResponse> {
    const data = QueryGetAuthenticationLogRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "AuthenticationLog",
      data
    );
    return promise.then((data) =>
      QueryGetAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  AuthenticationLogAll(
    request: QueryAllAuthenticationLogRequest
  ): Promise<QueryAllAuthenticationLogResponse> {
    const data = QueryAllAuthenticationLogRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "AuthenticationLogAll",
      data
    );
    return promise.then((data) =>
      QueryAllAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  DomainCooperation(
    request: QueryGetDomainCooperationRequest
  ): Promise<QueryGetDomainCooperationResponse> {
    const data = QueryGetDomainCooperationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "DomainCooperation",
      data
    );
    return promise.then((data) =>
      QueryGetDomainCooperationResponse.decode(new Reader(data))
    );
  }

  DomainCooperationAll(
    request: QueryAllDomainCooperationRequest
  ): Promise<QueryAllDomainCooperationResponse> {
    const data = QueryAllDomainCooperationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "DomainCooperationAll",
      data
    );
    return promise.then((data) =>
      QueryAllDomainCooperationResponse.decode(new Reader(data))
    );
  }

  CooperationLog(
    request: QueryGetCooperationLogRequest
  ): Promise<QueryGetCooperationLogResponse> {
    const data = QueryGetCooperationLogRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperationLog",
      data
    );
    return promise.then((data) =>
      QueryGetCooperationLogResponse.decode(new Reader(data))
    );
  }

  CooperationLogAll(
    request: QueryAllCooperationLogRequest
  ): Promise<QueryAllCooperationLogResponse> {
    const data = QueryAllCooperationLogRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperationLogAll",
      data
    );
    return promise.then((data) =>
      QueryAllCooperationLogResponse.decode(new Reader(data))
    );
  }

  CheckEstablishedCooperationByChannel(
    request: QueryCheckEstablishedCooperationByChannelRequest
  ): Promise<QueryCheckEstablishedCooperationByChannelResponse> {
    const data = QueryCheckEstablishedCooperationByChannelRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CheckEstablishedCooperationByChannel",
      data
    );
    return promise.then((data) =>
      QueryCheckEstablishedCooperationByChannelResponse.decode(new Reader(data))
    );
  }

  EstablishedCooperationByChannel(
    request: QueryEstablishedCooperationByChannelRequest
  ): Promise<QueryEstablishedCooperationByChannelResponse> {
    const data = QueryEstablishedCooperationByChannelRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "EstablishedCooperationByChannel",
      data
    );
    return promise.then((data) =>
      QueryEstablishedCooperationByChannelResponse.decode(new Reader(data))
    );
  }

  ForwardPolicy(
    request: QueryGetForwardPolicyRequest
  ): Promise<QueryGetForwardPolicyResponse> {
    const data = QueryGetForwardPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "ForwardPolicy",
      data
    );
    return promise.then((data) =>
      QueryGetForwardPolicyResponse.decode(new Reader(data))
    );
  }

  ForwardPolicyAll(
    request: QueryAllForwardPolicyRequest
  ): Promise<QueryAllForwardPolicyResponse> {
    const data = QueryAllForwardPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "ForwardPolicyAll",
      data
    );
    return promise.then((data) =>
      QueryAllForwardPolicyResponse.decode(new Reader(data))
    );
  }

  RetrieveForwardPolicy(
    request: QueryRetrieveForwardPolicyRequest
  ): Promise<QueryRetrieveForwardPolicyResponse> {
    const data = QueryRetrieveForwardPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "RetrieveForwardPolicy",
      data
    );
    return promise.then((data) =>
      QueryRetrieveForwardPolicyResponse.decode(new Reader(data))
    );
  }

  DomainMap(
    request: QueryGetDomainMapRequest
  ): Promise<QueryGetDomainMapResponse> {
    const data = QueryGetDomainMapRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "DomainMap",
      data
    );
    return promise.then((data) =>
      QueryGetDomainMapResponse.decode(new Reader(data))
    );
  }

  DomainMapAll(
    request: QueryAllDomainMapRequest
  ): Promise<QueryAllDomainMapResponse> {
    const data = QueryAllDomainMapRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "DomainMapAll",
      data
    );
    return promise.then((data) =>
      QueryAllDomainMapResponse.decode(new Reader(data))
    );
  }

  CooperationNetworkFeatures(
    request: QueryGetCooperationNetworkFeaturesRequest
  ): Promise<QueryGetCooperationNetworkFeaturesResponse> {
    const data = QueryGetCooperationNetworkFeaturesRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperationNetworkFeatures",
      data
    );
    return promise.then((data) =>
      QueryGetCooperationNetworkFeaturesResponse.decode(new Reader(data))
    );
  }

  CooperationNetworkFeaturesAll(
    request: QueryAllCooperationNetworkFeaturesRequest
  ): Promise<QueryAllCooperationNetworkFeaturesResponse> {
    const data = QueryAllCooperationNetworkFeaturesRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperationNetworkFeaturesAll",
      data
    );
    return promise.then((data) =>
      QueryAllCooperationNetworkFeaturesResponse.decode(new Reader(data))
    );
  }

  CooperationData(
    request: QueryGetCooperationDataRequest
  ): Promise<QueryGetCooperationDataResponse> {
    const data = QueryGetCooperationDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperationData",
      data
    );
    return promise.then((data) =>
      QueryGetCooperationDataResponse.decode(new Reader(data))
    );
  }

  CooperationDataAll(
    request: QueryAllCooperationDataRequest
  ): Promise<QueryAllCooperationDataResponse> {
    const data = QueryAllCooperationDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperationDataAll",
      data
    );
    return promise.then((data) =>
      QueryAllCooperationDataResponse.decode(new Reader(data))
    );
  }

  CooperationNetwork(
    request: QueryGetCooperationNetworkRequest
  ): Promise<QueryGetCooperationNetworkResponse> {
    const data = QueryGetCooperationNetworkRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperationNetwork",
      data
    );
    return promise.then((data) =>
      QueryGetCooperationNetworkResponse.decode(new Reader(data))
    );
  }

  CooperationNetworkAll(
    request: QueryAllCooperationNetworkRequest
  ): Promise<QueryAllCooperationNetworkResponse> {
    const data = QueryAllCooperationNetworkRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperationNetworkAll",
      data
    );
    return promise.then((data) =>
      QueryAllCooperationNetworkResponse.decode(new Reader(data))
    );
  }

  UpdatePolicy(
    request: QueryGetUpdatePolicyRequest
  ): Promise<QueryGetUpdatePolicyResponse> {
    const data = QueryGetUpdatePolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "UpdatePolicy",
      data
    );
    return promise.then((data) =>
      QueryGetUpdatePolicyResponse.decode(new Reader(data))
    );
  }

  CooperativeDomain(
    request: QueryGetCooperativeDomainRequest
  ): Promise<QueryGetCooperativeDomainResponse> {
    const data = QueryGetCooperativeDomainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperativeDomain",
      data
    );
    return promise.then((data) =>
      QueryGetCooperativeDomainResponse.decode(new Reader(data))
    );
  }

  CooperativeDomainAll(
    request: QueryAllCooperativeDomainRequest
  ): Promise<QueryAllCooperativeDomainResponse> {
    const data = QueryAllCooperativeDomainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CooperativeDomainAll",
      data
    );
    return promise.then((data) =>
      QueryAllCooperativeDomainResponse.decode(new Reader(data))
    );
  }

  DelegationPath(
    request: QueryGetDelegationPathRequest
  ): Promise<QueryGetDelegationPathResponse> {
    const data = QueryGetDelegationPathRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "DelegationPath",
      data
    );
    return promise.then((data) =>
      QueryGetDelegationPathResponse.decode(new Reader(data))
    );
  }

  DelegationPathAll(
    request: QueryAllDelegationPathRequest
  ): Promise<QueryAllDelegationPathResponse> {
    const data = QueryAllDelegationPathRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "DelegationPathAll",
      data
    );
    return promise.then((data) =>
      QueryAllDelegationPathResponse.decode(new Reader(data))
    );
  }

  Path(request: QueryGetPathRequest): Promise<QueryGetPathResponse> {
    const data = QueryGetPathRequest.encode(request).finish();
    const promise = this.rpc.request("crossdomain.cdac.Query", "Path", data);
    return promise.then((data) =>
      QueryGetPathResponse.decode(new Reader(data))
    );
  }

  PathAll(request: QueryAllPathRequest): Promise<QueryAllPathResponse> {
    const data = QueryAllPathRequest.encode(request).finish();
    const promise = this.rpc.request("crossdomain.cdac.Query", "PathAll", data);
    return promise.then((data) =>
      QueryAllPathResponse.decode(new Reader(data))
    );
  }

  TimeCalculation(
    request: QueryGetTimeCalculationRequest
  ): Promise<QueryGetTimeCalculationResponse> {
    const data = QueryGetTimeCalculationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "TimeCalculation",
      data
    );
    return promise.then((data) =>
      QueryGetTimeCalculationResponse.decode(new Reader(data))
    );
  }

  TimeCalculationAll(
    request: QueryAllTimeCalculationRequest
  ): Promise<QueryAllTimeCalculationResponse> {
    const data = QueryAllTimeCalculationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "TimeCalculationAll",
      data
    );
    return promise.then((data) =>
      QueryAllTimeCalculationResponse.decode(new Reader(data))
    );
  }

  CalculationTime(
    request: QueryGetCalculationTimeRequest
  ): Promise<QueryGetCalculationTimeResponse> {
    const data = QueryGetCalculationTimeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CalculationTime",
      data
    );
    return promise.then((data) =>
      QueryGetCalculationTimeResponse.decode(new Reader(data))
    );
  }

  CalculationTimeAll(
    request: QueryAllCalculationTimeRequest
  ): Promise<QueryAllCalculationTimeResponse> {
    const data = QueryAllCalculationTimeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "CalculationTimeAll",
      data
    );
    return promise.then((data) =>
      QueryAllCalculationTimeResponse.decode(new Reader(data))
    );
  }

  RequestAccess(
    request: QueryRequestAccessRequest
  ): Promise<QueryRequestAccessResponse> {
    const data = QueryRequestAccessRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "RequestAccess",
      data
    );
    return promise.then((data) =>
      QueryRequestAccessResponse.decode(new Reader(data))
    );
  }

  InterDomainAclPolicy(
    request: QueryGetInterDomainAclPolicyRequest
  ): Promise<QueryGetInterDomainAclPolicyResponse> {
    const data = QueryGetInterDomainAclPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "InterDomainAclPolicy",
      data
    );
    return promise.then((data) =>
      QueryGetInterDomainAclPolicyResponse.decode(new Reader(data))
    );
  }

  InterDomainAclPolicyAll(
    request: QueryAllInterDomainAclPolicyRequest
  ): Promise<QueryAllInterDomainAclPolicyResponse> {
    const data = QueryAllInterDomainAclPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Query",
      "InterDomainAclPolicyAll",
      data
    );
    return promise.then((data) =>
      QueryAllInterDomainAclPolicyResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
