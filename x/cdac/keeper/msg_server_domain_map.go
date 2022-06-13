package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDomainMap(goCtx context.Context, msg *types.MsgCreateDomainMap) (*types.MsgCreateDomainMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetDomainMap(
		ctx,
		msg.DomainIndex,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var domainMap = types.DomainMap{
		Creator:     msg.Creator,
		DomainIndex: msg.DomainIndex,
		CooperativeDomainList:  msg.CooperativeDomainList,
	}

	k.SetDomainMap(
		ctx,
		domainMap,
	)
	return &types.MsgCreateDomainMapResponse{}, nil
}

func (k msgServer) UpdateDomainMap(goCtx context.Context, msg *types.MsgUpdateDomainMap) (*types.MsgUpdateDomainMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDomainMap(
		ctx,
		msg.DomainIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var domainMap = types.DomainMap{
		Creator:     msg.Creator,
		DomainIndex: msg.DomainIndex,
		CooperativeDomainList:  msg.CooperativeDomainList,
	}

	k.SetDomainMap(ctx, domainMap)

	return &types.MsgUpdateDomainMapResponse{}, nil
}

func (k msgServer) DeleteDomainMap(goCtx context.Context, msg *types.MsgDeleteDomainMap) (*types.MsgDeleteDomainMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDomainMap(
		ctx,
		msg.DomainIndex,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDomainMap(
		ctx,
		msg.DomainIndex,
	)

	return &types.MsgDeleteDomainMapResponse{}, nil
}
