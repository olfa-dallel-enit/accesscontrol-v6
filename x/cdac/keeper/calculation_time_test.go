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

func createNCalculationTime(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CalculationTime {
	items := make([]types.CalculationTime, n)
	for i := range items {
		items[i].Id = keeper.AppendCalculationTime(ctx, items[i])
	}
	return items
}

func TestCalculationTimeGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCalculationTime(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCalculationTime(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCalculationTimeRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCalculationTime(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCalculationTime(ctx, item.Id)
		_, found := keeper.GetCalculationTime(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCalculationTimeGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCalculationTime(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCalculationTime(ctx)),
	)
}

func TestCalculationTimeCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCalculationTime(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCalculationTimeCount(ctx))
}
