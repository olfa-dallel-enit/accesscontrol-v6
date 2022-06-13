package cli

import (
	"context"
	"strconv"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListInterDomainDclPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-inter-domain-dcl-policy",
		Short: "list all inter-domain-dcl-policy",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllInterDomainDclPolicyRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.InterDomainDclPolicyAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowInterDomainDclPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-inter-domain-dcl-policy [id]",
		Short: "shows a inter-domain-dcl-policy",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetInterDomainDclPolicyRequest{
				Id: id,
			}

			res, err := queryClient.InterDomainDclPolicy(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
