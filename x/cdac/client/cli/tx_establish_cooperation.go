package cli

import (
	"strconv"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	channelutils "github.com/cosmos/ibc-go/v2/modules/core/04-channel/client/utils"
	"github.com/spf13/cobra"

	/*"context"
	"fmt"
	"github.com/spf13/cast"
	"strings"
	"time"*/
)

var _ = strconv.Itoa(0)

func CmdSendEstablishCooperation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-establish-cooperation [src-port] [src-channel] [not-before] [not-after] [interest] [cost]",
		Short: "Send a establish-cooperation over IBC",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			creator := clientCtx.GetFromAddress().String()
			srcPort := args[0]
			srcChannel := args[1]

			argNotBefore := args[2]
			argNotAfter := args[3]
			argInterest := args[4]
			argCost := args[5]

			// Get the relative timeout timestamp
			timeoutTimestamp, err := cmd.Flags().GetUint64(flagPacketTimeoutTimestamp)
			if err != nil {
				return err
			}
			consensusState, _, _, err := channelutils.QueryLatestConsensusState(clientCtx, srcPort, srcChannel)
			if err != nil {
				return err
			}
			if timeoutTimestamp != 0 {
				timeoutTimestamp = consensusState.GetTimestamp() + timeoutTimestamp
			}

			msg := types.NewMsgSendEstablishCooperation(creator, srcPort, srcChannel, timeoutTimestamp, argNotBefore, argNotAfter, argInterest, argCost)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
			/*time.Sleep(30 * time.Second)

			queryClient := types.NewQueryClient(clientCtx)
			params := &types.QueryEstablishedCooperationByChannelRequest{

				Channel: srcChannel,
			}

			res, _ := queryClient.EstablishedCooperationByChannel(cmd.Context(), params)
			if res.Found {
				//clientCtx.PrintProto(res)
				establishedCooperation := res.DomainCooperation

				pageReq, err := client.ReadPageRequest(cmd.Flags())
				if err != nil {
					return err
				}

				queryClient := types.NewQueryClient(clientCtx)

				params := &types.QueryAllDomainCooperationRequest{
					Pagination: pageReq,
				}

				res, err := queryClient.DomainCooperationAll(context.Background(), params)
				if err != nil {
					return err
				}

				for _, domainCooperation := range res.DomainCooperation {
					fmt.Println(domainCooperation.Label)
					fmt.Println(establishedCooperation.Label)
					if strings.Compare(domainCooperation.Label, establishedCooperation.Label) != 0 && domainCooperation.CooperationType == "Direct" {
						msg1 := types.NewMsgSendForwardCooperationData(creator, srcPort, domainCooperation.SourceDomain.IbcConnection.Channel, timeoutTimestamp, establishedCooperation.Validity.NotBefore, establishedCooperation.Validity.NotAfter, establishedCooperation.Interest, cast.ToString(establishedCooperation.Cost), establishedCooperation.SourceDomain.Name, establishedCooperation.RemoteDomain.Name, establishedCooperation.SourceDomain.Location, establishedCooperation.RemoteDomain.Location)
						tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg1)
						//time.Sleep(10 * time.Second)
						msg2 := types.NewMsgSendForwardCooperationData(creator, srcPort, establishedCooperation.SourceDomain.IbcConnection.Channel, timeoutTimestamp, domainCooperation.Validity.NotBefore, domainCooperation.Validity.NotAfter, domainCooperation.Interest, cast.ToString(domainCooperation.Cost), domainCooperation.SourceDomain.Name, domainCooperation.RemoteDomain.Name, domainCooperation.SourceDomain.Location, domainCooperation.RemoteDomain.Location)
						tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg2)
						//time.Sleep(10 * time.Second)
					}
				}
			}
			/*********************/
			/*
				msg3 := types.NewMsgSendExchangeCooperationData(creator, srcPort, srcChannel, timeoutTimestamp)
				if err := msg3.ValidateBasic(); err != nil {
					return err
				}
				return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg3)
				time.Sleep(10 * time.Second)
			*/

			//check update policy

			/*updatePolicyQuery := types.NewQueryClient(clientCtx)

			updatePolicyParams := &types.QueryGetUpdatePolicyRequest{}

			updatePolicyRes, err := updatePolicyQuery.UpdatePolicy(context.Background(), updatePolicyParams)
			if err != nil {
				return err
			}

			//clientCtx.PrintProto(updatePolicyRes)

			if updatePolicyRes.UpdatePolicy.Event {
				msg4 := types.NewMsgGenerateCooperationNetwork(
					clientCtx.GetFromAddress().String(),
				)
				if err := msg4.ValidateBasic(); err != nil {
					return err
				}
				tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg4)
			}*/
			/*******************/
			//return nil //tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().Uint64(flagPacketTimeoutTimestamp, DefaultRelativePacketTimeoutTimestamp, "Packet timeout timestamp in nanoseconds. Default is 10 minutes.")
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
