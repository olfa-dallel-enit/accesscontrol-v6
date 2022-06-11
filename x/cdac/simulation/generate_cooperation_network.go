package simulation

import (
	"math/rand"

	"crossdomain/x/cdac/keeper"
	"crossdomain/x/cdac/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgGenerateCooperationNetwork(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgGenerateCooperationNetwork{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the GenerateCooperationNetwork simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "GenerateCooperationNetwork simulation not implemented"), nil, nil
	}
}
