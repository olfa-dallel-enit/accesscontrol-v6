package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDelegationPathCount get the total number of delegationPath
func (k Keeper) GetDelegationPathCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationPathCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationPathCount set the total number of delegationPath
func (k Keeper) SetDelegationPathCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationPathCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegationPath appends a delegationPath in the store with a new id and update the count
func (k Keeper) AppendDelegationPath(
	ctx sdk.Context,
	delegationPath types.DelegationPath,
) uint64 {
	// Create the delegationPath
	count := k.GetDelegationPathCount(ctx)

	// Set the ID of the appended value
	delegationPath.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPathKey))
	appendedValue := k.cdc.MustMarshal(&delegationPath)
	store.Set(GetDelegationPathIDBytes(delegationPath.Id), appendedValue)

	// Update delegationPath count
	k.SetDelegationPathCount(ctx, count+1)

	return count
}

// SetDelegationPath set a specific delegationPath in the store
func (k Keeper) SetDelegationPath(ctx sdk.Context, delegationPath types.DelegationPath) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPathKey))
	b := k.cdc.MustMarshal(&delegationPath)
	store.Set(GetDelegationPathIDBytes(delegationPath.Id), b)
}

// GetDelegationPath returns a delegationPath from its id
func (k Keeper) GetDelegationPath(ctx sdk.Context, id uint64) (val types.DelegationPath, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPathKey))
	b := store.Get(GetDelegationPathIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegationPath removes a delegationPath from the store
func (k Keeper) RemoveDelegationPath(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPathKey))
	store.Delete(GetDelegationPathIDBytes(id))
}

// GetAllDelegationPath returns all delegationPath
func (k Keeper) GetAllDelegationPath(ctx sdk.Context) (list []types.DelegationPath) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPathKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationPath
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationPathIDBytes returns the byte representation of the ID
func GetDelegationPathIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationPathIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationPathIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
