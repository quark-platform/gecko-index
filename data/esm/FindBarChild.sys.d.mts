export class FindBarChild {
    _findKey: any;
    inQuickFind: boolean;
    inPassThrough: boolean;
    receiveMessage(msg: any): void;
    /**
     * Check whether this key event will start the findbar in the parent,
     * in which case we should pass any further key events to the parent to avoid
     * them being lost.
     * @param aEvent the key event to check.
     */
    eventMatchesFindShortcut(aEvent: any): boolean;
    handleEvent(event: any): void;
    onKeypress(event: any): any;
    /**
     * Return true if we should FAYT for this node:
     *
     * @param elt
     *        The element that is focused
     */
    shouldFastFind(elt: any): boolean;
}
