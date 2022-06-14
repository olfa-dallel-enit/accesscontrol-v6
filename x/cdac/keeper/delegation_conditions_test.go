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

func createNDelegationConditions(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DelegationConditions {
	items := make([]types.DelegationConditions, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegationConditions(ctx, items[i])
	}
	return items
}

func TestDelegationConditionsGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationConditions(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegationConditions(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationConditionsRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationConditions(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegationConditions(ctx, item.Id)
		_, found := keeper.GetDelegationConditions(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationConditionsGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationConditions(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegationConditions(ctx)),
	)
}

func TestDelegationConditionsCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationConditions(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationConditionsCount(ctx))
}
