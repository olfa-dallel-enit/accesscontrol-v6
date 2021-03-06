package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdac/types"
)

func TestForwardPolicyMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateForwardPolicy(ctx, &types.MsgCreateForwardPolicy{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestForwardPolicyMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateForwardPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateForwardPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateForwardPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateForwardPolicy{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateForwardPolicy(ctx, &types.MsgCreateForwardPolicy{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateForwardPolicy(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestForwardPolicyMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteForwardPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteForwardPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteForwardPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteForwardPolicy{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateForwardPolicy(ctx, &types.MsgCreateForwardPolicy{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteForwardPolicy(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
