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

func (k Keeper) CooperativeDomainAll(c context.Context, req *types.QueryAllCooperativeDomainRequest) (*types.QueryAllCooperativeDomainResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cooperativeDomains []types.CooperativeDomain
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	cooperativeDomainStore := prefix.NewStore(store, types.KeyPrefix(types.CooperativeDomainKey))

	pageRes, err := query.Paginate(cooperativeDomainStore, req.Pagination, func(key []byte, value []byte) error {
		var cooperativeDomain types.CooperativeDomain
		if err := k.cdc.Unmarshal(value, &cooperativeDomain); err != nil {
			return err
		}

		cooperativeDomains = append(cooperativeDomains, cooperativeDomain)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCooperativeDomainResponse{CooperativeDomain: cooperativeDomains, Pagination: pageRes}, nil
}

func (k Keeper) CooperativeDomain(c context.Context, req *types.QueryGetCooperativeDomainRequest) (*types.QueryGetCooperativeDomainResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	cooperativeDomain, found := k.GetCooperativeDomain(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCooperativeDomainResponse{CooperativeDomain: cooperativeDomain}, nil
}
