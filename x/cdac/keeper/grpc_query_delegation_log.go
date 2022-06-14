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

func (k Keeper) DelegationLogAll(c context.Context, req *types.QueryAllDelegationLogRequest) (*types.QueryAllDelegationLogResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegationLogs []types.DelegationLog
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	delegationLogStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationLogKey))

	pageRes, err := query.Paginate(delegationLogStore, req.Pagination, func(key []byte, value []byte) error {
		var delegationLog types.DelegationLog
		if err := k.cdc.Unmarshal(value, &delegationLog); err != nil {
			return err
		}

		delegationLogs = append(delegationLogs, delegationLog)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationLogResponse{DelegationLog: delegationLogs, Pagination: pageRes}, nil
}

func (k Keeper) DelegationLog(c context.Context, req *types.QueryGetDelegationLogRequest) (*types.QueryGetDelegationLogResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	delegationLog, found := k.GetDelegationLog(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationLogResponse{DelegationLog: delegationLog}, nil
}
