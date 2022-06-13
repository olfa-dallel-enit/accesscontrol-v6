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

func CmdCreateInterDomainAclPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-inter-domain-acl-policy [label] [subject-list] [action-list] [object-list] [status] [creation-timestamp] [update-timestamp]",
		Short: "Create a new inter-domain-acl-policy",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argLabel := args[0]
			argSubjectList := strings.Split(args[1], listSeparator)
			argActionList := strings.Split(args[2], listSeparator)
			argObjectList := strings.Split(args[3], listSeparator)
			argStatus := args[4]
			argCreationTimestamp := args[5]
			argUpdateTimestamp := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateInterDomainAclPolicy(clientCtx.GetFromAddress().String(), argLabel, argSubjectList, argActionList, argObjectList, argStatus, argCreationTimestamp, argUpdateTimestamp)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateInterDomainAclPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-inter-domain-acl-policy [id] [label] [subject-list] [action-list] [object-list] [status] [creation-timestamp] [update-timestamp]",
		Short: "Update a inter-domain-acl-policy",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argLabel := args[1]

			argSubjectList := strings.Split(args[2], listSeparator)

			argActionList := strings.Split(args[3], listSeparator)

			argObjectList := strings.Split(args[4], listSeparator)

			argStatus := args[5]

			argCreationTimestamp := args[6]

			argUpdateTimestamp := args[7]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateInterDomainAclPolicy(clientCtx.GetFromAddress().String(), id, argLabel, argSubjectList, argActionList, argObjectList, argStatus, argCreationTimestamp, argUpdateTimestamp)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteInterDomainAclPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-inter-domain-acl-policy [id]",
		Short: "Delete a inter-domain-acl-policy by id",
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

			msg := types.NewMsgDeleteInterDomainAclPolicy(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
