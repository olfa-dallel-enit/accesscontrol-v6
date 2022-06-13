package types

import (
	"testing"

	"crossdomain/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateCooperativeDomain_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateCooperativeDomain
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateCooperativeDomain{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateCooperativeDomain{
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

func TestMsgUpdateCooperativeDomain_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateCooperativeDomain
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateCooperativeDomain{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateCooperativeDomain{
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

func TestMsgDeleteCooperativeDomain_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteCooperativeDomain
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteCooperativeDomain{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteCooperativeDomain{
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
