// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cdac/forward_policy.proto

package types

import (
	fmt "fmt"
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

type ForwardPolicy struct {
	Id           uint64   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Mode         string   `protobuf:"bytes,2,opt,name=mode,proto3" json:"mode,omitempty"`
	DomainList   []string `protobuf:"bytes,3,rep,name=domainList,proto3" json:"domainList,omitempty"`
	LocationList []string `protobuf:"bytes,4,rep,name=locationList,proto3" json:"locationList,omitempty"`
	Creator      string   `protobuf:"bytes,5,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *ForwardPolicy) Reset()         { *m = ForwardPolicy{} }
func (m *ForwardPolicy) String() string { return proto.CompactTextString(m) }
func (*ForwardPolicy) ProtoMessage()    {}
func (*ForwardPolicy) Descriptor() ([]byte, []int) {
	return fileDescriptor_c592051fd8c7c669, []int{0}
}
func (m *ForwardPolicy) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ForwardPolicy) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ForwardPolicy.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ForwardPolicy) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ForwardPolicy.Merge(m, src)
}
func (m *ForwardPolicy) XXX_Size() int {
	return m.Size()
}
func (m *ForwardPolicy) XXX_DiscardUnknown() {
	xxx_messageInfo_ForwardPolicy.DiscardUnknown(m)
}

var xxx_messageInfo_ForwardPolicy proto.InternalMessageInfo

func (m *ForwardPolicy) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *ForwardPolicy) GetMode() string {
	if m != nil {
		return m.Mode
	}
	return ""
}

func (m *ForwardPolicy) GetDomainList() []string {
	if m != nil {
		return m.DomainList
	}
	return nil
}

func (m *ForwardPolicy) GetLocationList() []string {
	if m != nil {
		return m.LocationList
	}
	return nil
}

func (m *ForwardPolicy) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*ForwardPolicy)(nil), "crossdomain.cdac.ForwardPolicy")
}

func init() { proto.RegisterFile("cdac/forward_policy.proto", fileDescriptor_c592051fd8c7c669) }

var fileDescriptor_c592051fd8c7c669 = []byte{
	// 212 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4c, 0x4e, 0x49, 0x4c,
	0xd6, 0x4f, 0xcb, 0x2f, 0x2a, 0x4f, 0x2c, 0x4a, 0x89, 0x2f, 0xc8, 0xcf, 0xc9, 0x4c, 0xae, 0xd4,
	0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x48, 0x2e, 0xca, 0x2f, 0x2e, 0x4e, 0xc9, 0xcf, 0x4d,
	0xcc, 0xcc, 0xd3, 0x03, 0x29, 0x53, 0x9a, 0xc8, 0xc8, 0xc5, 0xeb, 0x06, 0x51, 0x1a, 0x00, 0x56,
	0x29, 0xc4, 0xc7, 0xc5, 0x94, 0x99, 0x22, 0xc1, 0xa8, 0xc0, 0xa8, 0xc1, 0x12, 0xc4, 0x94, 0x99,
	0x22, 0x24, 0xc4, 0xc5, 0x92, 0x9b, 0x9f, 0x92, 0x2a, 0xc1, 0xa4, 0xc0, 0xa8, 0xc1, 0x19, 0x04,
	0x66, 0x0b, 0xc9, 0x71, 0x71, 0x41, 0x0c, 0xf1, 0xc9, 0x2c, 0x2e, 0x91, 0x60, 0x56, 0x60, 0xd6,
	0xe0, 0x0c, 0x42, 0x12, 0x11, 0x52, 0xe2, 0xe2, 0xc9, 0xc9, 0x4f, 0x4e, 0x2c, 0xc9, 0xcc, 0x87,
	0xa8, 0x60, 0x01, 0xab, 0x40, 0x11, 0x13, 0x92, 0xe0, 0x62, 0x4f, 0x2e, 0x4a, 0x4d, 0x2c, 0xc9,
	0x2f, 0x92, 0x60, 0x05, 0x1b, 0x0d, 0xe3, 0x3a, 0x19, 0x9d, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91,
	0x1c, 0xe3, 0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3,
	0xb1, 0x1c, 0x43, 0x94, 0x04, 0x92, 0xfb, 0xf5, 0x2b, 0xf4, 0xc1, 0x1e, 0x2d, 0xa9, 0x2c, 0x48,
	0x2d, 0x4e, 0x62, 0x03, 0x7b, 0xd0, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0xc3, 0x26, 0x97, 0x13,
	0xfd, 0x00, 0x00, 0x00,
}

func (m *ForwardPolicy) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ForwardPolicy) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ForwardPolicy) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintForwardPolicy(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.LocationList) > 0 {
		for iNdEx := len(m.LocationList) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.LocationList[iNdEx])
			copy(dAtA[i:], m.LocationList[iNdEx])
			i = encodeVarintForwardPolicy(dAtA, i, uint64(len(m.LocationList[iNdEx])))
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.DomainList) > 0 {
		for iNdEx := len(m.DomainList) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.DomainList[iNdEx])
			copy(dAtA[i:], m.DomainList[iNdEx])
			i = encodeVarintForwardPolicy(dAtA, i, uint64(len(m.DomainList[iNdEx])))
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.Mode) > 0 {
		i -= len(m.Mode)
		copy(dAtA[i:], m.Mode)
		i = encodeVarintForwardPolicy(dAtA, i, uint64(len(m.Mode)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintForwardPolicy(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintForwardPolicy(dAtA []byte, offset int, v uint64) int {
	offset -= sovForwardPolicy(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ForwardPolicy) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovForwardPolicy(uint64(m.Id))
	}
	l = len(m.Mode)
	if l > 0 {
		n += 1 + l + sovForwardPolicy(uint64(l))
	}
	if len(m.DomainList) > 0 {
		for _, s := range m.DomainList {
			l = len(s)
			n += 1 + l + sovForwardPolicy(uint64(l))
		}
	}
	if len(m.LocationList) > 0 {
		for _, s := range m.LocationList {
			l = len(s)
			n += 1 + l + sovForwardPolicy(uint64(l))
		}
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovForwardPolicy(uint64(l))
	}
	return n
}

func sovForwardPolicy(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozForwardPolicy(x uint64) (n int) {
	return sovForwardPolicy(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ForwardPolicy) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowForwardPolicy
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
			return fmt.Errorf("proto: ForwardPolicy: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ForwardPolicy: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowForwardPolicy
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Mode", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowForwardPolicy
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthForwardPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthForwardPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Mode = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DomainList", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowForwardPolicy
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthForwardPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthForwardPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DomainList = append(m.DomainList, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LocationList", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowForwardPolicy
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthForwardPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthForwardPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LocationList = append(m.LocationList, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowForwardPolicy
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthForwardPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthForwardPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipForwardPolicy(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthForwardPolicy
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
func skipForwardPolicy(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowForwardPolicy
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
					return 0, ErrIntOverflowForwardPolicy
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
					return 0, ErrIntOverflowForwardPolicy
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
				return 0, ErrInvalidLengthForwardPolicy
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupForwardPolicy
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthForwardPolicy
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthForwardPolicy        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowForwardPolicy          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupForwardPolicy = fmt.Errorf("proto: unexpected end of group")
)