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

func createNDelegationLog(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DelegationLog {
	items := make([]types.DelegationLog, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegationLog(ctx, items[i])
	}
	return items
}

func TestDelegationLogGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationLog(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegationLog(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationLogRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationLog(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegationLog(ctx, item.Id)
		_, found := keeper.GetDelegationLog(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationLogGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationLog(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegationLog(ctx)),
	)
}

func TestDelegationLogCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationLog(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationLogCount(ctx))
}
