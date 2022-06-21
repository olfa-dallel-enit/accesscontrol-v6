package cdac

import (
	"fmt"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	capabilitytypes "github.com/cosmos/cosmos-sdk/x/capability/types"
	channeltypes "github.com/cosmos/ibc-go/v2/modules/core/04-channel/types"
	porttypes "github.com/cosmos/ibc-go/v2/modules/core/05-port/types"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"
	ibcexported "github.com/cosmos/ibc-go/v2/modules/core/exported"
)

// OnChanOpenInit implements the IBCModule interface
func (am AppModule) OnChanOpenInit(
	ctx sdk.Context,
	order channeltypes.Order,
	connectionHops []string,
	portID string,
	channelID string,
	chanCap *capabilitytypes.Capability,
	counterparty channeltypes.Counterparty,
	version string,
) error {

	// Require portID is the portID module is bound to
	boundPort := am.keeper.GetPort(ctx)
	if boundPort != portID {
		return sdkerrors.Wrapf(porttypes.ErrInvalidPort, "invalid port: %s, expected %s", portID, boundPort)
	}

	if version != types.Version {
		return sdkerrors.Wrapf(types.ErrInvalidVersion, "got %s, expected %s", version, types.Version)
	}

	// Claim channel capability passed back by IBC module
	if err := am.keeper.ClaimCapability(ctx, chanCap, host.ChannelCapabilityPath(portID, channelID)); err != nil {
		return err
	}

	return nil
}

// OnChanOpenTry implements the IBCModule interface
func (am AppModule) OnChanOpenTry(
	ctx sdk.Context,
	order channeltypes.Order,
	connectionHops []string,
	portID,
	channelID string,
	chanCap *capabilitytypes.Capability,
	counterparty channeltypes.Counterparty,
	version,
	counterpartyVersion string,
) error {

	// Require portID is the portID module is bound to
	boundPort := am.keeper.GetPort(ctx)
	if boundPort != portID {
		return sdkerrors.Wrapf(porttypes.ErrInvalidPort, "invalid port: %s, expected %s", portID, boundPort)
	}

	if version != types.Version {
		return sdkerrors.Wrapf(types.ErrInvalidVersion, "got: %s, expected %s", version, types.Version)
	}

	if counterpartyVersion != types.Version {
		return sdkerrors.Wrapf(types.ErrInvalidVersion, "invalid counterparty version: got: %s, expected %s", counterpartyVersion, types.Version)
	}

	// Module may have already claimed capability in OnChanOpenInit in the case of crossing hellos
	// (ie chainA and chainB both call ChanOpenInit before one of them calls ChanOpenTry)
	// If module can already authenticate the capability then module already owns it so we don't need to claim
	// Otherwise, module does not have channel capability and we must claim it from IBC
	if !am.keeper.AuthenticateCapability(ctx, chanCap, host.ChannelCapabilityPath(portID, channelID)) {
		// Only claim channel capability passed back by IBC module if we do not already own it
		if err := am.keeper.ClaimCapability(ctx, chanCap, host.ChannelCapabilityPath(portID, channelID)); err != nil {
			return err
		}
	}

	return nil
}

// OnChanOpenAck implements the IBCModule interface
func (am AppModule) OnChanOpenAck(
	ctx sdk.Context,
	portID,
	channelID string,
	counterpartyVersion string,
) error {
	if counterpartyVersion != types.Version {
		return sdkerrors.Wrapf(types.ErrInvalidVersion, "invalid counterparty version: %s, expected %s", counterpartyVersion, types.Version)
	}
	return nil
}

// OnChanOpenConfirm implements the IBCModule interface
func (am AppModule) OnChanOpenConfirm(
	ctx sdk.Context,
	portID,
	channelID string,
) error {
	return nil
}

// OnChanCloseInit implements the IBCModule interface
func (am AppModule) OnChanCloseInit(
	ctx sdk.Context,
	portID,
	channelID string,
) error {
	// Disallow user-initiated channel closing for channels
	return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "user cannot close channel")
}

// OnChanCloseConfirm implements the IBCModule interface
func (am AppModule) OnChanCloseConfirm(
	ctx sdk.Context,
	portID,
	channelID string,
) error {
	return nil
}

// OnRecvPacket implements the IBCModule interface
func (am AppModule) OnRecvPacket(
	ctx sdk.Context,
	modulePacket channeltypes.Packet,
	relayer sdk.AccAddress,
) ibcexported.Acknowledgement {
	var ack channeltypes.Acknowledgement

	// this line is used by starport scaffolding # oracle/packet/module/recv

	var modulePacketData types.CdacPacketData
	if err := modulePacketData.Unmarshal(modulePacket.GetData()); err != nil {
		return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "cannot unmarshal packet data: %s", err.Error()).Error())
	}

	// Dispatch packet
	switch packet := modulePacketData.Packet.(type) {
	case *types.CdacPacketData_AuthenticateDomainPacket:
		packetAck, err := am.keeper.OnRecvAuthenticateDomainPacket(ctx, modulePacket, *packet.AuthenticateDomainPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeAuthenticateDomainPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_EstablishCooperationPacket:
		packetAck, err := am.keeper.OnRecvEstablishCooperationPacket(ctx, modulePacket, *packet.EstablishCooperationPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeEstablishCooperationPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_ForwardCooperationDataPacket:
		packetAck, err := am.keeper.OnRecvForwardCooperationDataPacket(ctx, modulePacket, *packet.ForwardCooperationDataPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeForwardCooperationDataPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_ExchangeCooperationDataPacket:
		packetAck, err := am.keeper.OnRecvExchangeCooperationDataPacket(ctx, modulePacket, *packet.ExchangeCooperationDataPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeExchangeCooperationDataPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_ModifyCooperationCostPacket:
		packetAck, err := am.keeper.OnRecvModifyCooperationCostPacket(ctx, modulePacket, *packet.ModifyCooperationCostPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeModifyCooperationCostPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_DisableCooperationPacket:
		packetAck, err := am.keeper.OnRecvDisableCooperationPacket(ctx, modulePacket, *packet.DisableCooperationPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeDisableCooperationPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_EnableCooperationPacket:
		packetAck, err := am.keeper.OnRecvEnableCooperationPacket(ctx, modulePacket, *packet.EnableCooperationPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeEnableCooperationPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_ModifyCooperationValidityPacket:
		packetAck, err := am.keeper.OnRecvModifyCooperationValidityPacket(ctx, modulePacket, *packet.ModifyCooperationValidityPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeModifyCooperationValidityPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_ModifyCooperationInterestPacket:
		packetAck, err := am.keeper.OnRecvModifyCooperationInterestPacket(ctx, modulePacket, *packet.ModifyCooperationInterestPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeModifyCooperationInterestPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_RevokeCooperationPacket:
		packetAck, err := am.keeper.OnRecvRevokeCooperationPacket(ctx, modulePacket, *packet.RevokeCooperationPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypeRevokeCooperationPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
	case *types.CdacPacketData_PublishProofListPacket:
		packetAck, err := am.keeper.OnRecvPublishProofListPacket(ctx, modulePacket, *packet.PublishProofListPacket)
		if err != nil {
			ack = channeltypes.NewErrorAcknowledgement(err.Error())
		} else {
			// Encode packet acknowledgment
			packetAckBytes, err := types.ModuleCdc.MarshalJSON(&packetAck)
			if err != nil {
				return channeltypes.NewErrorAcknowledgement(sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error()).Error())
			}
			ack = channeltypes.NewResultAcknowledgement(sdk.MustSortJSON(packetAckBytes))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				types.EventTypePublishProofListPacket,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyAckSuccess, fmt.Sprintf("%t", err != nil)),
			),
		)
		// this line is used by starport scaffolding # ibc/packet/module/recv
	default:
		errMsg := fmt.Sprintf("unrecognized %s packet type: %T", types.ModuleName, packet)
		return channeltypes.NewErrorAcknowledgement(errMsg)
	}

	// NOTE: acknowledgement will be written synchronously during IBC handler execution.
	return ack
}

// OnAcknowledgementPacket implements the IBCModule interface
func (am AppModule) OnAcknowledgementPacket(
	ctx sdk.Context,
	modulePacket channeltypes.Packet,
	acknowledgement []byte,
	relayer sdk.AccAddress,
) error {
	var ack channeltypes.Acknowledgement
	if err := types.ModuleCdc.UnmarshalJSON(acknowledgement, &ack); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "cannot unmarshal packet acknowledgement: %v", err)
	}

	// this line is used by starport scaffolding # oracle/packet/module/ack

	var modulePacketData types.CdacPacketData
	if err := modulePacketData.Unmarshal(modulePacket.GetData()); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "cannot unmarshal packet data: %s", err.Error())
	}

	var eventType string

	// Dispatch packet
	switch packet := modulePacketData.Packet.(type) {
	case *types.CdacPacketData_AuthenticateDomainPacket:
		err := am.keeper.OnAcknowledgementAuthenticateDomainPacket(ctx, modulePacket, *packet.AuthenticateDomainPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeAuthenticateDomainPacket
	case *types.CdacPacketData_EstablishCooperationPacket:
		err := am.keeper.OnAcknowledgementEstablishCooperationPacket(ctx, modulePacket, *packet.EstablishCooperationPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeEstablishCooperationPacket
	case *types.CdacPacketData_ForwardCooperationDataPacket:
		err := am.keeper.OnAcknowledgementForwardCooperationDataPacket(ctx, modulePacket, *packet.ForwardCooperationDataPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeForwardCooperationDataPacket
	case *types.CdacPacketData_ExchangeCooperationDataPacket:
		err := am.keeper.OnAcknowledgementExchangeCooperationDataPacket(ctx, modulePacket, *packet.ExchangeCooperationDataPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeExchangeCooperationDataPacket
	case *types.CdacPacketData_ModifyCooperationCostPacket:
		err := am.keeper.OnAcknowledgementModifyCooperationCostPacket(ctx, modulePacket, *packet.ModifyCooperationCostPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeModifyCooperationCostPacket
	case *types.CdacPacketData_DisableCooperationPacket:
		err := am.keeper.OnAcknowledgementDisableCooperationPacket(ctx, modulePacket, *packet.DisableCooperationPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeDisableCooperationPacket
	case *types.CdacPacketData_EnableCooperationPacket:
		err := am.keeper.OnAcknowledgementEnableCooperationPacket(ctx, modulePacket, *packet.EnableCooperationPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeEnableCooperationPacket
	case *types.CdacPacketData_ModifyCooperationValidityPacket:
		err := am.keeper.OnAcknowledgementModifyCooperationValidityPacket(ctx, modulePacket, *packet.ModifyCooperationValidityPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeModifyCooperationValidityPacket
	case *types.CdacPacketData_ModifyCooperationInterestPacket:
		err := am.keeper.OnAcknowledgementModifyCooperationInterestPacket(ctx, modulePacket, *packet.ModifyCooperationInterestPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeModifyCooperationInterestPacket
	case *types.CdacPacketData_RevokeCooperationPacket:
		err := am.keeper.OnAcknowledgementRevokeCooperationPacket(ctx, modulePacket, *packet.RevokeCooperationPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypeRevokeCooperationPacket
	case *types.CdacPacketData_PublishProofListPacket:
		err := am.keeper.OnAcknowledgementPublishProofListPacket(ctx, modulePacket, *packet.PublishProofListPacket, ack)
		if err != nil {
			return err
		}
		eventType = types.EventTypePublishProofListPacket
		// this line is used by starport scaffolding # ibc/packet/module/ack
	default:
		errMsg := fmt.Sprintf("unrecognized %s packet type: %T", types.ModuleName, packet)
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
	}

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			eventType,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyAck, fmt.Sprintf("%v", ack)),
		),
	)

	switch resp := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Result:
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				eventType,
				sdk.NewAttribute(types.AttributeKeyAckSuccess, string(resp.Result)),
			),
		)
	case *channeltypes.Acknowledgement_Error:
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				eventType,
				sdk.NewAttribute(types.AttributeKeyAckError, resp.Error),
			),
		)
	}

	return nil
}

// OnTimeoutPacket implements the IBCModule interface
func (am AppModule) OnTimeoutPacket(
	ctx sdk.Context,
	modulePacket channeltypes.Packet,
	relayer sdk.AccAddress,
) error {
	var modulePacketData types.CdacPacketData
	if err := modulePacketData.Unmarshal(modulePacket.GetData()); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "cannot unmarshal packet data: %s", err.Error())
	}

	// Dispatch packet
	switch packet := modulePacketData.Packet.(type) {
	case *types.CdacPacketData_AuthenticateDomainPacket:
		err := am.keeper.OnTimeoutAuthenticateDomainPacket(ctx, modulePacket, *packet.AuthenticateDomainPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_EstablishCooperationPacket:
		err := am.keeper.OnTimeoutEstablishCooperationPacket(ctx, modulePacket, *packet.EstablishCooperationPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_ForwardCooperationDataPacket:
		err := am.keeper.OnTimeoutForwardCooperationDataPacket(ctx, modulePacket, *packet.ForwardCooperationDataPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_ExchangeCooperationDataPacket:
		err := am.keeper.OnTimeoutExchangeCooperationDataPacket(ctx, modulePacket, *packet.ExchangeCooperationDataPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_ModifyCooperationCostPacket:
		err := am.keeper.OnTimeoutModifyCooperationCostPacket(ctx, modulePacket, *packet.ModifyCooperationCostPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_DisableCooperationPacket:
		err := am.keeper.OnTimeoutDisableCooperationPacket(ctx, modulePacket, *packet.DisableCooperationPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_EnableCooperationPacket:
		err := am.keeper.OnTimeoutEnableCooperationPacket(ctx, modulePacket, *packet.EnableCooperationPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_ModifyCooperationValidityPacket:
		err := am.keeper.OnTimeoutModifyCooperationValidityPacket(ctx, modulePacket, *packet.ModifyCooperationValidityPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_ModifyCooperationInterestPacket:
		err := am.keeper.OnTimeoutModifyCooperationInterestPacket(ctx, modulePacket, *packet.ModifyCooperationInterestPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_RevokeCooperationPacket:
		err := am.keeper.OnTimeoutRevokeCooperationPacket(ctx, modulePacket, *packet.RevokeCooperationPacket)
		if err != nil {
			return err
		}
	case *types.CdacPacketData_PublishProofListPacket:
		err := am.keeper.OnTimeoutPublishProofListPacket(ctx, modulePacket, *packet.PublishProofListPacket)
		if err != nil {
			return err
		}
		// this line is used by starport scaffolding # ibc/packet/module/timeout
	default:
		errMsg := fmt.Sprintf("unrecognized %s packet type: %T", types.ModuleName, packet)
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
	}

	return nil
}

func (am AppModule) NegotiateAppVersion(
	ctx sdk.Context,
	order channeltypes.Order,
	connectionID string,
	portID string,
	counterparty channeltypes.Counterparty,
	proposedVersion string,
) (version string, err error) {
	return proposedVersion, nil
}
