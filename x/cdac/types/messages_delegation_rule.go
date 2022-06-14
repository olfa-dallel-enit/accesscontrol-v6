package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegationRule = "create_delegation_rule"
	TypeMsgUpdateDelegationRule = "update_delegation_rule"
	TypeMsgDeleteDelegationRule = "delete_delegation_rule"
)

var _ sdk.Msg = &MsgCreateDelegationRule{}

func NewMsgCreateDelegationRule(creator string, label string, effect string, delegationConditions *DelegationConditions, priority uint64) *MsgCreateDelegationRule {
	return &MsgCreateDelegationRule{
		Creator:              creator,
		Label:                label,
		Effect:               effect,
		DelegationConditions: delegationConditions,
		Priority:             priority,
	}
}

func (msg *MsgCreateDelegationRule) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegationRule) Type() string {
	return TypeMsgCreateDelegationRule
}

func (msg *MsgCreateDelegationRule) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegationRule) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegationRule) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegationRule{}

func NewMsgUpdateDelegationRule(creator string, id uint64, label string, effect string, delegationConditions *DelegationConditions, priority uint64) *MsgUpdateDelegationRule {
	return &MsgUpdateDelegationRule{
		Id:                   id,
		Creator:              creator,
		Label:                label,
		Effect:               effect,
		DelegationConditions: delegationConditions,
		Priority:             priority,
	}
}

func (msg *MsgUpdateDelegationRule) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegationRule) Type() string {
	return TypeMsgUpdateDelegationRule
}

func (msg *MsgUpdateDelegationRule) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegationRule) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegationRule) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegationRule{}

func NewMsgDeleteDelegationRule(creator string, id uint64) *MsgDeleteDelegationRule {
	return &MsgDeleteDelegationRule{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegationRule) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegationRule) Type() string {
	return TypeMsgDeleteDelegationRule
}

func (msg *MsgDeleteDelegationRule) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegationRule) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegationRule) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
