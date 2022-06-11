package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CooperationDataKeyPrefix is the prefix to retrieve all CooperationData
	CooperationDataKeyPrefix = "CooperationData/value/"
)

// CooperationDataKey returns the store key to retrieve a CooperationData from the index fields
func CooperationDataKey(
	labelIndex string,
) []byte {
	var key []byte

	labelIndexBytes := []byte(labelIndex)
	key = append(key, labelIndexBytes...)
	key = append(key, []byte("/")...)

	return key
}
