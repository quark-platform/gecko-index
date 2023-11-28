export function EventEmitter(): {
    emit(eventName: any, event: any): void;
    on(eventName: any, callback: any): void;
    off(eventName: any, callback: any): void;
    once(eventName: any, callback: any): void;
};
;
}
     *        Called when the event is fired.
     */
    on(event: any, listener: any): void;
    _eventEmitterListeners: Map<any, any>;
    /**
     * Listen for the next time an event is fired.
     *
     * @param string event
     *        The event name to which we're connecting.
     * @param function listener
     *        (Optional) Called when the event is fired. Will be called at most
     *        one time.
     * @return promise
     *        A promise which is resolved when the event next happens. The
     *        resolution value of the promise is the first event argument. If
     *        you need access to second or subsequent event arguments (it's rare
     *        that this is needed) then use listener
     */
    once(event: any, listener: any): Promise<any>;
    /**
     * Remove a previously-registered event listener.  Works for events
     * registered with either on or once.
     *
     * @param string event
     *        The event name whose listener we're disconnecting.
     * @param function listener
     *        The listener to remove.
     */
    off(event: any, listener: any): void;
    /**
     * Emit an event.  All arguments to this method will
     * be sent to listener functions.
     */
    emit(event: any, ...args: any[]): void;
    logEvent(event: any, args: any): void;
}
export namespace EventEmitter {
    /**
     * Decorate an object with event emitter functionality.
     *
     * @param Object objectToDecorate
     *        Bind all public methods of EventEmitter to
     *        the objectToDecorate object.
     */
    function decorate(objectToDecorate: any): void;
}
