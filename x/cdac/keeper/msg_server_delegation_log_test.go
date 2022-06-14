package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdac/types"
)

func TestDelegationLogMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateDelegationLog(ctx, &types.MsgCreateDelegationLog{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestDelegationLogMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDelegationLog
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDelegationLog{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegationLog{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegationLog{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateDelegationLog(ctx, &types.MsgCreateDelegationLog{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateDelegationLog(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestDelegationLogMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDelegationLog
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDelegationLog{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDelegationLog{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteDelegationLog{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateDelegationLog(ctx, &types.MsgCreateDelegationLog{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDelegationLog(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
