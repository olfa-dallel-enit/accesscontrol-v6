package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
)

func (k msgServer) SendForwardCooperationData(goCtx context.Context, msg *types.MsgSendForwardCooperationData) (*types.MsgSendForwardCooperationDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.ForwardCooperationDataPacketData
	packet.NotBefore = msg.NotBefore
	packet.NotAfter = msg.NotAfter
	packet.Interest = msg.Interest
	packet.Cost = msg.Cost
	packet.Domain1Name = msg.Domain1Name
	packet.Domain2Name = msg.Domain2Name
	packet.Domain1Location = msg.Domain1Location
	packet.Domain2Location = msg.Domain2Location
	packet.Sender = ctx.ChainID()

	// Transmit the packet
	err := k.TransmitForwardCooperationDataPacket(
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

	return &types.MsgSendForwardCooperationDataResponse{}, nil
}
