package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCooperationNetworkFeatures(goCtx context.Context, msg *types.MsgCreateCooperationNetworkFeatures) (*types.MsgCreateCooperationNetworkFeaturesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cooperationNetworkFeatures = types.CooperationNetworkFeatures{
		Creator:      msg.Creator,
		Depth:        msg.Depth,
		Cost:         msg.Cost,
		InterestList: msg.InterestList,
		LocationList: msg.LocationList,
		LastUpdate:   msg.LastUpdate,
	}

	id := k.AppendCooperationNetworkFeatures(
		ctx,
		cooperationNetworkFeatures,
	)

	return &types.MsgCreateCooperationNetworkFeaturesResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCooperationNetworkFeatures(goCtx context.Context, msg *types.MsgUpdateCooperationNetworkFeatures) (*types.MsgUpdateCooperationNetworkFeaturesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cooperationNetworkFeatures = types.CooperationNetworkFeatures{
		Creator:      msg.Creator,
		Id:           msg.Id,
		Depth:        msg.Depth,
		Cost:         msg.Cost,
		InterestList: msg.InterestList,
		LocationList: msg.LocationList,
		LastUpdate:   msg.LastUpdate,
	}

	// Checks that the element exists
	val, found := k.GetCooperationNetworkFeatures(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCooperationNetworkFeatures(ctx, cooperationNetworkFeatures)

	return &types.MsgUpdateCooperationNetworkFeaturesResponse{}, nil
}

func (k msgServer) DeleteCooperationNetworkFeatures(goCtx context.Context, msg *types.MsgDeleteCooperationNetworkFeatures) (*types.MsgDeleteCooperationNetworkFeaturesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCooperationNetworkFeatures(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCooperationNetworkFeatures(ctx, msg.Id)

	return &types.MsgDeleteCooperationNetworkFeaturesResponse{}, nil
}
