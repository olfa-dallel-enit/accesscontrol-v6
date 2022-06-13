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

func (k Keeper) CalculationTimeAll(c context.Context, req *types.QueryAllCalculationTimeRequest) (*types.QueryAllCalculationTimeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var calculationTimes []types.CalculationTime
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	calculationTimeStore := prefix.NewStore(store, types.KeyPrefix(types.CalculationTimeKey))

	pageRes, err := query.Paginate(calculationTimeStore, req.Pagination, func(key []byte, value []byte) error {
		var calculationTime types.CalculationTime
		if err := k.cdc.Unmarshal(value, &calculationTime); err != nil {
			return err
		}

		calculationTimes = append(calculationTimes, calculationTime)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCalculationTimeResponse{CalculationTime: calculationTimes, Pagination: pageRes}, nil
}

func (k Keeper) CalculationTime(c context.Context, req *types.QueryGetCalculationTimeRequest) (*types.QueryGetCalculationTimeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	calculationTime, found := k.GetCalculationTime(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCalculationTimeResponse{CalculationTime: calculationTime}, nil
}
