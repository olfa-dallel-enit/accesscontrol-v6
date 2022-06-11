package keeper

import (
	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetDomainMap set a specific domainMap in the store from its index
func (k Keeper) SetDomainMap(ctx sdk.Context, domainMap types.DomainMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainMapKeyPrefix))
	b := k.cdc.MustMarshal(&domainMap)
	store.Set(types.DomainMapKey(
		domainMap.DomainIndex,
	), b)
}

// GetDomainMap returns a domainMap from its index
func (k Keeper) GetDomainMap(
	ctx sdk.Context,
	domainIndex string,

) (val types.DomainMap, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainMapKeyPrefix))

	b := store.Get(types.DomainMapKey(
		domainIndex,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDomainMap removes a domainMap from the store
func (k Keeper) RemoveDomainMap(
	ctx sdk.Context,
	domainIndex string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainMapKeyPrefix))
	store.Delete(types.DomainMapKey(
		domainIndex,
	))
}

// GetAllDomainMap returns all domainMap
func (k Keeper) GetAllDomainMap(ctx sdk.Context) (list []types.DomainMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainMapKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DomainMap
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
