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

func createNDomainMap(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DomainMap {
	items := make([]types.DomainMap, n)
	for i := range items {
		items[i].DomainIndex = strconv.Itoa(i)

		keeper.SetDomainMap(ctx, items[i])
	}
	return items
}

func TestDomainMapGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDomainMap(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetDomainMap(ctx,
			item.DomainIndex,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestDomainMapRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDomainMap(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDomainMap(ctx,
			item.DomainIndex,
		)
		_, found := keeper.GetDomainMap(ctx,
			item.DomainIndex,
		)
		require.False(t, found)
	}
}

func TestDomainMapGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDomainMap(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDomainMap(ctx)),
	)
}
