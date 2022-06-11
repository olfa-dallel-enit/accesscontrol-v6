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

func TestDomainMapMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CdacKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateDomainMap{Creator: creator,
			DomainIndex: strconv.Itoa(i),
		}
		_, err := srv.CreateDomainMap(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetDomainMap(ctx,
			expected.DomainIndex,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestDomainMapMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDomainMap
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateDomainMap{Creator: creator,
				DomainIndex: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateDomainMap{Creator: "B",
				DomainIndex: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateDomainMap{Creator: creator,
				DomainIndex: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CdacKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateDomainMap{Creator: creator,
				DomainIndex: strconv.Itoa(0),
			}
			_, err := srv.CreateDomainMap(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateDomainMap(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetDomainMap(ctx,
					expected.DomainIndex,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestDomainMapMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDomainMap
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteDomainMap{Creator: creator,
				DomainIndex: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteDomainMap{Creator: "B",
				DomainIndex: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteDomainMap{Creator: creator,
				DomainIndex: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CdacKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateDomainMap(wctx, &types.MsgCreateDomainMap{Creator: creator,
				DomainIndex: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteDomainMap(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetDomainMap(ctx,
					tc.request.DomainIndex,
				)
				require.False(t, found)
			}
		})
	}
}
