package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateInterDomainDclPolicy(goCtx context.Context, msg *types.MsgCreateInterDomainDclPolicy) (*types.MsgCreateInterDomainDclPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	found := k.FindInterDomainDclPolicyByLabel(ctx, msg.Label) 
	if !found{
		var permissionLabels []string
		for _, permission := range msg.PermissionList{
			existed := k.FindInterDomainAclPolicyByLabel(ctx, permission)
			if existed{
				permissionLabels = append(permissionLabels, permission)
			}
		}
	}

	var interDomainDclPolicy = types.InterDomainDclPolicy{
		Creator:           msg.Creator,
		Label:             msg.Label,
		DelegatorList:     msg.DelegatorList,
		DelegateeList:     msg.DelegateeList,
		PermissionList:    msg.PermissionList,
		Depth:             msg.Depth,
		MaxDelegations:    msg.MaxDelegations,
		Validity:          msg.Validity,
	}

	id := k.AppendInterDomainDclPolicy(
		ctx,
		interDomainDclPolicy,
	)

	return &types.MsgCreateInterDomainDclPolicyResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateInterDomainDclPolicy(goCtx context.Context, msg *types.MsgUpdateInterDomainDclPolicy) (*types.MsgUpdateInterDomainDclPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var interDomainDclPolicy = types.InterDomainDclPolicy{
		Creator:           msg.Creator,
		Id:                msg.Id,
		Label:             msg.Label,
		DelegatorList:     msg.DelegatorList,
		DelegateeList:     msg.DelegateeList,
		PermissionList:    msg.PermissionList,
		CreationTimestamp: msg.CreationTimestamp,
		UpdateTimestamp:   msg.UpdateTimestamp,
		Depth:             msg.Depth,
		MaxDelegations:    msg.MaxDelegations,
		Validity:          msg.Validity,
	}

	// Checks that the element exists
	val, found := k.GetInterDomainDclPolicy(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetInterDomainDclPolicy(ctx, interDomainDclPolicy)

	return &types.MsgUpdateInterDomainDclPolicyResponse{}, nil
}

func (k msgServer) DeleteInterDomainDclPolicy(goCtx context.Context, msg *types.MsgDeleteInterDomainDclPolicy) (*types.MsgDeleteInterDomainDclPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetInterDomainDclPolicy(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveInterDomainDclPolicy(ctx, msg.Id)

	return &types.MsgDeleteInterDomainDclPolicyResponse{}, nil
}
