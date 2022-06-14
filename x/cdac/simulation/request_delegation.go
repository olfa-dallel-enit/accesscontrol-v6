package simulation

import (
	"math/rand"

	"crossdomain/x/cdac/keeper"
	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgRequestDelegation(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgRequestDelegation{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the RequestDelegation simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "RequestDelegation simulation not implemented"), nil, nil
	}
}
