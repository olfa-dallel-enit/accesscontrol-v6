package keeper_test

import (
	"strconv"
	"testing"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/cdac/keeper"
	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNCooperationData(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CooperationData {
	items := make([]types.CooperationData, n)
	for i := range items {
		items[i].LabelIndex = strconv.Itoa(i)

		keeper.SetCooperationData(ctx, items[i])
	}
	return items
}

func TestCooperationDataGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationData(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCooperationData(ctx,
			item.LabelIndex,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCooperationDataRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationData(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCooperationData(ctx,
			item.LabelIndex,
		)
		_, found := keeper.GetCooperationData(ctx,
			item.LabelIndex,
		)
		require.False(t, found)
	}
}

func TestCooperationDataGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperationData(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCooperationData(ctx)),
	)
}
