export function nsURLFormatterService(): void;
export class nsURLFormatterService {
    classID: any;
    QueryInterface: any;
    _defaults: {
        LOCALE: () => any;
        REGION(): any;
        VENDOR(): any;
        NAME(): any;
        ID(): any;
        VERSION(): any;
        MAJOR_VERSION(): any;
        APPBUILDID(): any;
        PLATFORMVERSION(): any;
        PLATFORMBUILDID(): any;
        APP(): any;
        OS(): any;
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
