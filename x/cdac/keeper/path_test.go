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

func createNPath(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Path {
	items := make([]types.Path, n)
	for i := range items {
		items[i].Id = keeper.AppendPath(ctx, items[i])
	}
	return items
}

func TestPathGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNPath(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPath(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestPathRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNPath(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePath(ctx, item.Id)
		_, found := keeper.GetPath(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPathGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNPath(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPath(ctx)),
	)
}

func TestPathCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNPath(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPathCount(ctx))
}
