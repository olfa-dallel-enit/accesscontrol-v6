package keeper

import (
	"context"

	"crossdomain/x/cdac/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
	"github.com/spf13/cast"
)

func (k msgServer) SendPublishProofList(goCtx context.Context, msg *types.MsgSendPublishProofList) (*types.MsgSendPublishProofListResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.PublishProofListPacketData

	packet.Sender = ctx.ChainID()
	packet.Data = cast.ToString("dW50cnVzdGVkIGNvbW1lbnQ6IHJzaWduIGVuY3J5Cg==")
	packet.Signature = cast.ToString("dW50cnVzdGVkIGNvbW1lbnQ6IHJzaWduIGVWGFMWFk9Cg==")
	
	//"dW50cnVzdGVkIGNvbW1lbnQ6IHJzaWduIGVuY3J5cHRlZCBzZWNyZXQga2V5ClJXUlRZMEl5UEd4eEc1eHZ5aXlyZUw5dkRuZUROK1ZJZjZpT0xvdVRKMzZ4aWFJY3poQUFBQkFBQUFBQUFBQUFBQUlBQUFBQW0wZHc2RHUxcnVjSGU1RjQyS3hBZDN1SlpYMWVFQ3FPSmFxWHUrNlhrb2FpMnkwTXFEYUVhSHoxV0FOeVpJOERlSUs0Z3BPZXZXWmZGMDJxazMrcjN0M0lwUDRXb09Qd0poRVVVUGI1ZDh5UGpvZ1dCUVY0T1pxZzllQ0tTQys3am5lZDdsWGFMWFk9Cg=="

	// Transmit the packet
	err := k.TransmitPublishProofListPacket(
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

	return &types.MsgSendPublishProofListResponse{}, nil
}
