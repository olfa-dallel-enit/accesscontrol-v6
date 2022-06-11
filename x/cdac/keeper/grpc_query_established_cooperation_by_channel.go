package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EstablishedCooperationByChannel(goCtx context.Context, req *types.QueryEstablishedCooperationByChannelRequest) (*types.QueryEstablishedCooperationByChannelResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	domainCooperation, found := k.GetCooperationByChannel(ctx, req.Channel)

	return &types.QueryEstablishedCooperationByChannelResponse{DomainCooperation: &domainCooperation, Found: found}, nil
}
