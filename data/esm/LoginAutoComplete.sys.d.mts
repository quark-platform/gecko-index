export class LoginAutoCompleteResult {
    constructor(aSearchString: any, matchingLogins: any, autocompleteItems: any, formOrigin: any, { generatedPassword, willAutoSaveGeneratedPassword, importable, isSecure, actor, hasBeenTypePassword, hostname, telemetryEventData, }: {
        generatedPassword: any;
        willAutoSaveGeneratedPassword: any;
        importable: any;
        isSecure: any;
        actor: any;
        hasBeenTypePassword: any;
        hostname: any;
        telemetryEventData: any;
    });
    searchString: any;
    searchResult: 3;
    defaultIndex: number;
    QueryInterface: MozQueryInterface;
    /**
     * Accessed via .wrappedJSObject
     * @private
     */
    private get logins();
    get wrappedJSObject(): this;
    errorDescription: string;
    get matchCount(): number;
    getValueAt(index: any): any;
    getLabelAt(index: any): any;
    getCommentAt(index: any): any;
    getStyleAt(index: any): any;
    getImageAt(index: any): any;
    getFinalCompleteValueAt(index: any): any;
    isRemovableAt(index: any): boolean;
    removeValueAt(index: any): void;
    #private;
}
export class LoginAutoComplete {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    /**
     * Yuck. This is called directly by satchel:
     * nsFormFillController::StartSearch()
     * [toolkit/components/satchel/nsFormFillController.cpp]
     *
     * We really ought to have a simple way for code to register an
     * auto-complete provider, and not have satchel calling pwmgr directly.
     *
     * @param {string} aSearchString The value typed in the field.
     * @param {nsIAutoCompleteResult} aPreviousResult
     * @param {HTMLInputElement} aElement
     * @param {nsIFormAutoCompleteObserver} aCallback
     */
    startSearch(aSearchString: string, aPreviousResult: nsIAutoCompleteResult, aElement: HTMLInputElement, aCallback: nsIFormAutoCompleteObserver): void;
    stopSearch(): void;
    isProbablyANewPasswordField(inputElement: any): boolean;
    #private;
}
