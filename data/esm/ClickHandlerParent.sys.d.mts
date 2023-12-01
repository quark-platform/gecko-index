export class MiddleMousePasteHandlerParent extends JSWindowActorParent {
    receiveMessage(message: any): void;
}
export class ClickHandlerParent extends JSWindowActorParent {
    static addContentClickListener(listener: any): void;
    static removeContentClickListener(listener: any): void;
    receiveMessage(message: any): void;
    /**
     * Handles clicks in the content area.
     *
     * @param data {Object} object that looks like an Event
     * @param browser {Element<browser>}
     */
    contentAreaClick(data: any): void;
    notifyClickListeners(data: any): void;
}
