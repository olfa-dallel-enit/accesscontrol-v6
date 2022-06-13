package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetInterDomainAclPolicyCount get the total number of interDomainAclPolicy
func (k Keeper) GetInterDomainAclPolicyCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.InterDomainAclPolicyCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetInterDomainAclPolicyCount set the total number of interDomainAclPolicy
func (k Keeper) SetInterDomainAclPolicyCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.InterDomainAclPolicyCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendInterDomainAclPolicy appends a interDomainAclPolicy in the store with a new id and update the count
func (k Keeper) AppendInterDomainAclPolicy(
	ctx sdk.Context,
	interDomainAclPolicy types.InterDomainAclPolicy,
) uint64 {
	// Create the interDomainAclPolicy
	count := k.GetInterDomainAclPolicyCount(ctx)

	// Set the ID of the appended value
	interDomainAclPolicy.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainAclPolicyKey))
	appendedValue := k.cdc.MustMarshal(&interDomainAclPolicy)
	store.Set(GetInterDomainAclPolicyIDBytes(interDomainAclPolicy.Id), appendedValue)

	// Update interDomainAclPolicy count
	k.SetInterDomainAclPolicyCount(ctx, count+1)

	return count
}

// SetInterDomainAclPolicy set a specific interDomainAclPolicy in the store
func (k Keeper) SetInterDomainAclPolicy(ctx sdk.Context, interDomainAclPolicy types.InterDomainAclPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainAclPolicyKey))
	b := k.cdc.MustMarshal(&interDomainAclPolicy)
	store.Set(GetInterDomainAclPolicyIDBytes(interDomainAclPolicy.Id), b)
}

// GetInterDomainAclPolicy returns a interDomainAclPolicy from its id
func (k Keeper) GetInterDomainAclPolicy(ctx sdk.Context, id uint64) (val types.InterDomainAclPolicy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainAclPolicyKey))
	b := store.Get(GetInterDomainAclPolicyIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveInterDomainAclPolicy removes a interDomainAclPolicy from the store
func (k Keeper) RemoveInterDomainAclPolicy(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainAclPolicyKey))
	store.Delete(GetInterDomainAclPolicyIDBytes(id))
}

// GetAllInterDomainAclPolicy returns all interDomainAclPolicy
func (k Keeper) GetAllInterDomainAclPolicy(ctx sdk.Context) (list []types.InterDomainAclPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InterDomainAclPolicyKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.InterDomainAclPolicy
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetInterDomainAclPolicyIDBytes returns the byte representation of the ID
func GetInterDomainAclPolicyIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetInterDomainAclPolicyIDFromBytes returns ID in uint64 format from a byte array
func GetInterDomainAclPolicyIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
