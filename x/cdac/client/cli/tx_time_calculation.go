package cli

import (
	"strconv"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateTimeCalculation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-time-calculation [operation] [start-timestamp] [end-timestamp] [timing]",
		Short: "Create a new timeCalculation",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOperation := args[0]
			argStartTimestamp := args[1]
			argEndTimestamp := args[2]
			argTiming, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateTimeCalculation(clientCtx.GetFromAddress().String(), argOperation, argStartTimestamp, argEndTimestamp, argTiming)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateTimeCalculation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-time-calculation [id] [operation] [start-timestamp] [end-timestamp] [timing]",
		Short: "Update a timeCalculation",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argOperation := args[1]

			argStartTimestamp := args[2]

			argEndTimestamp := args[3]

			argTiming, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateTimeCalculation(clientCtx.GetFromAddress().String(), id, argOperation, argStartTimestamp, argEndTimestamp, argTiming)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteTimeCalculation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-time-calculation [id]",
		Short: "Delete a timeCalculation by id",
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

			msg := types.NewMsgDeleteTimeCalculation(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
