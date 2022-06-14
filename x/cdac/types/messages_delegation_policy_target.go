package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegationPolicyTarget = "create_delegation_policy_target"
	TypeMsgUpdateDelegationPolicyTarget = "update_delegation_policy_target"
	TypeMsgDeleteDelegationPolicyTarget = "delete_delegation_policy_target"
)

var _ sdk.Msg = &MsgCreateDelegationPolicyTarget{}

func NewMsgCreateDelegationPolicyTarget(creator string, delegatorList []string, permissionList []string, action string) *MsgCreateDelegationPolicyTarget {
	return &MsgCreateDelegationPolicyTarget{
		Creator:        creator,
		DelegatorList:  delegatorList,
		PermissionList: permissionList,
		Action:         action,
	}
}

func (msg *MsgCreateDelegationPolicyTarget) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegationPolicyTarget) Type() string {
	return TypeMsgCreateDelegationPolicyTarget
}

func (msg *MsgCreateDelegationPolicyTarget) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegationPolicyTarget) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegationPolicyTarget) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegationPolicyTarget{}

func NewMsgUpdateDelegationPolicyTarget(creator string, id uint64, delegatorList []string, permissionList []string, action string) *MsgUpdateDelegationPolicyTarget {
	return &MsgUpdateDelegationPolicyTarget{
		Id:             id,
		Creator:        creator,
		DelegatorList:  delegatorList,
		PermissionList: permissionList,
		Action:         action,
	}
}

func (msg *MsgUpdateDelegationPolicyTarget) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegationPolicyTarget) Type() string {
	return TypeMsgUpdateDelegationPolicyTarget
}

func (msg *MsgUpdateDelegationPolicyTarget) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegationPolicyTarget) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegationPolicyTarget) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegationPolicyTarget{}

func NewMsgDeleteDelegationPolicyTarget(creator string, id uint64) *MsgDeleteDelegationPolicyTarget {
	return &MsgDeleteDelegationPolicyTarget{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegationPolicyTarget) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegationPolicyTarget) Type() string {
	return TypeMsgDeleteDelegationPolicyTarget
}

func (msg *MsgDeleteDelegationPolicyTarget) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegationPolicyTarget) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegationPolicyTarget) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
