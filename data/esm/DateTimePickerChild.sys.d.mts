/**
 * DateTimePickerChild is the communication channel between the input box
 * (content) for date/time input types and its picker (chrome).
 */
export class DateTimePickerChild {
    _inputElement: any;
    /**
     * Cleanup function called when picker is closed.
     */
    close(): void;
    /**
     * Called after picker is opened to start listening for input box update
     * events.
     */
    addListeners(aElement: any): void;
    /**
     * Stop listeneing for events when picker is closed.
     */
    removeListeners(aElement: any): void;
    /**
     * Helper function that returns the CSS direction property of the element.
     */
    getComputedDirection(aElement: any): any;
    /**
     * Helper function that returns the rect of the element, which is the position
     * relative to the left/top of the content area.
     */
    getBoundingContentRect(aElement: any): any;
    getTimePickerPref(): any;
    /**
     * nsIMessageListener.
     */
    receiveMessage(aMessage: any): void;
    /**
     * nsIDOMEventListener, for chrome events sent by the input element and other
     * DOM events.
     */
    handleEvent(aEvent: any): void;
}
