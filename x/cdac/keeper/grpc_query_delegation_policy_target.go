package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DelegationPolicyTargetAll(c context.Context, req *types.QueryAllDelegationPolicyTargetRequest) (*types.QueryAllDelegationPolicyTargetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegationPolicyTargets []types.DelegationPolicyTarget
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	delegationPolicyTargetStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationPolicyTargetKey))

	pageRes, err := query.Paginate(delegationPolicyTargetStore, req.Pagination, func(key []byte, value []byte) error {
		var delegationPolicyTarget types.DelegationPolicyTarget
		if err := k.cdc.Unmarshal(value, &delegationPolicyTarget); err != nil {
			return err
		}

		delegationPolicyTargets = append(delegationPolicyTargets, delegationPolicyTarget)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationPolicyTargetResponse{DelegationPolicyTarget: delegationPolicyTargets, Pagination: pageRes}, nil
}

func (k Keeper) DelegationPolicyTarget(c context.Context, req *types.QueryGetDelegationPolicyTargetRequest) (*types.QueryGetDelegationPolicyTargetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	delegationPolicyTarget, found := k.GetDelegationPolicyTarget(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationPolicyTargetResponse{DelegationPolicyTarget: delegationPolicyTarget}, nil
}
