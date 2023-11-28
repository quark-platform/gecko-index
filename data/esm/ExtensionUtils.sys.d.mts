export namespace ExtensionUtils {
    export { flushJarCache };
    export { getInnerWindowID };
    export { getMessageManager };
    export { getUniqueId };
    export { filterStack };
    export { makeDataURI };
    export { parseMatchPatterns };
    export { promiseDocumentIdle };
    export { promiseDocumentLoaded };
    export { promiseDocumentReady };
    export { promiseEvent };
    export { promiseObserved };
    export { promiseTimeout };
    export { DefaultMap };
    export { DefaultWeakMap };
    export { ExtensionError };
    export { LimitedSet };
    export { WorkerExtensionError };
}
declare function flushJarCache(jarPath: any): void;
declare function getInnerWindowID(window: any): any;
declare function getMessageManager(target: any): any;
declare function getUniqueId(): number;
declare function filterStack(error: any): string;
/**
 * Fetch icon content and convert it to a data: URI.
 *
 * @param {string} iconUrl Icon url to fetch.
 * @returns {Promise<string>}
 */
declare function makeDataURI(iconUrl: string): Promise<string>;
declare function parseMatchPatterns(patterns: any, options: any): any;
/**
  * Returns a Promise which resolves when the given window's document's DOM has
  * fully loaded, the <head> stylesheets have fully loaded, and we have hit an
  * idle time.
  *
  * @param {Window} window The window whose document we will await
                           the readiness of.
  * @returns {Promise<IdleDeadline>}
  */
declare function promiseDocumentIdle(window: Window): Promise<IdleDeadline>;
/**
 * Returns a Promise which resolves when the given document is fully
 * loaded.
 *
 * @param {Document} doc The document to await the load of.
 * @returns {Promise<Document>}
 */
declare function promiseDocumentLoaded(doc: Document): Promise<Document>;
/**
 * Returns a Promise which resolves when the given document's DOM has
 * fully loaded.
 *
 * @param {Document} doc The document to await the load of.
 * @returns {Promise<Document>}
 */
declare function promiseDocumentReady(doc: Document): Promise<Document>;
/**
 * Returns a Promise which resolves when the given event is dispatched to the
 * given element.
 *
 * @param {Element} element
 *        The element on which to listen.
 * @param {string} eventName
 *        The event to listen for.
 * @param {boolean} [useCapture = true]
 *        If true, listen for the even in the capturing rather than
 *        bubbling phase.
 * @param {Event} [test]
 *        An optional test function which, when called with the
 *        observer's subject and data, should return true if this is the
 *        expected event, false otherwise.
 * @returns {Promise<Event>}
 */
declare function promiseEvent(element: Element, eventName: string, useCapture?: boolean, test?: Event): Promise<Event>;
/**
 * Returns a Promise which resolves the given observer topic has been
 * observed.
 *
 * @param {string} topic
 *        The topic to observe.
 * @param {function(nsISupports, string)} [test]
 *        An optional test function which, when called with the
 *        observer's subject and data, should return true if this is the
 *        expected notification, false otherwise.
 * @returns {Promise<object>}
 */
declare function promiseObserved(topic: string, test?: (arg0: nsISupports, arg1: string) => any): Promise<object>;
declare function promiseTimeout(delay: any): Promise<any>;
declare class DefaultMap extends Map<any, any> {
    constructor(defaultConstructor?: any, init?: any);
    defaultConstructor: any;
    get(key: any): any;
}
/**
 * Similar to a WeakMap, but creates a new key with the given
 * constructor if one is not present.
 */
declare class DefaultWeakMap extends WeakMap<object, any> {
    constructor(defaultConstructor?: any, init?: any);
    defaultConstructor: any;
    get(key: any): any;
}
/**
 * An Error subclass for which complete error messages are always passed
 * to extensions, rather than being interpreted as an unknown error.
 */
declare class ExtensionError extends DOMException {
    static [Symbol.hasInstance](e: any): boolean;
    constructor(message: any);
}
/**
 * A set with a limited number of slots, which flushes older entries as
 * newer ones are added.
 *
 * @param {integer} limit
 *        The maximum size to trim the set to after it grows too large.
 * @param {integer} [slop = limit * .25]
 *        The number of extra entries to allow in the set after it
 *        reaches the size limit, before it is truncated to the limit.
 * @param {iterable} [iterable]
 *        An iterable of initial entries to add to the set.
 */
declare class LimitedSet extends Set<any> {
    constructor(limit: any, slop?: number, iterable?: any);
    limit: any;
    slop: number;
    truncate(limit: any): void;
    add(item: any): void;
}
/**
 * An Error subclass used to recognize the errors that should
 * to be forwarded to the worker thread and being accessible
 * to the extension worker script (vs. the errors that should be
 * only logged internally and raised to the worker script as
 * the generic unexpected error).
 */
declare class WorkerExtensionError extends DOMException {
    constructor(message: any);
}
export {};
