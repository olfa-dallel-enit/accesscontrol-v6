package types_test

import (
	"testing"

	"crossdomain/x/crossdomain/types"
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

				PrivateKey: &types.PrivateKey{
					Value: "48",
				},
				LocalDomainCertificate: &types.LocalDomainCertificate{
					Value: "59",
				},
				RootCertificate: &types.RootCertificate{
					Value: "26",
				},
				LocalDomain: &types.LocalDomain{
					Name:       "37",
					DomainType: "29",
					Location:   "32",
				},
				ForwardPolicy: &types.ForwardPolicy{
					Mode:         "10",
					DomainList:   []string{"11"},
					LocationList: []string{"27"},
				},
				ValidityList: []types.Validity{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				ValidityCount: 2,
				DecisionPolicy: &types.DecisionPolicy{
					Depth:        84,
					Cost:         48,
					LocationList: []string{"43"},
					InterestList: []string{"64"},
					Validity:     new(types.Validity),
					LastUpdate:   "56",
				},
				UpdatePolicy: &types.UpdatePolicy{
					Query:           true,
					Event:           true,
					PeriodicalQuery: true,
				},
				CooperationNetworkFeatures: &types.CooperationNetworkFeatures{
					Depth:        11,
					Cost:         13,
					InterestList: []string{"31"},
					LocationList: []string{"94"},
					LastUpdate:   "9",
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
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
