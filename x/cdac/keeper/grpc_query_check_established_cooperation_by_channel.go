package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CheckEstablishedCooperationByChannel(goCtx context.Context, req *types.QueryCheckEstablishedCooperationByChannelRequest) (*types.QueryCheckEstablishedCooperationByChannelResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	label, found := k.GetEstablishedCooperationByChannel(ctx, req.Channel)

	return &types.QueryCheckEstablishedCooperationByChannelResponse{Label: label, Found: found}, nil
}
