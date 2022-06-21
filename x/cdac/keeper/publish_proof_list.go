package keeper

import (
	"errors"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v2/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"

	"time"
	"github.com/spf13/cast"
)

// TransmitPublishProofListPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitPublishProofListPacket(
	ctx sdk.Context,
	packetData types.PublishProofListPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.ChannelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.ChannelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.ScopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.ChannelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvPublishProofListPacket processes packet reception
func (k Keeper) OnRecvPublishProofListPacket(ctx sdk.Context, packet channeltypes.Packet, data types.PublishProofListPacketData) (packetAck types.PublishProofListPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic
	for _, domainCooperation := range k.GetAllDomainCooperation(ctx) {
		if domainCooperation.RemoteDomain.Name != data.Sender {
			if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
				var packetToForward types.PublishProofListPacketData

				packetToForward.Data = data.Data
				packetToForward.Signature = data.Signature
				packetToForward.Sender = ctx.ChainID()

				k.TransmitPublishProofListPacket(
					ctx,
					packetToForward,
					"cdac",
					packet.DestinationChannel,
					clienttypes.ZeroHeight(),
					packet.TimeoutTimestamp,
				)
				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-publish-proof-list",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "",
					Function:    "OnRecvPublishProofListPacket",
					Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name,
				})
			}
		}
	}

	return packetAck, nil
}

// OnAcknowledgementPublishProofListPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementPublishProofListPacket(ctx sdk.Context, packet channeltypes.Packet, data types.PublishProofListPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.PublishProofListPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutPublishProofListPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutPublishProofListPacket(ctx sdk.Context, packet channeltypes.Packet, data types.PublishProofListPacketData) error {

	// TODO: packet timeout logic

	return nil
}
