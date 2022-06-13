package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdac/types"
)

func TestInterDomainAclPolicyMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateInterDomainAclPolicy(ctx, &types.MsgCreateInterDomainAclPolicy{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestInterDomainAclPolicyMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateInterDomainAclPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateInterDomainAclPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateInterDomainAclPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateInterDomainAclPolicy{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateInterDomainAclPolicy(ctx, &types.MsgCreateInterDomainAclPolicy{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateInterDomainAclPolicy(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestInterDomainAclPolicyMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteInterDomainAclPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteInterDomainAclPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteInterDomainAclPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteInterDomainAclPolicy{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateInterDomainAclPolicy(ctx, &types.MsgCreateInterDomainAclPolicy{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteInterDomainAclPolicy(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
