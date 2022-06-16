package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"

	"context"
	crossdomainTypes "crossdomain/x/crossdomain/types"
)

type CrossdomainKeeper interface {
	// Methods imported from crossdomain should be defined here
	GetLocalDomain(ctx sdk.Context) (val crossdomainTypes.LocalDomain, found bool)
	GetLocalDomainCertificate(ctx sdk.Context) (val crossdomainTypes.LocalDomainCertificate, found bool)
	GetLocalDomainLocation(ctx sdk.Context) (location string, found bool)
	GetDecisionPolicy(ctx sdk.Context) (val crossdomainTypes.DecisionPolicy, found bool)
	GetForwardPolicy(ctx sdk.Context) (val crossdomainTypes.ForwardPolicy, found bool)
	ForwardPolicy(c context.Context, req *crossdomainTypes.QueryGetForwardPolicyRequest) (*crossdomainTypes.QueryGetForwardPolicyResponse, error)
	GetCooperationNetworkFeatures(ctx sdk.Context) (val crossdomainTypes.CooperationNetworkFeatures, found bool)
	GetPrivateKey(ctx sdk.Context) (val crossdomainTypes.PrivateKey, found bool)
}

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	// Methods imported from account should be defined here
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	// Methods imported from bank should be defined here
}
