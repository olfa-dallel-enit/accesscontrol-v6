package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDelegationRuleCount get the total number of delegationRule
func (k Keeper) GetDelegationRuleCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationRuleCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationRuleCount set the total number of delegationRule
func (k Keeper) SetDelegationRuleCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationRuleCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegationRule appends a delegationRule in the store with a new id and update the count
func (k Keeper) AppendDelegationRule(
	ctx sdk.Context,
	delegationRule types.DelegationRule,
) uint64 {
	// Create the delegationRule
	count := k.GetDelegationRuleCount(ctx)

	// Set the ID of the appended value
	delegationRule.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRuleKey))
	appendedValue := k.cdc.MustMarshal(&delegationRule)
	store.Set(GetDelegationRuleIDBytes(delegationRule.Id), appendedValue)

	// Update delegationRule count
	k.SetDelegationRuleCount(ctx, count+1)

	return count
}

// SetDelegationRule set a specific delegationRule in the store
func (k Keeper) SetDelegationRule(ctx sdk.Context, delegationRule types.DelegationRule) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRuleKey))
	b := k.cdc.MustMarshal(&delegationRule)
	store.Set(GetDelegationRuleIDBytes(delegationRule.Id), b)
}

// GetDelegationRule returns a delegationRule from its id
func (k Keeper) GetDelegationRule(ctx sdk.Context, id uint64) (val types.DelegationRule, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRuleKey))
	b := store.Get(GetDelegationRuleIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegationRule removes a delegationRule from the store
func (k Keeper) RemoveDelegationRule(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRuleKey))
	store.Delete(GetDelegationRuleIDBytes(id))
}

// GetAllDelegationRule returns all delegationRule
func (k Keeper) GetAllDelegationRule(ctx sdk.Context) (list []types.DelegationRule) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRuleKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationRule
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationRuleIDBytes returns the byte representation of the ID
func GetDelegationRuleIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationRuleIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationRuleIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) GetDelegationRuleByLabel(ctx sdk.Context, label string) (delegationRule types.DelegationRule, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationRuleKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DelegationRule
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Label == label {
			return val, true
		}
	}

	return delegationRule, false
}
