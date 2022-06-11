package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCooperationNetworkFeaturesCount get the total number of cooperationNetworkFeatures
func (k Keeper) GetCooperationNetworkFeaturesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CooperationNetworkFeaturesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCooperationNetworkFeaturesCount set the total number of cooperationNetworkFeatures
func (k Keeper) SetCooperationNetworkFeaturesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CooperationNetworkFeaturesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCooperationNetworkFeatures appends a cooperationNetworkFeatures in the store with a new id and update the count
func (k Keeper) AppendCooperationNetworkFeatures(
	ctx sdk.Context,
	cooperationNetworkFeatures types.CooperationNetworkFeatures,
) uint64 {
	// Create the cooperationNetworkFeatures
	count := k.GetCooperationNetworkFeaturesCount(ctx)

	// Set the ID of the appended value
	cooperationNetworkFeatures.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkFeaturesKey))
	appendedValue := k.cdc.MustMarshal(&cooperationNetworkFeatures)
	store.Set(GetCooperationNetworkFeaturesIDBytes(cooperationNetworkFeatures.Id), appendedValue)

	// Update cooperationNetworkFeatures count
	k.SetCooperationNetworkFeaturesCount(ctx, count+1)

	return count
}

// SetCooperationNetworkFeatures set a specific cooperationNetworkFeatures in the store
func (k Keeper) SetCooperationNetworkFeatures(ctx sdk.Context, cooperationNetworkFeatures types.CooperationNetworkFeatures) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkFeaturesKey))
	b := k.cdc.MustMarshal(&cooperationNetworkFeatures)
	store.Set(GetCooperationNetworkFeaturesIDBytes(cooperationNetworkFeatures.Id), b)
}

// GetCooperationNetworkFeatures returns a cooperationNetworkFeatures from its id
func (k Keeper) GetCooperationNetworkFeatures(ctx sdk.Context, id uint64) (val types.CooperationNetworkFeatures, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkFeaturesKey))
	b := store.Get(GetCooperationNetworkFeaturesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCooperationNetworkFeatures removes a cooperationNetworkFeatures from the store
func (k Keeper) RemoveCooperationNetworkFeatures(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkFeaturesKey))
	store.Delete(GetCooperationNetworkFeaturesIDBytes(id))
}

// GetAllCooperationNetworkFeatures returns all cooperationNetworkFeatures
func (k Keeper) GetAllCooperationNetworkFeatures(ctx sdk.Context) (list []types.CooperationNetworkFeatures) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkFeaturesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CooperationNetworkFeatures
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCooperationNetworkFeaturesIDBytes returns the byte representation of the ID
func GetCooperationNetworkFeaturesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCooperationNetworkFeaturesIDFromBytes returns ID in uint64 format from a byte array
func GetCooperationNetworkFeaturesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
