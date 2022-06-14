/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { PublicKey } from "../cdac/public_key";
import { Validity } from "../cdac/validity";
import { Certificate } from "../cdac/certificate";
import { IbcConnection } from "../cdac/ibc_connection";
import { Domain } from "../cdac/domain";
import { CooperativeDomain } from "../cdac/cooperative_domain";
import { DomainMap } from "../cdac/domain_map";
import { CooperationData } from "../cdac/cooperation_data";
import { CooperationNetworkFeatures } from "../cdac/cooperation_network_features";
import { Path } from "../cdac/path";
import { DelegationConditions } from "../cdac/delegation_conditions";
import { DelegationPolicyTarget } from "../cdac/delegation_policy_target";
import { DelegationRule } from "../cdac/delegation_rule";

export const protobufPackage = "crossdomain.cdac";

export interface MsgCreatePublicKey {
  creator: string;
  n: number;
  e: number;
}

export interface MsgCreatePublicKeyResponse {
  id: number;
}

export interface MsgUpdatePublicKey {
  creator: string;
  id: number;
  n: number;
  e: number;
}

export interface MsgUpdatePublicKeyResponse {}

export interface MsgDeletePublicKey {
  creator: string;
  id: number;
}

export interface MsgDeletePublicKeyResponse {}

export interface MsgCreateValidity {
  creator: string;
  notBefore: string;
  notAfter: string;
}

export interface MsgCreateValidityResponse {
  id: number;
}

export interface MsgUpdateValidity {
  creator: string;
  id: number;
  notBefore: string;
  notAfter: string;
}

export interface MsgUpdateValidityResponse {}

export interface MsgDeleteValidity {
  creator: string;
  id: number;
}

export interface MsgDeleteValidityResponse {}

export interface MsgCreateCertificate {
  creator: string;
  publicKey: PublicKey | undefined;
  validity: Validity | undefined;
}

export interface MsgCreateCertificateResponse {
  id: number;
}

export interface MsgUpdateCertificate {
  creator: string;
  id: number;
  publicKey: PublicKey | undefined;
  validity: Validity | undefined;
}

export interface MsgUpdateCertificateResponse {}

export interface MsgDeleteCertificate {
  creator: string;
  id: number;
}

export interface MsgDeleteCertificateResponse {}

export interface MsgCreateIbcConnection {
  creator: string;
  channel: string;
}

export interface MsgCreateIbcConnectionResponse {
  id: number;
}

export interface MsgUpdateIbcConnection {
  creator: string;
  id: number;
  channel: string;
}

export interface MsgUpdateIbcConnectionResponse {}

export interface MsgDeleteIbcConnection {
  creator: string;
  id: number;
}

export interface MsgDeleteIbcConnectionResponse {}

export interface MsgCreateDomain {
  creator: string;
  name: string;
  domainType: string;
  location: string;
  certificate: Certificate | undefined;
  ibcConnection: IbcConnection | undefined;
}

export interface MsgCreateDomainResponse {
  id: number;
}

export interface MsgUpdateDomain {
  creator: string;
  id: number;
  name: string;
  domainType: string;
  location: string;
  certificate: Certificate | undefined;
  ibcConnection: IbcConnection | undefined;
}

export interface MsgUpdateDomainResponse {}

export interface MsgDeleteDomain {
  creator: string;
  id: number;
}

export interface MsgDeleteDomainResponse {}

export interface MsgCreateAuthenticationLog {
  creator: string;
  transaction: string;
  timestamp: string;
  details: string;
  decision: string;
  function: string;
}

export interface MsgCreateAuthenticationLogResponse {
  id: number;
}

export interface MsgUpdateAuthenticationLog {
  creator: string;
  id: number;
  transaction: string;
  timestamp: string;
  details: string;
  decision: string;
  function: string;
}

export interface MsgUpdateAuthenticationLogResponse {}

export interface MsgDeleteAuthenticationLog {
  creator: string;
  id: number;
}

export interface MsgDeleteAuthenticationLogResponse {}

export interface MsgSendAuthenticateDomain {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendAuthenticateDomainResponse {}

export interface MsgCreateDomainCooperation {
  creator: string;
  label: string;
  cooperationType: string;
  sourceDomain: Domain | undefined;
  remoteDomain: Domain | undefined;
  validity: Validity | undefined;
  interest: string;
  cost: number;
  creationDate: string;
  creationTimestamp: string;
  updateDate: string;
  updateTimestamp: string;
  status: string;
}

export interface MsgCreateDomainCooperationResponse {
  id: number;
}

export interface MsgUpdateDomainCooperation {
  creator: string;
  id: number;
  label: string;
  cooperationType: string;
  sourceDomain: Domain | undefined;
  remoteDomain: Domain | undefined;
  validity: Validity | undefined;
  interest: string;
  cost: number;
  creationDate: string;
  creationTimestamp: string;
  updateDate: string;
  updateTimestamp: string;
  status: string;
}

export interface MsgUpdateDomainCooperationResponse {}

export interface MsgDeleteDomainCooperation {
  creator: string;
  id: number;
}

export interface MsgDeleteDomainCooperationResponse {}

export interface MsgCreateCooperationLog {
  creator: string;
  transaction: string;
  timestamp: string;
  details: string;
  decision: string;
  function: string;
}

export interface MsgCreateCooperationLogResponse {
  id: number;
}

export interface MsgUpdateCooperationLog {
  creator: string;
  id: number;
  transaction: string;
  timestamp: string;
  details: string;
  decision: string;
  function: string;
}

export interface MsgUpdateCooperationLogResponse {}

export interface MsgDeleteCooperationLog {
  creator: string;
  id: number;
}

export interface MsgDeleteCooperationLogResponse {}

export interface MsgSendEstablishCooperation {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  notBefore: string;
  notAfter: string;
  interest: string;
  cost: string;
}

export interface MsgSendEstablishCooperationResponse {}

export interface MsgSendForwardCooperationData {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  notBefore: string;
  notAfter: string;
  interest: string;
  cost: string;
  domain1Name: string;
  domain2Name: string;
  domain1Location: string;
  domain2Location: string;
}

export interface MsgSendForwardCooperationDataResponse {}

export interface MsgCreateForwardPolicy {
  creator: string;
  mode: string;
  domainList: string[];
  locationList: string[];
}

export interface MsgCreateForwardPolicyResponse {
  id: number;
}

export interface MsgUpdateForwardPolicy {
  creator: string;
  id: number;
  mode: string;
  domainList: string[];
  locationList: string[];
}

export interface MsgUpdateForwardPolicyResponse {}

export interface MsgDeleteForwardPolicy {
  creator: string;
  id: number;
}

export interface MsgDeleteForwardPolicyResponse {}

export interface MsgSendExchangeCooperationData {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendExchangeCooperationDataResponse {}

export interface MsgSendModifyCooperationCost {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  cost: string;
}

export interface MsgSendModifyCooperationCostResponse {}

export interface MsgSendDisableCooperation {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendDisableCooperationResponse {}

export interface MsgSendEnableCooperation {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendEnableCooperationResponse {}

export interface MsgSendModifyCooperationValidity {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  notBefore: string;
  notAfter: string;
}

export interface MsgSendModifyCooperationValidityResponse {}

export interface MsgSendModifyCooperationInterest {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  interest: string;
}

export interface MsgSendModifyCooperationInterestResponse {}

export interface MsgSendRevokeCooperation {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendRevokeCooperationResponse {}

export interface MsgCreateDomainMap {
  creator: string;
  domainIndex: string;
  cooperativeDomainList: CooperativeDomain[];
}

export interface MsgCreateDomainMapResponse {}

export interface MsgUpdateDomainMap {
  creator: string;
  domainIndex: string;
  cooperativeDomainList: CooperativeDomain[];
}

export interface MsgUpdateDomainMapResponse {}

export interface MsgDeleteDomainMap {
  creator: string;
  domainIndex: string;
}

export interface MsgDeleteDomainMapResponse {}

export interface MsgCreateCooperationNetworkFeatures {
  creator: string;
  depth: number;
  cost: number;
  interestList: string[];
  locationList: string[];
  lastUpdate: string;
}

export interface MsgCreateCooperationNetworkFeaturesResponse {
  id: number;
}

export interface MsgUpdateCooperationNetworkFeatures {
  creator: string;
  id: number;
  depth: number;
  cost: number;
  interestList: string[];
  locationList: string[];
  lastUpdate: string;
}

export interface MsgUpdateCooperationNetworkFeaturesResponse {}

export interface MsgDeleteCooperationNetworkFeatures {
  creator: string;
  id: number;
}

export interface MsgDeleteCooperationNetworkFeaturesResponse {}

export interface MsgCreateCooperationData {
  creator: string;
  labelIndex: string;
  validity: Validity | undefined;
  status: string;
  cost: number;
  lastUpdate: string;
  interest: string;
}

export interface MsgCreateCooperationDataResponse {}

export interface MsgUpdateCooperationData {
  creator: string;
  labelIndex: string;
  validity: Validity | undefined;
  status: string;
  cost: number;
  lastUpdate: string;
  interest: string;
}

export interface MsgUpdateCooperationDataResponse {}

export interface MsgDeleteCooperationData {
  creator: string;
  labelIndex: string;
}

export interface MsgDeleteCooperationDataResponse {}

export interface MsgCreateCooperationNetwork {
  creator: string;
  label: string;
  domainMapList: DomainMap[];
  cooperationDataList: CooperationData[];
  features: CooperationNetworkFeatures | undefined;
  creationTimestamp: string;
  updateTimestamp: string;
}

export interface MsgCreateCooperationNetworkResponse {
  id: number;
}

export interface MsgUpdateCooperationNetwork {
  creator: string;
  id: number;
  label: string;
  domainMapList: DomainMap[];
  cooperationDataList: CooperationData[];
  features: CooperationNetworkFeatures | undefined;
  creationTimestamp: string;
  updateTimestamp: string;
}

export interface MsgUpdateCooperationNetworkResponse {}

export interface MsgDeleteCooperationNetwork {
  creator: string;
  id: number;
}

export interface MsgDeleteCooperationNetworkResponse {}

export interface MsgGenerateCooperationNetwork {
  creator: string;
}

export interface MsgGenerateCooperationNetworkResponse {}

export interface MsgCreateUpdatePolicy {
  creator: string;
  query: boolean;
  event: boolean;
  periodicalQuery: boolean;
}

export interface MsgCreateUpdatePolicyResponse {}

export interface MsgUpdateUpdatePolicy {
  creator: string;
  query: boolean;
  event: boolean;
  periodicalQuery: boolean;
}

export interface MsgUpdateUpdatePolicyResponse {}

export interface MsgDeleteUpdatePolicy {
  creator: string;
}

export interface MsgDeleteUpdatePolicyResponse {}

export interface MsgCreateCooperativeDomain {
  creator: string;
  name: string;
  domainType: string;
  location: string;
}

export interface MsgCreateCooperativeDomainResponse {
  id: number;
}

export interface MsgUpdateCooperativeDomain {
  creator: string;
  id: number;
  name: string;
  domainType: string;
  location: string;
}

export interface MsgUpdateCooperativeDomainResponse {}

export interface MsgDeleteCooperativeDomain {
  creator: string;
  id: number;
}

export interface MsgDeleteCooperativeDomainResponse {}

export interface MsgCreateDelegationPath {
  creator: string;
  delegator: CooperativeDomain | undefined;
  delegatee: CooperativeDomain | undefined;
}

export interface MsgCreateDelegationPathResponse {
  id: number;
}

export interface MsgUpdateDelegationPath {
  creator: string;
  id: number;
  delegator: CooperativeDomain | undefined;
  delegatee: CooperativeDomain | undefined;
  pathList: Path[];
}

export interface MsgUpdateDelegationPathResponse {}

export interface MsgDeleteDelegationPath {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationPathResponse {}

export interface MsgCreatePath {
  creator: string;
  domainList: CooperativeDomain[];
}

export interface MsgCreatePathResponse {
  id: number;
}

export interface MsgUpdatePath {
  creator: string;
  id: number;
  domainList: CooperativeDomain[];
}

export interface MsgUpdatePathResponse {}

export interface MsgDeletePath {
  creator: string;
  id: number;
}

export interface MsgDeletePathResponse {}

export interface MsgCreateTimeCalculation {
  creator: string;
  operation: string;
  startTimestamp: string;
  endTimestamp: string;
  timing: number;
}

export interface MsgCreateTimeCalculationResponse {
  id: number;
}

export interface MsgUpdateTimeCalculation {
  creator: string;
  id: number;
  operation: string;
  startTimestamp: string;
  endTimestamp: string;
  timing: number;
}

export interface MsgUpdateTimeCalculationResponse {}

export interface MsgDeleteTimeCalculation {
  creator: string;
  id: number;
}

export interface MsgDeleteTimeCalculationResponse {}

export interface MsgCreateCalculationTime {
  creator: string;
  operation: string;
  startTimestamp: string;
  endTimestamp: string;
  duration: number;
}

export interface MsgCreateCalculationTimeResponse {
  id: number;
}

export interface MsgUpdateCalculationTime {
  creator: string;
  id: number;
  operation: string;
  startTimestamp: string;
  endTimestamp: string;
  duration: number;
}

export interface MsgUpdateCalculationTimeResponse {}

export interface MsgDeleteCalculationTime {
  creator: string;
  id: number;
}

export interface MsgDeleteCalculationTimeResponse {}

export interface MsgRequestAccessPermission {
  creator: string;
  subject: string;
  object: string;
  action: string;
}

export interface MsgRequestAccessPermissionResponse {
  decision: string;
}

export interface MsgCreateInterDomainAclPolicy {
  creator: string;
  label: string;
  subjectList: string[];
  actionList: string[];
  objectList: string[];
}

export interface MsgCreateInterDomainAclPolicyResponse {
  id: number;
}

export interface MsgUpdateInterDomainAclPolicy {
  creator: string;
  id: number;
  label: string;
  subjectList: string[];
  actionList: string[];
  objectList: string[];
  status: string;
  creationTimestamp: string;
  updateTimestamp: string;
}

export interface MsgUpdateInterDomainAclPolicyResponse {}

export interface MsgDeleteInterDomainAclPolicy {
  creator: string;
  id: number;
}

export interface MsgDeleteInterDomainAclPolicyResponse {}

export interface MsgCreateInterDomainDclPolicy {
  creator: string;
  label: string;
  delegatorList: string[];
  delegateeList: string[];
  permissionList: string[];
  depth: number;
  maxDelegations: number;
  validity: Validity | undefined;
}

export interface MsgCreateInterDomainDclPolicyResponse {
  id: number;
}

export interface MsgUpdateInterDomainDclPolicy {
  creator: string;
  id: number;
  label: string;
  delegatorList: string[];
  delegateeList: string[];
  permissionList: string[];
  creationTimestamp: string;
  updateTimestamp: string;
  depth: number;
  maxDelegations: number;
  validity: Validity | undefined;
}

export interface MsgUpdateInterDomainDclPolicyResponse {}

export interface MsgDeleteInterDomainDclPolicy {
  creator: string;
  id: number;
}

export interface MsgDeleteInterDomainDclPolicyResponse {}

export interface MsgCreateDelegationConditions {
  creator: string;
  depth: number;
  validity: Validity | undefined;
  maxDelegations: number;
}

export interface MsgCreateDelegationConditionsResponse {
  id: number;
}

export interface MsgUpdateDelegationConditions {
  creator: string;
  id: number;
  depth: number;
  validity: Validity | undefined;
  maxDelegations: number;
}

export interface MsgUpdateDelegationConditionsResponse {}

export interface MsgDeleteDelegationConditions {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationConditionsResponse {}

export interface MsgCreateDelegationRule {
  creator: string;
  label: string;
  effect: string;
  delegationConditions: DelegationConditions | undefined;
  priority: number;
}

export interface MsgCreateDelegationRuleResponse {
  id: number;
}

export interface MsgUpdateDelegationRule {
  creator: string;
  id: number;
  label: string;
  effect: string;
  delegationConditions: DelegationConditions | undefined;
  priority: number;
}

export interface MsgUpdateDelegationRuleResponse {}

export interface MsgDeleteDelegationRule {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationRuleResponse {}

export interface MsgCreateDelegationPolicyTarget {
  creator: string;
  delegatorList: string[];
  permissionList: string[];
  action: string;
}

export interface MsgCreateDelegationPolicyTargetResponse {
  id: number;
}

export interface MsgUpdateDelegationPolicyTarget {
  creator: string;
  id: number;
  delegatorList: string[];
  permissionList: string[];
  action: string;
}

export interface MsgUpdateDelegationPolicyTargetResponse {}

export interface MsgDeleteDelegationPolicyTarget {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationPolicyTargetResponse {}

export interface MsgCreateDelegationPolicy {
  creator: string;
  label: string;
  target: DelegationPolicyTarget | undefined;
  combiningAlgorithm: string;
  ruleList: DelegationRule | undefined;
}

export interface MsgCreateDelegationPolicyResponse {
  id: number;
}

export interface MsgUpdateDelegationPolicy {
  creator: string;
  id: number;
  label: string;
  target: DelegationPolicyTarget | undefined;
  combiningAlgorithm: string;
  ruleList: DelegationRule | undefined;
}

export interface MsgUpdateDelegationPolicyResponse {}

export interface MsgDeleteDelegationPolicy {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationPolicyResponse {}

const baseMsgCreatePublicKey: object = { creator: "", n: 0, e: 0 };

export const MsgCreatePublicKey = {
  encode(
    message: MsgCreatePublicKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.n !== 0) {
      writer.uint32(16).uint64(message.n);
    }
    if (message.e !== 0) {
      writer.uint32(24).uint64(message.e);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePublicKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePublicKey } as MsgCreatePublicKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.n = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.e = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePublicKey {
    const message = { ...baseMsgCreatePublicKey } as MsgCreatePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreatePublicKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.n !== undefined && (obj.n = message.n);
    message.e !== undefined && (obj.e = message.e);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePublicKey>): MsgCreatePublicKey {
    const message = { ...baseMsgCreatePublicKey } as MsgCreatePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreatePublicKeyResponse: object = { id: 0 };

export const MsgCreatePublicKeyResponse = {
  encode(
    message: MsgCreatePublicKeyResponse,
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
  ): MsgCreatePublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePublicKeyResponse,
    } as MsgCreatePublicKeyResponse;
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

  fromJSON(object: any): MsgCreatePublicKeyResponse {
    const message = {
      ...baseMsgCreatePublicKeyResponse,
    } as MsgCreatePublicKeyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePublicKeyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePublicKeyResponse>
  ): MsgCreatePublicKeyResponse {
    const message = {
      ...baseMsgCreatePublicKeyResponse,
    } as MsgCreatePublicKeyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePublicKey: object = { creator: "", id: 0, n: 0, e: 0 };

export const MsgUpdatePublicKey = {
  encode(
    message: MsgUpdatePublicKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.n !== 0) {
      writer.uint32(24).uint64(message.n);
    }
    if (message.e !== 0) {
      writer.uint32(32).uint64(message.e);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePublicKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePublicKey } as MsgUpdatePublicKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.n = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.e = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePublicKey {
    const message = { ...baseMsgUpdatePublicKey } as MsgUpdatePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdatePublicKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.n !== undefined && (obj.n = message.n);
    message.e !== undefined && (obj.e = message.e);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePublicKey>): MsgUpdatePublicKey {
    const message = { ...baseMsgUpdatePublicKey } as MsgUpdatePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdatePublicKeyResponse: object = {};

export const MsgUpdatePublicKeyResponse = {
  encode(
    _: MsgUpdatePublicKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePublicKeyResponse,
    } as MsgUpdatePublicKeyResponse;
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

  fromJSON(_: any): MsgUpdatePublicKeyResponse {
    const message = {
      ...baseMsgUpdatePublicKeyResponse,
    } as MsgUpdatePublicKeyResponse;
    return message;
  },

  toJSON(_: MsgUpdatePublicKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePublicKeyResponse>
  ): MsgUpdatePublicKeyResponse {
    const message = {
      ...baseMsgUpdatePublicKeyResponse,
    } as MsgUpdatePublicKeyResponse;
    return message;
  },
};

const baseMsgDeletePublicKey: object = { creator: "", id: 0 };

export const MsgDeletePublicKey = {
  encode(
    message: MsgDeletePublicKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePublicKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePublicKey } as MsgDeletePublicKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePublicKey {
    const message = { ...baseMsgDeletePublicKey } as MsgDeletePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePublicKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePublicKey>): MsgDeletePublicKey {
    const message = { ...baseMsgDeletePublicKey } as MsgDeletePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeletePublicKeyResponse: object = {};

export const MsgDeletePublicKeyResponse = {
  encode(
    _: MsgDeletePublicKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePublicKeyResponse,
    } as MsgDeletePublicKeyResponse;
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

  fromJSON(_: any): MsgDeletePublicKeyResponse {
    const message = {
      ...baseMsgDeletePublicKeyResponse,
    } as MsgDeletePublicKeyResponse;
    return message;
  },

  toJSON(_: MsgDeletePublicKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePublicKeyResponse>
  ): MsgDeletePublicKeyResponse {
    const message = {
      ...baseMsgDeletePublicKeyResponse,
    } as MsgDeletePublicKeyResponse;
    return message;
  },
};

const baseMsgCreateValidity: object = {
  creator: "",
  notBefore: "",
  notAfter: "",
};

export const MsgCreateValidity = {
  encode(message: MsgCreateValidity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.notBefore !== "") {
      writer.uint32(18).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(26).string(message.notAfter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateValidity } as MsgCreateValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.notBefore = reader.string();
          break;
        case 3:
          message.notAfter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidity {
    const message = { ...baseMsgCreateValidity } as MsgCreateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    return message;
  },

  toJSON(message: MsgCreateValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateValidity>): MsgCreateValidity {
    const message = { ...baseMsgCreateValidity } as MsgCreateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    return message;
  },
};

const baseMsgCreateValidityResponse: object = { id: 0 };

export const MsgCreateValidityResponse = {
  encode(
    message: MsgCreateValidityResponse,
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
  ): MsgCreateValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateValidityResponse,
    } as MsgCreateValidityResponse;
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

  fromJSON(object: any): MsgCreateValidityResponse {
    const message = {
      ...baseMsgCreateValidityResponse,
    } as MsgCreateValidityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateValidityResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateValidityResponse>
  ): MsgCreateValidityResponse {
    const message = {
      ...baseMsgCreateValidityResponse,
    } as MsgCreateValidityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateValidity: object = {
  creator: "",
  id: 0,
  notBefore: "",
  notAfter: "",
};

export const MsgUpdateValidity = {
  encode(message: MsgUpdateValidity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.notBefore !== "") {
      writer.uint32(26).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(34).string(message.notAfter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateValidity } as MsgUpdateValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.notBefore = reader.string();
          break;
        case 4:
          message.notAfter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateValidity {
    const message = { ...baseMsgUpdateValidity } as MsgUpdateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateValidity>): MsgUpdateValidity {
    const message = { ...baseMsgUpdateValidity } as MsgUpdateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    return message;
  },
};

const baseMsgUpdateValidityResponse: object = {};

export const MsgUpdateValidityResponse = {
  encode(
    _: MsgUpdateValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateValidityResponse,
    } as MsgUpdateValidityResponse;
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

  fromJSON(_: any): MsgUpdateValidityResponse {
    const message = {
      ...baseMsgUpdateValidityResponse,
    } as MsgUpdateValidityResponse;
    return message;
  },

  toJSON(_: MsgUpdateValidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateValidityResponse>
  ): MsgUpdateValidityResponse {
    const message = {
      ...baseMsgUpdateValidityResponse,
    } as MsgUpdateValidityResponse;
    return message;
  },
};

const baseMsgDeleteValidity: object = { creator: "", id: 0 };

export const MsgDeleteValidity = {
  encode(message: MsgDeleteValidity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteValidity } as MsgDeleteValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteValidity {
    const message = { ...baseMsgDeleteValidity } as MsgDeleteValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteValidity>): MsgDeleteValidity {
    const message = { ...baseMsgDeleteValidity } as MsgDeleteValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteValidityResponse: object = {};

export const MsgDeleteValidityResponse = {
  encode(
    _: MsgDeleteValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteValidityResponse,
    } as MsgDeleteValidityResponse;
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

  fromJSON(_: any): MsgDeleteValidityResponse {
    const message = {
      ...baseMsgDeleteValidityResponse,
    } as MsgDeleteValidityResponse;
    return message;
  },

  toJSON(_: MsgDeleteValidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteValidityResponse>
  ): MsgDeleteValidityResponse {
    const message = {
      ...baseMsgDeleteValidityResponse,
    } as MsgDeleteValidityResponse;
    return message;
  },
};

const baseMsgCreateCertificate: object = { creator: "" };

export const MsgCreateCertificate = {
  encode(
    message: MsgCreateCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.publicKey !== undefined) {
      PublicKey.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCertificate } as MsgCreateCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.publicKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCertificate {
    const message = { ...baseMsgCreateCertificate } as MsgCreateCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = PublicKey.fromJSON(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.publicKey !== undefined &&
      (obj.publicKey = message.publicKey
        ? PublicKey.toJSON(message.publicKey)
        : undefined);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = { ...baseMsgCreateCertificate } as MsgCreateCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = PublicKey.fromPartial(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgCreateCertificateResponse: object = { id: 0 };

export const MsgCreateCertificateResponse = {
  encode(
    message: MsgCreateCertificateResponse,
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
  ): MsgCreateCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCertificateResponse,
    } as MsgCreateCertificateResponse;
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

  fromJSON(object: any): MsgCreateCertificateResponse {
    const message = {
      ...baseMsgCreateCertificateResponse,
    } as MsgCreateCertificateResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCertificateResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCertificateResponse>
  ): MsgCreateCertificateResponse {
    const message = {
      ...baseMsgCreateCertificateResponse,
    } as MsgCreateCertificateResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCertificate: object = { creator: "", id: 0 };

export const MsgUpdateCertificate = {
  encode(
    message: MsgUpdateCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.publicKey !== undefined) {
      PublicKey.encode(message.publicKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCertificate } as MsgUpdateCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.publicKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 4:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCertificate {
    const message = { ...baseMsgUpdateCertificate } as MsgUpdateCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = PublicKey.fromJSON(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.publicKey !== undefined &&
      (obj.publicKey = message.publicKey
        ? PublicKey.toJSON(message.publicKey)
        : undefined);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCertificate>): MsgUpdateCertificate {
    const message = { ...baseMsgUpdateCertificate } as MsgUpdateCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = PublicKey.fromPartial(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgUpdateCertificateResponse: object = {};

export const MsgUpdateCertificateResponse = {
  encode(
    _: MsgUpdateCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCertificateResponse,
    } as MsgUpdateCertificateResponse;
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

  fromJSON(_: any): MsgUpdateCertificateResponse {
    const message = {
      ...baseMsgUpdateCertificateResponse,
    } as MsgUpdateCertificateResponse;
    return message;
  },

  toJSON(_: MsgUpdateCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCertificateResponse>
  ): MsgUpdateCertificateResponse {
    const message = {
      ...baseMsgUpdateCertificateResponse,
    } as MsgUpdateCertificateResponse;
    return message;
  },
};

const baseMsgDeleteCertificate: object = { creator: "", id: 0 };

export const MsgDeleteCertificate = {
  encode(
    message: MsgDeleteCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCertificate } as MsgDeleteCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCertificate {
    const message = { ...baseMsgDeleteCertificate } as MsgDeleteCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteCertificate>): MsgDeleteCertificate {
    const message = { ...baseMsgDeleteCertificate } as MsgDeleteCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCertificateResponse: object = {};

export const MsgDeleteCertificateResponse = {
  encode(
    _: MsgDeleteCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCertificateResponse,
    } as MsgDeleteCertificateResponse;
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

  fromJSON(_: any): MsgDeleteCertificateResponse {
    const message = {
      ...baseMsgDeleteCertificateResponse,
    } as MsgDeleteCertificateResponse;
    return message;
  },

  toJSON(_: MsgDeleteCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCertificateResponse>
  ): MsgDeleteCertificateResponse {
    const message = {
      ...baseMsgDeleteCertificateResponse,
    } as MsgDeleteCertificateResponse;
    return message;
  },
};

const baseMsgCreateIbcConnection: object = { creator: "", channel: "" };

export const MsgCreateIbcConnection = {
  encode(
    message: MsgCreateIbcConnection,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateIbcConnection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateIbcConnection } as MsgCreateIbcConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateIbcConnection {
    const message = { ...baseMsgCreateIbcConnection } as MsgCreateIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    return message;
  },

  toJSON(message: MsgCreateIbcConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateIbcConnection>
  ): MsgCreateIbcConnection {
    const message = { ...baseMsgCreateIbcConnection } as MsgCreateIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    return message;
  },
};

const baseMsgCreateIbcConnectionResponse: object = { id: 0 };

export const MsgCreateIbcConnectionResponse = {
  encode(
    message: MsgCreateIbcConnectionResponse,
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
  ): MsgCreateIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateIbcConnectionResponse,
    } as MsgCreateIbcConnectionResponse;
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

  fromJSON(object: any): MsgCreateIbcConnectionResponse {
    const message = {
      ...baseMsgCreateIbcConnectionResponse,
    } as MsgCreateIbcConnectionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateIbcConnectionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateIbcConnectionResponse>
  ): MsgCreateIbcConnectionResponse {
    const message = {
      ...baseMsgCreateIbcConnectionResponse,
    } as MsgCreateIbcConnectionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateIbcConnection: object = { creator: "", id: 0, channel: "" };

export const MsgUpdateIbcConnection = {
  encode(
    message: MsgUpdateIbcConnection,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateIbcConnection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateIbcConnection } as MsgUpdateIbcConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateIbcConnection {
    const message = { ...baseMsgUpdateIbcConnection } as MsgUpdateIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateIbcConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateIbcConnection>
  ): MsgUpdateIbcConnection {
    const message = { ...baseMsgUpdateIbcConnection } as MsgUpdateIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    return message;
  },
};

const baseMsgUpdateIbcConnectionResponse: object = {};

export const MsgUpdateIbcConnectionResponse = {
  encode(
    _: MsgUpdateIbcConnectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateIbcConnectionResponse,
    } as MsgUpdateIbcConnectionResponse;
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

  fromJSON(_: any): MsgUpdateIbcConnectionResponse {
    const message = {
      ...baseMsgUpdateIbcConnectionResponse,
    } as MsgUpdateIbcConnectionResponse;
    return message;
  },

  toJSON(_: MsgUpdateIbcConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateIbcConnectionResponse>
  ): MsgUpdateIbcConnectionResponse {
    const message = {
      ...baseMsgUpdateIbcConnectionResponse,
    } as MsgUpdateIbcConnectionResponse;
    return message;
  },
};

const baseMsgDeleteIbcConnection: object = { creator: "", id: 0 };

export const MsgDeleteIbcConnection = {
  encode(
    message: MsgDeleteIbcConnection,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteIbcConnection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteIbcConnection } as MsgDeleteIbcConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteIbcConnection {
    const message = { ...baseMsgDeleteIbcConnection } as MsgDeleteIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteIbcConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteIbcConnection>
  ): MsgDeleteIbcConnection {
    const message = { ...baseMsgDeleteIbcConnection } as MsgDeleteIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteIbcConnectionResponse: object = {};

export const MsgDeleteIbcConnectionResponse = {
  encode(
    _: MsgDeleteIbcConnectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteIbcConnectionResponse,
    } as MsgDeleteIbcConnectionResponse;
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

  fromJSON(_: any): MsgDeleteIbcConnectionResponse {
    const message = {
      ...baseMsgDeleteIbcConnectionResponse,
    } as MsgDeleteIbcConnectionResponse;
    return message;
  },

  toJSON(_: MsgDeleteIbcConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteIbcConnectionResponse>
  ): MsgDeleteIbcConnectionResponse {
    const message = {
      ...baseMsgDeleteIbcConnectionResponse,
    } as MsgDeleteIbcConnectionResponse;
    return message;
  },
};

const baseMsgCreateDomain: object = {
  creator: "",
  name: "",
  domainType: "",
  location: "",
};

export const MsgCreateDomain = {
  encode(message: MsgCreateDomain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.domainType !== "") {
      writer.uint32(26).string(message.domainType);
    }
    if (message.location !== "") {
      writer.uint32(34).string(message.location);
    }
    if (message.certificate !== undefined) {
      Certificate.encode(
        message.certificate,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.ibcConnection !== undefined) {
      IbcConnection.encode(
        message.ibcConnection,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDomain } as MsgCreateDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.domainType = reader.string();
          break;
        case 4:
          message.location = reader.string();
          break;
        case 5:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        case 6:
          message.ibcConnection = IbcConnection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomain {
    const message = { ...baseMsgCreateDomain } as MsgCreateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = String(object.domainType);
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromJSON(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.ibcConnection !== undefined && object.ibcConnection !== null) {
      message.ibcConnection = IbcConnection.fromJSON(object.ibcConnection);
    } else {
      message.ibcConnection = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    message.location !== undefined && (obj.location = message.location);
    message.certificate !== undefined &&
      (obj.certificate = message.certificate
        ? Certificate.toJSON(message.certificate)
        : undefined);
    message.ibcConnection !== undefined &&
      (obj.ibcConnection = message.ibcConnection
        ? IbcConnection.toJSON(message.ibcConnection)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDomain>): MsgCreateDomain {
    const message = { ...baseMsgCreateDomain } as MsgCreateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = object.domainType;
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromPartial(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.ibcConnection !== undefined && object.ibcConnection !== null) {
      message.ibcConnection = IbcConnection.fromPartial(object.ibcConnection);
    } else {
      message.ibcConnection = undefined;
    }
    return message;
  },
};

const baseMsgCreateDomainResponse: object = { id: 0 };

export const MsgCreateDomainResponse = {
  encode(
    message: MsgCreateDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDomainResponse,
    } as MsgCreateDomainResponse;
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

  fromJSON(object: any): MsgCreateDomainResponse {
    const message = {
      ...baseMsgCreateDomainResponse,
    } as MsgCreateDomainResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDomainResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDomainResponse>
  ): MsgCreateDomainResponse {
    const message = {
      ...baseMsgCreateDomainResponse,
    } as MsgCreateDomainResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDomain: object = {
  creator: "",
  id: 0,
  name: "",
  domainType: "",
  location: "",
};

export const MsgUpdateDomain = {
  encode(message: MsgUpdateDomain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.domainType !== "") {
      writer.uint32(34).string(message.domainType);
    }
    if (message.location !== "") {
      writer.uint32(42).string(message.location);
    }
    if (message.certificate !== undefined) {
      Certificate.encode(
        message.certificate,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.ibcConnection !== undefined) {
      IbcConnection.encode(
        message.ibcConnection,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDomain } as MsgUpdateDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.domainType = reader.string();
          break;
        case 5:
          message.location = reader.string();
          break;
        case 6:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        case 7:
          message.ibcConnection = IbcConnection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDomain {
    const message = { ...baseMsgUpdateDomain } as MsgUpdateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = String(object.domainType);
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromJSON(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.ibcConnection !== undefined && object.ibcConnection !== null) {
      message.ibcConnection = IbcConnection.fromJSON(object.ibcConnection);
    } else {
      message.ibcConnection = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    message.location !== undefined && (obj.location = message.location);
    message.certificate !== undefined &&
      (obj.certificate = message.certificate
        ? Certificate.toJSON(message.certificate)
        : undefined);
    message.ibcConnection !== undefined &&
      (obj.ibcConnection = message.ibcConnection
        ? IbcConnection.toJSON(message.ibcConnection)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDomain>): MsgUpdateDomain {
    const message = { ...baseMsgUpdateDomain } as MsgUpdateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = object.domainType;
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromPartial(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.ibcConnection !== undefined && object.ibcConnection !== null) {
      message.ibcConnection = IbcConnection.fromPartial(object.ibcConnection);
    } else {
      message.ibcConnection = undefined;
    }
    return message;
  },
};

const baseMsgUpdateDomainResponse: object = {};

export const MsgUpdateDomainResponse = {
  encode(_: MsgUpdateDomainResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDomainResponse,
    } as MsgUpdateDomainResponse;
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

  fromJSON(_: any): MsgUpdateDomainResponse {
    const message = {
      ...baseMsgUpdateDomainResponse,
    } as MsgUpdateDomainResponse;
    return message;
  },

  toJSON(_: MsgUpdateDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDomainResponse>
  ): MsgUpdateDomainResponse {
    const message = {
      ...baseMsgUpdateDomainResponse,
    } as MsgUpdateDomainResponse;
    return message;
  },
};

const baseMsgDeleteDomain: object = { creator: "", id: 0 };

export const MsgDeleteDomain = {
  encode(message: MsgDeleteDomain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDomain } as MsgDeleteDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDomain {
    const message = { ...baseMsgDeleteDomain } as MsgDeleteDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteDomain>): MsgDeleteDomain {
    const message = { ...baseMsgDeleteDomain } as MsgDeleteDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDomainResponse: object = {};

export const MsgDeleteDomainResponse = {
  encode(_: MsgDeleteDomainResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDomainResponse,
    } as MsgDeleteDomainResponse;
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

  fromJSON(_: any): MsgDeleteDomainResponse {
    const message = {
      ...baseMsgDeleteDomainResponse,
    } as MsgDeleteDomainResponse;
    return message;
  },

  toJSON(_: MsgDeleteDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDomainResponse>
  ): MsgDeleteDomainResponse {
    const message = {
      ...baseMsgDeleteDomainResponse,
    } as MsgDeleteDomainResponse;
    return message;
  },
};

const baseMsgCreateAuthenticationLog: object = {
  creator: "",
  transaction: "",
  timestamp: "",
  details: "",
  decision: "",
  function: "",
};

export const MsgCreateAuthenticationLog = {
  encode(
    message: MsgCreateAuthenticationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transaction !== "") {
      writer.uint32(18).string(message.transaction);
    }
    if (message.timestamp !== "") {
      writer.uint32(26).string(message.timestamp);
    }
    if (message.details !== "") {
      writer.uint32(34).string(message.details);
    }
    if (message.decision !== "") {
      writer.uint32(42).string(message.decision);
    }
    if (message.function !== "") {
      writer.uint32(50).string(message.function);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAuthenticationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAuthenticationLog,
    } as MsgCreateAuthenticationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transaction = reader.string();
          break;
        case 3:
          message.timestamp = reader.string();
          break;
        case 4:
          message.details = reader.string();
          break;
        case 5:
          message.decision = reader.string();
          break;
        case 6:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuthenticationLog {
    const message = {
      ...baseMsgCreateAuthenticationLog,
    } as MsgCreateAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAuthenticationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.details !== undefined && (obj.details = message.details);
    message.decision !== undefined && (obj.decision = message.decision);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAuthenticationLog>
  ): MsgCreateAuthenticationLog {
    const message = {
      ...baseMsgCreateAuthenticationLog,
    } as MsgCreateAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgCreateAuthenticationLogResponse: object = { id: 0 };

export const MsgCreateAuthenticationLogResponse = {
  encode(
    message: MsgCreateAuthenticationLogResponse,
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
  ): MsgCreateAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAuthenticationLogResponse,
    } as MsgCreateAuthenticationLogResponse;
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

  fromJSON(object: any): MsgCreateAuthenticationLogResponse {
    const message = {
      ...baseMsgCreateAuthenticationLogResponse,
    } as MsgCreateAuthenticationLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateAuthenticationLogResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAuthenticationLogResponse>
  ): MsgCreateAuthenticationLogResponse {
    const message = {
      ...baseMsgCreateAuthenticationLogResponse,
    } as MsgCreateAuthenticationLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateAuthenticationLog: object = {
  creator: "",
  id: 0,
  transaction: "",
  timestamp: "",
  details: "",
  decision: "",
  function: "",
};

export const MsgUpdateAuthenticationLog = {
  encode(
    message: MsgUpdateAuthenticationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.transaction !== "") {
      writer.uint32(26).string(message.transaction);
    }
    if (message.timestamp !== "") {
      writer.uint32(34).string(message.timestamp);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    if (message.decision !== "") {
      writer.uint32(50).string(message.decision);
    }
    if (message.function !== "") {
      writer.uint32(58).string(message.function);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAuthenticationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAuthenticationLog,
    } as MsgUpdateAuthenticationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.transaction = reader.string();
          break;
        case 4:
          message.timestamp = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        case 6:
          message.decision = reader.string();
          break;
        case 7:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAuthenticationLog {
    const message = {
      ...baseMsgUpdateAuthenticationLog,
    } as MsgUpdateAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateAuthenticationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.details !== undefined && (obj.details = message.details);
    message.decision !== undefined && (obj.decision = message.decision);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateAuthenticationLog>
  ): MsgUpdateAuthenticationLog {
    const message = {
      ...baseMsgUpdateAuthenticationLog,
    } as MsgUpdateAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgUpdateAuthenticationLogResponse: object = {};

export const MsgUpdateAuthenticationLogResponse = {
  encode(
    _: MsgUpdateAuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAuthenticationLogResponse,
    } as MsgUpdateAuthenticationLogResponse;
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

  fromJSON(_: any): MsgUpdateAuthenticationLogResponse {
    const message = {
      ...baseMsgUpdateAuthenticationLogResponse,
    } as MsgUpdateAuthenticationLogResponse;
    return message;
  },

  toJSON(_: MsgUpdateAuthenticationLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateAuthenticationLogResponse>
  ): MsgUpdateAuthenticationLogResponse {
    const message = {
      ...baseMsgUpdateAuthenticationLogResponse,
    } as MsgUpdateAuthenticationLogResponse;
    return message;
  },
};

const baseMsgDeleteAuthenticationLog: object = { creator: "", id: 0 };

export const MsgDeleteAuthenticationLog = {
  encode(
    message: MsgDeleteAuthenticationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAuthenticationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAuthenticationLog,
    } as MsgDeleteAuthenticationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAuthenticationLog {
    const message = {
      ...baseMsgDeleteAuthenticationLog,
    } as MsgDeleteAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteAuthenticationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteAuthenticationLog>
  ): MsgDeleteAuthenticationLog {
    const message = {
      ...baseMsgDeleteAuthenticationLog,
    } as MsgDeleteAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteAuthenticationLogResponse: object = {};

export const MsgDeleteAuthenticationLogResponse = {
  encode(
    _: MsgDeleteAuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAuthenticationLogResponse,
    } as MsgDeleteAuthenticationLogResponse;
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

  fromJSON(_: any): MsgDeleteAuthenticationLogResponse {
    const message = {
      ...baseMsgDeleteAuthenticationLogResponse,
    } as MsgDeleteAuthenticationLogResponse;
    return message;
  },

  toJSON(_: MsgDeleteAuthenticationLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteAuthenticationLogResponse>
  ): MsgDeleteAuthenticationLogResponse {
    const message = {
      ...baseMsgDeleteAuthenticationLogResponse,
    } as MsgDeleteAuthenticationLogResponse;
    return message;
  },
};

const baseMsgSendAuthenticateDomain: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendAuthenticateDomain = {
  encode(
    message: MsgSendAuthenticateDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendAuthenticateDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendAuthenticateDomain,
    } as MsgSendAuthenticateDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendAuthenticateDomain {
    const message = {
      ...baseMsgSendAuthenticateDomain,
    } as MsgSendAuthenticateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendAuthenticateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendAuthenticateDomain>
  ): MsgSendAuthenticateDomain {
    const message = {
      ...baseMsgSendAuthenticateDomain,
    } as MsgSendAuthenticateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendAuthenticateDomainResponse: object = {};

export const MsgSendAuthenticateDomainResponse = {
  encode(
    _: MsgSendAuthenticateDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendAuthenticateDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendAuthenticateDomainResponse,
    } as MsgSendAuthenticateDomainResponse;
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

  fromJSON(_: any): MsgSendAuthenticateDomainResponse {
    const message = {
      ...baseMsgSendAuthenticateDomainResponse,
    } as MsgSendAuthenticateDomainResponse;
    return message;
  },

  toJSON(_: MsgSendAuthenticateDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendAuthenticateDomainResponse>
  ): MsgSendAuthenticateDomainResponse {
    const message = {
      ...baseMsgSendAuthenticateDomainResponse,
    } as MsgSendAuthenticateDomainResponse;
    return message;
  },
};

const baseMsgCreateDomainCooperation: object = {
  creator: "",
  label: "",
  cooperationType: "",
  interest: "",
  cost: 0,
  creationDate: "",
  creationTimestamp: "",
  updateDate: "",
  updateTimestamp: "",
  status: "",
};

export const MsgCreateDomainCooperation = {
  encode(
    message: MsgCreateDomainCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.cooperationType !== "") {
      writer.uint32(26).string(message.cooperationType);
    }
    if (message.sourceDomain !== undefined) {
      Domain.encode(message.sourceDomain, writer.uint32(34).fork()).ldelim();
    }
    if (message.remoteDomain !== undefined) {
      Domain.encode(message.remoteDomain, writer.uint32(42).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(50).fork()).ldelim();
    }
    if (message.interest !== "") {
      writer.uint32(58).string(message.interest);
    }
    if (message.cost !== 0) {
      writer.uint32(64).uint64(message.cost);
    }
    if (message.creationDate !== "") {
      writer.uint32(74).string(message.creationDate);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(82).string(message.creationTimestamp);
    }
    if (message.updateDate !== "") {
      writer.uint32(90).string(message.updateDate);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(98).string(message.updateTimestamp);
    }
    if (message.status !== "") {
      writer.uint32(106).string(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDomainCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDomainCooperation,
    } as MsgCreateDomainCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.cooperationType = reader.string();
          break;
        case 4:
          message.sourceDomain = Domain.decode(reader, reader.uint32());
          break;
        case 5:
          message.remoteDomain = Domain.decode(reader, reader.uint32());
          break;
        case 6:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 7:
          message.interest = reader.string();
          break;
        case 8:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.creationDate = reader.string();
          break;
        case 10:
          message.creationTimestamp = reader.string();
          break;
        case 11:
          message.updateDate = reader.string();
          break;
        case 12:
          message.updateTimestamp = reader.string();
          break;
        case 13:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomainCooperation {
    const message = {
      ...baseMsgCreateDomainCooperation,
    } as MsgCreateDomainCooperation;
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
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = String(object.cooperationType);
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromJSON(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromJSON(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.creationDate !== undefined && object.creationDate !== null) {
      message.creationDate = String(object.creationDate);
    } else {
      message.creationDate = "";
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = String(object.creationTimestamp);
    } else {
      message.creationTimestamp = "";
    }
    if (object.updateDate !== undefined && object.updateDate !== null) {
      message.updateDate = String(object.updateDate);
    } else {
      message.updateDate = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = String(object.updateTimestamp);
    } else {
      message.updateTimestamp = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDomainCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.cooperationType !== undefined &&
      (obj.cooperationType = message.cooperationType);
    message.sourceDomain !== undefined &&
      (obj.sourceDomain = message.sourceDomain
        ? Domain.toJSON(message.sourceDomain)
        : undefined);
    message.remoteDomain !== undefined &&
      (obj.remoteDomain = message.remoteDomain
        ? Domain.toJSON(message.remoteDomain)
        : undefined);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    message.creationDate !== undefined &&
      (obj.creationDate = message.creationDate);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateDate !== undefined && (obj.updateDate = message.updateDate);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDomainCooperation>
  ): MsgCreateDomainCooperation {
    const message = {
      ...baseMsgCreateDomainCooperation,
    } as MsgCreateDomainCooperation;
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
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = object.cooperationType;
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromPartial(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromPartial(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.creationDate !== undefined && object.creationDate !== null) {
      message.creationDate = object.creationDate;
    } else {
      message.creationDate = "";
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = object.creationTimestamp;
    } else {
      message.creationTimestamp = "";
    }
    if (object.updateDate !== undefined && object.updateDate !== null) {
      message.updateDate = object.updateDate;
    } else {
      message.updateDate = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = object.updateTimestamp;
    } else {
      message.updateTimestamp = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgCreateDomainCooperationResponse: object = { id: 0 };

export const MsgCreateDomainCooperationResponse = {
  encode(
    message: MsgCreateDomainCooperationResponse,
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
  ): MsgCreateDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDomainCooperationResponse,
    } as MsgCreateDomainCooperationResponse;
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

  fromJSON(object: any): MsgCreateDomainCooperationResponse {
    const message = {
      ...baseMsgCreateDomainCooperationResponse,
    } as MsgCreateDomainCooperationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDomainCooperationResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDomainCooperationResponse>
  ): MsgCreateDomainCooperationResponse {
    const message = {
      ...baseMsgCreateDomainCooperationResponse,
    } as MsgCreateDomainCooperationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDomainCooperation: object = {
  creator: "",
  id: 0,
  label: "",
  cooperationType: "",
  interest: "",
  cost: 0,
  creationDate: "",
  creationTimestamp: "",
  updateDate: "",
  updateTimestamp: "",
  status: "",
};

export const MsgUpdateDomainCooperation = {
  encode(
    message: MsgUpdateDomainCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.cooperationType !== "") {
      writer.uint32(34).string(message.cooperationType);
    }
    if (message.sourceDomain !== undefined) {
      Domain.encode(message.sourceDomain, writer.uint32(42).fork()).ldelim();
    }
    if (message.remoteDomain !== undefined) {
      Domain.encode(message.remoteDomain, writer.uint32(50).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(58).fork()).ldelim();
    }
    if (message.interest !== "") {
      writer.uint32(66).string(message.interest);
    }
    if (message.cost !== 0) {
      writer.uint32(72).uint64(message.cost);
    }
    if (message.creationDate !== "") {
      writer.uint32(82).string(message.creationDate);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(90).string(message.creationTimestamp);
    }
    if (message.updateDate !== "") {
      writer.uint32(98).string(message.updateDate);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(106).string(message.updateTimestamp);
    }
    if (message.status !== "") {
      writer.uint32(114).string(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDomainCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDomainCooperation,
    } as MsgUpdateDomainCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.cooperationType = reader.string();
          break;
        case 5:
          message.sourceDomain = Domain.decode(reader, reader.uint32());
          break;
        case 6:
          message.remoteDomain = Domain.decode(reader, reader.uint32());
          break;
        case 7:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 8:
          message.interest = reader.string();
          break;
        case 9:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.creationDate = reader.string();
          break;
        case 11:
          message.creationTimestamp = reader.string();
          break;
        case 12:
          message.updateDate = reader.string();
          break;
        case 13:
          message.updateTimestamp = reader.string();
          break;
        case 14:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDomainCooperation {
    const message = {
      ...baseMsgUpdateDomainCooperation,
    } as MsgUpdateDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = String(object.cooperationType);
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromJSON(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromJSON(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.creationDate !== undefined && object.creationDate !== null) {
      message.creationDate = String(object.creationDate);
    } else {
      message.creationDate = "";
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = String(object.creationTimestamp);
    } else {
      message.creationTimestamp = "";
    }
    if (object.updateDate !== undefined && object.updateDate !== null) {
      message.updateDate = String(object.updateDate);
    } else {
      message.updateDate = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = String(object.updateTimestamp);
    } else {
      message.updateTimestamp = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateDomainCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    message.cooperationType !== undefined &&
      (obj.cooperationType = message.cooperationType);
    message.sourceDomain !== undefined &&
      (obj.sourceDomain = message.sourceDomain
        ? Domain.toJSON(message.sourceDomain)
        : undefined);
    message.remoteDomain !== undefined &&
      (obj.remoteDomain = message.remoteDomain
        ? Domain.toJSON(message.remoteDomain)
        : undefined);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    message.creationDate !== undefined &&
      (obj.creationDate = message.creationDate);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateDate !== undefined && (obj.updateDate = message.updateDate);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDomainCooperation>
  ): MsgUpdateDomainCooperation {
    const message = {
      ...baseMsgUpdateDomainCooperation,
    } as MsgUpdateDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = object.cooperationType;
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromPartial(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromPartial(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.creationDate !== undefined && object.creationDate !== null) {
      message.creationDate = object.creationDate;
    } else {
      message.creationDate = "";
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = object.creationTimestamp;
    } else {
      message.creationTimestamp = "";
    }
    if (object.updateDate !== undefined && object.updateDate !== null) {
      message.updateDate = object.updateDate;
    } else {
      message.updateDate = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = object.updateTimestamp;
    } else {
      message.updateTimestamp = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgUpdateDomainCooperationResponse: object = {};

export const MsgUpdateDomainCooperationResponse = {
  encode(
    _: MsgUpdateDomainCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDomainCooperationResponse,
    } as MsgUpdateDomainCooperationResponse;
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

  fromJSON(_: any): MsgUpdateDomainCooperationResponse {
    const message = {
      ...baseMsgUpdateDomainCooperationResponse,
    } as MsgUpdateDomainCooperationResponse;
    return message;
  },

  toJSON(_: MsgUpdateDomainCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDomainCooperationResponse>
  ): MsgUpdateDomainCooperationResponse {
    const message = {
      ...baseMsgUpdateDomainCooperationResponse,
    } as MsgUpdateDomainCooperationResponse;
    return message;
  },
};

const baseMsgDeleteDomainCooperation: object = { creator: "", id: 0 };

export const MsgDeleteDomainCooperation = {
  encode(
    message: MsgDeleteDomainCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDomainCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDomainCooperation,
    } as MsgDeleteDomainCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDomainCooperation {
    const message = {
      ...baseMsgDeleteDomainCooperation,
    } as MsgDeleteDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDomainCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDomainCooperation>
  ): MsgDeleteDomainCooperation {
    const message = {
      ...baseMsgDeleteDomainCooperation,
    } as MsgDeleteDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDomainCooperationResponse: object = {};

export const MsgDeleteDomainCooperationResponse = {
  encode(
    _: MsgDeleteDomainCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDomainCooperationResponse,
    } as MsgDeleteDomainCooperationResponse;
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

  fromJSON(_: any): MsgDeleteDomainCooperationResponse {
    const message = {
      ...baseMsgDeleteDomainCooperationResponse,
    } as MsgDeleteDomainCooperationResponse;
    return message;
  },

  toJSON(_: MsgDeleteDomainCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDomainCooperationResponse>
  ): MsgDeleteDomainCooperationResponse {
    const message = {
      ...baseMsgDeleteDomainCooperationResponse,
    } as MsgDeleteDomainCooperationResponse;
    return message;
  },
};

const baseMsgCreateCooperationLog: object = {
  creator: "",
  transaction: "",
  timestamp: "",
  details: "",
  decision: "",
  function: "",
};

export const MsgCreateCooperationLog = {
  encode(
    message: MsgCreateCooperationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transaction !== "") {
      writer.uint32(18).string(message.transaction);
    }
    if (message.timestamp !== "") {
      writer.uint32(26).string(message.timestamp);
    }
    if (message.details !== "") {
      writer.uint32(34).string(message.details);
    }
    if (message.decision !== "") {
      writer.uint32(42).string(message.decision);
    }
    if (message.function !== "") {
      writer.uint32(50).string(message.function);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCooperationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationLog,
    } as MsgCreateCooperationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transaction = reader.string();
          break;
        case 3:
          message.timestamp = reader.string();
          break;
        case 4:
          message.details = reader.string();
          break;
        case 5:
          message.decision = reader.string();
          break;
        case 6:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCooperationLog {
    const message = {
      ...baseMsgCreateCooperationLog,
    } as MsgCreateCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCooperationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.details !== undefined && (obj.details = message.details);
    message.decision !== undefined && (obj.decision = message.decision);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationLog>
  ): MsgCreateCooperationLog {
    const message = {
      ...baseMsgCreateCooperationLog,
    } as MsgCreateCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgCreateCooperationLogResponse: object = { id: 0 };

export const MsgCreateCooperationLogResponse = {
  encode(
    message: MsgCreateCooperationLogResponse,
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
  ): MsgCreateCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationLogResponse,
    } as MsgCreateCooperationLogResponse;
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

  fromJSON(object: any): MsgCreateCooperationLogResponse {
    const message = {
      ...baseMsgCreateCooperationLogResponse,
    } as MsgCreateCooperationLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCooperationLogResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationLogResponse>
  ): MsgCreateCooperationLogResponse {
    const message = {
      ...baseMsgCreateCooperationLogResponse,
    } as MsgCreateCooperationLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCooperationLog: object = {
  creator: "",
  id: 0,
  transaction: "",
  timestamp: "",
  details: "",
  decision: "",
  function: "",
};

export const MsgUpdateCooperationLog = {
  encode(
    message: MsgUpdateCooperationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.transaction !== "") {
      writer.uint32(26).string(message.transaction);
    }
    if (message.timestamp !== "") {
      writer.uint32(34).string(message.timestamp);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    if (message.decision !== "") {
      writer.uint32(50).string(message.decision);
    }
    if (message.function !== "") {
      writer.uint32(58).string(message.function);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCooperationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationLog,
    } as MsgUpdateCooperationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.transaction = reader.string();
          break;
        case 4:
          message.timestamp = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        case 6:
          message.decision = reader.string();
          break;
        case 7:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCooperationLog {
    const message = {
      ...baseMsgUpdateCooperationLog,
    } as MsgUpdateCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCooperationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.details !== undefined && (obj.details = message.details);
    message.decision !== undefined && (obj.decision = message.decision);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCooperationLog>
  ): MsgUpdateCooperationLog {
    const message = {
      ...baseMsgUpdateCooperationLog,
    } as MsgUpdateCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgUpdateCooperationLogResponse: object = {};

export const MsgUpdateCooperationLogResponse = {
  encode(
    _: MsgUpdateCooperationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationLogResponse,
    } as MsgUpdateCooperationLogResponse;
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

  fromJSON(_: any): MsgUpdateCooperationLogResponse {
    const message = {
      ...baseMsgUpdateCooperationLogResponse,
    } as MsgUpdateCooperationLogResponse;
    return message;
  },

  toJSON(_: MsgUpdateCooperationLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCooperationLogResponse>
  ): MsgUpdateCooperationLogResponse {
    const message = {
      ...baseMsgUpdateCooperationLogResponse,
    } as MsgUpdateCooperationLogResponse;
    return message;
  },
};

const baseMsgDeleteCooperationLog: object = { creator: "", id: 0 };

export const MsgDeleteCooperationLog = {
  encode(
    message: MsgDeleteCooperationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCooperationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationLog,
    } as MsgDeleteCooperationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCooperationLog {
    const message = {
      ...baseMsgDeleteCooperationLog,
    } as MsgDeleteCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCooperationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCooperationLog>
  ): MsgDeleteCooperationLog {
    const message = {
      ...baseMsgDeleteCooperationLog,
    } as MsgDeleteCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCooperationLogResponse: object = {};

export const MsgDeleteCooperationLogResponse = {
  encode(
    _: MsgDeleteCooperationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationLogResponse,
    } as MsgDeleteCooperationLogResponse;
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

  fromJSON(_: any): MsgDeleteCooperationLogResponse {
    const message = {
      ...baseMsgDeleteCooperationLogResponse,
    } as MsgDeleteCooperationLogResponse;
    return message;
  },

  toJSON(_: MsgDeleteCooperationLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCooperationLogResponse>
  ): MsgDeleteCooperationLogResponse {
    const message = {
      ...baseMsgDeleteCooperationLogResponse,
    } as MsgDeleteCooperationLogResponse;
    return message;
  },
};

const baseMsgSendEstablishCooperation: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  notBefore: "",
  notAfter: "",
  interest: "",
  cost: "",
};

export const MsgSendEstablishCooperation = {
  encode(
    message: MsgSendEstablishCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.notBefore !== "") {
      writer.uint32(42).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(50).string(message.notAfter);
    }
    if (message.interest !== "") {
      writer.uint32(58).string(message.interest);
    }
    if (message.cost !== "") {
      writer.uint32(66).string(message.cost);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEstablishCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEstablishCooperation,
    } as MsgSendEstablishCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.notBefore = reader.string();
          break;
        case 6:
          message.notAfter = reader.string();
          break;
        case 7:
          message.interest = reader.string();
          break;
        case 8:
          message.cost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendEstablishCooperation {
    const message = {
      ...baseMsgSendEstablishCooperation,
    } as MsgSendEstablishCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = String(object.cost);
    } else {
      message.cost = "";
    }
    return message;
  },

  toJSON(message: MsgSendEstablishCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendEstablishCooperation>
  ): MsgSendEstablishCooperation {
    const message = {
      ...baseMsgSendEstablishCooperation,
    } as MsgSendEstablishCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = "";
    }
    return message;
  },
};

const baseMsgSendEstablishCooperationResponse: object = {};

export const MsgSendEstablishCooperationResponse = {
  encode(
    _: MsgSendEstablishCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEstablishCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEstablishCooperationResponse,
    } as MsgSendEstablishCooperationResponse;
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

  fromJSON(_: any): MsgSendEstablishCooperationResponse {
    const message = {
      ...baseMsgSendEstablishCooperationResponse,
    } as MsgSendEstablishCooperationResponse;
    return message;
  },

  toJSON(_: MsgSendEstablishCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendEstablishCooperationResponse>
  ): MsgSendEstablishCooperationResponse {
    const message = {
      ...baseMsgSendEstablishCooperationResponse,
    } as MsgSendEstablishCooperationResponse;
    return message;
  },
};

const baseMsgSendForwardCooperationData: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  notBefore: "",
  notAfter: "",
  interest: "",
  cost: "",
  domain1Name: "",
  domain2Name: "",
  domain1Location: "",
  domain2Location: "",
};

export const MsgSendForwardCooperationData = {
  encode(
    message: MsgSendForwardCooperationData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.notBefore !== "") {
      writer.uint32(42).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(50).string(message.notAfter);
    }
    if (message.interest !== "") {
      writer.uint32(58).string(message.interest);
    }
    if (message.cost !== "") {
      writer.uint32(66).string(message.cost);
    }
    if (message.domain1Name !== "") {
      writer.uint32(74).string(message.domain1Name);
    }
    if (message.domain2Name !== "") {
      writer.uint32(82).string(message.domain2Name);
    }
    if (message.domain1Location !== "") {
      writer.uint32(90).string(message.domain1Location);
    }
    if (message.domain2Location !== "") {
      writer.uint32(98).string(message.domain2Location);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendForwardCooperationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendForwardCooperationData,
    } as MsgSendForwardCooperationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.notBefore = reader.string();
          break;
        case 6:
          message.notAfter = reader.string();
          break;
        case 7:
          message.interest = reader.string();
          break;
        case 8:
          message.cost = reader.string();
          break;
        case 9:
          message.domain1Name = reader.string();
          break;
        case 10:
          message.domain2Name = reader.string();
          break;
        case 11:
          message.domain1Location = reader.string();
          break;
        case 12:
          message.domain2Location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendForwardCooperationData {
    const message = {
      ...baseMsgSendForwardCooperationData,
    } as MsgSendForwardCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = String(object.cost);
    } else {
      message.cost = "";
    }
    if (object.domain1Name !== undefined && object.domain1Name !== null) {
      message.domain1Name = String(object.domain1Name);
    } else {
      message.domain1Name = "";
    }
    if (object.domain2Name !== undefined && object.domain2Name !== null) {
      message.domain2Name = String(object.domain2Name);
    } else {
      message.domain2Name = "";
    }
    if (
      object.domain1Location !== undefined &&
      object.domain1Location !== null
    ) {
      message.domain1Location = String(object.domain1Location);
    } else {
      message.domain1Location = "";
    }
    if (
      object.domain2Location !== undefined &&
      object.domain2Location !== null
    ) {
      message.domain2Location = String(object.domain2Location);
    } else {
      message.domain2Location = "";
    }
    return message;
  },

  toJSON(message: MsgSendForwardCooperationData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    message.domain1Name !== undefined &&
      (obj.domain1Name = message.domain1Name);
    message.domain2Name !== undefined &&
      (obj.domain2Name = message.domain2Name);
    message.domain1Location !== undefined &&
      (obj.domain1Location = message.domain1Location);
    message.domain2Location !== undefined &&
      (obj.domain2Location = message.domain2Location);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendForwardCooperationData>
  ): MsgSendForwardCooperationData {
    const message = {
      ...baseMsgSendForwardCooperationData,
    } as MsgSendForwardCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = "";
    }
    if (object.domain1Name !== undefined && object.domain1Name !== null) {
      message.domain1Name = object.domain1Name;
    } else {
      message.domain1Name = "";
    }
    if (object.domain2Name !== undefined && object.domain2Name !== null) {
      message.domain2Name = object.domain2Name;
    } else {
      message.domain2Name = "";
    }
    if (
      object.domain1Location !== undefined &&
      object.domain1Location !== null
    ) {
      message.domain1Location = object.domain1Location;
    } else {
      message.domain1Location = "";
    }
    if (
      object.domain2Location !== undefined &&
      object.domain2Location !== null
    ) {
      message.domain2Location = object.domain2Location;
    } else {
      message.domain2Location = "";
    }
    return message;
  },
};

const baseMsgSendForwardCooperationDataResponse: object = {};

export const MsgSendForwardCooperationDataResponse = {
  encode(
    _: MsgSendForwardCooperationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendForwardCooperationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendForwardCooperationDataResponse,
    } as MsgSendForwardCooperationDataResponse;
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

  fromJSON(_: any): MsgSendForwardCooperationDataResponse {
    const message = {
      ...baseMsgSendForwardCooperationDataResponse,
    } as MsgSendForwardCooperationDataResponse;
    return message;
  },

  toJSON(_: MsgSendForwardCooperationDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendForwardCooperationDataResponse>
  ): MsgSendForwardCooperationDataResponse {
    const message = {
      ...baseMsgSendForwardCooperationDataResponse,
    } as MsgSendForwardCooperationDataResponse;
    return message;
  },
};

const baseMsgCreateForwardPolicy: object = {
  creator: "",
  mode: "",
  domainList: "",
  locationList: "",
};

export const MsgCreateForwardPolicy = {
  encode(
    message: MsgCreateForwardPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.mode !== "") {
      writer.uint32(18).string(message.mode);
    }
    for (const v of message.domainList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateForwardPolicy } as MsgCreateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.mode = reader.string();
          break;
        case 3:
          message.domainList.push(reader.string());
          break;
        case 4:
          message.locationList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateForwardPolicy {
    const message = { ...baseMsgCreateForwardPolicy } as MsgCreateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = String(object.mode);
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateForwardPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.mode !== undefined && (obj.mode = message.mode);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateForwardPolicy>
  ): MsgCreateForwardPolicy {
    const message = { ...baseMsgCreateForwardPolicy } as MsgCreateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateForwardPolicyResponse: object = { id: 0 };

export const MsgCreateForwardPolicyResponse = {
  encode(
    message: MsgCreateForwardPolicyResponse,
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
  ): MsgCreateForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateForwardPolicyResponse,
    } as MsgCreateForwardPolicyResponse;
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

  fromJSON(object: any): MsgCreateForwardPolicyResponse {
    const message = {
      ...baseMsgCreateForwardPolicyResponse,
    } as MsgCreateForwardPolicyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateForwardPolicyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateForwardPolicyResponse>
  ): MsgCreateForwardPolicyResponse {
    const message = {
      ...baseMsgCreateForwardPolicyResponse,
    } as MsgCreateForwardPolicyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateForwardPolicy: object = {
  creator: "",
  id: 0,
  mode: "",
  domainList: "",
  locationList: "",
};

export const MsgUpdateForwardPolicy = {
  encode(
    message: MsgUpdateForwardPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.mode !== "") {
      writer.uint32(26).string(message.mode);
    }
    for (const v of message.domainList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateForwardPolicy } as MsgUpdateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.mode = reader.string();
          break;
        case 4:
          message.domainList.push(reader.string());
          break;
        case 5:
          message.locationList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateForwardPolicy {
    const message = { ...baseMsgUpdateForwardPolicy } as MsgUpdateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = String(object.mode);
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateForwardPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.mode !== undefined && (obj.mode = message.mode);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateForwardPolicy>
  ): MsgUpdateForwardPolicy {
    const message = { ...baseMsgUpdateForwardPolicy } as MsgUpdateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    return message;
  },
};

const baseMsgUpdateForwardPolicyResponse: object = {};

export const MsgUpdateForwardPolicyResponse = {
  encode(
    _: MsgUpdateForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateForwardPolicyResponse,
    } as MsgUpdateForwardPolicyResponse;
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

  fromJSON(_: any): MsgUpdateForwardPolicyResponse {
    const message = {
      ...baseMsgUpdateForwardPolicyResponse,
    } as MsgUpdateForwardPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateForwardPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateForwardPolicyResponse>
  ): MsgUpdateForwardPolicyResponse {
    const message = {
      ...baseMsgUpdateForwardPolicyResponse,
    } as MsgUpdateForwardPolicyResponse;
    return message;
  },
};

const baseMsgDeleteForwardPolicy: object = { creator: "", id: 0 };

export const MsgDeleteForwardPolicy = {
  encode(
    message: MsgDeleteForwardPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteForwardPolicy } as MsgDeleteForwardPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteForwardPolicy {
    const message = { ...baseMsgDeleteForwardPolicy } as MsgDeleteForwardPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteForwardPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteForwardPolicy>
  ): MsgDeleteForwardPolicy {
    const message = { ...baseMsgDeleteForwardPolicy } as MsgDeleteForwardPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteForwardPolicyResponse: object = {};

export const MsgDeleteForwardPolicyResponse = {
  encode(
    _: MsgDeleteForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteForwardPolicyResponse,
    } as MsgDeleteForwardPolicyResponse;
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

  fromJSON(_: any): MsgDeleteForwardPolicyResponse {
    const message = {
      ...baseMsgDeleteForwardPolicyResponse,
    } as MsgDeleteForwardPolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteForwardPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteForwardPolicyResponse>
  ): MsgDeleteForwardPolicyResponse {
    const message = {
      ...baseMsgDeleteForwardPolicyResponse,
    } as MsgDeleteForwardPolicyResponse;
    return message;
  },
};

const baseMsgSendExchangeCooperationData: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendExchangeCooperationData = {
  encode(
    message: MsgSendExchangeCooperationData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendExchangeCooperationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendExchangeCooperationData,
    } as MsgSendExchangeCooperationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendExchangeCooperationData {
    const message = {
      ...baseMsgSendExchangeCooperationData,
    } as MsgSendExchangeCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendExchangeCooperationData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendExchangeCooperationData>
  ): MsgSendExchangeCooperationData {
    const message = {
      ...baseMsgSendExchangeCooperationData,
    } as MsgSendExchangeCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendExchangeCooperationDataResponse: object = {};

export const MsgSendExchangeCooperationDataResponse = {
  encode(
    _: MsgSendExchangeCooperationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendExchangeCooperationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendExchangeCooperationDataResponse,
    } as MsgSendExchangeCooperationDataResponse;
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

  fromJSON(_: any): MsgSendExchangeCooperationDataResponse {
    const message = {
      ...baseMsgSendExchangeCooperationDataResponse,
    } as MsgSendExchangeCooperationDataResponse;
    return message;
  },

  toJSON(_: MsgSendExchangeCooperationDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendExchangeCooperationDataResponse>
  ): MsgSendExchangeCooperationDataResponse {
    const message = {
      ...baseMsgSendExchangeCooperationDataResponse,
    } as MsgSendExchangeCooperationDataResponse;
    return message;
  },
};

const baseMsgSendModifyCooperationCost: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  cost: "",
};

export const MsgSendModifyCooperationCost = {
  encode(
    message: MsgSendModifyCooperationCost,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.cost !== "") {
      writer.uint32(42).string(message.cost);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationCost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationCost,
    } as MsgSendModifyCooperationCost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.cost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendModifyCooperationCost {
    const message = {
      ...baseMsgSendModifyCooperationCost,
    } as MsgSendModifyCooperationCost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = String(object.cost);
    } else {
      message.cost = "";
    }
    return message;
  },

  toJSON(message: MsgSendModifyCooperationCost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.cost !== undefined && (obj.cost = message.cost);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendModifyCooperationCost>
  ): MsgSendModifyCooperationCost {
    const message = {
      ...baseMsgSendModifyCooperationCost,
    } as MsgSendModifyCooperationCost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = "";
    }
    return message;
  },
};

const baseMsgSendModifyCooperationCostResponse: object = {};

export const MsgSendModifyCooperationCostResponse = {
  encode(
    _: MsgSendModifyCooperationCostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationCostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationCostResponse,
    } as MsgSendModifyCooperationCostResponse;
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

  fromJSON(_: any): MsgSendModifyCooperationCostResponse {
    const message = {
      ...baseMsgSendModifyCooperationCostResponse,
    } as MsgSendModifyCooperationCostResponse;
    return message;
  },

  toJSON(_: MsgSendModifyCooperationCostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendModifyCooperationCostResponse>
  ): MsgSendModifyCooperationCostResponse {
    const message = {
      ...baseMsgSendModifyCooperationCostResponse,
    } as MsgSendModifyCooperationCostResponse;
    return message;
  },
};

const baseMsgSendDisableCooperation: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendDisableCooperation = {
  encode(
    message: MsgSendDisableCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendDisableCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendDisableCooperation,
    } as MsgSendDisableCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendDisableCooperation {
    const message = {
      ...baseMsgSendDisableCooperation,
    } as MsgSendDisableCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendDisableCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendDisableCooperation>
  ): MsgSendDisableCooperation {
    const message = {
      ...baseMsgSendDisableCooperation,
    } as MsgSendDisableCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendDisableCooperationResponse: object = {};

export const MsgSendDisableCooperationResponse = {
  encode(
    _: MsgSendDisableCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendDisableCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendDisableCooperationResponse,
    } as MsgSendDisableCooperationResponse;
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

  fromJSON(_: any): MsgSendDisableCooperationResponse {
    const message = {
      ...baseMsgSendDisableCooperationResponse,
    } as MsgSendDisableCooperationResponse;
    return message;
  },

  toJSON(_: MsgSendDisableCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendDisableCooperationResponse>
  ): MsgSendDisableCooperationResponse {
    const message = {
      ...baseMsgSendDisableCooperationResponse,
    } as MsgSendDisableCooperationResponse;
    return message;
  },
};

const baseMsgSendEnableCooperation: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendEnableCooperation = {
  encode(
    message: MsgSendEnableCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEnableCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEnableCooperation,
    } as MsgSendEnableCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendEnableCooperation {
    const message = {
      ...baseMsgSendEnableCooperation,
    } as MsgSendEnableCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendEnableCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendEnableCooperation>
  ): MsgSendEnableCooperation {
    const message = {
      ...baseMsgSendEnableCooperation,
    } as MsgSendEnableCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendEnableCooperationResponse: object = {};

export const MsgSendEnableCooperationResponse = {
  encode(
    _: MsgSendEnableCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEnableCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEnableCooperationResponse,
    } as MsgSendEnableCooperationResponse;
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

  fromJSON(_: any): MsgSendEnableCooperationResponse {
    const message = {
      ...baseMsgSendEnableCooperationResponse,
    } as MsgSendEnableCooperationResponse;
    return message;
  },

  toJSON(_: MsgSendEnableCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendEnableCooperationResponse>
  ): MsgSendEnableCooperationResponse {
    const message = {
      ...baseMsgSendEnableCooperationResponse,
    } as MsgSendEnableCooperationResponse;
    return message;
  },
};

const baseMsgSendModifyCooperationValidity: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  notBefore: "",
  notAfter: "",
};

export const MsgSendModifyCooperationValidity = {
  encode(
    message: MsgSendModifyCooperationValidity,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.notBefore !== "") {
      writer.uint32(42).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(50).string(message.notAfter);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationValidity,
    } as MsgSendModifyCooperationValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.notBefore = reader.string();
          break;
        case 6:
          message.notAfter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendModifyCooperationValidity {
    const message = {
      ...baseMsgSendModifyCooperationValidity,
    } as MsgSendModifyCooperationValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    return message;
  },

  toJSON(message: MsgSendModifyCooperationValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendModifyCooperationValidity>
  ): MsgSendModifyCooperationValidity {
    const message = {
      ...baseMsgSendModifyCooperationValidity,
    } as MsgSendModifyCooperationValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    return message;
  },
};

const baseMsgSendModifyCooperationValidityResponse: object = {};

export const MsgSendModifyCooperationValidityResponse = {
  encode(
    _: MsgSendModifyCooperationValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationValidityResponse,
    } as MsgSendModifyCooperationValidityResponse;
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

  fromJSON(_: any): MsgSendModifyCooperationValidityResponse {
    const message = {
      ...baseMsgSendModifyCooperationValidityResponse,
    } as MsgSendModifyCooperationValidityResponse;
    return message;
  },

  toJSON(_: MsgSendModifyCooperationValidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendModifyCooperationValidityResponse>
  ): MsgSendModifyCooperationValidityResponse {
    const message = {
      ...baseMsgSendModifyCooperationValidityResponse,
    } as MsgSendModifyCooperationValidityResponse;
    return message;
  },
};

const baseMsgSendModifyCooperationInterest: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  interest: "",
};

export const MsgSendModifyCooperationInterest = {
  encode(
    message: MsgSendModifyCooperationInterest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.interest !== "") {
      writer.uint32(42).string(message.interest);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationInterest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationInterest,
    } as MsgSendModifyCooperationInterest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.interest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendModifyCooperationInterest {
    const message = {
      ...baseMsgSendModifyCooperationInterest,
    } as MsgSendModifyCooperationInterest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    return message;
  },

  toJSON(message: MsgSendModifyCooperationInterest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.interest !== undefined && (obj.interest = message.interest);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendModifyCooperationInterest>
  ): MsgSendModifyCooperationInterest {
    const message = {
      ...baseMsgSendModifyCooperationInterest,
    } as MsgSendModifyCooperationInterest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    return message;
  },
};

const baseMsgSendModifyCooperationInterestResponse: object = {};

export const MsgSendModifyCooperationInterestResponse = {
  encode(
    _: MsgSendModifyCooperationInterestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationInterestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationInterestResponse,
    } as MsgSendModifyCooperationInterestResponse;
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

  fromJSON(_: any): MsgSendModifyCooperationInterestResponse {
    const message = {
      ...baseMsgSendModifyCooperationInterestResponse,
    } as MsgSendModifyCooperationInterestResponse;
    return message;
  },

  toJSON(_: MsgSendModifyCooperationInterestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendModifyCooperationInterestResponse>
  ): MsgSendModifyCooperationInterestResponse {
    const message = {
      ...baseMsgSendModifyCooperationInterestResponse,
    } as MsgSendModifyCooperationInterestResponse;
    return message;
  },
};

const baseMsgSendRevokeCooperation: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendRevokeCooperation = {
  encode(
    message: MsgSendRevokeCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendRevokeCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendRevokeCooperation,
    } as MsgSendRevokeCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendRevokeCooperation {
    const message = {
      ...baseMsgSendRevokeCooperation,
    } as MsgSendRevokeCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendRevokeCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendRevokeCooperation>
  ): MsgSendRevokeCooperation {
    const message = {
      ...baseMsgSendRevokeCooperation,
    } as MsgSendRevokeCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendRevokeCooperationResponse: object = {};

export const MsgSendRevokeCooperationResponse = {
  encode(
    _: MsgSendRevokeCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendRevokeCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendRevokeCooperationResponse,
    } as MsgSendRevokeCooperationResponse;
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

  fromJSON(_: any): MsgSendRevokeCooperationResponse {
    const message = {
      ...baseMsgSendRevokeCooperationResponse,
    } as MsgSendRevokeCooperationResponse;
    return message;
  },

  toJSON(_: MsgSendRevokeCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendRevokeCooperationResponse>
  ): MsgSendRevokeCooperationResponse {
    const message = {
      ...baseMsgSendRevokeCooperationResponse,
    } as MsgSendRevokeCooperationResponse;
    return message;
  },
};

const baseMsgCreateDomainMap: object = { creator: "", domainIndex: "" };

export const MsgCreateDomainMap = {
  encode(
    message: MsgCreateDomainMap,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.domainIndex !== "") {
      writer.uint32(18).string(message.domainIndex);
    }
    for (const v of message.cooperativeDomainList) {
      CooperativeDomain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDomainMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDomainMap } as MsgCreateDomainMap;
    message.cooperativeDomainList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.domainIndex = reader.string();
          break;
        case 3:
          message.cooperativeDomainList.push(
            CooperativeDomain.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomainMap {
    const message = { ...baseMsgCreateDomainMap } as MsgCreateDomainMap;
    message.cooperativeDomainList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = String(object.domainIndex);
    } else {
      message.domainIndex = "";
    }
    if (
      object.cooperativeDomainList !== undefined &&
      object.cooperativeDomainList !== null
    ) {
      for (const e of object.cooperativeDomainList) {
        message.cooperativeDomainList.push(CooperativeDomain.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateDomainMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.domainIndex !== undefined &&
      (obj.domainIndex = message.domainIndex);
    if (message.cooperativeDomainList) {
      obj.cooperativeDomainList = message.cooperativeDomainList.map((e) =>
        e ? CooperativeDomain.toJSON(e) : undefined
      );
    } else {
      obj.cooperativeDomainList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDomainMap>): MsgCreateDomainMap {
    const message = { ...baseMsgCreateDomainMap } as MsgCreateDomainMap;
    message.cooperativeDomainList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = object.domainIndex;
    } else {
      message.domainIndex = "";
    }
    if (
      object.cooperativeDomainList !== undefined &&
      object.cooperativeDomainList !== null
    ) {
      for (const e of object.cooperativeDomainList) {
        message.cooperativeDomainList.push(CooperativeDomain.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreateDomainMapResponse: object = {};

export const MsgCreateDomainMapResponse = {
  encode(
    _: MsgCreateDomainMapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDomainMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDomainMapResponse,
    } as MsgCreateDomainMapResponse;
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

  fromJSON(_: any): MsgCreateDomainMapResponse {
    const message = {
      ...baseMsgCreateDomainMapResponse,
    } as MsgCreateDomainMapResponse;
    return message;
  },

  toJSON(_: MsgCreateDomainMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateDomainMapResponse>
  ): MsgCreateDomainMapResponse {
    const message = {
      ...baseMsgCreateDomainMapResponse,
    } as MsgCreateDomainMapResponse;
    return message;
  },
};

const baseMsgUpdateDomainMap: object = { creator: "", domainIndex: "" };

export const MsgUpdateDomainMap = {
  encode(
    message: MsgUpdateDomainMap,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.domainIndex !== "") {
      writer.uint32(18).string(message.domainIndex);
    }
    for (const v of message.cooperativeDomainList) {
      CooperativeDomain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDomainMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDomainMap } as MsgUpdateDomainMap;
    message.cooperativeDomainList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.domainIndex = reader.string();
          break;
        case 3:
          message.cooperativeDomainList.push(
            CooperativeDomain.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDomainMap {
    const message = { ...baseMsgUpdateDomainMap } as MsgUpdateDomainMap;
    message.cooperativeDomainList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = String(object.domainIndex);
    } else {
      message.domainIndex = "";
    }
    if (
      object.cooperativeDomainList !== undefined &&
      object.cooperativeDomainList !== null
    ) {
      for (const e of object.cooperativeDomainList) {
        message.cooperativeDomainList.push(CooperativeDomain.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateDomainMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.domainIndex !== undefined &&
      (obj.domainIndex = message.domainIndex);
    if (message.cooperativeDomainList) {
      obj.cooperativeDomainList = message.cooperativeDomainList.map((e) =>
        e ? CooperativeDomain.toJSON(e) : undefined
      );
    } else {
      obj.cooperativeDomainList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDomainMap>): MsgUpdateDomainMap {
    const message = { ...baseMsgUpdateDomainMap } as MsgUpdateDomainMap;
    message.cooperativeDomainList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = object.domainIndex;
    } else {
      message.domainIndex = "";
    }
    if (
      object.cooperativeDomainList !== undefined &&
      object.cooperativeDomainList !== null
    ) {
      for (const e of object.cooperativeDomainList) {
        message.cooperativeDomainList.push(CooperativeDomain.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgUpdateDomainMapResponse: object = {};

export const MsgUpdateDomainMapResponse = {
  encode(
    _: MsgUpdateDomainMapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDomainMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDomainMapResponse,
    } as MsgUpdateDomainMapResponse;
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

  fromJSON(_: any): MsgUpdateDomainMapResponse {
    const message = {
      ...baseMsgUpdateDomainMapResponse,
    } as MsgUpdateDomainMapResponse;
    return message;
  },

  toJSON(_: MsgUpdateDomainMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDomainMapResponse>
  ): MsgUpdateDomainMapResponse {
    const message = {
      ...baseMsgUpdateDomainMapResponse,
    } as MsgUpdateDomainMapResponse;
    return message;
  },
};

const baseMsgDeleteDomainMap: object = { creator: "", domainIndex: "" };

export const MsgDeleteDomainMap = {
  encode(
    message: MsgDeleteDomainMap,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.domainIndex !== "") {
      writer.uint32(18).string(message.domainIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDomainMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDomainMap } as MsgDeleteDomainMap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.domainIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDomainMap {
    const message = { ...baseMsgDeleteDomainMap } as MsgDeleteDomainMap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = String(object.domainIndex);
    } else {
      message.domainIndex = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteDomainMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.domainIndex !== undefined &&
      (obj.domainIndex = message.domainIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteDomainMap>): MsgDeleteDomainMap {
    const message = { ...baseMsgDeleteDomainMap } as MsgDeleteDomainMap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.domainIndex !== undefined && object.domainIndex !== null) {
      message.domainIndex = object.domainIndex;
    } else {
      message.domainIndex = "";
    }
    return message;
  },
};

const baseMsgDeleteDomainMapResponse: object = {};

export const MsgDeleteDomainMapResponse = {
  encode(
    _: MsgDeleteDomainMapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDomainMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDomainMapResponse,
    } as MsgDeleteDomainMapResponse;
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

  fromJSON(_: any): MsgDeleteDomainMapResponse {
    const message = {
      ...baseMsgDeleteDomainMapResponse,
    } as MsgDeleteDomainMapResponse;
    return message;
  },

  toJSON(_: MsgDeleteDomainMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDomainMapResponse>
  ): MsgDeleteDomainMapResponse {
    const message = {
      ...baseMsgDeleteDomainMapResponse,
    } as MsgDeleteDomainMapResponse;
    return message;
  },
};

const baseMsgCreateCooperationNetworkFeatures: object = {
  creator: "",
  depth: 0,
  cost: 0,
  interestList: "",
  locationList: "",
  lastUpdate: "",
};

export const MsgCreateCooperationNetworkFeatures = {
  encode(
    message: MsgCreateCooperationNetworkFeatures,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.depth !== 0) {
      writer.uint32(16).uint64(message.depth);
    }
    if (message.cost !== 0) {
      writer.uint32(24).uint64(message.cost);
    }
    for (const v of message.interestList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(42).string(v!);
    }
    if (message.lastUpdate !== "") {
      writer.uint32(50).string(message.lastUpdate);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCooperationNetworkFeatures {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationNetworkFeatures,
    } as MsgCreateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.interestList.push(reader.string());
          break;
        case 5:
          message.locationList.push(reader.string());
          break;
        case 6:
          message.lastUpdate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCooperationNetworkFeatures {
    const message = {
      ...baseMsgCreateCooperationNetworkFeatures,
    } as MsgCreateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateCooperationNetworkFeatures): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationNetworkFeatures>
  ): MsgCreateCooperationNetworkFeatures {
    const message = {
      ...baseMsgCreateCooperationNetworkFeatures,
    } as MsgCreateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreateCooperationNetworkFeaturesResponse: object = { id: 0 };

export const MsgCreateCooperationNetworkFeaturesResponse = {
  encode(
    message: MsgCreateCooperationNetworkFeaturesResponse,
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
  ): MsgCreateCooperationNetworkFeaturesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationNetworkFeaturesResponse,
    } as MsgCreateCooperationNetworkFeaturesResponse;
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

  fromJSON(object: any): MsgCreateCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgCreateCooperationNetworkFeaturesResponse,
    } as MsgCreateCooperationNetworkFeaturesResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCooperationNetworkFeaturesResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationNetworkFeaturesResponse>
  ): MsgCreateCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgCreateCooperationNetworkFeaturesResponse,
    } as MsgCreateCooperationNetworkFeaturesResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCooperationNetworkFeatures: object = {
  creator: "",
  id: 0,
  depth: 0,
  cost: 0,
  interestList: "",
  locationList: "",
  lastUpdate: "",
};

export const MsgUpdateCooperationNetworkFeatures = {
  encode(
    message: MsgUpdateCooperationNetworkFeatures,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.depth !== 0) {
      writer.uint32(24).uint64(message.depth);
    }
    if (message.cost !== 0) {
      writer.uint32(32).uint64(message.cost);
    }
    for (const v of message.interestList) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(50).string(v!);
    }
    if (message.lastUpdate !== "") {
      writer.uint32(58).string(message.lastUpdate);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationNetworkFeatures {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationNetworkFeatures,
    } as MsgUpdateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.interestList.push(reader.string());
          break;
        case 6:
          message.locationList.push(reader.string());
          break;
        case 7:
          message.lastUpdate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCooperationNetworkFeatures {
    const message = {
      ...baseMsgUpdateCooperationNetworkFeatures,
    } as MsgUpdateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateCooperationNetworkFeatures): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCooperationNetworkFeatures>
  ): MsgUpdateCooperationNetworkFeatures {
    const message = {
      ...baseMsgUpdateCooperationNetworkFeatures,
    } as MsgUpdateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateCooperationNetworkFeaturesResponse: object = {};

export const MsgUpdateCooperationNetworkFeaturesResponse = {
  encode(
    _: MsgUpdateCooperationNetworkFeaturesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationNetworkFeaturesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationNetworkFeaturesResponse,
    } as MsgUpdateCooperationNetworkFeaturesResponse;
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

  fromJSON(_: any): MsgUpdateCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgUpdateCooperationNetworkFeaturesResponse,
    } as MsgUpdateCooperationNetworkFeaturesResponse;
    return message;
  },

  toJSON(_: MsgUpdateCooperationNetworkFeaturesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCooperationNetworkFeaturesResponse>
  ): MsgUpdateCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgUpdateCooperationNetworkFeaturesResponse,
    } as MsgUpdateCooperationNetworkFeaturesResponse;
    return message;
  },
};

const baseMsgDeleteCooperationNetworkFeatures: object = { creator: "", id: 0 };

export const MsgDeleteCooperationNetworkFeatures = {
  encode(
    message: MsgDeleteCooperationNetworkFeatures,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationNetworkFeatures {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationNetworkFeatures,
    } as MsgDeleteCooperationNetworkFeatures;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCooperationNetworkFeatures {
    const message = {
      ...baseMsgDeleteCooperationNetworkFeatures,
    } as MsgDeleteCooperationNetworkFeatures;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCooperationNetworkFeatures): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCooperationNetworkFeatures>
  ): MsgDeleteCooperationNetworkFeatures {
    const message = {
      ...baseMsgDeleteCooperationNetworkFeatures,
    } as MsgDeleteCooperationNetworkFeatures;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCooperationNetworkFeaturesResponse: object = {};

export const MsgDeleteCooperationNetworkFeaturesResponse = {
  encode(
    _: MsgDeleteCooperationNetworkFeaturesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationNetworkFeaturesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationNetworkFeaturesResponse,
    } as MsgDeleteCooperationNetworkFeaturesResponse;
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

  fromJSON(_: any): MsgDeleteCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgDeleteCooperationNetworkFeaturesResponse,
    } as MsgDeleteCooperationNetworkFeaturesResponse;
    return message;
  },

  toJSON(_: MsgDeleteCooperationNetworkFeaturesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCooperationNetworkFeaturesResponse>
  ): MsgDeleteCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgDeleteCooperationNetworkFeaturesResponse,
    } as MsgDeleteCooperationNetworkFeaturesResponse;
    return message;
  },
};

const baseMsgCreateCooperationData: object = {
  creator: "",
  labelIndex: "",
  status: "",
  cost: 0,
  lastUpdate: "",
  interest: "",
};

export const MsgCreateCooperationData = {
  encode(
    message: MsgCreateCooperationData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.labelIndex !== "") {
      writer.uint32(18).string(message.labelIndex);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.cost !== 0) {
      writer.uint32(40).uint64(message.cost);
    }
    if (message.lastUpdate !== "") {
      writer.uint32(50).string(message.lastUpdate);
    }
    if (message.interest !== "") {
      writer.uint32(58).string(message.interest);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCooperationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationData,
    } as MsgCreateCooperationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.labelIndex = reader.string();
          break;
        case 3:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.lastUpdate = reader.string();
          break;
        case 7:
          message.interest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCooperationData {
    const message = {
      ...baseMsgCreateCooperationData,
    } as MsgCreateCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCooperationData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.labelIndex !== undefined && (obj.labelIndex = message.labelIndex);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.cost !== undefined && (obj.cost = message.cost);
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    message.interest !== undefined && (obj.interest = message.interest);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationData>
  ): MsgCreateCooperationData {
    const message = {
      ...baseMsgCreateCooperationData,
    } as MsgCreateCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    return message;
  },
};

const baseMsgCreateCooperationDataResponse: object = {};

export const MsgCreateCooperationDataResponse = {
  encode(
    _: MsgCreateCooperationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCooperationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationDataResponse,
    } as MsgCreateCooperationDataResponse;
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

  fromJSON(_: any): MsgCreateCooperationDataResponse {
    const message = {
      ...baseMsgCreateCooperationDataResponse,
    } as MsgCreateCooperationDataResponse;
    return message;
  },

  toJSON(_: MsgCreateCooperationDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateCooperationDataResponse>
  ): MsgCreateCooperationDataResponse {
    const message = {
      ...baseMsgCreateCooperationDataResponse,
    } as MsgCreateCooperationDataResponse;
    return message;
  },
};

const baseMsgUpdateCooperationData: object = {
  creator: "",
  labelIndex: "",
  status: "",
  cost: 0,
  lastUpdate: "",
  interest: "",
};

export const MsgUpdateCooperationData = {
  encode(
    message: MsgUpdateCooperationData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.labelIndex !== "") {
      writer.uint32(18).string(message.labelIndex);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.cost !== 0) {
      writer.uint32(40).uint64(message.cost);
    }
    if (message.lastUpdate !== "") {
      writer.uint32(50).string(message.lastUpdate);
    }
    if (message.interest !== "") {
      writer.uint32(58).string(message.interest);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationData,
    } as MsgUpdateCooperationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.labelIndex = reader.string();
          break;
        case 3:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.lastUpdate = reader.string();
          break;
        case 7:
          message.interest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCooperationData {
    const message = {
      ...baseMsgUpdateCooperationData,
    } as MsgUpdateCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCooperationData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.labelIndex !== undefined && (obj.labelIndex = message.labelIndex);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.cost !== undefined && (obj.cost = message.cost);
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    message.interest !== undefined && (obj.interest = message.interest);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCooperationData>
  ): MsgUpdateCooperationData {
    const message = {
      ...baseMsgUpdateCooperationData,
    } as MsgUpdateCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    return message;
  },
};

const baseMsgUpdateCooperationDataResponse: object = {};

export const MsgUpdateCooperationDataResponse = {
  encode(
    _: MsgUpdateCooperationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationDataResponse,
    } as MsgUpdateCooperationDataResponse;
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

  fromJSON(_: any): MsgUpdateCooperationDataResponse {
    const message = {
      ...baseMsgUpdateCooperationDataResponse,
    } as MsgUpdateCooperationDataResponse;
    return message;
  },

  toJSON(_: MsgUpdateCooperationDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCooperationDataResponse>
  ): MsgUpdateCooperationDataResponse {
    const message = {
      ...baseMsgUpdateCooperationDataResponse,
    } as MsgUpdateCooperationDataResponse;
    return message;
  },
};

const baseMsgDeleteCooperationData: object = { creator: "", labelIndex: "" };

export const MsgDeleteCooperationData = {
  encode(
    message: MsgDeleteCooperationData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.labelIndex !== "") {
      writer.uint32(18).string(message.labelIndex);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationData,
    } as MsgDeleteCooperationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.labelIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCooperationData {
    const message = {
      ...baseMsgDeleteCooperationData,
    } as MsgDeleteCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.labelIndex !== undefined && object.labelIndex !== null) {
      message.labelIndex = String(object.labelIndex);
    } else {
      message.labelIndex = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteCooperationData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.labelIndex !== undefined && (obj.labelIndex = message.labelIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCooperationData>
  ): MsgDeleteCooperationData {
    const message = {
      ...baseMsgDeleteCooperationData,
    } as MsgDeleteCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.labelIndex !== undefined && object.labelIndex !== null) {
      message.labelIndex = object.labelIndex;
    } else {
      message.labelIndex = "";
    }
    return message;
  },
};

const baseMsgDeleteCooperationDataResponse: object = {};

export const MsgDeleteCooperationDataResponse = {
  encode(
    _: MsgDeleteCooperationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationDataResponse,
    } as MsgDeleteCooperationDataResponse;
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

  fromJSON(_: any): MsgDeleteCooperationDataResponse {
    const message = {
      ...baseMsgDeleteCooperationDataResponse,
    } as MsgDeleteCooperationDataResponse;
    return message;
  },

  toJSON(_: MsgDeleteCooperationDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCooperationDataResponse>
  ): MsgDeleteCooperationDataResponse {
    const message = {
      ...baseMsgDeleteCooperationDataResponse,
    } as MsgDeleteCooperationDataResponse;
    return message;
  },
};

const baseMsgCreateCooperationNetwork: object = {
  creator: "",
  label: "",
  creationTimestamp: "",
  updateTimestamp: "",
};

export const MsgCreateCooperationNetwork = {
  encode(
    message: MsgCreateCooperationNetwork,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCooperationNetwork {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationNetwork,
    } as MsgCreateCooperationNetwork;
    message.domainMapList = [];
    message.cooperationDataList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCooperationNetwork {
    const message = {
      ...baseMsgCreateCooperationNetwork,
    } as MsgCreateCooperationNetwork;
    message.domainMapList = [];
    message.cooperationDataList = [];
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
    return message;
  },

  toJSON(message: MsgCreateCooperationNetwork): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationNetwork>
  ): MsgCreateCooperationNetwork {
    const message = {
      ...baseMsgCreateCooperationNetwork,
    } as MsgCreateCooperationNetwork;
    message.domainMapList = [];
    message.cooperationDataList = [];
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
    return message;
  },
};

const baseMsgCreateCooperationNetworkResponse: object = { id: 0 };

export const MsgCreateCooperationNetworkResponse = {
  encode(
    message: MsgCreateCooperationNetworkResponse,
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
  ): MsgCreateCooperationNetworkResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationNetworkResponse,
    } as MsgCreateCooperationNetworkResponse;
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

  fromJSON(object: any): MsgCreateCooperationNetworkResponse {
    const message = {
      ...baseMsgCreateCooperationNetworkResponse,
    } as MsgCreateCooperationNetworkResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCooperationNetworkResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationNetworkResponse>
  ): MsgCreateCooperationNetworkResponse {
    const message = {
      ...baseMsgCreateCooperationNetworkResponse,
    } as MsgCreateCooperationNetworkResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCooperationNetwork: object = {
  creator: "",
  id: 0,
  label: "",
  creationTimestamp: "",
  updateTimestamp: "",
};

export const MsgUpdateCooperationNetwork = {
  encode(
    message: MsgUpdateCooperationNetwork,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    for (const v of message.domainMapList) {
      DomainMap.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.cooperationDataList) {
      CooperationData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.features !== undefined) {
      CooperationNetworkFeatures.encode(
        message.features,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(58).string(message.creationTimestamp);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(66).string(message.updateTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationNetwork {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationNetwork,
    } as MsgUpdateCooperationNetwork;
    message.domainMapList = [];
    message.cooperationDataList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.domainMapList.push(DomainMap.decode(reader, reader.uint32()));
          break;
        case 5:
          message.cooperationDataList.push(
            CooperationData.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.features = CooperationNetworkFeatures.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.creationTimestamp = reader.string();
          break;
        case 8:
          message.updateTimestamp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCooperationNetwork {
    const message = {
      ...baseMsgUpdateCooperationNetwork,
    } as MsgUpdateCooperationNetwork;
    message.domainMapList = [];
    message.cooperationDataList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateCooperationNetwork): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCooperationNetwork>
  ): MsgUpdateCooperationNetwork {
    const message = {
      ...baseMsgUpdateCooperationNetwork,
    } as MsgUpdateCooperationNetwork;
    message.domainMapList = [];
    message.cooperationDataList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateCooperationNetworkResponse: object = {};

export const MsgUpdateCooperationNetworkResponse = {
  encode(
    _: MsgUpdateCooperationNetworkResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationNetworkResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationNetworkResponse,
    } as MsgUpdateCooperationNetworkResponse;
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

  fromJSON(_: any): MsgUpdateCooperationNetworkResponse {
    const message = {
      ...baseMsgUpdateCooperationNetworkResponse,
    } as MsgUpdateCooperationNetworkResponse;
    return message;
  },

  toJSON(_: MsgUpdateCooperationNetworkResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCooperationNetworkResponse>
  ): MsgUpdateCooperationNetworkResponse {
    const message = {
      ...baseMsgUpdateCooperationNetworkResponse,
    } as MsgUpdateCooperationNetworkResponse;
    return message;
  },
};

const baseMsgDeleteCooperationNetwork: object = { creator: "", id: 0 };

export const MsgDeleteCooperationNetwork = {
  encode(
    message: MsgDeleteCooperationNetwork,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationNetwork {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationNetwork,
    } as MsgDeleteCooperationNetwork;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCooperationNetwork {
    const message = {
      ...baseMsgDeleteCooperationNetwork,
    } as MsgDeleteCooperationNetwork;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCooperationNetwork): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCooperationNetwork>
  ): MsgDeleteCooperationNetwork {
    const message = {
      ...baseMsgDeleteCooperationNetwork,
    } as MsgDeleteCooperationNetwork;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCooperationNetworkResponse: object = {};

export const MsgDeleteCooperationNetworkResponse = {
  encode(
    _: MsgDeleteCooperationNetworkResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationNetworkResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationNetworkResponse,
    } as MsgDeleteCooperationNetworkResponse;
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

  fromJSON(_: any): MsgDeleteCooperationNetworkResponse {
    const message = {
      ...baseMsgDeleteCooperationNetworkResponse,
    } as MsgDeleteCooperationNetworkResponse;
    return message;
  },

  toJSON(_: MsgDeleteCooperationNetworkResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCooperationNetworkResponse>
  ): MsgDeleteCooperationNetworkResponse {
    const message = {
      ...baseMsgDeleteCooperationNetworkResponse,
    } as MsgDeleteCooperationNetworkResponse;
    return message;
  },
};

const baseMsgGenerateCooperationNetwork: object = { creator: "" };

export const MsgGenerateCooperationNetwork = {
  encode(
    message: MsgGenerateCooperationNetwork,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgGenerateCooperationNetwork {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgGenerateCooperationNetwork,
    } as MsgGenerateCooperationNetwork;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGenerateCooperationNetwork {
    const message = {
      ...baseMsgGenerateCooperationNetwork,
    } as MsgGenerateCooperationNetwork;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgGenerateCooperationNetwork): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgGenerateCooperationNetwork>
  ): MsgGenerateCooperationNetwork {
    const message = {
      ...baseMsgGenerateCooperationNetwork,
    } as MsgGenerateCooperationNetwork;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgGenerateCooperationNetworkResponse: object = {};

export const MsgGenerateCooperationNetworkResponse = {
  encode(
    _: MsgGenerateCooperationNetworkResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgGenerateCooperationNetworkResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgGenerateCooperationNetworkResponse,
    } as MsgGenerateCooperationNetworkResponse;
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

  fromJSON(_: any): MsgGenerateCooperationNetworkResponse {
    const message = {
      ...baseMsgGenerateCooperationNetworkResponse,
    } as MsgGenerateCooperationNetworkResponse;
    return message;
  },

  toJSON(_: MsgGenerateCooperationNetworkResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgGenerateCooperationNetworkResponse>
  ): MsgGenerateCooperationNetworkResponse {
    const message = {
      ...baseMsgGenerateCooperationNetworkResponse,
    } as MsgGenerateCooperationNetworkResponse;
    return message;
  },
};

const baseMsgCreateUpdatePolicy: object = {
  creator: "",
  query: false,
  event: false,
  periodicalQuery: false,
};

export const MsgCreateUpdatePolicy = {
  encode(
    message: MsgCreateUpdatePolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.query === true) {
      writer.uint32(24).bool(message.query);
    }
    if (message.event === true) {
      writer.uint32(32).bool(message.event);
    }
    if (message.periodicalQuery === true) {
      writer.uint32(40).bool(message.periodicalQuery);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUpdatePolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateUpdatePolicy } as MsgCreateUpdatePolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.query = reader.bool();
          break;
        case 4:
          message.event = reader.bool();
          break;
        case 5:
          message.periodicalQuery = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUpdatePolicy {
    const message = { ...baseMsgCreateUpdatePolicy } as MsgCreateUpdatePolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = Boolean(object.query);
    } else {
      message.query = false;
    }
    if (object.event !== undefined && object.event !== null) {
      message.event = Boolean(object.event);
    } else {
      message.event = false;
    }
    if (
      object.periodicalQuery !== undefined &&
      object.periodicalQuery !== null
    ) {
      message.periodicalQuery = Boolean(object.periodicalQuery);
    } else {
      message.periodicalQuery = false;
    }
    return message;
  },

  toJSON(message: MsgCreateUpdatePolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.query !== undefined && (obj.query = message.query);
    message.event !== undefined && (obj.event = message.event);
    message.periodicalQuery !== undefined &&
      (obj.periodicalQuery = message.periodicalQuery);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateUpdatePolicy>
  ): MsgCreateUpdatePolicy {
    const message = { ...baseMsgCreateUpdatePolicy } as MsgCreateUpdatePolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = false;
    }
    if (object.event !== undefined && object.event !== null) {
      message.event = object.event;
    } else {
      message.event = false;
    }
    if (
      object.periodicalQuery !== undefined &&
      object.periodicalQuery !== null
    ) {
      message.periodicalQuery = object.periodicalQuery;
    } else {
      message.periodicalQuery = false;
    }
    return message;
  },
};

const baseMsgCreateUpdatePolicyResponse: object = {};

export const MsgCreateUpdatePolicyResponse = {
  encode(
    _: MsgCreateUpdatePolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateUpdatePolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateUpdatePolicyResponse,
    } as MsgCreateUpdatePolicyResponse;
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

  fromJSON(_: any): MsgCreateUpdatePolicyResponse {
    const message = {
      ...baseMsgCreateUpdatePolicyResponse,
    } as MsgCreateUpdatePolicyResponse;
    return message;
  },

  toJSON(_: MsgCreateUpdatePolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateUpdatePolicyResponse>
  ): MsgCreateUpdatePolicyResponse {
    const message = {
      ...baseMsgCreateUpdatePolicyResponse,
    } as MsgCreateUpdatePolicyResponse;
    return message;
  },
};

const baseMsgUpdateUpdatePolicy: object = {
  creator: "",
  query: false,
  event: false,
  periodicalQuery: false,
};

export const MsgUpdateUpdatePolicy = {
  encode(
    message: MsgUpdateUpdatePolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.query === true) {
      writer.uint32(24).bool(message.query);
    }
    if (message.event === true) {
      writer.uint32(32).bool(message.event);
    }
    if (message.periodicalQuery === true) {
      writer.uint32(40).bool(message.periodicalQuery);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUpdatePolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateUpdatePolicy } as MsgUpdateUpdatePolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.query = reader.bool();
          break;
        case 4:
          message.event = reader.bool();
          break;
        case 5:
          message.periodicalQuery = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateUpdatePolicy {
    const message = { ...baseMsgUpdateUpdatePolicy } as MsgUpdateUpdatePolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = Boolean(object.query);
    } else {
      message.query = false;
    }
    if (object.event !== undefined && object.event !== null) {
      message.event = Boolean(object.event);
    } else {
      message.event = false;
    }
    if (
      object.periodicalQuery !== undefined &&
      object.periodicalQuery !== null
    ) {
      message.periodicalQuery = Boolean(object.periodicalQuery);
    } else {
      message.periodicalQuery = false;
    }
    return message;
  },

  toJSON(message: MsgUpdateUpdatePolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.query !== undefined && (obj.query = message.query);
    message.event !== undefined && (obj.event = message.event);
    message.periodicalQuery !== undefined &&
      (obj.periodicalQuery = message.periodicalQuery);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateUpdatePolicy>
  ): MsgUpdateUpdatePolicy {
    const message = { ...baseMsgUpdateUpdatePolicy } as MsgUpdateUpdatePolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = false;
    }
    if (object.event !== undefined && object.event !== null) {
      message.event = object.event;
    } else {
      message.event = false;
    }
    if (
      object.periodicalQuery !== undefined &&
      object.periodicalQuery !== null
    ) {
      message.periodicalQuery = object.periodicalQuery;
    } else {
      message.periodicalQuery = false;
    }
    return message;
  },
};

const baseMsgUpdateUpdatePolicyResponse: object = {};

export const MsgUpdateUpdatePolicyResponse = {
  encode(
    _: MsgUpdateUpdatePolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateUpdatePolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateUpdatePolicyResponse,
    } as MsgUpdateUpdatePolicyResponse;
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

  fromJSON(_: any): MsgUpdateUpdatePolicyResponse {
    const message = {
      ...baseMsgUpdateUpdatePolicyResponse,
    } as MsgUpdateUpdatePolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateUpdatePolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateUpdatePolicyResponse>
  ): MsgUpdateUpdatePolicyResponse {
    const message = {
      ...baseMsgUpdateUpdatePolicyResponse,
    } as MsgUpdateUpdatePolicyResponse;
    return message;
  },
};

const baseMsgDeleteUpdatePolicy: object = { creator: "" };

export const MsgDeleteUpdatePolicy = {
  encode(
    message: MsgDeleteUpdatePolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUpdatePolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteUpdatePolicy } as MsgDeleteUpdatePolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteUpdatePolicy {
    const message = { ...baseMsgDeleteUpdatePolicy } as MsgDeleteUpdatePolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteUpdatePolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteUpdatePolicy>
  ): MsgDeleteUpdatePolicy {
    const message = { ...baseMsgDeleteUpdatePolicy } as MsgDeleteUpdatePolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteUpdatePolicyResponse: object = {};

export const MsgDeleteUpdatePolicyResponse = {
  encode(
    _: MsgDeleteUpdatePolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteUpdatePolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteUpdatePolicyResponse,
    } as MsgDeleteUpdatePolicyResponse;
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

  fromJSON(_: any): MsgDeleteUpdatePolicyResponse {
    const message = {
      ...baseMsgDeleteUpdatePolicyResponse,
    } as MsgDeleteUpdatePolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteUpdatePolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteUpdatePolicyResponse>
  ): MsgDeleteUpdatePolicyResponse {
    const message = {
      ...baseMsgDeleteUpdatePolicyResponse,
    } as MsgDeleteUpdatePolicyResponse;
    return message;
  },
};

const baseMsgCreateCooperativeDomain: object = {
  creator: "",
  name: "",
  domainType: "",
  location: "",
};

export const MsgCreateCooperativeDomain = {
  encode(
    message: MsgCreateCooperativeDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.domainType !== "") {
      writer.uint32(26).string(message.domainType);
    }
    if (message.location !== "") {
      writer.uint32(34).string(message.location);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCooperativeDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperativeDomain,
    } as MsgCreateCooperativeDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.domainType = reader.string();
          break;
        case 4:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCooperativeDomain {
    const message = {
      ...baseMsgCreateCooperativeDomain,
    } as MsgCreateCooperativeDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = String(object.domainType);
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCooperativeDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperativeDomain>
  ): MsgCreateCooperativeDomain {
    const message = {
      ...baseMsgCreateCooperativeDomain,
    } as MsgCreateCooperativeDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = object.domainType;
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    return message;
  },
};

const baseMsgCreateCooperativeDomainResponse: object = { id: 0 };

export const MsgCreateCooperativeDomainResponse = {
  encode(
    message: MsgCreateCooperativeDomainResponse,
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
  ): MsgCreateCooperativeDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperativeDomainResponse,
    } as MsgCreateCooperativeDomainResponse;
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

  fromJSON(object: any): MsgCreateCooperativeDomainResponse {
    const message = {
      ...baseMsgCreateCooperativeDomainResponse,
    } as MsgCreateCooperativeDomainResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCooperativeDomainResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperativeDomainResponse>
  ): MsgCreateCooperativeDomainResponse {
    const message = {
      ...baseMsgCreateCooperativeDomainResponse,
    } as MsgCreateCooperativeDomainResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCooperativeDomain: object = {
  creator: "",
  id: 0,
  name: "",
  domainType: "",
  location: "",
};

export const MsgUpdateCooperativeDomain = {
  encode(
    message: MsgUpdateCooperativeDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.domainType !== "") {
      writer.uint32(34).string(message.domainType);
    }
    if (message.location !== "") {
      writer.uint32(42).string(message.location);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperativeDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperativeDomain,
    } as MsgUpdateCooperativeDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.domainType = reader.string();
          break;
        case 5:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCooperativeDomain {
    const message = {
      ...baseMsgUpdateCooperativeDomain,
    } as MsgUpdateCooperativeDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = String(object.domainType);
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCooperativeDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCooperativeDomain>
  ): MsgUpdateCooperativeDomain {
    const message = {
      ...baseMsgUpdateCooperativeDomain,
    } as MsgUpdateCooperativeDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = object.domainType;
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    return message;
  },
};

const baseMsgUpdateCooperativeDomainResponse: object = {};

export const MsgUpdateCooperativeDomainResponse = {
  encode(
    _: MsgUpdateCooperativeDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperativeDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperativeDomainResponse,
    } as MsgUpdateCooperativeDomainResponse;
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

  fromJSON(_: any): MsgUpdateCooperativeDomainResponse {
    const message = {
      ...baseMsgUpdateCooperativeDomainResponse,
    } as MsgUpdateCooperativeDomainResponse;
    return message;
  },

  toJSON(_: MsgUpdateCooperativeDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCooperativeDomainResponse>
  ): MsgUpdateCooperativeDomainResponse {
    const message = {
      ...baseMsgUpdateCooperativeDomainResponse,
    } as MsgUpdateCooperativeDomainResponse;
    return message;
  },
};

const baseMsgDeleteCooperativeDomain: object = { creator: "", id: 0 };

export const MsgDeleteCooperativeDomain = {
  encode(
    message: MsgDeleteCooperativeDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperativeDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperativeDomain,
    } as MsgDeleteCooperativeDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCooperativeDomain {
    const message = {
      ...baseMsgDeleteCooperativeDomain,
    } as MsgDeleteCooperativeDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCooperativeDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCooperativeDomain>
  ): MsgDeleteCooperativeDomain {
    const message = {
      ...baseMsgDeleteCooperativeDomain,
    } as MsgDeleteCooperativeDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCooperativeDomainResponse: object = {};

export const MsgDeleteCooperativeDomainResponse = {
  encode(
    _: MsgDeleteCooperativeDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperativeDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperativeDomainResponse,
    } as MsgDeleteCooperativeDomainResponse;
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

  fromJSON(_: any): MsgDeleteCooperativeDomainResponse {
    const message = {
      ...baseMsgDeleteCooperativeDomainResponse,
    } as MsgDeleteCooperativeDomainResponse;
    return message;
  },

  toJSON(_: MsgDeleteCooperativeDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCooperativeDomainResponse>
  ): MsgDeleteCooperativeDomainResponse {
    const message = {
      ...baseMsgDeleteCooperativeDomainResponse,
    } as MsgDeleteCooperativeDomainResponse;
    return message;
  },
};

const baseMsgCreateDelegationPath: object = { creator: "" };

export const MsgCreateDelegationPath = {
  encode(
    message: MsgCreateDelegationPath,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDelegationPath {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationPath,
    } as MsgCreateDelegationPath;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.delegator = CooperativeDomain.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegatee = CooperativeDomain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationPath {
    const message = {
      ...baseMsgCreateDelegationPath,
    } as MsgCreateDelegationPath;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateDelegationPath): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.delegator !== undefined &&
      (obj.delegator = message.delegator
        ? CooperativeDomain.toJSON(message.delegator)
        : undefined);
    message.delegatee !== undefined &&
      (obj.delegatee = message.delegatee
        ? CooperativeDomain.toJSON(message.delegatee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationPath>
  ): MsgCreateDelegationPath {
    const message = {
      ...baseMsgCreateDelegationPath,
    } as MsgCreateDelegationPath;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateDelegationPathResponse: object = { id: 0 };

export const MsgCreateDelegationPathResponse = {
  encode(
    message: MsgCreateDelegationPathResponse,
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
  ): MsgCreateDelegationPathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationPathResponse,
    } as MsgCreateDelegationPathResponse;
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

  fromJSON(object: any): MsgCreateDelegationPathResponse {
    const message = {
      ...baseMsgCreateDelegationPathResponse,
    } as MsgCreateDelegationPathResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationPathResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationPathResponse>
  ): MsgCreateDelegationPathResponse {
    const message = {
      ...baseMsgCreateDelegationPathResponse,
    } as MsgCreateDelegationPathResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationPath: object = { creator: "", id: 0 };

export const MsgUpdateDelegationPath = {
  encode(
    message: MsgUpdateDelegationPath,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.delegator !== undefined) {
      CooperativeDomain.encode(
        message.delegator,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.delegatee !== undefined) {
      CooperativeDomain.encode(
        message.delegatee,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.pathList) {
      Path.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDelegationPath {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationPath,
    } as MsgUpdateDelegationPath;
    message.pathList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.delegator = CooperativeDomain.decode(reader, reader.uint32());
          break;
        case 4:
          message.delegatee = CooperativeDomain.decode(reader, reader.uint32());
          break;
        case 5:
          message.pathList.push(Path.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDelegationPath {
    const message = {
      ...baseMsgUpdateDelegationPath,
    } as MsgUpdateDelegationPath;
    message.pathList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateDelegationPath): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDelegationPath>
  ): MsgUpdateDelegationPath {
    const message = {
      ...baseMsgUpdateDelegationPath,
    } as MsgUpdateDelegationPath;
    message.pathList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateDelegationPathResponse: object = {};

export const MsgUpdateDelegationPathResponse = {
  encode(
    _: MsgUpdateDelegationPathResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationPathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationPathResponse,
    } as MsgUpdateDelegationPathResponse;
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

  fromJSON(_: any): MsgUpdateDelegationPathResponse {
    const message = {
      ...baseMsgUpdateDelegationPathResponse,
    } as MsgUpdateDelegationPathResponse;
    return message;
  },

  toJSON(_: MsgUpdateDelegationPathResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDelegationPathResponse>
  ): MsgUpdateDelegationPathResponse {
    const message = {
      ...baseMsgUpdateDelegationPathResponse,
    } as MsgUpdateDelegationPathResponse;
    return message;
  },
};

const baseMsgDeleteDelegationPath: object = { creator: "", id: 0 };

export const MsgDeleteDelegationPath = {
  encode(
    message: MsgDeleteDelegationPath,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDelegationPath {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationPath,
    } as MsgDeleteDelegationPath;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDelegationPath {
    const message = {
      ...baseMsgDeleteDelegationPath,
    } as MsgDeleteDelegationPath;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDelegationPath): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDelegationPath>
  ): MsgDeleteDelegationPath {
    const message = {
      ...baseMsgDeleteDelegationPath,
    } as MsgDeleteDelegationPath;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDelegationPathResponse: object = {};

export const MsgDeleteDelegationPathResponse = {
  encode(
    _: MsgDeleteDelegationPathResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationPathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationPathResponse,
    } as MsgDeleteDelegationPathResponse;
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

  fromJSON(_: any): MsgDeleteDelegationPathResponse {
    const message = {
      ...baseMsgDeleteDelegationPathResponse,
    } as MsgDeleteDelegationPathResponse;
    return message;
  },

  toJSON(_: MsgDeleteDelegationPathResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDelegationPathResponse>
  ): MsgDeleteDelegationPathResponse {
    const message = {
      ...baseMsgDeleteDelegationPathResponse,
    } as MsgDeleteDelegationPathResponse;
    return message;
  },
};

const baseMsgCreatePath: object = { creator: "" };

export const MsgCreatePath = {
  encode(message: MsgCreatePath, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.domainList) {
      CooperativeDomain.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePath {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePath } as MsgCreatePath;
    message.domainList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.domainList.push(
            CooperativeDomain.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePath {
    const message = { ...baseMsgCreatePath } as MsgCreatePath;
    message.domainList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(CooperativeDomain.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreatePath): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) =>
        e ? CooperativeDomain.toJSON(e) : undefined
      );
    } else {
      obj.domainList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePath>): MsgCreatePath {
    const message = { ...baseMsgCreatePath } as MsgCreatePath;
    message.domainList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(CooperativeDomain.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreatePathResponse: object = { id: 0 };

export const MsgCreatePathResponse = {
  encode(
    message: MsgCreatePathResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePathResponse } as MsgCreatePathResponse;
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

  fromJSON(object: any): MsgCreatePathResponse {
    const message = { ...baseMsgCreatePathResponse } as MsgCreatePathResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePathResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePathResponse>
  ): MsgCreatePathResponse {
    const message = { ...baseMsgCreatePathResponse } as MsgCreatePathResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePath: object = { creator: "", id: 0 };

export const MsgUpdatePath = {
  encode(message: MsgUpdatePath, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    for (const v of message.domainList) {
      CooperativeDomain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePath {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePath } as MsgUpdatePath;
    message.domainList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.domainList.push(
            CooperativeDomain.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePath {
    const message = { ...baseMsgUpdatePath } as MsgUpdatePath;
    message.domainList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(CooperativeDomain.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdatePath): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) =>
        e ? CooperativeDomain.toJSON(e) : undefined
      );
    } else {
      obj.domainList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePath>): MsgUpdatePath {
    const message = { ...baseMsgUpdatePath } as MsgUpdatePath;
    message.domainList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(CooperativeDomain.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgUpdatePathResponse: object = {};

export const MsgUpdatePathResponse = {
  encode(_: MsgUpdatePathResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePathResponse } as MsgUpdatePathResponse;
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

  fromJSON(_: any): MsgUpdatePathResponse {
    const message = { ...baseMsgUpdatePathResponse } as MsgUpdatePathResponse;
    return message;
  },

  toJSON(_: MsgUpdatePathResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdatePathResponse>): MsgUpdatePathResponse {
    const message = { ...baseMsgUpdatePathResponse } as MsgUpdatePathResponse;
    return message;
  },
};

const baseMsgDeletePath: object = { creator: "", id: 0 };

export const MsgDeletePath = {
  encode(message: MsgDeletePath, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePath {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePath } as MsgDeletePath;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePath {
    const message = { ...baseMsgDeletePath } as MsgDeletePath;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePath): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePath>): MsgDeletePath {
    const message = { ...baseMsgDeletePath } as MsgDeletePath;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeletePathResponse: object = {};

export const MsgDeletePathResponse = {
  encode(_: MsgDeletePathResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePathResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePathResponse } as MsgDeletePathResponse;
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

  fromJSON(_: any): MsgDeletePathResponse {
    const message = { ...baseMsgDeletePathResponse } as MsgDeletePathResponse;
    return message;
  },

  toJSON(_: MsgDeletePathResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeletePathResponse>): MsgDeletePathResponse {
    const message = { ...baseMsgDeletePathResponse } as MsgDeletePathResponse;
    return message;
  },
};

const baseMsgCreateTimeCalculation: object = {
  creator: "",
  operation: "",
  startTimestamp: "",
  endTimestamp: "",
  timing: 0,
};

export const MsgCreateTimeCalculation = {
  encode(
    message: MsgCreateTimeCalculation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    if (message.timing !== 0) {
      writer.uint32(40).uint64(message.timing);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateTimeCalculation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateTimeCalculation,
    } as MsgCreateTimeCalculation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
          message.timing = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTimeCalculation {
    const message = {
      ...baseMsgCreateTimeCalculation,
    } as MsgCreateTimeCalculation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    if (object.timing !== undefined && object.timing !== null) {
      message.timing = Number(object.timing);
    } else {
      message.timing = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTimeCalculation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.operation !== undefined && (obj.operation = message.operation);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp);
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp);
    message.timing !== undefined && (obj.timing = message.timing);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTimeCalculation>
  ): MsgCreateTimeCalculation {
    const message = {
      ...baseMsgCreateTimeCalculation,
    } as MsgCreateTimeCalculation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    if (object.timing !== undefined && object.timing !== null) {
      message.timing = object.timing;
    } else {
      message.timing = 0;
    }
    return message;
  },
};

const baseMsgCreateTimeCalculationResponse: object = { id: 0 };

export const MsgCreateTimeCalculationResponse = {
  encode(
    message: MsgCreateTimeCalculationResponse,
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
  ): MsgCreateTimeCalculationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateTimeCalculationResponse,
    } as MsgCreateTimeCalculationResponse;
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

  fromJSON(object: any): MsgCreateTimeCalculationResponse {
    const message = {
      ...baseMsgCreateTimeCalculationResponse,
    } as MsgCreateTimeCalculationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTimeCalculationResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTimeCalculationResponse>
  ): MsgCreateTimeCalculationResponse {
    const message = {
      ...baseMsgCreateTimeCalculationResponse,
    } as MsgCreateTimeCalculationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateTimeCalculation: object = {
  creator: "",
  id: 0,
  operation: "",
  startTimestamp: "",
  endTimestamp: "",
  timing: 0,
};

export const MsgUpdateTimeCalculation = {
  encode(
    message: MsgUpdateTimeCalculation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.operation !== "") {
      writer.uint32(26).string(message.operation);
    }
    if (message.startTimestamp !== "") {
      writer.uint32(34).string(message.startTimestamp);
    }
    if (message.endTimestamp !== "") {
      writer.uint32(42).string(message.endTimestamp);
    }
    if (message.timing !== 0) {
      writer.uint32(48).uint64(message.timing);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTimeCalculation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTimeCalculation,
    } as MsgUpdateTimeCalculation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.operation = reader.string();
          break;
        case 4:
          message.startTimestamp = reader.string();
          break;
        case 5:
          message.endTimestamp = reader.string();
          break;
        case 6:
          message.timing = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTimeCalculation {
    const message = {
      ...baseMsgUpdateTimeCalculation,
    } as MsgUpdateTimeCalculation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.timing !== undefined && object.timing !== null) {
      message.timing = Number(object.timing);
    } else {
      message.timing = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateTimeCalculation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.operation !== undefined && (obj.operation = message.operation);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp);
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp);
    message.timing !== undefined && (obj.timing = message.timing);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateTimeCalculation>
  ): MsgUpdateTimeCalculation {
    const message = {
      ...baseMsgUpdateTimeCalculation,
    } as MsgUpdateTimeCalculation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.timing !== undefined && object.timing !== null) {
      message.timing = object.timing;
    } else {
      message.timing = 0;
    }
    return message;
  },
};

const baseMsgUpdateTimeCalculationResponse: object = {};

export const MsgUpdateTimeCalculationResponse = {
  encode(
    _: MsgUpdateTimeCalculationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTimeCalculationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTimeCalculationResponse,
    } as MsgUpdateTimeCalculationResponse;
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

  fromJSON(_: any): MsgUpdateTimeCalculationResponse {
    const message = {
      ...baseMsgUpdateTimeCalculationResponse,
    } as MsgUpdateTimeCalculationResponse;
    return message;
  },

  toJSON(_: MsgUpdateTimeCalculationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTimeCalculationResponse>
  ): MsgUpdateTimeCalculationResponse {
    const message = {
      ...baseMsgUpdateTimeCalculationResponse,
    } as MsgUpdateTimeCalculationResponse;
    return message;
  },
};

const baseMsgDeleteTimeCalculation: object = { creator: "", id: 0 };

export const MsgDeleteTimeCalculation = {
  encode(
    message: MsgDeleteTimeCalculation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteTimeCalculation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteTimeCalculation,
    } as MsgDeleteTimeCalculation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteTimeCalculation {
    const message = {
      ...baseMsgDeleteTimeCalculation,
    } as MsgDeleteTimeCalculation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteTimeCalculation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteTimeCalculation>
  ): MsgDeleteTimeCalculation {
    const message = {
      ...baseMsgDeleteTimeCalculation,
    } as MsgDeleteTimeCalculation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteTimeCalculationResponse: object = {};

export const MsgDeleteTimeCalculationResponse = {
  encode(
    _: MsgDeleteTimeCalculationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteTimeCalculationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteTimeCalculationResponse,
    } as MsgDeleteTimeCalculationResponse;
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

  fromJSON(_: any): MsgDeleteTimeCalculationResponse {
    const message = {
      ...baseMsgDeleteTimeCalculationResponse,
    } as MsgDeleteTimeCalculationResponse;
    return message;
  },

  toJSON(_: MsgDeleteTimeCalculationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteTimeCalculationResponse>
  ): MsgDeleteTimeCalculationResponse {
    const message = {
      ...baseMsgDeleteTimeCalculationResponse,
    } as MsgDeleteTimeCalculationResponse;
    return message;
  },
};

const baseMsgCreateCalculationTime: object = {
  creator: "",
  operation: "",
  startTimestamp: "",
  endTimestamp: "",
  duration: 0,
};

export const MsgCreateCalculationTime = {
  encode(
    message: MsgCreateCalculationTime,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCalculationTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCalculationTime,
    } as MsgCreateCalculationTime;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCalculationTime {
    const message = {
      ...baseMsgCreateCalculationTime,
    } as MsgCreateCalculationTime;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateCalculationTime): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.operation !== undefined && (obj.operation = message.operation);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp);
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCalculationTime>
  ): MsgCreateCalculationTime {
    const message = {
      ...baseMsgCreateCalculationTime,
    } as MsgCreateCalculationTime;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateCalculationTimeResponse: object = { id: 0 };

export const MsgCreateCalculationTimeResponse = {
  encode(
    message: MsgCreateCalculationTimeResponse,
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
  ): MsgCreateCalculationTimeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCalculationTimeResponse,
    } as MsgCreateCalculationTimeResponse;
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

  fromJSON(object: any): MsgCreateCalculationTimeResponse {
    const message = {
      ...baseMsgCreateCalculationTimeResponse,
    } as MsgCreateCalculationTimeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCalculationTimeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCalculationTimeResponse>
  ): MsgCreateCalculationTimeResponse {
    const message = {
      ...baseMsgCreateCalculationTimeResponse,
    } as MsgCreateCalculationTimeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCalculationTime: object = {
  creator: "",
  id: 0,
  operation: "",
  startTimestamp: "",
  endTimestamp: "",
  duration: 0,
};

export const MsgUpdateCalculationTime = {
  encode(
    message: MsgUpdateCalculationTime,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.operation !== "") {
      writer.uint32(26).string(message.operation);
    }
    if (message.startTimestamp !== "") {
      writer.uint32(34).string(message.startTimestamp);
    }
    if (message.endTimestamp !== "") {
      writer.uint32(42).string(message.endTimestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(48).uint64(message.duration);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCalculationTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCalculationTime,
    } as MsgUpdateCalculationTime;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.operation = reader.string();
          break;
        case 4:
          message.startTimestamp = reader.string();
          break;
        case 5:
          message.endTimestamp = reader.string();
          break;
        case 6:
          message.duration = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCalculationTime {
    const message = {
      ...baseMsgUpdateCalculationTime,
    } as MsgUpdateCalculationTime;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateCalculationTime): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.operation !== undefined && (obj.operation = message.operation);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp);
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCalculationTime>
  ): MsgUpdateCalculationTime {
    const message = {
      ...baseMsgUpdateCalculationTime,
    } as MsgUpdateCalculationTime;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateCalculationTimeResponse: object = {};

export const MsgUpdateCalculationTimeResponse = {
  encode(
    _: MsgUpdateCalculationTimeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCalculationTimeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCalculationTimeResponse,
    } as MsgUpdateCalculationTimeResponse;
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

  fromJSON(_: any): MsgUpdateCalculationTimeResponse {
    const message = {
      ...baseMsgUpdateCalculationTimeResponse,
    } as MsgUpdateCalculationTimeResponse;
    return message;
  },

  toJSON(_: MsgUpdateCalculationTimeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCalculationTimeResponse>
  ): MsgUpdateCalculationTimeResponse {
    const message = {
      ...baseMsgUpdateCalculationTimeResponse,
    } as MsgUpdateCalculationTimeResponse;
    return message;
  },
};

const baseMsgDeleteCalculationTime: object = { creator: "", id: 0 };

export const MsgDeleteCalculationTime = {
  encode(
    message: MsgDeleteCalculationTime,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCalculationTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCalculationTime,
    } as MsgDeleteCalculationTime;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCalculationTime {
    const message = {
      ...baseMsgDeleteCalculationTime,
    } as MsgDeleteCalculationTime;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCalculationTime): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCalculationTime>
  ): MsgDeleteCalculationTime {
    const message = {
      ...baseMsgDeleteCalculationTime,
    } as MsgDeleteCalculationTime;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCalculationTimeResponse: object = {};

export const MsgDeleteCalculationTimeResponse = {
  encode(
    _: MsgDeleteCalculationTimeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCalculationTimeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCalculationTimeResponse,
    } as MsgDeleteCalculationTimeResponse;
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

  fromJSON(_: any): MsgDeleteCalculationTimeResponse {
    const message = {
      ...baseMsgDeleteCalculationTimeResponse,
    } as MsgDeleteCalculationTimeResponse;
    return message;
  },

  toJSON(_: MsgDeleteCalculationTimeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCalculationTimeResponse>
  ): MsgDeleteCalculationTimeResponse {
    const message = {
      ...baseMsgDeleteCalculationTimeResponse,
    } as MsgDeleteCalculationTimeResponse;
    return message;
  },
};

const baseMsgRequestAccessPermission: object = {
  creator: "",
  subject: "",
  object: "",
  action: "",
};

export const MsgRequestAccessPermission = {
  encode(
    message: MsgRequestAccessPermission,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }
    if (message.object !== "") {
      writer.uint32(26).string(message.object);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestAccessPermission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestAccessPermission,
    } as MsgRequestAccessPermission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subject = reader.string();
          break;
        case 3:
          message.object = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestAccessPermission {
    const message = {
      ...baseMsgRequestAccessPermission,
    } as MsgRequestAccessPermission;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
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

  toJSON(message: MsgRequestAccessPermission): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.subject !== undefined && (obj.subject = message.subject);
    message.object !== undefined && (obj.object = message.object);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestAccessPermission>
  ): MsgRequestAccessPermission {
    const message = {
      ...baseMsgRequestAccessPermission,
    } as MsgRequestAccessPermission;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
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

const baseMsgRequestAccessPermissionResponse: object = { decision: "" };

export const MsgRequestAccessPermissionResponse = {
  encode(
    message: MsgRequestAccessPermissionResponse,
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
  ): MsgRequestAccessPermissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestAccessPermissionResponse,
    } as MsgRequestAccessPermissionResponse;
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

  fromJSON(object: any): MsgRequestAccessPermissionResponse {
    const message = {
      ...baseMsgRequestAccessPermissionResponse,
    } as MsgRequestAccessPermissionResponse;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    return message;
  },

  toJSON(message: MsgRequestAccessPermissionResponse): unknown {
    const obj: any = {};
    message.decision !== undefined && (obj.decision = message.decision);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestAccessPermissionResponse>
  ): MsgRequestAccessPermissionResponse {
    const message = {
      ...baseMsgRequestAccessPermissionResponse,
    } as MsgRequestAccessPermissionResponse;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    return message;
  },
};

const baseMsgCreateInterDomainAclPolicy: object = {
  creator: "",
  label: "",
  subjectList: "",
  actionList: "",
  objectList: "",
};

export const MsgCreateInterDomainAclPolicy = {
  encode(
    message: MsgCreateInterDomainAclPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    for (const v of message.subjectList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.actionList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.objectList) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateInterDomainAclPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateInterDomainAclPolicy,
    } as MsgCreateInterDomainAclPolicy;
    message.subjectList = [];
    message.actionList = [];
    message.objectList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.subjectList.push(reader.string());
          break;
        case 4:
          message.actionList.push(reader.string());
          break;
        case 5:
          message.objectList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateInterDomainAclPolicy {
    const message = {
      ...baseMsgCreateInterDomainAclPolicy,
    } as MsgCreateInterDomainAclPolicy;
    message.subjectList = [];
    message.actionList = [];
    message.objectList = [];
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
    if (object.subjectList !== undefined && object.subjectList !== null) {
      for (const e of object.subjectList) {
        message.subjectList.push(String(e));
      }
    }
    if (object.actionList !== undefined && object.actionList !== null) {
      for (const e of object.actionList) {
        message.actionList.push(String(e));
      }
    }
    if (object.objectList !== undefined && object.objectList !== null) {
      for (const e of object.objectList) {
        message.objectList.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateInterDomainAclPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    if (message.subjectList) {
      obj.subjectList = message.subjectList.map((e) => e);
    } else {
      obj.subjectList = [];
    }
    if (message.actionList) {
      obj.actionList = message.actionList.map((e) => e);
    } else {
      obj.actionList = [];
    }
    if (message.objectList) {
      obj.objectList = message.objectList.map((e) => e);
    } else {
      obj.objectList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateInterDomainAclPolicy>
  ): MsgCreateInterDomainAclPolicy {
    const message = {
      ...baseMsgCreateInterDomainAclPolicy,
    } as MsgCreateInterDomainAclPolicy;
    message.subjectList = [];
    message.actionList = [];
    message.objectList = [];
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
    if (object.subjectList !== undefined && object.subjectList !== null) {
      for (const e of object.subjectList) {
        message.subjectList.push(e);
      }
    }
    if (object.actionList !== undefined && object.actionList !== null) {
      for (const e of object.actionList) {
        message.actionList.push(e);
      }
    }
    if (object.objectList !== undefined && object.objectList !== null) {
      for (const e of object.objectList) {
        message.objectList.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateInterDomainAclPolicyResponse: object = { id: 0 };

export const MsgCreateInterDomainAclPolicyResponse = {
  encode(
    message: MsgCreateInterDomainAclPolicyResponse,
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
  ): MsgCreateInterDomainAclPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateInterDomainAclPolicyResponse,
    } as MsgCreateInterDomainAclPolicyResponse;
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

  fromJSON(object: any): MsgCreateInterDomainAclPolicyResponse {
    const message = {
      ...baseMsgCreateInterDomainAclPolicyResponse,
    } as MsgCreateInterDomainAclPolicyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateInterDomainAclPolicyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateInterDomainAclPolicyResponse>
  ): MsgCreateInterDomainAclPolicyResponse {
    const message = {
      ...baseMsgCreateInterDomainAclPolicyResponse,
    } as MsgCreateInterDomainAclPolicyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateInterDomainAclPolicy: object = {
  creator: "",
  id: 0,
  label: "",
  subjectList: "",
  actionList: "",
  objectList: "",
  status: "",
  creationTimestamp: "",
  updateTimestamp: "",
};

export const MsgUpdateInterDomainAclPolicy = {
  encode(
    message: MsgUpdateInterDomainAclPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    for (const v of message.subjectList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.actionList) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.objectList) {
      writer.uint32(50).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(66).string(message.creationTimestamp);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(74).string(message.updateTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateInterDomainAclPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateInterDomainAclPolicy,
    } as MsgUpdateInterDomainAclPolicy;
    message.subjectList = [];
    message.actionList = [];
    message.objectList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.subjectList.push(reader.string());
          break;
        case 5:
          message.actionList.push(reader.string());
          break;
        case 6:
          message.objectList.push(reader.string());
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.creationTimestamp = reader.string();
          break;
        case 9:
          message.updateTimestamp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInterDomainAclPolicy {
    const message = {
      ...baseMsgUpdateInterDomainAclPolicy,
    } as MsgUpdateInterDomainAclPolicy;
    message.subjectList = [];
    message.actionList = [];
    message.objectList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.subjectList !== undefined && object.subjectList !== null) {
      for (const e of object.subjectList) {
        message.subjectList.push(String(e));
      }
    }
    if (object.actionList !== undefined && object.actionList !== null) {
      for (const e of object.actionList) {
        message.actionList.push(String(e));
      }
    }
    if (object.objectList !== undefined && object.objectList !== null) {
      for (const e of object.objectList) {
        message.objectList.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
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
    return message;
  },

  toJSON(message: MsgUpdateInterDomainAclPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    if (message.subjectList) {
      obj.subjectList = message.subjectList.map((e) => e);
    } else {
      obj.subjectList = [];
    }
    if (message.actionList) {
      obj.actionList = message.actionList.map((e) => e);
    } else {
      obj.actionList = [];
    }
    if (message.objectList) {
      obj.objectList = message.objectList.map((e) => e);
    } else {
      obj.objectList = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateInterDomainAclPolicy>
  ): MsgUpdateInterDomainAclPolicy {
    const message = {
      ...baseMsgUpdateInterDomainAclPolicy,
    } as MsgUpdateInterDomainAclPolicy;
    message.subjectList = [];
    message.actionList = [];
    message.objectList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.subjectList !== undefined && object.subjectList !== null) {
      for (const e of object.subjectList) {
        message.subjectList.push(e);
      }
    }
    if (object.actionList !== undefined && object.actionList !== null) {
      for (const e of object.actionList) {
        message.actionList.push(e);
      }
    }
    if (object.objectList !== undefined && object.objectList !== null) {
      for (const e of object.objectList) {
        message.objectList.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
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
    return message;
  },
};

const baseMsgUpdateInterDomainAclPolicyResponse: object = {};

export const MsgUpdateInterDomainAclPolicyResponse = {
  encode(
    _: MsgUpdateInterDomainAclPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateInterDomainAclPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateInterDomainAclPolicyResponse,
    } as MsgUpdateInterDomainAclPolicyResponse;
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

  fromJSON(_: any): MsgUpdateInterDomainAclPolicyResponse {
    const message = {
      ...baseMsgUpdateInterDomainAclPolicyResponse,
    } as MsgUpdateInterDomainAclPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateInterDomainAclPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateInterDomainAclPolicyResponse>
  ): MsgUpdateInterDomainAclPolicyResponse {
    const message = {
      ...baseMsgUpdateInterDomainAclPolicyResponse,
    } as MsgUpdateInterDomainAclPolicyResponse;
    return message;
  },
};

const baseMsgDeleteInterDomainAclPolicy: object = { creator: "", id: 0 };

export const MsgDeleteInterDomainAclPolicy = {
  encode(
    message: MsgDeleteInterDomainAclPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteInterDomainAclPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteInterDomainAclPolicy,
    } as MsgDeleteInterDomainAclPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteInterDomainAclPolicy {
    const message = {
      ...baseMsgDeleteInterDomainAclPolicy,
    } as MsgDeleteInterDomainAclPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteInterDomainAclPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteInterDomainAclPolicy>
  ): MsgDeleteInterDomainAclPolicy {
    const message = {
      ...baseMsgDeleteInterDomainAclPolicy,
    } as MsgDeleteInterDomainAclPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteInterDomainAclPolicyResponse: object = {};

export const MsgDeleteInterDomainAclPolicyResponse = {
  encode(
    _: MsgDeleteInterDomainAclPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteInterDomainAclPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteInterDomainAclPolicyResponse,
    } as MsgDeleteInterDomainAclPolicyResponse;
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

  fromJSON(_: any): MsgDeleteInterDomainAclPolicyResponse {
    const message = {
      ...baseMsgDeleteInterDomainAclPolicyResponse,
    } as MsgDeleteInterDomainAclPolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteInterDomainAclPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteInterDomainAclPolicyResponse>
  ): MsgDeleteInterDomainAclPolicyResponse {
    const message = {
      ...baseMsgDeleteInterDomainAclPolicyResponse,
    } as MsgDeleteInterDomainAclPolicyResponse;
    return message;
  },
};

const baseMsgCreateInterDomainDclPolicy: object = {
  creator: "",
  label: "",
  delegatorList: "",
  delegateeList: "",
  permissionList: "",
  depth: 0,
  maxDelegations: 0,
};

export const MsgCreateInterDomainDclPolicy = {
  encode(
    message: MsgCreateInterDomainDclPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    for (const v of message.delegatorList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.delegateeList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.permissionList) {
      writer.uint32(42).string(v!);
    }
    if (message.depth !== 0) {
      writer.uint32(48).uint64(message.depth);
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(56).uint64(message.maxDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateInterDomainDclPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateInterDomainDclPolicy,
    } as MsgCreateInterDomainDclPolicy;
    message.delegatorList = [];
    message.delegateeList = [];
    message.permissionList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.delegatorList.push(reader.string());
          break;
        case 4:
          message.delegateeList.push(reader.string());
          break;
        case 5:
          message.permissionList.push(reader.string());
          break;
        case 6:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.maxDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateInterDomainDclPolicy {
    const message = {
      ...baseMsgCreateInterDomainDclPolicy,
    } as MsgCreateInterDomainDclPolicy;
    message.delegatorList = [];
    message.delegateeList = [];
    message.permissionList = [];
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
    if (object.delegatorList !== undefined && object.delegatorList !== null) {
      for (const e of object.delegatorList) {
        message.delegatorList.push(String(e));
      }
    }
    if (object.delegateeList !== undefined && object.delegateeList !== null) {
      for (const e of object.delegateeList) {
        message.delegateeList.push(String(e));
      }
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(String(e));
      }
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = Number(object.maxDelegations);
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateInterDomainDclPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    if (message.delegatorList) {
      obj.delegatorList = message.delegatorList.map((e) => e);
    } else {
      obj.delegatorList = [];
    }
    if (message.delegateeList) {
      obj.delegateeList = message.delegateeList.map((e) => e);
    } else {
      obj.delegateeList = [];
    }
    if (message.permissionList) {
      obj.permissionList = message.permissionList.map((e) => e);
    } else {
      obj.permissionList = [];
    }
    message.depth !== undefined && (obj.depth = message.depth);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateInterDomainDclPolicy>
  ): MsgCreateInterDomainDclPolicy {
    const message = {
      ...baseMsgCreateInterDomainDclPolicy,
    } as MsgCreateInterDomainDclPolicy;
    message.delegatorList = [];
    message.delegateeList = [];
    message.permissionList = [];
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
    if (object.delegatorList !== undefined && object.delegatorList !== null) {
      for (const e of object.delegatorList) {
        message.delegatorList.push(e);
      }
    }
    if (object.delegateeList !== undefined && object.delegateeList !== null) {
      for (const e of object.delegateeList) {
        message.delegateeList.push(e);
      }
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(e);
      }
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = object.maxDelegations;
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgCreateInterDomainDclPolicyResponse: object = { id: 0 };

export const MsgCreateInterDomainDclPolicyResponse = {
  encode(
    message: MsgCreateInterDomainDclPolicyResponse,
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
  ): MsgCreateInterDomainDclPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateInterDomainDclPolicyResponse,
    } as MsgCreateInterDomainDclPolicyResponse;
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

  fromJSON(object: any): MsgCreateInterDomainDclPolicyResponse {
    const message = {
      ...baseMsgCreateInterDomainDclPolicyResponse,
    } as MsgCreateInterDomainDclPolicyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateInterDomainDclPolicyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateInterDomainDclPolicyResponse>
  ): MsgCreateInterDomainDclPolicyResponse {
    const message = {
      ...baseMsgCreateInterDomainDclPolicyResponse,
    } as MsgCreateInterDomainDclPolicyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateInterDomainDclPolicy: object = {
  creator: "",
  id: 0,
  label: "",
  delegatorList: "",
  delegateeList: "",
  permissionList: "",
  creationTimestamp: "",
  updateTimestamp: "",
  depth: 0,
  maxDelegations: 0,
};

export const MsgUpdateInterDomainDclPolicy = {
  encode(
    message: MsgUpdateInterDomainDclPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    for (const v of message.delegatorList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.delegateeList) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.permissionList) {
      writer.uint32(50).string(v!);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(66).string(message.creationTimestamp);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(74).string(message.updateTimestamp);
    }
    if (message.depth !== 0) {
      writer.uint32(80).uint64(message.depth);
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(88).uint64(message.maxDelegations);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateInterDomainDclPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateInterDomainDclPolicy,
    } as MsgUpdateInterDomainDclPolicy;
    message.delegatorList = [];
    message.delegateeList = [];
    message.permissionList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.delegatorList.push(reader.string());
          break;
        case 5:
          message.delegateeList.push(reader.string());
          break;
        case 6:
          message.permissionList.push(reader.string());
          break;
        case 8:
          message.creationTimestamp = reader.string();
          break;
        case 9:
          message.updateTimestamp = reader.string();
          break;
        case 10:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.maxDelegations = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInterDomainDclPolicy {
    const message = {
      ...baseMsgUpdateInterDomainDclPolicy,
    } as MsgUpdateInterDomainDclPolicy;
    message.delegatorList = [];
    message.delegateeList = [];
    message.permissionList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.delegatorList !== undefined && object.delegatorList !== null) {
      for (const e of object.delegatorList) {
        message.delegatorList.push(String(e));
      }
    }
    if (object.delegateeList !== undefined && object.delegateeList !== null) {
      for (const e of object.delegateeList) {
        message.delegateeList.push(String(e));
      }
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(String(e));
      }
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
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = Number(object.maxDelegations);
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateInterDomainDclPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    if (message.delegatorList) {
      obj.delegatorList = message.delegatorList.map((e) => e);
    } else {
      obj.delegatorList = [];
    }
    if (message.delegateeList) {
      obj.delegateeList = message.delegateeList.map((e) => e);
    } else {
      obj.delegateeList = [];
    }
    if (message.permissionList) {
      obj.permissionList = message.permissionList.map((e) => e);
    } else {
      obj.permissionList = [];
    }
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    message.depth !== undefined && (obj.depth = message.depth);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateInterDomainDclPolicy>
  ): MsgUpdateInterDomainDclPolicy {
    const message = {
      ...baseMsgUpdateInterDomainDclPolicy,
    } as MsgUpdateInterDomainDclPolicy;
    message.delegatorList = [];
    message.delegateeList = [];
    message.permissionList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.delegatorList !== undefined && object.delegatorList !== null) {
      for (const e of object.delegatorList) {
        message.delegatorList.push(e);
      }
    }
    if (object.delegateeList !== undefined && object.delegateeList !== null) {
      for (const e of object.delegateeList) {
        message.delegateeList.push(e);
      }
    }
    if (object.permissionList !== undefined && object.permissionList !== null) {
      for (const e of object.permissionList) {
        message.permissionList.push(e);
      }
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
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.maxDelegations !== undefined && object.maxDelegations !== null) {
      message.maxDelegations = object.maxDelegations;
    } else {
      message.maxDelegations = 0;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgUpdateInterDomainDclPolicyResponse: object = {};

export const MsgUpdateInterDomainDclPolicyResponse = {
  encode(
    _: MsgUpdateInterDomainDclPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateInterDomainDclPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateInterDomainDclPolicyResponse,
    } as MsgUpdateInterDomainDclPolicyResponse;
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

  fromJSON(_: any): MsgUpdateInterDomainDclPolicyResponse {
    const message = {
      ...baseMsgUpdateInterDomainDclPolicyResponse,
    } as MsgUpdateInterDomainDclPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateInterDomainDclPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateInterDomainDclPolicyResponse>
  ): MsgUpdateInterDomainDclPolicyResponse {
    const message = {
      ...baseMsgUpdateInterDomainDclPolicyResponse,
    } as MsgUpdateInterDomainDclPolicyResponse;
    return message;
  },
};

const baseMsgDeleteInterDomainDclPolicy: object = { creator: "", id: 0 };

export const MsgDeleteInterDomainDclPolicy = {
  encode(
    message: MsgDeleteInterDomainDclPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteInterDomainDclPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteInterDomainDclPolicy,
    } as MsgDeleteInterDomainDclPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteInterDomainDclPolicy {
    const message = {
      ...baseMsgDeleteInterDomainDclPolicy,
    } as MsgDeleteInterDomainDclPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteInterDomainDclPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteInterDomainDclPolicy>
  ): MsgDeleteInterDomainDclPolicy {
    const message = {
      ...baseMsgDeleteInterDomainDclPolicy,
    } as MsgDeleteInterDomainDclPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteInterDomainDclPolicyResponse: object = {};

export const MsgDeleteInterDomainDclPolicyResponse = {
  encode(
    _: MsgDeleteInterDomainDclPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteInterDomainDclPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteInterDomainDclPolicyResponse,
    } as MsgDeleteInterDomainDclPolicyResponse;
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

  fromJSON(_: any): MsgDeleteInterDomainDclPolicyResponse {
    const message = {
      ...baseMsgDeleteInterDomainDclPolicyResponse,
    } as MsgDeleteInterDomainDclPolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteInterDomainDclPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteInterDomainDclPolicyResponse>
  ): MsgDeleteInterDomainDclPolicyResponse {
    const message = {
      ...baseMsgDeleteInterDomainDclPolicyResponse,
    } as MsgDeleteInterDomainDclPolicyResponse;
    return message;
  },
};

const baseMsgCreateDelegationConditions: object = {
  creator: "",
  depth: 0,
  maxDelegations: 0,
};

export const MsgCreateDelegationConditions = {
  encode(
    message: MsgCreateDelegationConditions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegationConditions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationConditions,
    } as MsgCreateDelegationConditions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationConditions {
    const message = {
      ...baseMsgCreateDelegationConditions,
    } as MsgCreateDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateDelegationConditions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.depth !== undefined && (obj.depth = message.depth);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationConditions>
  ): MsgCreateDelegationConditions {
    const message = {
      ...baseMsgCreateDelegationConditions,
    } as MsgCreateDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateDelegationConditionsResponse: object = { id: 0 };

export const MsgCreateDelegationConditionsResponse = {
  encode(
    message: MsgCreateDelegationConditionsResponse,
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
  ): MsgCreateDelegationConditionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationConditionsResponse,
    } as MsgCreateDelegationConditionsResponse;
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

  fromJSON(object: any): MsgCreateDelegationConditionsResponse {
    const message = {
      ...baseMsgCreateDelegationConditionsResponse,
    } as MsgCreateDelegationConditionsResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationConditionsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationConditionsResponse>
  ): MsgCreateDelegationConditionsResponse {
    const message = {
      ...baseMsgCreateDelegationConditionsResponse,
    } as MsgCreateDelegationConditionsResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationConditions: object = {
  creator: "",
  id: 0,
  depth: 0,
  maxDelegations: 0,
};

export const MsgUpdateDelegationConditions = {
  encode(
    message: MsgUpdateDelegationConditions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.depth !== 0) {
      writer.uint32(24).uint64(message.depth);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(40).uint64(message.maxDelegations);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationConditions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationConditions,
    } as MsgUpdateDelegationConditions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxDelegations = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDelegationConditions {
    const message = {
      ...baseMsgUpdateDelegationConditions,
    } as MsgUpdateDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateDelegationConditions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.depth !== undefined && (obj.depth = message.depth);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = message.maxDelegations);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDelegationConditions>
  ): MsgUpdateDelegationConditions {
    const message = {
      ...baseMsgUpdateDelegationConditions,
    } as MsgUpdateDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateDelegationConditionsResponse: object = {};

export const MsgUpdateDelegationConditionsResponse = {
  encode(
    _: MsgUpdateDelegationConditionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationConditionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationConditionsResponse,
    } as MsgUpdateDelegationConditionsResponse;
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

  fromJSON(_: any): MsgUpdateDelegationConditionsResponse {
    const message = {
      ...baseMsgUpdateDelegationConditionsResponse,
    } as MsgUpdateDelegationConditionsResponse;
    return message;
  },

  toJSON(_: MsgUpdateDelegationConditionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDelegationConditionsResponse>
  ): MsgUpdateDelegationConditionsResponse {
    const message = {
      ...baseMsgUpdateDelegationConditionsResponse,
    } as MsgUpdateDelegationConditionsResponse;
    return message;
  },
};

const baseMsgDeleteDelegationConditions: object = { creator: "", id: 0 };

export const MsgDeleteDelegationConditions = {
  encode(
    message: MsgDeleteDelegationConditions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationConditions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationConditions,
    } as MsgDeleteDelegationConditions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDelegationConditions {
    const message = {
      ...baseMsgDeleteDelegationConditions,
    } as MsgDeleteDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDelegationConditions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDelegationConditions>
  ): MsgDeleteDelegationConditions {
    const message = {
      ...baseMsgDeleteDelegationConditions,
    } as MsgDeleteDelegationConditions;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDelegationConditionsResponse: object = {};

export const MsgDeleteDelegationConditionsResponse = {
  encode(
    _: MsgDeleteDelegationConditionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationConditionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationConditionsResponse,
    } as MsgDeleteDelegationConditionsResponse;
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

  fromJSON(_: any): MsgDeleteDelegationConditionsResponse {
    const message = {
      ...baseMsgDeleteDelegationConditionsResponse,
    } as MsgDeleteDelegationConditionsResponse;
    return message;
  },

  toJSON(_: MsgDeleteDelegationConditionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDelegationConditionsResponse>
  ): MsgDeleteDelegationConditionsResponse {
    const message = {
      ...baseMsgDeleteDelegationConditionsResponse,
    } as MsgDeleteDelegationConditionsResponse;
    return message;
  },
};

const baseMsgCreateDelegationRule: object = {
  creator: "",
  label: "",
  effect: "",
  priority: 0,
};

export const MsgCreateDelegationRule = {
  encode(
    message: MsgCreateDelegationRule,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.effect !== "") {
      writer.uint32(26).string(message.effect);
    }
    if (message.delegationConditions !== undefined) {
      DelegationConditions.encode(
        message.delegationConditions,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.priority !== 0) {
      writer.uint32(40).uint64(message.priority);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDelegationRule {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationRule,
    } as MsgCreateDelegationRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.effect = reader.string();
          break;
        case 4:
          message.delegationConditions = DelegationConditions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.priority = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationRule {
    const message = {
      ...baseMsgCreateDelegationRule,
    } as MsgCreateDelegationRule;
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
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = String(object.effect);
    } else {
      message.effect = "";
    }
    if (
      object.delegationConditions !== undefined &&
      object.delegationConditions !== null
    ) {
      message.delegationConditions = DelegationConditions.fromJSON(
        object.delegationConditions
      );
    } else {
      message.delegationConditions = undefined;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = Number(object.priority);
    } else {
      message.priority = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationRule): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.effect !== undefined && (obj.effect = message.effect);
    message.delegationConditions !== undefined &&
      (obj.delegationConditions = message.delegationConditions
        ? DelegationConditions.toJSON(message.delegationConditions)
        : undefined);
    message.priority !== undefined && (obj.priority = message.priority);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationRule>
  ): MsgCreateDelegationRule {
    const message = {
      ...baseMsgCreateDelegationRule,
    } as MsgCreateDelegationRule;
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
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = object.effect;
    } else {
      message.effect = "";
    }
    if (
      object.delegationConditions !== undefined &&
      object.delegationConditions !== null
    ) {
      message.delegationConditions = DelegationConditions.fromPartial(
        object.delegationConditions
      );
    } else {
      message.delegationConditions = undefined;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = 0;
    }
    return message;
  },
};

const baseMsgCreateDelegationRuleResponse: object = { id: 0 };

export const MsgCreateDelegationRuleResponse = {
  encode(
    message: MsgCreateDelegationRuleResponse,
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
  ): MsgCreateDelegationRuleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationRuleResponse,
    } as MsgCreateDelegationRuleResponse;
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

  fromJSON(object: any): MsgCreateDelegationRuleResponse {
    const message = {
      ...baseMsgCreateDelegationRuleResponse,
    } as MsgCreateDelegationRuleResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationRuleResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationRuleResponse>
  ): MsgCreateDelegationRuleResponse {
    const message = {
      ...baseMsgCreateDelegationRuleResponse,
    } as MsgCreateDelegationRuleResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationRule: object = {
  creator: "",
  id: 0,
  label: "",
  effect: "",
  priority: 0,
};

export const MsgUpdateDelegationRule = {
  encode(
    message: MsgUpdateDelegationRule,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.effect !== "") {
      writer.uint32(34).string(message.effect);
    }
    if (message.delegationConditions !== undefined) {
      DelegationConditions.encode(
        message.delegationConditions,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.priority !== 0) {
      writer.uint32(48).uint64(message.priority);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDelegationRule {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationRule,
    } as MsgUpdateDelegationRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.effect = reader.string();
          break;
        case 5:
          message.delegationConditions = DelegationConditions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.priority = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDelegationRule {
    const message = {
      ...baseMsgUpdateDelegationRule,
    } as MsgUpdateDelegationRule;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = String(object.effect);
    } else {
      message.effect = "";
    }
    if (
      object.delegationConditions !== undefined &&
      object.delegationConditions !== null
    ) {
      message.delegationConditions = DelegationConditions.fromJSON(
        object.delegationConditions
      );
    } else {
      message.delegationConditions = undefined;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = Number(object.priority);
    } else {
      message.priority = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateDelegationRule): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    message.effect !== undefined && (obj.effect = message.effect);
    message.delegationConditions !== undefined &&
      (obj.delegationConditions = message.delegationConditions
        ? DelegationConditions.toJSON(message.delegationConditions)
        : undefined);
    message.priority !== undefined && (obj.priority = message.priority);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDelegationRule>
  ): MsgUpdateDelegationRule {
    const message = {
      ...baseMsgUpdateDelegationRule,
    } as MsgUpdateDelegationRule;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = object.effect;
    } else {
      message.effect = "";
    }
    if (
      object.delegationConditions !== undefined &&
      object.delegationConditions !== null
    ) {
      message.delegationConditions = DelegationConditions.fromPartial(
        object.delegationConditions
      );
    } else {
      message.delegationConditions = undefined;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationRuleResponse: object = {};

export const MsgUpdateDelegationRuleResponse = {
  encode(
    _: MsgUpdateDelegationRuleResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationRuleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationRuleResponse,
    } as MsgUpdateDelegationRuleResponse;
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

  fromJSON(_: any): MsgUpdateDelegationRuleResponse {
    const message = {
      ...baseMsgUpdateDelegationRuleResponse,
    } as MsgUpdateDelegationRuleResponse;
    return message;
  },

  toJSON(_: MsgUpdateDelegationRuleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDelegationRuleResponse>
  ): MsgUpdateDelegationRuleResponse {
    const message = {
      ...baseMsgUpdateDelegationRuleResponse,
    } as MsgUpdateDelegationRuleResponse;
    return message;
  },
};

const baseMsgDeleteDelegationRule: object = { creator: "", id: 0 };

export const MsgDeleteDelegationRule = {
  encode(
    message: MsgDeleteDelegationRule,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDelegationRule {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationRule,
    } as MsgDeleteDelegationRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDelegationRule {
    const message = {
      ...baseMsgDeleteDelegationRule,
    } as MsgDeleteDelegationRule;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDelegationRule): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDelegationRule>
  ): MsgDeleteDelegationRule {
    const message = {
      ...baseMsgDeleteDelegationRule,
    } as MsgDeleteDelegationRule;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDelegationRuleResponse: object = {};

export const MsgDeleteDelegationRuleResponse = {
  encode(
    _: MsgDeleteDelegationRuleResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationRuleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationRuleResponse,
    } as MsgDeleteDelegationRuleResponse;
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

  fromJSON(_: any): MsgDeleteDelegationRuleResponse {
    const message = {
      ...baseMsgDeleteDelegationRuleResponse,
    } as MsgDeleteDelegationRuleResponse;
    return message;
  },

  toJSON(_: MsgDeleteDelegationRuleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDelegationRuleResponse>
  ): MsgDeleteDelegationRuleResponse {
    const message = {
      ...baseMsgDeleteDelegationRuleResponse,
    } as MsgDeleteDelegationRuleResponse;
    return message;
  },
};

const baseMsgCreateDelegationPolicyTarget: object = {
  creator: "",
  delegatorList: "",
  permissionList: "",
  action: "",
};

export const MsgCreateDelegationPolicyTarget = {
  encode(
    message: MsgCreateDelegationPolicyTarget,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegationPolicyTarget {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationPolicyTarget,
    } as MsgCreateDelegationPolicyTarget;
    message.delegatorList = [];
    message.permissionList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationPolicyTarget {
    const message = {
      ...baseMsgCreateDelegationPolicyTarget,
    } as MsgCreateDelegationPolicyTarget;
    message.delegatorList = [];
    message.permissionList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateDelegationPolicyTarget): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationPolicyTarget>
  ): MsgCreateDelegationPolicyTarget {
    const message = {
      ...baseMsgCreateDelegationPolicyTarget,
    } as MsgCreateDelegationPolicyTarget;
    message.delegatorList = [];
    message.permissionList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateDelegationPolicyTargetResponse: object = { id: 0 };

export const MsgCreateDelegationPolicyTargetResponse = {
  encode(
    message: MsgCreateDelegationPolicyTargetResponse,
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
  ): MsgCreateDelegationPolicyTargetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationPolicyTargetResponse,
    } as MsgCreateDelegationPolicyTargetResponse;
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

  fromJSON(object: any): MsgCreateDelegationPolicyTargetResponse {
    const message = {
      ...baseMsgCreateDelegationPolicyTargetResponse,
    } as MsgCreateDelegationPolicyTargetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationPolicyTargetResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationPolicyTargetResponse>
  ): MsgCreateDelegationPolicyTargetResponse {
    const message = {
      ...baseMsgCreateDelegationPolicyTargetResponse,
    } as MsgCreateDelegationPolicyTargetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationPolicyTarget: object = {
  creator: "",
  id: 0,
  delegatorList: "",
  permissionList: "",
  action: "",
};

export const MsgUpdateDelegationPolicyTarget = {
  encode(
    message: MsgUpdateDelegationPolicyTarget,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    for (const v of message.delegatorList) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.permissionList) {
      writer.uint32(34).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationPolicyTarget {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationPolicyTarget,
    } as MsgUpdateDelegationPolicyTarget;
    message.delegatorList = [];
    message.permissionList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.delegatorList.push(reader.string());
          break;
        case 4:
          message.permissionList.push(reader.string());
          break;
        case 5:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDelegationPolicyTarget {
    const message = {
      ...baseMsgUpdateDelegationPolicyTarget,
    } as MsgUpdateDelegationPolicyTarget;
    message.delegatorList = [];
    message.permissionList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateDelegationPolicyTarget): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDelegationPolicyTarget>
  ): MsgUpdateDelegationPolicyTarget {
    const message = {
      ...baseMsgUpdateDelegationPolicyTarget,
    } as MsgUpdateDelegationPolicyTarget;
    message.delegatorList = [];
    message.permissionList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateDelegationPolicyTargetResponse: object = {};

export const MsgUpdateDelegationPolicyTargetResponse = {
  encode(
    _: MsgUpdateDelegationPolicyTargetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationPolicyTargetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationPolicyTargetResponse,
    } as MsgUpdateDelegationPolicyTargetResponse;
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

  fromJSON(_: any): MsgUpdateDelegationPolicyTargetResponse {
    const message = {
      ...baseMsgUpdateDelegationPolicyTargetResponse,
    } as MsgUpdateDelegationPolicyTargetResponse;
    return message;
  },

  toJSON(_: MsgUpdateDelegationPolicyTargetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDelegationPolicyTargetResponse>
  ): MsgUpdateDelegationPolicyTargetResponse {
    const message = {
      ...baseMsgUpdateDelegationPolicyTargetResponse,
    } as MsgUpdateDelegationPolicyTargetResponse;
    return message;
  },
};

const baseMsgDeleteDelegationPolicyTarget: object = { creator: "", id: 0 };

export const MsgDeleteDelegationPolicyTarget = {
  encode(
    message: MsgDeleteDelegationPolicyTarget,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationPolicyTarget {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationPolicyTarget,
    } as MsgDeleteDelegationPolicyTarget;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDelegationPolicyTarget {
    const message = {
      ...baseMsgDeleteDelegationPolicyTarget,
    } as MsgDeleteDelegationPolicyTarget;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDelegationPolicyTarget): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDelegationPolicyTarget>
  ): MsgDeleteDelegationPolicyTarget {
    const message = {
      ...baseMsgDeleteDelegationPolicyTarget,
    } as MsgDeleteDelegationPolicyTarget;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDelegationPolicyTargetResponse: object = {};

export const MsgDeleteDelegationPolicyTargetResponse = {
  encode(
    _: MsgDeleteDelegationPolicyTargetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationPolicyTargetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationPolicyTargetResponse,
    } as MsgDeleteDelegationPolicyTargetResponse;
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

  fromJSON(_: any): MsgDeleteDelegationPolicyTargetResponse {
    const message = {
      ...baseMsgDeleteDelegationPolicyTargetResponse,
    } as MsgDeleteDelegationPolicyTargetResponse;
    return message;
  },

  toJSON(_: MsgDeleteDelegationPolicyTargetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDelegationPolicyTargetResponse>
  ): MsgDeleteDelegationPolicyTargetResponse {
    const message = {
      ...baseMsgDeleteDelegationPolicyTargetResponse,
    } as MsgDeleteDelegationPolicyTargetResponse;
    return message;
  },
};

const baseMsgCreateDelegationPolicy: object = {
  creator: "",
  label: "",
  combiningAlgorithm: "",
};

export const MsgCreateDelegationPolicy = {
  encode(
    message: MsgCreateDelegationPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.target !== undefined) {
      DelegationPolicyTarget.encode(
        message.target,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.combiningAlgorithm !== "") {
      writer.uint32(34).string(message.combiningAlgorithm);
    }
    if (message.ruleList !== undefined) {
      DelegationRule.encode(
        message.ruleList,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDelegationPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationPolicy,
    } as MsgCreateDelegationPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.target = DelegationPolicyTarget.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.combiningAlgorithm = reader.string();
          break;
        case 5:
          message.ruleList = DelegationRule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationPolicy {
    const message = {
      ...baseMsgCreateDelegationPolicy,
    } as MsgCreateDelegationPolicy;
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
    if (object.target !== undefined && object.target !== null) {
      message.target = DelegationPolicyTarget.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
      message.combiningAlgorithm = String(object.combiningAlgorithm);
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.ruleList !== undefined && object.ruleList !== null) {
      message.ruleList = DelegationRule.fromJSON(object.ruleList);
    } else {
      message.ruleList = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.target !== undefined &&
      (obj.target = message.target
        ? DelegationPolicyTarget.toJSON(message.target)
        : undefined);
    message.combiningAlgorithm !== undefined &&
      (obj.combiningAlgorithm = message.combiningAlgorithm);
    message.ruleList !== undefined &&
      (obj.ruleList = message.ruleList
        ? DelegationRule.toJSON(message.ruleList)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationPolicy>
  ): MsgCreateDelegationPolicy {
    const message = {
      ...baseMsgCreateDelegationPolicy,
    } as MsgCreateDelegationPolicy;
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
    if (object.target !== undefined && object.target !== null) {
      message.target = DelegationPolicyTarget.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
      message.combiningAlgorithm = object.combiningAlgorithm;
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.ruleList !== undefined && object.ruleList !== null) {
      message.ruleList = DelegationRule.fromPartial(object.ruleList);
    } else {
      message.ruleList = undefined;
    }
    return message;
  },
};

const baseMsgCreateDelegationPolicyResponse: object = { id: 0 };

export const MsgCreateDelegationPolicyResponse = {
  encode(
    message: MsgCreateDelegationPolicyResponse,
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
  ): MsgCreateDelegationPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDelegationPolicyResponse,
    } as MsgCreateDelegationPolicyResponse;
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

  fromJSON(object: any): MsgCreateDelegationPolicyResponse {
    const message = {
      ...baseMsgCreateDelegationPolicyResponse,
    } as MsgCreateDelegationPolicyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDelegationPolicyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDelegationPolicyResponse>
  ): MsgCreateDelegationPolicyResponse {
    const message = {
      ...baseMsgCreateDelegationPolicyResponse,
    } as MsgCreateDelegationPolicyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDelegationPolicy: object = {
  creator: "",
  id: 0,
  label: "",
  combiningAlgorithm: "",
};

export const MsgUpdateDelegationPolicy = {
  encode(
    message: MsgUpdateDelegationPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.target !== undefined) {
      DelegationPolicyTarget.encode(
        message.target,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.combiningAlgorithm !== "") {
      writer.uint32(42).string(message.combiningAlgorithm);
    }
    if (message.ruleList !== undefined) {
      DelegationRule.encode(
        message.ruleList,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationPolicy,
    } as MsgUpdateDelegationPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.target = DelegationPolicyTarget.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.combiningAlgorithm = reader.string();
          break;
        case 6:
          message.ruleList = DelegationRule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDelegationPolicy {
    const message = {
      ...baseMsgUpdateDelegationPolicy,
    } as MsgUpdateDelegationPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.target !== undefined && object.target !== null) {
      message.target = DelegationPolicyTarget.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
      message.combiningAlgorithm = String(object.combiningAlgorithm);
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.ruleList !== undefined && object.ruleList !== null) {
      message.ruleList = DelegationRule.fromJSON(object.ruleList);
    } else {
      message.ruleList = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateDelegationPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    message.target !== undefined &&
      (obj.target = message.target
        ? DelegationPolicyTarget.toJSON(message.target)
        : undefined);
    message.combiningAlgorithm !== undefined &&
      (obj.combiningAlgorithm = message.combiningAlgorithm);
    message.ruleList !== undefined &&
      (obj.ruleList = message.ruleList
        ? DelegationRule.toJSON(message.ruleList)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDelegationPolicy>
  ): MsgUpdateDelegationPolicy {
    const message = {
      ...baseMsgUpdateDelegationPolicy,
    } as MsgUpdateDelegationPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.target !== undefined && object.target !== null) {
      message.target = DelegationPolicyTarget.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
      message.combiningAlgorithm = object.combiningAlgorithm;
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.ruleList !== undefined && object.ruleList !== null) {
      message.ruleList = DelegationRule.fromPartial(object.ruleList);
    } else {
      message.ruleList = undefined;
    }
    return message;
  },
};

const baseMsgUpdateDelegationPolicyResponse: object = {};

export const MsgUpdateDelegationPolicyResponse = {
  encode(
    _: MsgUpdateDelegationPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDelegationPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDelegationPolicyResponse,
    } as MsgUpdateDelegationPolicyResponse;
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

  fromJSON(_: any): MsgUpdateDelegationPolicyResponse {
    const message = {
      ...baseMsgUpdateDelegationPolicyResponse,
    } as MsgUpdateDelegationPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateDelegationPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDelegationPolicyResponse>
  ): MsgUpdateDelegationPolicyResponse {
    const message = {
      ...baseMsgUpdateDelegationPolicyResponse,
    } as MsgUpdateDelegationPolicyResponse;
    return message;
  },
};

const baseMsgDeleteDelegationPolicy: object = { creator: "", id: 0 };

export const MsgDeleteDelegationPolicy = {
  encode(
    message: MsgDeleteDelegationPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationPolicy,
    } as MsgDeleteDelegationPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDelegationPolicy {
    const message = {
      ...baseMsgDeleteDelegationPolicy,
    } as MsgDeleteDelegationPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDelegationPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDelegationPolicy>
  ): MsgDeleteDelegationPolicy {
    const message = {
      ...baseMsgDeleteDelegationPolicy,
    } as MsgDeleteDelegationPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDelegationPolicyResponse: object = {};

export const MsgDeleteDelegationPolicyResponse = {
  encode(
    _: MsgDeleteDelegationPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDelegationPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDelegationPolicyResponse,
    } as MsgDeleteDelegationPolicyResponse;
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

  fromJSON(_: any): MsgDeleteDelegationPolicyResponse {
    const message = {
      ...baseMsgDeleteDelegationPolicyResponse,
    } as MsgDeleteDelegationPolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteDelegationPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDelegationPolicyResponse>
  ): MsgDeleteDelegationPolicyResponse {
    const message = {
      ...baseMsgDeleteDelegationPolicyResponse,
    } as MsgDeleteDelegationPolicyResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePublicKey(
    request: MsgCreatePublicKey
  ): Promise<MsgCreatePublicKeyResponse>;
  UpdatePublicKey(
    request: MsgUpdatePublicKey
  ): Promise<MsgUpdatePublicKeyResponse>;
  DeletePublicKey(
    request: MsgDeletePublicKey
  ): Promise<MsgDeletePublicKeyResponse>;
  CreateValidity(
    request: MsgCreateValidity
  ): Promise<MsgCreateValidityResponse>;
  UpdateValidity(
    request: MsgUpdateValidity
  ): Promise<MsgUpdateValidityResponse>;
  DeleteValidity(
    request: MsgDeleteValidity
  ): Promise<MsgDeleteValidityResponse>;
  CreateCertificate(
    request: MsgCreateCertificate
  ): Promise<MsgCreateCertificateResponse>;
  UpdateCertificate(
    request: MsgUpdateCertificate
  ): Promise<MsgUpdateCertificateResponse>;
  DeleteCertificate(
    request: MsgDeleteCertificate
  ): Promise<MsgDeleteCertificateResponse>;
  CreateIbcConnection(
    request: MsgCreateIbcConnection
  ): Promise<MsgCreateIbcConnectionResponse>;
  UpdateIbcConnection(
    request: MsgUpdateIbcConnection
  ): Promise<MsgUpdateIbcConnectionResponse>;
  DeleteIbcConnection(
    request: MsgDeleteIbcConnection
  ): Promise<MsgDeleteIbcConnectionResponse>;
  CreateDomain(request: MsgCreateDomain): Promise<MsgCreateDomainResponse>;
  UpdateDomain(request: MsgUpdateDomain): Promise<MsgUpdateDomainResponse>;
  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse>;
  CreateAuthenticationLog(
    request: MsgCreateAuthenticationLog
  ): Promise<MsgCreateAuthenticationLogResponse>;
  UpdateAuthenticationLog(
    request: MsgUpdateAuthenticationLog
  ): Promise<MsgUpdateAuthenticationLogResponse>;
  DeleteAuthenticationLog(
    request: MsgDeleteAuthenticationLog
  ): Promise<MsgDeleteAuthenticationLogResponse>;
  SendAuthenticateDomain(
    request: MsgSendAuthenticateDomain
  ): Promise<MsgSendAuthenticateDomainResponse>;
  CreateDomainCooperation(
    request: MsgCreateDomainCooperation
  ): Promise<MsgCreateDomainCooperationResponse>;
  UpdateDomainCooperation(
    request: MsgUpdateDomainCooperation
  ): Promise<MsgUpdateDomainCooperationResponse>;
  DeleteDomainCooperation(
    request: MsgDeleteDomainCooperation
  ): Promise<MsgDeleteDomainCooperationResponse>;
  CreateCooperationLog(
    request: MsgCreateCooperationLog
  ): Promise<MsgCreateCooperationLogResponse>;
  UpdateCooperationLog(
    request: MsgUpdateCooperationLog
  ): Promise<MsgUpdateCooperationLogResponse>;
  DeleteCooperationLog(
    request: MsgDeleteCooperationLog
  ): Promise<MsgDeleteCooperationLogResponse>;
  SendEstablishCooperation(
    request: MsgSendEstablishCooperation
  ): Promise<MsgSendEstablishCooperationResponse>;
  SendForwardCooperationData(
    request: MsgSendForwardCooperationData
  ): Promise<MsgSendForwardCooperationDataResponse>;
  CreateForwardPolicy(
    request: MsgCreateForwardPolicy
  ): Promise<MsgCreateForwardPolicyResponse>;
  UpdateForwardPolicy(
    request: MsgUpdateForwardPolicy
  ): Promise<MsgUpdateForwardPolicyResponse>;
  DeleteForwardPolicy(
    request: MsgDeleteForwardPolicy
  ): Promise<MsgDeleteForwardPolicyResponse>;
  SendExchangeCooperationData(
    request: MsgSendExchangeCooperationData
  ): Promise<MsgSendExchangeCooperationDataResponse>;
  SendModifyCooperationCost(
    request: MsgSendModifyCooperationCost
  ): Promise<MsgSendModifyCooperationCostResponse>;
  SendDisableCooperation(
    request: MsgSendDisableCooperation
  ): Promise<MsgSendDisableCooperationResponse>;
  SendEnableCooperation(
    request: MsgSendEnableCooperation
  ): Promise<MsgSendEnableCooperationResponse>;
  SendModifyCooperationValidity(
    request: MsgSendModifyCooperationValidity
  ): Promise<MsgSendModifyCooperationValidityResponse>;
  SendModifyCooperationInterest(
    request: MsgSendModifyCooperationInterest
  ): Promise<MsgSendModifyCooperationInterestResponse>;
  SendRevokeCooperation(
    request: MsgSendRevokeCooperation
  ): Promise<MsgSendRevokeCooperationResponse>;
  CreateDomainMap(
    request: MsgCreateDomainMap
  ): Promise<MsgCreateDomainMapResponse>;
  UpdateDomainMap(
    request: MsgUpdateDomainMap
  ): Promise<MsgUpdateDomainMapResponse>;
  DeleteDomainMap(
    request: MsgDeleteDomainMap
  ): Promise<MsgDeleteDomainMapResponse>;
  CreateCooperationNetworkFeatures(
    request: MsgCreateCooperationNetworkFeatures
  ): Promise<MsgCreateCooperationNetworkFeaturesResponse>;
  UpdateCooperationNetworkFeatures(
    request: MsgUpdateCooperationNetworkFeatures
  ): Promise<MsgUpdateCooperationNetworkFeaturesResponse>;
  DeleteCooperationNetworkFeatures(
    request: MsgDeleteCooperationNetworkFeatures
  ): Promise<MsgDeleteCooperationNetworkFeaturesResponse>;
  CreateCooperationData(
    request: MsgCreateCooperationData
  ): Promise<MsgCreateCooperationDataResponse>;
  UpdateCooperationData(
    request: MsgUpdateCooperationData
  ): Promise<MsgUpdateCooperationDataResponse>;
  DeleteCooperationData(
    request: MsgDeleteCooperationData
  ): Promise<MsgDeleteCooperationDataResponse>;
  CreateCooperationNetwork(
    request: MsgCreateCooperationNetwork
  ): Promise<MsgCreateCooperationNetworkResponse>;
  UpdateCooperationNetwork(
    request: MsgUpdateCooperationNetwork
  ): Promise<MsgUpdateCooperationNetworkResponse>;
  DeleteCooperationNetwork(
    request: MsgDeleteCooperationNetwork
  ): Promise<MsgDeleteCooperationNetworkResponse>;
  GenerateCooperationNetwork(
    request: MsgGenerateCooperationNetwork
  ): Promise<MsgGenerateCooperationNetworkResponse>;
  CreateUpdatePolicy(
    request: MsgCreateUpdatePolicy
  ): Promise<MsgCreateUpdatePolicyResponse>;
  UpdateUpdatePolicy(
    request: MsgUpdateUpdatePolicy
  ): Promise<MsgUpdateUpdatePolicyResponse>;
  DeleteUpdatePolicy(
    request: MsgDeleteUpdatePolicy
  ): Promise<MsgDeleteUpdatePolicyResponse>;
  CreateCooperativeDomain(
    request: MsgCreateCooperativeDomain
  ): Promise<MsgCreateCooperativeDomainResponse>;
  UpdateCooperativeDomain(
    request: MsgUpdateCooperativeDomain
  ): Promise<MsgUpdateCooperativeDomainResponse>;
  DeleteCooperativeDomain(
    request: MsgDeleteCooperativeDomain
  ): Promise<MsgDeleteCooperativeDomainResponse>;
  CreateDelegationPath(
    request: MsgCreateDelegationPath
  ): Promise<MsgCreateDelegationPathResponse>;
  UpdateDelegationPath(
    request: MsgUpdateDelegationPath
  ): Promise<MsgUpdateDelegationPathResponse>;
  DeleteDelegationPath(
    request: MsgDeleteDelegationPath
  ): Promise<MsgDeleteDelegationPathResponse>;
  CreatePath(request: MsgCreatePath): Promise<MsgCreatePathResponse>;
  UpdatePath(request: MsgUpdatePath): Promise<MsgUpdatePathResponse>;
  DeletePath(request: MsgDeletePath): Promise<MsgDeletePathResponse>;
  CreateTimeCalculation(
    request: MsgCreateTimeCalculation
  ): Promise<MsgCreateTimeCalculationResponse>;
  UpdateTimeCalculation(
    request: MsgUpdateTimeCalculation
  ): Promise<MsgUpdateTimeCalculationResponse>;
  DeleteTimeCalculation(
    request: MsgDeleteTimeCalculation
  ): Promise<MsgDeleteTimeCalculationResponse>;
  CreateCalculationTime(
    request: MsgCreateCalculationTime
  ): Promise<MsgCreateCalculationTimeResponse>;
  UpdateCalculationTime(
    request: MsgUpdateCalculationTime
  ): Promise<MsgUpdateCalculationTimeResponse>;
  DeleteCalculationTime(
    request: MsgDeleteCalculationTime
  ): Promise<MsgDeleteCalculationTimeResponse>;
  RequestAccessPermission(
    request: MsgRequestAccessPermission
  ): Promise<MsgRequestAccessPermissionResponse>;
  CreateInterDomainAclPolicy(
    request: MsgCreateInterDomainAclPolicy
  ): Promise<MsgCreateInterDomainAclPolicyResponse>;
  UpdateInterDomainAclPolicy(
    request: MsgUpdateInterDomainAclPolicy
  ): Promise<MsgUpdateInterDomainAclPolicyResponse>;
  DeleteInterDomainAclPolicy(
    request: MsgDeleteInterDomainAclPolicy
  ): Promise<MsgDeleteInterDomainAclPolicyResponse>;
  CreateInterDomainDclPolicy(
    request: MsgCreateInterDomainDclPolicy
  ): Promise<MsgCreateInterDomainDclPolicyResponse>;
  UpdateInterDomainDclPolicy(
    request: MsgUpdateInterDomainDclPolicy
  ): Promise<MsgUpdateInterDomainDclPolicyResponse>;
  DeleteInterDomainDclPolicy(
    request: MsgDeleteInterDomainDclPolicy
  ): Promise<MsgDeleteInterDomainDclPolicyResponse>;
  CreateDelegationConditions(
    request: MsgCreateDelegationConditions
  ): Promise<MsgCreateDelegationConditionsResponse>;
  UpdateDelegationConditions(
    request: MsgUpdateDelegationConditions
  ): Promise<MsgUpdateDelegationConditionsResponse>;
  DeleteDelegationConditions(
    request: MsgDeleteDelegationConditions
  ): Promise<MsgDeleteDelegationConditionsResponse>;
  CreateDelegationRule(
    request: MsgCreateDelegationRule
  ): Promise<MsgCreateDelegationRuleResponse>;
  UpdateDelegationRule(
    request: MsgUpdateDelegationRule
  ): Promise<MsgUpdateDelegationRuleResponse>;
  DeleteDelegationRule(
    request: MsgDeleteDelegationRule
  ): Promise<MsgDeleteDelegationRuleResponse>;
  CreateDelegationPolicyTarget(
    request: MsgCreateDelegationPolicyTarget
  ): Promise<MsgCreateDelegationPolicyTargetResponse>;
  UpdateDelegationPolicyTarget(
    request: MsgUpdateDelegationPolicyTarget
  ): Promise<MsgUpdateDelegationPolicyTargetResponse>;
  DeleteDelegationPolicyTarget(
    request: MsgDeleteDelegationPolicyTarget
  ): Promise<MsgDeleteDelegationPolicyTargetResponse>;
  CreateDelegationPolicy(
    request: MsgCreateDelegationPolicy
  ): Promise<MsgCreateDelegationPolicyResponse>;
  UpdateDelegationPolicy(
    request: MsgUpdateDelegationPolicy
  ): Promise<MsgUpdateDelegationPolicyResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteDelegationPolicy(
    request: MsgDeleteDelegationPolicy
  ): Promise<MsgDeleteDelegationPolicyResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePublicKey(
    request: MsgCreatePublicKey
  ): Promise<MsgCreatePublicKeyResponse> {
    const data = MsgCreatePublicKey.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreatePublicKey",
      data
    );
    return promise.then((data) =>
      MsgCreatePublicKeyResponse.decode(new Reader(data))
    );
  }

  UpdatePublicKey(
    request: MsgUpdatePublicKey
  ): Promise<MsgUpdatePublicKeyResponse> {
    const data = MsgUpdatePublicKey.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdatePublicKey",
      data
    );
    return promise.then((data) =>
      MsgUpdatePublicKeyResponse.decode(new Reader(data))
    );
  }

  DeletePublicKey(
    request: MsgDeletePublicKey
  ): Promise<MsgDeletePublicKeyResponse> {
    const data = MsgDeletePublicKey.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeletePublicKey",
      data
    );
    return promise.then((data) =>
      MsgDeletePublicKeyResponse.decode(new Reader(data))
    );
  }

  CreateValidity(
    request: MsgCreateValidity
  ): Promise<MsgCreateValidityResponse> {
    const data = MsgCreateValidity.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateValidity",
      data
    );
    return promise.then((data) =>
      MsgCreateValidityResponse.decode(new Reader(data))
    );
  }

  UpdateValidity(
    request: MsgUpdateValidity
  ): Promise<MsgUpdateValidityResponse> {
    const data = MsgUpdateValidity.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateValidity",
      data
    );
    return promise.then((data) =>
      MsgUpdateValidityResponse.decode(new Reader(data))
    );
  }

  DeleteValidity(
    request: MsgDeleteValidity
  ): Promise<MsgDeleteValidityResponse> {
    const data = MsgDeleteValidity.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteValidity",
      data
    );
    return promise.then((data) =>
      MsgDeleteValidityResponse.decode(new Reader(data))
    );
  }

  CreateCertificate(
    request: MsgCreateCertificate
  ): Promise<MsgCreateCertificateResponse> {
    const data = MsgCreateCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateCertificate",
      data
    );
    return promise.then((data) =>
      MsgCreateCertificateResponse.decode(new Reader(data))
    );
  }

  UpdateCertificate(
    request: MsgUpdateCertificate
  ): Promise<MsgUpdateCertificateResponse> {
    const data = MsgUpdateCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateCertificate",
      data
    );
    return promise.then((data) =>
      MsgUpdateCertificateResponse.decode(new Reader(data))
    );
  }

  DeleteCertificate(
    request: MsgDeleteCertificate
  ): Promise<MsgDeleteCertificateResponse> {
    const data = MsgDeleteCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteCertificate",
      data
    );
    return promise.then((data) =>
      MsgDeleteCertificateResponse.decode(new Reader(data))
    );
  }

  CreateIbcConnection(
    request: MsgCreateIbcConnection
  ): Promise<MsgCreateIbcConnectionResponse> {
    const data = MsgCreateIbcConnection.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateIbcConnection",
      data
    );
    return promise.then((data) =>
      MsgCreateIbcConnectionResponse.decode(new Reader(data))
    );
  }

  UpdateIbcConnection(
    request: MsgUpdateIbcConnection
  ): Promise<MsgUpdateIbcConnectionResponse> {
    const data = MsgUpdateIbcConnection.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateIbcConnection",
      data
    );
    return promise.then((data) =>
      MsgUpdateIbcConnectionResponse.decode(new Reader(data))
    );
  }

  DeleteIbcConnection(
    request: MsgDeleteIbcConnection
  ): Promise<MsgDeleteIbcConnectionResponse> {
    const data = MsgDeleteIbcConnection.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteIbcConnection",
      data
    );
    return promise.then((data) =>
      MsgDeleteIbcConnectionResponse.decode(new Reader(data))
    );
  }

  CreateDomain(request: MsgCreateDomain): Promise<MsgCreateDomainResponse> {
    const data = MsgCreateDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateDomain",
      data
    );
    return promise.then((data) =>
      MsgCreateDomainResponse.decode(new Reader(data))
    );
  }

  UpdateDomain(request: MsgUpdateDomain): Promise<MsgUpdateDomainResponse> {
    const data = MsgUpdateDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateDomain",
      data
    );
    return promise.then((data) =>
      MsgUpdateDomainResponse.decode(new Reader(data))
    );
  }

  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse> {
    const data = MsgDeleteDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteDomain",
      data
    );
    return promise.then((data) =>
      MsgDeleteDomainResponse.decode(new Reader(data))
    );
  }

  CreateAuthenticationLog(
    request: MsgCreateAuthenticationLog
  ): Promise<MsgCreateAuthenticationLogResponse> {
    const data = MsgCreateAuthenticationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateAuthenticationLog",
      data
    );
    return promise.then((data) =>
      MsgCreateAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  UpdateAuthenticationLog(
    request: MsgUpdateAuthenticationLog
  ): Promise<MsgUpdateAuthenticationLogResponse> {
    const data = MsgUpdateAuthenticationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateAuthenticationLog",
      data
    );
    return promise.then((data) =>
      MsgUpdateAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  DeleteAuthenticationLog(
    request: MsgDeleteAuthenticationLog
  ): Promise<MsgDeleteAuthenticationLogResponse> {
    const data = MsgDeleteAuthenticationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteAuthenticationLog",
      data
    );
    return promise.then((data) =>
      MsgDeleteAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  SendAuthenticateDomain(
    request: MsgSendAuthenticateDomain
  ): Promise<MsgSendAuthenticateDomainResponse> {
    const data = MsgSendAuthenticateDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendAuthenticateDomain",
      data
    );
    return promise.then((data) =>
      MsgSendAuthenticateDomainResponse.decode(new Reader(data))
    );
  }

  CreateDomainCooperation(
    request: MsgCreateDomainCooperation
  ): Promise<MsgCreateDomainCooperationResponse> {
    const data = MsgCreateDomainCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateDomainCooperation",
      data
    );
    return promise.then((data) =>
      MsgCreateDomainCooperationResponse.decode(new Reader(data))
    );
  }

  UpdateDomainCooperation(
    request: MsgUpdateDomainCooperation
  ): Promise<MsgUpdateDomainCooperationResponse> {
    const data = MsgUpdateDomainCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateDomainCooperation",
      data
    );
    return promise.then((data) =>
      MsgUpdateDomainCooperationResponse.decode(new Reader(data))
    );
  }

  DeleteDomainCooperation(
    request: MsgDeleteDomainCooperation
  ): Promise<MsgDeleteDomainCooperationResponse> {
    const data = MsgDeleteDomainCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteDomainCooperation",
      data
    );
    return promise.then((data) =>
      MsgDeleteDomainCooperationResponse.decode(new Reader(data))
    );
  }

  CreateCooperationLog(
    request: MsgCreateCooperationLog
  ): Promise<MsgCreateCooperationLogResponse> {
    const data = MsgCreateCooperationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateCooperationLog",
      data
    );
    return promise.then((data) =>
      MsgCreateCooperationLogResponse.decode(new Reader(data))
    );
  }

  UpdateCooperationLog(
    request: MsgUpdateCooperationLog
  ): Promise<MsgUpdateCooperationLogResponse> {
    const data = MsgUpdateCooperationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateCooperationLog",
      data
    );
    return promise.then((data) =>
      MsgUpdateCooperationLogResponse.decode(new Reader(data))
    );
  }

  DeleteCooperationLog(
    request: MsgDeleteCooperationLog
  ): Promise<MsgDeleteCooperationLogResponse> {
    const data = MsgDeleteCooperationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteCooperationLog",
      data
    );
    return promise.then((data) =>
      MsgDeleteCooperationLogResponse.decode(new Reader(data))
    );
  }

  SendEstablishCooperation(
    request: MsgSendEstablishCooperation
  ): Promise<MsgSendEstablishCooperationResponse> {
    const data = MsgSendEstablishCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendEstablishCooperation",
      data
    );
    return promise.then((data) =>
      MsgSendEstablishCooperationResponse.decode(new Reader(data))
    );
  }

  SendForwardCooperationData(
    request: MsgSendForwardCooperationData
  ): Promise<MsgSendForwardCooperationDataResponse> {
    const data = MsgSendForwardCooperationData.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendForwardCooperationData",
      data
    );
    return promise.then((data) =>
      MsgSendForwardCooperationDataResponse.decode(new Reader(data))
    );
  }

  CreateForwardPolicy(
    request: MsgCreateForwardPolicy
  ): Promise<MsgCreateForwardPolicyResponse> {
    const data = MsgCreateForwardPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateForwardPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateForwardPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateForwardPolicy(
    request: MsgUpdateForwardPolicy
  ): Promise<MsgUpdateForwardPolicyResponse> {
    const data = MsgUpdateForwardPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateForwardPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateForwardPolicyResponse.decode(new Reader(data))
    );
  }

  DeleteForwardPolicy(
    request: MsgDeleteForwardPolicy
  ): Promise<MsgDeleteForwardPolicyResponse> {
    const data = MsgDeleteForwardPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteForwardPolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteForwardPolicyResponse.decode(new Reader(data))
    );
  }

  SendExchangeCooperationData(
    request: MsgSendExchangeCooperationData
  ): Promise<MsgSendExchangeCooperationDataResponse> {
    const data = MsgSendExchangeCooperationData.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendExchangeCooperationData",
      data
    );
    return promise.then((data) =>
      MsgSendExchangeCooperationDataResponse.decode(new Reader(data))
    );
  }

  SendModifyCooperationCost(
    request: MsgSendModifyCooperationCost
  ): Promise<MsgSendModifyCooperationCostResponse> {
    const data = MsgSendModifyCooperationCost.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendModifyCooperationCost",
      data
    );
    return promise.then((data) =>
      MsgSendModifyCooperationCostResponse.decode(new Reader(data))
    );
  }

  SendDisableCooperation(
    request: MsgSendDisableCooperation
  ): Promise<MsgSendDisableCooperationResponse> {
    const data = MsgSendDisableCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendDisableCooperation",
      data
    );
    return promise.then((data) =>
      MsgSendDisableCooperationResponse.decode(new Reader(data))
    );
  }

  SendEnableCooperation(
    request: MsgSendEnableCooperation
  ): Promise<MsgSendEnableCooperationResponse> {
    const data = MsgSendEnableCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendEnableCooperation",
      data
    );
    return promise.then((data) =>
      MsgSendEnableCooperationResponse.decode(new Reader(data))
    );
  }

  SendModifyCooperationValidity(
    request: MsgSendModifyCooperationValidity
  ): Promise<MsgSendModifyCooperationValidityResponse> {
    const data = MsgSendModifyCooperationValidity.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendModifyCooperationValidity",
      data
    );
    return promise.then((data) =>
      MsgSendModifyCooperationValidityResponse.decode(new Reader(data))
    );
  }

  SendModifyCooperationInterest(
    request: MsgSendModifyCooperationInterest
  ): Promise<MsgSendModifyCooperationInterestResponse> {
    const data = MsgSendModifyCooperationInterest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendModifyCooperationInterest",
      data
    );
    return promise.then((data) =>
      MsgSendModifyCooperationInterestResponse.decode(new Reader(data))
    );
  }

  SendRevokeCooperation(
    request: MsgSendRevokeCooperation
  ): Promise<MsgSendRevokeCooperationResponse> {
    const data = MsgSendRevokeCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "SendRevokeCooperation",
      data
    );
    return promise.then((data) =>
      MsgSendRevokeCooperationResponse.decode(new Reader(data))
    );
  }

  CreateDomainMap(
    request: MsgCreateDomainMap
  ): Promise<MsgCreateDomainMapResponse> {
    const data = MsgCreateDomainMap.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateDomainMap",
      data
    );
    return promise.then((data) =>
      MsgCreateDomainMapResponse.decode(new Reader(data))
    );
  }

  UpdateDomainMap(
    request: MsgUpdateDomainMap
  ): Promise<MsgUpdateDomainMapResponse> {
    const data = MsgUpdateDomainMap.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateDomainMap",
      data
    );
    return promise.then((data) =>
      MsgUpdateDomainMapResponse.decode(new Reader(data))
    );
  }

  DeleteDomainMap(
    request: MsgDeleteDomainMap
  ): Promise<MsgDeleteDomainMapResponse> {
    const data = MsgDeleteDomainMap.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteDomainMap",
      data
    );
    return promise.then((data) =>
      MsgDeleteDomainMapResponse.decode(new Reader(data))
    );
  }

  CreateCooperationNetworkFeatures(
    request: MsgCreateCooperationNetworkFeatures
  ): Promise<MsgCreateCooperationNetworkFeaturesResponse> {
    const data = MsgCreateCooperationNetworkFeatures.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateCooperationNetworkFeatures",
      data
    );
    return promise.then((data) =>
      MsgCreateCooperationNetworkFeaturesResponse.decode(new Reader(data))
    );
  }

  UpdateCooperationNetworkFeatures(
    request: MsgUpdateCooperationNetworkFeatures
  ): Promise<MsgUpdateCooperationNetworkFeaturesResponse> {
    const data = MsgUpdateCooperationNetworkFeatures.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateCooperationNetworkFeatures",
      data
    );
    return promise.then((data) =>
      MsgUpdateCooperationNetworkFeaturesResponse.decode(new Reader(data))
    );
  }

  DeleteCooperationNetworkFeatures(
    request: MsgDeleteCooperationNetworkFeatures
  ): Promise<MsgDeleteCooperationNetworkFeaturesResponse> {
    const data = MsgDeleteCooperationNetworkFeatures.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteCooperationNetworkFeatures",
      data
    );
    return promise.then((data) =>
      MsgDeleteCooperationNetworkFeaturesResponse.decode(new Reader(data))
    );
  }

  CreateCooperationData(
    request: MsgCreateCooperationData
  ): Promise<MsgCreateCooperationDataResponse> {
    const data = MsgCreateCooperationData.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateCooperationData",
      data
    );
    return promise.then((data) =>
      MsgCreateCooperationDataResponse.decode(new Reader(data))
    );
  }

  UpdateCooperationData(
    request: MsgUpdateCooperationData
  ): Promise<MsgUpdateCooperationDataResponse> {
    const data = MsgUpdateCooperationData.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateCooperationData",
      data
    );
    return promise.then((data) =>
      MsgUpdateCooperationDataResponse.decode(new Reader(data))
    );
  }

  DeleteCooperationData(
    request: MsgDeleteCooperationData
  ): Promise<MsgDeleteCooperationDataResponse> {
    const data = MsgDeleteCooperationData.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteCooperationData",
      data
    );
    return promise.then((data) =>
      MsgDeleteCooperationDataResponse.decode(new Reader(data))
    );
  }

  CreateCooperationNetwork(
    request: MsgCreateCooperationNetwork
  ): Promise<MsgCreateCooperationNetworkResponse> {
    const data = MsgCreateCooperationNetwork.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateCooperationNetwork",
      data
    );
    return promise.then((data) =>
      MsgCreateCooperationNetworkResponse.decode(new Reader(data))
    );
  }

  UpdateCooperationNetwork(
    request: MsgUpdateCooperationNetwork
  ): Promise<MsgUpdateCooperationNetworkResponse> {
    const data = MsgUpdateCooperationNetwork.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateCooperationNetwork",
      data
    );
    return promise.then((data) =>
      MsgUpdateCooperationNetworkResponse.decode(new Reader(data))
    );
  }

  DeleteCooperationNetwork(
    request: MsgDeleteCooperationNetwork
  ): Promise<MsgDeleteCooperationNetworkResponse> {
    const data = MsgDeleteCooperationNetwork.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteCooperationNetwork",
      data
    );
    return promise.then((data) =>
      MsgDeleteCooperationNetworkResponse.decode(new Reader(data))
    );
  }

  GenerateCooperationNetwork(
    request: MsgGenerateCooperationNetwork
  ): Promise<MsgGenerateCooperationNetworkResponse> {
    const data = MsgGenerateCooperationNetwork.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "GenerateCooperationNetwork",
      data
    );
    return promise.then((data) =>
      MsgGenerateCooperationNetworkResponse.decode(new Reader(data))
    );
  }

  CreateUpdatePolicy(
    request: MsgCreateUpdatePolicy
  ): Promise<MsgCreateUpdatePolicyResponse> {
    const data = MsgCreateUpdatePolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateUpdatePolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateUpdatePolicyResponse.decode(new Reader(data))
    );
  }

  UpdateUpdatePolicy(
    request: MsgUpdateUpdatePolicy
  ): Promise<MsgUpdateUpdatePolicyResponse> {
    const data = MsgUpdateUpdatePolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateUpdatePolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateUpdatePolicyResponse.decode(new Reader(data))
    );
  }

  DeleteUpdatePolicy(
    request: MsgDeleteUpdatePolicy
  ): Promise<MsgDeleteUpdatePolicyResponse> {
    const data = MsgDeleteUpdatePolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteUpdatePolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteUpdatePolicyResponse.decode(new Reader(data))
    );
  }

  CreateCooperativeDomain(
    request: MsgCreateCooperativeDomain
  ): Promise<MsgCreateCooperativeDomainResponse> {
    const data = MsgCreateCooperativeDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateCooperativeDomain",
      data
    );
    return promise.then((data) =>
      MsgCreateCooperativeDomainResponse.decode(new Reader(data))
    );
  }

  UpdateCooperativeDomain(
    request: MsgUpdateCooperativeDomain
  ): Promise<MsgUpdateCooperativeDomainResponse> {
    const data = MsgUpdateCooperativeDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateCooperativeDomain",
      data
    );
    return promise.then((data) =>
      MsgUpdateCooperativeDomainResponse.decode(new Reader(data))
    );
  }

  DeleteCooperativeDomain(
    request: MsgDeleteCooperativeDomain
  ): Promise<MsgDeleteCooperativeDomainResponse> {
    const data = MsgDeleteCooperativeDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteCooperativeDomain",
      data
    );
    return promise.then((data) =>
      MsgDeleteCooperativeDomainResponse.decode(new Reader(data))
    );
  }

  CreateDelegationPath(
    request: MsgCreateDelegationPath
  ): Promise<MsgCreateDelegationPathResponse> {
    const data = MsgCreateDelegationPath.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateDelegationPath",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegationPathResponse.decode(new Reader(data))
    );
  }

  UpdateDelegationPath(
    request: MsgUpdateDelegationPath
  ): Promise<MsgUpdateDelegationPathResponse> {
    const data = MsgUpdateDelegationPath.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateDelegationPath",
      data
    );
    return promise.then((data) =>
      MsgUpdateDelegationPathResponse.decode(new Reader(data))
    );
  }

  DeleteDelegationPath(
    request: MsgDeleteDelegationPath
  ): Promise<MsgDeleteDelegationPathResponse> {
    const data = MsgDeleteDelegationPath.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteDelegationPath",
      data
    );
    return promise.then((data) =>
      MsgDeleteDelegationPathResponse.decode(new Reader(data))
    );
  }

  CreatePath(request: MsgCreatePath): Promise<MsgCreatePathResponse> {
    const data = MsgCreatePath.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreatePath",
      data
    );
    return promise.then((data) =>
      MsgCreatePathResponse.decode(new Reader(data))
    );
  }

  UpdatePath(request: MsgUpdatePath): Promise<MsgUpdatePathResponse> {
    const data = MsgUpdatePath.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdatePath",
      data
    );
    return promise.then((data) =>
      MsgUpdatePathResponse.decode(new Reader(data))
    );
  }

  DeletePath(request: MsgDeletePath): Promise<MsgDeletePathResponse> {
    const data = MsgDeletePath.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeletePath",
      data
    );
    return promise.then((data) =>
      MsgDeletePathResponse.decode(new Reader(data))
    );
  }

  CreateTimeCalculation(
    request: MsgCreateTimeCalculation
  ): Promise<MsgCreateTimeCalculationResponse> {
    const data = MsgCreateTimeCalculation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateTimeCalculation",
      data
    );
    return promise.then((data) =>
      MsgCreateTimeCalculationResponse.decode(new Reader(data))
    );
  }

  UpdateTimeCalculation(
    request: MsgUpdateTimeCalculation
  ): Promise<MsgUpdateTimeCalculationResponse> {
    const data = MsgUpdateTimeCalculation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateTimeCalculation",
      data
    );
    return promise.then((data) =>
      MsgUpdateTimeCalculationResponse.decode(new Reader(data))
    );
  }

  DeleteTimeCalculation(
    request: MsgDeleteTimeCalculation
  ): Promise<MsgDeleteTimeCalculationResponse> {
    const data = MsgDeleteTimeCalculation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteTimeCalculation",
      data
    );
    return promise.then((data) =>
      MsgDeleteTimeCalculationResponse.decode(new Reader(data))
    );
  }

  CreateCalculationTime(
    request: MsgCreateCalculationTime
  ): Promise<MsgCreateCalculationTimeResponse> {
    const data = MsgCreateCalculationTime.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateCalculationTime",
      data
    );
    return promise.then((data) =>
      MsgCreateCalculationTimeResponse.decode(new Reader(data))
    );
  }

  UpdateCalculationTime(
    request: MsgUpdateCalculationTime
  ): Promise<MsgUpdateCalculationTimeResponse> {
    const data = MsgUpdateCalculationTime.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateCalculationTime",
      data
    );
    return promise.then((data) =>
      MsgUpdateCalculationTimeResponse.decode(new Reader(data))
    );
  }

  DeleteCalculationTime(
    request: MsgDeleteCalculationTime
  ): Promise<MsgDeleteCalculationTimeResponse> {
    const data = MsgDeleteCalculationTime.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteCalculationTime",
      data
    );
    return promise.then((data) =>
      MsgDeleteCalculationTimeResponse.decode(new Reader(data))
    );
  }

  RequestAccessPermission(
    request: MsgRequestAccessPermission
  ): Promise<MsgRequestAccessPermissionResponse> {
    const data = MsgRequestAccessPermission.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "RequestAccessPermission",
      data
    );
    return promise.then((data) =>
      MsgRequestAccessPermissionResponse.decode(new Reader(data))
    );
  }

  CreateInterDomainAclPolicy(
    request: MsgCreateInterDomainAclPolicy
  ): Promise<MsgCreateInterDomainAclPolicyResponse> {
    const data = MsgCreateInterDomainAclPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateInterDomainAclPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateInterDomainAclPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateInterDomainAclPolicy(
    request: MsgUpdateInterDomainAclPolicy
  ): Promise<MsgUpdateInterDomainAclPolicyResponse> {
    const data = MsgUpdateInterDomainAclPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateInterDomainAclPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateInterDomainAclPolicyResponse.decode(new Reader(data))
    );
  }

  DeleteInterDomainAclPolicy(
    request: MsgDeleteInterDomainAclPolicy
  ): Promise<MsgDeleteInterDomainAclPolicyResponse> {
    const data = MsgDeleteInterDomainAclPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteInterDomainAclPolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteInterDomainAclPolicyResponse.decode(new Reader(data))
    );
  }

  CreateInterDomainDclPolicy(
    request: MsgCreateInterDomainDclPolicy
  ): Promise<MsgCreateInterDomainDclPolicyResponse> {
    const data = MsgCreateInterDomainDclPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateInterDomainDclPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateInterDomainDclPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateInterDomainDclPolicy(
    request: MsgUpdateInterDomainDclPolicy
  ): Promise<MsgUpdateInterDomainDclPolicyResponse> {
    const data = MsgUpdateInterDomainDclPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateInterDomainDclPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateInterDomainDclPolicyResponse.decode(new Reader(data))
    );
  }

  DeleteInterDomainDclPolicy(
    request: MsgDeleteInterDomainDclPolicy
  ): Promise<MsgDeleteInterDomainDclPolicyResponse> {
    const data = MsgDeleteInterDomainDclPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteInterDomainDclPolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteInterDomainDclPolicyResponse.decode(new Reader(data))
    );
  }

  CreateDelegationConditions(
    request: MsgCreateDelegationConditions
  ): Promise<MsgCreateDelegationConditionsResponse> {
    const data = MsgCreateDelegationConditions.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateDelegationConditions",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegationConditionsResponse.decode(new Reader(data))
    );
  }

  UpdateDelegationConditions(
    request: MsgUpdateDelegationConditions
  ): Promise<MsgUpdateDelegationConditionsResponse> {
    const data = MsgUpdateDelegationConditions.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateDelegationConditions",
      data
    );
    return promise.then((data) =>
      MsgUpdateDelegationConditionsResponse.decode(new Reader(data))
    );
  }

  DeleteDelegationConditions(
    request: MsgDeleteDelegationConditions
  ): Promise<MsgDeleteDelegationConditionsResponse> {
    const data = MsgDeleteDelegationConditions.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteDelegationConditions",
      data
    );
    return promise.then((data) =>
      MsgDeleteDelegationConditionsResponse.decode(new Reader(data))
    );
  }

  CreateDelegationRule(
    request: MsgCreateDelegationRule
  ): Promise<MsgCreateDelegationRuleResponse> {
    const data = MsgCreateDelegationRule.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateDelegationRule",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegationRuleResponse.decode(new Reader(data))
    );
  }

  UpdateDelegationRule(
    request: MsgUpdateDelegationRule
  ): Promise<MsgUpdateDelegationRuleResponse> {
    const data = MsgUpdateDelegationRule.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateDelegationRule",
      data
    );
    return promise.then((data) =>
      MsgUpdateDelegationRuleResponse.decode(new Reader(data))
    );
  }

  DeleteDelegationRule(
    request: MsgDeleteDelegationRule
  ): Promise<MsgDeleteDelegationRuleResponse> {
    const data = MsgDeleteDelegationRule.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteDelegationRule",
      data
    );
    return promise.then((data) =>
      MsgDeleteDelegationRuleResponse.decode(new Reader(data))
    );
  }

  CreateDelegationPolicyTarget(
    request: MsgCreateDelegationPolicyTarget
  ): Promise<MsgCreateDelegationPolicyTargetResponse> {
    const data = MsgCreateDelegationPolicyTarget.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateDelegationPolicyTarget",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegationPolicyTargetResponse.decode(new Reader(data))
    );
  }

  UpdateDelegationPolicyTarget(
    request: MsgUpdateDelegationPolicyTarget
  ): Promise<MsgUpdateDelegationPolicyTargetResponse> {
    const data = MsgUpdateDelegationPolicyTarget.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateDelegationPolicyTarget",
      data
    );
    return promise.then((data) =>
      MsgUpdateDelegationPolicyTargetResponse.decode(new Reader(data))
    );
  }

  DeleteDelegationPolicyTarget(
    request: MsgDeleteDelegationPolicyTarget
  ): Promise<MsgDeleteDelegationPolicyTargetResponse> {
    const data = MsgDeleteDelegationPolicyTarget.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteDelegationPolicyTarget",
      data
    );
    return promise.then((data) =>
      MsgDeleteDelegationPolicyTargetResponse.decode(new Reader(data))
    );
  }

  CreateDelegationPolicy(
    request: MsgCreateDelegationPolicy
  ): Promise<MsgCreateDelegationPolicyResponse> {
    const data = MsgCreateDelegationPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "CreateDelegationPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateDelegationPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateDelegationPolicy(
    request: MsgUpdateDelegationPolicy
  ): Promise<MsgUpdateDelegationPolicyResponse> {
    const data = MsgUpdateDelegationPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "UpdateDelegationPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateDelegationPolicyResponse.decode(new Reader(data))
    );
  }

  DeleteDelegationPolicy(
    request: MsgDeleteDelegationPolicy
  ): Promise<MsgDeleteDelegationPolicyResponse> {
    const data = MsgDeleteDelegationPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdac.Msg",
      "DeleteDelegationPolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteDelegationPolicyResponse.decode(new Reader(data))
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
