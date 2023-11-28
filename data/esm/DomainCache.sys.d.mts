/**
 * Lazy domain instance cache.
 *
 * Domains are loaded into each target's realm, and consequently
 * there exists one domain cache per realm.  Domains are preregistered
 * with this cache and then constructed lazily upon request.
 *
 * @param {Session} session
 *     Session that domains should be associated with as they
 *     are constructed.
 * @param {Map.<string, string>} modules
 *     Table defining JS modules available to this domain cache.
 *     This should be a mapping between domain name
 *     and JS module path passed to ChromeUtils.import.
 */
export class DomainCache {
    constructor(session: any, modules: any);
    session: any;
    modules: any;
    instances: Map<any, any>;
    /** Test if domain supports method. */
    domainSupportsMethod(name: any, method: any): any;
    /**
     * Gets the current instance of the domain, or creates a new one,
     * and associates it with the predefined session.
     *
     * @throws {UnknownMethodError}
     *     If domain is not preregistered with this domain cache.
     */
    get(name: any): any;
    /**
     * Tells if a Domain of the given name is available
     */
    has(name: any): boolean;
    get size(): number;
    /**
     * Execute the given command (function) of a given domain with the given parameters.
     * If the command doesn't exists, it will throw.
     * It returns the returned value of the command, which is most likely a promise.
     */
    execute(domain: any, command: any, params: any): any;
    /** Calls destructor on each domain and clears the cache. */
    clear(): void;
    toString(): string;
}
