package types

// IBC events
const (
	EventTypeTimeout                         = "timeout"
	EventTypeAuthenticateDomainPacket        = "authenticateDomain_packet"
	EventTypeEstablishCooperationPacket      = "establishCooperation_packet"
	EventTypeForwardCooperationDataPacket    = "forwardCooperationData_packet"
	EventTypeExchangeCooperationDataPacket   = "exchangeCooperationData_packet"
	EventTypeModifyCooperationCostPacket     = "modifyCooperationCost_packet"
	EventTypeDisableCooperationPacket        = "disableCooperation_packet"
	EventTypeEnableCooperationPacket         = "enableCooperation_packet"
	EventTypeModifyCooperationValidityPacket = "modifyCooperationValidity_packet"
	EventTypeModifyCooperationInterestPacket = "modifyCooperationInterest_packet"
	EventTypeRevokeCooperationPacket         = "revokeCooperation_packet"
	EventTypePublishProofListPacket          = "publishProofList_packet"
	// this line is used by starport scaffolding # ibc/packet/event

	AttributeKeyAckSuccess = "success"
	AttributeKeyAck        = "acknowledgement"
	AttributeKeyAckError   = "error"
)
