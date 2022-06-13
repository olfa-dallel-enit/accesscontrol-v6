package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"crossdomain/x/cdac/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group cdac queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListPublicKey())
	cmd.AddCommand(CmdShowPublicKey())
	cmd.AddCommand(CmdListValidity())
	cmd.AddCommand(CmdShowValidity())
	cmd.AddCommand(CmdListCertificate())
	cmd.AddCommand(CmdShowCertificate())
	cmd.AddCommand(CmdListIbcConnection())
	cmd.AddCommand(CmdShowIbcConnection())
	cmd.AddCommand(CmdListDomain())
	cmd.AddCommand(CmdShowDomain())
	cmd.AddCommand(CmdListAuthenticationLog())
	cmd.AddCommand(CmdShowAuthenticationLog())
	cmd.AddCommand(CmdListDomainCooperation())
	cmd.AddCommand(CmdShowDomainCooperation())
	cmd.AddCommand(CmdListCooperationLog())
	cmd.AddCommand(CmdShowCooperationLog())
	cmd.AddCommand(CmdCheckEstablishedCooperationByChannel())

	cmd.AddCommand(CmdEstablishedCooperationByChannel())

	cmd.AddCommand(CmdListForwardPolicy())
	cmd.AddCommand(CmdShowForwardPolicy())
	cmd.AddCommand(CmdRetrieveForwardPolicy())

	cmd.AddCommand(CmdListDomainMap())
	cmd.AddCommand(CmdShowDomainMap())
	cmd.AddCommand(CmdListCooperationNetworkFeatures())
	cmd.AddCommand(CmdShowCooperationNetworkFeatures())
	cmd.AddCommand(CmdListCooperationData())
	cmd.AddCommand(CmdShowCooperationData())
	cmd.AddCommand(CmdListCooperationNetwork())
	cmd.AddCommand(CmdShowCooperationNetwork())
	cmd.AddCommand(CmdShowUpdatePolicy())
	cmd.AddCommand(CmdListCooperativeDomain())
	cmd.AddCommand(CmdShowCooperativeDomain())
	cmd.AddCommand(CmdListDelegationPath())
	cmd.AddCommand(CmdShowDelegationPath())
	cmd.AddCommand(CmdListPath())
	cmd.AddCommand(CmdShowPath())
	// this line is used by starport scaffolding # 1

	return cmd
}
