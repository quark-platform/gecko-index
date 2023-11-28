export function URIFixup(): void;
export class URIFixup {
    _trustExternalProtocolService: boolean;
    get FIXUP_FLAG_NONE(): any;
    get FIXUP_FLAG_ALLOW_KEYWORD_LOOKUP(): any;
    get FIXUP_FLAGS_MAKE_ALTERNATE_URI(): any;
    get FIXUP_FLAG_PRIVATE_CONTEXT(): any;
    get FIXUP_FLAG_FIX_SCHEME_TYPOS(): any;
    getFixupURIInfo(uriString: any, fixupFlags?: any): URIFixupInfo;
    webNavigationFlagsToFixupFlags(href: any, navigationFlags: any): any;
    keywordToURI(keyword: any, isPrivateContext: any): URIFixupInfo;
    forceHttpFixup(uriString: any): URIFixupInfo;
    checkHost(uri: any, listener: any, originAttributes: any): void;
    isDomainKnown: typeof isDomainKnown;
    _isKnownExternalProtocol(scheme: any): any;
    classID: any;
    QueryInterface: any;
}
export function URIFixupInfo(originalInput?: string): void;
export class URIFixupInfo {
    constructor(originalInput?: string);
    _originalInput: string;
    set consumer(consumer: any);
    get consumer(): any;
    _consumer: any;
    set preferredURI(uri: any);
    get preferredURI(): any;
    _preferredURI: any;
    set fixedURI(uri: any);
    get fixedURI(): any;
    _fixedURI: any;
    set keywordProviderName(name: any);
    get keywordProviderName(): any;
    _keywordProviderName: any;
    set keywordAsSent(keyword: any);
    get keywordAsSent(): any;
    _keywordAsSent: any;
    set wasSchemelessInput(changed: boolean);
    get wasSchemelessInput(): boolean;
    _wasSchemelessInput: boolean;
    set fixupChangedProtocol(changed: boolean);
    get fixupChangedProtocol(): boolean;
    _fixupChangedProtocol: boolean;
    set fixupCreatedAlternateURI(changed: boolean);
    get fixupCreatedAlternateURI(): boolean;
    _fixupCreatedAlternateURI: boolean;
    set originalInput(input: any);
    get originalInput(): any;
    set postData(postData: any);
    get postData(): any;
    _postData: any;
    classID: any;
    QueryInterface: any;
}
/**
 * Implementation of isDomainKnown, so we don't have to go through the
 * service.
 * @param {string} asciiHost
 * @returns {boolean} whether the domain is known
 */
declare function isDomainKnown(asciiHost: string): boolean;
export {};
