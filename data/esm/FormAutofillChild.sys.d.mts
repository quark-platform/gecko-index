/**
 * Handles content's interactions for the frame.
 */
export class FormAutofillChild extends JSWindowActorChild {
    _nextHandleElement: any;
    _alreadyDOMContentLoaded: boolean;
    _hasDOMContentLoadedHandler: boolean;
    _hasPendingTask: boolean;
    testListener: any;
    didDestroy(): void;
    popupStateChanged(messageName: any, data: any, target: any): void;
    /**
     * Invokes the FormAutofillContent to identify the autofill fields
     * and consider opening the dropdown menu for the focused field
     *
     */
    _doIdentifyAutofillFields(): void;
    /**
     * After a focusin event and after we identify formautofill fields,
     * we set up an event listener for the DOMDocFetchSuccess event
     *
     * @param {Document} document The document we want to be notified by of a DOMDocFetchSuccess event
     */
    registerDOMDocFetchSuccessEventListener(document: Document): void;
    /**
     * After a DOMDocFetchSuccess event, we register an event listener for the DOMFormRemoved event
     *
     * @param {Document} document The document we want to be notified by of a DOMFormRemoved event
     */
    registerDOMFormRemovedEventListener(document: Document): void;
    /**
     * After a DOMDocFetchSuccess event we remove the DOMDocFetchSuccess event listener
     *
     * @param {Document} document The document we are notified by of a DOMDocFetchSuccess event
     */
    unregisterDOMDocFetchSuccessEventListener(document: Document): void;
    /**
     * After a DOMFormRemoved event we remove the DOMFormRemoved event listener
     *
     * @param {Document} document The document we are notified by of a DOMFormRemoved event
     */
    unregisterDOMFormRemovedEventListener(document: Document): void;
    shouldIgnoreFormAutofillEvent(event: any): any;
    handleEvent(evt: any): void;
    onFocusIn(evt: any): void;
    /**
     * Handle the DOMFormBeforeSubmit event.
     *
     * @param {Event} evt
     */
    onDOMFormBeforeSubmit(evt: Event): void;
    /**
     * Handle the DOMFormRemoved event.
     *
     * Infers a form submission when the form is removed
     * after a successful fetch or XHR request.
     *
     * @param {Event} evt DOMFormRemoved
     */
    onDOMFormRemoved(evt: Event): void;
    /**
     * Handle the DOMDocFetchSuccess event.
     *
     * Sets up an event listener for the DOMFormRemoved event
     * and unregisters the event listener for DOMDocFetchSuccess event.
     *
     * @param {Event} evt DOMDocFetchSuccess
     */
    onDOMDocFetchSuccess(evt: Event): void;
    receiveMessage(message: any): void;
}
