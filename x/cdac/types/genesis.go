package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:                         PortID,
		PublicKeyList:                  []PublicKey{},
		ValidityList:                   []Validity{},
		CertificateList:                []Certificate{},
		IbcConnectionList:              []IbcConnection{},
		DomainList:                     []Domain{},
		AuthenticationLogList:          []AuthenticationLog{},
		DomainCooperationList:          []DomainCooperation{},
		CooperationLogList:             []CooperationLog{},
		ForwardPolicyList:              []ForwardPolicy{},
		DomainMapList:                  []DomainMap{},
		CooperationNetworkFeaturesList: []CooperationNetworkFeatures{},
		CooperationDataList:            []CooperationData{},
		CooperationNetworkList:         []CooperationNetwork{},
		UpdatePolicy:                   nil,
		CooperativeDomainList:          []CooperativeDomain{},
		DelegationPathList:             []DelegationPath{},
		PathList:                       []Path{},
		TimeCalculationList:            []TimeCalculation{},
		CalculationTimeList:            []CalculationTime{},
		InterDomainAclPolicyList:       []InterDomainAclPolicy{},
		InterDomainDclPolicyList:       []InterDomainDclPolicy{},
		DelegationConditionsList:       []DelegationConditions{},
		DelegationRuleList:             []DelegationRule{},
		DelegationPolicyTargetList:     []DelegationPolicyTarget{},
		DelegationPolicyList:           []DelegationPolicy{},
		DelegationLogList:              []DelegationLog{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated ID in publicKey
	publicKeyIdMap := make(map[uint64]bool)
	publicKeyCount := gs.GetPublicKeyCount()
	for _, elem := range gs.PublicKeyList {
		if _, ok := publicKeyIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for publicKey")
		}
		if elem.Id >= publicKeyCount {
			return fmt.Errorf("publicKey id should be lower or equal than the last id")
		}
		publicKeyIdMap[elem.Id] = true
	}
	// Check for duplicated ID in validity
	validityIdMap := make(map[uint64]bool)
	validityCount := gs.GetValidityCount()
	for _, elem := range gs.ValidityList {
		if _, ok := validityIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for validity")
		}
		if elem.Id >= validityCount {
			return fmt.Errorf("validity id should be lower or equal than the last id")
		}
		validityIdMap[elem.Id] = true
	}
	// Check for duplicated ID in certificate
	certificateIdMap := make(map[uint64]bool)
	certificateCount := gs.GetCertificateCount()
	for _, elem := range gs.CertificateList {
		if _, ok := certificateIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for certificate")
		}
		if elem.Id >= certificateCount {
			return fmt.Errorf("certificate id should be lower or equal than the last id")
		}
		certificateIdMap[elem.Id] = true
	}
	// Check for duplicated ID in ibcConnection
	ibcConnectionIdMap := make(map[uint64]bool)
	ibcConnectionCount := gs.GetIbcConnectionCount()
	for _, elem := range gs.IbcConnectionList {
		if _, ok := ibcConnectionIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for ibcConnection")
		}
		if elem.Id >= ibcConnectionCount {
			return fmt.Errorf("ibcConnection id should be lower or equal than the last id")
		}
		ibcConnectionIdMap[elem.Id] = true
	}
	// Check for duplicated ID in domain
	domainIdMap := make(map[uint64]bool)
	domainCount := gs.GetDomainCount()
	for _, elem := range gs.DomainList {
		if _, ok := domainIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for domain")
		}
		if elem.Id >= domainCount {
			return fmt.Errorf("domain id should be lower or equal than the last id")
		}
		domainIdMap[elem.Id] = true
	}
	// Check for duplicated ID in authenticationLog
	authenticationLogIdMap := make(map[uint64]bool)
	authenticationLogCount := gs.GetAuthenticationLogCount()
	for _, elem := range gs.AuthenticationLogList {
		if _, ok := authenticationLogIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for authenticationLog")
		}
		if elem.Id >= authenticationLogCount {
			return fmt.Errorf("authenticationLog id should be lower or equal than the last id")
		}
		authenticationLogIdMap[elem.Id] = true
	}
	// Check for duplicated ID in domainCooperation
	domainCooperationIdMap := make(map[uint64]bool)
	domainCooperationCount := gs.GetDomainCooperationCount()
	for _, elem := range gs.DomainCooperationList {
		if _, ok := domainCooperationIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for domainCooperation")
		}
		if elem.Id >= domainCooperationCount {
			return fmt.Errorf("domainCooperation id should be lower or equal than the last id")
		}
		domainCooperationIdMap[elem.Id] = true
	}
	// Check for duplicated ID in cooperationLog
	cooperationLogIdMap := make(map[uint64]bool)
	cooperationLogCount := gs.GetCooperationLogCount()
	for _, elem := range gs.CooperationLogList {
		if _, ok := cooperationLogIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for cooperationLog")
		}
		if elem.Id >= cooperationLogCount {
			return fmt.Errorf("cooperationLog id should be lower or equal than the last id")
		}
		cooperationLogIdMap[elem.Id] = true
	}
	// Check for duplicated ID in forwardPolicy
	forwardPolicyIdMap := make(map[uint64]bool)
	forwardPolicyCount := gs.GetForwardPolicyCount()
	for _, elem := range gs.ForwardPolicyList {
		if _, ok := forwardPolicyIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for forwardPolicy")
		}
		if elem.Id >= forwardPolicyCount {
			return fmt.Errorf("forwardPolicy id should be lower or equal than the last id")
		}
		forwardPolicyIdMap[elem.Id] = true
	}
	// Check for duplicated index in domainMap
	domainMapIndexMap := make(map[string]struct{})

	for _, elem := range gs.DomainMapList {
		index := string(DomainMapKey(elem.DomainIndex))
		if _, ok := domainMapIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for domainMap")
		}
		domainMapIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in cooperationNetworkFeatures
	cooperationNetworkFeaturesIdMap := make(map[uint64]bool)
	cooperationNetworkFeaturesCount := gs.GetCooperationNetworkFeaturesCount()
	for _, elem := range gs.CooperationNetworkFeaturesList {
		if _, ok := cooperationNetworkFeaturesIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for cooperationNetworkFeatures")
		}
		if elem.Id >= cooperationNetworkFeaturesCount {
			return fmt.Errorf("cooperationNetworkFeatures id should be lower or equal than the last id")
		}
		cooperationNetworkFeaturesIdMap[elem.Id] = true
	}
	// Check for duplicated index in cooperationData
	cooperationDataIndexMap := make(map[string]struct{})

	for _, elem := range gs.CooperationDataList {
		index := string(CooperationDataKey(elem.LabelIndex))
		if _, ok := cooperationDataIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for cooperationData")
		}
		cooperationDataIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in cooperationNetwork
	cooperationNetworkIdMap := make(map[uint64]bool)
	cooperationNetworkCount := gs.GetCooperationNetworkCount()
	for _, elem := range gs.CooperationNetworkList {
		if _, ok := cooperationNetworkIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for cooperationNetwork")
		}
		if elem.Id >= cooperationNetworkCount {
			return fmt.Errorf("cooperationNetwork id should be lower or equal than the last id")
		}
		cooperationNetworkIdMap[elem.Id] = true
	}
	// Check for duplicated ID in cooperativeDomain
	cooperativeDomainIdMap := make(map[uint64]bool)
	cooperativeDomainCount := gs.GetCooperativeDomainCount()
	for _, elem := range gs.CooperativeDomainList {
		if _, ok := cooperativeDomainIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for cooperativeDomain")
		}
		if elem.Id >= cooperativeDomainCount {
			return fmt.Errorf("cooperativeDomain id should be lower or equal than the last id")
		}
		cooperativeDomainIdMap[elem.Id] = true
	}
	// Check for duplicated ID in delegationPath
	delegationPathIdMap := make(map[uint64]bool)
	delegationPathCount := gs.GetDelegationPathCount()
	for _, elem := range gs.DelegationPathList {
		if _, ok := delegationPathIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for delegationPath")
		}
		if elem.Id >= delegationPathCount {
			return fmt.Errorf("delegationPath id should be lower or equal than the last id")
		}
		delegationPathIdMap[elem.Id] = true
	}
	// Check for duplicated ID in path
	pathIdMap := make(map[uint64]bool)
	pathCount := gs.GetPathCount()
	for _, elem := range gs.PathList {
		if _, ok := pathIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for path")
		}
		if elem.Id >= pathCount {
			return fmt.Errorf("path id should be lower or equal than the last id")
		}
		pathIdMap[elem.Id] = true
	}
	// Check for duplicated ID in timeCalculation
	timeCalculationIdMap := make(map[uint64]bool)
	timeCalculationCount := gs.GetTimeCalculationCount()
	for _, elem := range gs.TimeCalculationList {
		if _, ok := timeCalculationIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for timeCalculation")
		}
		if elem.Id >= timeCalculationCount {
			return fmt.Errorf("timeCalculation id should be lower or equal than the last id")
		}
		timeCalculationIdMap[elem.Id] = true
	}
	// Check for duplicated ID in calculationTime
	calculationTimeIdMap := make(map[uint64]bool)
	calculationTimeCount := gs.GetCalculationTimeCount()
	for _, elem := range gs.CalculationTimeList {
		if _, ok := calculationTimeIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for calculationTime")
		}
		if elem.Id >= calculationTimeCount {
			return fmt.Errorf("calculationTime id should be lower or equal than the last id")
		}
		calculationTimeIdMap[elem.Id] = true
	}
	// Check for duplicated ID in interDomainAclPolicy
	interDomainAclPolicyIdMap := make(map[uint64]bool)
	interDomainAclPolicyCount := gs.GetInterDomainAclPolicyCount()
	for _, elem := range gs.InterDomainAclPolicyList {
		if _, ok := interDomainAclPolicyIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for interDomainAclPolicy")
		}
		if elem.Id >= interDomainAclPolicyCount {
			return fmt.Errorf("interDomainAclPolicy id should be lower or equal than the last id")
		}
		interDomainAclPolicyIdMap[elem.Id] = true
	}
	// Check for duplicated ID in interDomainDclPolicy
	interDomainDclPolicyIdMap := make(map[uint64]bool)
	interDomainDclPolicyCount := gs.GetInterDomainDclPolicyCount()
	for _, elem := range gs.InterDomainDclPolicyList {
		if _, ok := interDomainDclPolicyIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for interDomainDclPolicy")
		}
		if elem.Id >= interDomainDclPolicyCount {
			return fmt.Errorf("interDomainDclPolicy id should be lower or equal than the last id")
		}
		interDomainDclPolicyIdMap[elem.Id] = true
	}
	// Check for duplicated ID in delegationConditions
	delegationConditionsIdMap := make(map[uint64]bool)
	delegationConditionsCount := gs.GetDelegationConditionsCount()
	for _, elem := range gs.DelegationConditionsList {
		if _, ok := delegationConditionsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for delegationConditions")
		}
		if elem.Id >= delegationConditionsCount {
			return fmt.Errorf("delegationConditions id should be lower or equal than the last id")
		}
		delegationConditionsIdMap[elem.Id] = true
	}
	// Check for duplicated ID in delegationRule
	delegationRuleIdMap := make(map[uint64]bool)
	delegationRuleCount := gs.GetDelegationRuleCount()
	for _, elem := range gs.DelegationRuleList {
		if _, ok := delegationRuleIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for delegationRule")
		}
		if elem.Id >= delegationRuleCount {
			return fmt.Errorf("delegationRule id should be lower or equal than the last id")
		}
		delegationRuleIdMap[elem.Id] = true
	}
	// Check for duplicated ID in delegationPolicyTarget
	delegationPolicyTargetIdMap := make(map[uint64]bool)
	delegationPolicyTargetCount := gs.GetDelegationPolicyTargetCount()
	for _, elem := range gs.DelegationPolicyTargetList {
		if _, ok := delegationPolicyTargetIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for delegationPolicyTarget")
		}
		if elem.Id >= delegationPolicyTargetCount {
			return fmt.Errorf("delegationPolicyTarget id should be lower or equal than the last id")
		}
		delegationPolicyTargetIdMap[elem.Id] = true
	}
	// Check for duplicated ID in delegationPolicy
	delegationPolicyIdMap := make(map[uint64]bool)
	delegationPolicyCount := gs.GetDelegationPolicyCount()
	for _, elem := range gs.DelegationPolicyList {
		if _, ok := delegationPolicyIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for delegationPolicy")
		}
		if elem.Id >= delegationPolicyCount {
			return fmt.Errorf("delegationPolicy id should be lower or equal than the last id")
		}
		delegationPolicyIdMap[elem.Id] = true
	}
	// Check for duplicated ID in delegationLog
	delegationLogIdMap := make(map[uint64]bool)
	delegationLogCount := gs.GetDelegationLogCount()
	for _, elem := range gs.DelegationLogList {
		if _, ok := delegationLogIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for delegationLog")
		}
		if elem.Id >= delegationLogCount {
			return fmt.Errorf("delegationLog id should be lower or equal than the last id")
		}
		delegationLogIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
