package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDelegationLog(goCtx context.Context, msg *types.MsgCreateDelegationLog) (*types.MsgCreateDelegationLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationLog = types.DelegationLog{
		Creator: msg.Creator,
	}

	id := k.AppendDelegationLog(
		ctx,
		delegationLog,
	)

	return &types.MsgCreateDelegationLogResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDelegationLog(goCtx context.Context, msg *types.MsgUpdateDelegationLog) (*types.MsgUpdateDelegationLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationLog = types.DelegationLog{
		Creator: msg.Creator,
		Id:      msg.Id,
	}

	// Checks that the element exists
	val, found := k.GetDelegationLog(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegationLog(ctx, delegationLog)

	return &types.MsgUpdateDelegationLogResponse{}, nil
}

func (k msgServer) DeleteDelegationLog(goCtx context.Context, msg *types.MsgDeleteDelegationLog) (*types.MsgDeleteDelegationLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegationLog(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegationLog(ctx, msg.Id)

	return &types.MsgDeleteDelegationLogResponse{}, nil
}
