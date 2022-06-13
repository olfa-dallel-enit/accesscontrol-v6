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

func CmdCreateDomainCooperation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-domain-cooperation [label] [cooperation-type] [source-domain] [remote-domain] [validity] [interest] [cost] [creation-date] [creation-timestamp] [update-date] [update-timestamp] [status]",
		Short: "Create a new domain-cooperation",
		Args:  cobra.ExactArgs(12),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argLabel := args[0]
			argCooperationType := args[1]
			argSourceDomain := new(types.Domain)
			err = json.Unmarshal([]byte(args[2]), argSourceDomain)
			if err != nil {
				return err
			}
			argRemoteDomain := new(types.Domain)
			err = json.Unmarshal([]byte(args[3]), argRemoteDomain)
			if err != nil {
				return err
			}
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[4]), argValidity)
			if err != nil {
				return err
			}
			argInterest := args[5]
			argCost, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argCreationDate := args[7]
			argCreationTimestamp := args[8]
			argUpdateDate := args[9]
			argUpdateTimestamp := args[10]
			argStatus := args[11]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDomainCooperation(clientCtx.GetFromAddress().String(), argLabel, argCooperationType, argSourceDomain, argRemoteDomain, argValidity, argInterest, argCost, argCreationDate, argCreationTimestamp, argUpdateDate, argUpdateTimestamp, argStatus)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDomainCooperation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-domain-cooperation [id] [label] [cooperation-type] [source-domain] [remote-domain] [validity] [interest] [cost] [creation-date] [creation-timestamp] [update-date] [update-timestamp] [status]",
		Short: "Update a domain-cooperation",
		Args:  cobra.ExactArgs(13),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argLabel := args[1]

			argCooperationType := args[2]

			argSourceDomain := new(types.Domain)
			err = json.Unmarshal([]byte(args[3]), argSourceDomain)
			if err != nil {
				return err
			}

			argRemoteDomain := new(types.Domain)
			err = json.Unmarshal([]byte(args[4]), argRemoteDomain)
			if err != nil {
				return err
			}

			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[5]), argValidity)
			if err != nil {
				return err
			}

			argInterest := args[6]

			argCost, err := cast.ToUint64E(args[7])
			if err != nil {
				return err
			}

			argCreationDate := args[8]
			argCreationTimestamp := args[9]

			argUpdateDate := args[10]
			argUpdateTimestamp := args[11]

			argStatus := args[12]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDomainCooperation(clientCtx.GetFromAddress().String(), id, argLabel, argCooperationType, argSourceDomain, argRemoteDomain, argValidity, argInterest, argCost, argCreationDate, argCreationTimestamp, argUpdateDate, argUpdateTimestamp, argStatus)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDomainCooperation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-domain-cooperation [id]",
		Short: "Delete a domain-cooperation by id",
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

			msg := types.NewMsgDeleteDomainCooperation(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
