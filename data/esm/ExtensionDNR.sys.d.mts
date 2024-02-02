export namespace ExtensionDNR {
    export { RuleValidator };
    export { RuleQuotaCounter };
    export { clearRuleManager };
    export { ensureInitialized };
    export { getMatchedRulesForRequest };
    export { getRuleManager };
    export { updateDynamicRules };
    export { updateEnabledStaticRulesets };
    export { validateManifestEntry };
    export { beforeWebRequestEvent };
    export { handleRequest };
}
declare class RuleValidator {
    /**
     * Static method used to deserialize Rule class instances from a plain
     * js object rule as serialized implicitly by aomStartup.encodeBlob
     * when we store the rules into the startup cache file.
     *
     * @param {object} rule
     * @returns {Rule}
     */
    static deserializeRule(rule: object): Rule;
    static "__#979637@#regexNonASCII": RegExp;
    static "__#979637@#regexDigitOrBackslash": RegExp;
    constructor(alreadyValidatedRules: any, { isSessionRuleset }?: {
        isSessionRuleset?: boolean;
    });
    rulesMap: Map<any, any>;
    failures: any[];
    isSessionRuleset: boolean;
    removeRuleIds(ruleIds: any): void;
    /**
     * @param {object[]} rules - A list of objects that adhere to the Rule type
     *    from declarative_net_request.json.
     */
    addRules(rules: object[]): void;
    getValidatedRules(): any[];
    getFailures(): any[];
    #private;
}
declare class RuleQuotaCounter {
    constructor(isStaticRulesets: any);
    isStaticRulesets: any;
    ruleLimitName: string;
    ruleLimitRemaining: any;
    regexRemaining: any;
    tryAddRules(rulesetId: any, rules: any): void;
    #private;
}
declare function clearRuleManager(extension: any): void;
declare function ensureInitialized(extension: any): any;
/**
 * Finds all matching rules for a request, optionally restricted to one
 * extension. Used by declarativeNetRequest.testMatchOutcome.
 *
 * @param {object|RequestDetails} request
 * @param {Extension} [extension]
 * @returns {MatchedRule[]}
 */
declare function getMatchedRulesForRequest(request: object | RequestDetails, extension?: Extension): MatchedRule[];
declare function getRuleManager(extension: any, createIfMissing?: boolean): any;
declare function updateDynamicRules(extension: any, updateRuleOptions: any): Promise<void>;
declare function updateEnabledStaticRulesets(extension: any, updateRulesetOptions: any): Promise<void>;
declare function validateManifestEntry(extension: any): void;
/**
 * Runs before any webRequest event is notified. Headers may be modified, but
 * the request should not be canceled (see handleRequest instead).
 *
 * @param {ChannelWrapper} channel
 * @param {string} kind - The name of the webRequest event.
 */
declare function beforeWebRequestEvent(channel: ChannelWrapper, kind: string): void;
/**
 * Applies matching DNR rules, some of which may potentially cancel the request.
 *
 * @param {ChannelWrapper} channel
 * @param {string} kind - The name of the webRequest event.
 * @returns {boolean} Whether to ignore any responses from the webRequest API.
 */
declare function handleRequest(channel: ChannelWrapper, kind: string): boolean;
declare class Rule {
    constructor(rule: any);
    id: any;
    priority: any;
    condition: RuleCondition;
    action: any;
    actionPrecedence(): 1 | 2 | 3 | 4 | 5 | 6;
    isAllowOrAllowAllRequestsAction(): boolean;
}
declare class RequestDetails {
    static fromChannelWrapper(channel: any): RequestDetails;
    /**
     * @param {object} options
     * @param {nsIURI} options.requestURI - URL of the requested resource.
     * @param {nsIURI} [options.initiatorURI] - URL of triggering principal,
     *   provided that it is a content principal. Otherwise null.
     * @param {string} options.type - ResourceType (MozContentPolicyType).
     * @param {string} [options.method] - HTTP method
     * @param {integer} [options.tabId]
     * @param {BrowsingContext} [options.browsingContext] - The BrowsingContext
     *   associated with the request. Typically the bc for which the subresource
     *   request is initiated, if any. For document requests, this is the parent
     *   (i.e. the parent frame for sub_frame, null for main_frame).
     */
    constructor({ requestURI, initiatorURI, type, method, tabId, browsingContext, }: {
        requestURI: nsIURI;
        initiatorURI?: nsIURI;
        type: string;
        method?: string;
        tabId?: integer;
        browsingContext?: BrowsingContext;
    });
    requestURI: nsIURI;
    initiatorURI: nsIURI;
    type: string;
    method: string;
    tabId: integer;
    browsingContext: BrowsingContext;
    requestDomain: any;
    initiatorDomain: any;
    requestURIspec: any;
    requestDataForUrlFilter: RequestDataForUrlFilter;
    get ancestorRequestDetails(): any;
    canExtensionModify(extension: any): boolean;
    #private;
}
declare class MatchedRule {
    constructor(rule: any, ruleset: any);
    rule: any;
    ruleset: any;
    get ruleManager(): any;
}
declare class RuleCondition {
    constructor(cond: any);
    urlFilter: any;
    regexFilter: any;
    isUrlFilterCaseSensitive: any;
    initiatorDomains: any;
    excludedInitiatorDomains: any;
    requestDomains: any;
    excludedRequestDomains: any;
    resourceTypes: any;
    excludedResourceTypes: any;
    requestMethods: any;
    excludedRequestMethods: any;
    domainType: any;
    tabIds: any;
    excludedTabIds: any;
    urlFilterMatches(requestDataForUrlFilter: any): any;
    getCompiledRegexFilter(): any;
    setCompiledRegexFilter(compiledRegexFilter: any): void;
    #private;
}
declare class RequestDataForUrlFilter {
    /**
     * @param {string} requestURIspec - The URL to match against.
     * @returns {object} An object to p
     */
    constructor(requestURIspec: string);
    urlAnyCase: string;
    urlLowerCase: string;
    domainAnchors: any[];
    getUrl(isUrlFilterCaseSensitive: any): string;
    #private;
}
export {};
