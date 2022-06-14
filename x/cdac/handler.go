package cdac

import (
	"fmt"

	"crossdomain/x/cdac/keeper"
	"crossdomain/x/cdac/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// NewHandler ...
func NewHandler(k keeper.Keeper) sdk.Handler {
	msgServer := keeper.NewMsgServerImpl(k)

	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())

		switch msg := msg.(type) {
		case *types.MsgCreatePublicKey:
			res, err := msgServer.CreatePublicKey(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdatePublicKey:
			res, err := msgServer.UpdatePublicKey(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeletePublicKey:
			res, err := msgServer.DeletePublicKey(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateValidity:
			res, err := msgServer.CreateValidity(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateValidity:
			res, err := msgServer.UpdateValidity(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteValidity:
			res, err := msgServer.DeleteValidity(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateCertificate:
			res, err := msgServer.CreateCertificate(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateCertificate:
			res, err := msgServer.UpdateCertificate(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteCertificate:
			res, err := msgServer.DeleteCertificate(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateIbcConnection:
			res, err := msgServer.CreateIbcConnection(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateIbcConnection:
			res, err := msgServer.UpdateIbcConnection(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteIbcConnection:
			res, err := msgServer.DeleteIbcConnection(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateDomain:
			res, err := msgServer.CreateDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDomain:
			res, err := msgServer.UpdateDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDomain:
			res, err := msgServer.DeleteDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateAuthenticationLog:
			res, err := msgServer.CreateAuthenticationLog(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateAuthenticationLog:
			res, err := msgServer.UpdateAuthenticationLog(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteAuthenticationLog:
			res, err := msgServer.DeleteAuthenticationLog(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgSendAuthenticateDomain:
			res, err := msgServer.SendAuthenticateDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateDomainCooperation:
			res, err := msgServer.CreateDomainCooperation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDomainCooperation:
			res, err := msgServer.UpdateDomainCooperation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDomainCooperation:
			res, err := msgServer.DeleteDomainCooperation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateCooperationLog:
			res, err := msgServer.CreateCooperationLog(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateCooperationLog:
			res, err := msgServer.UpdateCooperationLog(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteCooperationLog:
			res, err := msgServer.DeleteCooperationLog(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgSendEstablishCooperation:
			res, err := msgServer.SendEstablishCooperation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgSendForwardCooperationData:
			res, err := msgServer.SendForwardCooperationData(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateForwardPolicy:
			res, err := msgServer.CreateForwardPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateForwardPolicy:
			res, err := msgServer.UpdateForwardPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteForwardPolicy:
			res, err := msgServer.DeleteForwardPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgSendExchangeCooperationData:
			res, err := msgServer.SendExchangeCooperationData(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgSendModifyCooperationCost:
			res, err := msgServer.SendModifyCooperationCost(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgSendDisableCooperation:
			res, err := msgServer.SendDisableCooperation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgSendEnableCooperation:
			res, err := msgServer.SendEnableCooperation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgSendModifyCooperationValidity:
			res, err := msgServer.SendModifyCooperationValidity(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgSendModifyCooperationInterest:
			res, err := msgServer.SendModifyCooperationInterest(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgSendRevokeCooperation:
			res, err := msgServer.SendRevokeCooperation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateDomainMap:
			res, err := msgServer.CreateDomainMap(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgUpdateDomainMap:
			res, err := msgServer.UpdateDomainMap(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgDeleteDomainMap:
			res, err := msgServer.DeleteDomainMap(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateCooperationNetworkFeatures:
			res, err := msgServer.CreateCooperationNetworkFeatures(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateCooperationNetworkFeatures:
			res, err := msgServer.UpdateCooperationNetworkFeatures(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteCooperationNetworkFeatures:
			res, err := msgServer.DeleteCooperationNetworkFeatures(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateCooperationData:
			res, err := msgServer.CreateCooperationData(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgUpdateCooperationData:
			res, err := msgServer.UpdateCooperationData(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgDeleteCooperationData:
			res, err := msgServer.DeleteCooperationData(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateCooperationNetwork:
			res, err := msgServer.CreateCooperationNetwork(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateCooperationNetwork:
			res, err := msgServer.UpdateCooperationNetwork(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteCooperationNetwork:
			res, err := msgServer.DeleteCooperationNetwork(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgGenerateCooperationNetwork:
			res, err := msgServer.GenerateCooperationNetwork(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateUpdatePolicy:
			res, err := msgServer.CreateUpdatePolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgUpdateUpdatePolicy:
			res, err := msgServer.UpdateUpdatePolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgDeleteUpdatePolicy:
			res, err := msgServer.DeleteUpdatePolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateCooperativeDomain:
			res, err := msgServer.CreateCooperativeDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateCooperativeDomain:
			res, err := msgServer.UpdateCooperativeDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteCooperativeDomain:
			res, err := msgServer.DeleteCooperativeDomain(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateDelegationPath:
			res, err := msgServer.CreateDelegationPath(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDelegationPath:
			res, err := msgServer.UpdateDelegationPath(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDelegationPath:
			res, err := msgServer.DeleteDelegationPath(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreatePath:
			res, err := msgServer.CreatePath(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdatePath:
			res, err := msgServer.UpdatePath(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeletePath:
			res, err := msgServer.DeletePath(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateTimeCalculation:
			res, err := msgServer.CreateTimeCalculation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateTimeCalculation:
			res, err := msgServer.UpdateTimeCalculation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteTimeCalculation:
			res, err := msgServer.DeleteTimeCalculation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateCalculationTime:
			res, err := msgServer.CreateCalculationTime(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateCalculationTime:
			res, err := msgServer.UpdateCalculationTime(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteCalculationTime:
			res, err := msgServer.DeleteCalculationTime(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgRequestAccessPermission:
			res, err := msgServer.RequestAccessPermission(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateInterDomainAclPolicy:
			res, err := msgServer.CreateInterDomainAclPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateInterDomainAclPolicy:
			res, err := msgServer.UpdateInterDomainAclPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteInterDomainAclPolicy:
			res, err := msgServer.DeleteInterDomainAclPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateInterDomainDclPolicy:
			res, err := msgServer.CreateInterDomainDclPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateInterDomainDclPolicy:
			res, err := msgServer.UpdateInterDomainDclPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteInterDomainDclPolicy:
			res, err := msgServer.DeleteInterDomainDclPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateDelegationConditions:
			res, err := msgServer.CreateDelegationConditions(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDelegationConditions:
			res, err := msgServer.UpdateDelegationConditions(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDelegationConditions:
			res, err := msgServer.DeleteDelegationConditions(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateDelegationRule:
			res, err := msgServer.CreateDelegationRule(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDelegationRule:
			res, err := msgServer.UpdateDelegationRule(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDelegationRule:
			res, err := msgServer.DeleteDelegationRule(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateDelegationPolicyTarget:
			res, err := msgServer.CreateDelegationPolicyTarget(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDelegationPolicyTarget:
			res, err := msgServer.UpdateDelegationPolicyTarget(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDelegationPolicyTarget:
			res, err := msgServer.DeleteDelegationPolicyTarget(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateDelegationPolicy:
			res, err := msgServer.CreateDelegationPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDelegationPolicy:
			res, err := msgServer.UpdateDelegationPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDelegationPolicy:
			res, err := msgServer.DeleteDelegationPolicy(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgRequestDelegation:
			res, err := msgServer.RequestDelegation(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateDelegationLog:
			res, err := msgServer.CreateDelegationLog(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateDelegationLog:
			res, err := msgServer.UpdateDelegationLog(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteDelegationLog:
			res, err := msgServer.DeleteDelegationLog(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

			// this line is used by starport scaffolding # 1
		default:
			errMsg := fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg)
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
		}
	}
}
