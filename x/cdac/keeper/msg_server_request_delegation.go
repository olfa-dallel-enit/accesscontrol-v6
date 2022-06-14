package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RequestDelegation(goCtx context.Context, msg *types.MsgRequestDelegation) (*types.MsgRequestDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRequestDelegationResponse{}, nil
}
