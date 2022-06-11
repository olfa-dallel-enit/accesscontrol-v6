package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendForwardCooperationData = "send_forward_cooperation_data"

var _ sdk.Msg = &MsgSendForwardCooperationData{}

func NewMsgSendForwardCooperationData(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	notBefore string,
	notAfter string,
	interest string,
	cost string,
	domain1Name string,
	domain2Name string,
	domain1Location string,
	domain2Location string,
) *MsgSendForwardCooperationData {
	return &MsgSendForwardCooperationData{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		NotBefore:        notBefore,
		NotAfter:         notAfter,
		Interest:         interest,
		Cost:             cost,
		Domain1Name:      domain1Name,
		Domain2Name:      domain2Name,
		Domain1Location:  domain1Location,
		Domain2Location:  domain2Location,
	}
}

func (msg *MsgSendForwardCooperationData) Route() string {
	return RouterKey
}

func (msg *MsgSendForwardCooperationData) Type() string {
	return TypeMsgSendForwardCooperationData
}

func (msg *MsgSendForwardCooperationData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendForwardCooperationData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendForwardCooperationData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
