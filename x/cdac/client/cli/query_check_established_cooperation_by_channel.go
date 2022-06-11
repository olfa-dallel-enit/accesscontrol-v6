package cli

import (
	"strconv"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCheckEstablishedCooperationByChannel() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "check-established-cooperation-by-channel [channel]",
		Short: "Query checkEstablishedCooperationByChannel",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqChannel := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryCheckEstablishedCooperationByChannelRequest{

				Channel: reqChannel,
			}

			res, err := queryClient.CheckEstablishedCooperationByChannel(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
