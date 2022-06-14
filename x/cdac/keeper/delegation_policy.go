package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDelegationPolicyCount get the total number of delegationPolicy
func (k Keeper) GetDelegationPolicyCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationPolicyCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationPolicyCount set the total number of delegationPolicy
func (k Keeper) SetDelegationPolicyCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationPolicyCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegationPolicy appends a delegationPolicy in the store with a new id and update the count
func (k Keeper) AppendDelegationPolicy(
	ctx sdk.Context,
	delegationPolicy types.DelegationPolicy,
) uint64 {
	// Create the delegationPolicy
	count := k.GetDelegationPolicyCount(ctx)

	// Set the ID of the appended value
	delegationPolicy.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyKey))
	appendedValue := k.cdc.MustMarshal(&delegationPolicy)
	store.Set(GetDelegationPolicyIDBytes(delegationPolicy.Id), appendedValue)

	// Update delegationPolicy count
	k.SetDelegationPolicyCount(ctx, count+1)

	return count
}

// SetDelegationPolicy set a specific delegationPolicy in the store
func (k Keeper) SetDelegationPolicy(ctx sdk.Context, delegationPolicy types.DelegationPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyKey))
	b := k.cdc.MustMarshal(&delegationPolicy)
	store.Set(GetDelegationPolicyIDBytes(delegationPolicy.Id), b)
}

// GetDelegationPolicy returns a delegationPolicy from its id
func (k Keeper) GetDelegationPolicy(ctx sdk.Context, id uint64) (val types.DelegationPolicy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyKey))
	b := store.Get(GetDelegationPolicyIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegationPolicy removes a delegationPolicy from the store
func (k Keeper) RemoveDelegationPolicy(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyKey))
	store.Delete(GetDelegationPolicyIDBytes(id))
}

// GetAllDelegationPolicy returns all delegationPolicy
func (k Keeper) GetAllDelegationPolicy(ctx sdk.Context) (list []types.DelegationPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationPolicy
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationPolicyIDBytes returns the byte representation of the ID
func GetDelegationPolicyIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationPolicyIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationPolicyIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) GetAllDelegationPolicyByTarget(ctx sdk.Context, target types.DelegationPolicyTarget) (delegationPolicies []types.DelegationPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationPolicyKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationPolicy
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if CompareLists(val.Target.DelegatorList, target.DelegatorList) && CompareLists(val.Target.PermissionList, target.PermissionList) && (val.Target.Action == target.Action) {
			delegationPolicies = append(delegationPolicies, val)
		}
	}
	return
}

func CompareLists(list1 []string, list2 []string) bool {
	if len(list1) != len(list2) {
		return false
	} else {
		for index := 0; index < len(list1); index++ {
			if list1[index] != list2[index] {
				return false
			}
		}
	}
	return true
}
