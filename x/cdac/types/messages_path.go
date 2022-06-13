package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreatePath = "create_path"
	TypeMsgUpdatePath = "update_path"
	TypeMsgDeletePath = "delete_path"
)

var _ sdk.Msg = &MsgCreatePath{}

func NewMsgCreatePath(creator string, domainList []*CooperativeDomain) *MsgCreatePath {
	return &MsgCreatePath{
		Creator:    creator,
		DomainList: domainList,
	}
}

func (msg *MsgCreatePath) Route() string {
	return RouterKey
}

func (msg *MsgCreatePath) Type() string {
	return TypeMsgCreatePath
}

func (msg *MsgCreatePath) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePath) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePath) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePath{}

func NewMsgUpdatePath(creator string, id uint64, domainList []*CooperativeDomain) *MsgUpdatePath {
	return &MsgUpdatePath{
		Id:         id,
		Creator:    creator,
		DomainList: domainList,
	}
}

func (msg *MsgUpdatePath) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePath) Type() string {
	return TypeMsgUpdatePath
}

func (msg *MsgUpdatePath) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePath) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePath) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePath{}

func NewMsgDeletePath(creator string, id uint64) *MsgDeletePath {
	return &MsgDeletePath{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePath) Route() string {
	return RouterKey
}

func (msg *MsgDeletePath) Type() string {
	return TypeMsgDeletePath
}

func (msg *MsgDeletePath) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePath) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePath) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
