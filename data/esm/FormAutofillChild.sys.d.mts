/**
 * Handles content's interactions for the frame.
 */
export class FormAutofillChild {
    _nextHandleElement: any;
    _alreadyDOMContentLoaded: boolean;
    _hasDOMContentLoadedHandler: boolean;
    _hasPendingTask: boolean;
    testListener: any;
    didDestroy(): void;
    popupStateChanged(messageName: any, data: any, target: any): void;
    _doIdentifyAutofillFields(): void;
    shouldIgnoreFormAutofillEvent(event: any): any;
    handleEvent(evt: any): void;
    onFocusIn(evt: any): void;
    /**
     * Handle the DOMFormBeforeSubmit event.
     *
     * @param {Event} evt
     */
    onDOMFormBeforeSubmit(evt: Event): void;
    receiveMessage(message: any): void;
}
