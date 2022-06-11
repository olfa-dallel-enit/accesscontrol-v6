package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/cdac/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestCooperationDataQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCooperationData(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetCooperationDataRequest
		response *types.QueryGetCooperationDataResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetCooperationDataRequest{
				LabelIndex: msgs[0].LabelIndex,
			},
			response: &types.QueryGetCooperationDataResponse{CooperationData: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetCooperationDataRequest{
				LabelIndex: msgs[1].LabelIndex,
			},
			response: &types.QueryGetCooperationDataResponse{CooperationData: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetCooperationDataRequest{
				LabelIndex: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.CooperationData(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestCooperationDataQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCooperationData(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllCooperationDataRequest {
		return &types.QueryAllCooperationDataRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CooperationDataAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CooperationData), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.CooperationData),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CooperationDataAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CooperationData), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.CooperationData),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.CooperationDataAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.CooperationData),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.CooperationDataAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
