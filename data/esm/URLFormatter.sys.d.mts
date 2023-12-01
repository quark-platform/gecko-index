export function nsURLFormatterService(): void;
export class nsURLFormatterService {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    _defaults: {
        LOCALE: () => string;
        REGION(): any;
        VENDOR(): string;
        NAME(): string;
        ID(): string;
        VERSION(): string;
        MAJOR_VERSION(): string;
        APPBUILDID(): string;
        PLATFORMVERSION(): string;
        PLATFORMBUILDID(): string;
        APP(): string;
        OS(): string;
        XPCOMABI(): any;
        BUILD_TARGET(): string;
        OS_VERSION(): any;
        CHANNEL: () => any;
        MOZILLA_API_KEY: () => any;
        GOOGLE_LOCATION_SERVICE_API_KEY: () => any;
        GOOGLE_SAFEBROWSING_API_KEY: () => any;
        BING_API_CLIENTID: () => any;
        BING_API_KEY: () => any;
        DISTRIBUTION(): any;
        DISTRIBUTION_VERSION(): any;
    };
    formatURL: (aFormat: any) => any;
    formatURLPref: (aPref: any) => any;
    trimSensitiveURLs: (aMsg: any) => any;
}
