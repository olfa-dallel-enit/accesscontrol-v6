// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDomainCooperation } from "./types/cdac/tx";
import { MsgDeleteDelegationRule } from "./types/cdac/tx";
import { MsgCreateInterDomainDclPolicy } from "./types/cdac/tx";
import { MsgSendModifyCooperationValidity } from "./types/cdac/tx";
import { MsgCreateDomain } from "./types/cdac/tx";
import { MsgSendDisableCooperation } from "./types/cdac/tx";
import { MsgCreateTimeCalculation } from "./types/cdac/tx";
import { MsgUpdateCooperationData } from "./types/cdac/tx";
import { MsgRequestAccessPermission } from "./types/cdac/tx";
import { MsgUpdateDelegationConditions } from "./types/cdac/tx";
import { MsgDeleteCalculationTime } from "./types/cdac/tx";
import { MsgDeletePublicKey } from "./types/cdac/tx";
import { MsgDeleteCooperativeDomain } from "./types/cdac/tx";
import { MsgDeleteForwardPolicy } from "./types/cdac/tx";
import { MsgCreateAuthenticationLog } from "./types/cdac/tx";
import { MsgCreateIbcConnection } from "./types/cdac/tx";
import { MsgSendEnableCooperation } from "./types/cdac/tx";
import { MsgSendModifyCooperationInterest } from "./types/cdac/tx";
import { MsgCreateDelegationConditions } from "./types/cdac/tx";
import { MsgCreateCooperationNetwork } from "./types/cdac/tx";
import { MsgCreatePath } from "./types/cdac/tx";
import { MsgUpdateAuthenticationLog } from "./types/cdac/tx";
import { MsgUpdateIbcConnection } from "./types/cdac/tx";
import { MsgCreatePublicKey } from "./types/cdac/tx";
import { MsgCreateCooperationLog } from "./types/cdac/tx";
import { MsgCreateDomainMap } from "./types/cdac/tx";
import { MsgSendRevokeCooperation } from "./types/cdac/tx";
import { MsgDeleteCooperationNetworkFeatures } from "./types/cdac/tx";
import { MsgDeleteCertificate } from "./types/cdac/tx";
import { MsgCreateInterDomainAclPolicy } from "./types/cdac/tx";
import { MsgCreateCertificate } from "./types/cdac/tx";
import { MsgUpdateDelegationLog } from "./types/cdac/tx";
import { MsgDeleteDomainMap } from "./types/cdac/tx";
import { MsgCreateDelegationPolicy } from "./types/cdac/tx";
import { MsgCreateDelegationLog } from "./types/cdac/tx";
import { MsgRequestDelegation } from "./types/cdac/tx";
import { MsgUpdateDelegationPolicyTarget } from "./types/cdac/tx";
import { MsgCreateDelegationRule } from "./types/cdac/tx";
import { MsgSendForwardCooperationData } from "./types/cdac/tx";
import { MsgUpdateDelegationRule } from "./types/cdac/tx";
import { MsgUpdatePath } from "./types/cdac/tx";
import { MsgDeleteDelegationPolicyTarget } from "./types/cdac/tx";
import { MsgDeleteIbcConnection } from "./types/cdac/tx";
import { MsgUpdateCalculationTime } from "./types/cdac/tx";
import { MsgUpdateDelegationPath } from "./types/cdac/tx";
import { MsgUpdateCooperationNetwork } from "./types/cdac/tx";
import { MsgUpdateDelegationPolicy } from "./types/cdac/tx";
import { MsgDeleteDelegationConditions } from "./types/cdac/tx";
import { MsgCreateDelegationPath } from "./types/cdac/tx";
import { MsgUpdateDomainMap } from "./types/cdac/tx";
import { MsgUpdateDomainCooperation } from "./types/cdac/tx";
import { MsgUpdateInterDomainAclPolicy } from "./types/cdac/tx";
import { MsgGenerateCooperationNetwork } from "./types/cdac/tx";
import { MsgUpdateUpdatePolicy } from "./types/cdac/tx";
import { MsgDeleteInterDomainDclPolicy } from "./types/cdac/tx";
import { MsgDeleteDelegationPolicy } from "./types/cdac/tx";
import { MsgDeleteTimeCalculation } from "./types/cdac/tx";
import { MsgDeleteUpdatePolicy } from "./types/cdac/tx";
import { MsgUpdateCooperativeDomain } from "./types/cdac/tx";
import { MsgCreateCalculationTime } from "./types/cdac/tx";
import { MsgDeleteCooperationData } from "./types/cdac/tx";
import { MsgDeletePath } from "./types/cdac/tx";
import { MsgSendModifyCooperationCost } from "./types/cdac/tx";
import { MsgDeleteCooperationNetwork } from "./types/cdac/tx";
import { MsgUpdateDomain } from "./types/cdac/tx";
import { MsgUpdateCooperationLog } from "./types/cdac/tx";
import { MsgGeneratePeriodicalCooperationNetwork } from "./types/cdac/tx";
import { MsgDeleteCooperationLog } from "./types/cdac/tx";
import { MsgSendEstablishCooperation } from "./types/cdac/tx";
import { MsgUpdateForwardPolicy } from "./types/cdac/tx";
import { MsgCreateUpdatePolicy } from "./types/cdac/tx";
import { MsgDeleteAuthenticationLog } from "./types/cdac/tx";
import { MsgCreateValidity } from "./types/cdac/tx";
import { MsgDeleteDomain } from "./types/cdac/tx";
import { MsgCreateCooperationNetworkFeatures } from "./types/cdac/tx";
import { MsgDeleteInterDomainAclPolicy } from "./types/cdac/tx";
import { MsgUpdateCooperationNetworkFeatures } from "./types/cdac/tx";
import { MsgCreateCooperativeDomain } from "./types/cdac/tx";
import { MsgUpdateValidity } from "./types/cdac/tx";
import { MsgDeleteValidity } from "./types/cdac/tx";
import { MsgUpdateCertificate } from "./types/cdac/tx";
import { MsgDeleteDelegationPath } from "./types/cdac/tx";
import { MsgUpdateInterDomainDclPolicy } from "./types/cdac/tx";
import { MsgCreateCooperationData } from "./types/cdac/tx";
import { MsgSendExchangeCooperationData } from "./types/cdac/tx";
import { MsgUpdateTimeCalculation } from "./types/cdac/tx";
import { MsgDeleteDomainCooperation } from "./types/cdac/tx";
import { MsgCreateDelegationPolicyTarget } from "./types/cdac/tx";
import { MsgSendPublishProofList } from "./types/cdac/tx";
import { MsgUpdatePublicKey } from "./types/cdac/tx";
import { MsgSendAuthenticateDomain } from "./types/cdac/tx";
import { MsgDeleteDelegationLog } from "./types/cdac/tx";
import { MsgCreateForwardPolicy } from "./types/cdac/tx";


const types = [
  ["/crossdomain.cdac.MsgCreateDomainCooperation", MsgCreateDomainCooperation],
  ["/crossdomain.cdac.MsgDeleteDelegationRule", MsgDeleteDelegationRule],
  ["/crossdomain.cdac.MsgCreateInterDomainDclPolicy", MsgCreateInterDomainDclPolicy],
  ["/crossdomain.cdac.MsgSendModifyCooperationValidity", MsgSendModifyCooperationValidity],
  ["/crossdomain.cdac.MsgCreateDomain", MsgCreateDomain],
  ["/crossdomain.cdac.MsgSendDisableCooperation", MsgSendDisableCooperation],
  ["/crossdomain.cdac.MsgCreateTimeCalculation", MsgCreateTimeCalculation],
  ["/crossdomain.cdac.MsgUpdateCooperationData", MsgUpdateCooperationData],
  ["/crossdomain.cdac.MsgRequestAccessPermission", MsgRequestAccessPermission],
  ["/crossdomain.cdac.MsgUpdateDelegationConditions", MsgUpdateDelegationConditions],
  ["/crossdomain.cdac.MsgDeleteCalculationTime", MsgDeleteCalculationTime],
  ["/crossdomain.cdac.MsgDeletePublicKey", MsgDeletePublicKey],
  ["/crossdomain.cdac.MsgDeleteCooperativeDomain", MsgDeleteCooperativeDomain],
  ["/crossdomain.cdac.MsgDeleteForwardPolicy", MsgDeleteForwardPolicy],
  ["/crossdomain.cdac.MsgCreateAuthenticationLog", MsgCreateAuthenticationLog],
  ["/crossdomain.cdac.MsgCreateIbcConnection", MsgCreateIbcConnection],
  ["/crossdomain.cdac.MsgSendEnableCooperation", MsgSendEnableCooperation],
  ["/crossdomain.cdac.MsgSendModifyCooperationInterest", MsgSendModifyCooperationInterest],
  ["/crossdomain.cdac.MsgCreateDelegationConditions", MsgCreateDelegationConditions],
  ["/crossdomain.cdac.MsgCreateCooperationNetwork", MsgCreateCooperationNetwork],
  ["/crossdomain.cdac.MsgCreatePath", MsgCreatePath],
  ["/crossdomain.cdac.MsgUpdateAuthenticationLog", MsgUpdateAuthenticationLog],
  ["/crossdomain.cdac.MsgUpdateIbcConnection", MsgUpdateIbcConnection],
  ["/crossdomain.cdac.MsgCreatePublicKey", MsgCreatePublicKey],
  ["/crossdomain.cdac.MsgCreateCooperationLog", MsgCreateCooperationLog],
  ["/crossdomain.cdac.MsgCreateDomainMap", MsgCreateDomainMap],
  ["/crossdomain.cdac.MsgSendRevokeCooperation", MsgSendRevokeCooperation],
  ["/crossdomain.cdac.MsgDeleteCooperationNetworkFeatures", MsgDeleteCooperationNetworkFeatures],
  ["/crossdomain.cdac.MsgDeleteCertificate", MsgDeleteCertificate],
  ["/crossdomain.cdac.MsgCreateInterDomainAclPolicy", MsgCreateInterDomainAclPolicy],
  ["/crossdomain.cdac.MsgCreateCertificate", MsgCreateCertificate],
  ["/crossdomain.cdac.MsgUpdateDelegationLog", MsgUpdateDelegationLog],
  ["/crossdomain.cdac.MsgDeleteDomainMap", MsgDeleteDomainMap],
  ["/crossdomain.cdac.MsgCreateDelegationPolicy", MsgCreateDelegationPolicy],
  ["/crossdomain.cdac.MsgCreateDelegationLog", MsgCreateDelegationLog],
  ["/crossdomain.cdac.MsgRequestDelegation", MsgRequestDelegation],
  ["/crossdomain.cdac.MsgUpdateDelegationPolicyTarget", MsgUpdateDelegationPolicyTarget],
  ["/crossdomain.cdac.MsgCreateDelegationRule", MsgCreateDelegationRule],
  ["/crossdomain.cdac.MsgSendForwardCooperationData", MsgSendForwardCooperationData],
  ["/crossdomain.cdac.MsgUpdateDelegationRule", MsgUpdateDelegationRule],
  ["/crossdomain.cdac.MsgUpdatePath", MsgUpdatePath],
  ["/crossdomain.cdac.MsgDeleteDelegationPolicyTarget", MsgDeleteDelegationPolicyTarget],
  ["/crossdomain.cdac.MsgDeleteIbcConnection", MsgDeleteIbcConnection],
  ["/crossdomain.cdac.MsgUpdateCalculationTime", MsgUpdateCalculationTime],
  ["/crossdomain.cdac.MsgUpdateDelegationPath", MsgUpdateDelegationPath],
  ["/crossdomain.cdac.MsgUpdateCooperationNetwork", MsgUpdateCooperationNetwork],
  ["/crossdomain.cdac.MsgUpdateDelegationPolicy", MsgUpdateDelegationPolicy],
  ["/crossdomain.cdac.MsgDeleteDelegationConditions", MsgDeleteDelegationConditions],
  ["/crossdomain.cdac.MsgCreateDelegationPath", MsgCreateDelegationPath],
  ["/crossdomain.cdac.MsgUpdateDomainMap", MsgUpdateDomainMap],
  ["/crossdomain.cdac.MsgUpdateDomainCooperation", MsgUpdateDomainCooperation],
  ["/crossdomain.cdac.MsgUpdateInterDomainAclPolicy", MsgUpdateInterDomainAclPolicy],
  ["/crossdomain.cdac.MsgGenerateCooperationNetwork", MsgGenerateCooperationNetwork],
  ["/crossdomain.cdac.MsgUpdateUpdatePolicy", MsgUpdateUpdatePolicy],
  ["/crossdomain.cdac.MsgDeleteInterDomainDclPolicy", MsgDeleteInterDomainDclPolicy],
  ["/crossdomain.cdac.MsgDeleteDelegationPolicy", MsgDeleteDelegationPolicy],
  ["/crossdomain.cdac.MsgDeleteTimeCalculation", MsgDeleteTimeCalculation],
  ["/crossdomain.cdac.MsgDeleteUpdatePolicy", MsgDeleteUpdatePolicy],
  ["/crossdomain.cdac.MsgUpdateCooperativeDomain", MsgUpdateCooperativeDomain],
  ["/crossdomain.cdac.MsgCreateCalculationTime", MsgCreateCalculationTime],
  ["/crossdomain.cdac.MsgDeleteCooperationData", MsgDeleteCooperationData],
  ["/crossdomain.cdac.MsgDeletePath", MsgDeletePath],
  ["/crossdomain.cdac.MsgSendModifyCooperationCost", MsgSendModifyCooperationCost],
  ["/crossdomain.cdac.MsgDeleteCooperationNetwork", MsgDeleteCooperationNetwork],
  ["/crossdomain.cdac.MsgUpdateDomain", MsgUpdateDomain],
  ["/crossdomain.cdac.MsgUpdateCooperationLog", MsgUpdateCooperationLog],
  ["/crossdomain.cdac.MsgGeneratePeriodicalCooperationNetwork", MsgGeneratePeriodicalCooperationNetwork],
  ["/crossdomain.cdac.MsgDeleteCooperationLog", MsgDeleteCooperationLog],
  ["/crossdomain.cdac.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  ["/crossdomain.cdac.MsgUpdateForwardPolicy", MsgUpdateForwardPolicy],
  ["/crossdomain.cdac.MsgCreateUpdatePolicy", MsgCreateUpdatePolicy],
  ["/crossdomain.cdac.MsgDeleteAuthenticationLog", MsgDeleteAuthenticationLog],
  ["/crossdomain.cdac.MsgCreateValidity", MsgCreateValidity],
  ["/crossdomain.cdac.MsgDeleteDomain", MsgDeleteDomain],
  ["/crossdomain.cdac.MsgCreateCooperationNetworkFeatures", MsgCreateCooperationNetworkFeatures],
  ["/crossdomain.cdac.MsgDeleteInterDomainAclPolicy", MsgDeleteInterDomainAclPolicy],
  ["/crossdomain.cdac.MsgUpdateCooperationNetworkFeatures", MsgUpdateCooperationNetworkFeatures],
  ["/crossdomain.cdac.MsgCreateCooperativeDomain", MsgCreateCooperativeDomain],
  ["/crossdomain.cdac.MsgUpdateValidity", MsgUpdateValidity],
  ["/crossdomain.cdac.MsgDeleteValidity", MsgDeleteValidity],
  ["/crossdomain.cdac.MsgUpdateCertificate", MsgUpdateCertificate],
  ["/crossdomain.cdac.MsgDeleteDelegationPath", MsgDeleteDelegationPath],
  ["/crossdomain.cdac.MsgUpdateInterDomainDclPolicy", MsgUpdateInterDomainDclPolicy],
  ["/crossdomain.cdac.MsgCreateCooperationData", MsgCreateCooperationData],
  ["/crossdomain.cdac.MsgSendExchangeCooperationData", MsgSendExchangeCooperationData],
  ["/crossdomain.cdac.MsgUpdateTimeCalculation", MsgUpdateTimeCalculation],
  ["/crossdomain.cdac.MsgDeleteDomainCooperation", MsgDeleteDomainCooperation],
  ["/crossdomain.cdac.MsgCreateDelegationPolicyTarget", MsgCreateDelegationPolicyTarget],
  ["/crossdomain.cdac.MsgSendPublishProofList", MsgSendPublishProofList],
  ["/crossdomain.cdac.MsgUpdatePublicKey", MsgUpdatePublicKey],
  ["/crossdomain.cdac.MsgSendAuthenticateDomain", MsgSendAuthenticateDomain],
  ["/crossdomain.cdac.MsgDeleteDelegationLog", MsgDeleteDelegationLog],
  ["/crossdomain.cdac.MsgCreateForwardPolicy", MsgCreateForwardPolicy],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateDomainCooperation: (data: MsgCreateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomainCooperation", value: MsgCreateDomainCooperation.fromPartial( data ) }),
    msgDeleteDelegationRule: (data: MsgDeleteDelegationRule): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDelegationRule", value: MsgDeleteDelegationRule.fromPartial( data ) }),
    msgCreateInterDomainDclPolicy: (data: MsgCreateInterDomainDclPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateInterDomainDclPolicy", value: MsgCreateInterDomainDclPolicy.fromPartial( data ) }),
    msgSendModifyCooperationValidity: (data: MsgSendModifyCooperationValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationValidity", value: MsgSendModifyCooperationValidity.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    msgSendDisableCooperation: (data: MsgSendDisableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendDisableCooperation", value: MsgSendDisableCooperation.fromPartial( data ) }),
    msgCreateTimeCalculation: (data: MsgCreateTimeCalculation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateTimeCalculation", value: MsgCreateTimeCalculation.fromPartial( data ) }),
    msgUpdateCooperationData: (data: MsgUpdateCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationData", value: MsgUpdateCooperationData.fromPartial( data ) }),
    msgRequestAccessPermission: (data: MsgRequestAccessPermission): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgRequestAccessPermission", value: MsgRequestAccessPermission.fromPartial( data ) }),
    msgUpdateDelegationConditions: (data: MsgUpdateDelegationConditions): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDelegationConditions", value: MsgUpdateDelegationConditions.fromPartial( data ) }),
    msgDeleteCalculationTime: (data: MsgDeleteCalculationTime): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCalculationTime", value: MsgDeleteCalculationTime.fromPartial( data ) }),
    msgDeletePublicKey: (data: MsgDeletePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeletePublicKey", value: MsgDeletePublicKey.fromPartial( data ) }),
    msgDeleteCooperativeDomain: (data: MsgDeleteCooperativeDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperativeDomain", value: MsgDeleteCooperativeDomain.fromPartial( data ) }),
    msgDeleteForwardPolicy: (data: MsgDeleteForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteForwardPolicy", value: MsgDeleteForwardPolicy.fromPartial( data ) }),
    msgCreateAuthenticationLog: (data: MsgCreateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateAuthenticationLog", value: MsgCreateAuthenticationLog.fromPartial( data ) }),
    msgCreateIbcConnection: (data: MsgCreateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateIbcConnection", value: MsgCreateIbcConnection.fromPartial( data ) }),
    msgSendEnableCooperation: (data: MsgSendEnableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendEnableCooperation", value: MsgSendEnableCooperation.fromPartial( data ) }),
    msgSendModifyCooperationInterest: (data: MsgSendModifyCooperationInterest): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationInterest", value: MsgSendModifyCooperationInterest.fromPartial( data ) }),
    msgCreateDelegationConditions: (data: MsgCreateDelegationConditions): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDelegationConditions", value: MsgCreateDelegationConditions.fromPartial( data ) }),
    msgCreateCooperationNetwork: (data: MsgCreateCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationNetwork", value: MsgCreateCooperationNetwork.fromPartial( data ) }),
    msgCreatePath: (data: MsgCreatePath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreatePath", value: MsgCreatePath.fromPartial( data ) }),
    msgUpdateAuthenticationLog: (data: MsgUpdateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateAuthenticationLog", value: MsgUpdateAuthenticationLog.fromPartial( data ) }),
    msgUpdateIbcConnection: (data: MsgUpdateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateIbcConnection", value: MsgUpdateIbcConnection.fromPartial( data ) }),
    msgCreatePublicKey: (data: MsgCreatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreatePublicKey", value: MsgCreatePublicKey.fromPartial( data ) }),
    msgCreateCooperationLog: (data: MsgCreateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationLog", value: MsgCreateCooperationLog.fromPartial( data ) }),
    msgCreateDomainMap: (data: MsgCreateDomainMap): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomainMap", value: MsgCreateDomainMap.fromPartial( data ) }),
    msgSendRevokeCooperation: (data: MsgSendRevokeCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendRevokeCooperation", value: MsgSendRevokeCooperation.fromPartial( data ) }),
    msgDeleteCooperationNetworkFeatures: (data: MsgDeleteCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationNetworkFeatures", value: MsgDeleteCooperationNetworkFeatures.fromPartial( data ) }),
    msgDeleteCertificate: (data: MsgDeleteCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCertificate", value: MsgDeleteCertificate.fromPartial( data ) }),
    msgCreateInterDomainAclPolicy: (data: MsgCreateInterDomainAclPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateInterDomainAclPolicy", value: MsgCreateInterDomainAclPolicy.fromPartial( data ) }),
    msgCreateCertificate: (data: MsgCreateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCertificate", value: MsgCreateCertificate.fromPartial( data ) }),
    msgUpdateDelegationLog: (data: MsgUpdateDelegationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDelegationLog", value: MsgUpdateDelegationLog.fromPartial( data ) }),
    msgDeleteDomainMap: (data: MsgDeleteDomainMap): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomainMap", value: MsgDeleteDomainMap.fromPartial( data ) }),
    msgCreateDelegationPolicy: (data: MsgCreateDelegationPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDelegationPolicy", value: MsgCreateDelegationPolicy.fromPartial( data ) }),
    msgCreateDelegationLog: (data: MsgCreateDelegationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDelegationLog", value: MsgCreateDelegationLog.fromPartial( data ) }),
    msgRequestDelegation: (data: MsgRequestDelegation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgRequestDelegation", value: MsgRequestDelegation.fromPartial( data ) }),
    msgUpdateDelegationPolicyTarget: (data: MsgUpdateDelegationPolicyTarget): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDelegationPolicyTarget", value: MsgUpdateDelegationPolicyTarget.fromPartial( data ) }),
    msgCreateDelegationRule: (data: MsgCreateDelegationRule): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDelegationRule", value: MsgCreateDelegationRule.fromPartial( data ) }),
    msgSendForwardCooperationData: (data: MsgSendForwardCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendForwardCooperationData", value: MsgSendForwardCooperationData.fromPartial( data ) }),
    msgUpdateDelegationRule: (data: MsgUpdateDelegationRule): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDelegationRule", value: MsgUpdateDelegationRule.fromPartial( data ) }),
    msgUpdatePath: (data: MsgUpdatePath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdatePath", value: MsgUpdatePath.fromPartial( data ) }),
    msgDeleteDelegationPolicyTarget: (data: MsgDeleteDelegationPolicyTarget): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDelegationPolicyTarget", value: MsgDeleteDelegationPolicyTarget.fromPartial( data ) }),
    msgDeleteIbcConnection: (data: MsgDeleteIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteIbcConnection", value: MsgDeleteIbcConnection.fromPartial( data ) }),
    msgUpdateCalculationTime: (data: MsgUpdateCalculationTime): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCalculationTime", value: MsgUpdateCalculationTime.fromPartial( data ) }),
    msgUpdateDelegationPath: (data: MsgUpdateDelegationPath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDelegationPath", value: MsgUpdateDelegationPath.fromPartial( data ) }),
    msgUpdateCooperationNetwork: (data: MsgUpdateCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationNetwork", value: MsgUpdateCooperationNetwork.fromPartial( data ) }),
    msgUpdateDelegationPolicy: (data: MsgUpdateDelegationPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDelegationPolicy", value: MsgUpdateDelegationPolicy.fromPartial( data ) }),
    msgDeleteDelegationConditions: (data: MsgDeleteDelegationConditions): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDelegationConditions", value: MsgDeleteDelegationConditions.fromPartial( data ) }),
    msgCreateDelegationPath: (data: MsgCreateDelegationPath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDelegationPath", value: MsgCreateDelegationPath.fromPartial( data ) }),
    msgUpdateDomainMap: (data: MsgUpdateDomainMap): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomainMap", value: MsgUpdateDomainMap.fromPartial( data ) }),
    msgUpdateDomainCooperation: (data: MsgUpdateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomainCooperation", value: MsgUpdateDomainCooperation.fromPartial( data ) }),
    msgUpdateInterDomainAclPolicy: (data: MsgUpdateInterDomainAclPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateInterDomainAclPolicy", value: MsgUpdateInterDomainAclPolicy.fromPartial( data ) }),
    msgGenerateCooperationNetwork: (data: MsgGenerateCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgGenerateCooperationNetwork", value: MsgGenerateCooperationNetwork.fromPartial( data ) }),
    msgUpdateUpdatePolicy: (data: MsgUpdateUpdatePolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateUpdatePolicy", value: MsgUpdateUpdatePolicy.fromPartial( data ) }),
    msgDeleteInterDomainDclPolicy: (data: MsgDeleteInterDomainDclPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteInterDomainDclPolicy", value: MsgDeleteInterDomainDclPolicy.fromPartial( data ) }),
    msgDeleteDelegationPolicy: (data: MsgDeleteDelegationPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDelegationPolicy", value: MsgDeleteDelegationPolicy.fromPartial( data ) }),
    msgDeleteTimeCalculation: (data: MsgDeleteTimeCalculation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteTimeCalculation", value: MsgDeleteTimeCalculation.fromPartial( data ) }),
    msgDeleteUpdatePolicy: (data: MsgDeleteUpdatePolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteUpdatePolicy", value: MsgDeleteUpdatePolicy.fromPartial( data ) }),
    msgUpdateCooperativeDomain: (data: MsgUpdateCooperativeDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperativeDomain", value: MsgUpdateCooperativeDomain.fromPartial( data ) }),
    msgCreateCalculationTime: (data: MsgCreateCalculationTime): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCalculationTime", value: MsgCreateCalculationTime.fromPartial( data ) }),
    msgDeleteCooperationData: (data: MsgDeleteCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationData", value: MsgDeleteCooperationData.fromPartial( data ) }),
    msgDeletePath: (data: MsgDeletePath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeletePath", value: MsgDeletePath.fromPartial( data ) }),
    msgSendModifyCooperationCost: (data: MsgSendModifyCooperationCost): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationCost", value: MsgSendModifyCooperationCost.fromPartial( data ) }),
    msgDeleteCooperationNetwork: (data: MsgDeleteCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationNetwork", value: MsgDeleteCooperationNetwork.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgUpdateCooperationLog: (data: MsgUpdateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationLog", value: MsgUpdateCooperationLog.fromPartial( data ) }),
    msgGeneratePeriodicalCooperationNetwork: (data: MsgGeneratePeriodicalCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgGeneratePeriodicalCooperationNetwork", value: MsgGeneratePeriodicalCooperationNetwork.fromPartial( data ) }),
    msgDeleteCooperationLog: (data: MsgDeleteCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationLog", value: MsgDeleteCooperationLog.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    msgUpdateForwardPolicy: (data: MsgUpdateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateForwardPolicy", value: MsgUpdateForwardPolicy.fromPartial( data ) }),
    msgCreateUpdatePolicy: (data: MsgCreateUpdatePolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateUpdatePolicy", value: MsgCreateUpdatePolicy.fromPartial( data ) }),
    msgDeleteAuthenticationLog: (data: MsgDeleteAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteAuthenticationLog", value: MsgDeleteAuthenticationLog.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgCreateCooperationNetworkFeatures: (data: MsgCreateCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationNetworkFeatures", value: MsgCreateCooperationNetworkFeatures.fromPartial( data ) }),
    msgDeleteInterDomainAclPolicy: (data: MsgDeleteInterDomainAclPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteInterDomainAclPolicy", value: MsgDeleteInterDomainAclPolicy.fromPartial( data ) }),
    msgUpdateCooperationNetworkFeatures: (data: MsgUpdateCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationNetworkFeatures", value: MsgUpdateCooperationNetworkFeatures.fromPartial( data ) }),
    msgCreateCooperativeDomain: (data: MsgCreateCooperativeDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperativeDomain", value: MsgCreateCooperativeDomain.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgUpdateCertificate: (data: MsgUpdateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCertificate", value: MsgUpdateCertificate.fromPartial( data ) }),
    msgDeleteDelegationPath: (data: MsgDeleteDelegationPath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDelegationPath", value: MsgDeleteDelegationPath.fromPartial( data ) }),
    msgUpdateInterDomainDclPolicy: (data: MsgUpdateInterDomainDclPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateInterDomainDclPolicy", value: MsgUpdateInterDomainDclPolicy.fromPartial( data ) }),
    msgCreateCooperationData: (data: MsgCreateCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationData", value: MsgCreateCooperationData.fromPartial( data ) }),
    msgSendExchangeCooperationData: (data: MsgSendExchangeCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendExchangeCooperationData", value: MsgSendExchangeCooperationData.fromPartial( data ) }),
    msgUpdateTimeCalculation: (data: MsgUpdateTimeCalculation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateTimeCalculation", value: MsgUpdateTimeCalculation.fromPartial( data ) }),
    msgDeleteDomainCooperation: (data: MsgDeleteDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomainCooperation", value: MsgDeleteDomainCooperation.fromPartial( data ) }),
    msgCreateDelegationPolicyTarget: (data: MsgCreateDelegationPolicyTarget): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDelegationPolicyTarget", value: MsgCreateDelegationPolicyTarget.fromPartial( data ) }),
    msgSendPublishProofList: (data: MsgSendPublishProofList): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendPublishProofList", value: MsgSendPublishProofList.fromPartial( data ) }),
    msgUpdatePublicKey: (data: MsgUpdatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdatePublicKey", value: MsgUpdatePublicKey.fromPartial( data ) }),
    msgSendAuthenticateDomain: (data: MsgSendAuthenticateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendAuthenticateDomain", value: MsgSendAuthenticateDomain.fromPartial( data ) }),
    msgDeleteDelegationLog: (data: MsgDeleteDelegationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDelegationLog", value: MsgDeleteDelegationLog.fromPartial( data ) }),
    msgCreateForwardPolicy: (data: MsgCreateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateForwardPolicy", value: MsgCreateForwardPolicy.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
