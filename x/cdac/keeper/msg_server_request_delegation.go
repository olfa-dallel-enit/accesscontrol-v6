package keeper

import (
	"context"

	"crossdomain/x/cdac/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cast"
	"time"
	//"strings"
)

func (k msgServer) RequestDelegation(goCtx context.Context, msg *types.MsgRequestDelegation) (*types.MsgRequestDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	var delegationDecision string
	var reason string

	delegationDecision = "Not applicable"

	delegatee, found := k.GetCooperativeDomainByName(ctx, msg.Delegatee)
	if found {
		//var delegationPath types.DelegationPath
		delegationPath := k.GenerateAllDelegationPathsByDelegatee(ctx, delegatee)
		if len(delegationPath.PathList) > 0 {
			for _, path := range delegationPath.PathList {

				var delegatorList []string
				delegatorList = append(delegatorList, path.DomainList[1].Name)

				var permissionList []string
				permissionList = append(permissionList, msg.Permission)

				target := types.DelegationPolicyTarget{
					DelegatorList:  delegatorList,
					PermissionList: permissionList,
					Action:         msg.Action,
				}

				pathLength := cast.ToUint64(len(path.DomainList) - 1)

				delegationPolicies := k.GetAllDelegationPolicyByTarget(ctx, target)
				if len(delegationPolicies) > 0 {
					delegationDecision, reason = k.EvaluateDelegationPolicy(ctx, delegationPolicies, msg.Permission, pathLength)
					/*//evaluate policies
					for _, delegationPolicy := range delegationPolicies{
						delegationRule := delegationPolicy.RuleList[0]
						nbDelegations, found := k.GetNbDelegationsByLabel(ctx, msg.Permission)
						if found{
							if delegationRule.DelegationConditions.Depth >= cast.ToUint64(len(path.DomainList) - 1) && CheckValidity(delegationRule.DelegationConditions.Validity) && nbDelegations <= delegationRule.DelegationConditions.MaxDelegations{
								delegationDecision = "Allow"
							}else{
								delegationDecision  = "Not applicable"
								reason = "Delegation validity!"
							}
						}else{
							delegationDecision  = "Not applicable"
							reason = "can not extract nbDelegations!"
						}
					}*/
				} else {
					delegationDecision = "Not applicable"
					reason = "No delegation policy is found"
				}
			}
		} else {
			delegationDecision = "Not applicable"
			reason = "No path is found"
		}
	} else {
		delegationDecision = "Not applicable"
		reason = "Delegatee " + delegatee.Name + " not found "
	}

	k.AppendDelegationLog(ctx, types.DelegationLog{
		Creator:     ctx.ChainID(),
		Decision:    delegationDecision,
		Transaction: "request_delegation",
		Reason:      reason,
	})

	return &types.MsgRequestDelegationResponse{}, nil
}

func CheckValidity(validity *types.Validity) bool {
	if cast.ToTime(validity.NotBefore).UnixNano() <= time.Now().UnixNano() && time.Now().UnixNano() <= cast.ToTime(validity.NotAfter).UnixNano() {
		return true
	}
	return false
}

func (k Keeper) EvaluateDelegationPolicy(ctx sdk.Context, delegationPolicies []types.DelegationPolicy, permission string, pathLength uint64) (delegationDecision string, reason string) {

	delegationDecision = "Not applicable"
	reason = "Delegation policies are not evaluated"

	for _, delegationPolicy := range delegationPolicies {
		delegationRule := delegationPolicy.RuleList[0]
		nbDelegations, found := k.GetNbDelegationsByLabel(ctx, permission)
		if found {
			delegationDecision, reason = k.EvaluateDelegationRule(ctx, delegationRule, nbDelegations, pathLength)
		} else {
			delegationDecision = "Not applicable"
			reason = "can not extract nbDelegations!"
		}
	}

	return delegationDecision, reason
}

func (k Keeper) EvaluateDelegationRule(ctx sdk.Context, delegationRule *types.DelegationRule, nbDelegations uint64, pathLength uint64) (delegationRuleDecision string, reason string) {
	if delegationRule.DelegationConditions.Depth >= pathLength && CheckValidity(delegationRule.DelegationConditions.Validity) && nbDelegations <= delegationRule.DelegationConditions.MaxDelegations {
		delegationRuleDecision = delegationRule.Effect
	} else {
		delegationRuleDecision = "Not applicable"
		reason = "Delegation validity!"
	}

	return delegationRuleDecision, reason
}

func (k Keeper) FirstApplicable(ctx sdk.Context, delegationPolicies []types.DelegationPolicy, permission string, pathLength uint64) (delegationDecision string, reason string) {
	/*delegationDecision  = "Not applicable"
	for _, delegationPolicy := range delegationPolicies{
		delegationRule := delegationPolicy.RuleList[0]
		nbDelegations, found := k.GetNbDelegationsByLabel(ctx, permission)
		delegationDecision, reason = k.EvaluateDelegationRule(ctx, delegationRule, nbDelegations, pathLength)
		if strings.ToUpper(delegationDecision) == strings.ToUpper("permit"){
			return "permit", ""
		}
		if strings.ToUpper(delegationDecision) == strings.ToUpper("deny"){
			return "deny", ""
		}
	}*/
	return delegationDecision, reason
}
