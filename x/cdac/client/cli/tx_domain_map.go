package cli

import (
	"crossdomain/x/cdac/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateDomainMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-domain-map [domain-index] [domain-list]",
		Short: "Create a new domainMap",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexDomainIndex := args[0]

			// Get value arguments
			var argCooperativeDomainList []*types.CooperativeDomain
			err = json.Unmarshal([]byte(args[1]), &argCooperativeDomainList)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDomainMap(
				clientCtx.GetFromAddress().String(),
				indexDomainIndex,
				argCooperativeDomainList,
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

func CmdUpdateDomainMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-domain-map [domain-index] [domain-list]",
		Short: "Update a domainMap",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexDomainIndex := args[0]

			// Get value arguments
			var argCooperativeDomainList []*types.CooperativeDomain
			err = json.Unmarshal([]byte(args[1]), &argCooperativeDomainList)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDomainMap(
				clientCtx.GetFromAddress().String(),
				indexDomainIndex,
				argCooperativeDomainList,
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

func CmdDeleteDomainMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-domain-map [domain-index]",
		Short: "Delete a domainMap",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexDomainIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteDomainMap(
				clientCtx.GetFromAddress().String(),
				indexDomainIndex,
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
