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

func (k Keeper) InterDomainAclPolicyAll(c context.Context, req *types.QueryAllInterDomainAclPolicyRequest) (*types.QueryAllInterDomainAclPolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var interDomainAclPolicys []types.InterDomainAclPolicy
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	interDomainAclPolicyStore := prefix.NewStore(store, types.KeyPrefix(types.InterDomainAclPolicyKey))

	pageRes, err := query.Paginate(interDomainAclPolicyStore, req.Pagination, func(key []byte, value []byte) error {
		var interDomainAclPolicy types.InterDomainAclPolicy
		if err := k.cdc.Unmarshal(value, &interDomainAclPolicy); err != nil {
			return err
		}

		interDomainAclPolicys = append(interDomainAclPolicys, interDomainAclPolicy)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllInterDomainAclPolicyResponse{InterDomainAclPolicy: interDomainAclPolicys, Pagination: pageRes}, nil
}

func (k Keeper) InterDomainAclPolicy(c context.Context, req *types.QueryGetInterDomainAclPolicyRequest) (*types.QueryGetInterDomainAclPolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	interDomainAclPolicy, found := k.GetInterDomainAclPolicy(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetInterDomainAclPolicyResponse{InterDomainAclPolicy: interDomainAclPolicy}, nil
}
