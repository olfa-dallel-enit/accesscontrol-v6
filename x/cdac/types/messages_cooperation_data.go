package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCooperationData = "create_cooperation_data"
	TypeMsgUpdateCooperationData = "update_cooperation_data"
	TypeMsgDeleteCooperationData = "delete_cooperation_data"
)

var _ sdk.Msg = &MsgCreateCooperationData{}

func NewMsgCreateCooperationData(
	creator string,
	labelIndex string,
	validity *Validity,
	status string,
	cost uint64,
	lastUpdate string,
	interest string,

) *MsgCreateCooperationData {
	return &MsgCreateCooperationData{
		Creator:    creator,
		LabelIndex: labelIndex,
		Validity:   validity,
		Status:     status,
		Cost:       cost,
		LastUpdate: lastUpdate,
		Interest:   interest,
	}
}

func (msg *MsgCreateCooperationData) Route() string {
	return RouterKey
}

func (msg *MsgCreateCooperationData) Type() string {
	return TypeMsgCreateCooperationData
}

func (msg *MsgCreateCooperationData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCooperationData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCooperationData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCooperationData{}

func NewMsgUpdateCooperationData(
	creator string,
	labelIndex string,
	validity *Validity,
	status string,
	cost uint64,
	lastUpdate string,
	interest string,

) *MsgUpdateCooperationData {
	return &MsgUpdateCooperationData{
		Creator:    creator,
		LabelIndex: labelIndex,
		Validity:   validity,
		Status:     status,
		Cost:       cost,
		LastUpdate: lastUpdate,
		Interest:   interest,
	}
}

func (msg *MsgUpdateCooperationData) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCooperationData) Type() string {
	return TypeMsgUpdateCooperationData
}

func (msg *MsgUpdateCooperationData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCooperationData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCooperationData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCooperationData{}

func NewMsgDeleteCooperationData(
	creator string,
	labelIndex string,

) *MsgDeleteCooperationData {
	return &MsgDeleteCooperationData{
		Creator:    creator,
		LabelIndex: labelIndex,
	}
}
func (msg *MsgDeleteCooperationData) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCooperationData) Type() string {
	return TypeMsgDeleteCooperationData
}

func (msg *MsgDeleteCooperationData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCooperationData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCooperationData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
