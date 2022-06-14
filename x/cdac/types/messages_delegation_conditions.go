package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegationConditions = "create_delegation_conditions"
	TypeMsgUpdateDelegationConditions = "update_delegation_conditions"
	TypeMsgDeleteDelegationConditions = "delete_delegation_conditions"
)

var _ sdk.Msg = &MsgCreateDelegationConditions{}

func NewMsgCreateDelegationConditions(creator string, depth uint64, validity *Validity, maxDelegations uint64) *MsgCreateDelegationConditions {
	return &MsgCreateDelegationConditions{
		Creator:        creator,
		Depth:          depth,
		Validity:       validity,
		MaxDelegations: maxDelegations,
	}
}

func (msg *MsgCreateDelegationConditions) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegationConditions) Type() string {
	return TypeMsgCreateDelegationConditions
}

func (msg *MsgCreateDelegationConditions) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegationConditions) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegationConditions) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegationConditions{}

func NewMsgUpdateDelegationConditions(creator string, id uint64, depth uint64, validity *Validity, maxDelegations uint64) *MsgUpdateDelegationConditions {
	return &MsgUpdateDelegationConditions{
		Id:             id,
		Creator:        creator,
		Depth:          depth,
		Validity:       validity,
		MaxDelegations: maxDelegations,
	}
}

func (msg *MsgUpdateDelegationConditions) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegationConditions) Type() string {
	return TypeMsgUpdateDelegationConditions
}

func (msg *MsgUpdateDelegationConditions) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegationConditions) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegationConditions) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegationConditions{}

func NewMsgDeleteDelegationConditions(creator string, id uint64) *MsgDeleteDelegationConditions {
	return &MsgDeleteDelegationConditions{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegationConditions) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegationConditions) Type() string {
	return TypeMsgDeleteDelegationConditions
}

func (msg *MsgDeleteDelegationConditions) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegationConditions) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegationConditions) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
