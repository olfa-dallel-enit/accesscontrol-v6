package cli

import (
	"crossdomain/x/crossdomain/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateDecisionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-decision-policy [depth] [cost] [location-list] [interest-list] [validity] [last-update]",
		Short: "Create decisionPolicy",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDepth, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argCost, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argLocationList := strings.Split(args[2], listSeparator)
			argInterestList := strings.Split(args[3], listSeparator)
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[4]), argValidity)
			if err != nil {
				return err
			}
			argLastUpdate := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDecisionPolicy(clientCtx.GetFromAddress().String(), argDepth, argCost, argLocationList, argInterestList, argValidity, argLastUpdate)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDecisionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-decision-policy [depth] [cost] [location-list] [interest-list] [validity] [last-update]",
		Short: "Update decisionPolicy",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDepth, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argCost, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argLocationList := strings.Split(args[2], listSeparator)
			argInterestList := strings.Split(args[3], listSeparator)
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[4]), argValidity)
			if err != nil {
				return err
			}
			argLastUpdate := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDecisionPolicy(clientCtx.GetFromAddress().String(), argDepth, argCost, argLocationList, argInterestList, argValidity, argLastUpdate)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDecisionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-decision-policy",
		Short: "Delete decisionPolicy",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteDecisionPolicy(clientCtx.GetFromAddress().String())
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
