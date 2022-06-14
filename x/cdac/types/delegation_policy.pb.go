// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cdac/delegation_policy.proto

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

type DelegationPolicy struct {
	Id                 uint64                  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Label              string                  `protobuf:"bytes,2,opt,name=label,proto3" json:"label,omitempty"`
	Target             *DelegationPolicyTarget `protobuf:"bytes,3,opt,name=target,proto3" json:"target,omitempty"`
	CombiningAlgorithm string                  `protobuf:"bytes,4,opt,name=combiningAlgorithm,proto3" json:"combiningAlgorithm,omitempty"`
	RuleList           []*DelegationRule       `protobuf:"bytes,5,rep,name=ruleList,proto3" json:"ruleList,omitempty"`
	Creator            string                  `protobuf:"bytes,6,opt,name=creator,proto3" json:"creator,omitempty"`
	CreationDate       string                  `protobuf:"bytes,7,opt,name=creationDate,proto3" json:"creationDate,omitempty"`
	CreationTimestamp  string                  `protobuf:"bytes,8,opt,name=creationTimestamp,proto3" json:"creationTimestamp,omitempty"`
	UpdateDate         string                  `protobuf:"bytes,9,opt,name=updateDate,proto3" json:"updateDate,omitempty"`
	UpdateTimestamp    string                  `protobuf:"bytes,10,opt,name=updateTimestamp,proto3" json:"updateTimestamp,omitempty"`
}

func (m *DelegationPolicy) Reset()         { *m = DelegationPolicy{} }
func (m *DelegationPolicy) String() string { return proto.CompactTextString(m) }
func (*DelegationPolicy) ProtoMessage()    {}
func (*DelegationPolicy) Descriptor() ([]byte, []int) {
	return fileDescriptor_5c422c169bdfb736, []int{0}
}
func (m *DelegationPolicy) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *DelegationPolicy) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_DelegationPolicy.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *DelegationPolicy) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DelegationPolicy.Merge(m, src)
}
func (m *DelegationPolicy) XXX_Size() int {
	return m.Size()
}
func (m *DelegationPolicy) XXX_DiscardUnknown() {
	xxx_messageInfo_DelegationPolicy.DiscardUnknown(m)
}

var xxx_messageInfo_DelegationPolicy proto.InternalMessageInfo

func (m *DelegationPolicy) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *DelegationPolicy) GetLabel() string {
	if m != nil {
		return m.Label
	}
	return ""
}

func (m *DelegationPolicy) GetTarget() *DelegationPolicyTarget {
	if m != nil {
		return m.Target
	}
	return nil
}

func (m *DelegationPolicy) GetCombiningAlgorithm() string {
	if m != nil {
		return m.CombiningAlgorithm
	}
	return ""
}

func (m *DelegationPolicy) GetRuleList() []*DelegationRule {
	if m != nil {
		return m.RuleList
	}
	return nil
}

func (m *DelegationPolicy) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *DelegationPolicy) GetCreationDate() string {
	if m != nil {
		return m.CreationDate
	}
	return ""
}

func (m *DelegationPolicy) GetCreationTimestamp() string {
	if m != nil {
		return m.CreationTimestamp
	}
	return ""
}

func (m *DelegationPolicy) GetUpdateDate() string {
	if m != nil {
		return m.UpdateDate
	}
	return ""
}

func (m *DelegationPolicy) GetUpdateTimestamp() string {
	if m != nil {
		return m.UpdateTimestamp
	}
	return ""
}

func init() {
	proto.RegisterType((*DelegationPolicy)(nil), "crossdomain.cdac.DelegationPolicy")
}

func init() { proto.RegisterFile("cdac/delegation_policy.proto", fileDescriptor_5c422c169bdfb736) }

var fileDescriptor_5c422c169bdfb736 = []byte{
	// 341 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x91, 0xbf, 0x4e, 0xf3, 0x30,
	0x14, 0xc5, 0xeb, 0xfe, 0xef, 0xed, 0xa7, 0x8f, 0x62, 0x31, 0x58, 0x15, 0xb2, 0xa2, 0xb2, 0x64,
	0x40, 0xa9, 0x54, 0x56, 0x06, 0x40, 0x1d, 0x19, 0x50, 0xd4, 0x89, 0xa5, 0x72, 0x63, 0x2b, 0x58,
	0x72, 0xe2, 0xc8, 0x71, 0x25, 0xfa, 0x16, 0x3c, 0x01, 0xcf, 0xc3, 0xd8, 0x91, 0x11, 0x35, 0x2f,
	0x82, 0xea, 0xd0, 0x52, 0x42, 0xc5, 0x96, 0x73, 0xcf, 0xef, 0xdc, 0xe3, 0xe8, 0xc2, 0x79, 0xc4,
	0x59, 0x34, 0xe6, 0x42, 0x89, 0x98, 0x59, 0xa9, 0xd3, 0x79, 0xa6, 0x95, 0x8c, 0x56, 0x41, 0x66,
	0xb4, 0xd5, 0x78, 0x10, 0x19, 0x9d, 0xe7, 0x5c, 0x27, 0x4c, 0xa6, 0xc1, 0x96, 0x1c, 0x5e, 0x1c,
	0xe7, 0xe7, 0x96, 0x99, 0x58, 0xd8, 0x32, 0x36, 0x1c, 0x56, 0x21, 0xb3, 0x54, 0xa2, 0xf4, 0x46,
	0xaf, 0x0d, 0x18, 0x4c, 0xf7, 0xce, 0x83, 0x4b, 0xe3, 0xff, 0x50, 0x97, 0x9c, 0x20, 0x0f, 0xf9,
	0xcd, 0xb0, 0x2e, 0x39, 0x3e, 0x83, 0x96, 0x62, 0x0b, 0xa1, 0x48, 0xdd, 0x43, 0x7e, 0x2f, 0x2c,
	0x05, 0xbe, 0x81, 0x76, 0x59, 0x43, 0x1a, 0x1e, 0xf2, 0xfb, 0x13, 0x3f, 0xa8, 0x3e, 0x2f, 0xa8,
	0x6e, 0x9e, 0x39, 0x3e, 0xfc, 0xca, 0xe1, 0x00, 0x70, 0xa4, 0x93, 0x85, 0x4c, 0x65, 0x1a, 0xdf,
	0xaa, 0x58, 0x1b, 0x69, 0x9f, 0x12, 0xd2, 0x74, 0x25, 0x47, 0x1c, 0x7c, 0x0d, 0xdd, 0xed, 0xd3,
	0xef, 0x65, 0x6e, 0x49, 0xcb, 0x6b, 0xf8, 0xfd, 0x89, 0xf7, 0x57, 0x67, 0xb8, 0x54, 0x22, 0xdc,
	0x27, 0x30, 0x81, 0x4e, 0x64, 0x04, 0xb3, 0xda, 0x90, 0xb6, 0xab, 0xd8, 0x49, 0x3c, 0x82, 0x7f,
	0xee, 0x53, 0xea, 0x74, 0xca, 0xac, 0x20, 0x1d, 0x67, 0xff, 0x98, 0xe1, 0x4b, 0x38, 0xdd, 0xe9,
	0x99, 0x4c, 0x44, 0x6e, 0x59, 0x92, 0x91, 0xae, 0x03, 0x7f, 0x1b, 0x98, 0x02, 0x2c, 0x33, 0xce,
	0xac, 0x70, 0xfb, 0x7a, 0x0e, 0x3b, 0x98, 0x60, 0x1f, 0x4e, 0x4a, 0xf5, 0xbd, 0x0b, 0x1c, 0x54,
	0x1d, 0xdf, 0x4d, 0xde, 0x36, 0x14, 0xad, 0x37, 0x14, 0x7d, 0x6c, 0x28, 0x7a, 0x29, 0x68, 0x6d,
	0x5d, 0xd0, 0xda, 0x7b, 0x41, 0x6b, 0x8f, 0xe4, 0xe0, 0xd7, 0xc7, 0xcf, 0x63, 0x77, 0x64, 0xbb,
	0xca, 0x44, 0xbe, 0x68, 0xbb, 0xdb, 0x5e, 0x7d, 0x06, 0x00, 0x00, 0xff, 0xff, 0x99, 0x1f, 0xf8,
	0x30, 0x4e, 0x02, 0x00, 0x00,
}

func (m *DelegationPolicy) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *DelegationPolicy) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *DelegationPolicy) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.UpdateTimestamp) > 0 {
		i -= len(m.UpdateTimestamp)
		copy(dAtA[i:], m.UpdateTimestamp)
		i = encodeVarintDelegationPolicy(dAtA, i, uint64(len(m.UpdateTimestamp)))
		i--
		dAtA[i] = 0x52
	}
	if len(m.UpdateDate) > 0 {
		i -= len(m.UpdateDate)
		copy(dAtA[i:], m.UpdateDate)
		i = encodeVarintDelegationPolicy(dAtA, i, uint64(len(m.UpdateDate)))
		i--
		dAtA[i] = 0x4a
	}
	if len(m.CreationTimestamp) > 0 {
		i -= len(m.CreationTimestamp)
		copy(dAtA[i:], m.CreationTimestamp)
		i = encodeVarintDelegationPolicy(dAtA, i, uint64(len(m.CreationTimestamp)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.CreationDate) > 0 {
		i -= len(m.CreationDate)
		copy(dAtA[i:], m.CreationDate)
		i = encodeVarintDelegationPolicy(dAtA, i, uint64(len(m.CreationDate)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintDelegationPolicy(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.RuleList) > 0 {
		for iNdEx := len(m.RuleList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.RuleList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintDelegationPolicy(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.CombiningAlgorithm) > 0 {
		i -= len(m.CombiningAlgorithm)
		copy(dAtA[i:], m.CombiningAlgorithm)
		i = encodeVarintDelegationPolicy(dAtA, i, uint64(len(m.CombiningAlgorithm)))
		i--
		dAtA[i] = 0x22
	}
	if m.Target != nil {
		{
			size, err := m.Target.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintDelegationPolicy(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Label) > 0 {
		i -= len(m.Label)
		copy(dAtA[i:], m.Label)
		i = encodeVarintDelegationPolicy(dAtA, i, uint64(len(m.Label)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintDelegationPolicy(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintDelegationPolicy(dAtA []byte, offset int, v uint64) int {
	offset -= sovDelegationPolicy(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *DelegationPolicy) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovDelegationPolicy(uint64(m.Id))
	}
	l = len(m.Label)
	if l > 0 {
		n += 1 + l + sovDelegationPolicy(uint64(l))
	}
	if m.Target != nil {
		l = m.Target.Size()
		n += 1 + l + sovDelegationPolicy(uint64(l))
	}
	l = len(m.CombiningAlgorithm)
	if l > 0 {
		n += 1 + l + sovDelegationPolicy(uint64(l))
	}
	if len(m.RuleList) > 0 {
		for _, e := range m.RuleList {
			l = e.Size()
			n += 1 + l + sovDelegationPolicy(uint64(l))
		}
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovDelegationPolicy(uint64(l))
	}
	l = len(m.CreationDate)
	if l > 0 {
		n += 1 + l + sovDelegationPolicy(uint64(l))
	}
	l = len(m.CreationTimestamp)
	if l > 0 {
		n += 1 + l + sovDelegationPolicy(uint64(l))
	}
	l = len(m.UpdateDate)
	if l > 0 {
		n += 1 + l + sovDelegationPolicy(uint64(l))
	}
	l = len(m.UpdateTimestamp)
	if l > 0 {
		n += 1 + l + sovDelegationPolicy(uint64(l))
	}
	return n
}

func sovDelegationPolicy(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozDelegationPolicy(x uint64) (n int) {
	return sovDelegationPolicy(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *DelegationPolicy) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDelegationPolicy
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
			return fmt.Errorf("proto: DelegationPolicy: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: DelegationPolicy: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return fmt.Errorf("proto: wrong wireType = %d for field Label", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return ErrInvalidLengthDelegationPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Label = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Target", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return ErrInvalidLengthDelegationPolicy
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Target == nil {
				m.Target = &DelegationPolicyTarget{}
			}
			if err := m.Target.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CombiningAlgorithm", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return ErrInvalidLengthDelegationPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CombiningAlgorithm = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RuleList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return ErrInvalidLengthDelegationPolicy
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RuleList = append(m.RuleList, &DelegationRule{})
			if err := m.RuleList[len(m.RuleList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return ErrInvalidLengthDelegationPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreationDate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return ErrInvalidLengthDelegationPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CreationDate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreationTimestamp", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return ErrInvalidLengthDelegationPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CreationTimestamp = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field UpdateDate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return ErrInvalidLengthDelegationPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.UpdateDate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field UpdateTimestamp", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDelegationPolicy
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
				return ErrInvalidLengthDelegationPolicy
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDelegationPolicy
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.UpdateTimestamp = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipDelegationPolicy(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDelegationPolicy
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
func skipDelegationPolicy(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowDelegationPolicy
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
					return 0, ErrIntOverflowDelegationPolicy
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
					return 0, ErrIntOverflowDelegationPolicy
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
				return 0, ErrInvalidLengthDelegationPolicy
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupDelegationPolicy
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthDelegationPolicy
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthDelegationPolicy        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowDelegationPolicy          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupDelegationPolicy = fmt.Errorf("proto: unexpected end of group")
)
