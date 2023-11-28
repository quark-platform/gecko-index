export function nsAsyncShutdownService(): void;
export class nsAsyncShutdownService {
    wrappedJSObject: {
        _propertyBagConverter: typeof PropertyBagConverter;
    };
    makeBarrier(name: any): nsAsyncShutdownBarrier;
    QueryInterface: any;
}
/**
 * Conversion between nsIPropertyBags and JS values.
 * This uses a conservative approach to avoid losing data and doesn't throw.
 * Don't use this if you need perfect serialization and deserialization.
 */
declare class PropertyBagConverter {
    /**
     * When the js value to convert is a primitive, it is stored in the property
     * bag under a key with this name.
     */
    get primitiveProperty(): string;
    /**
     * Converts from a PropertyBag to a JS value.
     * @param {nsIPropertyBag} bag The PropertyBag to convert.
     * @returns {jsval} A JS value.
     */
    propertyBagToJsValue(bag: nsIPropertyBag): jsval;
    /**
     * Converts from a JS value to a PropertyBag.
     * @param {jsval} val JS value to convert.
     * @returns {nsIPropertyBag} A PropertyBag.
     * @note function is converted to "(function)" and undefined to null.
     */
    jsValueToPropertyBag(val: jsval): nsIPropertyBag;
    #private;
}
/**
 * Construct an instance of nsIAsyncShutdownBarrier from an instance
 * of AsyncShutdown.Barrier.
 *
 * @param {object} moduleBarrier an instance if
 * `AsyncShutdown.Barrier`. This instance will serve as back-end for
 * all methods.
 * @constructor
 */
declare function nsAsyncShutdownBarrier(moduleBarrier: object): void;
declare class nsAsyncShutdownBarrier {
    /**
     * Construct an instance of nsIAsyncShutdownBarrier from an instance
     * of AsyncShutdown.Barrier.
     *
     * @param {object} moduleBarrier an instance if
     * `AsyncShutdown.Barrier`. This instance will serve as back-end for
     * all methods.
     * @constructor
     */
    constructor(moduleBarrier: object);
    _client: nsAsyncShutdownClient;
    _moduleBarrier: any;
    get state(): nsIPropertyBag;
    get client(): any;
    wait(onReady: any): void;
    QueryInterface: any;
}
/**
 * Construct an instance of nsIAsyncShutdownClient from a
 * AsyncShutdown.Barrier client.
 *
 * @param {object} moduleClient A client, as returned from the `client`
 * property of an instance of `AsyncShutdown.Barrier`. This client will
 * serve as back-end for methods `addBlocker` and `removeBlocker`.
 * @constructor
 */
declare function nsAsyncShutdownClient(moduleClient: object): void;
declare class nsAsyncShutdownClient {
    /**
     * Construct an instance of nsIAsyncShutdownClient from a
     * AsyncShutdown.Barrier client.
     *
     * @param {object} moduleClient A client, as returned from the `client`
     * property of an instance of `AsyncShutdown.Barrier`. This client will
     * serve as back-end for methods `addBlocker` and `removeBlocker`.
     * @constructor
     */
    constructor(moduleClient: object);
    _moduleClient: any;
    _byXpcomBlocker: Map<any, any>;
    get jsclient(): any;
    get name(): any;
    get isClosed(): any;
    addBlocker(xpcomBlocker: any, fileName: any, lineNumber: any, stack: any): void;
    removeBlocker(xpcomBlocker: any): any;
    QueryInterface: any;
}
export {};
