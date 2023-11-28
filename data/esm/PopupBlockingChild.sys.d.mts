export class PopupBlockingChild {
    weakDocStates: WeakMap<object, any>;
    /**
     * Returns the state for the current document referred to via
     * this.document. If no such state exists, creates it, stores it
     * and returns it.
     */
    get docState(): any;
    receiveMessage(msg: any): {
        popupWindowURISpec: any;
    }[];
    handleEvent(event: any): void;
    onPopupBlocked(event: any): void;
    onPageShow(event: any): void;
    updateBlockedPopups(shouldNotify: any): void;
}
