package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/spf13/cast"
	"time"
)

func (k msgServer) CreateDelegationPath(goCtx context.Context, msg *types.MsgCreateDelegationPath) (*types.MsgCreateDelegationPathResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id, _ := k.GenerateDelegationPathByDelegator(ctx, msg.Delegator, msg.Delegatee)

	return &types.MsgCreateDelegationPathResponse{
		Id: id,
	}, nil

}

func (k msgServer) UpdateDelegationPath(goCtx context.Context, msg *types.MsgUpdateDelegationPath) (*types.MsgUpdateDelegationPathResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationPath = types.DelegationPath{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Delegator: msg.Delegator,
		Delegatee: msg.Delegatee,
		PathList:  msg.PathList,
	}

	// Checks that the element exists
	val, found := k.GetDelegationPath(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegationPath(ctx, delegationPath)

	return &types.MsgUpdateDelegationPathResponse{}, nil
}

func (k msgServer) DeleteDelegationPath(goCtx context.Context, msg *types.MsgDeleteDelegationPath) (*types.MsgDeleteDelegationPathResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegationPath(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegationPath(ctx, msg.Id)

	return &types.MsgDeleteDelegationPathResponse{}, nil
}

func ExtractDomainMap(domainMapList []*types.DomainMap, domainIndex string) (domains []*types.CooperativeDomain, found bool) {
	for _, domainMapElt := range domainMapList {
		if domainMapElt.DomainIndex == domainIndex {
			if len(domainMapElt.CooperativeDomainList) > 0 {
				return domainMapElt.CooperativeDomainList, true
			}
		}
	}
	return domains, false
}

func (k Keeper) GenerateDelegationPathByDelegator(ctx sdk.Context, delegator *types.CooperativeDomain, delegatee *types.CooperativeDomain) (id uint64, found bool) {
	startTimestamp := time.Now().UnixNano()

	foundTarget := false

	cooperationNetwork, found := k.GetCooperationNetwork(ctx, k.GetCooperationNetworkCount(ctx)-1)
	if found {
		domainMapList := cooperationNetwork.DomainMapList

		var allPaths []*types.Path

		for _, domainMapElt := range domainMapList {
			if domainMapElt.DomainIndex == delegator.Name {
				var domainList []*types.CooperativeDomain
				domainList = append(domainList, delegator)

				path := types.Path{
					Creator:    ctx.ChainID(),
					DomainList: domainList,
				}
				allPaths = append(allPaths, &path)
			}
		}

		j := 0
		i := len(allPaths)
		for j < i {
			p := allPaths[j]

			lastDomain := p.DomainList[len(p.DomainList)-1]

			domains, existed := ExtractDomainMap(cooperationNetwork.DomainMapList, lastDomain.Name)
			if existed {
				for _, domain := range domains {
					var domainList []*types.CooperativeDomain
					domainList = append(p.DomainList, domain)

					path := types.Path{
						Creator:    ctx.ChainID(),
						DomainList: domainList,
					}
					allPaths = append(allPaths, &path)
					if domain.Name == delegatee.Name {
						foundTarget = true
					}
				}
			}
			i = len(allPaths)
			j = j + 1
		}

		if foundTarget {

			var pathList []*types.Path

			for _, path := range allPaths {
				if path.DomainList[len(path.DomainList)-1].Name == delegatee.Name {
					pathList = append(pathList, path)
				}
			}

			var delegationPath = types.DelegationPath{
				Creator:   ctx.ChainID(),
				Delegator: delegator,
				Delegatee: delegatee,
				PathList:  pathList,
			}

			id = k.AppendDelegationPath(
				ctx,
				delegationPath,
			)

			endTimestamp := time.Now().UnixNano()
			duration := endTimestamp - startTimestamp
			k.AppendCalculationTime(ctx, types.CalculationTime{
				Creator:        ctx.ChainID(),
				Operation:      "Find delegation paths between: " + delegator.Name + " & " + delegatee.Name,
				StartTimestamp: cast.ToString(startTimestamp),
				EndTimestamp:   cast.ToString(endTimestamp),
				Duration:       cast.ToUint64(duration),
			})
		}
	}
	return id, foundTarget
}

func (k Keeper) GenerateAllDelegationPathsByDelegatee(ctx sdk.Context, delegatee *types.CooperativeDomain) (types.DelegationPath) {
	startTimestamp := time.Now().UnixNano()

	var delegationPath types.DelegationPath

	foundTarget := false

	delegator := &types.CooperativeDomain{
		Name: ctx.ChainID(),
		DomainType: "Local",
		Location: "",
	}

	cooperationNetwork, found := k.GetCooperationNetwork(ctx, k.GetCooperationNetworkCount(ctx)-1)
	if found {
		domainMapList := cooperationNetwork.DomainMapList

		var allPaths []*types.Path

		for _, domainMapElt := range domainMapList {
			if domainMapElt.DomainIndex == delegator.Name {
				var domainList []*types.CooperativeDomain
				domainList = append(domainList, delegator)

				path := types.Path{
					Creator:    ctx.ChainID(),
					DomainList: domainList,
				}
				allPaths = append(allPaths, &path)
			}
		}

		j := 0
		i := len(allPaths)
		for j < i {
			p := allPaths[j]

			lastDomain := p.DomainList[len(p.DomainList)-1]

			domains, existed := ExtractDomainMap(cooperationNetwork.DomainMapList, lastDomain.Name)
			if existed {
				for _, domain := range domains {
					var domainList []*types.CooperativeDomain
					domainList = append(p.DomainList, domain)

					path := types.Path{
						Creator:    ctx.ChainID(),
						DomainList: domainList,
					}
					allPaths = append(allPaths, &path)
					if domain.Name == delegatee.Name {
						foundTarget = true
					}
				}
			}
			i = len(allPaths)
			j = j + 1
		}

		if foundTarget {

			var pathList []*types.Path

			for _, path := range allPaths {
				if path.DomainList[len(path.DomainList)-1].Name == delegatee.Name {
					pathList = append(pathList, path)
				}
			}

			delegationPath = types.DelegationPath{
				Creator:   ctx.ChainID(),
				Delegator: delegator,
				Delegatee: delegatee,
				PathList:  pathList,
			}

			/*k.AppendDelegationPath(
				ctx,
				delegationPath,
			)*/

			endTimestamp := time.Now().UnixNano()
			duration := endTimestamp - startTimestamp
			k.AppendCalculationTime(ctx, types.CalculationTime{
				Creator:        ctx.ChainID(),
				Operation:      "Find delegation paths between: " + delegator.Name + " & " + delegatee.Name,
				StartTimestamp: cast.ToString(startTimestamp),
				EndTimestamp:   cast.ToString(endTimestamp),
				Duration:       cast.ToUint64(duration),
			})
		}
	}
	return delegationPath
}
