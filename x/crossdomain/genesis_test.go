package crossdomain_test

import (
	"testing"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/crossdomain"
	"crossdomain/x/crossdomain/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		PrivateKey: &types.PrivateKey{
			Value: "52",
		},
		LocalDomainCertificate: &types.LocalDomainCertificate{
			Value: "72",
		},
		RootCertificate: &types.RootCertificate{
			Value: "95",
		},
		LocalDomain: &types.LocalDomain{
			Name:       "35",
			DomainType: "36",
			Location:   "8",
		},
		ForwardPolicy: &types.ForwardPolicy{
			Mode:         "17",
			DomainList:   []string{"83"},
			LocationList: []string{"28"},
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
			Depth:        85,
			Cost:         83,
			LocationList: []string{"19"},
			InterestList: []string{"96"},
			Validity:     new(types.Validity),
			LastUpdate:   "61",
		},
		UpdatePolicy: &types.UpdatePolicy{
			Query:           false,
			Event:           true,
			PeriodicalQuery: true,
		},
		CooperationNetworkFeatures: &types.CooperationNetworkFeatures{
			Depth:        35,
			Cost:         51,
			InterestList: []string{"72"},
			LocationList: []string{"83"},
			LastUpdate:   "1",
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CrossdomainKeeper(t)
	crossdomain.InitGenesis(ctx, *k, genesisState)
	got := crossdomain.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PrivateKey, got.PrivateKey)
	require.Equal(t, genesisState.LocalDomainCertificate, got.LocalDomainCertificate)
	require.Equal(t, genesisState.RootCertificate, got.RootCertificate)
	require.Equal(t, genesisState.LocalDomain, got.LocalDomain)
	require.Equal(t, genesisState.ForwardPolicy, got.ForwardPolicy)
	require.ElementsMatch(t, genesisState.ValidityList, got.ValidityList)
	require.Equal(t, genesisState.ValidityCount, got.ValidityCount)
	require.Equal(t, genesisState.DecisionPolicy, got.DecisionPolicy)
	require.Equal(t, genesisState.UpdatePolicy, got.UpdatePolicy)
	require.Equal(t, genesisState.CooperationNetworkFeatures, got.CooperationNetworkFeatures)
	// this line is used by starport scaffolding # genesis/test/assert
}
