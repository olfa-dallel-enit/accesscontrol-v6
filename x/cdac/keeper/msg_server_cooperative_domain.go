package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCooperativeDomain(goCtx context.Context, msg *types.MsgCreateCooperativeDomain) (*types.MsgCreateCooperativeDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cooperativeDomain = types.CooperativeDomain{
		Creator:    msg.Creator,
		Name:       msg.Name,
		DomainType: msg.DomainType,
		Location:   msg.Location,
	}

	id := k.AppendCooperativeDomain(
		ctx,
		cooperativeDomain,
	)

	return &types.MsgCreateCooperativeDomainResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCooperativeDomain(goCtx context.Context, msg *types.MsgUpdateCooperativeDomain) (*types.MsgUpdateCooperativeDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cooperativeDomain = types.CooperativeDomain{
		Creator:    msg.Creator,
		Id:         msg.Id,
		Name:       msg.Name,
		DomainType: msg.DomainType,
		Location:   msg.Location,
	}

	// Checks that the element exists
	val, found := k.GetCooperativeDomain(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCooperativeDomain(ctx, cooperativeDomain)

	return &types.MsgUpdateCooperativeDomainResponse{}, nil
}

func (k msgServer) DeleteCooperativeDomain(goCtx context.Context, msg *types.MsgDeleteCooperativeDomain) (*types.MsgDeleteCooperativeDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCooperativeDomain(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCooperativeDomain(ctx, msg.Id)

	return &types.MsgDeleteCooperativeDomainResponse{}, nil
}
