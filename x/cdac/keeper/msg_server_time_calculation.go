package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateTimeCalculation(goCtx context.Context, msg *types.MsgCreateTimeCalculation) (*types.MsgCreateTimeCalculationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var timeCalculation = types.TimeCalculation{
		Creator:        msg.Creator,
		Operation:      msg.Operation,
		StartTimestamp: msg.StartTimestamp,
		EndTimestamp:   msg.EndTimestamp,
		Timing:         msg.Timing,
	}

	id := k.AppendTimeCalculation(
		ctx,
		timeCalculation,
	)

	return &types.MsgCreateTimeCalculationResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTimeCalculation(goCtx context.Context, msg *types.MsgUpdateTimeCalculation) (*types.MsgUpdateTimeCalculationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var timeCalculation = types.TimeCalculation{
		Creator:        msg.Creator,
		Id:             msg.Id,
		Operation:      msg.Operation,
		StartTimestamp: msg.StartTimestamp,
		EndTimestamp:   msg.EndTimestamp,
		Timing:         msg.Timing,
	}

	// Checks that the element exists
	val, found := k.GetTimeCalculation(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTimeCalculation(ctx, timeCalculation)

	return &types.MsgUpdateTimeCalculationResponse{}, nil
}

func (k msgServer) DeleteTimeCalculation(goCtx context.Context, msg *types.MsgDeleteTimeCalculation) (*types.MsgDeleteTimeCalculationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetTimeCalculation(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTimeCalculation(ctx, msg.Id)

	return &types.MsgDeleteTimeCalculationResponse{}, nil
}
