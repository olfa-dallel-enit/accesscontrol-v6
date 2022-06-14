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

func (k Keeper) DelegationRuleAll(c context.Context, req *types.QueryAllDelegationRuleRequest) (*types.QueryAllDelegationRuleResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegationRules []types.DelegationRule
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	delegationRuleStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationRuleKey))

	pageRes, err := query.Paginate(delegationRuleStore, req.Pagination, func(key []byte, value []byte) error {
		var delegationRule types.DelegationRule
		if err := k.cdc.Unmarshal(value, &delegationRule); err != nil {
			return err
		}

		delegationRules = append(delegationRules, delegationRule)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationRuleResponse{DelegationRule: delegationRules, Pagination: pageRes}, nil
}

func (k Keeper) DelegationRule(c context.Context, req *types.QueryGetDelegationRuleRequest) (*types.QueryGetDelegationRuleResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	delegationRule, found := k.GetDelegationRule(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationRuleResponse{DelegationRule: delegationRule}, nil
}
