/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CdacAuthenticationLog {
  /** @format uint64 */
  id?: string;
  transaction?: string;
  timestamp?: string;
  details?: string;
  decision?: string;
  function?: string;
  creator?: string;
}

export interface CdacCertificate {
  /** @format uint64 */
  id?: string;
  publicKey?: CdacPublicKey;
  validity?: CdacValidity;
  creator?: string;
}

export interface CdacCooperationLog {
  /** @format uint64 */
  id?: string;
  transaction?: string;
  timestamp?: string;
  details?: string;
  decision?: string;
  function?: string;
  creator?: string;
}

export interface CdacDomain {
  /** @format uint64 */
  id?: string;
  name?: string;
  domainType?: string;
  location?: string;
  certificate?: CdacCertificate;
  ibcConnection?: CdacIbcConnection;
  creator?: string;
}

export interface CdacDomainCooperation {
  /** @format uint64 */
  id?: string;
  label?: string;
  cooperationType?: string;
  sourceDomain?: CdacDomain;
  remoteDomain?: CdacDomain;
  validity?: CdacValidity;
  interest?: string;

  /** @format uint64 */
  cost?: string;
  creationTimestamp?: string;
  updateTimestamp?: string;
  creator?: string;
  status?: string;
}

export interface CdacForwardPolicy {
  /** @format uint64 */
  id?: string;
  mode?: string;
  domainList?: string[];
  locationList?: string[];
  creator?: string;
}

export interface CdacIbcConnection {
  /** @format uint64 */
  id?: string;
  channel?: string;
  port?: string;
  creator?: string;
}

export interface CdacMsgCreateAuthenticationLogResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateCertificateResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateCooperationLogResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateDomainCooperationResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateDomainResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateForwardPolicyResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateIbcConnectionResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreatePublicKeyResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateValidityResponse {
  /** @format uint64 */
  id?: string;
}

export type CdacMsgDeleteAuthenticationLogResponse = object;

export type CdacMsgDeleteCertificateResponse = object;

export type CdacMsgDeleteCooperationLogResponse = object;

export type CdacMsgDeleteDomainCooperationResponse = object;

export type CdacMsgDeleteDomainResponse = object;

export type CdacMsgDeleteForwardPolicyResponse = object;

export type CdacMsgDeleteIbcConnectionResponse = object;

export type CdacMsgDeletePublicKeyResponse = object;

export type CdacMsgDeleteValidityResponse = object;

export type CdacMsgSendAuthenticateDomainResponse = object;

export type CdacMsgSendDisableCooperationResponse = object;

export type CdacMsgSendEnableCooperationResponse = object;

export type CdacMsgSendEstablishCooperationResponse = object;

export type CdacMsgSendExchangeCooperationDataResponse = object;

export type CdacMsgSendForwardCooperationDataResponse = object;

export type CdacMsgSendModifyCooperationCostResponse = object;

export type CdacMsgUpdateAuthenticationLogResponse = object;

export type CdacMsgUpdateCertificateResponse = object;

export type CdacMsgUpdateCooperationLogResponse = object;

export type CdacMsgUpdateDomainCooperationResponse = object;

export type CdacMsgUpdateDomainResponse = object;

export type CdacMsgUpdateForwardPolicyResponse = object;

export type CdacMsgUpdateIbcConnectionResponse = object;

export type CdacMsgUpdatePublicKeyResponse = object;

export type CdacMsgUpdateValidityResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type CdacParams = object;

export interface CdacPublicKey {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  n?: string;

  /** @format uint64 */
  e?: string;
  creator?: string;
}

export interface CdacQueryAllAuthenticationLogResponse {
  AuthenticationLog?: CdacAuthenticationLog[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdacQueryAllCertificateResponse {
  Certificate?: CdacCertificate[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdacQueryAllCooperationLogResponse {
  CooperationLog?: CdacCooperationLog[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdacQueryAllDomainCooperationResponse {
  DomainCooperation?: CdacDomainCooperation[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdacQueryAllDomainResponse {
  Domain?: CdacDomain[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdacQueryAllForwardPolicyResponse {
  ForwardPolicy?: CdacForwardPolicy[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdacQueryAllIbcConnectionResponse {
  IbcConnection?: CdacIbcConnection[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdacQueryAllPublicKeyResponse {
  PublicKey?: CdacPublicKey[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdacQueryAllValidityResponse {
  Validity?: CdacValidity[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdacQueryCheckEstablishedCooperationByChannelResponse {
  label?: string;
  found?: boolean;
}

export interface CdacQueryEstablishedCooperationByChannelResponse {
  domainCooperation?: CdacDomainCooperation;
  found?: boolean;
}

export interface CdacQueryGetAuthenticationLogResponse {
  AuthenticationLog?: CdacAuthenticationLog;
}

export interface CdacQueryGetCertificateResponse {
  Certificate?: CdacCertificate;
}

export interface CdacQueryGetCooperationLogResponse {
  CooperationLog?: CdacCooperationLog;
}

export interface CdacQueryGetDomainCooperationResponse {
  DomainCooperation?: CdacDomainCooperation;
}

export interface CdacQueryGetDomainResponse {
  Domain?: CdacDomain;
}

export interface CdacQueryGetForwardPolicyResponse {
  ForwardPolicy?: CdacForwardPolicy;
}

export interface CdacQueryGetIbcConnectionResponse {
  IbcConnection?: CdacIbcConnection;
}

export interface CdacQueryGetPublicKeyResponse {
  PublicKey?: CdacPublicKey;
}

export interface CdacQueryGetValidityResponse {
  Validity?: CdacValidity;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface CdacQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: CdacParams;
}

export interface CdacQueryRetrieveForwardPolicyResponse {
  forwardPolicy?: CdacForwardPolicy;
}

export interface CdacValidity {
  /** @format uint64 */
  id?: string;
  notBefore?: string;
  notAfter?: string;
  creator?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title cdac/authentication_log.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAuthenticationLogAll
   * @summary Queries a list of AuthenticationLog items.
   * @request GET:/crossdomain/cdac/authentication_log
   */
  queryAuthenticationLogAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllAuthenticationLogResponse, RpcStatus>({
      path: `/crossdomain/cdac/authentication_log`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAuthenticationLog
   * @summary Queries a AuthenticationLog by id.
   * @request GET:/crossdomain/cdac/authentication_log/{id}
   */
  queryAuthenticationLog = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetAuthenticationLogResponse, RpcStatus>({
      path: `/crossdomain/cdac/authentication_log/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCertificateAll
   * @summary Queries a list of Certificate items.
   * @request GET:/crossdomain/cdac/certificate
   */
  queryCertificateAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllCertificateResponse, RpcStatus>({
      path: `/crossdomain/cdac/certificate`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCertificate
   * @summary Queries a Certificate by id.
   * @request GET:/crossdomain/cdac/certificate/{id}
   */
  queryCertificate = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetCertificateResponse, RpcStatus>({
      path: `/crossdomain/cdac/certificate/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCheckEstablishedCooperationByChannel
   * @summary Queries a list of CheckEstablishedCooperationByChannel items.
   * @request GET:/crossdomain/cdac/check_established_cooperation_by_channel/{channel}
   */
  queryCheckEstablishedCooperationByChannel = (channel: string, params: RequestParams = {}) =>
    this.request<CdacQueryCheckEstablishedCooperationByChannelResponse, RpcStatus>({
      path: `/crossdomain/cdac/check_established_cooperation_by_channel/${channel}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCooperationLogAll
   * @summary Queries a list of CooperationLog items.
   * @request GET:/crossdomain/cdac/cooperation_log
   */
  queryCooperationLogAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllCooperationLogResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperation_log`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCooperationLog
   * @summary Queries a CooperationLog by id.
   * @request GET:/crossdomain/cdac/cooperation_log/{id}
   */
  queryCooperationLog = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetCooperationLogResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperation_log/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomainAll
   * @summary Queries a list of Domain items.
   * @request GET:/crossdomain/cdac/domain
   */
  queryDomainAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllDomainResponse, RpcStatus>({
      path: `/crossdomain/cdac/domain`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomain
   * @summary Queries a Domain by id.
   * @request GET:/crossdomain/cdac/domain/{id}
   */
  queryDomain = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetDomainResponse, RpcStatus>({
      path: `/crossdomain/cdac/domain/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomainCooperationAll
   * @summary Queries a list of DomainCooperation items.
   * @request GET:/crossdomain/cdac/domain_cooperation
   */
  queryDomainCooperationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllDomainCooperationResponse, RpcStatus>({
      path: `/crossdomain/cdac/domain_cooperation`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomainCooperation
   * @summary Queries a DomainCooperation by id.
   * @request GET:/crossdomain/cdac/domain_cooperation/{id}
   */
  queryDomainCooperation = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetDomainCooperationResponse, RpcStatus>({
      path: `/crossdomain/cdac/domain_cooperation/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstablishedCooperationByChannel
   * @summary Queries a list of EstablishedCooperationByChannel items.
   * @request GET:/crossdomain/cdac/established_cooperation_by_channel/{channel}
   */
  queryEstablishedCooperationByChannel = (channel: string, params: RequestParams = {}) =>
    this.request<CdacQueryEstablishedCooperationByChannelResponse, RpcStatus>({
      path: `/crossdomain/cdac/established_cooperation_by_channel/${channel}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryForwardPolicyAll
   * @summary Queries a list of ForwardPolicy items.
   * @request GET:/crossdomain/cdac/forward_policy
   */
  queryForwardPolicyAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllForwardPolicyResponse, RpcStatus>({
      path: `/crossdomain/cdac/forward_policy`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryForwardPolicy
   * @summary Queries a ForwardPolicy by id.
   * @request GET:/crossdomain/cdac/forward_policy/{id}
   */
  queryForwardPolicy = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetForwardPolicyResponse, RpcStatus>({
      path: `/crossdomain/cdac/forward_policy/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIbcConnectionAll
   * @summary Queries a list of IbcConnection items.
   * @request GET:/crossdomain/cdac/ibc_connection
   */
  queryIbcConnectionAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllIbcConnectionResponse, RpcStatus>({
      path: `/crossdomain/cdac/ibc_connection`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIbcConnection
   * @summary Queries a IbcConnection by id.
   * @request GET:/crossdomain/cdac/ibc_connection/{id}
   */
  queryIbcConnection = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetIbcConnectionResponse, RpcStatus>({
      path: `/crossdomain/cdac/ibc_connection/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/crossdomain/cdac/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<CdacQueryParamsResponse, RpcStatus>({
      path: `/crossdomain/cdac/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPublicKeyAll
   * @summary Queries a list of PublicKey items.
   * @request GET:/crossdomain/cdac/public_key
   */
  queryPublicKeyAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllPublicKeyResponse, RpcStatus>({
      path: `/crossdomain/cdac/public_key`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPublicKey
   * @summary Queries a PublicKey by id.
   * @request GET:/crossdomain/cdac/public_key/{id}
   */
  queryPublicKey = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetPublicKeyResponse, RpcStatus>({
      path: `/crossdomain/cdac/public_key/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRetrieveForwardPolicy
   * @summary Queries a list of RetrieveForwardPolicy items.
   * @request GET:/crossdomain/cdac/retrieve_forward_policy
   */
  queryRetrieveForwardPolicy = (params: RequestParams = {}) =>
    this.request<CdacQueryRetrieveForwardPolicyResponse, RpcStatus>({
      path: `/crossdomain/cdac/retrieve_forward_policy`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidityAll
   * @summary Queries a list of Validity items.
   * @request GET:/crossdomain/cdac/validity
   */
  queryValidityAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllValidityResponse, RpcStatus>({
      path: `/crossdomain/cdac/validity`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidity
   * @summary Queries a Validity by id.
   * @request GET:/crossdomain/cdac/validity/{id}
   */
  queryValidity = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetValidityResponse, RpcStatus>({
      path: `/crossdomain/cdac/validity/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
