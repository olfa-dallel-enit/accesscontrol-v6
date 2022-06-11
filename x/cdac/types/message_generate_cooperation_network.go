package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgGenerateCooperationNetwork = "generate_cooperation_network"

var _ sdk.Msg = &MsgGenerateCooperationNetwork{}

func NewMsgGenerateCooperationNetwork(creator string) *MsgGenerateCooperationNetwork {
	return &MsgGenerateCooperationNetwork{
		Creator: creator,
	}
}

func (msg *MsgGenerateCooperationNetwork) Route() string {
	return RouterKey
}

func (msg *MsgGenerateCooperationNetwork) Type() string {
	return TypeMsgGenerateCooperationNetwork
}

func (msg *MsgGenerateCooperationNetwork) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGenerateCooperationNetwork) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGenerateCooperationNetwork) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
