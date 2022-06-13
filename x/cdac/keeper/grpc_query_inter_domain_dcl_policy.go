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

func (k Keeper) InterDomainDclPolicyAll(c context.Context, req *types.QueryAllInterDomainDclPolicyRequest) (*types.QueryAllInterDomainDclPolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var interDomainDclPolicys []types.InterDomainDclPolicy
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	interDomainDclPolicyStore := prefix.NewStore(store, types.KeyPrefix(types.InterDomainDclPolicyKey))

	pageRes, err := query.Paginate(interDomainDclPolicyStore, req.Pagination, func(key []byte, value []byte) error {
		var interDomainDclPolicy types.InterDomainDclPolicy
		if err := k.cdc.Unmarshal(value, &interDomainDclPolicy); err != nil {
			return err
		}

		interDomainDclPolicys = append(interDomainDclPolicys, interDomainDclPolicy)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllInterDomainDclPolicyResponse{InterDomainDclPolicy: interDomainDclPolicys, Pagination: pageRes}, nil
}

func (k Keeper) InterDomainDclPolicy(c context.Context, req *types.QueryGetInterDomainDclPolicyRequest) (*types.QueryGetInterDomainDclPolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	interDomainDclPolicy, found := k.GetInterDomainDclPolicy(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetInterDomainDclPolicyResponse{InterDomainDclPolicy: interDomainDclPolicy}, nil
}
