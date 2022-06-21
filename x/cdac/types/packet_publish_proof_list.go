package types

// ValidateBasic is used for validating the packet
func (p PublishProofListPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p PublishProofListPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdacPacketData

	modulePacket.Packet = &CdacPacketData_PublishProofListPacket{&p}

	return modulePacket.Marshal()
}
