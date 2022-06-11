package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
)

func (k msgServer) SendExchangeCooperationData(goCtx context.Context, msg *types.MsgSendExchangeCooperationData) (*types.MsgSendExchangeCooperationDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.ExchangeCooperationDataPacketData

	packet.Sender = ctx.ChainID()

	// Transmit the packet
	err := k.TransmitExchangeCooperationDataPacket(
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

	return &types.MsgSendExchangeCooperationDataResponse{}, nil
}
