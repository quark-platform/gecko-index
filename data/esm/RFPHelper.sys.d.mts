export let RFPHelper: _RFPHelper;
declare class _RFPHelper {
    _initialized: boolean;
    init(): void;
    uninit(): void;
    observe(subject: any, topic: any, data: any): void;
    handleEvent(aMessage: any): void;
    _handlePrefChanged(data: any): void;
    contentSizeUpdated(win: any): void;
    _addRFPObservers(): void;
    _removeRFPObservers(): void;
    _handleResistFingerprintingChanged(): void;
    _handleSpoofEnglishChanged(): void;
    _shouldPromptForLanguagePref(): boolean;
    _handleHttpOnModifyRequest(subject: any, data: any): void;
    _promptForLanguagePreference(): void;
    _getCurrentAcceptLanguageValue(uri: any): any;
    /**
     * We use the TabsProgressListener to catch the change of the content
     * principal. We would clear the margins around the content viewport if
     * it is the system principal.
     */
    onLocationChange(aBrowser: any): void;
    _handleLetterboxingPrefChanged(): void;
    _registerActor(): void;
    _unregisterActor(): void;
    _parseLetterboxingDimensions(aPrefValue: any): any;
    _addOrClearContentMargin(aBrowser: any): void;
    /**
     * Given a width or height, returns the appropriate margin to apply.
     */
    steppedRange(aDimension: any): number;
    /**
     * The function will round the given browser by adding margins around the
     * content viewport.
     */
    _roundContentView(aBrowser: any): Promise<void>;
    _clearContentViewMargin(aBrowser: any): void;
    _updateMarginsForTabsInWindow(aWindow: any): void;
    _attachWindow(aWindow: any): void;
    _attachAllWindows(): void;
    _detachWindow(aWindow: any): void;
    _detachAllWindows(): void;
    _handleDOMWindowOpened(win: any): void;
}
export {};
