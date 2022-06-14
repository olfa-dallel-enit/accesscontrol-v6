package cli

import (
	"strconv"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdRequestDelegation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "request-delegation [delegatee] [permission] [action] [path-selection-criterion]",
		Short: "Broadcast message requestDelegation",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDelegatee := args[0]
			argPermission := args[1]
			argAction := args[2]
			argPathSelectionCriterion := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRequestDelegation(
				clientCtx.GetFromAddress().String(),
				argDelegatee,
				argPermission,
				argAction,
				argPathSelectionCriterion,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
