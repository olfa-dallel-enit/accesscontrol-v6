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

func createNInterDomainAclPolicy(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.InterDomainAclPolicy {
	items := make([]types.InterDomainAclPolicy, n)
	for i := range items {
		items[i].Id = keeper.AppendInterDomainAclPolicy(ctx, items[i])
	}
	return items
}

func TestInterDomainAclPolicyGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNInterDomainAclPolicy(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetInterDomainAclPolicy(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestInterDomainAclPolicyRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNInterDomainAclPolicy(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveInterDomainAclPolicy(ctx, item.Id)
		_, found := keeper.GetInterDomainAclPolicy(ctx, item.Id)
		require.False(t, found)
	}
}

func TestInterDomainAclPolicyGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNInterDomainAclPolicy(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllInterDomainAclPolicy(ctx)),
	)
}

func TestInterDomainAclPolicyCount(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	items := createNInterDomainAclPolicy(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetInterDomainAclPolicyCount(ctx))
}
