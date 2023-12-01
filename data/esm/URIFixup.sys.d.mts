export function URIFixup(): void;
export class URIFixup {
    _trustExternalProtocolService: boolean;
    get FIXUP_FLAG_NONE(): 0;
    get FIXUP_FLAG_ALLOW_KEYWORD_LOOKUP(): 1;
    get FIXUP_FLAGS_MAKE_ALTERNATE_URI(): 2;
    get FIXUP_FLAG_PRIVATE_CONTEXT(): 4;
    get FIXUP_FLAG_FIX_SCHEME_TYPOS(): 8;
    getFixupURIInfo(uriString: any, fixupFlags?: 0): URIFixupInfo;
    webNavigationFlagsToFixupFlags(href: any, navigationFlags: any): 0;
    keywordToURI(keyword: any, isPrivateContext: any): URIFixupInfo;
    forceHttpFixup(uriString: any): URIFixupInfo;
    checkHost(uri: any, listener: any, originAttributes: any): void;
    isDomainKnown: typeof isDomainKnown;
    _isKnownExternalProtocol(scheme: any): any;
    classID: unknown;
    QueryInterface: MozQueryInterface;
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
    classID: unknown;
    QueryInterface: MozQueryInterface;
}
/**
 * Implementation of isDomainKnown, so we don't have to go through the
 * service.
 * @param {string} asciiHost
 * @returns {boolean} whether the domain is known
 */
declare function isDomainKnown(asciiHost: string): boolean;
export {};
