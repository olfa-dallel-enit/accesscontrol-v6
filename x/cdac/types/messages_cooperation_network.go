package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCooperationNetwork = "create_cooperation_network"
	TypeMsgUpdateCooperationNetwork = "update_cooperation_network"
	TypeMsgDeleteCooperationNetwork = "delete_cooperation_network"
)

var _ sdk.Msg = &MsgCreateCooperationNetwork{}

func NewMsgCreateCooperationNetwork(creator string, label string, domainMapList []*DomainMap, cooperationDataList []*CooperationData, features *CooperationNetworkFeatures, creationTimestamp string, updateTimestamp string) *MsgCreateCooperationNetwork {
	return &MsgCreateCooperationNetwork{
		Creator:             creator,
		Label:               label,
		DomainMapList:       domainMapList,
		CooperationDataList: cooperationDataList,
		Features:            features,
		CreationTimestamp:   creationTimestamp,
		UpdateTimestamp:     updateTimestamp,
	}
}

func (msg *MsgCreateCooperationNetwork) Route() string {
	return RouterKey
}

func (msg *MsgCreateCooperationNetwork) Type() string {
	return TypeMsgCreateCooperationNetwork
}

func (msg *MsgCreateCooperationNetwork) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCooperationNetwork) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCooperationNetwork) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCooperationNetwork{}

func NewMsgUpdateCooperationNetwork(creator string, id uint64, label string, domainMapList []*DomainMap, cooperationDataList []*CooperationData, features *CooperationNetworkFeatures, creationTimestamp string, updateTimestamp string) *MsgUpdateCooperationNetwork {
	return &MsgUpdateCooperationNetwork{
		Id:                  id,
		Creator:             creator,
		Label:               label,
		DomainMapList:       domainMapList,
		CooperationDataList: cooperationDataList,
		Features:            features,
		CreationTimestamp:   creationTimestamp,
		UpdateTimestamp:     updateTimestamp,
	}
}

func (msg *MsgUpdateCooperationNetwork) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCooperationNetwork) Type() string {
	return TypeMsgUpdateCooperationNetwork
}

func (msg *MsgUpdateCooperationNetwork) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCooperationNetwork) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCooperationNetwork) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCooperationNetwork{}

func NewMsgDeleteCooperationNetwork(creator string, id uint64) *MsgDeleteCooperationNetwork {
	return &MsgDeleteCooperationNetwork{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCooperationNetwork) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCooperationNetwork) Type() string {
	return TypeMsgDeleteCooperationNetwork
}

func (msg *MsgDeleteCooperationNetwork) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCooperationNetwork) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCooperationNetwork) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
