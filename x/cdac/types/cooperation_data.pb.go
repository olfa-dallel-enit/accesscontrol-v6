// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cdac/cooperation_data.proto

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

type CooperationData struct {
	LabelIndex   string    `protobuf:"bytes,1,opt,name=labelIndex,proto3" json:"labelIndex,omitempty"`
	Validity     *Validity `protobuf:"bytes,2,opt,name=validity,proto3" json:"validity,omitempty"`
	Status       string    `protobuf:"bytes,3,opt,name=status,proto3" json:"status,omitempty"`
	Cost         uint64    `protobuf:"varint,4,opt,name=cost,proto3" json:"cost,omitempty"`
	LastUpdate   string    `protobuf:"bytes,5,opt,name=lastUpdate,proto3" json:"lastUpdate,omitempty"`
	InterestList []string  `protobuf:"bytes,6,rep,name=interestList,proto3" json:"interestList,omitempty"`
	Creator      string    `protobuf:"bytes,7,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *CooperationData) Reset()         { *m = CooperationData{} }
func (m *CooperationData) String() string { return proto.CompactTextString(m) }
func (*CooperationData) ProtoMessage()    {}
func (*CooperationData) Descriptor() ([]byte, []int) {
	return fileDescriptor_417ad136830a0e19, []int{0}
}
func (m *CooperationData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CooperationData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CooperationData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CooperationData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CooperationData.Merge(m, src)
}
func (m *CooperationData) XXX_Size() int {
	return m.Size()
}
func (m *CooperationData) XXX_DiscardUnknown() {
	xxx_messageInfo_CooperationData.DiscardUnknown(m)
}

var xxx_messageInfo_CooperationData proto.InternalMessageInfo

func (m *CooperationData) GetLabelIndex() string {
	if m != nil {
		return m.LabelIndex
	}
	return ""
}

func (m *CooperationData) GetValidity() *Validity {
	if m != nil {
		return m.Validity
	}
	return nil
}

func (m *CooperationData) GetStatus() string {
	if m != nil {
		return m.Status
	}
	return ""
}

func (m *CooperationData) GetCost() uint64 {
	if m != nil {
		return m.Cost
	}
	return 0
}

func (m *CooperationData) GetLastUpdate() string {
	if m != nil {
		return m.LastUpdate
	}
	return ""
}

func (m *CooperationData) GetInterestList() []string {
	if m != nil {
		return m.InterestList
	}
	return nil
}

func (m *CooperationData) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*CooperationData)(nil), "crossdomain.cdac.CooperationData")
}

func init() { proto.RegisterFile("cdac/cooperation_data.proto", fileDescriptor_417ad136830a0e19) }

var fileDescriptor_417ad136830a0e19 = []byte{
	// 275 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x90, 0x41, 0x4a, 0xc4, 0x30,
	0x14, 0x86, 0x1b, 0xa7, 0x76, 0x9c, 0x28, 0x28, 0x11, 0x24, 0x8c, 0x10, 0xca, 0xac, 0xba, 0x6a,
	0x61, 0x04, 0x0f, 0xa0, 0x6e, 0x04, 0x57, 0x05, 0x5d, 0xb8, 0x91, 0x37, 0x49, 0x16, 0x81, 0xda,
	0x94, 0xe4, 0x29, 0x33, 0xb7, 0xf0, 0x58, 0x2e, 0x67, 0xe9, 0x52, 0xda, 0x23, 0x78, 0x01, 0x31,
	0x33, 0xd5, 0x3a, 0xbb, 0xbc, 0x9f, 0x8f, 0x2f, 0xef, 0xfd, 0xf4, 0x5c, 0x2a, 0x90, 0x85, 0xb4,
	0xb6, 0xd1, 0x0e, 0xd0, 0xd8, 0xfa, 0x49, 0x01, 0x42, 0xde, 0x38, 0x8b, 0x96, 0x9d, 0x48, 0x67,
	0xbd, 0x57, 0xf6, 0x19, 0x4c, 0x9d, 0xff, 0x80, 0xd3, 0xd3, 0x80, 0xbf, 0x42, 0x65, 0x94, 0xc1,
	0xd5, 0x06, 0x9b, 0x7d, 0x11, 0x7a, 0x7c, 0xfd, 0x67, 0xb8, 0x01, 0x04, 0x26, 0x28, 0xad, 0x60,
	0xa1, 0xab, 0xdb, 0x5a, 0xe9, 0x25, 0x27, 0x29, 0xc9, 0x26, 0xe5, 0x20, 0x61, 0x97, 0xf4, 0xa0,
	0xb7, 0xf0, 0xbd, 0x94, 0x64, 0x87, 0xf3, 0x69, 0xbe, 0xfb, 0x5b, 0xfe, 0xb0, 0x25, 0xca, 0x5f,
	0x96, 0x9d, 0xd1, 0xc4, 0x23, 0xe0, 0x8b, 0xe7, 0xa3, 0xe0, 0xdc, 0x4e, 0x8c, 0xd1, 0x58, 0x5a,
	0x8f, 0x3c, 0x4e, 0x49, 0x16, 0x97, 0xe1, 0xbd, 0xd9, 0xc1, 0xe3, 0x7d, 0xa3, 0x00, 0x35, 0xdf,
	0xef, 0x77, 0xe8, 0x13, 0x36, 0xa3, 0x47, 0xa6, 0x46, 0xed, 0xb4, 0xc7, 0x3b, 0xe3, 0x91, 0x27,
	0xe9, 0x28, 0x9b, 0x94, 0xff, 0x32, 0xc6, 0xe9, 0x58, 0x3a, 0x0d, 0x68, 0x1d, 0x1f, 0x07, 0x41,
	0x3f, 0x5e, 0xcd, 0xdf, 0x5b, 0x41, 0xd6, 0xad, 0x20, 0x9f, 0xad, 0x20, 0x6f, 0x9d, 0x88, 0xd6,
	0x9d, 0x88, 0x3e, 0x3a, 0x11, 0x3d, 0xf2, 0xc1, 0x21, 0xc5, 0xb2, 0x08, 0x95, 0xe1, 0xaa, 0xd1,
	0x7e, 0x91, 0x84, 0xc2, 0x2e, 0xbe, 0x03, 0x00, 0x00, 0xff, 0xff, 0xb4, 0x04, 0xe0, 0x96, 0x76,
	0x01, 0x00, 0x00,
}

func (m *CooperationData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CooperationData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CooperationData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintCooperationData(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.InterestList) > 0 {
		for iNdEx := len(m.InterestList) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.InterestList[iNdEx])
			copy(dAtA[i:], m.InterestList[iNdEx])
			i = encodeVarintCooperationData(dAtA, i, uint64(len(m.InterestList[iNdEx])))
			i--
			dAtA[i] = 0x32
		}
	}
	if len(m.LastUpdate) > 0 {
		i -= len(m.LastUpdate)
		copy(dAtA[i:], m.LastUpdate)
		i = encodeVarintCooperationData(dAtA, i, uint64(len(m.LastUpdate)))
		i--
		dAtA[i] = 0x2a
	}
	if m.Cost != 0 {
		i = encodeVarintCooperationData(dAtA, i, uint64(m.Cost))
		i--
		dAtA[i] = 0x20
	}
	if len(m.Status) > 0 {
		i -= len(m.Status)
		copy(dAtA[i:], m.Status)
		i = encodeVarintCooperationData(dAtA, i, uint64(len(m.Status)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Validity != nil {
		{
			size, err := m.Validity.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintCooperationData(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.LabelIndex) > 0 {
		i -= len(m.LabelIndex)
		copy(dAtA[i:], m.LabelIndex)
		i = encodeVarintCooperationData(dAtA, i, uint64(len(m.LabelIndex)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCooperationData(dAtA []byte, offset int, v uint64) int {
	offset -= sovCooperationData(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *CooperationData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.LabelIndex)
	if l > 0 {
		n += 1 + l + sovCooperationData(uint64(l))
	}
	if m.Validity != nil {
		l = m.Validity.Size()
		n += 1 + l + sovCooperationData(uint64(l))
	}
	l = len(m.Status)
	if l > 0 {
		n += 1 + l + sovCooperationData(uint64(l))
	}
	if m.Cost != 0 {
		n += 1 + sovCooperationData(uint64(m.Cost))
	}
	l = len(m.LastUpdate)
	if l > 0 {
		n += 1 + l + sovCooperationData(uint64(l))
	}
	if len(m.InterestList) > 0 {
		for _, s := range m.InterestList {
			l = len(s)
			n += 1 + l + sovCooperationData(uint64(l))
		}
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovCooperationData(uint64(l))
	}
	return n
}

func sovCooperationData(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCooperationData(x uint64) (n int) {
	return sovCooperationData(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *CooperationData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCooperationData
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
			return fmt.Errorf("proto: CooperationData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CooperationData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LabelIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCooperationData
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
				return ErrInvalidLengthCooperationData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCooperationData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LabelIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Validity", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCooperationData
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
				return ErrInvalidLengthCooperationData
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCooperationData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Validity == nil {
				m.Validity = &Validity{}
			}
			if err := m.Validity.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCooperationData
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
				return ErrInvalidLengthCooperationData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCooperationData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Status = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Cost", wireType)
			}
			m.Cost = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCooperationData
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Cost |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LastUpdate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCooperationData
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
				return ErrInvalidLengthCooperationData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCooperationData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LastUpdate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InterestList", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCooperationData
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
				return ErrInvalidLengthCooperationData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCooperationData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InterestList = append(m.InterestList, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCooperationData
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
				return ErrInvalidLengthCooperationData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCooperationData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCooperationData(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCooperationData
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
func skipCooperationData(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCooperationData
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
					return 0, ErrIntOverflowCooperationData
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
					return 0, ErrIntOverflowCooperationData
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
				return 0, ErrInvalidLengthCooperationData
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCooperationData
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCooperationData
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCooperationData        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCooperationData          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCooperationData = fmt.Errorf("proto: unexpected end of group")
)
