package types

// ValidateBasic is used for validating the packet
func (p AuthenticateDomainPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p AuthenticateDomainPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdacPacketData

	modulePacket.Packet = &CdacPacketData_AuthenticateDomainPacket{&p}

	return modulePacket.Marshal()
}
