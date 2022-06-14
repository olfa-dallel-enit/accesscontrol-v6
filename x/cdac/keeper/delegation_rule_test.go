package keeper_test

import (
	"testing"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/cdac/keeper"
	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNDelegationRule(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DelegationRule {
	items := make([]types.DelegationRule, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegationRule(ctx, items[i])
	}
	return items
}

func TestDelegationRuleGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationRule(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegationRule(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationRuleRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationRule(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegationRule(ctx, item.Id)
		_, found := keeper.GetDelegationRule(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationRuleGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationRule(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegationRule(ctx)),
	)
}

func TestDelegationRuleCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationRule(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationRuleCount(ctx))
}
