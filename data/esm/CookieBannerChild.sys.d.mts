export class CookieBannerChild {
    handleEvent(event: any): void;
    didDestroy(): void;
    /**
     * The function to perform the core logic of handing the cookie banner. It
     * will detect the banner and click the banner button whenever possible
     * according to the given click rules.
     * If the service mode pref is set to detect only mode we will only attempt to
     * find the cookie banner element and return early.
     *
     * @returns A promise which resolves when it finishes auto clicking.
     */
    handleCookieBanner(): Promise<{
        bannerHandled: boolean;
        bannerDetected: boolean;
        matchedRule?: undefined;
    } | {
        bannerHandled: boolean;
        bannerDetected: boolean;
        matchedRule: any;
    }>;
    #private;
}
