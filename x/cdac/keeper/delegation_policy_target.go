package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDelegationPolicyTargetCount get the total number of delegationPolicyTarget
func (k Keeper) GetDelegationPolicyTargetCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationPolicyTargetCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationPolicyTargetCount set the total number of delegationPolicyTarget
func (k Keeper) SetDelegationPolicyTargetCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationPolicyTargetCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegationPolicyTarget appends a delegationPolicyTarget in the store with a new id and update the count
func (k Keeper) AppendDelegationPolicyTarget(
	ctx sdk.Context,
	delegationPolicyTarget types.DelegationPolicyTarget,
) uint64 {
	// Create the delegationPolicyTarget
	count := k.GetDelegationPolicyTargetCount(ctx)

	// Set the ID of the appended value
	delegationPolicyTarget.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyTargetKey))
	appendedValue := k.cdc.MustMarshal(&delegationPolicyTarget)
	store.Set(GetDelegationPolicyTargetIDBytes(delegationPolicyTarget.Id), appendedValue)

	// Update delegationPolicyTarget count
	k.SetDelegationPolicyTargetCount(ctx, count+1)

	return count
}

// SetDelegationPolicyTarget set a specific delegationPolicyTarget in the store
func (k Keeper) SetDelegationPolicyTarget(ctx sdk.Context, delegationPolicyTarget types.DelegationPolicyTarget) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyTargetKey))
	b := k.cdc.MustMarshal(&delegationPolicyTarget)
	store.Set(GetDelegationPolicyTargetIDBytes(delegationPolicyTarget.Id), b)
}

// GetDelegationPolicyTarget returns a delegationPolicyTarget from its id
func (k Keeper) GetDelegationPolicyTarget(ctx sdk.Context, id uint64) (val types.DelegationPolicyTarget, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyTargetKey))
	b := store.Get(GetDelegationPolicyTargetIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegationPolicyTarget removes a delegationPolicyTarget from the store
func (k Keeper) RemoveDelegationPolicyTarget(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyTargetKey))
	store.Delete(GetDelegationPolicyTargetIDBytes(id))
}

// GetAllDelegationPolicyTarget returns all delegationPolicyTarget
func (k Keeper) GetAllDelegationPolicyTarget(ctx sdk.Context) (list []types.DelegationPolicyTarget) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyTargetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationPolicyTarget
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationPolicyTargetIDBytes returns the byte representation of the ID
func GetDelegationPolicyTargetIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationPolicyTargetIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationPolicyTargetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
