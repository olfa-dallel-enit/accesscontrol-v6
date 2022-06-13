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

func (k Keeper) TimeCalculationAll(c context.Context, req *types.QueryAllTimeCalculationRequest) (*types.QueryAllTimeCalculationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var timeCalculations []types.TimeCalculation
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	timeCalculationStore := prefix.NewStore(store, types.KeyPrefix(types.TimeCalculationKey))

	pageRes, err := query.Paginate(timeCalculationStore, req.Pagination, func(key []byte, value []byte) error {
		var timeCalculation types.TimeCalculation
		if err := k.cdc.Unmarshal(value, &timeCalculation); err != nil {
			return err
		}

		timeCalculations = append(timeCalculations, timeCalculation)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTimeCalculationResponse{TimeCalculation: timeCalculations, Pagination: pageRes}, nil
}

func (k Keeper) TimeCalculation(c context.Context, req *types.QueryGetTimeCalculationRequest) (*types.QueryGetTimeCalculationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	timeCalculation, found := k.GetTimeCalculation(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTimeCalculationResponse{TimeCalculation: timeCalculation}, nil
}
