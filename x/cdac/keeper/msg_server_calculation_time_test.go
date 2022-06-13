package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdac/types"
)

func TestCalculationTimeMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCalculationTime(ctx, &types.MsgCreateCalculationTime{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestCalculationTimeMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCalculationTime
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCalculationTime{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCalculationTime{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCalculationTime{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCalculationTime(ctx, &types.MsgCreateCalculationTime{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCalculationTime(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestCalculationTimeMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCalculationTime
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCalculationTime{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCalculationTime{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCalculationTime{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCalculationTime(ctx, &types.MsgCreateCalculationTime{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCalculationTime(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
