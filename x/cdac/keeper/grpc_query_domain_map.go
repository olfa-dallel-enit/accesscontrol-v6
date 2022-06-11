package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DomainMapAll(c context.Context, req *types.QueryAllDomainMapRequest) (*types.QueryAllDomainMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var domainMaps []types.DomainMap
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	domainMapStore := prefix.NewStore(store, types.KeyPrefix(types.DomainMapKeyPrefix))

	pageRes, err := query.Paginate(domainMapStore, req.Pagination, func(key []byte, value []byte) error {
		var domainMap types.DomainMap
		if err := k.cdc.Unmarshal(value, &domainMap); err != nil {
			return err
		}

		domainMaps = append(domainMaps, domainMap)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDomainMapResponse{DomainMap: domainMaps, Pagination: pageRes}, nil
}

func (k Keeper) DomainMap(c context.Context, req *types.QueryGetDomainMapRequest) (*types.QueryGetDomainMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetDomainMap(
		ctx,
		req.DomainIndex,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetDomainMapResponse{DomainMap: val}, nil
}
