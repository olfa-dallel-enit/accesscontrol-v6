package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgGeneratePeriodicalCooperationNetwork = "generate_periodical_cooperation_network"

var _ sdk.Msg = &MsgGeneratePeriodicalCooperationNetwork{}

func NewMsgGeneratePeriodicalCooperationNetwork(creator string) *MsgGeneratePeriodicalCooperationNetwork {
	return &MsgGeneratePeriodicalCooperationNetwork{
		Creator: creator,
	}
}

func (msg *MsgGeneratePeriodicalCooperationNetwork) Route() string {
	return RouterKey
}

func (msg *MsgGeneratePeriodicalCooperationNetwork) Type() string {
	return TypeMsgGeneratePeriodicalCooperationNetwork
}

func (msg *MsgGeneratePeriodicalCooperationNetwork) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGeneratePeriodicalCooperationNetwork) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGeneratePeriodicalCooperationNetwork) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
