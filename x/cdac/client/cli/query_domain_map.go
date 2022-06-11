package cli

import (
	"context"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListDomainMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-domain-map",
		Short: "list all domainMap",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllDomainMapRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.DomainMapAll(context.Background(), params)
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

func CmdShowDomainMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-domain-map [domain-index]",
		Short: "shows a domainMap",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argDomainIndex := args[0]

			params := &types.QueryGetDomainMapRequest{
				DomainIndex: argDomainIndex,
			}

			res, err := queryClient.DomainMap(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
