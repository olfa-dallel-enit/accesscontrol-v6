package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdac/types"
)

func TestCooperativeDomainMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCooperativeDomain(ctx, &types.MsgCreateCooperativeDomain{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestCooperativeDomainMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCooperativeDomain
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCooperativeDomain{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCooperativeDomain{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCooperativeDomain{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCooperativeDomain(ctx, &types.MsgCreateCooperativeDomain{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCooperativeDomain(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestCooperativeDomainMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCooperativeDomain
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCooperativeDomain{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCooperativeDomain{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCooperativeDomain{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCooperativeDomain(ctx, &types.MsgCreateCooperativeDomain{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCooperativeDomain(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
