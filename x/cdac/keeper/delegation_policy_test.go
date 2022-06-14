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

func createNDelegationPolicy(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DelegationPolicy {
	items := make([]types.DelegationPolicy, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegationPolicy(ctx, items[i])
	}
	return items
}

func TestDelegationPolicyGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPolicy(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegationPolicy(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationPolicyRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPolicy(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegationPolicy(ctx, item.Id)
		_, found := keeper.GetDelegationPolicy(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationPolicyGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPolicy(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegationPolicy(ctx)),
	)
}

func TestDelegationPolicyCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPolicy(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationPolicyCount(ctx))
}
