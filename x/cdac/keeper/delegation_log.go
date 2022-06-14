package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDelegationLogCount get the total number of delegationLog
func (k Keeper) GetDelegationLogCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationLogCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationLogCount set the total number of delegationLog
func (k Keeper) SetDelegationLogCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationLogCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegationLog appends a delegationLog in the store with a new id and update the count
func (k Keeper) AppendDelegationLog(
	ctx sdk.Context,
	delegationLog types.DelegationLog,
) uint64 {
	// Create the delegationLog
	count := k.GetDelegationLogCount(ctx)

	// Set the ID of the appended value
	delegationLog.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationLogKey))
	appendedValue := k.cdc.MustMarshal(&delegationLog)
	store.Set(GetDelegationLogIDBytes(delegationLog.Id), appendedValue)

	// Update delegationLog count
	k.SetDelegationLogCount(ctx, count+1)

	return count
}

// SetDelegationLog set a specific delegationLog in the store
func (k Keeper) SetDelegationLog(ctx sdk.Context, delegationLog types.DelegationLog) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationLogKey))
	b := k.cdc.MustMarshal(&delegationLog)
	store.Set(GetDelegationLogIDBytes(delegationLog.Id), b)
}

// GetDelegationLog returns a delegationLog from its id
func (k Keeper) GetDelegationLog(ctx sdk.Context, id uint64) (val types.DelegationLog, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationLogKey))
	b := store.Get(GetDelegationLogIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegationLog removes a delegationLog from the store
func (k Keeper) RemoveDelegationLog(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationLogKey))
	store.Delete(GetDelegationLogIDBytes(id))
}

// GetAllDelegationLog returns all delegationLog
func (k Keeper) GetAllDelegationLog(ctx sdk.Context) (list []types.DelegationLog) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationLogKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationLog
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationLogIDBytes returns the byte representation of the ID
func GetDelegationLogIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationLogIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationLogIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
