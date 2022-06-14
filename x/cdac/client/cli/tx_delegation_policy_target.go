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

func CmdCreateDelegationPolicyTarget() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-delegation-policy-target [delegator-list] [permission-list] [action]",
		Short: "Create a new delegation-policy-Target",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDelegatorList := strings.Split(args[0], listSeparator)
			argPermissionList := strings.Split(args[1], listSeparator)
			argAction := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDelegationPolicyTarget(clientCtx.GetFromAddress().String(), argDelegatorList, argPermissionList, argAction)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDelegationPolicyTarget() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-delegation-policy-target [id] [delegator-list] [permission-list] [action]",
		Short: "Update a delegation-policy-Target",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argDelegatorList := strings.Split(args[1], listSeparator)

			argPermissionList := strings.Split(args[2], listSeparator)

			argAction := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDelegationPolicyTarget(clientCtx.GetFromAddress().String(), id, argDelegatorList, argPermissionList, argAction)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDelegationPolicyTarget() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-delegation-policy-target [id]",
		Short: "Delete a delegation-policy-Target by id",
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

			msg := types.NewMsgDeleteDelegationPolicyTarget(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
