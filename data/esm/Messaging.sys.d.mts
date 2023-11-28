export namespace EventDispatcher {
    export let instance: DispatcherDelegate;
    /**
     * Return an EventDispatcher instance for a chrome DOM window. In a content
     * process, return a proxy through the message manager that automatically
     * forwards events to the main process.
     *
     * To force using a message manager proxy (for example in a frame script
     * environment), call forMessageManager.
     *
     * @param aWindow a chrome DOM window.
     */
    function _for(aWindow: any): DispatcherDelegate;
    export { _for as for };
    /**
     * Returns a named EventDispatcher, which can communicate with the
     * corresponding EventDispatcher on the java side.
     */
    export function byName(aName: any): DispatcherDelegate;
    /**
     * Return an EventDispatcher instance for a message manager associated with a
     * window.
     *
     * @param aWindow a message manager.
     */
    export function forMessageManager(aMessageManager: any): DispatcherDelegate;
    /**
     * Return the EventDispatcher instance associated with an actor.
     *
     * @param aActor an actor
     */
    export function forActor(aActor: any): ChildActorDispatcher;
    export function receiveMessage(aMsg: any): void;
}
declare function DispatcherDelegate(aDispatcher: any, aMessageManager: any): void;
declare class DispatcherDelegate {
    constructor(aDispatcher: any, aMessageManager: any);
    _dispatcher: any;
    _messageManager: any;
    _replies: Map<any, any>;
    /**
     * Register a listener to be notified of event(s).
     *
     * @param aListener Target listener implementing nsIAndroidEventListener.
     * @param aEvents   String or array of strings of events to listen to.
     */
    registerListener(aListener: any, aEvents: any): void;
    /**
     * Unregister a previously-registered listener.
     *
     * @param aListener Registered listener implementing nsIAndroidEventListener.
     * @param aEvents   String or array of strings of events to stop listening to.
     */
    unregisterListener(aListener: any, aEvents: any): void;
    /**
     * Dispatch an event to registered listeners for that event, and pass an
     * optional data object and/or a optional callback interface to the
     * listeners.
     *
     * @param aEvent     Name of event to dispatch.
     * @param aData      Optional object containing data for the event.
     * @param aCallback  Optional callback implementing nsIAndroidEventCallback.
     * @param aFinalizer Optional finalizer implementing nsIAndroidEventFinalizer.
     */
    dispatch(aEvent: any, aData: any, aCallback: any, aFinalizer: any): void;
    /**
     * Sends a request to Java.
     *
     * @param aMsg      Message to send; must be an object with a "type" property
     * @param aCallback Optional callback implementing nsIAndroidEventCallback.
     */
    sendRequest(aMsg: any, aCallback: any): void;
    /**
     * Sends a request to Java, returning a Promise that resolves to the response.
     *
     * @param aMsg Message to send; must be an object with a "type" property
     * @return A Promise resolving to the response
     */
    sendRequestForResult(aMsg: any): Promise<any>;
    finalize(): void;
    receiveMessage(aMsg: any): void;
}
declare class ChildActorDispatcher {
    constructor(actor: any);
    _actor: any;
    registerListener(aListener: any, aEvents: any): void;
    unregisterListener(aListener: any, aEvents: any): void;
    /**
     * Sends a request to Java.
     *
     * @param aMsg      Message to send; must be an object with a "type" property
     */
    sendRequest(aMsg: any): void;
    /**
     * Sends a request to Java, returning a Promise that resolves to the response.
     *
     * @param aMsg Message to send; must be an object with a "type" property
     * @return A Promise resolving to the response
     */
    sendRequestForResult(aMsg: any): any;
}
export {};
