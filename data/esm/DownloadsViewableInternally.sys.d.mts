export const PREF_ENABLED_TYPES: string;
export const PREF_BRANCH_WAS_REGISTERED: string;
export const PREF_BRANCH_PREVIOUS_ACTION: string;
export const PREF_BRANCH_PREVIOUS_ASK: string;
export namespace DownloadsViewableInternally {
    /**
     * Initially add/remove handlers, watch pref, register with Integration.downloads.
     */
    function register(): void;
    let _downloadTypesViewableInternally: ({
        extension: string;
        mimeTypes: string[];
        available: boolean;
        managedElsewhere: boolean;
        initAvailable?: undefined;
    } | {
        extension: string;
        mimeTypes: string[];
        initAvailable(): void;
        managedElsewhere: boolean;
        available?: undefined;
    } | {
        extension: string;
        mimeTypes: string[];
        initAvailable(): void;
        available?: undefined;
        managedElsewhere?: undefined;
    })[];
    function _shouldViewDownloadInternally(aMimeType: any, aExtension: any): boolean;
    function _makeFakeHandler(aMimeType: any, aExtension: any): {
        QueryInterface: any;
        getFileExtensions(): any[];
        possibleApplicationHandlers: any;
        extensionExists(ext: any): boolean;
        alwaysAskBeforeHandling: boolean;
        preferredAction: any;
        type: any;
    };
    function _saveSettings(handlerInfo: any, handlerType: any): void;
    function _restoreSettings(handlerInfo: any, handlerType: any): void;
    function _clearSavedSettings(extension: any): void;
    function _updateAllHandlers(): void;
    function _updateHandler(handlerType: any): void;
    function _becomeHandler(handlerType: any): void;
    function _unbecomeHandler(handlerType: any): void;
}
