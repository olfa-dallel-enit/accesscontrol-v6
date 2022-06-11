package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
)

func (k msgServer) SendRevokeCooperation(goCtx context.Context, msg *types.MsgSendRevokeCooperation) (*types.MsgSendRevokeCooperationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.RevokeCooperationPacketData

	packet.Sender = ctx.ChainID()

	// Transmit the packet
	err := k.TransmitRevokeCooperationPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendRevokeCooperationResponse{}, nil
}
