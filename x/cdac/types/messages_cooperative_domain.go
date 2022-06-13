package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCooperativeDomain = "create_cooperative_domain"
	TypeMsgUpdateCooperativeDomain = "update_cooperative_domain"
	TypeMsgDeleteCooperativeDomain = "delete_cooperative_domain"
)

var _ sdk.Msg = &MsgCreateCooperativeDomain{}

func NewMsgCreateCooperativeDomain(creator string, name string, domainType string, location string) *MsgCreateCooperativeDomain {
	return &MsgCreateCooperativeDomain{
		Creator:    creator,
		Name:       name,
		DomainType: domainType,
		Location:   location,
	}
}

func (msg *MsgCreateCooperativeDomain) Route() string {
	return RouterKey
}

func (msg *MsgCreateCooperativeDomain) Type() string {
	return TypeMsgCreateCooperativeDomain
}

func (msg *MsgCreateCooperativeDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCooperativeDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCooperativeDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCooperativeDomain{}

func NewMsgUpdateCooperativeDomain(creator string, id uint64, name string, domainType string, location string) *MsgUpdateCooperativeDomain {
	return &MsgUpdateCooperativeDomain{
		Id:         id,
		Creator:    creator,
		Name:       name,
		DomainType: domainType,
		Location:   location,
	}
}

func (msg *MsgUpdateCooperativeDomain) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCooperativeDomain) Type() string {
	return TypeMsgUpdateCooperativeDomain
}

func (msg *MsgUpdateCooperativeDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCooperativeDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCooperativeDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCooperativeDomain{}

func NewMsgDeleteCooperativeDomain(creator string, id uint64) *MsgDeleteCooperativeDomain {
	return &MsgDeleteCooperativeDomain{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCooperativeDomain) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCooperativeDomain) Type() string {
	return TypeMsgDeleteCooperativeDomain
}

func (msg *MsgDeleteCooperativeDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCooperativeDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCooperativeDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
