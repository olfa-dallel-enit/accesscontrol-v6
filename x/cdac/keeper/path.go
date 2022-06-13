package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetPathCount get the total number of path
func (k Keeper) GetPathCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PathCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPathCount set the total number of path
func (k Keeper) SetPathCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PathCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPath appends a path in the store with a new id and update the count
func (k Keeper) AppendPath(
	ctx sdk.Context,
	path types.Path,
) uint64 {
	// Create the path
	count := k.GetPathCount(ctx)

	// Set the ID of the appended value
	path.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PathKey))
	appendedValue := k.cdc.MustMarshal(&path)
	store.Set(GetPathIDBytes(path.Id), appendedValue)

	// Update path count
	k.SetPathCount(ctx, count+1)

	return count
}

// SetPath set a specific path in the store
func (k Keeper) SetPath(ctx sdk.Context, path types.Path) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PathKey))
	b := k.cdc.MustMarshal(&path)
	store.Set(GetPathIDBytes(path.Id), b)
}

// GetPath returns a path from its id
func (k Keeper) GetPath(ctx sdk.Context, id uint64) (val types.Path, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PathKey))
	b := store.Get(GetPathIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePath removes a path from the store
func (k Keeper) RemovePath(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PathKey))
	store.Delete(GetPathIDBytes(id))
}

// GetAllPath returns all path
func (k Keeper) GetAllPath(ctx sdk.Context) (list []types.Path) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PathKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Path
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPathIDBytes returns the byte representation of the ID
func GetPathIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPathIDFromBytes returns ID in uint64 format from a byte array
func GetPathIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
