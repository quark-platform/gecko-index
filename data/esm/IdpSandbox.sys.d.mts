/**
 * A javascript sandbox for running an IdP.
 *
 * @param domain (string) the domain of the IdP
 * @param protocol (string?) the protocol of the IdP [default: 'default']
 * @param win (obj) the current window
 * @throws if the domain or protocol aren't valid
 */
export function IdpSandbox(domain: any, protocol: any, win: any): void;
export class IdpSandbox {
    /**
     * A javascript sandbox for running an IdP.
     *
     * @param domain (string) the domain of the IdP
     * @param protocol (string?) the protocol of the IdP [default: 'default']
     * @param win (obj) the current window
     * @throws if the domain or protocol aren't valid
     */
    constructor(domain: any, protocol: any, win: any);
    source: any;
    active: Promise<any>;
    sandbox: any;
    window: any;
    isSame(domain: any, protocol: any): boolean;
    start(): Promise<any>;
    _populateSandbox(uri: any): void;
    _createSandbox(result: any): any;
    _logError(e: any): void;
    stop(): void;
    toString(): any;
}
export namespace IdpSandbox {
    function checkDomain(domain: any): void;
    /**
     * Checks that the IdP protocol is superficially sane.  In particular, we don't
     * want someone adding relative paths (e.g., '../../myuri'), which could be used
     * to move outside of /.well-known/ and into space that they control.
     */
    function checkProtocol(protocol: any): void;
    /**
     * Turns a domain and protocol into a URI.  This does some aggressive checking
     * to make sure that we aren't being fooled somehow.  Throws on fooling.
     */
    function createIdpUri(domain: any, protocol: any): any;
}
