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

func createNDelegationPath(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DelegationPath {
	items := make([]types.DelegationPath, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegationPath(ctx, items[i])
	}
	return items
}

func TestDelegationPathGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPath(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegationPath(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationPathRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPath(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegationPath(ctx, item.Id)
		_, found := keeper.GetDelegationPath(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationPathGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPath(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegationPath(ctx)),
	)
}

func TestDelegationPathCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPath(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationPathCount(ctx))
}
