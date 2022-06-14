package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRequestDelegation = "request_delegation"

var _ sdk.Msg = &MsgRequestDelegation{}

func NewMsgRequestDelegation(creator string, delegatee string, permission string, action string, pathSelectionCriterion string) *MsgRequestDelegation {
	return &MsgRequestDelegation{
		Creator:                creator,
		Delegatee:              delegatee,
		Permission:             permission,
		Action:                 action,
		PathSelectionCriterion: pathSelectionCriterion,
	}
}

func (msg *MsgRequestDelegation) Route() string {
	return RouterKey
}

func (msg *MsgRequestDelegation) Type() string {
	return TypeMsgRequestDelegation
}

func (msg *MsgRequestDelegation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRequestDelegation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRequestDelegation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
