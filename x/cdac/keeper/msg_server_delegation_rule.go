package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/spf13/cast"
	"time"
)

func (k msgServer) CreateDelegationRule(goCtx context.Context, msg *types.MsgCreateDelegationRule) (*types.MsgCreateDelegationRuleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationRule = types.DelegationRule{
		Creator:              ctx.ChainID(),
		Label:                msg.Label,
		Effect:               msg.Effect,
		DelegationConditions: msg.DelegationConditions,
		Priority:             msg.Priority,
		CreationDate:         cast.ToString(time.Now()),
		CreationTimestamp:    cast.ToString(time.Now().UnixNano()),
		UpdateDate:           cast.ToString(time.Now()),
		UpdateTimestamp:      cast.ToString(time.Now().UnixNano()),
	}

	id := k.AppendDelegationRule(
		ctx,
		delegationRule,
	)

	return &types.MsgCreateDelegationRuleResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDelegationRule(goCtx context.Context, msg *types.MsgUpdateDelegationRule) (*types.MsgUpdateDelegationRuleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationRule = types.DelegationRule{
		Creator:              msg.Creator,
		Id:                   msg.Id,
		Label:                msg.Label,
		Effect:               msg.Effect,
		DelegationConditions: msg.DelegationConditions,
		Priority:             msg.Priority,
	}

	// Checks that the element exists
	val, found := k.GetDelegationRule(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegationRule(ctx, delegationRule)

	return &types.MsgUpdateDelegationRuleResponse{}, nil
}

func (k msgServer) DeleteDelegationRule(goCtx context.Context, msg *types.MsgDeleteDelegationRule) (*types.MsgDeleteDelegationRuleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegationRule(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegationRule(ctx, msg.Id)

	return &types.MsgDeleteDelegationRuleResponse{}, nil
}
