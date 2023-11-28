/**
 * ServiceRequest is intended to be a drop-in replacement for current users
 * of XMLHttpRequest.
 *
 * @param {Object} options - Options for underlying XHR, e.g. { mozAnon: bool }
 */
export class ServiceRequest extends XMLHttpRequest {
    static logProxySource(channel: any, service: any): Promise<void>;
    static get isOffline(): any;
    constructor(options: any);
    /**
     * Opens an XMLHttpRequest, and sets the NSS "beConservative" flag.
     * Requests are always async.
     *
     * @param {String} method - HTTP method to use, e.g. "GET".
     * @param {String} url - URL to open.
     * @param {Object} options - Additional options { bypassProxy: bool }.
     */
    open(method: string, url: string, options: any): void;
    get bypassProxy(): any;
    get isProxied(): boolean;
    get bypassProxyEnabled(): any;
}
