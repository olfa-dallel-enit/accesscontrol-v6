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

func createNInterDomainDclPolicy(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.InterDomainDclPolicy {
	items := make([]types.InterDomainDclPolicy, n)
	for i := range items {
		items[i].Id = keeper.AppendInterDomainDclPolicy(ctx, items[i])
	}
	return items
}

func TestInterDomainDclPolicyGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNInterDomainDclPolicy(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetInterDomainDclPolicy(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestInterDomainDclPolicyRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNInterDomainDclPolicy(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveInterDomainDclPolicy(ctx, item.Id)
		_, found := keeper.GetInterDomainDclPolicy(ctx, item.Id)
		require.False(t, found)
	}
}

func TestInterDomainDclPolicyGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNInterDomainDclPolicy(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllInterDomainDclPolicy(ctx)),
	)
}

func TestInterDomainDclPolicyCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNInterDomainDclPolicy(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetInterDomainDclPolicyCount(ctx))
}
