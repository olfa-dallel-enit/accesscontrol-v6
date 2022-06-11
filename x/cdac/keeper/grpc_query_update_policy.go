package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) UpdatePolicy(c context.Context, req *types.QueryGetUpdatePolicyRequest) (*types.QueryGetUpdatePolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetUpdatePolicy(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetUpdatePolicyResponse{UpdatePolicy: val}, nil
}
