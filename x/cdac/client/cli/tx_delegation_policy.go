package cli

import (
	"strconv"

	"crossdomain/x/cdac/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateDelegationPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-delegation-policy [label] [target] [combining-algorithm] [rule-list]",
		Short: "Create a new delegation-policy",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argLabel := args[0]
			argTarget := new(types.DelegationPolicyTarget)
			err = json.Unmarshal([]byte(args[1]), argTarget)
			if err != nil {
				return err
			}
			argCombiningAlgorithm := args[2]
			var argRuleList []*types.DelegationRule
			err = json.Unmarshal([]byte(args[3]), &argRuleList)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDelegationPolicy(clientCtx.GetFromAddress().String(), argLabel, argTarget, argCombiningAlgorithm, argRuleList)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDelegationPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-delegation-policy [id] [label] [target] [combining-algorithm] [rule-list]",
		Short: "Update a delegation-policy",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argLabel := args[1]

			argTarget := new(types.DelegationPolicyTarget)
			err = json.Unmarshal([]byte(args[2]), argTarget)
			if err != nil {
				return err
			}

			argCombiningAlgorithm := args[3]

			var argRuleList []*types.DelegationRule
			err = json.Unmarshal([]byte(args[4]), &argRuleList)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDelegationPolicy(clientCtx.GetFromAddress().String(), id, argLabel, argTarget, argCombiningAlgorithm, argRuleList)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDelegationPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-delegation-policy [id]",
		Short: "Delete a delegation-policy by id",
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

			msg := types.NewMsgDeleteDelegationPolicy(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
