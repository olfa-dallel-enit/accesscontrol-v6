package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"crossdomain/x/cdac/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreatePublicKey())
	cmd.AddCommand(CmdUpdatePublicKey())
	cmd.AddCommand(CmdDeletePublicKey())
	cmd.AddCommand(CmdCreateValidity())
	cmd.AddCommand(CmdUpdateValidity())
	cmd.AddCommand(CmdDeleteValidity())
	cmd.AddCommand(CmdCreateCertificate())
	cmd.AddCommand(CmdUpdateCertificate())
	cmd.AddCommand(CmdDeleteCertificate())
	cmd.AddCommand(CmdCreateIbcConnection())
	cmd.AddCommand(CmdUpdateIbcConnection())
	cmd.AddCommand(CmdDeleteIbcConnection())
	cmd.AddCommand(CmdCreateDomain())
	cmd.AddCommand(CmdUpdateDomain())
	cmd.AddCommand(CmdDeleteDomain())
	cmd.AddCommand(CmdCreateAuthenticationLog())
	cmd.AddCommand(CmdUpdateAuthenticationLog())
	cmd.AddCommand(CmdDeleteAuthenticationLog())
	cmd.AddCommand(CmdSendAuthenticateDomain())
	cmd.AddCommand(CmdCreateDomainCooperation())
	cmd.AddCommand(CmdUpdateDomainCooperation())
	cmd.AddCommand(CmdDeleteDomainCooperation())
	cmd.AddCommand(CmdCreateCooperationLog())
	cmd.AddCommand(CmdUpdateCooperationLog())
	cmd.AddCommand(CmdDeleteCooperationLog())
	cmd.AddCommand(CmdSendEstablishCooperation())
	cmd.AddCommand(CmdSendForwardCooperationData())
	cmd.AddCommand(CmdCreateForwardPolicy())
	cmd.AddCommand(CmdUpdateForwardPolicy())
	cmd.AddCommand(CmdDeleteForwardPolicy())
	cmd.AddCommand(CmdSendExchangeCooperationData())
	cmd.AddCommand(CmdSendModifyCooperationCost())
	cmd.AddCommand(CmdSendDisableCooperation())
	cmd.AddCommand(CmdSendEnableCooperation())
	cmd.AddCommand(CmdSendModifyCooperationValidity())
	cmd.AddCommand(CmdSendModifyCooperationInterest())
	cmd.AddCommand(CmdSendRevokeCooperation())
	cmd.AddCommand(CmdCreateDomainMap())
	cmd.AddCommand(CmdUpdateDomainMap())
	cmd.AddCommand(CmdDeleteDomainMap())
	cmd.AddCommand(CmdCreateCooperationNetworkFeatures())
	cmd.AddCommand(CmdUpdateCooperationNetworkFeatures())
	cmd.AddCommand(CmdDeleteCooperationNetworkFeatures())
	cmd.AddCommand(CmdCreateCooperationData())
	cmd.AddCommand(CmdUpdateCooperationData())
	cmd.AddCommand(CmdDeleteCooperationData())
	cmd.AddCommand(CmdCreateCooperationNetwork())
	cmd.AddCommand(CmdUpdateCooperationNetwork())
	cmd.AddCommand(CmdDeleteCooperationNetwork())
	cmd.AddCommand(CmdGenerateCooperationNetwork())
	cmd.AddCommand(CmdCreateUpdatePolicy())
	cmd.AddCommand(CmdUpdateUpdatePolicy())
	cmd.AddCommand(CmdDeleteUpdatePolicy())
	cmd.AddCommand(CmdCreateCooperativeDomain())
	cmd.AddCommand(CmdUpdateCooperativeDomain())
	cmd.AddCommand(CmdDeleteCooperativeDomain())
	cmd.AddCommand(CmdCreateDelegationPath())
	cmd.AddCommand(CmdUpdateDelegationPath())
	cmd.AddCommand(CmdDeleteDelegationPath())
	cmd.AddCommand(CmdCreatePath())
	cmd.AddCommand(CmdUpdatePath())
	cmd.AddCommand(CmdDeletePath())
	cmd.AddCommand(CmdCreateTimeCalculation())
	cmd.AddCommand(CmdUpdateTimeCalculation())
	cmd.AddCommand(CmdDeleteTimeCalculation())
	cmd.AddCommand(CmdCreateCalculationTime())
	cmd.AddCommand(CmdUpdateCalculationTime())
	cmd.AddCommand(CmdDeleteCalculationTime())
	cmd.AddCommand(CmdRequestAccessPermission())
	cmd.AddCommand(CmdCreateInterDomainAclPolicy())
	cmd.AddCommand(CmdUpdateInterDomainAclPolicy())
	cmd.AddCommand(CmdDeleteInterDomainAclPolicy())
	cmd.AddCommand(CmdCreateInterDomainDclPolicy())
	cmd.AddCommand(CmdUpdateInterDomainDclPolicy())
	cmd.AddCommand(CmdDeleteInterDomainDclPolicy())
	cmd.AddCommand(CmdCreateDelegationConditions())
	cmd.AddCommand(CmdUpdateDelegationConditions())
	cmd.AddCommand(CmdDeleteDelegationConditions())
	cmd.AddCommand(CmdCreateDelegationRule())
	cmd.AddCommand(CmdUpdateDelegationRule())
	cmd.AddCommand(CmdDeleteDelegationRule())
	cmd.AddCommand(CmdCreateDelegationPolicyTarget())
	cmd.AddCommand(CmdUpdateDelegationPolicyTarget())
	cmd.AddCommand(CmdDeleteDelegationPolicyTarget())
	cmd.AddCommand(CmdCreateDelegationPolicy())
	cmd.AddCommand(CmdUpdateDelegationPolicy())
	cmd.AddCommand(CmdDeleteDelegationPolicy())
	cmd.AddCommand(CmdRequestDelegation())
	// this line is used by starport scaffolding # 1

	return cmd
}
