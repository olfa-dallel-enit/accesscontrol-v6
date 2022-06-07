package types

// ValidateBasic is used for validating the packet
func (p EstablishCooperationPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p EstablishCooperationPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdacPacketData

	modulePacket.Packet = &CdacPacketData_EstablishCooperationPacket{&p}

	return modulePacket.Marshal()
}
