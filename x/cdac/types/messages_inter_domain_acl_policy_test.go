package types

import (
	"testing"

	"crossdomain/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateInterDomainAclPolicy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateInterDomainAclPolicy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateInterDomainAclPolicy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateInterDomainAclPolicy{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateInterDomainAclPolicy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateInterDomainAclPolicy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateInterDomainAclPolicy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateInterDomainAclPolicy{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteInterDomainAclPolicy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteInterDomainAclPolicy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteInterDomainAclPolicy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteInterDomainAclPolicy{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
