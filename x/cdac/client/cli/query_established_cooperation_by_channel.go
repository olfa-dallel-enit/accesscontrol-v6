package cli

import (
	"strconv"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdEstablishedCooperationByChannel() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "established-cooperation-by-channel [channel]",
		Short: "Query establishedCooperationByChannel",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqChannel := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryEstablishedCooperationByChannelRequest{

				Channel: reqChannel,
			}

			res, err := queryClient.EstablishedCooperationByChannel(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
