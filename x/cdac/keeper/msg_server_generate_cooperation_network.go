package keeper

import (
	"context"

	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	crossdomainTypes "crossdomain/x/crossdomain/types"
	"github.com/spf13/cast"
	"time"
)

func (k msgServer) GenerateCooperationNetwork(goCtx context.Context, msg *types.MsgGenerateCooperationNetwork) (*types.MsgGenerateCooperationNetworkResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	cooperationNewtorkFeatures, _ := k.crossdomainKeeper.GetCooperationNetworkFeatures(ctx)

	/*if len(cooperationNewtorkFeatures.LastUpdate) > 0{
	    k.GenerateLastUpdateBasedCooperationNetwork(ctx, cooperationNewtorkFeatures)
	} */

	k.GenerateConstrainlessCooperationNetwork(ctx, cooperationNewtorkFeatures)

	return &types.MsgGenerateCooperationNetworkResponse{}, nil
}

//constraintless
func (k Keeper) GenerateConstrainlessCooperationNetwork(ctx sdk.Context, cooperationNewtorkFeatures crossdomainTypes.CooperationNetworkFeatures) {

	var domainMapList []*types.DomainMap

	var directCooperativeDomains []*types.CooperativeDomain

	var cooperationDataList []*types.CooperationData

	for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
		if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
			cooperativeDomain := types.CooperativeDomain{
				Creator:    ctx.ChainID(),
				Name:       domainCooperation.RemoteDomain.Name,
				DomainType: domainCooperation.RemoteDomain.DomainType,
				Location:   domainCooperation.RemoteDomain.Location,
			}
			directCooperativeDomains = append(directCooperativeDomains, &cooperativeDomain)
			cooperationData := types.CooperationData{
				Creator:    ctx.ChainID(),
				LabelIndex: domainCooperation.Label,
				Validity:   domainCooperation.Validity,
				Status:     domainCooperation.Status,
				Cost:       domainCooperation.Cost,
				LastUpdate: domainCooperation.UpdateTimestamp,
				Interest:   domainCooperation.Interest,
			}
			cooperationDataList = append(cooperationDataList, &cooperationData)
		}
	}

	localDomainMap := types.DomainMap{
		Creator:               ctx.ChainID(),
		DomainIndex:           ctx.ChainID(),
		CooperativeDomainList: directCooperativeDomains,
	}

	domainMapList = append(domainMapList, &localDomainMap)

	k.SetDomainMap(ctx, localDomainMap)

	i := 0
	l := len(domainMapList)
	for i < l {
		domainMap := domainMapList[i]
		for _, remoteDomain := range domainMap.CooperativeDomainList {
			var remoteCooperativeDomains []*types.CooperativeDomain
			for _, remoteDomainCooperation := range k.GetAllDomainCooperationsByRemoteDomainName(ctx, remoteDomain.Name) {
				remoteCooperativeDomain := types.CooperativeDomain{
					Creator:    ctx.ChainID(),
					Name:       remoteDomainCooperation.RemoteDomain.Name,
					DomainType: remoteDomainCooperation.RemoteDomain.DomainType,
					Location:   remoteDomainCooperation.RemoteDomain.Location,
				}
				remoteCooperativeDomains = append(remoteCooperativeDomains, &remoteCooperativeDomain)
				cooperationData := types.CooperationData{
					Creator:    ctx.ChainID(),
					LabelIndex: remoteDomainCooperation.Label,
					Validity:   remoteDomainCooperation.Validity,
					Status:     remoteDomainCooperation.Status,
					Cost:       remoteDomainCooperation.Cost,
					LastUpdate: remoteDomainCooperation.UpdateTimestamp,
					Interest:   remoteDomainCooperation.Interest,
				}
				cooperationDataList = append(cooperationDataList, &cooperationData)
			}
			remoteDomainMap := types.DomainMap{
				Creator:               ctx.ChainID(),
				DomainIndex:           remoteDomain.Name,
				CooperativeDomainList: remoteCooperativeDomains,
			}
			domainMapList = append(domainMapList, &remoteDomainMap)
			k.SetDomainMap(ctx, remoteDomainMap)
		}
		l = len(domainMapList)
		i = i + 1
	}

	cooperationNetwork := types.CooperationNetwork{
		Creator:             ctx.ChainID(),
		Label:               "cooperation-network-" + cast.ToString(time.Now().UnixNano()),
		DomainMapList:       domainMapList,
		CreationTimestamp:   cast.ToString(time.Now()),
		UpdateTimestamp:     cast.ToString(time.Now()),
		CooperationDataList: cooperationDataList,
		Features:            nil,
	}

	k.AppendCooperationNetwork(ctx, cooperationNetwork)
}

/*
//DepthBased

//CostBased
func (k Keeper) GenerateCostBasedCooperationNetwork(ctx sdk.Context) {
	cooperationNewtorkFeatures, _ := k.crossdomainKeeper.GetCooperationNetworkFeatures(ctx)

	var domainMapList []*types.DomainMap

	var directCooperativeDomains []*types.Domain

	for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
		if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
			if CheckCostCooperation(domainCooperation.Cost, cooperationNewtorkFeatures.Cost) {
				directCooperativeDomains = append(directCooperativeDomains, domainCooperation.RemoteDomain)
			}
		}
	}

	localDomainMap := types.DomainMap{
		Creator:     ctx.ChainID(),
		DomainIndex: ctx.ChainID(),
		DomainList:  directCooperativeDomains,
	}

	domainMapList = append(domainMapList, &localDomainMap)

	k.SetDomainMap(ctx, localDomainMap)

	i := 0
	l := len(domainMapList)
	for i < l {
		domainMap := domainMapList[i]
		for _, remoteDomain := range domainMap.DomainList {
			var remoteCooperativeDomains []*types.Domain
			for _, remoteDomainCooperation := range k.GetAllDomainCooperationsByRemoteDomainName(ctx, remoteDomain.Name) {
				if CheckCostCooperation(remoteDomainCooperation.Cost, cooperationNewtorkFeatures.Cost) {
					remoteCooperativeDomains = append(remoteCooperativeDomains, remoteDomainCooperation.RemoteDomain)
				}
			}
			remoteDomainMap := types.DomainMap{
				Creator:     ctx.ChainID(),
				DomainIndex: remoteDomain.Name,
				CooperativeDomainList:  remoteCooperativeDomains,
			}
			domainMapList = append(domainMapList, &remoteDomainMap)
			k.SetDomainMap(ctx, remoteDomainMap)
		}
		l = len(domainMapList)
		i = i + 1
	}

	cooperationNetwork := types.CooperationNetwork{
		Creator:             ctx.ChainID(),
		Label:               "cooperation-network-" + cast.ToString(time.Now().UnixNano()),
		DomainMapList:       domainMapList,
		CreationTimestamp:   cast.ToString(time.Now()),
		UpdateTimestamp:     cast.ToString(time.Now()),
		CooperationDataList: nil,
		Features:            nil,
	}

	k.AppendCooperationNetwork(ctx, cooperationNetwork)
}

//LocationBased
func (k Keeper) GenerateLocationBasedCooperationNetwork(ctx sdk.Context) {
	cooperationNewtorkFeatures, _ := k.crossdomainKeeper.GetCooperationNetworkFeatures(ctx)

	var domainMapList []*types.DomainMap

	var directCooperativeDomains []*types.Domain

	for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
		if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
			if FindString(domainCooperation.RemoteDomain.Location, cooperationNewtorkFeatures.LocationList) {
				directCooperativeDomains = append(directCooperativeDomains, domainCooperation.RemoteDomain)
			}
		}
	}

	localDomainMap := types.DomainMap{
		Creator:     ctx.ChainID(),
		DomainIndex: ctx.ChainID(),
		CooperativeDomainList:  directCooperativeDomains,
	}

	domainMapList = append(domainMapList, &localDomainMap)

	k.SetDomainMap(ctx, localDomainMap)

	i := 0
	l := len(domainMapList)
	for i < l {
		domainMap := domainMapList[i]
		for _, remoteDomain := range domainMap.DomainList {
			var remoteCooperativeDomains []*types.Domain
			for _, remoteDomainCooperation := range k.GetAllDomainCooperationsByRemoteDomainName(ctx, remoteDomain.Name) {
				if FindString(remoteDomainCooperation.RemoteDomain.Location, cooperationNewtorkFeatures.LocationList) {
					remoteCooperativeDomains = append(remoteCooperativeDomains, remoteDomainCooperation.RemoteDomain)
				}
			}
			remoteDomainMap := types.DomainMap{
				Creator:     ctx.ChainID(),
				DomainIndex: remoteDomain.Name,
				DomainList:  remoteCooperativeDomains,
			}
			domainMapList = append(domainMapList, &remoteDomainMap)
			k.SetDomainMap(ctx, remoteDomainMap)
		}
		l = len(domainMapList)
		i = i + 1
	}

	cooperationNetwork := types.CooperationNetwork{
		Creator:             ctx.ChainID(),
		Label:               "cooperation-network-" + cast.ToString(time.Now().UnixNano()),
		DomainMapList:       domainMapList,
		CreationTimestamp:   cast.ToString(time.Now()),
		UpdateTimestamp:     cast.ToString(time.Now()),
		CooperationDataList: nil,
		Features:            nil,
	}

	k.AppendCooperationNetwork(ctx, cooperationNetwork)
}

//InterestBased
func (k Keeper) GenerateInterestBasedCooperationNetwork(ctx sdk.Context) {
	cooperationNewtorkFeatures, _ := k.crossdomainKeeper.GetCooperationNetworkFeatures(ctx)

	var domainMapList []*types.DomainMap

	var directCooperativeDomains []*types.Domain

	for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
		if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
			if FindString(domainCooperation.Interest, cooperationNewtorkFeatures.InterestList) {
				directCooperativeDomains = append(directCooperativeDomains, domainCooperation.RemoteDomain)
			}
		}
	}

	localDomainMap := types.DomainMap{
		Creator:     ctx.ChainID(),
		DomainIndex: ctx.ChainID(),
		DomainList:  directCooperativeDomains,
	}

	domainMapList = append(domainMapList, &localDomainMap)

	k.SetDomainMap(ctx, localDomainMap)

	i := 0
	l := len(domainMapList)
	for i < l {
		domainMap := domainMapList[i]
		for _, remoteDomain := range domainMap.DomainList {
			var remoteCooperativeDomains []*types.Domain
			for _, remoteDomainCooperation := range k.GetAllDomainCooperationsByRemoteDomainName(ctx, remoteDomain.Name) {
				if FindString(remoteDomainCooperation.Interest, cooperationNewtorkFeatures.InterestList) {
					remoteCooperativeDomains = append(remoteCooperativeDomains, remoteDomainCooperation.RemoteDomain)
				}
			}
			remoteDomainMap := types.DomainMap{
				Creator:     ctx.ChainID(),
				DomainIndex: remoteDomain.Name,
				DomainList:  remoteCooperativeDomains,
			}
			domainMapList = append(domainMapList, &remoteDomainMap)
			k.SetDomainMap(ctx, remoteDomainMap)
		}
		l = len(domainMapList)
		i = i + 1
	}

	cooperationNetwork := types.CooperationNetwork{
		Creator:             ctx.ChainID(),
		Label:               "cooperation-network-" + cast.ToString(time.Now().UnixNano()),
		DomainMapList:       domainMapList,
		CreationTimestamp:   cast.ToString(time.Now()),
		UpdateTimestamp:     cast.ToString(time.Now()),
		CooperationDataList: nil,
		Features:            nil,
	}

	k.AppendCooperationNetwork(ctx, cooperationNetwork)
}

//ValidityBased
func (k Keeper) GenerateValidityBasedCooperationNetwork(ctx sdk.Context) {
	cooperationNewtorkFeatures, _ := k.crossdomainKeeper.GetCooperationNetworkFeatures(ctx)

	var domainMapList []*types.DomainMap

	var directCooperativeDomains []*types.Domain

	for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
		if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
			if cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() >= cast.ToTime(cooperationNewtorkFeatures.Validity.NotBefore).UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() <= cast.ToTime(cooperationNewtorkFeatures.Validity.NotAfter).UnixNano() {
				directCooperativeDomains = append(directCooperativeDomains, domainCooperation.RemoteDomain)
			}
		}
	}

	localDomainMap := types.DomainMap{
		Creator:     ctx.ChainID(),
		DomainIndex: ctx.ChainID(),
		DomainList:  directCooperativeDomains,
	}

	domainMapList = append(domainMapList, &localDomainMap)

	k.SetDomainMap(ctx, localDomainMap)

	i := 0
	l := len(domainMapList)
	for i < l {
		domainMap := domainMapList[i]
		for _, remoteDomain := range domainMap.DomainList {
			var remoteCooperativeDomains []*types.Domain
			for _, remoteDomainCooperation := range k.GetAllDomainCooperationsByRemoteDomainName(ctx, remoteDomain.Name) {
				if cast.ToTime(remoteDomainCooperation.Validity.NotBefore).UnixNano() >= cast.ToTime(cooperationNewtorkFeatures.Validity.NotBefore).UnixNano() && cast.ToTime(remoteDomainCooperation.Validity.NotAfter).UnixNano() <= cast.ToTime(cooperationNewtorkFeatures.Validity.NotAfter).UnixNano() {
					remoteCooperativeDomains = append(remoteCooperativeDomains, remoteDomainCooperation.RemoteDomain)
				}
			}
			remoteDomainMap := types.DomainMap{
				Creator:     ctx.ChainID(),
				DomainIndex: remoteDomain.Name,
				DomainList:  remoteCooperativeDomains,
			}
			domainMapList = append(domainMapList, &remoteDomainMap)
			k.SetDomainMap(ctx, remoteDomainMap)
		}
		l = len(domainMapList)
		i = i + 1
	}

	cooperationNetwork := types.CooperationNetwork{
		Creator:             ctx.ChainID(),
		Label:               "cooperation-network-" + cast.ToString(time.Now().UnixNano()),
		DomainMapList:       domainMapList,
		CreationTimestamp:   cast.ToString(time.Now()),
		UpdateTimestamp:     cast.ToString(time.Now()),
		CooperationDataList: nil,
		Features:            nil,
	}

	k.AppendCooperationNetwork(ctx, cooperationNetwork)
}

func CheckCostCooperation(cooperationCost uint64, costFeature uint64) bool {
	if cooperationCost <= costFeature {
		return true
	}
	return false
}

func CheckLastUpdate(cooperationLastUpdate string, lastUpdateFeature string) bool {
	if cast.ToInt64(cooperationLastUpdate) >= cast.ToTime(lastUpdateFeature).UnixNano() {
		return true
	}
	return false
}

//lastUpdateBased
func (k Keeper) GenerateLastUpdateBasedCooperationNetwork(ctx sdk.Context, cooperationNewtorkFeatures crossdomainTypes.CooperationNetworkFeatures) {
	var domainMapList []*types.DomainMap

	var directCooperativeDomains []*types.Domain

	var test string

	for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {

		if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
			test = domainCooperation.UpdateTimestamp + " " + domainCooperation.UpdateDate + " " + cooperationNewtorkFeatures.LastUpdate + " " + cast.ToString(cast.ToTime(cooperationNewtorkFeatures.LastUpdate).UnixNano())
			if CheckLastUpdate(domainCooperation.UpdateTimestamp, cooperationNewtorkFeatures.LastUpdate) {
				directCooperativeDomains = append(directCooperativeDomains, domainCooperation.RemoteDomain)
			}
		}
		//directCooperativeDomains = append(directCooperativeDomains, domainCooperation.RemoteDomain)
	}

	localDomainMap := types.DomainMap{
		Creator:     ctx.ChainID(),
		DomainIndex: ctx.ChainID(),
		DomainList:  directCooperativeDomains,
	}

	domainMapList = append(domainMapList, &localDomainMap)

	k.SetDomainMap(ctx, localDomainMap)

	i := 0
	l := len(domainMapList)
	for i < l {
		domainMap := domainMapList[i]
		for _, remoteDomain := range domainMap.DomainList {
			var remoteCooperativeDomains []*types.Domain
			for _, remoteDomainCooperation := range k.GetAllDomainCooperationsByRemoteDomainName(ctx, remoteDomain.Name) {
				if CheckLastUpdate(remoteDomainCooperation.UpdateTimestamp, cooperationNewtorkFeatures.LastUpdate) {
					remoteCooperativeDomains = append(remoteCooperativeDomains, remoteDomainCooperation.RemoteDomain)
				}
			}
			remoteDomainMap := types.DomainMap{
				Creator:     ctx.ChainID(),
				DomainIndex: remoteDomain.Name,
				DomainList:  remoteCooperativeDomains,
			}
			domainMapList = append(domainMapList, &remoteDomainMap)
			k.SetDomainMap(ctx, remoteDomainMap)
		}
		l = len(domainMapList)
		i = i + 1
	}

	cooperationNetwork := types.CooperationNetwork{
		Creator:             ctx.ChainID(),
		Label:               "cooperation-network-" + cast.ToString(time.Now().UnixNano()),
		DomainMapList:       domainMapList,
		CreationTimestamp:   cast.ToString(time.Now()),
		UpdateTimestamp:     test, //cast.ToString(time.Now()),
		CooperationDataList: nil,
		Features:            nil,
	}

	k.AppendCooperationNetwork(ctx, cooperationNetwork)
}
*/
