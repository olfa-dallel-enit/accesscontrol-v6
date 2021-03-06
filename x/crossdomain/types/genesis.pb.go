// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: crossdomain/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the crossdomain module's genesis state.
type GenesisState struct {
	Params                     Params                      `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	PrivateKey                 *PrivateKey                 `protobuf:"bytes,2,opt,name=privateKey,proto3" json:"privateKey,omitempty"`
	LocalDomainCertificate     *LocalDomainCertificate     `protobuf:"bytes,3,opt,name=localDomainCertificate,proto3" json:"localDomainCertificate,omitempty"`
	RootCertificate            *RootCertificate            `protobuf:"bytes,4,opt,name=rootCertificate,proto3" json:"rootCertificate,omitempty"`
	LocalDomain                *LocalDomain                `protobuf:"bytes,5,opt,name=localDomain,proto3" json:"localDomain,omitempty"`
	ForwardPolicy              *ForwardPolicy              `protobuf:"bytes,6,opt,name=forwardPolicy,proto3" json:"forwardPolicy,omitempty"`
	ValidityList               []Validity                  `protobuf:"bytes,7,rep,name=validityList,proto3" json:"validityList"`
	ValidityCount              uint64                      `protobuf:"varint,8,opt,name=validityCount,proto3" json:"validityCount,omitempty"`
	DecisionPolicy             *DecisionPolicy             `protobuf:"bytes,9,opt,name=decisionPolicy,proto3" json:"decisionPolicy,omitempty"`
	UpdatePolicy               *UpdatePolicy               `protobuf:"bytes,10,opt,name=updatePolicy,proto3" json:"updatePolicy,omitempty"`
	CooperationNetworkFeatures *CooperationNetworkFeatures `protobuf:"bytes,11,opt,name=cooperationNetworkFeatures,proto3" json:"cooperationNetworkFeatures,omitempty"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_41d901311805e565, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetPrivateKey() *PrivateKey {
	if m != nil {
		return m.PrivateKey
	}
	return nil
}

func (m *GenesisState) GetLocalDomainCertificate() *LocalDomainCertificate {
	if m != nil {
		return m.LocalDomainCertificate
	}
	return nil
}

func (m *GenesisState) GetRootCertificate() *RootCertificate {
	if m != nil {
		return m.RootCertificate
	}
	return nil
}

func (m *GenesisState) GetLocalDomain() *LocalDomain {
	if m != nil {
		return m.LocalDomain
	}
	return nil
}

func (m *GenesisState) GetForwardPolicy() *ForwardPolicy {
	if m != nil {
		return m.ForwardPolicy
	}
	return nil
}

func (m *GenesisState) GetValidityList() []Validity {
	if m != nil {
		return m.ValidityList
	}
	return nil
}

func (m *GenesisState) GetValidityCount() uint64 {
	if m != nil {
		return m.ValidityCount
	}
	return 0
}

func (m *GenesisState) GetDecisionPolicy() *DecisionPolicy {
	if m != nil {
		return m.DecisionPolicy
	}
	return nil
}

func (m *GenesisState) GetUpdatePolicy() *UpdatePolicy {
	if m != nil {
		return m.UpdatePolicy
	}
	return nil
}

func (m *GenesisState) GetCooperationNetworkFeatures() *CooperationNetworkFeatures {
	if m != nil {
		return m.CooperationNetworkFeatures
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "crossdomain.crossdomain.GenesisState")
}

func init() { proto.RegisterFile("crossdomain/genesis.proto", fileDescriptor_41d901311805e565) }

var fileDescriptor_41d901311805e565 = []byte{
	// 512 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x93, 0x41, 0x6f, 0xd3, 0x30,
	0x14, 0xc7, 0x1b, 0x56, 0x0a, 0xb8, 0x1d, 0x48, 0x16, 0x02, 0x13, 0x89, 0xb4, 0x1b, 0x03, 0x2a,
	0x0e, 0x8d, 0xb4, 0x9d, 0x38, 0x70, 0x59, 0xa7, 0x22, 0xb4, 0x0a, 0x26, 0x23, 0x38, 0x70, 0x89,
	0x4c, 0xe2, 0x56, 0xd6, 0xba, 0x38, 0x72, 0xdc, 0x8d, 0x7e, 0x0b, 0x3e, 0xd6, 0x8e, 0x3b, 0x72,
	0x42, 0xa8, 0x3d, 0xf1, 0x2d, 0x50, 0x1d, 0x07, 0x9e, 0xa7, 0x1a, 0xed, 0x16, 0xe7, 0xff, 0xff,
	0xff, 0x9e, 0xed, 0xe7, 0x87, 0x9e, 0xa4, 0x4a, 0x96, 0x65, 0x26, 0xcf, 0x98, 0xc8, 0xe3, 0x29,
	0xcf, 0x79, 0x29, 0xca, 0x41, 0xa1, 0xa4, 0x96, 0xf8, 0x31, 0x90, 0x06, 0xe0, 0x3b, 0x7c, 0x38,
	0x95, 0x53, 0x69, 0x3c, 0xf1, 0xfa, 0xab, 0xb2, 0x87, 0x04, 0x92, 0x0a, 0xa6, 0xd8, 0x99, 0x05,
	0x85, 0x4f, 0x1d, 0x45, 0x89, 0x73, 0xa6, 0x79, 0x72, 0xca, 0x17, 0x56, 0x7e, 0x05, 0xe5, 0x99,
	0x4c, 0xd9, 0x2c, 0xa9, 0x16, 0x49, 0xca, 0x95, 0x16, 0x13, 0x91, 0x32, 0xcd, 0xad, 0x77, 0x17,
	0x7a, 0x95, 0x94, 0x7a, 0x83, 0x27, 0xf2, 0xf1, 0xac, 0xde, 0x83, 0xfa, 0x44, 0xaa, 0x0b, 0xa6,
	0xb2, 0xa4, 0x90, 0x33, 0x91, 0xd6, 0x3b, 0x0a, 0xa1, 0xe3, 0x9c, 0xcd, 0x44, 0x26, 0x74, 0xad,
	0xed, 0x40, 0x2d, 0xe3, 0xa9, 0x28, 0x85, 0xcc, 0xdd, 0x78, 0x17, 0x5a, 0xe6, 0x45, 0xb6, 0x3e,
	0xae, 0x63, 0x80, 0xb7, 0x19, 0xa7, 0x52, 0x16, 0x5c, 0x31, 0xbd, 0xc6, 0xe4, 0x5c, 0x5f, 0x48,
	0x75, 0x9a, 0x4c, 0x38, 0xd3, 0x73, 0xc5, 0xed, 0x05, 0xee, 0xfe, 0x6e, 0xa1, 0xce, 0xdb, 0xaa,
	0x37, 0x1f, 0x35, 0xd3, 0x1c, 0xbf, 0x41, 0xad, 0xea, 0x86, 0x49, 0xd0, 0x0b, 0xfa, 0xed, 0xfd,
	0xee, 0xc0, 0xd3, 0xab, 0xc1, 0x89, 0xb1, 0x1d, 0x36, 0x2f, 0x7f, 0x76, 0x1b, 0xd4, 0x86, 0xf0,
	0x10, 0x21, 0xdb, 0x86, 0x63, 0xbe, 0x20, 0xb7, 0x0c, 0xe2, 0x99, 0x1f, 0xf1, 0xd7, 0x4a, 0x41,
	0x0c, 0x4f, 0xd1, 0x23, 0x73, 0xb9, 0x47, 0xc6, 0x35, 0xfc, 0xd7, 0x06, 0xb2, 0x65, 0x80, 0xb1,
	0x17, 0x38, 0xde, 0x18, 0xa3, 0x1e, 0x1c, 0xa6, 0xe8, 0xc1, 0xba, 0xd3, 0xb0, 0x42, 0xd3, 0x54,
	0xe8, 0x7b, 0x2b, 0x50, 0xd7, 0x4f, 0xaf, 0x03, 0xf0, 0x08, 0xb5, 0x41, 0x35, 0x72, 0xdb, 0xf0,
	0xf6, 0x6e, 0xb2, 0x63, 0x0a, 0x83, 0x78, 0x8c, 0xb6, 0xed, 0x0b, 0x3a, 0x31, 0x0d, 0x26, 0x2d,
	0x43, 0x7a, 0xe1, 0x25, 0x8d, 0xa0, 0x9b, 0xba, 0x61, 0x7c, 0x8c, 0x3a, 0xf5, 0x6b, 0x1b, 0x8b,
	0x52, 0x93, 0x3b, 0xbd, 0xad, 0x7e, 0x7b, 0x7f, 0xc7, 0x0b, 0xfb, 0x6c, 0xcd, 0xb6, 0xbd, 0x4e,
	0x18, 0xef, 0xa1, 0xed, 0x7a, 0x3d, 0x94, 0xf3, 0x5c, 0x93, 0xbb, 0xbd, 0xa0, 0xdf, 0xa4, 0xee,
	0x4f, 0xfc, 0x01, 0xdd, 0xaf, 0x1f, 0xb1, 0x3d, 0xc1, 0x3d, 0x73, 0x82, 0x97, 0xde, 0xa2, 0x47,
	0x8e, 0x9d, 0x5e, 0x8b, 0xe3, 0x77, 0xa8, 0x53, 0x3d, 0x79, 0x8b, 0x43, 0x06, 0xf7, 0xdc, 0x8b,
	0xfb, 0x04, 0xcc, 0xd4, 0x89, 0xe2, 0x12, 0x85, 0x60, 0x38, 0xde, 0x57, 0xb3, 0x31, 0xb2, 0xa3,
	0x41, 0xda, 0x06, 0x7c, 0xe0, 0x05, 0x0f, 0xbd, 0x51, 0xfa, 0x1f, 0xec, 0xe1, 0xeb, 0xcb, 0x65,
	0x14, 0x5c, 0x2d, 0xa3, 0xe0, 0xd7, 0x32, 0x0a, 0xbe, 0xaf, 0xa2, 0xc6, 0xd5, 0x2a, 0x6a, 0xfc,
	0x58, 0x45, 0x8d, 0x2f, 0xce, 0x58, 0x7f, 0x8b, 0xe1, 0x4a, 0x2f, 0x0a, 0x5e, 0x7e, 0x6d, 0x99,
	0x69, 0x3d, 0xf8, 0x13, 0x00, 0x00, 0xff, 0xff, 0xb7, 0x45, 0xf6, 0xc8, 0x54, 0x05, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CooperationNetworkFeatures != nil {
		{
			size, err := m.CooperationNetworkFeatures.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x5a
	}
	if m.UpdatePolicy != nil {
		{
			size, err := m.UpdatePolicy.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x52
	}
	if m.DecisionPolicy != nil {
		{
			size, err := m.DecisionPolicy.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x4a
	}
	if m.ValidityCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.ValidityCount))
		i--
		dAtA[i] = 0x40
	}
	if len(m.ValidityList) > 0 {
		for iNdEx := len(m.ValidityList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ValidityList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x3a
		}
	}
	if m.ForwardPolicy != nil {
		{
			size, err := m.ForwardPolicy.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x32
	}
	if m.LocalDomain != nil {
		{
			size, err := m.LocalDomain.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x2a
	}
	if m.RootCertificate != nil {
		{
			size, err := m.RootCertificate.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if m.LocalDomainCertificate != nil {
		{
			size, err := m.LocalDomainCertificate.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x1a
	}
	if m.PrivateKey != nil {
		{
			size, err := m.PrivateKey.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if m.PrivateKey != nil {
		l = m.PrivateKey.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.LocalDomainCertificate != nil {
		l = m.LocalDomainCertificate.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.RootCertificate != nil {
		l = m.RootCertificate.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.LocalDomain != nil {
		l = m.LocalDomain.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.ForwardPolicy != nil {
		l = m.ForwardPolicy.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.ValidityList) > 0 {
		for _, e := range m.ValidityList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.ValidityCount != 0 {
		n += 1 + sovGenesis(uint64(m.ValidityCount))
	}
	if m.DecisionPolicy != nil {
		l = m.DecisionPolicy.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.UpdatePolicy != nil {
		l = m.UpdatePolicy.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.CooperationNetworkFeatures != nil {
		l = m.CooperationNetworkFeatures.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PrivateKey", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.PrivateKey == nil {
				m.PrivateKey = &PrivateKey{}
			}
			if err := m.PrivateKey.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LocalDomainCertificate", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.LocalDomainCertificate == nil {
				m.LocalDomainCertificate = &LocalDomainCertificate{}
			}
			if err := m.LocalDomainCertificate.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RootCertificate", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.RootCertificate == nil {
				m.RootCertificate = &RootCertificate{}
			}
			if err := m.RootCertificate.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LocalDomain", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.LocalDomain == nil {
				m.LocalDomain = &LocalDomain{}
			}
			if err := m.LocalDomain.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ForwardPolicy", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ForwardPolicy == nil {
				m.ForwardPolicy = &ForwardPolicy{}
			}
			if err := m.ForwardPolicy.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ValidityList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ValidityList = append(m.ValidityList, Validity{})
			if err := m.ValidityList[len(m.ValidityList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ValidityCount", wireType)
			}
			m.ValidityCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ValidityCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DecisionPolicy", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.DecisionPolicy == nil {
				m.DecisionPolicy = &DecisionPolicy{}
			}
			if err := m.DecisionPolicy.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field UpdatePolicy", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.UpdatePolicy == nil {
				m.UpdatePolicy = &UpdatePolicy{}
			}
			if err := m.UpdatePolicy.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CooperationNetworkFeatures", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.CooperationNetworkFeatures == nil {
				m.CooperationNetworkFeatures = &CooperationNetworkFeatures{}
			}
			if err := m.CooperationNetworkFeatures.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
