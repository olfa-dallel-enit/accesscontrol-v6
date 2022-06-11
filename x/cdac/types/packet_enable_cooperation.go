package types

// ValidateBasic is used for validating the packet
func (p EnableCooperationPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p EnableCooperationPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdacPacketData

	modulePacket.Packet = &CdacPacketData_EnableCooperationPacket{&p}

	return modulePacket.Marshal()
}
