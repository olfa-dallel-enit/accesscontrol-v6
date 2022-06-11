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

func (k Keeper) CooperationDataAll(c context.Context, req *types.QueryAllCooperationDataRequest) (*types.QueryAllCooperationDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cooperationDatas []types.CooperationData
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	cooperationDataStore := prefix.NewStore(store, types.KeyPrefix(types.CooperationDataKeyPrefix))

	pageRes, err := query.Paginate(cooperationDataStore, req.Pagination, func(key []byte, value []byte) error {
		var cooperationData types.CooperationData
		if err := k.cdc.Unmarshal(value, &cooperationData); err != nil {
			return err
		}

		cooperationDatas = append(cooperationDatas, cooperationData)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCooperationDataResponse{CooperationData: cooperationDatas, Pagination: pageRes}, nil
}

func (k Keeper) CooperationData(c context.Context, req *types.QueryGetCooperationDataRequest) (*types.QueryGetCooperationDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCooperationData(
		ctx,
		req.LabelIndex,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCooperationDataResponse{CooperationData: val}, nil
}
