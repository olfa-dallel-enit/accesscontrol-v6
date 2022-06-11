package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetForwardPolicyCount get the total number of forwardPolicy
func (k Keeper) GetForwardPolicyCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ForwardPolicyCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetForwardPolicyCount set the total number of forwardPolicy
func (k Keeper) SetForwardPolicyCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ForwardPolicyCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendForwardPolicy appends a forwardPolicy in the store with a new id and update the count
func (k Keeper) AppendForwardPolicy(
	ctx sdk.Context,
	forwardPolicy types.ForwardPolicy,
) uint64 {
	// Create the forwardPolicy
	count := k.GetForwardPolicyCount(ctx)

	// Set the ID of the appended value
	forwardPolicy.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForwardPolicyKey))
	appendedValue := k.cdc.MustMarshal(&forwardPolicy)
	store.Set(GetForwardPolicyIDBytes(forwardPolicy.Id), appendedValue)

	// Update forwardPolicy count
	k.SetForwardPolicyCount(ctx, count+1)

	return count
}

// SetForwardPolicy set a specific forwardPolicy in the store
func (k Keeper) SetForwardPolicy(ctx sdk.Context, forwardPolicy types.ForwardPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForwardPolicyKey))
	b := k.cdc.MustMarshal(&forwardPolicy)
	store.Set(GetForwardPolicyIDBytes(forwardPolicy.Id), b)
}

// GetForwardPolicy returns a forwardPolicy from its id
func (k Keeper) GetForwardPolicy(ctx sdk.Context, id uint64) (val types.ForwardPolicy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForwardPolicyKey))
	b := store.Get(GetForwardPolicyIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveForwardPolicy removes a forwardPolicy from the store
func (k Keeper) RemoveForwardPolicy(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForwardPolicyKey))
	store.Delete(GetForwardPolicyIDBytes(id))
}

// GetAllForwardPolicy returns all forwardPolicy
func (k Keeper) GetAllForwardPolicy(ctx sdk.Context) (list []types.ForwardPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForwardPolicyKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ForwardPolicy
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetForwardPolicyIDBytes returns the byte representation of the ID
func GetForwardPolicyIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetForwardPolicyIDFromBytes returns ID in uint64 format from a byte array
func GetForwardPolicyIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
