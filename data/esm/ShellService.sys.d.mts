export namespace ShellService {
    const canSetDesktopBackground: any;
    let _checkedThisSession: boolean;
    let shouldCheckDefaultBrowser: boolean;
    function isDefaultBrowser(startupCheck: any, forAllTypes: any): any;
    function _userChoiceImpossibleTelemetryResult(): "ErrProgID" | "ErrHash";
    function _shouldSetDefaultPDFHandler(): boolean;
    function getDefaultPDFHandler(): {
        registered: boolean;
        knownBrowser: boolean;
    };
    function setAsDefaultUserChoice(): Promise<void>;
    function setAsDefaultPDFHandlerUserChoice(): Promise<void>;
    function setDefaultBrowser(forAllUsers: any): Promise<void>;
    function setAsDefault(): Promise<void>;
    function setAsDefaultPDFHandler(onlyIfKnownBrowser?: boolean): void;
    /**
     * Determine if we're the default handler for the given file extension (like
     * ".pdf") or protocol (like "https").  Windows-only for now.
     *
     * @returns {boolean} true if we are the default handler, false otherwise.
     */
    function isDefaultHandlerFor(aFileExtensionOrProtocol: any): boolean;
    /**
     * Checks if Firefox app can and isn't pinned to OS "taskbar."
     *
     * @throws if not called from main process.
     */
    function doesAppNeedPin(privateBrowsing?: boolean): Promise<boolean>;
    /**
     * Pin Firefox app to the OS "taskbar."
     */
    function pinToTaskbar(privateBrowsing?: boolean): Promise<void>;
    function _handleWDBAResult(exitCode: any): void;
}
