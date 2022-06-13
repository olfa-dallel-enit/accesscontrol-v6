package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCalculationTime(goCtx context.Context, msg *types.MsgCreateCalculationTime) (*types.MsgCreateCalculationTimeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var calculationTime = types.CalculationTime{
		Creator:        msg.Creator,
		Operation:      msg.Operation,
		StartTimestamp: msg.StartTimestamp,
		EndTimestamp:   msg.EndTimestamp,
		Duration:       msg.Duration,
	}

	id := k.AppendCalculationTime(
		ctx,
		calculationTime,
	)

	return &types.MsgCreateCalculationTimeResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCalculationTime(goCtx context.Context, msg *types.MsgUpdateCalculationTime) (*types.MsgUpdateCalculationTimeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var calculationTime = types.CalculationTime{
		Creator:        msg.Creator,
		Id:             msg.Id,
		Operation:      msg.Operation,
		StartTimestamp: msg.StartTimestamp,
		EndTimestamp:   msg.EndTimestamp,
		Duration:       msg.Duration,
	}

	// Checks that the element exists
	val, found := k.GetCalculationTime(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCalculationTime(ctx, calculationTime)

	return &types.MsgUpdateCalculationTimeResponse{}, nil
}

func (k msgServer) DeleteCalculationTime(goCtx context.Context, msg *types.MsgDeleteCalculationTime) (*types.MsgDeleteCalculationTimeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCalculationTime(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCalculationTime(ctx, msg.Id)

	return &types.MsgDeleteCalculationTimeResponse{}, nil
}
