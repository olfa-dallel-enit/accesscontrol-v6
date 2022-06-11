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

func (k Keeper) CooperationNetworkFeaturesAll(c context.Context, req *types.QueryAllCooperationNetworkFeaturesRequest) (*types.QueryAllCooperationNetworkFeaturesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cooperationNetworkFeaturess []types.CooperationNetworkFeatures
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	cooperationNetworkFeaturesStore := prefix.NewStore(store, types.KeyPrefix(types.CooperationNetworkFeaturesKey))

	pageRes, err := query.Paginate(cooperationNetworkFeaturesStore, req.Pagination, func(key []byte, value []byte) error {
		var cooperationNetworkFeatures types.CooperationNetworkFeatures
		if err := k.cdc.Unmarshal(value, &cooperationNetworkFeatures); err != nil {
			return err
		}

		cooperationNetworkFeaturess = append(cooperationNetworkFeaturess, cooperationNetworkFeatures)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCooperationNetworkFeaturesResponse{CooperationNetworkFeatures: cooperationNetworkFeaturess, Pagination: pageRes}, nil
}

func (k Keeper) CooperationNetworkFeatures(c context.Context, req *types.QueryGetCooperationNetworkFeaturesRequest) (*types.QueryGetCooperationNetworkFeaturesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	cooperationNetworkFeatures, found := k.GetCooperationNetworkFeatures(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCooperationNetworkFeaturesResponse{CooperationNetworkFeatures: cooperationNetworkFeatures}, nil
}
