package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	crossdomainTypes "crossdomain/x/crossdomain/types"
)

func (k Keeper) RetrieveForwardPolicy(goCtx context.Context, req *types.QueryRetrieveForwardPolicyRequest) (*types.QueryRetrieveForwardPolicyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	var req1 *crossdomainTypes.QueryGetForwardPolicyRequest
	var c context.Context
	res, _ := k.crossdomainKeeper.ForwardPolicy(c, req1)

	fp := types.ForwardPolicy{
		Mode:         res.ForwardPolicy.Mode,
		DomainList:   res.ForwardPolicy.DomainList,
		LocationList: res.ForwardPolicy.LocationList,
	}

	return &types.QueryRetrieveForwardPolicyResponse{ForwardPolicy: &fp}, nil
}
