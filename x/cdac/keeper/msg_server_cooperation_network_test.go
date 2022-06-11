package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdac/types"
)

func TestCooperationNetworkMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCooperationNetwork(ctx, &types.MsgCreateCooperationNetwork{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestCooperationNetworkMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCooperationNetwork
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCooperationNetwork{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCooperationNetwork{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCooperationNetwork{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCooperationNetwork(ctx, &types.MsgCreateCooperationNetwork{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCooperationNetwork(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestCooperationNetworkMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCooperationNetwork
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCooperationNetwork{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCooperationNetwork{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCooperationNetwork{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCooperationNetwork(ctx, &types.MsgCreateCooperationNetwork{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCooperationNetwork(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
