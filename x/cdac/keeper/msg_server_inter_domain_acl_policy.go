package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateInterDomainAclPolicy(goCtx context.Context, msg *types.MsgCreateInterDomainAclPolicy) (*types.MsgCreateInterDomainAclPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var interDomainAclPolicy = types.InterDomainAclPolicy{
		Creator:           msg.Creator,
		Label:             msg.Label,
		SubjectList:       msg.SubjectList,
		ActionList:        msg.ActionList,
		ObjectList:        msg.ObjectList,
		Status:            msg.Status,
		CreationTimestamp: msg.CreationTimestamp,
		UpdateTimestamp:   msg.UpdateTimestamp,
	}

	id := k.AppendInterDomainAclPolicy(
		ctx,
		interDomainAclPolicy,
	)

	return &types.MsgCreateInterDomainAclPolicyResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateInterDomainAclPolicy(goCtx context.Context, msg *types.MsgUpdateInterDomainAclPolicy) (*types.MsgUpdateInterDomainAclPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var interDomainAclPolicy = types.InterDomainAclPolicy{
		Creator:           msg.Creator,
		Id:                msg.Id,
		Label:             msg.Label,
		SubjectList:       msg.SubjectList,
		ActionList:        msg.ActionList,
		ObjectList:        msg.ObjectList,
		Status:            msg.Status,
		CreationTimestamp: msg.CreationTimestamp,
		UpdateTimestamp:   msg.UpdateTimestamp,
	}

	// Checks that the element exists
	val, found := k.GetInterDomainAclPolicy(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetInterDomainAclPolicy(ctx, interDomainAclPolicy)

	return &types.MsgUpdateInterDomainAclPolicyResponse{}, nil
}

func (k msgServer) DeleteInterDomainAclPolicy(goCtx context.Context, msg *types.MsgDeleteInterDomainAclPolicy) (*types.MsgDeleteInterDomainAclPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetInterDomainAclPolicy(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveInterDomainAclPolicy(ctx, msg.Id)

	return &types.MsgDeleteInterDomainAclPolicyResponse{}, nil
}
