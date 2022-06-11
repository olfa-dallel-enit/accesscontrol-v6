package types

import (
	"testing"

	"crossdomain/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateCooperationNetwork_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateCooperationNetwork
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateCooperationNetwork{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateCooperationNetwork{
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

func TestMsgUpdateCooperationNetwork_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateCooperationNetwork
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateCooperationNetwork{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateCooperationNetwork{
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

func TestMsgDeleteCooperationNetwork_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteCooperationNetwork
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteCooperationNetwork{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteCooperationNetwork{
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
