package cli

import (
	"crossdomain/x/cdac/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateCooperationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-cooperation-data [label-index] [validity] [status] [cost] [last-update] [interest]",
		Short: "Create a new cooperation-data",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexLabelIndex := args[0]

			// Get value arguments
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[1]), argValidity)
			if err != nil {
				return err
			}
			argStatus := args[2]
			argCost, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argLastUpdate := args[4]
			argInterest := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCooperationData(
				clientCtx.GetFromAddress().String(),
				indexLabelIndex,
				argValidity,
				argStatus,
				argCost,
				argLastUpdate,
				argInterest,
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

func CmdUpdateCooperationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-cooperation-data [label-index] [validity] [status] [cost] [last-update] [interest]",
		Short: "Update a cooperation-data",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexLabelIndex := args[0]

			// Get value arguments
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[1]), argValidity)
			if err != nil {
				return err
			}
			argStatus := args[2]
			argCost, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argLastUpdate := args[4]
			argInterest := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCooperationData(
				clientCtx.GetFromAddress().String(),
				indexLabelIndex,
				argValidity,
				argStatus,
				argCost,
				argLastUpdate,
				argInterest,
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

func CmdDeleteCooperationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-cooperation-data [label-index]",
		Short: "Delete a cooperation-data",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexLabelIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCooperationData(
				clientCtx.GetFromAddress().String(),
				indexLabelIndex,
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
