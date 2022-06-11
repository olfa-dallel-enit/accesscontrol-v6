package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/spf13/cast"
	"time"
)

func (k msgServer) GenerateCooperationNetwork(goCtx context.Context, msg *types.MsgGenerateCooperationNetwork) (*types.MsgGenerateCooperationNetworkResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	var domainMapList []*types.DomainMap

	var directCooperativeDomains []*types.Domain

	for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx){
		if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
			directCooperativeDomains = append(directCooperativeDomains, domainCooperation.RemoteDomain)
		}
	}

	localDomainMap := types.DomainMap{
		Creator: ctx.ChainID(),
		DomainIndex: ctx.ChainID(),
		DomainList: directCooperativeDomains,
	} 

	domainMapList = append(domainMapList, &localDomainMap)

	k.SetDomainMap(ctx, localDomainMap )

	i := 0
	l := len(domainMapList)
	for i < l {
		domainMap := domainMapList[i]
		for _, remoteDomain := range domainMap.DomainList{
			var remoteCooperativeDomains []*types.Domain
			for _, remoteDomainCooperation := range k.GetAllDomainCooperationsByRemoteDomainName(ctx, remoteDomain.Name){
				remoteCooperativeDomains = append(remoteCooperativeDomains, remoteDomainCooperation.RemoteDomain)
			}
			remoteDomainMap := types.DomainMap{
				Creator: ctx.ChainID(),
				DomainIndex: remoteDomain.Name,
				DomainList: remoteCooperativeDomains,
			} 
			domainMapList = append(domainMapList, &remoteDomainMap)
			k.SetDomainMap(ctx, remoteDomainMap)
		}
		l = len(domainMapList)
		i = i + 1
	}

	cooperationNetwork := types.CooperationNetwork{
		Creator: ctx.ChainID(),
		Label: "cooperation-network-" + cast.ToString(time.Now().UnixNano()),
		DomainMapList: domainMapList,
		CreationTimestamp: cast.ToString(time.Now()),
		UpdateTimestamp: cast.ToString(time.Now()),
		CooperationDataList: nil,
  		Features: nil,
	}

	k.AppendCooperationNetwork(ctx, cooperationNetwork)


	return &types.MsgGenerateCooperationNetworkResponse{}, nil
}
