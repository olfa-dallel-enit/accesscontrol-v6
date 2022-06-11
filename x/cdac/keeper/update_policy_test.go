package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/cdac/keeper"
	"crossdomain/x/cdac/types"
)

func createTestUpdatePolicy(keeper *keeper.Keeper, ctx sdk.Context) types.UpdatePolicy {
	item := types.UpdatePolicy{}
	keeper.SetUpdatePolicy(ctx, item)
	return item
}

func TestUpdatePolicyGet(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	item := createTestUpdatePolicy(keeper, ctx)
	rst, found := keeper.GetUpdatePolicy(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestUpdatePolicyRemove(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	createTestUpdatePolicy(keeper, ctx)
	keeper.RemoveUpdatePolicy(ctx)
	_, found := keeper.GetUpdatePolicy(ctx)
	require.False(t, found)
}
