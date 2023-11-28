export function Resource(uri: any): void;
export class Resource {
    constructor(uri: any);
    _log: any;
    set uri(value: any);
    get uri(): any;
    _headers: {};
    _logName: string;
    authenticator: null;
    ABORT_TIMEOUT: number;
    set headers(_: any);
    get headers(): any;
    setHeader(header: any, value: any): void;
    _uri: any;
    get spec(): any;
    /**
     * @param {string} method HTTP method
     * @returns {Headers}
     */
    _buildHeaders(method: string): Headers;
    /**
     * @param {string} method HTTP method
     * @param {string} data HTTP body
     * @param {object} signal AbortSignal instance
     * @returns {Request}
     */
    _createRequest(method: string, data: string, signal: object): Request;
    /**
     * @param {string} method HTTP method
     * @param {string} [data] HTTP body
     * @returns {Response}
     */
    _doRequest(method: string, data?: string): Response;
    _processResponse(response: any, method: any): Promise<{
        data: any;
        url: any;
        status: any;
        success: any;
        headers: {};
    }>;
    _logResponse(response: any, method: any, data: any): void;
    _processResponseHeaders({ headers, ok: success }: {
        headers: any;
        ok: any;
    }): void;
    get(): Response;
    put(data: any): Response;
    post(data: any): Response;
    delete(): Response;
}
export namespace Resource {
    let serverTime: any;
}
