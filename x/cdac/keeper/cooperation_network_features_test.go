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

func createNCooperationNetworkFeatures(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CooperationNetworkFeatures {
	items := make([]types.CooperationNetworkFeatures, n)
	for i := range items {
		items[i].Id = keeper.AppendCooperationNetworkFeatures(ctx, items[i])
	}
	return items
}

func TestCooperationNetworkFeaturesGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationNetworkFeatures(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCooperationNetworkFeatures(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCooperationNetworkFeaturesRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationNetworkFeatures(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCooperationNetworkFeatures(ctx, item.Id)
		_, found := keeper.GetCooperationNetworkFeatures(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCooperationNetworkFeaturesGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationNetworkFeatures(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCooperationNetworkFeatures(ctx)),
	)
}

func TestCooperationNetworkFeaturesCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationNetworkFeatures(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCooperationNetworkFeaturesCount(ctx))
}
