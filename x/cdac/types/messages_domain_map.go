package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDomainMap = "create_domain_map"
	TypeMsgUpdateDomainMap = "update_domain_map"
	TypeMsgDeleteDomainMap = "delete_domain_map"
)

var _ sdk.Msg = &MsgCreateDomainMap{}

func NewMsgCreateDomainMap(
	creator string,
	domainIndex string,
	cooperativeDomainList []*CooperativeDomain,

) *MsgCreateDomainMap {
	return &MsgCreateDomainMap{
		Creator:               creator,
		DomainIndex:           domainIndex,
		CooperativeDomainList: cooperativeDomainList,
	}
}

func (msg *MsgCreateDomainMap) Route() string {
	return RouterKey
}

func (msg *MsgCreateDomainMap) Type() string {
	return TypeMsgCreateDomainMap
}

func (msg *MsgCreateDomainMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDomainMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDomainMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDomainMap{}

func NewMsgUpdateDomainMap(
	creator string,
	domainIndex string,
	cooperativeDomainList []*CooperativeDomain,

) *MsgUpdateDomainMap {
	return &MsgUpdateDomainMap{
		Creator:               creator,
		DomainIndex:           domainIndex,
		CooperativeDomainList: cooperativeDomainList,
	}
}

func (msg *MsgUpdateDomainMap) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDomainMap) Type() string {
	return TypeMsgUpdateDomainMap
}

func (msg *MsgUpdateDomainMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDomainMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDomainMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDomainMap{}

func NewMsgDeleteDomainMap(
	creator string,
	domainIndex string,

) *MsgDeleteDomainMap {
	return &MsgDeleteDomainMap{
		Creator:     creator,
		DomainIndex: domainIndex,
	}
}
func (msg *MsgDeleteDomainMap) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDomainMap) Type() string {
	return TypeMsgDeleteDomainMap
}

func (msg *MsgDeleteDomainMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDomainMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDomainMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
