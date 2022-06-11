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

func createNForwardPolicy(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ForwardPolicy {
	items := make([]types.ForwardPolicy, n)
	for i := range items {
		items[i].Id = keeper.AppendForwardPolicy(ctx, items[i])
	}
	return items
}

func TestForwardPolicyGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNForwardPolicy(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetForwardPolicy(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestForwardPolicyRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNForwardPolicy(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveForwardPolicy(ctx, item.Id)
		_, found := keeper.GetForwardPolicy(ctx, item.Id)
		require.False(t, found)
	}
}

func TestForwardPolicyGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNForwardPolicy(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllForwardPolicy(ctx)),
	)
}

func TestForwardPolicyCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNForwardPolicy(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetForwardPolicyCount(ctx))
}
