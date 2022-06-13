package cdac

import (
	"math/rand"

	"crossdomain/testutil/sample"
	cdacsimulation "crossdomain/x/cdac/simulation"
	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = cdacsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreatePublicKey = "op_weight_msg_public_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePublicKey int = 100

	opWeightMsgUpdatePublicKey = "op_weight_msg_public_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePublicKey int = 100

	opWeightMsgDeletePublicKey = "op_weight_msg_public_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePublicKey int = 100

	opWeightMsgCreateValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateValidity int = 100

	opWeightMsgUpdateValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateValidity int = 100

	opWeightMsgDeleteValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteValidity int = 100

	opWeightMsgCreateCertificate = "op_weight_msg_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCertificate int = 100

	opWeightMsgUpdateCertificate = "op_weight_msg_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCertificate int = 100

	opWeightMsgDeleteCertificate = "op_weight_msg_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCertificate int = 100

	opWeightMsgCreateIbcConnection = "op_weight_msg_ibc_connection"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateIbcConnection int = 100

	opWeightMsgUpdateIbcConnection = "op_weight_msg_ibc_connection"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateIbcConnection int = 100

	opWeightMsgDeleteIbcConnection = "op_weight_msg_ibc_connection"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteIbcConnection int = 100

	opWeightMsgCreateDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDomain int = 100

	opWeightMsgUpdateDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDomain int = 100

	opWeightMsgDeleteDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDomain int = 100

	opWeightMsgCreateAuthenticationLog = "op_weight_msg_authentication_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateAuthenticationLog int = 100

	opWeightMsgUpdateAuthenticationLog = "op_weight_msg_authentication_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateAuthenticationLog int = 100

	opWeightMsgDeleteAuthenticationLog = "op_weight_msg_authentication_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteAuthenticationLog int = 100

	opWeightMsgCreateDomainCooperation = "op_weight_msg_domain_cooperation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDomainCooperation int = 100

	opWeightMsgUpdateDomainCooperation = "op_weight_msg_domain_cooperation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDomainCooperation int = 100

	opWeightMsgDeleteDomainCooperation = "op_weight_msg_domain_cooperation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDomainCooperation int = 100

	opWeightMsgCreateCooperationLog = "op_weight_msg_cooperation_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCooperationLog int = 100

	opWeightMsgUpdateCooperationLog = "op_weight_msg_cooperation_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCooperationLog int = 100

	opWeightMsgDeleteCooperationLog = "op_weight_msg_cooperation_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCooperationLog int = 100

	opWeightMsgCreateForwardPolicy = "op_weight_msg_forward_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateForwardPolicy int = 100

	opWeightMsgUpdateForwardPolicy = "op_weight_msg_forward_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateForwardPolicy int = 100

	opWeightMsgDeleteForwardPolicy = "op_weight_msg_forward_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteForwardPolicy int = 100

	opWeightMsgCreateDomainMap = "op_weight_msg_domain_map"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDomainMap int = 100

	opWeightMsgUpdateDomainMap = "op_weight_msg_domain_map"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDomainMap int = 100

	opWeightMsgDeleteDomainMap = "op_weight_msg_domain_map"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDomainMap int = 100

	opWeightMsgCreateCooperationNetworkFeatures = "op_weight_msg_cooperation_network_features"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCooperationNetworkFeatures int = 100

	opWeightMsgUpdateCooperationNetworkFeatures = "op_weight_msg_cooperation_network_features"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCooperationNetworkFeatures int = 100

	opWeightMsgDeleteCooperationNetworkFeatures = "op_weight_msg_cooperation_network_features"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCooperationNetworkFeatures int = 100

	opWeightMsgCreateCooperationData = "op_weight_msg_cooperation_data"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCooperationData int = 100

	opWeightMsgUpdateCooperationData = "op_weight_msg_cooperation_data"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCooperationData int = 100

	opWeightMsgDeleteCooperationData = "op_weight_msg_cooperation_data"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCooperationData int = 100

	opWeightMsgCreateCooperationNetwork = "op_weight_msg_cooperation_network"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCooperationNetwork int = 100

	opWeightMsgUpdateCooperationNetwork = "op_weight_msg_cooperation_network"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCooperationNetwork int = 100

	opWeightMsgDeleteCooperationNetwork = "op_weight_msg_cooperation_network"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCooperationNetwork int = 100

	opWeightMsgGenerateCooperationNetwork = "op_weight_msg_generate_cooperation_network"
	// TODO: Determine the simulation weight value
	defaultWeightMsgGenerateCooperationNetwork int = 100

	opWeightMsgCreateUpdatePolicy = "op_weight_msg_update_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateUpdatePolicy int = 100

	opWeightMsgUpdateUpdatePolicy = "op_weight_msg_update_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateUpdatePolicy int = 100

	opWeightMsgDeleteUpdatePolicy = "op_weight_msg_update_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteUpdatePolicy int = 100

	opWeightMsgCreateCooperativeDomain = "op_weight_msg_cooperative_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCooperativeDomain int = 100

	opWeightMsgUpdateCooperativeDomain = "op_weight_msg_cooperative_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCooperativeDomain int = 100

	opWeightMsgDeleteCooperativeDomain = "op_weight_msg_cooperative_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCooperativeDomain int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	cdacGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		PublicKeyList: []types.PublicKey{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		PublicKeyCount: 2,
		ValidityList: []types.Validity{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ValidityCount: 2,
		CertificateList: []types.Certificate{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		CertificateCount: 2,
		IbcConnectionList: []types.IbcConnection{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		IbcConnectionCount: 2,
		DomainList: []types.Domain{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DomainCount: 2,
		AuthenticationLogList: []types.AuthenticationLog{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		AuthenticationLogCount: 2,
		DomainCooperationList: []types.DomainCooperation{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DomainCooperationCount: 2,
		CooperationLogList: []types.CooperationLog{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		CooperationLogCount: 2,
		ForwardPolicyList: []types.ForwardPolicy{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ForwardPolicyCount: 2,
		DomainMapList: []types.DomainMap{
			{
				Creator:     sample.AccAddress(),
				DomainIndex: "0",
			},
			{
				Creator:     sample.AccAddress(),
				DomainIndex: "1",
			},
		},
		CooperationNetworkFeaturesList: []types.CooperationNetworkFeatures{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		CooperationNetworkFeaturesCount: 2,
		CooperationDataList: []types.CooperationData{
			{
				Creator:    sample.AccAddress(),
				LabelIndex: "0",
			},
			{
				Creator:    sample.AccAddress(),
				LabelIndex: "1",
			},
		},
		CooperationNetworkList: []types.CooperationNetwork{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		CooperationNetworkCount: 2,
		CooperativeDomainList: []types.CooperativeDomain{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		CooperativeDomainCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&cdacGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreatePublicKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePublicKey, &weightMsgCreatePublicKey, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePublicKey = defaultWeightMsgCreatePublicKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePublicKey,
		cdacsimulation.SimulateMsgCreatePublicKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePublicKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePublicKey, &weightMsgUpdatePublicKey, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePublicKey = defaultWeightMsgUpdatePublicKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePublicKey,
		cdacsimulation.SimulateMsgUpdatePublicKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePublicKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePublicKey, &weightMsgDeletePublicKey, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePublicKey = defaultWeightMsgDeletePublicKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePublicKey,
		cdacsimulation.SimulateMsgDeletePublicKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateValidity, &weightMsgCreateValidity, nil,
		func(_ *rand.Rand) {
			weightMsgCreateValidity = defaultWeightMsgCreateValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateValidity,
		cdacsimulation.SimulateMsgCreateValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateValidity, &weightMsgUpdateValidity, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateValidity = defaultWeightMsgUpdateValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateValidity,
		cdacsimulation.SimulateMsgUpdateValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteValidity, &weightMsgDeleteValidity, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteValidity = defaultWeightMsgDeleteValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteValidity,
		cdacsimulation.SimulateMsgDeleteValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCertificate, &weightMsgCreateCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCertificate = defaultWeightMsgCreateCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCertificate,
		cdacsimulation.SimulateMsgCreateCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCertificate, &weightMsgUpdateCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCertificate = defaultWeightMsgUpdateCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCertificate,
		cdacsimulation.SimulateMsgUpdateCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCertificate, &weightMsgDeleteCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCertificate = defaultWeightMsgDeleteCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCertificate,
		cdacsimulation.SimulateMsgDeleteCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateIbcConnection int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateIbcConnection, &weightMsgCreateIbcConnection, nil,
		func(_ *rand.Rand) {
			weightMsgCreateIbcConnection = defaultWeightMsgCreateIbcConnection
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateIbcConnection,
		cdacsimulation.SimulateMsgCreateIbcConnection(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateIbcConnection int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateIbcConnection, &weightMsgUpdateIbcConnection, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateIbcConnection = defaultWeightMsgUpdateIbcConnection
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateIbcConnection,
		cdacsimulation.SimulateMsgUpdateIbcConnection(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteIbcConnection int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteIbcConnection, &weightMsgDeleteIbcConnection, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteIbcConnection = defaultWeightMsgDeleteIbcConnection
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteIbcConnection,
		cdacsimulation.SimulateMsgDeleteIbcConnection(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDomain, &weightMsgCreateDomain, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDomain = defaultWeightMsgCreateDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDomain,
		cdacsimulation.SimulateMsgCreateDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDomain, &weightMsgUpdateDomain, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDomain = defaultWeightMsgUpdateDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDomain,
		cdacsimulation.SimulateMsgUpdateDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDomain, &weightMsgDeleteDomain, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDomain = defaultWeightMsgDeleteDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDomain,
		cdacsimulation.SimulateMsgDeleteDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateAuthenticationLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateAuthenticationLog, &weightMsgCreateAuthenticationLog, nil,
		func(_ *rand.Rand) {
			weightMsgCreateAuthenticationLog = defaultWeightMsgCreateAuthenticationLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateAuthenticationLog,
		cdacsimulation.SimulateMsgCreateAuthenticationLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateAuthenticationLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateAuthenticationLog, &weightMsgUpdateAuthenticationLog, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateAuthenticationLog = defaultWeightMsgUpdateAuthenticationLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateAuthenticationLog,
		cdacsimulation.SimulateMsgUpdateAuthenticationLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteAuthenticationLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteAuthenticationLog, &weightMsgDeleteAuthenticationLog, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteAuthenticationLog = defaultWeightMsgDeleteAuthenticationLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteAuthenticationLog,
		cdacsimulation.SimulateMsgDeleteAuthenticationLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDomainCooperation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDomainCooperation, &weightMsgCreateDomainCooperation, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDomainCooperation = defaultWeightMsgCreateDomainCooperation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDomainCooperation,
		cdacsimulation.SimulateMsgCreateDomainCooperation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDomainCooperation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDomainCooperation, &weightMsgUpdateDomainCooperation, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDomainCooperation = defaultWeightMsgUpdateDomainCooperation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDomainCooperation,
		cdacsimulation.SimulateMsgUpdateDomainCooperation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDomainCooperation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDomainCooperation, &weightMsgDeleteDomainCooperation, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDomainCooperation = defaultWeightMsgDeleteDomainCooperation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDomainCooperation,
		cdacsimulation.SimulateMsgDeleteDomainCooperation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCooperationLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCooperationLog, &weightMsgCreateCooperationLog, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCooperationLog = defaultWeightMsgCreateCooperationLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCooperationLog,
		cdacsimulation.SimulateMsgCreateCooperationLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCooperationLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCooperationLog, &weightMsgUpdateCooperationLog, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCooperationLog = defaultWeightMsgUpdateCooperationLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCooperationLog,
		cdacsimulation.SimulateMsgUpdateCooperationLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCooperationLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCooperationLog, &weightMsgDeleteCooperationLog, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCooperationLog = defaultWeightMsgDeleteCooperationLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCooperationLog,
		cdacsimulation.SimulateMsgDeleteCooperationLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateForwardPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateForwardPolicy, &weightMsgCreateForwardPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgCreateForwardPolicy = defaultWeightMsgCreateForwardPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateForwardPolicy,
		cdacsimulation.SimulateMsgCreateForwardPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateForwardPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateForwardPolicy, &weightMsgUpdateForwardPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateForwardPolicy = defaultWeightMsgUpdateForwardPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateForwardPolicy,
		cdacsimulation.SimulateMsgUpdateForwardPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteForwardPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteForwardPolicy, &weightMsgDeleteForwardPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteForwardPolicy = defaultWeightMsgDeleteForwardPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteForwardPolicy,
		cdacsimulation.SimulateMsgDeleteForwardPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDomainMap int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDomainMap, &weightMsgCreateDomainMap, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDomainMap = defaultWeightMsgCreateDomainMap
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDomainMap,
		cdacsimulation.SimulateMsgCreateDomainMap(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDomainMap int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDomainMap, &weightMsgUpdateDomainMap, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDomainMap = defaultWeightMsgUpdateDomainMap
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDomainMap,
		cdacsimulation.SimulateMsgUpdateDomainMap(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDomainMap int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDomainMap, &weightMsgDeleteDomainMap, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDomainMap = defaultWeightMsgDeleteDomainMap
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDomainMap,
		cdacsimulation.SimulateMsgDeleteDomainMap(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCooperationNetworkFeatures int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCooperationNetworkFeatures, &weightMsgCreateCooperationNetworkFeatures, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCooperationNetworkFeatures = defaultWeightMsgCreateCooperationNetworkFeatures
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCooperationNetworkFeatures,
		cdacsimulation.SimulateMsgCreateCooperationNetworkFeatures(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCooperationNetworkFeatures int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCooperationNetworkFeatures, &weightMsgUpdateCooperationNetworkFeatures, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCooperationNetworkFeatures = defaultWeightMsgUpdateCooperationNetworkFeatures
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCooperationNetworkFeatures,
		cdacsimulation.SimulateMsgUpdateCooperationNetworkFeatures(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCooperationNetworkFeatures int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCooperationNetworkFeatures, &weightMsgDeleteCooperationNetworkFeatures, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCooperationNetworkFeatures = defaultWeightMsgDeleteCooperationNetworkFeatures
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCooperationNetworkFeatures,
		cdacsimulation.SimulateMsgDeleteCooperationNetworkFeatures(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCooperationData int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCooperationData, &weightMsgCreateCooperationData, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCooperationData = defaultWeightMsgCreateCooperationData
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCooperationData,
		cdacsimulation.SimulateMsgCreateCooperationData(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCooperationData int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCooperationData, &weightMsgUpdateCooperationData, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCooperationData = defaultWeightMsgUpdateCooperationData
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCooperationData,
		cdacsimulation.SimulateMsgUpdateCooperationData(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCooperationData int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCooperationData, &weightMsgDeleteCooperationData, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCooperationData = defaultWeightMsgDeleteCooperationData
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCooperationData,
		cdacsimulation.SimulateMsgDeleteCooperationData(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCooperationNetwork int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCooperationNetwork, &weightMsgCreateCooperationNetwork, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCooperationNetwork = defaultWeightMsgCreateCooperationNetwork
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCooperationNetwork,
		cdacsimulation.SimulateMsgCreateCooperationNetwork(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCooperationNetwork int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCooperationNetwork, &weightMsgUpdateCooperationNetwork, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCooperationNetwork = defaultWeightMsgUpdateCooperationNetwork
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCooperationNetwork,
		cdacsimulation.SimulateMsgUpdateCooperationNetwork(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCooperationNetwork int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCooperationNetwork, &weightMsgDeleteCooperationNetwork, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCooperationNetwork = defaultWeightMsgDeleteCooperationNetwork
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCooperationNetwork,
		cdacsimulation.SimulateMsgDeleteCooperationNetwork(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgGenerateCooperationNetwork int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgGenerateCooperationNetwork, &weightMsgGenerateCooperationNetwork, nil,
		func(_ *rand.Rand) {
			weightMsgGenerateCooperationNetwork = defaultWeightMsgGenerateCooperationNetwork
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgGenerateCooperationNetwork,
		cdacsimulation.SimulateMsgGenerateCooperationNetwork(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateUpdatePolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateUpdatePolicy, &weightMsgCreateUpdatePolicy, nil,
		func(_ *rand.Rand) {
			weightMsgCreateUpdatePolicy = defaultWeightMsgCreateUpdatePolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateUpdatePolicy,
		cdacsimulation.SimulateMsgCreateUpdatePolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateUpdatePolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateUpdatePolicy, &weightMsgUpdateUpdatePolicy, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateUpdatePolicy = defaultWeightMsgUpdateUpdatePolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateUpdatePolicy,
		cdacsimulation.SimulateMsgUpdateUpdatePolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteUpdatePolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteUpdatePolicy, &weightMsgDeleteUpdatePolicy, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteUpdatePolicy = defaultWeightMsgDeleteUpdatePolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteUpdatePolicy,
		cdacsimulation.SimulateMsgDeleteUpdatePolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCooperativeDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCooperativeDomain, &weightMsgCreateCooperativeDomain, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCooperativeDomain = defaultWeightMsgCreateCooperativeDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCooperativeDomain,
		cdacsimulation.SimulateMsgCreateCooperativeDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCooperativeDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCooperativeDomain, &weightMsgUpdateCooperativeDomain, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCooperativeDomain = defaultWeightMsgUpdateCooperativeDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCooperativeDomain,
		cdacsimulation.SimulateMsgUpdateCooperativeDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCooperativeDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCooperativeDomain, &weightMsgDeleteCooperativeDomain, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCooperativeDomain = defaultWeightMsgDeleteCooperativeDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCooperativeDomain,
		cdacsimulation.SimulateMsgDeleteCooperativeDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
