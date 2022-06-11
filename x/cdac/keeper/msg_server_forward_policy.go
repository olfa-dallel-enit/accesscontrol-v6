package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateForwardPolicy(goCtx context.Context, msg *types.MsgCreateForwardPolicy) (*types.MsgCreateForwardPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var forwardPolicy = types.ForwardPolicy{
		Creator:      msg.Creator,
		Mode:         msg.Mode,
		DomainList:   msg.DomainList,
		LocationList: msg.LocationList,
	}

	id := k.AppendForwardPolicy(
		ctx,
		forwardPolicy,
	)

	return &types.MsgCreateForwardPolicyResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateForwardPolicy(goCtx context.Context, msg *types.MsgUpdateForwardPolicy) (*types.MsgUpdateForwardPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var forwardPolicy = types.ForwardPolicy{
		Creator:      msg.Creator,
		Id:           msg.Id,
		Mode:         msg.Mode,
		DomainList:   msg.DomainList,
		LocationList: msg.LocationList,
	}

	// Checks that the element exists
	val, found := k.GetForwardPolicy(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetForwardPolicy(ctx, forwardPolicy)

	return &types.MsgUpdateForwardPolicyResponse{}, nil
}

func (k msgServer) DeleteForwardPolicy(goCtx context.Context, msg *types.MsgDeleteForwardPolicy) (*types.MsgDeleteForwardPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetForwardPolicy(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveForwardPolicy(ctx, msg.Id)

	return &types.MsgDeleteForwardPolicyResponse{}, nil
}
