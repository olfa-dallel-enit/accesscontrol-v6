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

func (k Keeper) PathAll(c context.Context, req *types.QueryAllPathRequest) (*types.QueryAllPathResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var paths []types.Path
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	pathStore := prefix.NewStore(store, types.KeyPrefix(types.PathKey))

	pageRes, err := query.Paginate(pathStore, req.Pagination, func(key []byte, value []byte) error {
		var path types.Path
		if err := k.cdc.Unmarshal(value, &path); err != nil {
			return err
		}

		paths = append(paths, path)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPathResponse{Path: paths, Pagination: pageRes}, nil
}

func (k Keeper) Path(c context.Context, req *types.QueryGetPathRequest) (*types.QueryGetPathResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	path, found := k.GetPath(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetPathResponse{Path: path}, nil
}
