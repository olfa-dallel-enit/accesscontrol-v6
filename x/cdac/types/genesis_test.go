package types_test

import (
	"testing"

	"crossdomain/x/cdac/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
					Event:           false,
					PeriodicalQuery: true,
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated publicKey",
			genState: &types.GenesisState{
				PublicKeyList: []types.PublicKey{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid publicKey count",
			genState: &types.GenesisState{
				PublicKeyList: []types.PublicKey{
					{
						Id: 1,
					},
				},
				PublicKeyCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated validity",
			genState: &types.GenesisState{
				ValidityList: []types.Validity{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid validity count",
			genState: &types.GenesisState{
				ValidityList: []types.Validity{
					{
						Id: 1,
					},
				},
				ValidityCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated certificate",
			genState: &types.GenesisState{
				CertificateList: []types.Certificate{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid certificate count",
			genState: &types.GenesisState{
				CertificateList: []types.Certificate{
					{
						Id: 1,
					},
				},
				CertificateCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated ibcConnection",
			genState: &types.GenesisState{
				IbcConnectionList: []types.IbcConnection{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid ibcConnection count",
			genState: &types.GenesisState{
				IbcConnectionList: []types.IbcConnection{
					{
						Id: 1,
					},
				},
				IbcConnectionCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated domain",
			genState: &types.GenesisState{
				DomainList: []types.Domain{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid domain count",
			genState: &types.GenesisState{
				DomainList: []types.Domain{
					{
						Id: 1,
					},
				},
				DomainCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated authenticationLog",
			genState: &types.GenesisState{
				AuthenticationLogList: []types.AuthenticationLog{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid authenticationLog count",
			genState: &types.GenesisState{
				AuthenticationLogList: []types.AuthenticationLog{
					{
						Id: 1,
					},
				},
				AuthenticationLogCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated domainCooperation",
			genState: &types.GenesisState{
				DomainCooperationList: []types.DomainCooperation{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid domainCooperation count",
			genState: &types.GenesisState{
				DomainCooperationList: []types.DomainCooperation{
					{
						Id: 1,
					},
				},
				DomainCooperationCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated cooperationLog",
			genState: &types.GenesisState{
				CooperationLogList: []types.CooperationLog{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid cooperationLog count",
			genState: &types.GenesisState{
				CooperationLogList: []types.CooperationLog{
					{
						Id: 1,
					},
				},
				CooperationLogCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated forwardPolicy",
			genState: &types.GenesisState{
				ForwardPolicyList: []types.ForwardPolicy{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid forwardPolicy count",
			genState: &types.GenesisState{
				ForwardPolicyList: []types.ForwardPolicy{
					{
						Id: 1,
					},
				},
				ForwardPolicyCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated domainMap",
			genState: &types.GenesisState{
				DomainMapList: []types.DomainMap{
					{
						DomainIndex: "0",
					},
					{
						DomainIndex: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated cooperationNetworkFeatures",
			genState: &types.GenesisState{
				CooperationNetworkFeaturesList: []types.CooperationNetworkFeatures{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid cooperationNetworkFeatures count",
			genState: &types.GenesisState{
				CooperationNetworkFeaturesList: []types.CooperationNetworkFeatures{
					{
						Id: 1,
					},
				},
				CooperationNetworkFeaturesCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated cooperationData",
			genState: &types.GenesisState{
				CooperationDataList: []types.CooperationData{
					{
						LabelIndex: "0",
					},
					{
						LabelIndex: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated cooperationNetwork",
			genState: &types.GenesisState{
				CooperationNetworkList: []types.CooperationNetwork{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid cooperationNetwork count",
			genState: &types.GenesisState{
				CooperationNetworkList: []types.CooperationNetwork{
					{
						Id: 1,
					},
				},
				CooperationNetworkCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated cooperativeDomain",
			genState: &types.GenesisState{
				CooperativeDomainList: []types.CooperativeDomain{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid cooperativeDomain count",
			genState: &types.GenesisState{
				CooperativeDomainList: []types.CooperativeDomain{
					{
						Id: 1,
					},
				},
				CooperativeDomainCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated delegationPath",
			genState: &types.GenesisState{
				DelegationPathList: []types.DelegationPath{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid delegationPath count",
			genState: &types.GenesisState{
				DelegationPathList: []types.DelegationPath{
					{
						Id: 1,
					},
				},
				DelegationPathCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated path",
			genState: &types.GenesisState{
				PathList: []types.Path{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid path count",
			genState: &types.GenesisState{
				PathList: []types.Path{
					{
						Id: 1,
					},
				},
				PathCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated timeCalculation",
			genState: &types.GenesisState{
				TimeCalculationList: []types.TimeCalculation{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid timeCalculation count",
			genState: &types.GenesisState{
				TimeCalculationList: []types.TimeCalculation{
					{
						Id: 1,
					},
				},
				TimeCalculationCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated calculationTime",
			genState: &types.GenesisState{
				CalculationTimeList: []types.CalculationTime{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid calculationTime count",
			genState: &types.GenesisState{
				CalculationTimeList: []types.CalculationTime{
					{
						Id: 1,
					},
				},
				CalculationTimeCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated interDomainAclPolicy",
			genState: &types.GenesisState{
				InterDomainAclPolicyList: []types.InterDomainAclPolicy{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid interDomainAclPolicy count",
			genState: &types.GenesisState{
				InterDomainAclPolicyList: []types.InterDomainAclPolicy{
					{
						Id: 1,
					},
				},
				InterDomainAclPolicyCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated interDomainDclPolicy",
			genState: &types.GenesisState{
				InterDomainDclPolicyList: []types.InterDomainDclPolicy{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid interDomainDclPolicy count",
			genState: &types.GenesisState{
				InterDomainDclPolicyList: []types.InterDomainDclPolicy{
					{
						Id: 1,
					},
				},
				InterDomainDclPolicyCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
