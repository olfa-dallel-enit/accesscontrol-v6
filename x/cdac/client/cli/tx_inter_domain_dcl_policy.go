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
	"strings"
)

func CmdCreateInterDomainDclPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-inter-domain-dcl-policy [label] [delegator-list] [delegatee-list] [permission-list] [depth] [max-delegations] [validity]",
		Short: "Create a new inter-domain-dcl-policy",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argLabel := args[0]
			argDelegatorList := strings.Split(args[1], listSeparator)
			argDelegateeList := strings.Split(args[2], listSeparator)
			argPermissionList := strings.Split(args[3], listSeparator)
			argDepth, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argMaxDelegations, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[6]), argValidity)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateInterDomainDclPolicy(clientCtx.GetFromAddress().String(), argLabel, argDelegatorList, argDelegateeList, argPermissionList, argDepth, argMaxDelegations, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateInterDomainDclPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-inter-domain-dcl-policy [id] [label] [delegator-list] [delegatee-list] [permission-list] [creation-timestamp] [update-timestamp] [depth] [max-delegations] [validity]",
		Short: "Update a inter-domain-dcl-policy",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argLabel := args[1]

			argDelegatorList := strings.Split(args[2], listSeparator)

			argDelegateeList := strings.Split(args[3], listSeparator)

			argPermissionList := strings.Split(args[4], listSeparator)

			argCreationTimestamp := args[5]

			argUpdateTimestamp := args[6]

			argDepth, err := cast.ToUint64E(args[7])
			if err != nil {
				return err
			}

			argMaxDelegations, err := cast.ToUint64E(args[8])
			if err != nil {
				return err
			}

			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[9]), argValidity)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateInterDomainDclPolicy(clientCtx.GetFromAddress().String(), id, argLabel, argDelegatorList, argDelegateeList, argPermissionList, argCreationTimestamp, argUpdateTimestamp, argDepth, argMaxDelegations, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteInterDomainDclPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-inter-domain-dcl-policy [id]",
		Short: "Delete a inter-domain-dcl-policy by id",
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

			msg := types.NewMsgDeleteInterDomainDclPolicy(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
