package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCalculationTimeCount get the total number of calculationTime
func (k Keeper) GetCalculationTimeCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CalculationTimeCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCalculationTimeCount set the total number of calculationTime
func (k Keeper) SetCalculationTimeCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CalculationTimeCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCalculationTime appends a calculationTime in the store with a new id and update the count
func (k Keeper) AppendCalculationTime(
	ctx sdk.Context,
	calculationTime types.CalculationTime,
) uint64 {
	// Create the calculationTime
	count := k.GetCalculationTimeCount(ctx)

	// Set the ID of the appended value
	calculationTime.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalculationTimeKey))
	appendedValue := k.cdc.MustMarshal(&calculationTime)
	store.Set(GetCalculationTimeIDBytes(calculationTime.Id), appendedValue)

	// Update calculationTime count
	k.SetCalculationTimeCount(ctx, count+1)

	return count
}

// SetCalculationTime set a specific calculationTime in the store
func (k Keeper) SetCalculationTime(ctx sdk.Context, calculationTime types.CalculationTime) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalculationTimeKey))
	b := k.cdc.MustMarshal(&calculationTime)
	store.Set(GetCalculationTimeIDBytes(calculationTime.Id), b)
}

// GetCalculationTime returns a calculationTime from its id
func (k Keeper) GetCalculationTime(ctx sdk.Context, id uint64) (val types.CalculationTime, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalculationTimeKey))
	b := store.Get(GetCalculationTimeIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCalculationTime removes a calculationTime from the store
func (k Keeper) RemoveCalculationTime(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalculationTimeKey))
	store.Delete(GetCalculationTimeIDBytes(id))
}

// GetAllCalculationTime returns all calculationTime
func (k Keeper) GetAllCalculationTime(ctx sdk.Context) (list []types.CalculationTime) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CalculationTimeKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CalculationTime
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCalculationTimeIDBytes returns the byte representation of the ID
func GetCalculationTimeIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCalculationTimeIDFromBytes returns ID in uint64 format from a byte array
func GetCalculationTimeIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
