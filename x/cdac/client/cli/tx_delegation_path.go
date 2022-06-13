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

func CmdCreateDelegationPath() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-delegation-path [delegator] [delegatee]",
		Short: "Create a new delegationPath",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDelegator := new(types.CooperativeDomain)
			err = json.Unmarshal([]byte(args[0]), argDelegator)
			if err != nil {
				return err
			}
			argDelegatee := new(types.CooperativeDomain)
			err = json.Unmarshal([]byte(args[1]), argDelegatee)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDelegationPath(clientCtx.GetFromAddress().String(), argDelegator, argDelegatee)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDelegationPath() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-delegation-path [id] [delegator] [delegatee] [domain-list]",
		Short: "Update a delegationPath",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argDelegator := new(types.CooperativeDomain)
			err = json.Unmarshal([]byte(args[1]), argDelegator)
			if err != nil {
				return err
			}

			argDelegatee := new(types.CooperativeDomain)
			err = json.Unmarshal([]byte(args[2]), argDelegatee)
			if err != nil {
				return err
			}

			var argPathList []*types.Path
			err = json.Unmarshal([]byte(args[3]), &argPathList)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDelegationPath(clientCtx.GetFromAddress().String(), id, argDelegator, argDelegatee, argPathList)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDelegationPath() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-delegation-path [id]",
		Short: "Delete a delegationPath by id",
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

			msg := types.NewMsgDeleteDelegationPath(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
