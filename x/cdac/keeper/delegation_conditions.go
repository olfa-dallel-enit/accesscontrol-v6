package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDelegationConditionsCount get the total number of delegationConditions
func (k Keeper) GetDelegationConditionsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationConditionsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationConditionsCount set the total number of delegationConditions
func (k Keeper) SetDelegationConditionsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationConditionsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegationConditions appends a delegationConditions in the store with a new id and update the count
func (k Keeper) AppendDelegationConditions(
	ctx sdk.Context,
	delegationConditions types.DelegationConditions,
) uint64 {
	// Create the delegationConditions
	count := k.GetDelegationConditionsCount(ctx)

	// Set the ID of the appended value
	delegationConditions.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationConditionsKey))
	appendedValue := k.cdc.MustMarshal(&delegationConditions)
	store.Set(GetDelegationConditionsIDBytes(delegationConditions.Id), appendedValue)

	// Update delegationConditions count
	k.SetDelegationConditionsCount(ctx, count+1)

	return count
}

// SetDelegationConditions set a specific delegationConditions in the store
func (k Keeper) SetDelegationConditions(ctx sdk.Context, delegationConditions types.DelegationConditions) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationConditionsKey))
	b := k.cdc.MustMarshal(&delegationConditions)
	store.Set(GetDelegationConditionsIDBytes(delegationConditions.Id), b)
}

// GetDelegationConditions returns a delegationConditions from its id
func (k Keeper) GetDelegationConditions(ctx sdk.Context, id uint64) (val types.DelegationConditions, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationConditionsKey))
	b := store.Get(GetDelegationConditionsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegationConditions removes a delegationConditions from the store
func (k Keeper) RemoveDelegationConditions(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationConditionsKey))
	store.Delete(GetDelegationConditionsIDBytes(id))
}

// GetAllDelegationConditions returns all delegationConditions
func (k Keeper) GetAllDelegationConditions(ctx sdk.Context) (list []types.DelegationConditions) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationConditionsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationConditions
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationConditionsIDBytes returns the byte representation of the ID
func GetDelegationConditionsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationConditionsIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationConditionsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
