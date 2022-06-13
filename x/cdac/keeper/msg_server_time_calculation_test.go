package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdac/types"
)

func TestTimeCalculationMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateTimeCalculation(ctx, &types.MsgCreateTimeCalculation{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestTimeCalculationMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateTimeCalculation
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateTimeCalculation{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTimeCalculation{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTimeCalculation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateTimeCalculation(ctx, &types.MsgCreateTimeCalculation{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateTimeCalculation(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestTimeCalculationMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteTimeCalculation
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteTimeCalculation{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteTimeCalculation{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteTimeCalculation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateTimeCalculation(ctx, &types.MsgCreateTimeCalculation{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteTimeCalculation(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
