export class ContentEventListenerChild extends JSWindowActorChild {
    actorCreated(): void;
    _contentEvents: Map<any, any>;
    _shutdown: boolean;
    _chromeEventHandler: EventTarget;
    didDestroy(): void;
    handleEvent(event: any): void;
    /**
     * This method first determines the desired set of content event listeners
     * for the window. This is either the empty set, if clearListeners is true,
     * or is retrieved from the message manager's shared data. It then compares
     * this event listener data to the existing set of listeners that we have
     * registered, as recorded in this._contentEvents. Each content event listener
     * has been assigned a unique id by the parent process. If a listener was
     * added, but is not in the new event data, it is removed. If a listener was
     * not present, but is in the new event data, it is added. If it is in both,
     * then a basic check is done to see if they are the same.
     *
     * @param {bool} clearListeners [optional]
     *        If this is true, then instead of checking shared data to decide
     *        what the desired set of listeners is, just use the empty set. This
     *        will result in any existing listeners being cleared, and is used
     *        when the window is going away.
     */
    _updateContentEventListeners(clearListeners?: bool): void;
}
