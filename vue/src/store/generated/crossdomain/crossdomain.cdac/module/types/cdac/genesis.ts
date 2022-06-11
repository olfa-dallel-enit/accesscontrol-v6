/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../cdac/params";
import { PublicKey } from "../cdac/public_key";
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

export const protobufPackage = "crossdomain.cdac";

/** GenesisState defines the cdac module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  publicKeyList: PublicKey[];
  publicKeyCount: number;
  validityList: Validity[];
  validityCount: number;
  certificateList: Certificate[];
  certificateCount: number;
  ibcConnectionList: IbcConnection[];
  ibcConnectionCount: number;
  domainList: Domain[];
  domainCount: number;
  authenticationLogList: AuthenticationLog[];
  authenticationLogCount: number;
  domainCooperationList: DomainCooperation[];
  domainCooperationCount: number;
  cooperationLogList: CooperationLog[];
  cooperationLogCount: number;
  forwardPolicyList: ForwardPolicy[];
  forwardPolicyCount: number;
  domainMapList: DomainMap[];
  cooperationNetworkFeaturesList: CooperationNetworkFeatures[];
  cooperationNetworkFeaturesCount: number;
  cooperationDataList: CooperationData[];
  cooperationNetworkList: CooperationNetwork[];
  cooperationNetworkCount: number;
  /** this line is used by starport scaffolding # genesis/proto/state */
  updatePolicy: UpdatePolicy | undefined;
}

const baseGenesisState: object = {
  port_id: "",
  publicKeyCount: 0,
  validityCount: 0,
  certificateCount: 0,
  ibcConnectionCount: 0,
  domainCount: 0,
  authenticationLogCount: 0,
  domainCooperationCount: 0,
  cooperationLogCount: 0,
  forwardPolicyCount: 0,
  cooperationNetworkFeaturesCount: 0,
  cooperationNetworkCount: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    for (const v of message.publicKeyList) {
      PublicKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.publicKeyCount !== 0) {
      writer.uint32(32).uint64(message.publicKeyCount);
    }
    for (const v of message.validityList) {
      Validity.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.validityCount !== 0) {
      writer.uint32(48).uint64(message.validityCount);
    }
    for (const v of message.certificateList) {
      Certificate.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.certificateCount !== 0) {
      writer.uint32(64).uint64(message.certificateCount);
    }
    for (const v of message.ibcConnectionList) {
      IbcConnection.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.ibcConnectionCount !== 0) {
      writer.uint32(80).uint64(message.ibcConnectionCount);
    }
    for (const v of message.domainList) {
      Domain.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.domainCount !== 0) {
      writer.uint32(96).uint64(message.domainCount);
    }
    for (const v of message.authenticationLogList) {
      AuthenticationLog.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.authenticationLogCount !== 0) {
      writer.uint32(112).uint64(message.authenticationLogCount);
    }
    for (const v of message.domainCooperationList) {
      DomainCooperation.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.domainCooperationCount !== 0) {
      writer.uint32(128).uint64(message.domainCooperationCount);
    }
    for (const v of message.cooperationLogList) {
      CooperationLog.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.cooperationLogCount !== 0) {
      writer.uint32(144).uint64(message.cooperationLogCount);
    }
    for (const v of message.forwardPolicyList) {
      ForwardPolicy.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.forwardPolicyCount !== 0) {
      writer.uint32(160).uint64(message.forwardPolicyCount);
    }
    for (const v of message.domainMapList) {
      DomainMap.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.cooperationNetworkFeaturesList) {
      CooperationNetworkFeatures.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    if (message.cooperationNetworkFeaturesCount !== 0) {
      writer.uint32(184).uint64(message.cooperationNetworkFeaturesCount);
    }
    for (const v of message.cooperationDataList) {
      CooperationData.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.cooperationNetworkList) {
      CooperationNetwork.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.cooperationNetworkCount !== 0) {
      writer.uint32(208).uint64(message.cooperationNetworkCount);
    }
    if (message.updatePolicy !== undefined) {
      UpdatePolicy.encode(
        message.updatePolicy,
        writer.uint32(218).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.publicKeyList = [];
    message.validityList = [];
    message.certificateList = [];
    message.ibcConnectionList = [];
    message.domainList = [];
    message.authenticationLogList = [];
    message.domainCooperationList = [];
    message.cooperationLogList = [];
    message.forwardPolicyList = [];
    message.domainMapList = [];
    message.cooperationNetworkFeaturesList = [];
    message.cooperationDataList = [];
    message.cooperationNetworkList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.publicKeyList.push(PublicKey.decode(reader, reader.uint32()));
          break;
        case 4:
          message.publicKeyCount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.validityList.push(Validity.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validityCount = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.certificateList.push(
            Certificate.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.certificateCount = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.ibcConnectionList.push(
            IbcConnection.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.ibcConnectionCount = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.domainList.push(Domain.decode(reader, reader.uint32()));
          break;
        case 12:
          message.domainCount = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.authenticationLogList.push(
            AuthenticationLog.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.authenticationLogCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 15:
          message.domainCooperationList.push(
            DomainCooperation.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.domainCooperationCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 17:
          message.cooperationLogList.push(
            CooperationLog.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.cooperationLogCount = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.forwardPolicyList.push(
            ForwardPolicy.decode(reader, reader.uint32())
          );
          break;
        case 20:
          message.forwardPolicyCount = longToNumber(reader.uint64() as Long);
          break;
        case 21:
          message.domainMapList.push(DomainMap.decode(reader, reader.uint32()));
          break;
        case 22:
          message.cooperationNetworkFeaturesList.push(
            CooperationNetworkFeatures.decode(reader, reader.uint32())
          );
          break;
        case 23:
          message.cooperationNetworkFeaturesCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 24:
          message.cooperationDataList.push(
            CooperationData.decode(reader, reader.uint32())
          );
          break;
        case 25:
          message.cooperationNetworkList.push(
            CooperationNetwork.decode(reader, reader.uint32())
          );
          break;
        case 26:
          message.cooperationNetworkCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 27:
          message.updatePolicy = UpdatePolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.publicKeyList = [];
    message.validityList = [];
    message.certificateList = [];
    message.ibcConnectionList = [];
    message.domainList = [];
    message.authenticationLogList = [];
    message.domainCooperationList = [];
    message.cooperationLogList = [];
    message.forwardPolicyList = [];
    message.domainMapList = [];
    message.cooperationNetworkFeaturesList = [];
    message.cooperationDataList = [];
    message.cooperationNetworkList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (object.publicKeyList !== undefined && object.publicKeyList !== null) {
      for (const e of object.publicKeyList) {
        message.publicKeyList.push(PublicKey.fromJSON(e));
      }
    }
    if (object.publicKeyCount !== undefined && object.publicKeyCount !== null) {
      message.publicKeyCount = Number(object.publicKeyCount);
    } else {
      message.publicKeyCount = 0;
    }
    if (object.validityList !== undefined && object.validityList !== null) {
      for (const e of object.validityList) {
        message.validityList.push(Validity.fromJSON(e));
      }
    }
    if (object.validityCount !== undefined && object.validityCount !== null) {
      message.validityCount = Number(object.validityCount);
    } else {
      message.validityCount = 0;
    }
    if (
      object.certificateList !== undefined &&
      object.certificateList !== null
    ) {
      for (const e of object.certificateList) {
        message.certificateList.push(Certificate.fromJSON(e));
      }
    }
    if (
      object.certificateCount !== undefined &&
      object.certificateCount !== null
    ) {
      message.certificateCount = Number(object.certificateCount);
    } else {
      message.certificateCount = 0;
    }
    if (
      object.ibcConnectionList !== undefined &&
      object.ibcConnectionList !== null
    ) {
      for (const e of object.ibcConnectionList) {
        message.ibcConnectionList.push(IbcConnection.fromJSON(e));
      }
    }
    if (
      object.ibcConnectionCount !== undefined &&
      object.ibcConnectionCount !== null
    ) {
      message.ibcConnectionCount = Number(object.ibcConnectionCount);
    } else {
      message.ibcConnectionCount = 0;
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(Domain.fromJSON(e));
      }
    }
    if (object.domainCount !== undefined && object.domainCount !== null) {
      message.domainCount = Number(object.domainCount);
    } else {
      message.domainCount = 0;
    }
    if (
      object.authenticationLogList !== undefined &&
      object.authenticationLogList !== null
    ) {
      for (const e of object.authenticationLogList) {
        message.authenticationLogList.push(AuthenticationLog.fromJSON(e));
      }
    }
    if (
      object.authenticationLogCount !== undefined &&
      object.authenticationLogCount !== null
    ) {
      message.authenticationLogCount = Number(object.authenticationLogCount);
    } else {
      message.authenticationLogCount = 0;
    }
    if (
      object.domainCooperationList !== undefined &&
      object.domainCooperationList !== null
    ) {
      for (const e of object.domainCooperationList) {
        message.domainCooperationList.push(DomainCooperation.fromJSON(e));
      }
    }
    if (
      object.domainCooperationCount !== undefined &&
      object.domainCooperationCount !== null
    ) {
      message.domainCooperationCount = Number(object.domainCooperationCount);
    } else {
      message.domainCooperationCount = 0;
    }
    if (
      object.cooperationLogList !== undefined &&
      object.cooperationLogList !== null
    ) {
      for (const e of object.cooperationLogList) {
        message.cooperationLogList.push(CooperationLog.fromJSON(e));
      }
    }
    if (
      object.cooperationLogCount !== undefined &&
      object.cooperationLogCount !== null
    ) {
      message.cooperationLogCount = Number(object.cooperationLogCount);
    } else {
      message.cooperationLogCount = 0;
    }
    if (
      object.forwardPolicyList !== undefined &&
      object.forwardPolicyList !== null
    ) {
      for (const e of object.forwardPolicyList) {
        message.forwardPolicyList.push(ForwardPolicy.fromJSON(e));
      }
    }
    if (
      object.forwardPolicyCount !== undefined &&
      object.forwardPolicyCount !== null
    ) {
      message.forwardPolicyCount = Number(object.forwardPolicyCount);
    } else {
      message.forwardPolicyCount = 0;
    }
    if (object.domainMapList !== undefined && object.domainMapList !== null) {
      for (const e of object.domainMapList) {
        message.domainMapList.push(DomainMap.fromJSON(e));
      }
    }
    if (
      object.cooperationNetworkFeaturesList !== undefined &&
      object.cooperationNetworkFeaturesList !== null
    ) {
      for (const e of object.cooperationNetworkFeaturesList) {
        message.cooperationNetworkFeaturesList.push(
          CooperationNetworkFeatures.fromJSON(e)
        );
      }
    }
    if (
      object.cooperationNetworkFeaturesCount !== undefined &&
      object.cooperationNetworkFeaturesCount !== null
    ) {
      message.cooperationNetworkFeaturesCount = Number(
        object.cooperationNetworkFeaturesCount
      );
    } else {
      message.cooperationNetworkFeaturesCount = 0;
    }
    if (
      object.cooperationDataList !== undefined &&
      object.cooperationDataList !== null
    ) {
      for (const e of object.cooperationDataList) {
        message.cooperationDataList.push(CooperationData.fromJSON(e));
      }
    }
    if (
      object.cooperationNetworkList !== undefined &&
      object.cooperationNetworkList !== null
    ) {
      for (const e of object.cooperationNetworkList) {
        message.cooperationNetworkList.push(CooperationNetwork.fromJSON(e));
      }
    }
    if (
      object.cooperationNetworkCount !== undefined &&
      object.cooperationNetworkCount !== null
    ) {
      message.cooperationNetworkCount = Number(object.cooperationNetworkCount);
    } else {
      message.cooperationNetworkCount = 0;
    }
    if (object.updatePolicy !== undefined && object.updatePolicy !== null) {
      message.updatePolicy = UpdatePolicy.fromJSON(object.updatePolicy);
    } else {
      message.updatePolicy = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.publicKeyList) {
      obj.publicKeyList = message.publicKeyList.map((e) =>
        e ? PublicKey.toJSON(e) : undefined
      );
    } else {
      obj.publicKeyList = [];
    }
    message.publicKeyCount !== undefined &&
      (obj.publicKeyCount = message.publicKeyCount);
    if (message.validityList) {
      obj.validityList = message.validityList.map((e) =>
        e ? Validity.toJSON(e) : undefined
      );
    } else {
      obj.validityList = [];
    }
    message.validityCount !== undefined &&
      (obj.validityCount = message.validityCount);
    if (message.certificateList) {
      obj.certificateList = message.certificateList.map((e) =>
        e ? Certificate.toJSON(e) : undefined
      );
    } else {
      obj.certificateList = [];
    }
    message.certificateCount !== undefined &&
      (obj.certificateCount = message.certificateCount);
    if (message.ibcConnectionList) {
      obj.ibcConnectionList = message.ibcConnectionList.map((e) =>
        e ? IbcConnection.toJSON(e) : undefined
      );
    } else {
      obj.ibcConnectionList = [];
    }
    message.ibcConnectionCount !== undefined &&
      (obj.ibcConnectionCount = message.ibcConnectionCount);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) =>
        e ? Domain.toJSON(e) : undefined
      );
    } else {
      obj.domainList = [];
    }
    message.domainCount !== undefined &&
      (obj.domainCount = message.domainCount);
    if (message.authenticationLogList) {
      obj.authenticationLogList = message.authenticationLogList.map((e) =>
        e ? AuthenticationLog.toJSON(e) : undefined
      );
    } else {
      obj.authenticationLogList = [];
    }
    message.authenticationLogCount !== undefined &&
      (obj.authenticationLogCount = message.authenticationLogCount);
    if (message.domainCooperationList) {
      obj.domainCooperationList = message.domainCooperationList.map((e) =>
        e ? DomainCooperation.toJSON(e) : undefined
      );
    } else {
      obj.domainCooperationList = [];
    }
    message.domainCooperationCount !== undefined &&
      (obj.domainCooperationCount = message.domainCooperationCount);
    if (message.cooperationLogList) {
      obj.cooperationLogList = message.cooperationLogList.map((e) =>
        e ? CooperationLog.toJSON(e) : undefined
      );
    } else {
      obj.cooperationLogList = [];
    }
    message.cooperationLogCount !== undefined &&
      (obj.cooperationLogCount = message.cooperationLogCount);
    if (message.forwardPolicyList) {
      obj.forwardPolicyList = message.forwardPolicyList.map((e) =>
        e ? ForwardPolicy.toJSON(e) : undefined
      );
    } else {
      obj.forwardPolicyList = [];
    }
    message.forwardPolicyCount !== undefined &&
      (obj.forwardPolicyCount = message.forwardPolicyCount);
    if (message.domainMapList) {
      obj.domainMapList = message.domainMapList.map((e) =>
        e ? DomainMap.toJSON(e) : undefined
      );
    } else {
      obj.domainMapList = [];
    }
    if (message.cooperationNetworkFeaturesList) {
      obj.cooperationNetworkFeaturesList = message.cooperationNetworkFeaturesList.map(
        (e) => (e ? CooperationNetworkFeatures.toJSON(e) : undefined)
      );
    } else {
      obj.cooperationNetworkFeaturesList = [];
    }
    message.cooperationNetworkFeaturesCount !== undefined &&
      (obj.cooperationNetworkFeaturesCount =
        message.cooperationNetworkFeaturesCount);
    if (message.cooperationDataList) {
      obj.cooperationDataList = message.cooperationDataList.map((e) =>
        e ? CooperationData.toJSON(e) : undefined
      );
    } else {
      obj.cooperationDataList = [];
    }
    if (message.cooperationNetworkList) {
      obj.cooperationNetworkList = message.cooperationNetworkList.map((e) =>
        e ? CooperationNetwork.toJSON(e) : undefined
      );
    } else {
      obj.cooperationNetworkList = [];
    }
    message.cooperationNetworkCount !== undefined &&
      (obj.cooperationNetworkCount = message.cooperationNetworkCount);
    message.updatePolicy !== undefined &&
      (obj.updatePolicy = message.updatePolicy
        ? UpdatePolicy.toJSON(message.updatePolicy)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.publicKeyList = [];
    message.validityList = [];
    message.certificateList = [];
    message.ibcConnectionList = [];
    message.domainList = [];
    message.authenticationLogList = [];
    message.domainCooperationList = [];
    message.cooperationLogList = [];
    message.forwardPolicyList = [];
    message.domainMapList = [];
    message.cooperationNetworkFeaturesList = [];
    message.cooperationDataList = [];
    message.cooperationNetworkList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (object.publicKeyList !== undefined && object.publicKeyList !== null) {
      for (const e of object.publicKeyList) {
        message.publicKeyList.push(PublicKey.fromPartial(e));
      }
    }
    if (object.publicKeyCount !== undefined && object.publicKeyCount !== null) {
      message.publicKeyCount = object.publicKeyCount;
    } else {
      message.publicKeyCount = 0;
    }
    if (object.validityList !== undefined && object.validityList !== null) {
      for (const e of object.validityList) {
        message.validityList.push(Validity.fromPartial(e));
      }
    }
    if (object.validityCount !== undefined && object.validityCount !== null) {
      message.validityCount = object.validityCount;
    } else {
      message.validityCount = 0;
    }
    if (
      object.certificateList !== undefined &&
      object.certificateList !== null
    ) {
      for (const e of object.certificateList) {
        message.certificateList.push(Certificate.fromPartial(e));
      }
    }
    if (
      object.certificateCount !== undefined &&
      object.certificateCount !== null
    ) {
      message.certificateCount = object.certificateCount;
    } else {
      message.certificateCount = 0;
    }
    if (
      object.ibcConnectionList !== undefined &&
      object.ibcConnectionList !== null
    ) {
      for (const e of object.ibcConnectionList) {
        message.ibcConnectionList.push(IbcConnection.fromPartial(e));
      }
    }
    if (
      object.ibcConnectionCount !== undefined &&
      object.ibcConnectionCount !== null
    ) {
      message.ibcConnectionCount = object.ibcConnectionCount;
    } else {
      message.ibcConnectionCount = 0;
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(Domain.fromPartial(e));
      }
    }
    if (object.domainCount !== undefined && object.domainCount !== null) {
      message.domainCount = object.domainCount;
    } else {
      message.domainCount = 0;
    }
    if (
      object.authenticationLogList !== undefined &&
      object.authenticationLogList !== null
    ) {
      for (const e of object.authenticationLogList) {
        message.authenticationLogList.push(AuthenticationLog.fromPartial(e));
      }
    }
    if (
      object.authenticationLogCount !== undefined &&
      object.authenticationLogCount !== null
    ) {
      message.authenticationLogCount = object.authenticationLogCount;
    } else {
      message.authenticationLogCount = 0;
    }
    if (
      object.domainCooperationList !== undefined &&
      object.domainCooperationList !== null
    ) {
      for (const e of object.domainCooperationList) {
        message.domainCooperationList.push(DomainCooperation.fromPartial(e));
      }
    }
    if (
      object.domainCooperationCount !== undefined &&
      object.domainCooperationCount !== null
    ) {
      message.domainCooperationCount = object.domainCooperationCount;
    } else {
      message.domainCooperationCount = 0;
    }
    if (
      object.cooperationLogList !== undefined &&
      object.cooperationLogList !== null
    ) {
      for (const e of object.cooperationLogList) {
        message.cooperationLogList.push(CooperationLog.fromPartial(e));
      }
    }
    if (
      object.cooperationLogCount !== undefined &&
      object.cooperationLogCount !== null
    ) {
      message.cooperationLogCount = object.cooperationLogCount;
    } else {
      message.cooperationLogCount = 0;
    }
    if (
      object.forwardPolicyList !== undefined &&
      object.forwardPolicyList !== null
    ) {
      for (const e of object.forwardPolicyList) {
        message.forwardPolicyList.push(ForwardPolicy.fromPartial(e));
      }
    }
    if (
      object.forwardPolicyCount !== undefined &&
      object.forwardPolicyCount !== null
    ) {
      message.forwardPolicyCount = object.forwardPolicyCount;
    } else {
      message.forwardPolicyCount = 0;
    }
    if (object.domainMapList !== undefined && object.domainMapList !== null) {
      for (const e of object.domainMapList) {
        message.domainMapList.push(DomainMap.fromPartial(e));
      }
    }
    if (
      object.cooperationNetworkFeaturesList !== undefined &&
      object.cooperationNetworkFeaturesList !== null
    ) {
      for (const e of object.cooperationNetworkFeaturesList) {
        message.cooperationNetworkFeaturesList.push(
          CooperationNetworkFeatures.fromPartial(e)
        );
      }
    }
    if (
      object.cooperationNetworkFeaturesCount !== undefined &&
      object.cooperationNetworkFeaturesCount !== null
    ) {
      message.cooperationNetworkFeaturesCount =
        object.cooperationNetworkFeaturesCount;
    } else {
      message.cooperationNetworkFeaturesCount = 0;
    }
    if (
      object.cooperationDataList !== undefined &&
      object.cooperationDataList !== null
    ) {
      for (const e of object.cooperationDataList) {
        message.cooperationDataList.push(CooperationData.fromPartial(e));
      }
    }
    if (
      object.cooperationNetworkList !== undefined &&
      object.cooperationNetworkList !== null
    ) {
      for (const e of object.cooperationNetworkList) {
        message.cooperationNetworkList.push(CooperationNetwork.fromPartial(e));
      }
    }
    if (
      object.cooperationNetworkCount !== undefined &&
      object.cooperationNetworkCount !== null
    ) {
      message.cooperationNetworkCount = object.cooperationNetworkCount;
    } else {
      message.cooperationNetworkCount = 0;
    }
    if (object.updatePolicy !== undefined && object.updatePolicy !== null) {
      message.updatePolicy = UpdatePolicy.fromPartial(object.updatePolicy);
    } else {
      message.updatePolicy = undefined;
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
