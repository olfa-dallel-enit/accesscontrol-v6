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

func TestDomainMapQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDomainMap(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetDomainMapRequest
		response *types.QueryGetDomainMapResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetDomainMapRequest{
				DomainIndex: msgs[0].DomainIndex,
			},
			response: &types.QueryGetDomainMapResponse{DomainMap: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetDomainMapRequest{
				DomainIndex: msgs[1].DomainIndex,
			},
			response: &types.QueryGetDomainMapResponse{DomainMap: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetDomainMapRequest{
				DomainIndex: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.DomainMap(wctx, tc.request)
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

func TestDomainMapQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.CdacKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDomainMap(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllDomainMapRequest {
		return &types.QueryAllDomainMapRequest{
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
			resp, err := keeper.DomainMapAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.DomainMap), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.DomainMap),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.DomainMapAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.DomainMap), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.DomainMap),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.DomainMapAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.DomainMap),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.DomainMapAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
