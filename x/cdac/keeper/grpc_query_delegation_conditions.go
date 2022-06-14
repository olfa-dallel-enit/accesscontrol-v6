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

func (k Keeper) DelegationConditionsAll(c context.Context, req *types.QueryAllDelegationConditionsRequest) (*types.QueryAllDelegationConditionsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegationConditionss []types.DelegationConditions
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	delegationConditionsStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationConditionsKey))

	pageRes, err := query.Paginate(delegationConditionsStore, req.Pagination, func(key []byte, value []byte) error {
		var delegationConditions types.DelegationConditions
		if err := k.cdc.Unmarshal(value, &delegationConditions); err != nil {
			return err
		}

		delegationConditionss = append(delegationConditionss, delegationConditions)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationConditionsResponse{DelegationConditions: delegationConditionss, Pagination: pageRes}, nil
}

func (k Keeper) DelegationConditions(c context.Context, req *types.QueryGetDelegationConditionsRequest) (*types.QueryGetDelegationConditionsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	delegationConditions, found := k.GetDelegationConditions(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationConditionsResponse{DelegationConditions: delegationConditions}, nil
}
