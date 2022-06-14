package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegationPolicy = "create_delegation_policy"
	TypeMsgUpdateDelegationPolicy = "update_delegation_policy"
	TypeMsgDeleteDelegationPolicy = "delete_delegation_policy"
)

var _ sdk.Msg = &MsgCreateDelegationPolicy{}

func NewMsgCreateDelegationPolicy(creator string, label string, target *DelegationPolicyTarget, combiningAlgorithm string, ruleList []*DelegationRule) *MsgCreateDelegationPolicy {
	return &MsgCreateDelegationPolicy{
		Creator:            creator,
		Label:              label,
		Target:             target,
		CombiningAlgorithm: combiningAlgorithm,
		RuleList:           ruleList,
	}
}

func (msg *MsgCreateDelegationPolicy) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegationPolicy) Type() string {
	return TypeMsgCreateDelegationPolicy
}

func (msg *MsgCreateDelegationPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegationPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegationPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegationPolicy{}

func NewMsgUpdateDelegationPolicy(creator string, id uint64, label string, target *DelegationPolicyTarget, combiningAlgorithm string, ruleList []*DelegationRule) *MsgUpdateDelegationPolicy {
	return &MsgUpdateDelegationPolicy{
		Id:                 id,
		Creator:            creator,
		Label:              label,
		Target:             target,
		CombiningAlgorithm: combiningAlgorithm,
		RuleList:           ruleList,
	}
}

func (msg *MsgUpdateDelegationPolicy) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegationPolicy) Type() string {
	return TypeMsgUpdateDelegationPolicy
}

func (msg *MsgUpdateDelegationPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegationPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegationPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegationPolicy{}

func NewMsgDeleteDelegationPolicy(creator string, id uint64) *MsgDeleteDelegationPolicy {
	return &MsgDeleteDelegationPolicy{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegationPolicy) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegationPolicy) Type() string {
	return TypeMsgDeleteDelegationPolicy
}

func (msg *MsgDeleteDelegationPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegationPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegationPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
