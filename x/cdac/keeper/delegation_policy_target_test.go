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

func createNDelegationPolicyTarget(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DelegationPolicyTarget {
	items := make([]types.DelegationPolicyTarget, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegationPolicyTarget(ctx, items[i])
	}
	return items
}

func TestDelegationPolicyTargetGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPolicyTarget(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegationPolicyTarget(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationPolicyTargetRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPolicyTarget(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegationPolicyTarget(ctx, item.Id)
		_, found := keeper.GetDelegationPolicyTarget(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationPolicyTargetGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPolicyTarget(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegationPolicyTarget(ctx)),
	)
}

func TestDelegationPolicyTargetCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNDelegationPolicyTarget(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationPolicyTargetCount(ctx))
}
