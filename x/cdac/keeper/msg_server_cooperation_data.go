package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCooperationData(goCtx context.Context, msg *types.MsgCreateCooperationData) (*types.MsgCreateCooperationDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCooperationData(
		ctx,
		msg.LabelIndex,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var cooperationData = types.CooperationData{
		Creator:      msg.Creator,
		LabelIndex:   msg.LabelIndex,
		Validity:     msg.Validity,
		Status:       msg.Status,
		Cost:         msg.Cost,
		LastUpdate:   msg.LastUpdate,
		InterestList: msg.InterestList,
	}

	k.SetCooperationData(
		ctx,
		cooperationData,
	)
	return &types.MsgCreateCooperationDataResponse{}, nil
}

func (k msgServer) UpdateCooperationData(goCtx context.Context, msg *types.MsgUpdateCooperationData) (*types.MsgUpdateCooperationDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCooperationData(
		ctx,
		msg.LabelIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var cooperationData = types.CooperationData{
		Creator:      msg.Creator,
		LabelIndex:   msg.LabelIndex,
		Validity:     msg.Validity,
		Status:       msg.Status,
		Cost:         msg.Cost,
		LastUpdate:   msg.LastUpdate,
		InterestList: msg.InterestList,
	}

	k.SetCooperationData(ctx, cooperationData)

	return &types.MsgUpdateCooperationDataResponse{}, nil
}

func (k msgServer) DeleteCooperationData(goCtx context.Context, msg *types.MsgDeleteCooperationData) (*types.MsgDeleteCooperationDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCooperationData(
		ctx,
		msg.LabelIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCooperationData(
		ctx,
		msg.LabelIndex,
	)

	return &types.MsgDeleteCooperationDataResponse{}, nil
}
