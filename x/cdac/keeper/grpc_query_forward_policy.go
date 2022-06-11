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

func (k Keeper) ForwardPolicyAll(c context.Context, req *types.QueryAllForwardPolicyRequest) (*types.QueryAllForwardPolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var forwardPolicys []types.ForwardPolicy
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	forwardPolicyStore := prefix.NewStore(store, types.KeyPrefix(types.ForwardPolicyKey))

	pageRes, err := query.Paginate(forwardPolicyStore, req.Pagination, func(key []byte, value []byte) error {
		var forwardPolicy types.ForwardPolicy
		if err := k.cdc.Unmarshal(value, &forwardPolicy); err != nil {
			return err
		}

		forwardPolicys = append(forwardPolicys, forwardPolicy)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllForwardPolicyResponse{ForwardPolicy: forwardPolicys, Pagination: pageRes}, nil
}

func (k Keeper) ForwardPolicy(c context.Context, req *types.QueryGetForwardPolicyRequest) (*types.QueryGetForwardPolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	forwardPolicy, found := k.GetForwardPolicy(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetForwardPolicyResponse{ForwardPolicy: forwardPolicy}, nil
}
