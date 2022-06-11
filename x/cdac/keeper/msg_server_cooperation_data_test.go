package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/x/cdac/keeper"
	"crossdomain/x/cdac/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestCooperationDataMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CdacKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateCooperationData{Creator: creator,
			LabelIndex: strconv.Itoa(i),
		}
		_, err := srv.CreateCooperationData(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetCooperationData(ctx,
			expected.LabelIndex,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestCooperationDataMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCooperationData
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateCooperationData{Creator: creator,
				LabelIndex: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateCooperationData{Creator: "B",
				LabelIndex: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateCooperationData{Creator: creator,
				LabelIndex: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CdacKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateCooperationData{Creator: creator,
				LabelIndex: strconv.Itoa(0),
			}
			_, err := srv.CreateCooperationData(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateCooperationData(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetCooperationData(ctx,
					expected.LabelIndex,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestCooperationDataMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCooperationData
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteCooperationData{Creator: creator,
				LabelIndex: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteCooperationData{Creator: "B",
				LabelIndex: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteCooperationData{Creator: creator,
				LabelIndex: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CdacKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateCooperationData(wctx, &types.MsgCreateCooperationData{Creator: creator,
				LabelIndex: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteCooperationData(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetCooperationData(ctx,
					tc.request.LabelIndex,
				)
				require.False(t, found)
			}
		})
	}
}
