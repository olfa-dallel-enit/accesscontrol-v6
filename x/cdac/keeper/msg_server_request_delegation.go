package keeper

import (
	"context"

	"crossdomain/x/cdac/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cast"
)

func (k msgServer) RequestDelegation(goCtx context.Context, msg *types.MsgRequestDelegation) (*types.MsgRequestDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	var delegationDecision string
	var reason string

	delegationDecision = "Not applicable"

	delegatee, ex := k.GetCooperativeDomainByName(ctx, msg.Delegatee)
	if ex {
		//var delegationPath types.DelegationPath
		delegationPath := k.GenerateAllDelegationPathsByDelegatee(ctx, delegatee)
		if len(delegationPath.PathList) > 0 {
			for _, path := range delegationPath.PathList{

				var delegatorList []string
				delegatorList = append(delegatorList, path.DomainList[1].Name)

				var permissionList []string
				permissionList = append(permissionList, msg.Permission)

				target :=types.DelegationPolicyTarget{
					DelegatorList: delegatorList,
					PermissionList: permissionList,
					Action: msg.Action,
				}

				delegationPolicies := k.GetAllDelegationPolicyByTarget(ctx, target)
				if len(delegationPolicies) > 0{
					//evaluate policies
					for _, delegationPolicy := range delegationPolicies{
						delegationRule := delegationPolicy.RuleList[0]
						if delegationRule.DelegationConditions.Depth >= cast.ToUint64(len(path.DomainList) - 1){
							delegationDecision = "Allow"
						}
					}
				}else{
					delegationDecision  = "Not applicable"
					reason = "No delegation policy is found"
				}
			}
		}else{
			delegationDecision  = "Not applicable"
			reason = "No path is found"
		}
	}else{
		delegationDecision  = "Not applicable"
		reason = "Delegatee " + delegatee.Name + " not found "
	}
	

	k.AppendDelegationLog(ctx, types.DelegationLog{
		Creator: ctx.ChainID(),
		Decision: delegationDecision,
		Transaction: "request_delegation",
		Reason: reason,
	})
	
	return &types.MsgRequestDelegationResponse{}, nil
}
