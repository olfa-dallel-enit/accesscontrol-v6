package types

const (
	// ModuleName defines the module name
	ModuleName = "cdac"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_cdac"

	// Version defines the current version the IBC module supports
	Version = "cdac-1"

	// PortID is the default port id that module binds to
	PortID = "cdac"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("cdac-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	PublicKeyKey      = "PublicKey-value-"
	PublicKeyCountKey = "PublicKey-count-"
)

const (
	ValidityKey      = "Validity-value-"
	ValidityCountKey = "Validity-count-"
)

const (
	CertificateKey      = "Certificate-value-"
	CertificateCountKey = "Certificate-count-"
)

const (
	IbcConnectionKey      = "IbcConnection-value-"
	IbcConnectionCountKey = "IbcConnection-count-"
)

const (
	DomainKey      = "Domain-value-"
	DomainCountKey = "Domain-count-"
)

const (
	AuthenticationLogKey      = "AuthenticationLog-value-"
	AuthenticationLogCountKey = "AuthenticationLog-count-"
)

const (
	DomainCooperationKey      = "DomainCooperation-value-"
	DomainCooperationCountKey = "DomainCooperation-count-"
)

const (
	CooperationLogKey      = "CooperationLog-value-"
	CooperationLogCountKey = "CooperationLog-count-"
)

const (
	ForwardPolicyKey      = "ForwardPolicy-value-"
	ForwardPolicyCountKey = "ForwardPolicy-count-"
)

const (
	CooperationNetworkFeaturesKey      = "CooperationNetworkFeatures-value-"
	CooperationNetworkFeaturesCountKey = "CooperationNetworkFeatures-count-"
)

const (
	CooperationNetworkKey      = "CooperationNetwork-value-"
	CooperationNetworkCountKey = "CooperationNetwork-count-"
)

const (
	UpdatePolicyKey = "UpdatePolicy-value-"
)

const (
	CooperativeDomainKey      = "CooperativeDomain-value-"
	CooperativeDomainCountKey = "CooperativeDomain-count-"
)

const (
	DelegationPathKey      = "DelegationPath-value-"
	DelegationPathCountKey = "DelegationPath-count-"
)

const (
	PathKey      = "Path-value-"
	PathCountKey = "Path-count-"
)

const (
	TimeCalculationKey      = "TimeCalculation-value-"
	TimeCalculationCountKey = "TimeCalculation-count-"
)

const (
	CalculationTimeKey      = "CalculationTime-value-"
	CalculationTimeCountKey = "CalculationTime-count-"
)

const (
	InterDomainAclPolicyKey      = "InterDomainAclPolicy-value-"
	InterDomainAclPolicyCountKey = "InterDomainAclPolicy-count-"
)

const (
	InterDomainDclPolicyKey      = "InterDomainDclPolicy-value-"
	InterDomainDclPolicyCountKey = "InterDomainDclPolicy-count-"
)

const (
	DelegationConditionsKey      = "DelegationConditions-value-"
	DelegationConditionsCountKey = "DelegationConditions-count-"
)

const (
	DelegationRuleKey      = "DelegationRule-value-"
	DelegationRuleCountKey = "DelegationRule-count-"
)

const (
	DelegationPolicyTargetKey      = "DelegationPolicyTarget-value-"
	DelegationPolicyTargetCountKey = "DelegationPolicyTarget-count-"
)

const (
	DelegationPolicyKey      = "DelegationPolicy-value-"
	DelegationPolicyCountKey = "DelegationPolicy-count-"
)

const (
	DelegationLogKey      = "DelegationLog-value-"
	DelegationLogCountKey = "DelegationLog-count-"
)
