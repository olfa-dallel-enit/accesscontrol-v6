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

func (k Keeper) CooperationNetworkAll(c context.Context, req *types.QueryAllCooperationNetworkRequest) (*types.QueryAllCooperationNetworkResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cooperationNetworks []types.CooperationNetwork
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	cooperationNetworkStore := prefix.NewStore(store, types.KeyPrefix(types.CooperationNetworkKey))

	pageRes, err := query.Paginate(cooperationNetworkStore, req.Pagination, func(key []byte, value []byte) error {
		var cooperationNetwork types.CooperationNetwork
		if err := k.cdc.Unmarshal(value, &cooperationNetwork); err != nil {
			return err
		}

		cooperationNetworks = append(cooperationNetworks, cooperationNetwork)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCooperationNetworkResponse{CooperationNetwork: cooperationNetworks, Pagination: pageRes}, nil
}

func (k Keeper) CooperationNetwork(c context.Context, req *types.QueryGetCooperationNetworkRequest) (*types.QueryGetCooperationNetworkResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	cooperationNetwork, found := k.GetCooperationNetwork(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCooperationNetworkResponse{CooperationNetwork: cooperationNetwork}, nil
}
