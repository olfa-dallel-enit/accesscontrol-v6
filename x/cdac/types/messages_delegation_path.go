package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegationPath = "create_delegation_path"
	TypeMsgUpdateDelegationPath = "update_delegation_path"
	TypeMsgDeleteDelegationPath = "delete_delegation_path"
)

var _ sdk.Msg = &MsgCreateDelegationPath{}

func NewMsgCreateDelegationPath(creator string, delegator *CooperativeDomain, delegatee *CooperativeDomain) *MsgCreateDelegationPath {
	return &MsgCreateDelegationPath{
		Creator:   creator,
		Delegator: delegator,
		Delegatee: delegatee,
	}
}

func (msg *MsgCreateDelegationPath) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegationPath) Type() string {
	return TypeMsgCreateDelegationPath
}

func (msg *MsgCreateDelegationPath) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegationPath) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegationPath) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegationPath{}

func NewMsgUpdateDelegationPath(creator string, id uint64, delegator *CooperativeDomain, delegatee *CooperativeDomain, pathList []*Path) *MsgUpdateDelegationPath {
	return &MsgUpdateDelegationPath{
		Id:         id,
		Creator:    creator,
		Delegator:  delegator,
		Delegatee:  delegatee,
		PathList: pathList,
	}
}

func (msg *MsgUpdateDelegationPath) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegationPath) Type() string {
	return TypeMsgUpdateDelegationPath
}

func (msg *MsgUpdateDelegationPath) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegationPath) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegationPath) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegationPath{}

func NewMsgDeleteDelegationPath(creator string, id uint64) *MsgDeleteDelegationPath {
	return &MsgDeleteDelegationPath{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegationPath) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegationPath) Type() string {
	return TypeMsgDeleteDelegationPath
}

func (msg *MsgDeleteDelegationPath) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegationPath) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegationPath) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
