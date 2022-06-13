package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdac/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDelegationPath(goCtx context.Context, msg *types.MsgCreateDelegationPath) (*types.MsgCreateDelegationPathResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var id uint64
	cooperationNetwork, found := k.GetCooperationNetwork(ctx, k.GetCooperationNetworkCount(ctx) - 1)
	if found{
		domainMapList := cooperationNetwork.DomainMapList

		var allPaths []*types.Path

		for _, domainMapElt := range domainMapList{
			if domainMapElt.DomainIndex == msg.Delegator.Name{
				var domainList []*types.CooperativeDomain
				domainList = append(domainList, msg.Delegator)

				path := types.Path{
					Creator: ctx.ChainID(),
					DomainList: domainList,
				}
				allPaths = append(allPaths, &path)
			}
		}

		foundTarget := false

		j := 0
		i := len(allPaths)
		for j < i {
			p := allPaths[j]

			lastDomain := p.DomainList[len(p.DomainList)-1]

			domains, existed := ExtractDomainMap(cooperationNetwork.DomainMapList, lastDomain.Name)
			if existed{
				for _, domain := range domains{
					var domainList []*types.CooperativeDomain
					domainList = append(p.DomainList, domain)

					path := types.Path{
						Creator: ctx.ChainID(),
						DomainList: domainList,
					}
					allPaths = append(allPaths, &path)
					if domain.Name == msg.Delegatee.Name {
						foundTarget = true
					}
				}
			}
			i = len(allPaths)
			j = j + 1
		}

		if foundTarget{

			var pathList []*types.Path

			for _ , path := range allPaths{
				if path.DomainList[len(path.DomainList)-1].Name == msg.Delegatee.Name{
					pathList = append(pathList, path)
				}
			}

			var delegationPath = types.DelegationPath{
				Creator:    msg.Creator,
				Delegator:  msg.Delegator,
				Delegatee:  msg.Delegatee,
				PathList: pathList,
			}
	
			id = k.AppendDelegationPath(
				ctx,
				delegationPath,
			)
		}
	}

	return &types.MsgCreateDelegationPathResponse{
		Id: id,
	}, nil

}

func (k msgServer) UpdateDelegationPath(goCtx context.Context, msg *types.MsgUpdateDelegationPath) (*types.MsgUpdateDelegationPathResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegationPath = types.DelegationPath{
		Creator:    msg.Creator,
		Id:         msg.Id,
		Delegator:  msg.Delegator,
		Delegatee:  msg.Delegatee,
		PathList: msg.PathList,
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

func ExtractDomainMap(domainMapList []*types.DomainMap, domainIndex string)(domains []*types.CooperativeDomain, found bool){
	for _, domainMapElt := range domainMapList{
		if domainMapElt.DomainIndex == domainIndex {
			if len(domainMapElt.CooperativeDomainList) > 0{
				return domainMapElt.CooperativeDomainList, true
			}
		}
	}
	return domains, false
}