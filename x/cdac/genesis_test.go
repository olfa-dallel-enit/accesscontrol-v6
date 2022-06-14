package cdac_test

import (
	"testing"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/cdac"
	"crossdomain/x/cdac/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		PublicKeyList: []types.PublicKey{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PublicKeyCount: 2,
		ValidityList: []types.Validity{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ValidityCount: 2,
		CertificateList: []types.Certificate{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CertificateCount: 2,
		IbcConnectionList: []types.IbcConnection{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		IbcConnectionCount: 2,
		DomainList: []types.Domain{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DomainCount: 2,
		AuthenticationLogList: []types.AuthenticationLog{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		AuthenticationLogCount: 2,
		DomainCooperationList: []types.DomainCooperation{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DomainCooperationCount: 2,
		CooperationLogList: []types.CooperationLog{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CooperationLogCount: 2,
		ForwardPolicyList: []types.ForwardPolicy{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ForwardPolicyCount: 2,
		DomainMapList: []types.DomainMap{
			{
				DomainIndex: "0",
			},
			{
				DomainIndex: "1",
			},
		},
		CooperationNetworkFeaturesList: []types.CooperationNetworkFeatures{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CooperationNetworkFeaturesCount: 2,
		CooperationDataList: []types.CooperationData{
			{
				LabelIndex: "0",
			},
			{
				LabelIndex: "1",
			},
		},
		CooperationNetworkList: []types.CooperationNetwork{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CooperationNetworkCount: 2,
		UpdatePolicy: &types.UpdatePolicy{
			Query:           false,
			Event:           true,
			PeriodicalQuery: false,
		},
		CooperativeDomainList: []types.CooperativeDomain{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CooperativeDomainCount: 2,
		DelegationPathList: []types.DelegationPath{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DelegationPathCount: 2,
		PathList: []types.Path{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PathCount: 2,
		TimeCalculationList: []types.TimeCalculation{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		TimeCalculationCount: 2,
		CalculationTimeList: []types.CalculationTime{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CalculationTimeCount: 2,
		InterDomainAclPolicyList: []types.InterDomainAclPolicy{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		InterDomainAclPolicyCount: 2,
		InterDomainDclPolicyList: []types.InterDomainDclPolicy{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		InterDomainDclPolicyCount: 2,
		DelegationConditionsList: []types.DelegationConditions{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DelegationConditionsCount: 2,
		DelegationRuleList: []types.DelegationRule{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DelegationRuleCount: 2,
		DelegationPolicyTargetList: []types.DelegationPolicyTarget{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DelegationPolicyTargetCount: 2,
		DelegationPolicyList: []types.DelegationPolicy{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DelegationPolicyCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CdacKeeper(t)
	cdac.InitGenesis(ctx, *k, genesisState)
	got := cdac.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.PublicKeyList, got.PublicKeyList)
	require.Equal(t, genesisState.PublicKeyCount, got.PublicKeyCount)
	require.ElementsMatch(t, genesisState.ValidityList, got.ValidityList)
	require.Equal(t, genesisState.ValidityCount, got.ValidityCount)
	require.ElementsMatch(t, genesisState.CertificateList, got.CertificateList)
	require.Equal(t, genesisState.CertificateCount, got.CertificateCount)
	require.ElementsMatch(t, genesisState.IbcConnectionList, got.IbcConnectionList)
	require.Equal(t, genesisState.IbcConnectionCount, got.IbcConnectionCount)
	require.ElementsMatch(t, genesisState.DomainList, got.DomainList)
	require.Equal(t, genesisState.DomainCount, got.DomainCount)
	require.ElementsMatch(t, genesisState.AuthenticationLogList, got.AuthenticationLogList)
	require.Equal(t, genesisState.AuthenticationLogCount, got.AuthenticationLogCount)
	require.ElementsMatch(t, genesisState.DomainCooperationList, got.DomainCooperationList)
	require.Equal(t, genesisState.DomainCooperationCount, got.DomainCooperationCount)
	require.ElementsMatch(t, genesisState.CooperationLogList, got.CooperationLogList)
	require.Equal(t, genesisState.CooperationLogCount, got.CooperationLogCount)
	require.ElementsMatch(t, genesisState.ForwardPolicyList, got.ForwardPolicyList)
	require.Equal(t, genesisState.ForwardPolicyCount, got.ForwardPolicyCount)
	require.ElementsMatch(t, genesisState.DomainMapList, got.DomainMapList)
	require.ElementsMatch(t, genesisState.CooperationNetworkFeaturesList, got.CooperationNetworkFeaturesList)
	require.Equal(t, genesisState.CooperationNetworkFeaturesCount, got.CooperationNetworkFeaturesCount)
	require.ElementsMatch(t, genesisState.CooperationDataList, got.CooperationDataList)
	require.ElementsMatch(t, genesisState.CooperationNetworkList, got.CooperationNetworkList)
	require.Equal(t, genesisState.CooperationNetworkCount, got.CooperationNetworkCount)
	require.Equal(t, genesisState.UpdatePolicy, got.UpdatePolicy)
	require.ElementsMatch(t, genesisState.CooperativeDomainList, got.CooperativeDomainList)
	require.Equal(t, genesisState.CooperativeDomainCount, got.CooperativeDomainCount)
	require.ElementsMatch(t, genesisState.DelegationPathList, got.DelegationPathList)
	require.Equal(t, genesisState.DelegationPathCount, got.DelegationPathCount)
	require.ElementsMatch(t, genesisState.PathList, got.PathList)
	require.Equal(t, genesisState.PathCount, got.PathCount)
	require.ElementsMatch(t, genesisState.TimeCalculationList, got.TimeCalculationList)
	require.Equal(t, genesisState.TimeCalculationCount, got.TimeCalculationCount)
	require.ElementsMatch(t, genesisState.CalculationTimeList, got.CalculationTimeList)
	require.Equal(t, genesisState.CalculationTimeCount, got.CalculationTimeCount)
	require.ElementsMatch(t, genesisState.InterDomainAclPolicyList, got.InterDomainAclPolicyList)
	require.Equal(t, genesisState.InterDomainAclPolicyCount, got.InterDomainAclPolicyCount)
	require.ElementsMatch(t, genesisState.InterDomainDclPolicyList, got.InterDomainDclPolicyList)
	require.Equal(t, genesisState.InterDomainDclPolicyCount, got.InterDomainDclPolicyCount)
	require.ElementsMatch(t, genesisState.DelegationConditionsList, got.DelegationConditionsList)
	require.Equal(t, genesisState.DelegationConditionsCount, got.DelegationConditionsCount)
	require.ElementsMatch(t, genesisState.DelegationRuleList, got.DelegationRuleList)
	require.Equal(t, genesisState.DelegationRuleCount, got.DelegationRuleCount)
	require.ElementsMatch(t, genesisState.DelegationPolicyTargetList, got.DelegationPolicyTargetList)
	require.Equal(t, genesisState.DelegationPolicyTargetCount, got.DelegationPolicyTargetCount)
	require.ElementsMatch(t, genesisState.DelegationPolicyList, got.DelegationPolicyList)
	require.Equal(t, genesisState.DelegationPolicyCount, got.DelegationPolicyCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
