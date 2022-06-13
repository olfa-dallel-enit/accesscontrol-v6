package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateInterDomainDclPolicy = "create_inter_domain_dcl_policy"
	TypeMsgUpdateInterDomainDclPolicy = "update_inter_domain_dcl_policy"
	TypeMsgDeleteInterDomainDclPolicy = "delete_inter_domain_dcl_policy"
)

var _ sdk.Msg = &MsgCreateInterDomainDclPolicy{}

func NewMsgCreateInterDomainDclPolicy(creator string, label string, delegatorList []string, delegateeList []string, permissionList []string, depth uint64, maxDelegations uint64, validity *Validity) *MsgCreateInterDomainDclPolicy {
	return &MsgCreateInterDomainDclPolicy{
		Creator:           creator,
		Label:             label,
		DelegatorList:     delegatorList,
		DelegateeList:     delegateeList,
		PermissionList:    permissionList,
		Depth:             depth,
		MaxDelegations:    maxDelegations,
		Validity:          validity,
	}
}

func (msg *MsgCreateInterDomainDclPolicy) Route() string {
	return RouterKey
}

func (msg *MsgCreateInterDomainDclPolicy) Type() string {
	return TypeMsgCreateInterDomainDclPolicy
}

func (msg *MsgCreateInterDomainDclPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateInterDomainDclPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateInterDomainDclPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateInterDomainDclPolicy{}

func NewMsgUpdateInterDomainDclPolicy(creator string, id uint64, label string, delegatorList []string, delegateeList []string, permissionList []string, creationTimestamp string, updateTimestamp string, depth uint64, maxDelegations uint64, validity *Validity) *MsgUpdateInterDomainDclPolicy {
	return &MsgUpdateInterDomainDclPolicy{
		Id:                id,
		Creator:           creator,
		Label:             label,
		DelegatorList:     delegatorList,
		DelegateeList:     delegateeList,
		PermissionList:    permissionList,
		CreationTimestamp: creationTimestamp,
		UpdateTimestamp:   updateTimestamp,
		Depth:             depth,
		MaxDelegations:    maxDelegations,
		Validity:          validity,
	}
}

func (msg *MsgUpdateInterDomainDclPolicy) Route() string {
	return RouterKey
}

func (msg *MsgUpdateInterDomainDclPolicy) Type() string {
	return TypeMsgUpdateInterDomainDclPolicy
}

func (msg *MsgUpdateInterDomainDclPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateInterDomainDclPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateInterDomainDclPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteInterDomainDclPolicy{}

func NewMsgDeleteInterDomainDclPolicy(creator string, id uint64) *MsgDeleteInterDomainDclPolicy {
	return &MsgDeleteInterDomainDclPolicy{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteInterDomainDclPolicy) Route() string {
	return RouterKey
}

func (msg *MsgDeleteInterDomainDclPolicy) Type() string {
	return TypeMsgDeleteInterDomainDclPolicy
}

func (msg *MsgDeleteInterDomainDclPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteInterDomainDclPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteInterDomainDclPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
