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
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
