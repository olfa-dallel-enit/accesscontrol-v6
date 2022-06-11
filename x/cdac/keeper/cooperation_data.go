package keeper

import (
	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCooperationData set a specific cooperationData in the store from its index
func (k Keeper) SetCooperationData(ctx sdk.Context, cooperationData types.CooperationData) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationDataKeyPrefix))
	b := k.cdc.MustMarshal(&cooperationData)
	store.Set(types.CooperationDataKey(
		cooperationData.LabelIndex,
	), b)
}

// GetCooperationData returns a cooperationData from its index
func (k Keeper) GetCooperationData(
	ctx sdk.Context,
	labelIndex string,

) (val types.CooperationData, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationDataKeyPrefix))

	b := store.Get(types.CooperationDataKey(
		labelIndex,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCooperationData removes a cooperationData from the store
func (k Keeper) RemoveCooperationData(
	ctx sdk.Context,
	labelIndex string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationDataKeyPrefix))
	store.Delete(types.CooperationDataKey(
		labelIndex,
	))
}

// GetAllCooperationData returns all cooperationData
func (k Keeper) GetAllCooperationData(ctx sdk.Context) (list []types.CooperationData) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationDataKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CooperationData
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
