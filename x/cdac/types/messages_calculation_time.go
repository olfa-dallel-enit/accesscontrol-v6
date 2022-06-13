package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCalculationTime = "create_calculation_time"
	TypeMsgUpdateCalculationTime = "update_calculation_time"
	TypeMsgDeleteCalculationTime = "delete_calculation_time"
)

var _ sdk.Msg = &MsgCreateCalculationTime{}

func NewMsgCreateCalculationTime(creator string, operation string, startTimestamp string, endTimestamp string, duration uint64) *MsgCreateCalculationTime {
	return &MsgCreateCalculationTime{
		Creator:        creator,
		Operation:      operation,
		StartTimestamp: startTimestamp,
		EndTimestamp:   endTimestamp,
		Duration:       duration,
	}
}

func (msg *MsgCreateCalculationTime) Route() string {
	return RouterKey
}

func (msg *MsgCreateCalculationTime) Type() string {
	return TypeMsgCreateCalculationTime
}

func (msg *MsgCreateCalculationTime) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCalculationTime) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCalculationTime) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCalculationTime{}

func NewMsgUpdateCalculationTime(creator string, id uint64, operation string, startTimestamp string, endTimestamp string, duration uint64) *MsgUpdateCalculationTime {
	return &MsgUpdateCalculationTime{
		Id:             id,
		Creator:        creator,
		Operation:      operation,
		StartTimestamp: startTimestamp,
		EndTimestamp:   endTimestamp,
		Duration:       duration,
	}
}

func (msg *MsgUpdateCalculationTime) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCalculationTime) Type() string {
	return TypeMsgUpdateCalculationTime
}

func (msg *MsgUpdateCalculationTime) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCalculationTime) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCalculationTime) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCalculationTime{}

func NewMsgDeleteCalculationTime(creator string, id uint64) *MsgDeleteCalculationTime {
	return &MsgDeleteCalculationTime{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCalculationTime) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCalculationTime) Type() string {
	return TypeMsgDeleteCalculationTime
}

func (msg *MsgDeleteCalculationTime) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCalculationTime) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCalculationTime) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
