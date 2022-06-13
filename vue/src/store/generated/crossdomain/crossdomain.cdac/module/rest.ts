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

export interface CdacCalculationTime {
  /** @format uint64 */
  id?: string;
  operation?: string;
  startTimestamp?: string;
  endTimestamp?: string;

  /** @format uint64 */
  duration?: string;
  creator?: string;
}

export interface CdacCertificate {
  /** @format uint64 */
  id?: string;
  publicKey?: CdacPublicKey;
  validity?: CdacValidity;
  creator?: string;
}

export interface CdacCooperationData {
  labelIndex?: string;
  validity?: CdacValidity;
  status?: string;

  /** @format uint64 */
  cost?: string;
  lastUpdate?: string;
  interest?: string;
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

export interface CdacCooperationNetwork {
  /** @format uint64 */
  id?: string;
  label?: string;
  domainMapList?: CdacDomainMap[];
  cooperationDataList?: CdacCooperationData[];
  features?: CdacCooperationNetworkFeatures;
  creationTimestamp?: string;
  updateTimestamp?: string;
  creator?: string;
}

export interface CdacCooperationNetworkFeatures {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  depth?: string;

  /** @format uint64 */
  cost?: string;
  interestList?: string[];
  locationList?: string[];
  lastUpdate?: string;
  creator?: string;
}

export interface CdacCooperativeDomain {
  /** @format uint64 */
  id?: string;
  name?: string;
  domainType?: string;
  location?: string;
  creator?: string;
}

export interface CdacDelegationPath {
  /** @format uint64 */
  id?: string;
  delegator?: CdacCooperativeDomain;
  delegatee?: CdacCooperativeDomain;
  pathList?: CdacPath[];
  creator?: string;
  label?: string;
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
  creationDate?: string;
  creationTimestamp?: string;
  updateDate?: string;
  updateTimestamp?: string;
  creator?: string;
  status?: string;
}

export interface CdacDomainMap {
  domainIndex?: string;
  cooperativeDomainList?: CdacCooperativeDomain[];
  creator?: string;
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

export interface CdacInterDomainAclPolicy {
  /** @format uint64 */
  id?: string;
  label?: string;
  subjectList?: string[];
  actionList?: string[];
  objectList?: string[];
  status?: string;
  creationTimestamp?: string;
  updateTimestamp?: string;
  creator?: string;
}

export interface CdacMsgCreateAuthenticationLogResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateCalculationTimeResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateCertificateResponse {
  /** @format uint64 */
  id?: string;
}

export type CdacMsgCreateCooperationDataResponse = object;

export interface CdacMsgCreateCooperationLogResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateCooperationNetworkFeaturesResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateCooperationNetworkResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateCooperativeDomainResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateDelegationPathResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateDomainCooperationResponse {
  /** @format uint64 */
  id?: string;
}

export type CdacMsgCreateDomainMapResponse = object;

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

export interface CdacMsgCreateInterDomainAclPolicyResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreatePathResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreatePublicKeyResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdacMsgCreateTimeCalculationResponse {
  /** @format uint64 */
  id?: string;
}

export type CdacMsgCreateUpdatePolicyResponse = object;

export interface CdacMsgCreateValidityResponse {
  /** @format uint64 */
  id?: string;
}

export type CdacMsgDeleteAuthenticationLogResponse = object;

export type CdacMsgDeleteCalculationTimeResponse = object;

export type CdacMsgDeleteCertificateResponse = object;

export type CdacMsgDeleteCooperationDataResponse = object;

export type CdacMsgDeleteCooperationLogResponse = object;

export type CdacMsgDeleteCooperationNetworkFeaturesResponse = object;

export type CdacMsgDeleteCooperationNetworkResponse = object;

export type CdacMsgDeleteCooperativeDomainResponse = object;

export type CdacMsgDeleteDelegationPathResponse = object;

export type CdacMsgDeleteDomainCooperationResponse = object;

export type CdacMsgDeleteDomainMapResponse = object;

export type CdacMsgDeleteDomainResponse = object;

export type CdacMsgDeleteForwardPolicyResponse = object;

export type CdacMsgDeleteIbcConnectionResponse = object;

export type CdacMsgDeleteInterDomainAclPolicyResponse = object;

export type CdacMsgDeletePathResponse = object;

export type CdacMsgDeletePublicKeyResponse = object;

export type CdacMsgDeleteTimeCalculationResponse = object;

export type CdacMsgDeleteUpdatePolicyResponse = object;

export type CdacMsgDeleteValidityResponse = object;

export type CdacMsgGenerateCooperationNetworkResponse = object;

export interface CdacMsgRequestAccessPermissionResponse {
  decision?: string;
}

export type CdacMsgSendAuthenticateDomainResponse = object;

export type CdacMsgSendDisableCooperationResponse = object;

export type CdacMsgSendEnableCooperationResponse = object;

export type CdacMsgSendEstablishCooperationResponse = object;

export type CdacMsgSendExchangeCooperationDataResponse = object;

export type CdacMsgSendForwardCooperationDataResponse = object;

export type CdacMsgSendModifyCooperationCostResponse = object;

export type CdacMsgSendModifyCooperationInterestResponse = object;

export type CdacMsgSendModifyCooperationValidityResponse = object;

export type CdacMsgSendRevokeCooperationResponse = object;

export type CdacMsgUpdateAuthenticationLogResponse = object;

export type CdacMsgUpdateCalculationTimeResponse = object;

export type CdacMsgUpdateCertificateResponse = object;

export type CdacMsgUpdateCooperationDataResponse = object;

export type CdacMsgUpdateCooperationLogResponse = object;

export type CdacMsgUpdateCooperationNetworkFeaturesResponse = object;

export type CdacMsgUpdateCooperationNetworkResponse = object;

export type CdacMsgUpdateCooperativeDomainResponse = object;

export type CdacMsgUpdateDelegationPathResponse = object;

export type CdacMsgUpdateDomainCooperationResponse = object;

export type CdacMsgUpdateDomainMapResponse = object;

export type CdacMsgUpdateDomainResponse = object;

export type CdacMsgUpdateForwardPolicyResponse = object;

export type CdacMsgUpdateIbcConnectionResponse = object;

export type CdacMsgUpdateInterDomainAclPolicyResponse = object;

export type CdacMsgUpdatePathResponse = object;

export type CdacMsgUpdatePublicKeyResponse = object;

export type CdacMsgUpdateTimeCalculationResponse = object;

export type CdacMsgUpdateUpdatePolicyResponse = object;

export type CdacMsgUpdateValidityResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type CdacParams = object;

export interface CdacPath {
  /** @format uint64 */
  id?: string;
  domainList?: CdacCooperativeDomain[];
  creator?: string;
}

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

export interface CdacQueryAllCalculationTimeResponse {
  CalculationTime?: CdacCalculationTime[];

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

export interface CdacQueryAllCooperationDataResponse {
  cooperationData?: CdacCooperationData[];

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

export interface CdacQueryAllCooperationNetworkFeaturesResponse {
  CooperationNetworkFeatures?: CdacCooperationNetworkFeatures[];

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

export interface CdacQueryAllCooperationNetworkResponse {
  CooperationNetwork?: CdacCooperationNetwork[];

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

export interface CdacQueryAllCooperativeDomainResponse {
  CooperativeDomain?: CdacCooperativeDomain[];

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

export interface CdacQueryAllDelegationPathResponse {
  DelegationPath?: CdacDelegationPath[];

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

export interface CdacQueryAllDomainMapResponse {
  domainMap?: CdacDomainMap[];

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

export interface CdacQueryAllInterDomainAclPolicyResponse {
  InterDomainAclPolicy?: CdacInterDomainAclPolicy[];

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

export interface CdacQueryAllPathResponse {
  Path?: CdacPath[];

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

export interface CdacQueryAllTimeCalculationResponse {
  TimeCalculation?: CdacTimeCalculation[];

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

export interface CdacQueryGetCalculationTimeResponse {
  CalculationTime?: CdacCalculationTime;
}

export interface CdacQueryGetCertificateResponse {
  Certificate?: CdacCertificate;
}

export interface CdacQueryGetCooperationDataResponse {
  cooperationData?: CdacCooperationData;
}

export interface CdacQueryGetCooperationLogResponse {
  CooperationLog?: CdacCooperationLog;
}

export interface CdacQueryGetCooperationNetworkFeaturesResponse {
  CooperationNetworkFeatures?: CdacCooperationNetworkFeatures;
}

export interface CdacQueryGetCooperationNetworkResponse {
  CooperationNetwork?: CdacCooperationNetwork;
}

export interface CdacQueryGetCooperativeDomainResponse {
  CooperativeDomain?: CdacCooperativeDomain;
}

export interface CdacQueryGetDelegationPathResponse {
  DelegationPath?: CdacDelegationPath;
}

export interface CdacQueryGetDomainCooperationResponse {
  DomainCooperation?: CdacDomainCooperation;
}

export interface CdacQueryGetDomainMapResponse {
  domainMap?: CdacDomainMap;
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

export interface CdacQueryGetInterDomainAclPolicyResponse {
  InterDomainAclPolicy?: CdacInterDomainAclPolicy;
}

export interface CdacQueryGetPathResponse {
  Path?: CdacPath;
}

export interface CdacQueryGetPublicKeyResponse {
  PublicKey?: CdacPublicKey;
}

export interface CdacQueryGetTimeCalculationResponse {
  TimeCalculation?: CdacTimeCalculation;
}

export interface CdacQueryGetUpdatePolicyResponse {
  UpdatePolicy?: CdacUpdatePolicy;
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

export interface CdacQueryRequestAccessResponse {
  decision?: string;
}

export interface CdacQueryRetrieveForwardPolicyResponse {
  forwardPolicy?: CdacForwardPolicy;
}

export interface CdacTimeCalculation {
  /** @format uint64 */
  id?: string;
  operation?: string;
  startTimestamp?: string;
  endTimestamp?: string;

  /** @format uint64 */
  timing?: string;
  creator?: string;
}

export interface CdacUpdatePolicy {
  query?: boolean;
  event?: boolean;
  periodicalQuery?: boolean;
  creator?: string;
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
   * @name QueryCalculationTimeAll
   * @summary Queries a list of CalculationTime items.
   * @request GET:/crossdomain/cdac/calculation_time
   */
  queryCalculationTimeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllCalculationTimeResponse, RpcStatus>({
      path: `/crossdomain/cdac/calculation_time`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCalculationTime
   * @summary Queries a CalculationTime by id.
   * @request GET:/crossdomain/cdac/calculation_time/{id}
   */
  queryCalculationTime = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetCalculationTimeResponse, RpcStatus>({
      path: `/crossdomain/cdac/calculation_time/${id}`,
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
   * @name QueryCooperationDataAll
   * @summary Queries a list of CooperationData items.
   * @request GET:/crossdomain/cdac/cooperation_data
   */
  queryCooperationDataAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllCooperationDataResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperation_data`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCooperationData
   * @summary Queries a CooperationData by index.
   * @request GET:/crossdomain/cdac/cooperation_data/{labelIndex}
   */
  queryCooperationData = (labelIndex: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetCooperationDataResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperation_data/${labelIndex}`,
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
   * @name QueryCooperationNetworkAll
   * @summary Queries a list of CooperationNetwork items.
   * @request GET:/crossdomain/cdac/cooperation_network
   */
  queryCooperationNetworkAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllCooperationNetworkResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperation_network`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCooperationNetwork
   * @summary Queries a CooperationNetwork by id.
   * @request GET:/crossdomain/cdac/cooperation_network/{id}
   */
  queryCooperationNetwork = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetCooperationNetworkResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperation_network/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCooperationNetworkFeaturesAll
   * @summary Queries a list of CooperationNetworkFeatures items.
   * @request GET:/crossdomain/cdac/cooperation_network_features
   */
  queryCooperationNetworkFeaturesAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllCooperationNetworkFeaturesResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperation_network_features`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCooperationNetworkFeatures
   * @summary Queries a CooperationNetworkFeatures by id.
   * @request GET:/crossdomain/cdac/cooperation_network_features/{id}
   */
  queryCooperationNetworkFeatures = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetCooperationNetworkFeaturesResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperation_network_features/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCooperativeDomainAll
   * @summary Queries a list of CooperativeDomain items.
   * @request GET:/crossdomain/cdac/cooperative_domain
   */
  queryCooperativeDomainAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllCooperativeDomainResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperative_domain`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCooperativeDomain
   * @summary Queries a CooperativeDomain by id.
   * @request GET:/crossdomain/cdac/cooperative_domain/{id}
   */
  queryCooperativeDomain = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetCooperativeDomainResponse, RpcStatus>({
      path: `/crossdomain/cdac/cooperative_domain/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDelegationPathAll
   * @summary Queries a list of DelegationPath items.
   * @request GET:/crossdomain/cdac/delegation_path
   */
  queryDelegationPathAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllDelegationPathResponse, RpcStatus>({
      path: `/crossdomain/cdac/delegation_path`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDelegationPath
   * @summary Queries a DelegationPath by id.
   * @request GET:/crossdomain/cdac/delegation_path/{id}
   */
  queryDelegationPath = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetDelegationPathResponse, RpcStatus>({
      path: `/crossdomain/cdac/delegation_path/${id}`,
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
   * @name QueryDomainMapAll
   * @summary Queries a list of DomainMap items.
   * @request GET:/crossdomain/cdac/domain_map
   */
  queryDomainMapAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllDomainMapResponse, RpcStatus>({
      path: `/crossdomain/cdac/domain_map`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomainMap
   * @summary Queries a DomainMap by index.
   * @request GET:/crossdomain/cdac/domain_map/{domainIndex}
   */
  queryDomainMap = (domainIndex: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetDomainMapResponse, RpcStatus>({
      path: `/crossdomain/cdac/domain_map/${domainIndex}`,
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
   * @name QueryInterDomainAclPolicyAll
   * @summary Queries a list of InterDomainAclPolicy items.
   * @request GET:/crossdomain/cdac/inter_domain_acl_policy
   */
  queryInterDomainAclPolicyAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllInterDomainAclPolicyResponse, RpcStatus>({
      path: `/crossdomain/cdac/inter_domain_acl_policy`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryInterDomainAclPolicy
   * @summary Queries a InterDomainAclPolicy by id.
   * @request GET:/crossdomain/cdac/inter_domain_acl_policy/{id}
   */
  queryInterDomainAclPolicy = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetInterDomainAclPolicyResponse, RpcStatus>({
      path: `/crossdomain/cdac/inter_domain_acl_policy/${id}`,
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
   * @name QueryPathAll
   * @summary Queries a list of Path items.
   * @request GET:/crossdomain/cdac/path
   */
  queryPathAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllPathResponse, RpcStatus>({
      path: `/crossdomain/cdac/path`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPath
   * @summary Queries a Path by id.
   * @request GET:/crossdomain/cdac/path/{id}
   */
  queryPath = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetPathResponse, RpcStatus>({
      path: `/crossdomain/cdac/path/${id}`,
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
   * @name QueryRequestAccess
   * @summary Queries a list of RequestAccess items.
   * @request GET:/crossdomain/cdac/request_access/{object}/{action}
   */
  queryRequestAccess = (object: string, action: string, params: RequestParams = {}) =>
    this.request<CdacQueryRequestAccessResponse, RpcStatus>({
      path: `/crossdomain/cdac/request_access/${object}/${action}`,
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
   * @name QueryTimeCalculationAll
   * @summary Queries a list of TimeCalculation items.
   * @request GET:/crossdomain/cdac/time_calculation
   */
  queryTimeCalculationAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdacQueryAllTimeCalculationResponse, RpcStatus>({
      path: `/crossdomain/cdac/time_calculation`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTimeCalculation
   * @summary Queries a TimeCalculation by id.
   * @request GET:/crossdomain/cdac/time_calculation/{id}
   */
  queryTimeCalculation = (id: string, params: RequestParams = {}) =>
    this.request<CdacQueryGetTimeCalculationResponse, RpcStatus>({
      path: `/crossdomain/cdac/time_calculation/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUpdatePolicy
   * @summary Queries a UpdatePolicy by index.
   * @request GET:/crossdomain/cdac/update_policy
   */
  queryUpdatePolicy = (params: RequestParams = {}) =>
    this.request<CdacQueryGetUpdatePolicyResponse, RpcStatus>({
      path: `/crossdomain/cdac/update_policy`,
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
