export namespace PrivateBrowsingUtils {
    const enabled: bool;
    function isWindowPrivate(aWindow: any): any;
    function isContentWindowPrivate(aWindow: any): any;
    function isBrowserPrivate(aBrowser: any): any;
    function privacyContextFromWindow(aWindow: any): any;
    const permanentPrivateBrowsing: boolean;
    function enterTemporaryAutoStartMode(): void;
    const isInTemporaryAutoStartMode: boolean;
}
