// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDomainCooperation } from "./types/cdac/tx";
import { MsgUpdateIbcConnection } from "./types/cdac/tx";
import { MsgDeleteCertificate } from "./types/cdac/tx";
import { MsgCreateCooperationLog } from "./types/cdac/tx";
import { MsgSendForwardCooperationData } from "./types/cdac/tx";
import { MsgDeleteDomain } from "./types/cdac/tx";
import { MsgDeleteCooperationLog } from "./types/cdac/tx";
import { MsgCreateValidity } from "./types/cdac/tx";
import { MsgDeleteIbcConnection } from "./types/cdac/tx";
import { MsgUpdatePublicKey } from "./types/cdac/tx";
import { MsgCreateAuthenticationLog } from "./types/cdac/tx";
import { MsgSendEnableCooperation } from "./types/cdac/tx";
import { MsgDeleteDomainCooperation } from "./types/cdac/tx";
import { MsgSendEstablishCooperation } from "./types/cdac/tx";
import { MsgUpdateForwardPolicy } from "./types/cdac/tx";
import { MsgSendModifyCooperationCost } from "./types/cdac/tx";
import { MsgCreateForwardPolicy } from "./types/cdac/tx";
import { MsgDeleteAuthenticationLog } from "./types/cdac/tx";
import { MsgUpdateCertificate } from "./types/cdac/tx";
import { MsgCreateIbcConnection } from "./types/cdac/tx";
import { MsgSendAuthenticateDomain } from "./types/cdac/tx";
import { MsgUpdateDomain } from "./types/cdac/tx";
import { MsgCreatePublicKey } from "./types/cdac/tx";
import { MsgCreateCertificate } from "./types/cdac/tx";
import { MsgUpdateDomainCooperation } from "./types/cdac/tx";
import { MsgDeletePublicKey } from "./types/cdac/tx";
import { MsgDeleteValidity } from "./types/cdac/tx";
import { MsgCreateDomain } from "./types/cdac/tx";
import { MsgUpdateCooperationLog } from "./types/cdac/tx";
import { MsgSendDisableCooperation } from "./types/cdac/tx";
import { MsgUpdateAuthenticationLog } from "./types/cdac/tx";
import { MsgUpdateValidity } from "./types/cdac/tx";
import { MsgDeleteForwardPolicy } from "./types/cdac/tx";
import { MsgSendExchangeCooperationData } from "./types/cdac/tx";


const types = [
  ["/crossdomain.cdac.MsgCreateDomainCooperation", MsgCreateDomainCooperation],
  ["/crossdomain.cdac.MsgUpdateIbcConnection", MsgUpdateIbcConnection],
  ["/crossdomain.cdac.MsgDeleteCertificate", MsgDeleteCertificate],
  ["/crossdomain.cdac.MsgCreateCooperationLog", MsgCreateCooperationLog],
  ["/crossdomain.cdac.MsgSendForwardCooperationData", MsgSendForwardCooperationData],
  ["/crossdomain.cdac.MsgDeleteDomain", MsgDeleteDomain],
  ["/crossdomain.cdac.MsgDeleteCooperationLog", MsgDeleteCooperationLog],
  ["/crossdomain.cdac.MsgCreateValidity", MsgCreateValidity],
  ["/crossdomain.cdac.MsgDeleteIbcConnection", MsgDeleteIbcConnection],
  ["/crossdomain.cdac.MsgUpdatePublicKey", MsgUpdatePublicKey],
  ["/crossdomain.cdac.MsgCreateAuthenticationLog", MsgCreateAuthenticationLog],
  ["/crossdomain.cdac.MsgSendEnableCooperation", MsgSendEnableCooperation],
  ["/crossdomain.cdac.MsgDeleteDomainCooperation", MsgDeleteDomainCooperation],
  ["/crossdomain.cdac.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  ["/crossdomain.cdac.MsgUpdateForwardPolicy", MsgUpdateForwardPolicy],
  ["/crossdomain.cdac.MsgSendModifyCooperationCost", MsgSendModifyCooperationCost],
  ["/crossdomain.cdac.MsgCreateForwardPolicy", MsgCreateForwardPolicy],
  ["/crossdomain.cdac.MsgDeleteAuthenticationLog", MsgDeleteAuthenticationLog],
  ["/crossdomain.cdac.MsgUpdateCertificate", MsgUpdateCertificate],
  ["/crossdomain.cdac.MsgCreateIbcConnection", MsgCreateIbcConnection],
  ["/crossdomain.cdac.MsgSendAuthenticateDomain", MsgSendAuthenticateDomain],
  ["/crossdomain.cdac.MsgUpdateDomain", MsgUpdateDomain],
  ["/crossdomain.cdac.MsgCreatePublicKey", MsgCreatePublicKey],
  ["/crossdomain.cdac.MsgCreateCertificate", MsgCreateCertificate],
  ["/crossdomain.cdac.MsgUpdateDomainCooperation", MsgUpdateDomainCooperation],
  ["/crossdomain.cdac.MsgDeletePublicKey", MsgDeletePublicKey],
  ["/crossdomain.cdac.MsgDeleteValidity", MsgDeleteValidity],
  ["/crossdomain.cdac.MsgCreateDomain", MsgCreateDomain],
  ["/crossdomain.cdac.MsgUpdateCooperationLog", MsgUpdateCooperationLog],
  ["/crossdomain.cdac.MsgSendDisableCooperation", MsgSendDisableCooperation],
  ["/crossdomain.cdac.MsgUpdateAuthenticationLog", MsgUpdateAuthenticationLog],
  ["/crossdomain.cdac.MsgUpdateValidity", MsgUpdateValidity],
  ["/crossdomain.cdac.MsgDeleteForwardPolicy", MsgDeleteForwardPolicy],
  ["/crossdomain.cdac.MsgSendExchangeCooperationData", MsgSendExchangeCooperationData],
  
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
    msgUpdateIbcConnection: (data: MsgUpdateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateIbcConnection", value: MsgUpdateIbcConnection.fromPartial( data ) }),
    msgDeleteCertificate: (data: MsgDeleteCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCertificate", value: MsgDeleteCertificate.fromPartial( data ) }),
    msgCreateCooperationLog: (data: MsgCreateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCooperationLog", value: MsgCreateCooperationLog.fromPartial( data ) }),
    msgSendForwardCooperationData: (data: MsgSendForwardCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendForwardCooperationData", value: MsgSendForwardCooperationData.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgDeleteCooperationLog: (data: MsgDeleteCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteCooperationLog", value: MsgDeleteCooperationLog.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgDeleteIbcConnection: (data: MsgDeleteIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteIbcConnection", value: MsgDeleteIbcConnection.fromPartial( data ) }),
    msgUpdatePublicKey: (data: MsgUpdatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdatePublicKey", value: MsgUpdatePublicKey.fromPartial( data ) }),
    msgCreateAuthenticationLog: (data: MsgCreateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateAuthenticationLog", value: MsgCreateAuthenticationLog.fromPartial( data ) }),
    msgSendEnableCooperation: (data: MsgSendEnableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendEnableCooperation", value: MsgSendEnableCooperation.fromPartial( data ) }),
    msgDeleteDomainCooperation: (data: MsgDeleteDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteDomainCooperation", value: MsgDeleteDomainCooperation.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    msgUpdateForwardPolicy: (data: MsgUpdateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateForwardPolicy", value: MsgUpdateForwardPolicy.fromPartial( data ) }),
    msgSendModifyCooperationCost: (data: MsgSendModifyCooperationCost): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendModifyCooperationCost", value: MsgSendModifyCooperationCost.fromPartial( data ) }),
    msgCreateForwardPolicy: (data: MsgCreateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateForwardPolicy", value: MsgCreateForwardPolicy.fromPartial( data ) }),
    msgDeleteAuthenticationLog: (data: MsgDeleteAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteAuthenticationLog", value: MsgDeleteAuthenticationLog.fromPartial( data ) }),
    msgUpdateCertificate: (data: MsgUpdateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCertificate", value: MsgUpdateCertificate.fromPartial( data ) }),
    msgCreateIbcConnection: (data: MsgCreateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateIbcConnection", value: MsgCreateIbcConnection.fromPartial( data ) }),
    msgSendAuthenticateDomain: (data: MsgSendAuthenticateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendAuthenticateDomain", value: MsgSendAuthenticateDomain.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgCreatePublicKey: (data: MsgCreatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreatePublicKey", value: MsgCreatePublicKey.fromPartial( data ) }),
    msgCreateCertificate: (data: MsgCreateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateCertificate", value: MsgCreateCertificate.fromPartial( data ) }),
    msgUpdateDomainCooperation: (data: MsgUpdateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateDomainCooperation", value: MsgUpdateDomainCooperation.fromPartial( data ) }),
    msgDeletePublicKey: (data: MsgDeletePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeletePublicKey", value: MsgDeletePublicKey.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    msgUpdateCooperationLog: (data: MsgUpdateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateCooperationLog", value: MsgUpdateCooperationLog.fromPartial( data ) }),
    msgSendDisableCooperation: (data: MsgSendDisableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendDisableCooperation", value: MsgSendDisableCooperation.fromPartial( data ) }),
    msgUpdateAuthenticationLog: (data: MsgUpdateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateAuthenticationLog", value: MsgUpdateAuthenticationLog.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgDeleteForwardPolicy: (data: MsgDeleteForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgDeleteForwardPolicy", value: MsgDeleteForwardPolicy.fromPartial( data ) }),
    msgSendExchangeCooperationData: (data: MsgSendExchangeCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdac.MsgSendExchangeCooperationData", value: MsgSendExchangeCooperationData.fromPartial( data ) }),
    
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
