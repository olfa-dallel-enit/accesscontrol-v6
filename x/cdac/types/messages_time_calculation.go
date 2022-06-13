package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateTimeCalculation = "create_time_calculation"
	TypeMsgUpdateTimeCalculation = "update_time_calculation"
	TypeMsgDeleteTimeCalculation = "delete_time_calculation"
)

var _ sdk.Msg = &MsgCreateTimeCalculation{}

func NewMsgCreateTimeCalculation(creator string, operation string, startTimestamp string, endTimestamp string, timing uint64) *MsgCreateTimeCalculation {
	return &MsgCreateTimeCalculation{
		Creator:        creator,
		Operation:      operation,
		StartTimestamp: startTimestamp,
		EndTimestamp:   endTimestamp,
		Timing:         timing,
	}
}

func (msg *MsgCreateTimeCalculation) Route() string {
	return RouterKey
}

func (msg *MsgCreateTimeCalculation) Type() string {
	return TypeMsgCreateTimeCalculation
}

func (msg *MsgCreateTimeCalculation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTimeCalculation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTimeCalculation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTimeCalculation{}

func NewMsgUpdateTimeCalculation(creator string, id uint64, operation string, startTimestamp string, endTimestamp string, timing uint64) *MsgUpdateTimeCalculation {
	return &MsgUpdateTimeCalculation{
		Id:             id,
		Creator:        creator,
		Operation:      operation,
		StartTimestamp: startTimestamp,
		EndTimestamp:   endTimestamp,
		Timing:         timing,
	}
}

func (msg *MsgUpdateTimeCalculation) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTimeCalculation) Type() string {
	return TypeMsgUpdateTimeCalculation
}

func (msg *MsgUpdateTimeCalculation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTimeCalculation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTimeCalculation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteTimeCalculation{}

func NewMsgDeleteTimeCalculation(creator string, id uint64) *MsgDeleteTimeCalculation {
	return &MsgDeleteTimeCalculation{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTimeCalculation) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTimeCalculation) Type() string {
	return TypeMsgDeleteTimeCalculation
}

func (msg *MsgDeleteTimeCalculation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTimeCalculation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTimeCalculation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
