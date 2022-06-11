package cli

import (
	"context"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListCooperationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-cooperation-data",
		Short: "list all cooperation-data",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCooperationDataRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CooperationDataAll(context.Background(), params)
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

func CmdShowCooperationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-cooperation-data [label-index]",
		Short: "shows a cooperation-data",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argLabelIndex := args[0]

			params := &types.QueryGetCooperationDataRequest{
				LabelIndex: argLabelIndex,
			}

			res, err := queryClient.CooperationData(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
