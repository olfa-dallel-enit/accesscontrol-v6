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

func createNTimeCalculation(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.TimeCalculation {
	items := make([]types.TimeCalculation, n)
	for i := range items {
		items[i].Id = keeper.AppendTimeCalculation(ctx, items[i])
	}
	return items
}

func TestTimeCalculationGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNTimeCalculation(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTimeCalculation(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestTimeCalculationRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNTimeCalculation(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTimeCalculation(ctx, item.Id)
		_, found := keeper.GetTimeCalculation(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTimeCalculationGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNTimeCalculation(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTimeCalculation(ctx)),
	)
}

func TestTimeCalculationCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNTimeCalculation(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTimeCalculationCount(ctx))
}
