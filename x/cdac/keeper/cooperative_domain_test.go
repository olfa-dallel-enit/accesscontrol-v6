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

func createNCooperativeDomain(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CooperativeDomain {
	items := make([]types.CooperativeDomain, n)
	for i := range items {
		items[i].Id = keeper.AppendCooperativeDomain(ctx, items[i])
	}
	return items
}

func TestCooperativeDomainGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperativeDomain(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCooperativeDomain(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCooperativeDomainRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperativeDomain(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCooperativeDomain(ctx, item.Id)
		_, found := keeper.GetCooperativeDomain(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCooperativeDomainGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperativeDomain(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCooperativeDomain(ctx)),
	)
}

func TestCooperativeDomainCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNCooperativeDomain(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCooperativeDomainCount(ctx))
}
