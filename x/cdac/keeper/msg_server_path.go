package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePath(goCtx context.Context, msg *types.MsgCreatePath) (*types.MsgCreatePathResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var path = types.Path{
		Creator:    msg.Creator,
		DomainList: msg.DomainList,
	}

	id := k.AppendPath(
		ctx,
		path,
	)

	return &types.MsgCreatePathResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePath(goCtx context.Context, msg *types.MsgUpdatePath) (*types.MsgUpdatePathResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var path = types.Path{
		Creator:    msg.Creator,
		Id:         msg.Id,
		DomainList: msg.DomainList,
	}

	// Checks that the element exists
	val, found := k.GetPath(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPath(ctx, path)

	return &types.MsgUpdatePathResponse{}, nil
}

func (k msgServer) DeletePath(goCtx context.Context, msg *types.MsgDeletePath) (*types.MsgDeletePathResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetPath(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePath(ctx, msg.Id)

	return &types.MsgDeletePathResponse{}, nil
}
