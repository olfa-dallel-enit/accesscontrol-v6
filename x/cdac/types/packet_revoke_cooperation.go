package types

// ValidateBasic is used for validating the packet
func (p RevokeCooperationPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p RevokeCooperationPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdacPacketData

	modulePacket.Packet = &CdacPacketData_RevokeCooperationPacket{&p}

	return modulePacket.Marshal()
}
