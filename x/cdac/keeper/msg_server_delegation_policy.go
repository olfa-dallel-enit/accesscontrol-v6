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

func (k msgServer) CreateDelegationPolicy(goCtx context.Context, msg *types.MsgCreateDelegationPolicy) (*types.MsgCreateDelegationPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationPolicy = types.DelegationPolicy{
		Creator:            ctx.ChainID(),
		Label:              msg.Label,
		Target:             msg.Target,
		CombiningAlgorithm: msg.CombiningAlgorithm,
		RuleList:           msg.RuleList,
		CreationDate:       cast.ToString(time.Now()),
		CreationTimestamp:  cast.ToString(time.Now().UnixNano()),
		UpdateDate:         cast.ToString(time.Now()),
		UpdateTimestamp:    cast.ToString(time.Now().UnixNano()),
	}

	id := k.AppendDelegationPolicy(
		ctx,
		delegationPolicy,
	)

	return &types.MsgCreateDelegationPolicyResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDelegationPolicy(goCtx context.Context, msg *types.MsgUpdateDelegationPolicy) (*types.MsgUpdateDelegationPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationPolicy = types.DelegationPolicy{
		Creator:            msg.Creator,
		Id:                 msg.Id,
		Label:              msg.Label,
		Target:             msg.Target,
		CombiningAlgorithm: msg.CombiningAlgorithm,
		RuleList:           msg.RuleList,
	}

	// Checks that the element exists
	val, found := k.GetDelegationPolicy(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegationPolicy(ctx, delegationPolicy)

	return &types.MsgUpdateDelegationPolicyResponse{}, nil
}

func (k msgServer) DeleteDelegationPolicy(goCtx context.Context, msg *types.MsgDeleteDelegationPolicy) (*types.MsgDeleteDelegationPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegationPolicy(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegationPolicy(ctx, msg.Id)

	return &types.MsgDeleteDelegationPolicyResponse{}, nil
}
