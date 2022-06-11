package cli

import (
	"strconv"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateCooperationNetworkFeatures() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-cooperation-network-features [depth] [cost] [interest-list] [location-list] [last-update]",
		Short: "Create a new cooperationNetworkFeatures",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDepth, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argCost, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argInterestList := strings.Split(args[2], listSeparator)
			argLocationList := strings.Split(args[3], listSeparator)
			argLastUpdate := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCooperationNetworkFeatures(clientCtx.GetFromAddress().String(), argDepth, argCost, argInterestList, argLocationList, argLastUpdate)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCooperationNetworkFeatures() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-cooperation-network-features [id] [depth] [cost] [interest-list] [location-list] [last-update]",
		Short: "Update a cooperationNetworkFeatures",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argDepth, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}

			argCost, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			argInterestList := strings.Split(args[3], listSeparator)

			argLocationList := strings.Split(args[4], listSeparator)

			argLastUpdate := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCooperationNetworkFeatures(clientCtx.GetFromAddress().String(), id, argDepth, argCost, argInterestList, argLocationList, argLastUpdate)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCooperationNetworkFeatures() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-cooperation-network-features [id]",
		Short: "Delete a cooperationNetworkFeatures by id",
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

			msg := types.NewMsgDeleteCooperationNetworkFeatures(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
