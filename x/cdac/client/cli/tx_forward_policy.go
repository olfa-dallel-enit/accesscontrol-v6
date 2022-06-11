package cli

import (
	"strconv"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateForwardPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-forward-policy [mode] [domain-list] [location-list]",
		Short: "Create a new forwardPolicy",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argMode := args[0]
			argDomainList := strings.Split(args[1], listSeparator)
			argLocationList := strings.Split(args[2], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateForwardPolicy(clientCtx.GetFromAddress().String(), argMode, argDomainList, argLocationList)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateForwardPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-forward-policy [id] [mode] [domain-list] [location-list]",
		Short: "Update a forwardPolicy",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argMode := args[1]

			argDomainList := strings.Split(args[2], listSeparator)

			argLocationList := strings.Split(args[3], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateForwardPolicy(clientCtx.GetFromAddress().String(), id, argMode, argDomainList, argLocationList)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteForwardPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-forward-policy [id]",
		Short: "Delete a forwardPolicy by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteForwardPolicy(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
