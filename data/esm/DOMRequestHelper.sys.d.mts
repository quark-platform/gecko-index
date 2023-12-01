/**
 * Helper object for APIs that deal with DOMRequests and Promises.
 * It allows objects inheriting from it to create and keep track of DOMRequests
 * and Promises objects in the common scenario where requests are created in
 * the child, handed out to content and delivered to the parent within an async
 * message (containing the identifiers of these requests). The parent may send
 * messages back as answers to different requests and the child will use this
 * helper to get the right request object. This helper also takes care of
 * releasing the requests objects when the window goes out of scope.
 *
 * DOMRequestIPCHelper also deals with message listeners, allowing to add them
 * to the child side of frame and process message manager and removing them
 * when needed.
 */
export function DOMRequestIpcHelper(): void;
export class DOMRequestIpcHelper {
    _listeners: {};
    _requests: {};
    _window: any;
    QueryInterface: MozQueryInterface;
    /**
     *  'aMessages' is expected to be an array of either:
     *  - objects of this form:
     *    {
     *      name: "messageName",
     *      weakRef: false
     *    }
     *    where 'name' is the message identifier and 'weakRef' a boolean
     *    indicating if the listener should be a weak referred one or not.
     *
     *  - or only strings containing the message name, in which case the listener
     *    will be added as a strong reference by default.
     */
    addMessageListeners(aMessages: any): void;
    /**
     * 'aMessages' is expected to be a string or an array of strings containing
     * the message names of the listeners to be removed.
     */
    removeMessageListeners(aMessages: any): void;
    /**
     * Initialize the helper adding the corresponding listeners to the messages
     * provided as the second parameter.
     *
     * 'aMessages' is expected to be an array of either:
     *
     *  - objects of this form:
     *    {
     *      name: 'messageName',
     *      weakRef: false
     *    }
     *    where 'name' is the message identifier and 'weakRef' a boolean
     *    indicating if the listener should be a weak referred one or not.
     *
     *  - or only strings containing the message name, in which case the listener
     *    will be added as a strong referred one by default.
     */
    initDOMRequestHelper(aWindow: any, aMessages: any): void;
    _id: any;
    innerWindowID: any;
    _destroyed: boolean;
    destroyDOMRequestHelper(): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    getRequestId(aRequest: any): string;
    getPromiseResolverId(aPromiseResolver: any): string;
    getRequest(aId: any): any;
    getPromiseResolver(aId: any): any;
    removeRequest(aId: any): void;
    removePromiseResolver(aId: any): void;
    takeRequest(aId: any): any;
    takePromiseResolver(aId: any): any;
    _getRandomId(): any;
    createRequest(): DOMRequest;
    /**
     * createPromise() creates a new Promise, with `aPromiseInit` as the
     * PromiseInit callback. The promise constructor is obtained from the
     * reference to window owned by this DOMRequestIPCHelper.
     */
    createPromise(aPromiseInit: any): any;
    /**
     * createPromiseWithId() creates a new Promise, accepting a callback
     * which is immediately called with the generated resolverId.
     */
    createPromiseWithId(aCallback: any): any;
    forEachRequest(aCallback: any): void;
    forEachPromiseResolver(aCallback: any): void;
}
