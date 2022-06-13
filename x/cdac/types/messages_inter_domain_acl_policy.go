package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateInterDomainAclPolicy = "create_inter_domain_acl_policy"
	TypeMsgUpdateInterDomainAclPolicy = "update_inter_domain_acl_policy"
	TypeMsgDeleteInterDomainAclPolicy = "delete_inter_domain_acl_policy"
)

var _ sdk.Msg = &MsgCreateInterDomainAclPolicy{}

func NewMsgCreateInterDomainAclPolicy(creator string, label string, subjectList []string, actionList []string, objectList []string, status string, creationTimestamp string, updateTimestamp string) *MsgCreateInterDomainAclPolicy {
	return &MsgCreateInterDomainAclPolicy{
		Creator:           creator,
		Label:             label,
		SubjectList:       subjectList,
		ActionList:        actionList,
		ObjectList:        objectList,
		Status:            status,
		CreationTimestamp: creationTimestamp,
		UpdateTimestamp:   updateTimestamp,
	}
}

func (msg *MsgCreateInterDomainAclPolicy) Route() string {
	return RouterKey
}

func (msg *MsgCreateInterDomainAclPolicy) Type() string {
	return TypeMsgCreateInterDomainAclPolicy
}

func (msg *MsgCreateInterDomainAclPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateInterDomainAclPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateInterDomainAclPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateInterDomainAclPolicy{}

func NewMsgUpdateInterDomainAclPolicy(creator string, id uint64, label string, subjectList []string, actionList []string, objectList []string, status string, creationTimestamp string, updateTimestamp string) *MsgUpdateInterDomainAclPolicy {
	return &MsgUpdateInterDomainAclPolicy{
		Id:                id,
		Creator:           creator,
		Label:             label,
		SubjectList:       subjectList,
		ActionList:        actionList,
		ObjectList:        objectList,
		Status:            status,
		CreationTimestamp: creationTimestamp,
		UpdateTimestamp:   updateTimestamp,
	}
}

func (msg *MsgUpdateInterDomainAclPolicy) Route() string {
	return RouterKey
}

func (msg *MsgUpdateInterDomainAclPolicy) Type() string {
	return TypeMsgUpdateInterDomainAclPolicy
}

func (msg *MsgUpdateInterDomainAclPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateInterDomainAclPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateInterDomainAclPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteInterDomainAclPolicy{}

func NewMsgDeleteInterDomainAclPolicy(creator string, id uint64) *MsgDeleteInterDomainAclPolicy {
	return &MsgDeleteInterDomainAclPolicy{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteInterDomainAclPolicy) Route() string {
	return RouterKey
}

func (msg *MsgDeleteInterDomainAclPolicy) Type() string {
	return TypeMsgDeleteInterDomainAclPolicy
}

func (msg *MsgDeleteInterDomainAclPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteInterDomainAclPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteInterDomainAclPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
