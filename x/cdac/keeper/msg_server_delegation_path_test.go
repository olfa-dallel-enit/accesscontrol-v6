package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdac/types"
)

func TestDelegationPathMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateDelegationPath(ctx, &types.MsgCreateDelegationPath{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestDelegationPathMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDelegationPath
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDelegationPath{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegationPath{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegationPath{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateDelegationPath(ctx, &types.MsgCreateDelegationPath{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateDelegationPath(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestDelegationPathMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDelegationPath
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDelegationPath{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDelegationPath{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteDelegationPath{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateDelegationPath(ctx, &types.MsgCreateDelegationPath{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDelegationPath(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
