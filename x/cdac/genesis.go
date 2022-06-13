package cdac

import (
	"crossdomain/x/cdac/keeper"
	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the publicKey
	for _, elem := range genState.PublicKeyList {
		k.SetPublicKey(ctx, elem)
	}

	// Set publicKey count
	k.SetPublicKeyCount(ctx, genState.PublicKeyCount)
	// Set all the validity
	for _, elem := range genState.ValidityList {
		k.SetValidity(ctx, elem)
	}

	// Set validity count
	k.SetValidityCount(ctx, genState.ValidityCount)
	// Set all the certificate
	for _, elem := range genState.CertificateList {
		k.SetCertificate(ctx, elem)
	}

	// Set certificate count
	k.SetCertificateCount(ctx, genState.CertificateCount)
	// Set all the ibcConnection
	for _, elem := range genState.IbcConnectionList {
		k.SetIbcConnection(ctx, elem)
	}

	// Set ibcConnection count
	k.SetIbcConnectionCount(ctx, genState.IbcConnectionCount)
	// Set all the domain
	for _, elem := range genState.DomainList {
		k.SetDomain(ctx, elem)
	}

	// Set domain count
	k.SetDomainCount(ctx, genState.DomainCount)
	// Set all the authenticationLog
	for _, elem := range genState.AuthenticationLogList {
		k.SetAuthenticationLog(ctx, elem)
	}

	// Set authenticationLog count
	k.SetAuthenticationLogCount(ctx, genState.AuthenticationLogCount)
	// Set all the domainCooperation
	for _, elem := range genState.DomainCooperationList {
		k.SetDomainCooperation(ctx, elem)
	}

	// Set domainCooperation count
	k.SetDomainCooperationCount(ctx, genState.DomainCooperationCount)
	// Set all the cooperationLog
	for _, elem := range genState.CooperationLogList {
		k.SetCooperationLog(ctx, elem)
	}

	// Set cooperationLog count
	k.SetCooperationLogCount(ctx, genState.CooperationLogCount)
	// Set all the forwardPolicy
	for _, elem := range genState.ForwardPolicyList {
		k.SetForwardPolicy(ctx, elem)
	}

	// Set forwardPolicy count
	k.SetForwardPolicyCount(ctx, genState.ForwardPolicyCount)
	// Set all the domainMap
	for _, elem := range genState.DomainMapList {
		k.SetDomainMap(ctx, elem)
	}
	// Set all the cooperationNetworkFeatures
	for _, elem := range genState.CooperationNetworkFeaturesList {
		k.SetCooperationNetworkFeatures(ctx, elem)
	}

	// Set cooperationNetworkFeatures count
	k.SetCooperationNetworkFeaturesCount(ctx, genState.CooperationNetworkFeaturesCount)
	// Set all the cooperationData
	for _, elem := range genState.CooperationDataList {
		k.SetCooperationData(ctx, elem)
	}
	// Set all the cooperationNetwork
	for _, elem := range genState.CooperationNetworkList {
		k.SetCooperationNetwork(ctx, elem)
	}

	// Set cooperationNetwork count
	k.SetCooperationNetworkCount(ctx, genState.CooperationNetworkCount)
	// Set if defined
	if genState.UpdatePolicy != nil {
		k.SetUpdatePolicy(ctx, *genState.UpdatePolicy)
	}
	// Set all the cooperativeDomain
	for _, elem := range genState.CooperativeDomainList {
		k.SetCooperativeDomain(ctx, elem)
	}

	// Set cooperativeDomain count
	k.SetCooperativeDomainCount(ctx, genState.CooperativeDomainCount)
	// Set all the delegationPath
	for _, elem := range genState.DelegationPathList {
		k.SetDelegationPath(ctx, elem)
	}

	// Set delegationPath count
	k.SetDelegationPathCount(ctx, genState.DelegationPathCount)
	// Set all the path
	for _, elem := range genState.PathList {
		k.SetPath(ctx, elem)
	}

	// Set path count
	k.SetPathCount(ctx, genState.PathCount)
	// Set all the timeCalculation
	for _, elem := range genState.TimeCalculationList {
		k.SetTimeCalculation(ctx, elem)
	}

	// Set timeCalculation count
	k.SetTimeCalculationCount(ctx, genState.TimeCalculationCount)
	// Set all the calculationTime
	for _, elem := range genState.CalculationTimeList {
		k.SetCalculationTime(ctx, elem)
	}

	// Set calculationTime count
	k.SetCalculationTimeCount(ctx, genState.CalculationTimeCount)
	// Set all the interDomainAclPolicy
	for _, elem := range genState.InterDomainAclPolicyList {
		k.SetInterDomainAclPolicy(ctx, elem)
	}

	// Set interDomainAclPolicy count
	k.SetInterDomainAclPolicyCount(ctx, genState.InterDomainAclPolicyCount)
	// Set all the interDomainDclPolicy
	for _, elem := range genState.InterDomainDclPolicyList {
		k.SetInterDomainDclPolicy(ctx, elem)
	}

	// Set interDomainDclPolicy count
	k.SetInterDomainDclPolicyCount(ctx, genState.InterDomainDclPolicyCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PortId = k.GetPort(ctx)
	genesis.PublicKeyList = k.GetAllPublicKey(ctx)
	genesis.PublicKeyCount = k.GetPublicKeyCount(ctx)
	genesis.ValidityList = k.GetAllValidity(ctx)
	genesis.ValidityCount = k.GetValidityCount(ctx)
	genesis.CertificateList = k.GetAllCertificate(ctx)
	genesis.CertificateCount = k.GetCertificateCount(ctx)
	genesis.IbcConnectionList = k.GetAllIbcConnection(ctx)
	genesis.IbcConnectionCount = k.GetIbcConnectionCount(ctx)
	genesis.DomainList = k.GetAllDomain(ctx)
	genesis.DomainCount = k.GetDomainCount(ctx)
	genesis.AuthenticationLogList = k.GetAllAuthenticationLog(ctx)
	genesis.AuthenticationLogCount = k.GetAuthenticationLogCount(ctx)
	genesis.DomainCooperationList = k.GetAllDomainCooperation(ctx)
	genesis.DomainCooperationCount = k.GetDomainCooperationCount(ctx)
	genesis.CooperationLogList = k.GetAllCooperationLog(ctx)
	genesis.CooperationLogCount = k.GetCooperationLogCount(ctx)
	genesis.ForwardPolicyList = k.GetAllForwardPolicy(ctx)
	genesis.ForwardPolicyCount = k.GetForwardPolicyCount(ctx)
	genesis.DomainMapList = k.GetAllDomainMap(ctx)
	genesis.CooperationNetworkFeaturesList = k.GetAllCooperationNetworkFeatures(ctx)
	genesis.CooperationNetworkFeaturesCount = k.GetCooperationNetworkFeaturesCount(ctx)
	genesis.CooperationDataList = k.GetAllCooperationData(ctx)
	genesis.CooperationNetworkList = k.GetAllCooperationNetwork(ctx)
	genesis.CooperationNetworkCount = k.GetCooperationNetworkCount(ctx)
	// Get all updatePolicy
	updatePolicy, found := k.GetUpdatePolicy(ctx)
	if found {
		genesis.UpdatePolicy = &updatePolicy
	}
	genesis.CooperativeDomainList = k.GetAllCooperativeDomain(ctx)
	genesis.CooperativeDomainCount = k.GetCooperativeDomainCount(ctx)
	genesis.DelegationPathList = k.GetAllDelegationPath(ctx)
	genesis.DelegationPathCount = k.GetDelegationPathCount(ctx)
	genesis.PathList = k.GetAllPath(ctx)
	genesis.PathCount = k.GetPathCount(ctx)
	genesis.TimeCalculationList = k.GetAllTimeCalculation(ctx)
	genesis.TimeCalculationCount = k.GetTimeCalculationCount(ctx)
	genesis.CalculationTimeList = k.GetAllCalculationTime(ctx)
	genesis.CalculationTimeCount = k.GetCalculationTimeCount(ctx)
	genesis.InterDomainAclPolicyList = k.GetAllInterDomainAclPolicy(ctx)
	genesis.InterDomainAclPolicyCount = k.GetInterDomainAclPolicyCount(ctx)
	genesis.InterDomainDclPolicyList = k.GetAllInterDomainDclPolicy(ctx)
	genesis.InterDomainDclPolicyCount = k.GetInterDomainDclPolicyCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
