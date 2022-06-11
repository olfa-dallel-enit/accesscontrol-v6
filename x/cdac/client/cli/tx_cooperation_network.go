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

func CmdCreateCooperationNetwork() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-cooperation-network [label] [domain-map-list] [cooperation-data-list] [features] [creation-timestamp] [update-timestamp]",
		Short: "Create a new cooperationNetwork",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argLabel := args[0]
			var argDomainMapList []*types.DomainMap
			err = json.Unmarshal([]byte(args[1]), &argDomainMapList)
			if err != nil {
				return err
			}
			var argCooperationDataList []*types.CooperationData
			err = json.Unmarshal([]byte(args[2]), &argCooperationDataList)
			if err != nil {
				return err
			}
			argFeatures := new(types.CooperationNetworkFeatures)
			err = json.Unmarshal([]byte(args[3]), argFeatures)
			if err != nil {
				return err
			}
			argCreationTimestamp := args[4]
			argUpdateTimestamp := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCooperationNetwork(clientCtx.GetFromAddress().String(), argLabel, argDomainMapList, argCooperationDataList, argFeatures, argCreationTimestamp, argUpdateTimestamp)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCooperationNetwork() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-cooperation-network [id] [label] [domain-map-list] [cooperation-data-list] [features] [creation-timestamp] [update-timestamp]",
		Short: "Update a cooperationNetwork",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argLabel := args[1]

			var argDomainMapList []*types.DomainMap
			err = json.Unmarshal([]byte(args[2]), &argDomainMapList)
			if err != nil {
				return err
			}

			var argCooperationDataList []*types.CooperationData
			err = json.Unmarshal([]byte(args[3]), &argCooperationDataList)
			if err != nil {
				return err
			}

			argFeatures := new(types.CooperationNetworkFeatures)
			err = json.Unmarshal([]byte(args[4]), argFeatures)
			if err != nil {
				return err
			}

			argCreationTimestamp := args[5]

			argUpdateTimestamp := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCooperationNetwork(clientCtx.GetFromAddress().String(), id, argLabel, argDomainMapList, argCooperationDataList, argFeatures, argCreationTimestamp, argUpdateTimestamp)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCooperationNetwork() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-cooperation-network [id]",
		Short: "Delete a cooperationNetwork by id",
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

			msg := types.NewMsgDeleteCooperationNetwork(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
