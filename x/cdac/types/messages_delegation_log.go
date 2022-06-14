package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegationLog = "create_delegation_log"
	TypeMsgUpdateDelegationLog = "update_delegation_log"
	TypeMsgDeleteDelegationLog = "delete_delegation_log"
)

var _ sdk.Msg = &MsgCreateDelegationLog{}

func NewMsgCreateDelegationLog(creator string) *MsgCreateDelegationLog {
	return &MsgCreateDelegationLog{
		Creator: creator,
	}
}

func (msg *MsgCreateDelegationLog) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegationLog) Type() string {
	return TypeMsgCreateDelegationLog
}

func (msg *MsgCreateDelegationLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegationLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegationLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegationLog{}

func NewMsgUpdateDelegationLog(creator string, id uint64) *MsgUpdateDelegationLog {
	return &MsgUpdateDelegationLog{
		Id:      id,
		Creator: creator,
	}
}

func (msg *MsgUpdateDelegationLog) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegationLog) Type() string {
	return TypeMsgUpdateDelegationLog
}

func (msg *MsgUpdateDelegationLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegationLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegationLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegationLog{}

func NewMsgDeleteDelegationLog(creator string, id uint64) *MsgDeleteDelegationLog {
	return &MsgDeleteDelegationLog{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegationLog) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegationLog) Type() string {
	return TypeMsgDeleteDelegationLog
}

func (msg *MsgDeleteDelegationLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegationLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegationLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
