package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDelegationPolicyTarget(goCtx context.Context, msg *types.MsgCreateDelegationPolicyTarget) (*types.MsgCreateDelegationPolicyTargetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationPolicyTarget = types.DelegationPolicyTarget{
		Creator:        msg.Creator,
		DelegatorList:  msg.DelegatorList,
		PermissionList: msg.PermissionList,
		Action:         msg.Action,
	}

	id := k.AppendDelegationPolicyTarget(
		ctx,
		delegationPolicyTarget,
	)

	return &types.MsgCreateDelegationPolicyTargetResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDelegationPolicyTarget(goCtx context.Context, msg *types.MsgUpdateDelegationPolicyTarget) (*types.MsgUpdateDelegationPolicyTargetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationPolicyTarget = types.DelegationPolicyTarget{
		Creator:        msg.Creator,
		Id:             msg.Id,
		DelegatorList:  msg.DelegatorList,
		PermissionList: msg.PermissionList,
		Action:         msg.Action,
	}

	// Checks that the element exists
	val, found := k.GetDelegationPolicyTarget(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegationPolicyTarget(ctx, delegationPolicyTarget)

	return &types.MsgUpdateDelegationPolicyTargetResponse{}, nil
}

func (k msgServer) DeleteDelegationPolicyTarget(goCtx context.Context, msg *types.MsgDeleteDelegationPolicyTarget) (*types.MsgDeleteDelegationPolicyTargetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegationPolicyTarget(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegationPolicyTarget(ctx, msg.Id)

	return &types.MsgDeleteDelegationPolicyTargetResponse{}, nil
}
