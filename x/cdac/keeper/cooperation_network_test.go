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

func createNCooperationNetwork(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CooperationNetwork {
	items := make([]types.CooperationNetwork, n)
	for i := range items {
		items[i].Id = keeper.AppendCooperationNetwork(ctx, items[i])
	}
	return items
}

func TestCooperationNetworkGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationNetwork(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCooperationNetwork(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCooperationNetworkRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationNetwork(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCooperationNetwork(ctx, item.Id)
		_, found := keeper.GetCooperationNetwork(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCooperationNetworkGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationNetwork(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCooperationNetwork(ctx)),
	)
}

func TestCooperationNetworkCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationNetwork(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCooperationNetworkCount(ctx))
}
