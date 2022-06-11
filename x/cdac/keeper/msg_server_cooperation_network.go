package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCooperationNetwork(goCtx context.Context, msg *types.MsgCreateCooperationNetwork) (*types.MsgCreateCooperationNetworkResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cooperationNetwork = types.CooperationNetwork{
		Creator:             msg.Creator,
		Label:               msg.Label,
		DomainMapList:       msg.DomainMapList,
		CooperationDataList: msg.CooperationDataList,
		Features:            msg.Features,
		CreationTimestamp:   msg.CreationTimestamp,
		UpdateTimestamp:     msg.UpdateTimestamp,
	}

	id := k.AppendCooperationNetwork(
		ctx,
		cooperationNetwork,
	)

	return &types.MsgCreateCooperationNetworkResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCooperationNetwork(goCtx context.Context, msg *types.MsgUpdateCooperationNetwork) (*types.MsgUpdateCooperationNetworkResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cooperationNetwork = types.CooperationNetwork{
		Creator:             msg.Creator,
		Id:                  msg.Id,
		Label:               msg.Label,
		DomainMapList:       msg.DomainMapList,
		CooperationDataList: msg.CooperationDataList,
		Features:            msg.Features,
		CreationTimestamp:   msg.CreationTimestamp,
		UpdateTimestamp:     msg.UpdateTimestamp,
	}

	// Checks that the element exists
	val, found := k.GetCooperationNetwork(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCooperationNetwork(ctx, cooperationNetwork)

	return &types.MsgUpdateCooperationNetworkResponse{}, nil
}

func (k msgServer) DeleteCooperationNetwork(goCtx context.Context, msg *types.MsgDeleteCooperationNetwork) (*types.MsgDeleteCooperationNetworkResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCooperationNetwork(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCooperationNetwork(ctx, msg.Id)

	return &types.MsgDeleteCooperationNetworkResponse{}, nil
}
