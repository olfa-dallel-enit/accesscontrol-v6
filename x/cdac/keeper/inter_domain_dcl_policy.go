package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetInterDomainDclPolicyCount get the total number of interDomainDclPolicy
func (k Keeper) GetInterDomainDclPolicyCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.InterDomainDclPolicyCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetInterDomainDclPolicyCount set the total number of interDomainDclPolicy
func (k Keeper) SetInterDomainDclPolicyCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.InterDomainDclPolicyCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendInterDomainDclPolicy appends a interDomainDclPolicy in the store with a new id and update the count
func (k Keeper) AppendInterDomainDclPolicy(
	ctx sdk.Context,
	interDomainDclPolicy types.InterDomainDclPolicy,
) uint64 {
	// Create the interDomainDclPolicy
	count := k.GetInterDomainDclPolicyCount(ctx)

	// Set the ID of the appended value
	interDomainDclPolicy.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainDclPolicyKey))
	appendedValue := k.cdc.MustMarshal(&interDomainDclPolicy)
	store.Set(GetInterDomainDclPolicyIDBytes(interDomainDclPolicy.Id), appendedValue)

	// Update interDomainDclPolicy count
	k.SetInterDomainDclPolicyCount(ctx, count+1)

	return count
}

// SetInterDomainDclPolicy set a specific interDomainDclPolicy in the store
func (k Keeper) SetInterDomainDclPolicy(ctx sdk.Context, interDomainDclPolicy types.InterDomainDclPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainDclPolicyKey))
	b := k.cdc.MustMarshal(&interDomainDclPolicy)
	store.Set(GetInterDomainDclPolicyIDBytes(interDomainDclPolicy.Id), b)
}

// GetInterDomainDclPolicy returns a interDomainDclPolicy from its id
func (k Keeper) GetInterDomainDclPolicy(ctx sdk.Context, id uint64) (val types.InterDomainDclPolicy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainDclPolicyKey))
	b := store.Get(GetInterDomainDclPolicyIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveInterDomainDclPolicy removes a interDomainDclPolicy from the store
func (k Keeper) RemoveInterDomainDclPolicy(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainDclPolicyKey))
	store.Delete(GetInterDomainDclPolicyIDBytes(id))
}

// GetAllInterDomainDclPolicy returns all interDomainDclPolicy
func (k Keeper) GetAllInterDomainDclPolicy(ctx sdk.Context) (list []types.InterDomainDclPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainDclPolicyKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.InterDomainDclPolicy
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetInterDomainDclPolicyIDBytes returns the byte representation of the ID
func GetInterDomainDclPolicyIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetInterDomainDclPolicyIDFromBytes returns ID in uint64 format from a byte array
func GetInterDomainDclPolicyIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) GetInterDomainDclPolicyByLabel(ctx sdk.Context, label string) (delegationPolicy types.InterDomainDclPolicy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainDclPolicyKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.InterDomainDclPolicy
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Label == label{
			return val, true
		}
	}
	return delegationPolicy, false
}

func (k Keeper) FindInterDomainDclPolicyByLabel(ctx sdk.Context, label string) (bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainDclPolicyKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.InterDomainDclPolicy
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Label == label{
			return true
		}
	}

	return false
}