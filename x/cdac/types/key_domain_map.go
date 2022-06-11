package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// DomainMapKeyPrefix is the prefix to retrieve all DomainMap
	DomainMapKeyPrefix = "DomainMap/value/"
)

// DomainMapKey returns the store key to retrieve a DomainMap from the index fields
func DomainMapKey(
	domainIndex string,
) []byte {
	var key []byte

	domainIndexBytes := []byte(domainIndex)
	key = append(key, domainIndexBytes...)
	key = append(key, []byte("/")...)

	return key
}
