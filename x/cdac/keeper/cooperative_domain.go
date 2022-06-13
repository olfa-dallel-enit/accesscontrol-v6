package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCooperativeDomainCount get the total number of cooperativeDomain
func (k Keeper) GetCooperativeDomainCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CooperativeDomainCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCooperativeDomainCount set the total number of cooperativeDomain
func (k Keeper) SetCooperativeDomainCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CooperativeDomainCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCooperativeDomain appends a cooperativeDomain in the store with a new id and update the count
func (k Keeper) AppendCooperativeDomain(
	ctx sdk.Context,
	cooperativeDomain types.CooperativeDomain,
) uint64 {
	// Create the cooperativeDomain
	count := k.GetCooperativeDomainCount(ctx)

	// Set the ID of the appended value
	cooperativeDomain.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperativeDomainKey))
	appendedValue := k.cdc.MustMarshal(&cooperativeDomain)
	store.Set(GetCooperativeDomainIDBytes(cooperativeDomain.Id), appendedValue)

	// Update cooperativeDomain count
	k.SetCooperativeDomainCount(ctx, count+1)

	return count
}

// SetCooperativeDomain set a specific cooperativeDomain in the store
func (k Keeper) SetCooperativeDomain(ctx sdk.Context, cooperativeDomain types.CooperativeDomain) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperativeDomainKey))
	b := k.cdc.MustMarshal(&cooperativeDomain)
	store.Set(GetCooperativeDomainIDBytes(cooperativeDomain.Id), b)
}

// GetCooperativeDomain returns a cooperativeDomain from its id
func (k Keeper) GetCooperativeDomain(ctx sdk.Context, id uint64) (val types.CooperativeDomain, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperativeDomainKey))
	b := store.Get(GetCooperativeDomainIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCooperativeDomain removes a cooperativeDomain from the store
func (k Keeper) RemoveCooperativeDomain(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperativeDomainKey))
	store.Delete(GetCooperativeDomainIDBytes(id))
}

// GetAllCooperativeDomain returns all cooperativeDomain
func (k Keeper) GetAllCooperativeDomain(ctx sdk.Context) (list []types.CooperativeDomain) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperativeDomainKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CooperativeDomain
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCooperativeDomainIDBytes returns the byte representation of the ID
func GetCooperativeDomainIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCooperativeDomainIDFromBytes returns ID in uint64 format from a byte array
func GetCooperativeDomainIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
