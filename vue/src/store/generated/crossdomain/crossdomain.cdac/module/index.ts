// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteForwardPolicy } from "./types/cdac/tx";
import { MsgUpdateValidity } from "./types/cdac/tx";
import { MsgUpdateForwardPolicy } from "./types/cdac/tx";
import { MsgDeletePublicKey } from "./types/cdac/tx";
import { MsgCreateValidity } from "./types/cdac/tx";
import { MsgUpdateCooperationNetworkFeatures } from "./types/cdac/tx";
import { MsgDeleteCooperationLog } from "./types/cdac/tx";
import { MsgCreateForwardPolicy } from "./types/cdac/tx";
import { MsgUpdateDomainMap } from "./types/cdac/tx";
import { MsgUpdateDomain } from "./types/cdac/tx";
import { MsgCreateCooperationData } from "./types/cdac/tx";
import { MsgDeleteIbcConnection } from "./types/cdac/tx";
import { MsgUpdateCertificate } from "./types/cdac/tx";
import { MsgUpdateCooperationData } from "./types/cdac/tx";
import { MsgUpdatePublicKey } from "./types/cdac/tx";
import { MsgUpdateAuthenticationLog } from "./types/cdac/tx";
import { MsgCreateIbcConnection } from "./types/cdac/tx";
import { MsgSendEstablishCooperation } from "./types/cdac/tx";
import { MsgCreateDomain } from "./types/cdac/tx";
import { MsgCreateDomainCooperation } from "./types/cdac/tx";
import { MsgDeleteCertificate } from "./types/cdac/tx";
import { MsgCreatePublicKey } from "./types/cdac/tx";
import { MsgCreateCertificate } from "./types/cdac/tx";
import { MsgCreateAuthenticationLog } from "./types/cdac/tx";
import { MsgDeleteDomainMap } from "./types/cdac/tx";
import { MsgDeleteDomainCooperation } from "./types/cdac/tx";
import { MsgSendEnableCooperation } from "./types/cdac/tx";
import { MsgCreateCooperationNetwork } from "./types/cdac/tx";
import { MsgCreateCooperationNetworkFeatures } from "./types/cdac/tx";
import { MsgSendModifyCooperationValidity } from "./types/cdac/tx";
import { MsgSendRevokeCooperation } from "./types/cdac/tx";
import { MsgGenerateCooperationNetwork } from "./types/cdac/tx";
import { MsgDeleteCooperationNetwork } from "./types/cdac/tx";
import { MsgUpdateIbcConnection } from "./types/cdac/tx";
import { MsgSendForwardCooperationData } from "./types/cdac/tx";
import { MsgUpdateDomainCooperation } from "./types/cdac/tx";
import { MsgCreateCooperationLog } from "./types/cdac/tx";
import { MsgSendExchangeCooperationData } from "./types/cdac/tx";
import { MsgDeleteCooperationData } from "./types/cdac/tx";
import { MsgDeleteValidity } from "./types/cdac/tx";
import { MsgDeleteCooperationNetworkFeatures } from "./types/cdac/tx";
import { MsgSendDisableCooperation } from "./types/cdac/tx";
import { MsgDeleteDomain } from "./types/cdac/tx";
import { MsgUpdateCooperationLog } from "./types/cdac/tx";
import { MsgSendModifyCooperationInterest } from "./types/cdac/tx";
import { MsgDeleteAuthenticationLog } from "./types/cdac/tx";
import { MsgSendAuthenticateDomain } from "./types/cdac/tx";
import { MsgSendModifyCooperationCost } from "./types/cdac/tx";
import { MsgUpdateCooperationNetwork } from "./types/cdac/tx";
import { MsgCreateDomainMap } from "./types/cdac/tx";


const types = [
  ["/crossdomain.cdac.MsgDeleteForwardPolicy", MsgDeleteForwardPolicy],
  ["/crossdomain.cdac.MsgUpdateValidity", MsgUpdateValidity],
  ["/crossdomain.cdac.MsgUpdateForwardPolicy", MsgUpdateForwardPolicy],
  ["/crossdomain.cdac.MsgDeletePublicKey", MsgDeletePublicKey],
  ["/crossdomain.cdac.MsgCreateValidity", MsgCreateValidity],
  ["/crossdomain.cdac.MsgUpdateCooperationNetworkFeatures", MsgUpdateCooperationNetworkFeatures],
  ["/crossdomain.cdac.MsgDeleteCooperationLog", MsgDeleteCooperationLog],
  ["/crossdomain.cdac.MsgCreateForwardPolicy", MsgCreateForwardPolicy],
  ["/crossdomain.cdac.MsgUpdateDomainMap", MsgUpdateDomainMap],
  ["/crossdomain.cdac.MsgUpdateDomain", MsgUpdateDomain],
  ["/crossdomain.cdac.MsgCreateCooperationData", MsgCreateCooperationData],
  ["/crossdomain.cdac.MsgDeleteIbcConnection", MsgDeleteIbcConnection],
  ["/crossdomain.cdac.MsgUpdateCertificate", MsgUpdateCertificate],
  ["/crossdomain.cdac.MsgUpdateCooperationData", MsgUpdateCooperationData],
  ["/crossdomain.cdac.MsgUpdatePublicKey", MsgUpdatePublicKey],
  ["/crossdomain.cdac.MsgUpdateAuthenticationLog", MsgUpdateAuthenticationLog],
  ["/crossdomain.cdac.MsgCreateIbcConnection", MsgCreateIbcConnection],
  ["/crossdomain.cdac.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  ["/crossdomain.cdac.MsgCreateDomain", MsgCreateDomain],
  ["/crossdomain.cdac.MsgCreateDomainCooperation", MsgCreateDomainCooperation],
  ["/crossdomain.cdac.MsgDeleteCertificate", MsgDeleteCertificate],
  ["/crossdomain.cdac.MsgCreatePublicKey", MsgCreatePublicKey],
  ["/crossdomain.cdac.MsgCreateCertificate", MsgCreateCertificate],
  ["/crossdomain.cdac.MsgCreateAuthenticationLog", MsgCreateAuthenticationLog],
  ["/crossdomain.cdac.MsgDeleteDomainMap", MsgDeleteDomainMap],
  ["/crossdomain.cdac.MsgDeleteDomainCooperation", MsgDeleteDomainCooperation],
  ["/crossdomain.cdac.MsgSendEnableCooperation", MsgSendEnableCooperation],
  ["/crossdomain.cdac.MsgCreateCooperationNetwork", MsgCreateCooperationNetwork],
  ["/crossdomain.cdac.MsgCreateCooperationNetworkFeatures", MsgCreateCooperationNetworkFeatures],
  ["/crossdomain.cdac.MsgSendModifyCooperationValidity", MsgSendModifyCooperationValidity],
  ["/crossdomain.cdac.MsgSendRevokeCooperation", MsgSendRevokeCooperation],
  ["/crossdomain.cdac.MsgGenerateCooperationNetwork", MsgGenerateCooperationNetwork],
  ["/crossdomain.cdac.MsgDeleteCooperationNetwork", MsgDeleteCooperationNetwork],
  ["/crossdomain.cdac.MsgUpdateIbcConnection", MsgUpdateIbcConnection],
  ["/crossdomain.cdac.MsgSendForwardCooperationData", MsgSendForwardCooperationData],
  ["/crossdomain.cdac.MsgUpdateDomainCooperation", MsgUpdateDomainCooperation],
  ["/crossdomain.cdac.MsgCreateCooperationLog", MsgCreateCooperationLog],
  ["/crossdomain.cdac.MsgSendExchangeCooperationData", MsgSendExchangeCooperationData],
  ["/crossdomain.cdac.MsgDeleteCooperationData", MsgDeleteCooperationData],
  ["/crossdomain.cdac.MsgDeleteValidity", MsgDeleteValidity],
  ["/crossdomain.cdac.MsgDeleteCooperationNetworkFeatures", MsgDeleteCooperationNetworkFeatures],
  ["/crossdomain.cdac.MsgSendDisableCooperation", MsgSendDisableCooperation],
  ["/crossdomain.cdac.MsgDeleteDomain", MsgDeleteDomain],
  ["/crossdomain.cdac.MsgUpdateCooperationLog", MsgUpdateCooperationLog],
  ["/crossdomain.cdac.MsgSendModifyCooperationInterest", MsgSendModifyCooperationInterest],
  ["/crossdomain.cdac.MsgDeleteAuthenticationLog", MsgDeleteAuthenticationLog],
  ["/crossdomain.cdac.MsgSendAuthenticateDomain", MsgSendAuthenticateDomain],
  ["/crossdomain.cdac.MsgSendModifyCooperationCost", MsgSendModifyCooperationCost],
  ["/crossdomain.cdac.MsgUpdateCooperationNetwork", MsgUpdateCooperationNetwork],
  ["/crossdomain.cdac.MsgCreateDomainMap", MsgCreateDomainMap],
  
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
    msgDeleteForwardPolicy: (data: MsgDeleteForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteForwardPolicy", value: MsgDeleteForwardPolicy.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgUpdateForwardPolicy: (data: MsgUpdateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateForwardPolicy", value: MsgUpdateForwardPolicy.fromPartial( data ) }),
    msgDeletePublicKey: (data: MsgDeletePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeletePublicKey", value: MsgDeletePublicKey.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgUpdateCooperationNetworkFeatures: (data: MsgUpdateCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationNetworkFeatures", value: MsgUpdateCooperationNetworkFeatures.fromPartial( data ) }),
    msgDeleteCooperationLog: (data: MsgDeleteCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationLog", value: MsgDeleteCooperationLog.fromPartial( data ) }),
    msgCreateForwardPolicy: (data: MsgCreateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateForwardPolicy", value: MsgCreateForwardPolicy.fromPartial( data ) }),
    msgUpdateDomainMap: (data: MsgUpdateDomainMap): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomainMap", value: MsgUpdateDomainMap.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgCreateCooperationData: (data: MsgCreateCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationData", value: MsgCreateCooperationData.fromPartial( data ) }),
    msgDeleteIbcConnection: (data: MsgDeleteIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteIbcConnection", value: MsgDeleteIbcConnection.fromPartial( data ) }),
    msgUpdateCertificate: (data: MsgUpdateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCertificate", value: MsgUpdateCertificate.fromPartial( data ) }),
    msgUpdateCooperationData: (data: MsgUpdateCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationData", value: MsgUpdateCooperationData.fromPartial( data ) }),
    msgUpdatePublicKey: (data: MsgUpdatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdatePublicKey", value: MsgUpdatePublicKey.fromPartial( data ) }),
    msgUpdateAuthenticationLog: (data: MsgUpdateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateAuthenticationLog", value: MsgUpdateAuthenticationLog.fromPartial( data ) }),
    msgCreateIbcConnection: (data: MsgCreateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateIbcConnection", value: MsgCreateIbcConnection.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    msgCreateDomainCooperation: (data: MsgCreateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomainCooperation", value: MsgCreateDomainCooperation.fromPartial( data ) }),
    msgDeleteCertificate: (data: MsgDeleteCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCertificate", value: MsgDeleteCertificate.fromPartial( data ) }),
    msgCreatePublicKey: (data: MsgCreatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreatePublicKey", value: MsgCreatePublicKey.fromPartial( data ) }),
    msgCreateCertificate: (data: MsgCreateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCertificate", value: MsgCreateCertificate.fromPartial( data ) }),
    msgCreateAuthenticationLog: (data: MsgCreateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateAuthenticationLog", value: MsgCreateAuthenticationLog.fromPartial( data ) }),
    msgDeleteDomainMap: (data: MsgDeleteDomainMap): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomainMap", value: MsgDeleteDomainMap.fromPartial( data ) }),
    msgDeleteDomainCooperation: (data: MsgDeleteDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomainCooperation", value: MsgDeleteDomainCooperation.fromPartial( data ) }),
    msgSendEnableCooperation: (data: MsgSendEnableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendEnableCooperation", value: MsgSendEnableCooperation.fromPartial( data ) }),
    msgCreateCooperationNetwork: (data: MsgCreateCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationNetwork", value: MsgCreateCooperationNetwork.fromPartial( data ) }),
    msgCreateCooperationNetworkFeatures: (data: MsgCreateCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationNetworkFeatures", value: MsgCreateCooperationNetworkFeatures.fromPartial( data ) }),
    msgSendModifyCooperationValidity: (data: MsgSendModifyCooperationValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationValidity", value: MsgSendModifyCooperationValidity.fromPartial( data ) }),
    msgSendRevokeCooperation: (data: MsgSendRevokeCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendRevokeCooperation", value: MsgSendRevokeCooperation.fromPartial( data ) }),
    msgGenerateCooperationNetwork: (data: MsgGenerateCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgGenerateCooperationNetwork", value: MsgGenerateCooperationNetwork.fromPartial( data ) }),
    msgDeleteCooperationNetwork: (data: MsgDeleteCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationNetwork", value: MsgDeleteCooperationNetwork.fromPartial( data ) }),
    msgUpdateIbcConnection: (data: MsgUpdateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateIbcConnection", value: MsgUpdateIbcConnection.fromPartial( data ) }),
    msgSendForwardCooperationData: (data: MsgSendForwardCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendForwardCooperationData", value: MsgSendForwardCooperationData.fromPartial( data ) }),
    msgUpdateDomainCooperation: (data: MsgUpdateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomainCooperation", value: MsgUpdateDomainCooperation.fromPartial( data ) }),
    msgCreateCooperationLog: (data: MsgCreateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationLog", value: MsgCreateCooperationLog.fromPartial( data ) }),
    msgSendExchangeCooperationData: (data: MsgSendExchangeCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendExchangeCooperationData", value: MsgSendExchangeCooperationData.fromPartial( data ) }),
    msgDeleteCooperationData: (data: MsgDeleteCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationData", value: MsgDeleteCooperationData.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgDeleteCooperationNetworkFeatures: (data: MsgDeleteCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationNetworkFeatures", value: MsgDeleteCooperationNetworkFeatures.fromPartial( data ) }),
    msgSendDisableCooperation: (data: MsgSendDisableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendDisableCooperation", value: MsgSendDisableCooperation.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgUpdateCooperationLog: (data: MsgUpdateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationLog", value: MsgUpdateCooperationLog.fromPartial( data ) }),
    msgSendModifyCooperationInterest: (data: MsgSendModifyCooperationInterest): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationInterest", value: MsgSendModifyCooperationInterest.fromPartial( data ) }),
    msgDeleteAuthenticationLog: (data: MsgDeleteAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteAuthenticationLog", value: MsgDeleteAuthenticationLog.fromPartial( data ) }),
    msgSendAuthenticateDomain: (data: MsgSendAuthenticateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendAuthenticateDomain", value: MsgSendAuthenticateDomain.fromPartial( data ) }),
    msgSendModifyCooperationCost: (data: MsgSendModifyCooperationCost): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationCost", value: MsgSendModifyCooperationCost.fromPartial( data ) }),
    msgUpdateCooperationNetwork: (data: MsgUpdateCooperationNetwork): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationNetwork", value: MsgUpdateCooperationNetwork.fromPartial( data ) }),
    msgCreateDomainMap: (data: MsgCreateDomainMap): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomainMap", value: MsgCreateDomainMap.fromPartial( data ) }),
    
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
