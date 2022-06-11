package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdac/types"
)

func TestCooperationNetworkFeaturesMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCooperationNetworkFeatures(ctx, &types.MsgCreateCooperationNetworkFeatures{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestCooperationNetworkFeaturesMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCooperationNetworkFeatures
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCooperationNetworkFeatures{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCooperationNetworkFeatures{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCooperationNetworkFeatures{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCooperationNetworkFeatures(ctx, &types.MsgCreateCooperationNetworkFeatures{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCooperationNetworkFeatures(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestCooperationNetworkFeaturesMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCooperationNetworkFeatures
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCooperationNetworkFeatures{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCooperationNetworkFeatures{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCooperationNetworkFeatures{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCooperationNetworkFeatures(ctx, &types.MsgCreateCooperationNetworkFeatures{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCooperationNetworkFeatures(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
