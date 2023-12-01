export class AutoCompleteParent extends JSWindowActorParent {
    static getCurrentActor(): any;
    static addPopupStateListener(listener: any): void;
    static removePopupStateListener(listener: any): void;
    didDestroy(): void;
    handleEvent(evt: any): void;
    openedPopup: any;
    showPopupWithResults({ rect, dir, results }: {
        rect: any;
        dir: any;
        results: any;
    }): void;
    /**
     * @param {object[]} results - Non-empty array of autocomplete results.
     */
    _maybeRecordTelemetryEvents(results: object[]): void;
    invalidate(results: any): void;
    closePopup(): void;
    receiveMessage(message: any): boolean;
    delayPopupInput(): void;
    notifyListeners(): void;
    /**
     * Despite its name, this handleEnter is only called when the user clicks on
     * one of the items in the popup since the popup is rendered in the parent process.
     * The real controller's handleEnter is called directly in the content process
     * for other methods of completing a selection (e.g. using the tab or enter
     * keys) since the field with focus is in that process.
     * @param {boolean} aIsPopupSelection
     */
    handleEnter(aIsPopupSelection: boolean): void;
    stopSearch(): void;
    /**
     * Sends a message to the browser that is requesting the input
     * that the open popup should be focused.
     */
    requestFocus(): void;
}
