package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCooperationNetworkCount get the total number of cooperationNetwork
func (k Keeper) GetCooperationNetworkCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CooperationNetworkCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCooperationNetworkCount set the total number of cooperationNetwork
func (k Keeper) SetCooperationNetworkCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CooperationNetworkCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCooperationNetwork appends a cooperationNetwork in the store with a new id and update the count
func (k Keeper) AppendCooperationNetwork(
	ctx sdk.Context,
	cooperationNetwork types.CooperationNetwork,
) uint64 {
	// Create the cooperationNetwork
	count := k.GetCooperationNetworkCount(ctx)

	// Set the ID of the appended value
	cooperationNetwork.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkKey))
	appendedValue := k.cdc.MustMarshal(&cooperationNetwork)
	store.Set(GetCooperationNetworkIDBytes(cooperationNetwork.Id), appendedValue)

	// Update cooperationNetwork count
	k.SetCooperationNetworkCount(ctx, count+1)

	return count
}

// SetCooperationNetwork set a specific cooperationNetwork in the store
func (k Keeper) SetCooperationNetwork(ctx sdk.Context, cooperationNetwork types.CooperationNetwork) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkKey))
	b := k.cdc.MustMarshal(&cooperationNetwork)
	store.Set(GetCooperationNetworkIDBytes(cooperationNetwork.Id), b)
}

// GetCooperationNetwork returns a cooperationNetwork from its id
func (k Keeper) GetCooperationNetwork(ctx sdk.Context, id uint64) (val types.CooperationNetwork, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkKey))
	b := store.Get(GetCooperationNetworkIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCooperationNetwork removes a cooperationNetwork from the store
func (k Keeper) RemoveCooperationNetwork(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkKey))
	store.Delete(GetCooperationNetworkIDBytes(id))
}

// GetAllCooperationNetwork returns all cooperationNetwork
func (k Keeper) GetAllCooperationNetwork(ctx sdk.Context) (list []types.CooperationNetwork) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CooperationNetwork
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCooperationNetworkIDBytes returns the byte representation of the ID
func GetCooperationNetworkIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCooperationNetworkIDFromBytes returns ID in uint64 format from a byte array
func GetCooperationNetworkIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
