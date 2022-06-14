package cli

import (
	"strconv"

	"crossdomain/x/cdac/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateDelegationRule() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-delegation-rule [label] [effect] [delegation-conditions] [priority]",
		Short: "Create a new delegation-rule",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argLabel := args[0]
			argEffect := args[1]
			argDelegationConditions := new(types.DelegationConditions)
			err = json.Unmarshal([]byte(args[2]), argDelegationConditions)
			if err != nil {
				return err
			}
			argPriority, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDelegationRule(clientCtx.GetFromAddress().String(), argLabel, argEffect, argDelegationConditions, argPriority)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDelegationRule() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-delegation-rule [id] [label] [effect] [delegation-conditions] [priority]",
		Short: "Update a delegation-rule",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argLabel := args[1]

			argEffect := args[2]

			argDelegationConditions := new(types.DelegationConditions)
			err = json.Unmarshal([]byte(args[3]), argDelegationConditions)
			if err != nil {
				return err
			}

			argPriority, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDelegationRule(clientCtx.GetFromAddress().String(), id, argLabel, argEffect, argDelegationConditions, argPriority)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDelegationRule() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-delegation-rule [id]",
		Short: "Delete a delegation-rule by id",
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

			msg := types.NewMsgDeleteDelegationRule(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
