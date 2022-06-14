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

func (k Keeper) DelegationPolicyAll(c context.Context, req *types.QueryAllDelegationPolicyRequest) (*types.QueryAllDelegationPolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegationPolicys []types.DelegationPolicy
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	delegationPolicyStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationPolicyKey))

	pageRes, err := query.Paginate(delegationPolicyStore, req.Pagination, func(key []byte, value []byte) error {
		var delegationPolicy types.DelegationPolicy
		if err := k.cdc.Unmarshal(value, &delegationPolicy); err != nil {
			return err
		}

		delegationPolicys = append(delegationPolicys, delegationPolicy)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationPolicyResponse{DelegationPolicy: delegationPolicys, Pagination: pageRes}, nil
}

func (k Keeper) DelegationPolicy(c context.Context, req *types.QueryGetDelegationPolicyRequest) (*types.QueryGetDelegationPolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	delegationPolicy, found := k.GetDelegationPolicy(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationPolicyResponse{DelegationPolicy: delegationPolicy}, nil
}
