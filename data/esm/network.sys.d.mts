export const network: typeof NetworkModule;
export type AuthChallenge = {
    scheme: string;
    realm: string;
};
export type BaseParameters = {
    context?: string | undefined;
    intercepts: Array<string> | null;
    isBlocked: boolean;
    navigation?: Navigation;
    redirectCount: number;
    request: RequestData;
    timestamp: number;
};
export type BlockedRequest = {
    networkEventRecord: NetworkEventRecord;
    phase: any;
};
export type BytesValue = {
    type: any;
    value: string;
};
export type Cookie = {
    domain: string;
    expires?: number | undefined;
    httpOnly: boolean;
    name: string;
    path: string;
    sameSite: ('lax' | 'none' | 'strict');
    secure: boolean;
    size: number;
    value: BytesValue;
};
export type FetchTimingInfo = {
    timeOrigin: number;
    requestTime: number;
    redirectStart: number;
    redirectEnd: number;
    fetchStart: number;
    dnsStart: number;
    dnsEnd: number;
    connectStart: number;
    connectEnd: number;
    tlsStart: number;
    requestStart: number;
    responseStart: number;
    responseEnd: number;
};
export type Header = {
    name: string;
    value: BytesValue;
};
export type InitiatorType = string;
export type Initiator = {
    type: InitiatorType;
    columnNumber?: number | undefined;
    lineNumber?: number | undefined;
    request?: string | undefined;
    stackTrace?: StackTrace;
};
export type InterceptProperties = {
    phases: Array<InterceptPhase>;
    urlPatterns: Array<URLPattern>;
};
export type RequestData = {
    /**
     *     Defaults to null.
     */
    bodySize: number | null;
    cookies: Array<Cookie>;
    headers: Array<Header>;
    headersSize: number;
    method: string;
    request: string;
    timings: FetchTimingInfo;
    url: string;
};
export type BeforeRequestSentParametersProperties = {
    initiator: Initiator;
};
/**
 * Parameters for the BeforeRequestSent event
 */
export type BeforeRequestSentParameters = BaseParameters & BeforeRequestSentParametersProperties;
export type ResponseContent = {
    /**
     *     Defaults to null.
     */
    size: number | null;
};
export type ResponseData = {
    url: string;
    protocol: string;
    status: number;
    statusText: string;
    fromCache: boolean;
    headers: Array<Header>;
    mimeType: string;
    bytesReceived: number;
    /**
     *     Defaults to null.
     */
    headersSize: number | null;
    /**
     *     Defaults to null.
     */
    bodySize: number | null;
    content: ResponseContent;
    authChallenges?: Array<AuthChallenge> | undefined;
};
export type ResponseStartedParametersProperties = {
    response: ResponseData;
};
/**
 * Parameters for the ResponseStarted event
 */
export type ResponseStartedParameters = BaseParameters & ResponseStartedParametersProperties;
export type ResponseCompletedParametersProperties = {
    response: ResponseData;
};
export type URLPatternPattern = {
    type: 'pattern';
    protocol?: string | undefined;
    hostname?: string | undefined;
    port?: string | undefined;
    pathname?: string | undefined;
    search?: string | undefined;
};
export type URLPatternString = {
    type: 'string';
    pattern: string;
};
export type URLPattern = (URLPatternPattern | URLPatternString);
/**
 * Parameters for the ResponseCompleted event
 */
export type ResponseCompletedParameters = BaseParameters & ResponseCompletedParametersProperties;
/**
 * @typedef {object} InterceptProperties
 * @property {Array<InterceptPhase>} phases
 * @property {Array<URLPattern>} urlPatterns
 */
/**
 * @typedef {object} RequestData
 * @property {number|null} bodySize
 *     Defaults to null.
 * @property {Array<Cookie>} cookies
 * @property {Array<Header>} headers
 * @property {number} headersSize
 * @property {string} method
 * @property {string} request
 * @property {FetchTimingInfo} timings
 * @property {string} url
 */
/**
 * @typedef {object} BeforeRequestSentParametersProperties
 * @property {Initiator} initiator
 */
/**
 * Parameters for the BeforeRequestSent event
 *
 * @typedef {BaseParameters & BeforeRequestSentParametersProperties} BeforeRequestSentParameters
 */
/**
 * @typedef {object} ResponseContent
 * @property {number|null} size
 *     Defaults to null.
 */
/**
 * @typedef {object} ResponseData
 * @property {string} url
 * @property {string} protocol
 * @property {number} status
 * @property {string} statusText
 * @property {boolean} fromCache
 * @property {Array<Header>} headers
 * @property {string} mimeType
 * @property {number} bytesReceived
 * @property {number|null} headersSize
 *     Defaults to null.
 * @property {number|null} bodySize
 *     Defaults to null.
 * @property {ResponseContent} content
 * @property {Array<AuthChallenge>=} authChallenges
 */
/**
 * @typedef {object} ResponseStartedParametersProperties
 * @property {ResponseData} response
 */
/**
 * Parameters for the ResponseStarted event
 *
 * @typedef {BaseParameters & ResponseStartedParametersProperties} ResponseStartedParameters
 */
/**
 * @typedef {object} ResponseCompletedParametersProperties
 * @property {ResponseData} response
 */
/**
 * @typedef {object} URLPatternPattern
 * @property {'pattern'} type
 * @property {string=} protocol
 * @property {string=} hostname
 * @property {string=} port
 * @property {string=} pathname
 * @property {string=} search
 */
/**
 * @typedef {object} URLPatternString
 * @property {'string'} type
 * @property {string} pattern
 */
/**
 * @typedef {(URLPatternPattern|URLPatternString)} URLPattern
 */
/**
 * Parameters for the ResponseCompleted event
 *
 * @typedef {BaseParameters & ResponseCompletedParametersProperties} ResponseCompletedParameters
 */
declare class NetworkModule {
    static get supportedEvents(): string[];
    constructor(messageHandler: any);
    destroy(): void;
    /**
     * Adds a network intercept, which allows to intercept and modify network
     * requests and responses.
     *
     * The network intercept will be created for the provided phases
     * (InterceptPhase) and for specific url patterns. When a network event
     * corresponding to an intercept phase has a URL which matches any url pattern
     * of any intercept, the request will be suspended.
     *
     * @param {object=} options
     * @param {Array<InterceptPhase>} options.phases
     *     The phases where this intercept should be checked.
     * @param {Array<URLPattern>=} options.urlPatterns
     *     The URL patterns for this intercept. Optional, defaults to empty array.
     *
     * @returns {object}
     *     An object with the following property:
     *     - intercept {string} The unique id of the network intercept.
     *
     * @throws {InvalidArgumentError}
     *     Raised if an argument is of an invalid type or value.
     */
    addIntercept(options?: object | undefined): object;
    /**
     * Removes an existing network intercept.
     *
     * @param {object=} options
     * @param {string} options.intercept
     *     The id of the intercept to remove.
     *
     * @throws {InvalidArgumentError}
     *     Raised if an argument is of an invalid type or value.
     * @throws {NoSuchInterceptError}
     *     Raised if the intercept id could not be found in the internal intercept
     *     map.
     */
    removeIntercept(options?: object | undefined): void;
    /**
     * Internal commands
     */
    _applySessionData(params: any): void;
    #private;
}
type InitiatorType = string;
declare namespace InitiatorType {
    let Other: string;
    let Parser: string;
    let Preflight: string;
    let Script: string;
}
/**
 * Enum of intercept phases.
 */
type InterceptPhase = InterceptPhase;
declare namespace InterceptPhase {
    let AuthRequired: string;
    let BeforeRequestSent: string;
    let ResponseStarted: string;
}
export {};
