package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"

	"crypto/rsa"
	"encoding/base64"
	"crypto/rand"
	"github.com/spf13/cast"
	"math/big"
	"time"
)

func (k msgServer) SendModifyCooperationCost(goCtx context.Context, msg *types.MsgSendModifyCooperationCost) (*types.MsgSendModifyCooperationCostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.ModifyCooperationCostPacketData


	remoteDomainName, found := k.GetRemoteDomainNameByChannel(ctx, msg.ChannelID)

	if found {
		
		publicKey, _ := k.GetDomainPublicKeyByDomainName(ctx, remoteDomainName)

		rsaPublicKey := rsa.PublicKey{
			N: new(big.Int).SetUint64(publicKey.N),
			E: cast.ToInt(publicKey.E),
		}
		encryptedBytes, _ := rsa.EncryptPKCS1v15(rand.Reader, &rsaPublicKey, []byte(msg.Cost))
		encryptedCost := base64.StdEncoding.EncodeToString(encryptedBytes)

		packet.Cost =  encryptedCost//msg.Cost
		packet.Sender = ctx.ChainID()

		// Transmit the packet
		err := k.TransmitModifyCooperationCostPacket(
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

		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "msg-server-modify-cooperation-cost",
			Function:    "SendModifyCooperationCost",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Encrypted message" + encryptedCost,
			Decision:    "Cooperation cost modification is confirmed",
		})
	}

	return &types.MsgSendModifyCooperationCostResponse{}, nil
}
