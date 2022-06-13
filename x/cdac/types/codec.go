package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreatePublicKey{}, "cdac/CreatePublicKey", nil)
	cdc.RegisterConcrete(&MsgUpdatePublicKey{}, "cdac/UpdatePublicKey", nil)
	cdc.RegisterConcrete(&MsgDeletePublicKey{}, "cdac/DeletePublicKey", nil)
	cdc.RegisterConcrete(&MsgCreateValidity{}, "cdac/CreateValidity", nil)
	cdc.RegisterConcrete(&MsgUpdateValidity{}, "cdac/UpdateValidity", nil)
	cdc.RegisterConcrete(&MsgDeleteValidity{}, "cdac/DeleteValidity", nil)
	cdc.RegisterConcrete(&MsgCreateCertificate{}, "cdac/CreateCertificate", nil)
	cdc.RegisterConcrete(&MsgUpdateCertificate{}, "cdac/UpdateCertificate", nil)
	cdc.RegisterConcrete(&MsgDeleteCertificate{}, "cdac/DeleteCertificate", nil)
	cdc.RegisterConcrete(&MsgCreateIbcConnection{}, "cdac/CreateIbcConnection", nil)
	cdc.RegisterConcrete(&MsgUpdateIbcConnection{}, "cdac/UpdateIbcConnection", nil)
	cdc.RegisterConcrete(&MsgDeleteIbcConnection{}, "cdac/DeleteIbcConnection", nil)
	cdc.RegisterConcrete(&MsgCreateDomain{}, "cdac/CreateDomain", nil)
	cdc.RegisterConcrete(&MsgUpdateDomain{}, "cdac/UpdateDomain", nil)
	cdc.RegisterConcrete(&MsgDeleteDomain{}, "cdac/DeleteDomain", nil)
	cdc.RegisterConcrete(&MsgCreateAuthenticationLog{}, "cdac/CreateAuthenticationLog", nil)
	cdc.RegisterConcrete(&MsgUpdateAuthenticationLog{}, "cdac/UpdateAuthenticationLog", nil)
	cdc.RegisterConcrete(&MsgDeleteAuthenticationLog{}, "cdac/DeleteAuthenticationLog", nil)
	cdc.RegisterConcrete(&MsgSendAuthenticateDomain{}, "cdac/SendAuthenticateDomain", nil)
	cdc.RegisterConcrete(&MsgCreateDomainCooperation{}, "cdac/CreateDomainCooperation", nil)
	cdc.RegisterConcrete(&MsgUpdateDomainCooperation{}, "cdac/UpdateDomainCooperation", nil)
	cdc.RegisterConcrete(&MsgDeleteDomainCooperation{}, "cdac/DeleteDomainCooperation", nil)
	cdc.RegisterConcrete(&MsgCreateCooperationLog{}, "cdac/CreateCooperationLog", nil)
	cdc.RegisterConcrete(&MsgUpdateCooperationLog{}, "cdac/UpdateCooperationLog", nil)
	cdc.RegisterConcrete(&MsgDeleteCooperationLog{}, "cdac/DeleteCooperationLog", nil)
	cdc.RegisterConcrete(&MsgSendEstablishCooperation{}, "cdac/SendEstablishCooperation", nil)
	cdc.RegisterConcrete(&MsgSendForwardCooperationData{}, "cdac/SendForwardCooperationData", nil)
	cdc.RegisterConcrete(&MsgCreateForwardPolicy{}, "cdac/CreateForwardPolicy", nil)
	cdc.RegisterConcrete(&MsgUpdateForwardPolicy{}, "cdac/UpdateForwardPolicy", nil)
	cdc.RegisterConcrete(&MsgDeleteForwardPolicy{}, "cdac/DeleteForwardPolicy", nil)
	cdc.RegisterConcrete(&MsgSendExchangeCooperationData{}, "cdac/SendExchangeCooperationData", nil)
	cdc.RegisterConcrete(&MsgSendModifyCooperationCost{}, "cdac/SendModifyCooperationCost", nil)
	cdc.RegisterConcrete(&MsgSendDisableCooperation{}, "cdac/SendDisableCooperation", nil)
	cdc.RegisterConcrete(&MsgSendEnableCooperation{}, "cdac/SendEnableCooperation", nil)
	cdc.RegisterConcrete(&MsgSendModifyCooperationValidity{}, "cdac/SendModifyCooperationValidity", nil)
	cdc.RegisterConcrete(&MsgSendModifyCooperationInterest{}, "cdac/SendModifyCooperationInterest", nil)
	cdc.RegisterConcrete(&MsgSendRevokeCooperation{}, "cdac/SendRevokeCooperation", nil)
	cdc.RegisterConcrete(&MsgCreateDomainMap{}, "cdac/CreateDomainMap", nil)
	cdc.RegisterConcrete(&MsgUpdateDomainMap{}, "cdac/UpdateDomainMap", nil)
	cdc.RegisterConcrete(&MsgDeleteDomainMap{}, "cdac/DeleteDomainMap", nil)
	cdc.RegisterConcrete(&MsgCreateCooperationNetworkFeatures{}, "cdac/CreateCooperationNetworkFeatures", nil)
	cdc.RegisterConcrete(&MsgUpdateCooperationNetworkFeatures{}, "cdac/UpdateCooperationNetworkFeatures", nil)
	cdc.RegisterConcrete(&MsgDeleteCooperationNetworkFeatures{}, "cdac/DeleteCooperationNetworkFeatures", nil)
	cdc.RegisterConcrete(&MsgCreateCooperationData{}, "cdac/CreateCooperationData", nil)
	cdc.RegisterConcrete(&MsgUpdateCooperationData{}, "cdac/UpdateCooperationData", nil)
	cdc.RegisterConcrete(&MsgDeleteCooperationData{}, "cdac/DeleteCooperationData", nil)
	cdc.RegisterConcrete(&MsgCreateCooperationNetwork{}, "cdac/CreateCooperationNetwork", nil)
	cdc.RegisterConcrete(&MsgUpdateCooperationNetwork{}, "cdac/UpdateCooperationNetwork", nil)
	cdc.RegisterConcrete(&MsgDeleteCooperationNetwork{}, "cdac/DeleteCooperationNetwork", nil)
	cdc.RegisterConcrete(&MsgGenerateCooperationNetwork{}, "cdac/GenerateCooperationNetwork", nil)
	cdc.RegisterConcrete(&MsgCreateUpdatePolicy{}, "cdac/CreateUpdatePolicy", nil)
	cdc.RegisterConcrete(&MsgUpdateUpdatePolicy{}, "cdac/UpdateUpdatePolicy", nil)
	cdc.RegisterConcrete(&MsgDeleteUpdatePolicy{}, "cdac/DeleteUpdatePolicy", nil)
	cdc.RegisterConcrete(&MsgCreateCooperativeDomain{}, "cdac/CreateCooperativeDomain", nil)
	cdc.RegisterConcrete(&MsgUpdateCooperativeDomain{}, "cdac/UpdateCooperativeDomain", nil)
	cdc.RegisterConcrete(&MsgDeleteCooperativeDomain{}, "cdac/DeleteCooperativeDomain", nil)
	cdc.RegisterConcrete(&MsgCreateDelegationPath{}, "cdac/CreateDelegationPath", nil)
	cdc.RegisterConcrete(&MsgUpdateDelegationPath{}, "cdac/UpdateDelegationPath", nil)
	cdc.RegisterConcrete(&MsgDeleteDelegationPath{}, "cdac/DeleteDelegationPath", nil)
	cdc.RegisterConcrete(&MsgCreatePath{}, "cdac/CreatePath", nil)
	cdc.RegisterConcrete(&MsgUpdatePath{}, "cdac/UpdatePath", nil)
	cdc.RegisterConcrete(&MsgDeletePath{}, "cdac/DeletePath", nil)
	cdc.RegisterConcrete(&MsgCreateTimeCalculation{}, "cdac/CreateTimeCalculation", nil)
	cdc.RegisterConcrete(&MsgUpdateTimeCalculation{}, "cdac/UpdateTimeCalculation", nil)
	cdc.RegisterConcrete(&MsgDeleteTimeCalculation{}, "cdac/DeleteTimeCalculation", nil)
	cdc.RegisterConcrete(&MsgCreateCalculationTime{}, "cdac/CreateCalculationTime", nil)
	cdc.RegisterConcrete(&MsgUpdateCalculationTime{}, "cdac/UpdateCalculationTime", nil)
	cdc.RegisterConcrete(&MsgDeleteCalculationTime{}, "cdac/DeleteCalculationTime", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePublicKey{},
		&MsgUpdatePublicKey{},
		&MsgDeletePublicKey{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateValidity{},
		&MsgUpdateValidity{},
		&MsgDeleteValidity{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCertificate{},
		&MsgUpdateCertificate{},
		&MsgDeleteCertificate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateIbcConnection{},
		&MsgUpdateIbcConnection{},
		&MsgDeleteIbcConnection{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDomain{},
		&MsgUpdateDomain{},
		&MsgDeleteDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAuthenticationLog{},
		&MsgUpdateAuthenticationLog{},
		&MsgDeleteAuthenticationLog{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendAuthenticateDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDomainCooperation{},
		&MsgUpdateDomainCooperation{},
		&MsgDeleteDomainCooperation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCooperationLog{},
		&MsgUpdateCooperationLog{},
		&MsgDeleteCooperationLog{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendEstablishCooperation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendForwardCooperationData{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateForwardPolicy{},
		&MsgUpdateForwardPolicy{},
		&MsgDeleteForwardPolicy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendExchangeCooperationData{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendModifyCooperationCost{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendDisableCooperation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendEnableCooperation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendModifyCooperationValidity{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendModifyCooperationInterest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendRevokeCooperation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDomainMap{},
		&MsgUpdateDomainMap{},
		&MsgDeleteDomainMap{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCooperationNetworkFeatures{},
		&MsgUpdateCooperationNetworkFeatures{},
		&MsgDeleteCooperationNetworkFeatures{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCooperationData{},
		&MsgUpdateCooperationData{},
		&MsgDeleteCooperationData{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCooperationNetwork{},
		&MsgUpdateCooperationNetwork{},
		&MsgDeleteCooperationNetwork{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgGenerateCooperationNetwork{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateUpdatePolicy{},
		&MsgUpdateUpdatePolicy{},
		&MsgDeleteUpdatePolicy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCooperativeDomain{},
		&MsgUpdateCooperativeDomain{},
		&MsgDeleteCooperativeDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDelegationPath{},
		&MsgUpdateDelegationPath{},
		&MsgDeleteDelegationPath{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePath{},
		&MsgUpdatePath{},
		&MsgDeletePath{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTimeCalculation{},
		&MsgUpdateTimeCalculation{},
		&MsgDeleteTimeCalculation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCalculationTime{},
		&MsgUpdateCalculationTime{},
		&MsgDeleteCalculationTime{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
