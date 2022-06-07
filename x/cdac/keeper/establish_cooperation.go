package keeper

import (
	"errors"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v2/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"

	crossdomainTypes "crossdomain/x/crossdomain/types"
	"github.com/spf13/cast"
	"strings"
	"time"
)

// TransmitEstablishCooperationPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitEstablishCooperationPacket(
	ctx sdk.Context,
	packetData types.EstablishCooperationPacketData,
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

// OnRecvEstablishCooperationPacket processes packet reception
func (k Keeper) OnRecvEstablishCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData) (packetAck types.EstablishCooperationPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic
	found := k.FindDomainCooperationByDomainName(ctx, data.Sender)
	if !found {
		if k.IsAuthenticated(ctx, data.Sender) {
			//Check decision policy
			decisionPolicy, exist := k.crossdomainKeeper.GetDecisionPolicy(ctx)
			if exist {
				if k.CheckConstraintlessBasedDecisionPolicy(ctx, data.Sender, decisionPolicy) {
					k.AddDomainCooperation(ctx, packet, data)
					packetAck.Confirmation = "Confirmed"
					packetAck.ConfirmedBy = ctx.ChainID()
					k.ForwardCooperationData(ctx, packet, data)
				} else if k.CheckCostBasedDecisionPolicy(ctx, data.Sender, cast.ToUint64(data.Cost), decisionPolicy) {
					k.AddDomainCooperation(ctx, packet, data)
					packetAck.Confirmation = "Confirmed"
					packetAck.ConfirmedBy = ctx.ChainID()
					k.ForwardCooperationData(ctx, packet, data)
				} else if k.CheckLocationBasedDecisionPolicy(ctx, data.Sender, decisionPolicy) {
					k.AddDomainCooperation(ctx, packet, data)
					packetAck.Confirmation = "Confirmed"
					packetAck.ConfirmedBy = ctx.ChainID()
					k.ForwardCooperationData(ctx, packet, data)
				} else if k.CheckInterestBasedDecisionPolicy(ctx, data.Sender, data.Interest, decisionPolicy) {
					k.AddDomainCooperation(ctx, packet, data)
					packetAck.Confirmation = "Confirmed"
					packetAck.ConfirmedBy = ctx.ChainID()
					k.ForwardCooperationData(ctx, packet, data)
				} else if k.CheckLastUpdateBasedDecisionPolicy(ctx, data.Sender, decisionPolicy) {
					k.AddDomainCooperation(ctx, packet, data)
					packetAck.Confirmation = "Confirmed"
					packetAck.ConfirmedBy = ctx.ChainID()
					k.ForwardCooperationData(ctx, packet, data)
				} else if k.CheckValidityBasedDecisionPolicy(ctx, data.Sender, data.NotBefore, data.NotAfter, decisionPolicy) {
					k.AddDomainCooperation(ctx, packet, data)
					packetAck.Confirmation = "Confirmed"
					packetAck.ConfirmedBy = ctx.ChainID()
					k.ForwardCooperationData(ctx, packet, data)
				} else if k.CheckHybridBasedDecisionPolicy(ctx, cast.ToUint64(data.Cost), data.Sender, data.Interest, data.NotBefore, data.NotAfter, decisionPolicy) {
					k.AddDomainCooperation(ctx, packet, data)
					packetAck.Confirmation = "Confirmed"
					packetAck.ConfirmedBy = ctx.ChainID()
					k.ForwardCooperationData(ctx, packet, data)
				} else {
					k.AppendCooperationLog(ctx, types.CooperationLog{
						Creator:     ctx.ChainID(),
						Transaction: "send-establish-cooperation",
						Function:    "OnRecvEstablishCooperationPacket",
						Timestamp:   cast.ToString(time.Now()),
						Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
						Decision:    "Not confirmed: decision policy not verified",
					})
				}
			} else {
				packetAck.Confirmation = "Not confirmed"
				packetAck.ConfirmedBy = ctx.ChainID()
				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-establish-cooperation",
					Function:    "OnRecvEstablishCooperationPacket",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
					Decision:    "Not confirmed: decision policy not found",
				})
			}
		} else {
			packetAck.Confirmation = "Not confirmed"
			packetAck.ConfirmedBy = ctx.ChainID()
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
				Decision:    "Not confirmed",
			})
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-forward-cooperation-data",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
				Decision:    "Not confirmed",
			})
		}
	} else {
		packetAck.Confirmation = "Not confirmed"
		packetAck.ConfirmedBy = ctx.ChainID()
		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-establish-cooperation",
			Function:    "OnRecvEstablishCooperationPacket",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
			Decision:    "Not confirmed",
		})
		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-forward-cooperation-data",
			Function:    "OnRecvEstablishCooperationPacket",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
			Decision:    "Not confirmed",
		})
	}


	return packetAck, nil
}

// OnAcknowledgementEstablishCooperationPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementEstablishCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.EstablishCooperationPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic
		if packetAck.Confirmation == "Confirmed" {
			localDomain, _ := k.crossdomainKeeper.GetLocalDomain(ctx)
			remoteDomain, _ := k.GetDomainByName(ctx, packetAck.ConfirmedBy)
			k.AppendDomainCooperation(ctx, types.DomainCooperation{
				Creator:         ctx.ChainID(),
				Label:           ctx.ChainID() + "-" + packetAck.ConfirmedBy,
				CooperationType: "Direct",
				SourceDomain: &types.Domain{
					Creator:    ctx.ChainID(),
					Name:       ctx.ChainID(),
					DomainType: localDomain.DomainType,
					IbcConnection: &types.IbcConnection{
						Creator: ctx.ChainID(),
						Port:    packet.SourcePort,
						Channel: packet.SourceChannel,
					},
					Location: localDomain.Location,
				},
				RemoteDomain: &remoteDomain,
				Validity: &types.Validity{
					Creator:   ctx.ChainID(),
					NotBefore: data.NotBefore + " +0000 CET",
					NotAfter:  data.NotAfter + " +0000 CET",
				},
				Interest:          data.Interest,
				Cost:              cast.ToUint64(data.Cost),
				CreationTimestamp: cast.ToString(time.Now().UnixNano()),
				UpdateTimestamp:   cast.ToString(time.Now().UnixNano()),
				Status:            "Enabled",
			})
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnAcknowledgementEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + packetAck.ConfirmedBy,
				Decision:    "Confirmed: cooperation established with " + packetAck.ConfirmedBy,
			})
			//forward the new cooperation
			var packetToForward types.ForwardCooperationDataPacketData

			packetToForward.NotBefore = data.NotBefore
			packetToForward.NotAfter = data.NotAfter
			packetToForward.Interest = data.Interest
			packetToForward.Cost = data.Cost
			packetToForward.Domain1Name = ctx.ChainID()
			packetToForward.Domain2Name = packetAck.ConfirmedBy
			packetToForward.Domain1Location = localDomain.Location
			packetToForward.Domain2Location = remoteDomain.Location
			packetToForward.Sender = ctx.ChainID()

			forwardPolicy, found := k.crossdomainKeeper.GetForwardPolicy(ctx)
			if found {
				switch forwardPolicy.Mode {
				case "broadcast":
					for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
						if domainCooperation.RemoteDomain.Name != packetAck.ConfirmedBy {
							if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
								// Transmit the packet
								k.TransmitForwardCooperationDataPacket(
									ctx,
									packetToForward,
									"cdac",
									domainCooperation.SourceDomain.IbcConnection.Channel,
									clienttypes.ZeroHeight(),
									packet.TimeoutTimestamp,
								)
								k.AppendCooperationLog(ctx, types.CooperationLog{
									Creator:     ctx.ChainID(),
									Transaction: "send-forward-cooperation-data",
									Timestamp:   cast.ToString(time.Now()),
									Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
									Function:    "OnAcknowledgementEstablishCooperationPacket",
									Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in broadcast mode",
								})
							}
						}
					}
					k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, packetAck.ConfirmedBy)
				case "multicast":
					for _, domainName := range forwardPolicy.DomainList {
						if domainName != packetAck.ConfirmedBy {
							domainCooperation, isFound := k.GetDomainCooperationByDomainName(ctx, domainName)
							if isFound {
								if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
									// Transmit the packet
									k.TransmitForwardCooperationDataPacket(
										ctx,
										packetToForward,
										"cdac",
										domainCooperation.SourceDomain.IbcConnection.Channel,
										clienttypes.ZeroHeight(),
										packet.TimeoutTimestamp,
									)
									k.AppendCooperationLog(ctx, types.CooperationLog{
										Creator:     ctx.ChainID(),
										Transaction: "send-forward-cooperation-data",
										Timestamp:   cast.ToString(time.Now()),
										Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
										Function:    "OnAcknowledgementEstablishCooperationPacket",
										Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in multicast mode",
									})
								}
							}
						}
					}
					if FindString(packetAck.ConfirmedBy, forwardPolicy.DomainList) {
						k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, packetAck.ConfirmedBy)
					}
				case "unicast":
					domainName := forwardPolicy.DomainList[0]
					if domainName != packetAck.ConfirmedBy {
						domainCooperation, isFound := k.GetDomainCooperationByDomainName(ctx, domainName)
						if isFound {
							if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
								// Transmit the packet
								k.TransmitForwardCooperationDataPacket(
									ctx,
									packetToForward,
									"cdac",
									domainCooperation.SourceDomain.IbcConnection.Channel,
									clienttypes.ZeroHeight(),
									packet.TimeoutTimestamp,
								)
								k.AppendCooperationLog(ctx, types.CooperationLog{
									Creator:     ctx.ChainID(),
									Transaction: "send-forward-cooperation-data",
									Timestamp:   cast.ToString(time.Now()),
									Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
									Function:    "OnAcknowledgementEstablishCooperationPacket",
									Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in unicast mode",
								})
							}
						}
					}
					if packetAck.ConfirmedBy == forwardPolicy.DomainList[0] {
						k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, packetAck.ConfirmedBy)
					}
				case "geocast":
					for _, location := range forwardPolicy.LocationList {
						for _, domainCooperation := range k.GetAllDomainCooperationsByLocation(ctx, location) {
							if domainCooperation.RemoteDomain.Name != packetAck.ConfirmedBy {
								if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
									// Transmit the packet
									k.TransmitForwardCooperationDataPacket(
										ctx,
										packetToForward,
										"cdac",
										domainCooperation.SourceDomain.IbcConnection.Channel,
										clienttypes.ZeroHeight(),
										packet.TimeoutTimestamp,
									)
									k.AppendCooperationLog(ctx, types.CooperationLog{
										Creator:     ctx.ChainID(),
										Transaction: "send-forward-cooperation-data",
										Timestamp:   cast.ToString(time.Now()),
										Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
										Function:    "OnAcknowledgementEstablishCooperationPacket",
										Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in geocast mode",
									})
								}
							}
						}
					}
					if FindString(remoteDomain.Location, forwardPolicy.LocationList) {
						k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, packetAck.ConfirmedBy)
					}
				}
			} else {
				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-forward-cooperation-data",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
					Function:    "OnAcknowledgementEstablishCooperationPacket",
					Decision:    "Not confirmed: forward policy not found",
				})
			}
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnAcknowledgementEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + packetAck.ConfirmedBy,
				Decision:    "Not confirmed: cooperation not established by " + packetAck.ConfirmedBy,
			})
		}


		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutEstablishCooperationPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutEstablishCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData) error {

	// TODO: packet timeout logic

	return nil
}


func (k Keeper) CheckConstraintlessBasedDecisionPolicy(ctx sdk.Context, sender string, decisionPolicy crossdomainTypes.DecisionPolicy) (verified bool) {
	if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-establish-cooperation",
			Function:    "OnRecvEstablishCooperationPacket",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
			Decision:    "Confirmed: contraint-less decision policy is verified",
		})
		return true
	}
	k.AppendCooperationLog(ctx, types.CooperationLog{
		Creator:     ctx.ChainID(),
		Transaction: "send-establish-cooperation",
		Function:    "OnRecvEstablishCooperationPacket",
		Timestamp:   cast.ToString(time.Now()),
		Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
		Decision:    "Not confirmed: contraint-less decision policy is not verified",
	})
	return false
}

func (k Keeper) CheckCostBasedDecisionPolicy(ctx sdk.Context, sender string, cost uint64, decisionPolicy crossdomainTypes.DecisionPolicy) (verified bool) {
	if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if cost <= decisionPolicy.Cost {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on cost is verified",
			})
			return true
		}
	}
	k.AppendCooperationLog(ctx, types.CooperationLog{
		Creator:     ctx.ChainID(),
		Transaction: "send-establish-cooperation",
		Function:    "OnRecvEstablishCooperationPacket",
		Timestamp:   cast.ToString(time.Now()),
		Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
		Decision:    "Not confirmed: decision policy based on cost is not verified",
	})
	return false
}

func (k Keeper) CheckLocationBasedDecisionPolicy(ctx sdk.Context, sender string, decisionPolicy crossdomainTypes.DecisionPolicy) (verified bool) {
	if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		remoteDomainLocation, _ := k.GetDomainLocationByDomainName(ctx, sender)
		if FindString(remoteDomainLocation, decisionPolicy.LocationList) {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on location is verified",
			})
			return true
		}
	}
	k.AppendCooperationLog(ctx, types.CooperationLog{
		Creator:     ctx.ChainID(),
		Transaction: "send-establish-cooperation",
		Function:    "OnRecvEstablishCooperationPacket",
		Timestamp:   cast.ToString(time.Now()),
		Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
		Decision:    "Not confirmed: decision policy based on location is not verified",
	})
	return false
}

func (k Keeper) CheckInterestBasedDecisionPolicy(ctx sdk.Context, sender string, interest string, decisionPolicy crossdomainTypes.DecisionPolicy) (verified bool) {
	if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if FindString(interest, decisionPolicy.InterestList) {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on cooperation interest is verified",
			})
			return true
		}
	}
	k.AppendCooperationLog(ctx, types.CooperationLog{
		Creator:     ctx.ChainID(),
		Transaction: "send-establish-cooperation",
		Function:    "OnRecvEstablishCooperationPacket",
		Timestamp:   cast.ToString(time.Now()),
		Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
		Decision:    "Not confirmed: decision policy based on cooperation interest is not verified",
	})
	return false
}

func (k Keeper) CheckLastUpdateBasedDecisionPolicy(ctx sdk.Context, sender string, decisionPolicy crossdomainTypes.DecisionPolicy) (verified bool) {
	if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on lastUpdate time is verified",
			})
			return true
		}
	}
	k.AppendCooperationLog(ctx, types.CooperationLog{
		Creator:     ctx.ChainID(),
		Transaction: "send-establish-cooperation",
		Function:    "OnRecvEstablishCooperationPacket",
		Timestamp:   cast.ToString(time.Now()),
		Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
		Decision:    "Not confirmed: decision policy based on lastUpdate time is not verified",
	})
	return false
}

func (k Keeper) CheckValidityBasedDecisionPolicy(ctx sdk.Context, sender string, notBefore string, notAfter string, decisionPolicy crossdomainTypes.DecisionPolicy) (verified bool) {
	if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on cooperation validity is verified",
			})
			return true
		}
	}
	k.AppendCooperationLog(ctx, types.CooperationLog{
		Creator:     ctx.ChainID(),
		Transaction: "send-establish-cooperation",
		Function:    "OnRecvEstablishCooperationPacket",
		Timestamp:   cast.ToString(time.Now()),
		Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
		Decision:    "Not confirmed: decision policy based on cooperation validity is not verified",
	})
	return false
}

func (k Keeper) CheckHybridBasedDecisionPolicy(ctx sdk.Context, cost uint64, sender string, interest string, notBefore string, notAfter string, decisionPolicy crossdomainTypes.DecisionPolicy) (verified bool) {

	remoteDomainLocation, _ := k.GetDomainLocationByDomainName(ctx, sender)
	//cost & location
	if decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if cost <= decisionPolicy.Cost && FindString(remoteDomainLocation, decisionPolicy.LocationList) {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & location) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & location) is not verified",
			})
		}
		//cost & interest
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if cost <= decisionPolicy.Cost && FindString(interest, decisionPolicy.InterestList) {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & interest) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & interest) is not verified",
			})
		}
		//cost & lastUpdate
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if cost <= decisionPolicy.Cost && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & lastUpdate) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & lastUpdate) is not verified",
			})
		}
		//cost & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if cost <= decisionPolicy.Cost && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & validity) is not verified",
			})
		}
		//location & interest
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if FindString(remoteDomainLocation, decisionPolicy.LocationList) && FindString(interest, decisionPolicy.InterestList) {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (location & interest) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (location & interest) is not verified",
			})
		}
		//location & lastUpdate
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if FindString(remoteDomainLocation, decisionPolicy.LocationList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (location & lastUpdate) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (location & lastUpdate) is not verified",
			})
		}
		//location & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if FindString(remoteDomainLocation, decisionPolicy.LocationList) && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (location & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (location & validity) is not verified",
			})
		}
		//interest & lastUpdate
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if FindString(interest, decisionPolicy.InterestList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (interest & lastUpdate) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (interest & lastUpdate) is not verified",
			})
		}
		//interest & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if FindString(interest, decisionPolicy.InterestList) && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (interest & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (interest & validity) is not verified",
			})
		}
		//lastUpdate & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (lastUpdate & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (lastUpdate & validity) is not verified",
			})
		}
		//cost & location & interest
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if cost <= decisionPolicy.Cost && FindString(remoteDomainLocation, decisionPolicy.LocationList) && FindString(interest, decisionPolicy.InterestList) {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & location & interest) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & location & interest) is not verified",
			})
		}
		//cost & location & lastUpdate
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if cost <= decisionPolicy.Cost && FindString(remoteDomainLocation, decisionPolicy.LocationList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & location & lastUpdate) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & location & lastUpdate) is not verified",
			})
		}
		//cost & location & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if cost <= decisionPolicy.Cost && FindString(remoteDomainLocation, decisionPolicy.LocationList) && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & location & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & location & validity) is not verified",
			})
		}
		//cost & interest & lastUpdate
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if cost <= decisionPolicy.Cost && FindString(interest, decisionPolicy.InterestList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & interest & lastUpdate) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & interest & lastUpdate) is not verified",
			})
		}
		//cost & interest & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if cost <= decisionPolicy.Cost && FindString(interest, decisionPolicy.InterestList) && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & interest & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & interest & validity) is not verified",
			})
		}
		//cost & lastUpdate & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if cost <= decisionPolicy.Cost && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & lastUpdate & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & lastUpdate & validity) is not verified",
			})
		}
		//location & interest & lastUpdate
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if FindString(remoteDomainLocation, decisionPolicy.LocationList) && FindString(interest, decisionPolicy.InterestList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (location & interest & lastUpdate) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (location & interest & lastUpdate) is not verified",
			})
		}
		//location & interest & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if FindString(remoteDomainLocation, decisionPolicy.LocationList) && FindString(interest, decisionPolicy.InterestList) && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (location & interest & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (location & interest & validity) is not verified",
			})
		}
		//location & lastUpdate & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if FindString(remoteDomainLocation, decisionPolicy.LocationList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (location & lastUpdate & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (location & lastUpdate & validity) is not verified",
			})
		}
		//interest & lastUpdate & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if FindString(interest, decisionPolicy.InterestList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (interest & lastUpdate & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (interest & lastUpdate & validity) is not verified",
			})
		}
		//cost & location & interest & lastUpdate
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) == 0 && len(decisionPolicy.Validity.NotAfter) == 0) {
		if cost <= decisionPolicy.Cost && FindString(remoteDomainLocation, decisionPolicy.LocationList) && FindString(interest, decisionPolicy.InterestList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & location & interest & lastUpdate) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & location & interest & lastUpdate) is not verified",
			})
		}
		//cost & location & interest & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) == 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if cost <= decisionPolicy.Cost && FindString(remoteDomainLocation, decisionPolicy.LocationList) && FindString(interest, decisionPolicy.InterestList) && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & location & interest & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & location & interest & validity) is not verified",
			})
		}
		//cost & location & lastUpdate & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) == 1 && len(decisionPolicy.InterestList[0]) == 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if cost <= decisionPolicy.Cost && FindString(remoteDomainLocation, decisionPolicy.LocationList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & location & lastUpdate & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & location & lastUpdate & validity) is not verified",
			})
		}
		//cost & interest & lastUpdate & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) == 1 && len(decisionPolicy.LocationList[0]) == 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if cost <= decisionPolicy.Cost && FindString(interest, decisionPolicy.InterestList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & interest & lastUpdate & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (cost & interest & lastUpdate & validity) is not verified",
			})
		}
		//location & lastUpdate & validity & interest
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost == 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if FindString(remoteDomainLocation, decisionPolicy.LocationList) && FindString(interest, decisionPolicy.InterestList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (location & lastUpdate & validity & interest) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria (location & lastUpdate & validity & interest) is not verified",
			})
		}
		//cost & location & interest & lastUpdate & validity
	} else if decisionPolicy.Depth == 0 && decisionPolicy.Cost > 0 && len(decisionPolicy.LocationList) > 0 && len(decisionPolicy.LocationList[0]) > 0 && len(decisionPolicy.InterestList) > 0 && len(decisionPolicy.InterestList[0]) > 0 && len(decisionPolicy.LastUpdate) > 0 && (len(decisionPolicy.Validity.NotBefore) > 0 && len(decisionPolicy.Validity.NotAfter) > 0) {
		if cost <= decisionPolicy.Cost && FindString(remoteDomainLocation, decisionPolicy.LocationList) && FindString(interest, decisionPolicy.InterestList) && time.Now().UnixNano() >= cast.ToTime(decisionPolicy.LastUpdate).UnixNano() && cast.ToTime(notBefore).UnixNano() >= cast.ToTime(decisionPolicy.Validity.NotBefore).UnixNano() && cast.ToTime(notAfter).UnixNano() <= cast.ToTime(decisionPolicy.Validity.NotAfter).UnixNano() {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Confirmed: decision policy based on hybrid criteria (cost & location & interest & lastUpdate & validity) is verified",
			})
			return true
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Function:    "OnRecvEstablishCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + sender,
				Decision:    "Not confirmed: decision policy based on hybrid criteria  (cost & location & interest & lastUpdate & validity) is not verified",
			})
		}
	}
	return false
}

func FindString(stringToFound string, stringList []string) (found bool) {
	for _, s := range stringList {
		if strings.ToUpper(s) == strings.ToUpper(stringToFound) {
			return true
		}
	}
	return false
}

func (k Keeper) AddDomainCooperation(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData) {
	localDomain, _ := k.crossdomainKeeper.GetLocalDomain(ctx)
	remoteDomain, _ := k.GetDomainByName(ctx, data.Sender)
	k.AppendDomainCooperation(ctx, types.DomainCooperation{
		Creator:         ctx.ChainID(),
		Label:           ctx.ChainID() + "-" + data.Sender,
		CooperationType: "Direct",
		SourceDomain: &types.Domain{
			Creator:    ctx.ChainID(),
			Name:       ctx.ChainID(),
			DomainType: "Local",
			IbcConnection: &types.IbcConnection{
				Creator: ctx.ChainID(),
				Port:    packet.DestinationPort,
				Channel: packet.DestinationChannel,
			},
			Location: localDomain.Location,
		},
		RemoteDomain: &remoteDomain,
		Validity: &types.Validity{
			Creator:   ctx.ChainID(),
			NotBefore: data.NotBefore + " +0000 UTC",
			NotAfter:  data.NotAfter + " +0000 UTC",
		},
		Interest:          data.Interest,
		Cost:              cast.ToUint64(data.Cost),
		CreationTimestamp: cast.ToString(time.Now()),
		UpdateTimestamp:   cast.ToString(time.Now()),
		Status:            "Enabled",
	})

	k.AppendCooperationLog(ctx, types.CooperationLog{
		Creator:     ctx.ChainID(),
		Transaction: "send-establish-cooperation",
		Function:    "OnRecvEstablishCooperationPacket",
		Timestamp:   cast.ToString(time.Now()),
		Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
		Decision:    "Confirmed: cooperation is appended to the store",
	})
}

func (k Keeper) ForwardCooperationData(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData) {
	var packetToForward types.ForwardCooperationDataPacketData
	packetToForward.NotBefore = data.NotBefore
	packetToForward.NotAfter = data.NotAfter
	packetToForward.Interest = data.Interest
	packetToForward.Cost = data.Cost
	packetToForward.Domain1Name = ctx.ChainID()
	packetToForward.Domain2Name = data.Sender
	localDomainLocation, _ := k.crossdomainKeeper.GetLocalDomainLocation(ctx)
	packetToForward.Domain1Location = localDomainLocation
	remoteDomainLocation, _ := k.GetDomainLocationByDomainName(ctx, data.Sender)
	packetToForward.Domain2Location = remoteDomainLocation
	packetToForward.Sender = ctx.ChainID()

	//forward
	forwardPolicy, isFound := k.crossdomainKeeper.GetForwardPolicy(ctx)
	if isFound {
		switch forwardPolicy.Mode {
		case "broadcast":
			for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
				if domainCooperation.RemoteDomain.Name != data.Sender {
					if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
						// Transmit the packet
						k.TransmitForwardCooperationDataPacket(
							ctx,
							packetToForward,
							"cdac",
							domainCooperation.SourceDomain.IbcConnection.Channel,
							clienttypes.ZeroHeight(),
							packet.TimeoutTimestamp,
						)
						k.AppendCooperationLog(ctx, types.CooperationLog{
							Creator:     ctx.ChainID(),
							Transaction: "send-forward-cooperation-data",
							Timestamp:   cast.ToString(time.Now()),
							Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
							Function:    "OnRecvEstablishCooperationPacket",
							Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in broadcast mode",
						})
						//time.Sleep(10 * time.Second)
					}
				}
			}
			k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, data.Sender)
		case "multicast":
			for _, domainName := range forwardPolicy.DomainList {
				if domainName != data.Sender {
					domainCooperation, existed := k.GetDomainCooperationByDomainName(ctx, domainName)
					if existed {
						if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
							// Transmit the packet
							k.TransmitForwardCooperationDataPacket(
								ctx,
								packetToForward,
								"cdac",
								domainCooperation.SourceDomain.IbcConnection.Channel,
								clienttypes.ZeroHeight(),
								packet.TimeoutTimestamp,
							)
							k.AppendCooperationLog(ctx, types.CooperationLog{
								Creator:     ctx.ChainID(),
								Transaction: "send-forward-cooperation-data",
								Timestamp:   cast.ToString(time.Now()),
								Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
								Function:    "OnRecvEstablishCooperationPacket",
								Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in multicast mode",
							})
						}
					}
				}
			}
			if FindString(data.Sender, forwardPolicy.DomainList) {
				k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, data.Sender)
			}
		case "unicast":
			domainName := forwardPolicy.DomainList[0]
			if domainName != data.Sender {
				domainCooperation, existed := k.GetDomainCooperationByDomainName(ctx, domainName)
				if existed {
					if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
						// Transmit the packet
						k.TransmitForwardCooperationDataPacket(
							ctx,
							packetToForward,
							"cdac",
							domainCooperation.SourceDomain.IbcConnection.Channel,
							clienttypes.ZeroHeight(),
							packet.TimeoutTimestamp,
						)
						k.AppendCooperationLog(ctx, types.CooperationLog{
							Creator:     ctx.ChainID(),
							Transaction: "send-forward-cooperation-data",
							Timestamp:   cast.ToString(time.Now()),
							Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
							Function:    "OnRecvEstablishCooperationPacket",
							Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in unicast mode",
						})
					}
				}
			}
			if data.Sender == forwardPolicy.DomainList[0] {
				k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, data.Sender)
			}
		case "geocast":
			for _, location := range forwardPolicy.LocationList {
				for _, domainCooperation := range k.GetAllDomainCooperationsByLocation(ctx, location) {
					if domainCooperation.RemoteDomain.Name != data.Sender {
						if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
							// Transmit the packet
							k.TransmitForwardCooperationDataPacket(
								ctx,
								packetToForward,
								"cdac",
								domainCooperation.SourceDomain.IbcConnection.Channel,
								clienttypes.ZeroHeight(),
								packet.TimeoutTimestamp,
							)
							k.AppendCooperationLog(ctx, types.CooperationLog{
								Creator:     ctx.ChainID(),
								Transaction: "send-forward-cooperation-data",
								Timestamp:   cast.ToString(time.Now()),
								Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
								Function:    "OnRecvEstablishCooperationPacket",
								Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in geocast mode",
							})
						}
					}
				}
			}
			if FindString(remoteDomainLocation, forwardPolicy.LocationList) {
				k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, data.Sender)
			}
		}
	} else {
		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-forward-cooperation-data",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
			Function:    "OnRecvEstablishCooperationPacket",
			Decision:    "Not confirmed: forward policy not found",
		})
	}
}

func (k Keeper) ForwardCooperationsToNewCooperativeDomain(ctx sdk.Context, packet channeltypes.Packet, domainName string) {
	for _, domainCooperation := range k.GetAllDomainCooperation(ctx) {
		if domainCooperation.RemoteDomain.Name != domainName {
			if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
				var packetToForward types.ForwardCooperationDataPacketData

				packetToForward.NotBefore = domainCooperation.Validity.NotBefore
				packetToForward.NotAfter = domainCooperation.Validity.NotAfter
				packetToForward.Interest = domainCooperation.Interest
				packetToForward.Cost = cast.ToString(domainCooperation.Cost)
				packetToForward.Domain1Name = domainCooperation.SourceDomain.Name
				packetToForward.Domain2Name = domainCooperation.RemoteDomain.Name
				packetToForward.Domain1Location = domainCooperation.SourceDomain.Location
				packetToForward.Domain2Location = domainCooperation.RemoteDomain.Location
				packetToForward.Sender = ctx.ChainID()

				k.TransmitForwardCooperationDataPacket(
					ctx,
					packetToForward,
					"cdac",
					packet.DestinationChannel,
					clienttypes.ZeroHeight(),
					packet.TimeoutTimestamp,
				)
				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-forward-cooperation-data",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
					Function:    "OnRecvEstablishCooperationPacket",
					Decision:    "Confirmed: new cooperation data is forwarded to " + domainName,
				})
				//time.Sleep(10 * time.Second)
			}
		}
	}
}
