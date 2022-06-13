package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRequestAccessPermission = "request_access_permission"

var _ sdk.Msg = &MsgRequestAccessPermission{}

func NewMsgRequestAccessPermission(creator string, subject string, object string, action string) *MsgRequestAccessPermission {
	return &MsgRequestAccessPermission{
		Creator: creator,
		Subject: subject,
		Object:  object,
		Action:  action,
	}
}

func (msg *MsgRequestAccessPermission) Route() string {
	return RouterKey
}

func (msg *MsgRequestAccessPermission) Type() string {
	return TypeMsgRequestAccessPermission
}

func (msg *MsgRequestAccessPermission) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRequestAccessPermission) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRequestAccessPermission) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
