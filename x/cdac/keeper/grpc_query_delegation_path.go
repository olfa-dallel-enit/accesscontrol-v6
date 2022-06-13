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

func (k Keeper) DelegationPathAll(c context.Context, req *types.QueryAllDelegationPathRequest) (*types.QueryAllDelegationPathResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegationPaths []types.DelegationPath
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	delegationPathStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationPathKey))

	pageRes, err := query.Paginate(delegationPathStore, req.Pagination, func(key []byte, value []byte) error {
		var delegationPath types.DelegationPath
		if err := k.cdc.Unmarshal(value, &delegationPath); err != nil {
			return err
		}

		delegationPaths = append(delegationPaths, delegationPath)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationPathResponse{DelegationPath: delegationPaths, Pagination: pageRes}, nil
}

func (k Keeper) DelegationPath(c context.Context, req *types.QueryGetDelegationPathRequest) (*types.QueryGetDelegationPathResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	delegationPath, found := k.GetDelegationPath(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationPathResponse{DelegationPath: delegationPath}, nil
}
