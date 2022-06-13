// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCooperationData } from "./types/cdac/tx";
import { MsgSendExchangeCooperationData } from "./types/cdac/tx";
import { MsgDeleteCalculationTime } from "./types/cdac/tx";
import { MsgDeleteIbcConnection } from "./types/cdac/tx";
import { MsgDeleteCooperationLog } from "./types/cdac/tx";
import { MsgSendAuthenticateDomain } from "./types/cdac/tx";
import { MsgDeleteForwardPolicy } from "./types/cdac/tx";
import { MsgUpdateTimeCalculation } from "./types/cdac/tx";
import { MsgDeleteUpdatePolicy } from "./types/cdac/tx";
import { MsgCreateValidity } from "./types/cdac/tx";
import { MsgUpdateCooperationNetworkFeatures } from "./types/cdac/tx";
import { MsgCreateTimeCalculation } from "./types/cdac/tx";
import { MsgDeleteCooperationNetwork } from "./types/cdac/tx";
import { MsgSendModifyCooperationCost } from "./types/cdac/tx";
import { MsgUpdateIbcConnection } from "./types/cdac/tx";
import { MsgCreateCooperationNetwork } from "./types/cdac/tx";
import { MsgCreateDomain } from "./types/cdac/tx";
import { MsgCreatePath } from "./types/cdac/tx";
import { MsgCreatePublicKey } from "./types/cdac/tx";
import { MsgUpdateCooperationNetwork } from "./types/cdac/tx";
import { MsgDeleteDomainCooperation } from "./types/cdac/tx";
import { MsgCreateCooperationNetworkFeatures } from "./types/cdac/tx";
import { MsgUpdateDomainMap } from "./types/cdac/tx";
import { MsgSendModifyCooperationValidity } from "./types/cdac/tx";
import { MsgUpdateCertificate } from "./types/cdac/tx";
import { MsgDeleteTimeCalculation } from "./types/cdac/tx";
import { MsgSendModifyCooperationInterest } from "./types/cdac/tx";
import { MsgDeleteCertificate } from "./types/cdac/tx";
import { MsgUpdateForwardPolicy } from "./types/cdac/tx";
import { MsgCreateIbcConnection } from "./types/cdac/tx";
import { MsgUpdateCooperativeDomain } from "./types/cdac/tx";
import { MsgCreateAuthenticationLog } from "./types/cdac/tx";
import { MsgDeleteCooperationNetworkFeatures } from "./types/cdac/tx";
import { MsgUpdatePath } from "./types/cdac/tx";
import { MsgUpdateUpdatePolicy } from "./types/cdac/tx";
import { MsgDeletePath } from "./types/cdac/tx";
import { MsgUpdateValidity } from "./types/cdac/tx";
import { MsgUpdateCalculationTime } from "./types/cdac/tx";
import { MsgGenerateCooperationNetwork } from "./types/cdac/tx";
import { MsgCreateCooperationData } from "./types/cdac/tx";
import { MsgSendForwardCooperationData } from "./types/cdac/tx";
import { MsgDeleteValidity } from "./types/cdac/tx";
import { MsgSendDisableCooperation } from "./types/cdac/tx";
import { MsgDeleteCooperativeDomain } from "./types/cdac/tx";
import { MsgCreateCooperativeDomain } from "./types/cdac/tx";
import { MsgCreateForwardPolicy } from "./types/cdac/tx";
import { MsgSendEstablishCooperation } from "./types/cdac/tx";
import { MsgUpdateDomainCooperation } from "./types/cdac/tx";
import { MsgUpdateAuthenticationLog } from "./types/cdac/tx";
import { MsgCreateDomainCooperation } from "./types/cdac/tx";
import { MsgSendRevokeCooperation } from "./types/cdac/tx";
import { MsgCreateUpdatePolicy } from "./types/cdac/tx";
import { MsgUpdateCooperationData } from "./types/cdac/tx";
import { MsgDeletePublicKey } from "./types/cdac/tx";
import { MsgDeleteAuthenticationLog } from "./types/cdac/tx";
import { MsgSendEnableCooperation } from "./types/cdac/tx";
import { MsgCreateCooperationLog } from "./types/cdac/tx";
import { MsgCreateDelegationPath } from "./types/cdac/tx";
import { MsgUpdateDelegationPath } from "./types/cdac/tx";
import { MsgCreateCertificate } from "./types/cdac/tx";
import { MsgUpdateDomain } from "./types/cdac/tx";
import { MsgCreateCalculationTime } from "./types/cdac/tx";
import { MsgCreateDomainMap } from "./types/cdac/tx";
import { MsgDeleteDomain } from "./types/cdac/tx";
import { MsgUpdateCooperationLog } from "./types/cdac/tx";
import { MsgDeleteDomainMap } from "./types/cdac/tx";
import { MsgUpdatePublicKey } from "./types/cdac/tx";
import { MsgDeleteDelegationPath } from "./types/cdac/tx";


const types = [
  ["/crossdomain.cdac.MsgDeleteCooperationData", MsgDeleteCooperationData],
  ["/crossdomain.cdac.MsgSendExchangeCooperationData", MsgSendExchangeCooperationData],
  ["/crossdomain.cdac.MsgDeleteCalculationTime", MsgDeleteCalculationTime],
  ["/crossdomain.cdac.MsgDeleteIbcConnection", MsgDeleteIbcConnection],
  ["/crossdomain.cdac.MsgDeleteCooperationLog", MsgDeleteCooperationLog],
  ["/crossdomain.cdac.MsgSendAuthenticateDomain", MsgSendAuthenticateDomain],
  ["/crossdomain.cdac.MsgDeleteForwardPolicy", MsgDeleteForwardPolicy],
  ["/crossdomain.cdac.MsgUpdateTimeCalculation", MsgUpdateTimeCalculation],
  ["/crossdomain.cdac.MsgDeleteUpdatePolicy", MsgDeleteUpdatePolicy],
  ["/crossdomain.cdac.MsgCreateValidity", MsgCreateValidity],
  ["/crossdomain.cdac.MsgUpdateCooperationNetworkFeatures", MsgUpdateCooperationNetworkFeatures],
  ["/crossdomain.cdac.MsgCreateTimeCalculation", MsgCreateTimeCalculation],
  ["/crossdomain.cdac.MsgDeleteCooperationNetwork", MsgDeleteCooperationNetwork],
  ["/crossdomain.cdac.MsgSendModifyCooperationCost", MsgSendModifyCooperationCost],
  ["/crossdomain.cdac.MsgUpdateIbcConnection", MsgUpdateIbcConnection],
  ["/crossdomain.cdac.MsgCreateCooperationNetwork", MsgCreateCooperationNetwork],
  ["/crossdomain.cdac.MsgCreateDomain", MsgCreateDomain],
  ["/crossdomain.cdac.MsgCreatePath", MsgCreatePath],
  ["/crossdomain.cdac.MsgCreatePublicKey", MsgCreatePublicKey],
  ["/crossdomain.cdac.MsgUpdateCooperationNetwork", MsgUpdateCooperationNetwork],
  ["/crossdomain.cdac.MsgDeleteDomainCooperation", MsgDeleteDomainCooperation],
  ["/crossdomain.cdac.MsgCreateCooperationNetworkFeatures", MsgCreateCooperationNetworkFeatures],
  ["/crossdomain.cdac.MsgUpdateDomainMap", MsgUpdateDomainMap],
  ["/crossdomain.cdac.MsgSendModifyCooperationValidity", MsgSendModifyCooperationValidity],
  ["/crossdomain.cdac.MsgUpdateCertificate", MsgUpdateCertificate],
  ["/crossdomain.cdac.MsgDeleteTimeCalculation", MsgDeleteTimeCalculation],
  ["/crossdomain.cdac.MsgSendModifyCooperationInterest", MsgSendModifyCooperationInterest],
  ["/crossdomain.cdac.MsgDeleteCertificate", MsgDeleteCertificate],
  ["/crossdomain.cdac.MsgUpdateForwardPolicy", MsgUpdateForwardPolicy],
  ["/crossdomain.cdac.MsgCreateIbcConnection", MsgCreateIbcConnection],
  ["/crossdomain.cdac.MsgUpdateCooperativeDomain", MsgUpdateCooperativeDomain],
  ["/crossdomain.cdac.MsgCreateAuthenticationLog", MsgCreateAuthenticationLog],
  ["/crossdomain.cdac.MsgDeleteCooperationNetworkFeatures", MsgDeleteCooperationNetworkFeatures],
  ["/crossdomain.cdac.MsgUpdatePath", MsgUpdatePath],
  ["/crossdomain.cdac.MsgUpdateUpdatePolicy", MsgUpdateUpdatePolicy],
  ["/crossdomain.cdac.MsgDeletePath", MsgDeletePath],
  ["/crossdomain.cdac.MsgUpdateValidity", MsgUpdateValidity],
  ["/crossdomain.cdac.MsgUpdateCalculationTime", MsgUpdateCalculationTime],
  ["/crossdomain.cdac.MsgGenerateCooperationNetwork", MsgGenerateCooperationNetwork],
  ["/crossdomain.cdac.MsgCreateCooperationData", MsgCreateCooperationData],
  ["/crossdomain.cdac.MsgSendForwardCooperationData", MsgSendForwardCooperationData],
  ["/crossdomain.cdac.MsgDeleteValidity", MsgDeleteValidity],
  ["/crossdomain.cdac.MsgSendDisableCooperation", MsgSendDisableCooperation],
  ["/crossdomain.cdac.MsgDeleteCooperativeDomain", MsgDeleteCooperativeDomain],
  ["/crossdomain.cdac.MsgCreateCooperativeDomain", MsgCreateCooperativeDomain],
  ["/crossdomain.cdac.MsgCreateForwardPolicy", MsgCreateForwardPolicy],
  ["/crossdomain.cdac.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  ["/crossdomain.cdac.MsgUpdateDomainCooperation", MsgUpdateDomainCooperation],
  ["/crossdomain.cdac.MsgUpdateAuthenticationLog", MsgUpdateAuthenticationLog],
  ["/crossdomain.cdac.MsgCreateDomainCooperation", MsgCreateDomainCooperation],
  ["/crossdomain.cdac.MsgSendRevokeCooperation", MsgSendRevokeCooperation],
  ["/crossdomain.cdac.MsgCreateUpdatePolicy", MsgCreateUpdatePolicy],
  ["/crossdomain.cdac.MsgUpdateCooperationData", MsgUpdateCooperationData],
  ["/crossdomain.cdac.MsgDeletePublicKey", MsgDeletePublicKey],
  ["/crossdomain.cdac.MsgDeleteAuthenticationLog", MsgDeleteAuthenticationLog],
  ["/crossdomain.cdac.MsgSendEnableCooperation", MsgSendEnableCooperation],
  ["/crossdomain.cdac.MsgCreateCooperationLog", MsgCreateCooperationLog],
  ["/crossdomain.cdac.MsgCreateDelegationPath", MsgCreateDelegationPath],
  ["/crossdomain.cdac.MsgUpdateDelegationPath", MsgUpdateDelegationPath],
  ["/crossdomain.cdac.MsgCreateCertificate", MsgCreateCertificate],
  ["/crossdomain.cdac.MsgUpdateDomain", MsgUpdateDomain],
  ["/crossdomain.cdac.MsgCreateCalculationTime", MsgCreateCalculationTime],
  ["/crossdomain.cdac.MsgCreateDomainMap", MsgCreateDomainMap],
  ["/crossdomain.cdac.MsgDeleteDomain", MsgDeleteDomain],
  ["/crossdomain.cdac.MsgUpdateCooperationLog", MsgUpdateCooperationLog],
  ["/crossdomain.cdac.MsgDeleteDomainMap", MsgDeleteDomainMap],
  ["/crossdomain.cdac.MsgUpdatePublicKey", MsgUpdatePublicKey],
  ["/crossdomain.cdac.MsgDeleteDelegationPath", MsgDeleteDelegationPath],
  
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
    msgDeleteCooperationData: (data: MsgDeleteCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationData", value: MsgDeleteCooperationData.fromPartial( data ) }),
    msgSendExchangeCooperationData: (data: MsgSendExchangeCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendExchangeCooperationData", value: MsgSendExchangeCooperationData.fromPartial( data ) }),
    msgDeleteCalculationTime: (data: MsgDeleteCalculationTime): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCalculationTime", value: MsgDeleteCalculationTime.fromPartial( data ) }),
    msgDeleteIbcConnection: (data: MsgDeleteIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteIbcConnection", value: MsgDeleteIbcConnection.fromPartial( data ) }),
    msgDeleteCooperationLog: (data: MsgDeleteCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationLog", value: MsgDeleteCooperationLog.fromPartial( data ) }),
    msgSendAuthenticateDomain: (data: MsgSendAuthenticateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendAuthenticateDomain", value: MsgSendAuthenticateDomain.fromPartial( data ) }),
    msgDeleteForwardPolicy: (data: MsgDeleteForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteForwardPolicy", value: MsgDeleteForwardPolicy.fromPartial( data ) }),
    msgUpdateTimeCalculation: (data: MsgUpdateTimeCalculation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateTimeCalculation", value: MsgUpdateTimeCalculation.fromPartial( data ) }),
    msgDeleteUpdatePolicy: (data: MsgDeleteUpdatePolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteUpdatePolicy", value: MsgDeleteUpdatePolicy.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgUpdateCooperationNetworkFeatures: (data: MsgUpdateCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationNetworkFeatures", value: MsgUpdateCooperationNetworkFeatures.fromPartial( data ) }),
    msgCreateTimeCalculation: (data: MsgCreateTimeCalculation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateTimeCalculation", value: MsgCreateTimeCalculation.fromPartial( data ) }),
    msgDeleteCooperationNetwork: (data: MsgDeleteCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationNetwork", value: MsgDeleteCooperationNetwork.fromPartial( data ) }),
    msgSendModifyCooperationCost: (data: MsgSendModifyCooperationCost): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationCost", value: MsgSendModifyCooperationCost.fromPartial( data ) }),
    msgUpdateIbcConnection: (data: MsgUpdateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateIbcConnection", value: MsgUpdateIbcConnection.fromPartial( data ) }),
    msgCreateCooperationNetwork: (data: MsgCreateCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationNetwork", value: MsgCreateCooperationNetwork.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    msgCreatePath: (data: MsgCreatePath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreatePath", value: MsgCreatePath.fromPartial( data ) }),
    msgCreatePublicKey: (data: MsgCreatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreatePublicKey", value: MsgCreatePublicKey.fromPartial( data ) }),
    msgUpdateCooperationNetwork: (data: MsgUpdateCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationNetwork", value: MsgUpdateCooperationNetwork.fromPartial( data ) }),
    msgDeleteDomainCooperation: (data: MsgDeleteDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomainCooperation", value: MsgDeleteDomainCooperation.fromPartial( data ) }),
    msgCreateCooperationNetworkFeatures: (data: MsgCreateCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationNetworkFeatures", value: MsgCreateCooperationNetworkFeatures.fromPartial( data ) }),
    msgUpdateDomainMap: (data: MsgUpdateDomainMap): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomainMap", value: MsgUpdateDomainMap.fromPartial( data ) }),
    msgSendModifyCooperationValidity: (data: MsgSendModifyCooperationValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationValidity", value: MsgSendModifyCooperationValidity.fromPartial( data ) }),
    msgUpdateCertificate: (data: MsgUpdateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCertificate", value: MsgUpdateCertificate.fromPartial( data ) }),
    msgDeleteTimeCalculation: (data: MsgDeleteTimeCalculation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteTimeCalculation", value: MsgDeleteTimeCalculation.fromPartial( data ) }),
    msgSendModifyCooperationInterest: (data: MsgSendModifyCooperationInterest): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationInterest", value: MsgSendModifyCooperationInterest.fromPartial( data ) }),
    msgDeleteCertificate: (data: MsgDeleteCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCertificate", value: MsgDeleteCertificate.fromPartial( data ) }),
    msgUpdateForwardPolicy: (data: MsgUpdateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateForwardPolicy", value: MsgUpdateForwardPolicy.fromPartial( data ) }),
    msgCreateIbcConnection: (data: MsgCreateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateIbcConnection", value: MsgCreateIbcConnection.fromPartial( data ) }),
    msgUpdateCooperativeDomain: (data: MsgUpdateCooperativeDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperativeDomain", value: MsgUpdateCooperativeDomain.fromPartial( data ) }),
    msgCreateAuthenticationLog: (data: MsgCreateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateAuthenticationLog", value: MsgCreateAuthenticationLog.fromPartial( data ) }),
    msgDeleteCooperationNetworkFeatures: (data: MsgDeleteCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationNetworkFeatures", value: MsgDeleteCooperationNetworkFeatures.fromPartial( data ) }),
    msgUpdatePath: (data: MsgUpdatePath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdatePath", value: MsgUpdatePath.fromPartial( data ) }),
    msgUpdateUpdatePolicy: (data: MsgUpdateUpdatePolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateUpdatePolicy", value: MsgUpdateUpdatePolicy.fromPartial( data ) }),
    msgDeletePath: (data: MsgDeletePath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeletePath", value: MsgDeletePath.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgUpdateCalculationTime: (data: MsgUpdateCalculationTime): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCalculationTime", value: MsgUpdateCalculationTime.fromPartial( data ) }),
    msgGenerateCooperationNetwork: (data: MsgGenerateCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgGenerateCooperationNetwork", value: MsgGenerateCooperationNetwork.fromPartial( data ) }),
    msgCreateCooperationData: (data: MsgCreateCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationData", value: MsgCreateCooperationData.fromPartial( data ) }),
    msgSendForwardCooperationData: (data: MsgSendForwardCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendForwardCooperationData", value: MsgSendForwardCooperationData.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgSendDisableCooperation: (data: MsgSendDisableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendDisableCooperation", value: MsgSendDisableCooperation.fromPartial( data ) }),
    msgDeleteCooperativeDomain: (data: MsgDeleteCooperativeDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperativeDomain", value: MsgDeleteCooperativeDomain.fromPartial( data ) }),
    msgCreateCooperativeDomain: (data: MsgCreateCooperativeDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperativeDomain", value: MsgCreateCooperativeDomain.fromPartial( data ) }),
    msgCreateForwardPolicy: (data: MsgCreateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateForwardPolicy", value: MsgCreateForwardPolicy.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    msgUpdateDomainCooperation: (data: MsgUpdateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomainCooperation", value: MsgUpdateDomainCooperation.fromPartial( data ) }),
    msgUpdateAuthenticationLog: (data: MsgUpdateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateAuthenticationLog", value: MsgUpdateAuthenticationLog.fromPartial( data ) }),
    msgCreateDomainCooperation: (data: MsgCreateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomainCooperation", value: MsgCreateDomainCooperation.fromPartial( data ) }),
    msgSendRevokeCooperation: (data: MsgSendRevokeCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendRevokeCooperation", value: MsgSendRevokeCooperation.fromPartial( data ) }),
    msgCreateUpdatePolicy: (data: MsgCreateUpdatePolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateUpdatePolicy", value: MsgCreateUpdatePolicy.fromPartial( data ) }),
    msgUpdateCooperationData: (data: MsgUpdateCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationData", value: MsgUpdateCooperationData.fromPartial( data ) }),
    msgDeletePublicKey: (data: MsgDeletePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeletePublicKey", value: MsgDeletePublicKey.fromPartial( data ) }),
    msgDeleteAuthenticationLog: (data: MsgDeleteAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteAuthenticationLog", value: MsgDeleteAuthenticationLog.fromPartial( data ) }),
    msgSendEnableCooperation: (data: MsgSendEnableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendEnableCooperation", value: MsgSendEnableCooperation.fromPartial( data ) }),
    msgCreateCooperationLog: (data: MsgCreateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationLog", value: MsgCreateCooperationLog.fromPartial( data ) }),
    msgCreateDelegationPath: (data: MsgCreateDelegationPath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDelegationPath", value: MsgCreateDelegationPath.fromPartial( data ) }),
    msgUpdateDelegationPath: (data: MsgUpdateDelegationPath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDelegationPath", value: MsgUpdateDelegationPath.fromPartial( data ) }),
    msgCreateCertificate: (data: MsgCreateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCertificate", value: MsgCreateCertificate.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgCreateCalculationTime: (data: MsgCreateCalculationTime): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCalculationTime", value: MsgCreateCalculationTime.fromPartial( data ) }),
    msgCreateDomainMap: (data: MsgCreateDomainMap): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomainMap", value: MsgCreateDomainMap.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgUpdateCooperationLog: (data: MsgUpdateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationLog", value: MsgUpdateCooperationLog.fromPartial( data ) }),
    msgDeleteDomainMap: (data: MsgDeleteDomainMap): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomainMap", value: MsgDeleteDomainMap.fromPartial( data ) }),
    msgUpdatePublicKey: (data: MsgUpdatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdatePublicKey", value: MsgUpdatePublicKey.fromPartial( data ) }),
    msgDeleteDelegationPath: (data: MsgDeleteDelegationPath): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDelegationPath", value: MsgDeleteDelegationPath.fromPartial( data ) }),
    
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
