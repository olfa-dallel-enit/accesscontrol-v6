package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RequestAccessPermission(goCtx context.Context, msg *types.MsgRequestAccessPermission) (*types.MsgRequestAccessPermissionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	/*var decision string
	var delegator *types.CooperativeDomain
	var delegatee *types.CooperativeDomain


	//find possible delegators ayant les permissions demandées, if found, generer les paths

	//find delegation paths from delegator to delegatee
	//if not find ==> generate delegation paths

	delegator, delegatorFound := k.GetDomainCooperationByDomainName(ctx, msg.Sender)

	_, found := k.GenerateDelegationPath(ctx, delegator, delegatee)
	if found{

	}else{
		decision = "Deny"
	}*/

	return &types.MsgRequestAccessPermissionResponse{}, nil
}
