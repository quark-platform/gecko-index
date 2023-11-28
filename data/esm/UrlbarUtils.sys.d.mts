export const UrlbarUtils: any;
/**
 * UrlbarQueryContext defines a user's autocomplete input from within the urlbar.
 * It supplements it with details of how the search results should be obtained
 * and what they consist of.
 */
export class UrlbarQueryContext {
    /**
     * Constructs the UrlbarQueryContext instance.
     *
     * @param {object} options
     *   The initial options for UrlbarQueryContext.
     * @param {string} options.searchString
     *   The string the user entered in autocomplete. Could be the empty string
     *   in the case of the user opening the popup via the mouse.
     * @param {boolean} options.isPrivate
     *   Set to true if this query was started from a private browsing window.
     * @param {number} options.maxResults
     *   The maximum number of results that will be displayed for this query.
     * @param {boolean} options.allowAutofill
     *   Whether or not to allow providers to include autofill results.
     * @param {number} options.userContextId
     *   The container id where this context was generated, if any.
     * @param {Array} [options.sources]
     *   A list of acceptable UrlbarUtils.RESULT_SOURCE for the context.
     * @param {object} [options.searchMode]
     *   The input's current search mode.  See UrlbarInput.setSearchMode for a
     *   description.
     * @param {boolean} [options.prohibitRemoteResults]
     *   This provides a short-circuit override for `context.allowRemoteResults`.
     *   If it's false, then `allowRemoteResults` will do its usual checks to
     *   determine whether remote results are allowed. If it's true, then
     *   `allowRemoteResults` will immediately return false. Defaults to false.
     * @param {string} [options.formHistoryName]
     *   The name under which the local form history is registered.
     */
    constructor(options?: {
        searchString: string;
        isPrivate: boolean;
        maxResults: number;
        allowAutofill: boolean;
        userContextId: number;
        sources?: any[];
        searchMode?: object;
        prohibitRemoteResults?: boolean;
        formHistoryName?: string;
    });
    lastResultCount: number;
    pendingHeuristicProviders: Set<any>;
    deferUserSelectionProviders: Set<any>;
    trimmedSearchString: any;
    userContextId: any;
    /**
     * Checks the required options, saving them as it goes.
     *
     * @param {object} options The options object to check.
     * @param {Array} optionNames The names of the options to check for.
     * @throws {Error} Throws if there is a missing option.
     */
    _checkRequiredOptions(options: object, optionNames: any[]): void;
    /**
     * Caches and returns fixup info from URIFixup for the current search string.
     * Only returns a subset of the properties from URIFixup. This is both to
     * reduce the memory footprint of UrlbarQueryContexts and to keep them
     * serializable so they can be sent to extensions.
     *
     * @returns {{ href: string; isSearch: boolean; }?}
     */
    get fixupInfo(): {
        href: string;
        isSearch: boolean;
    };
    _fixupInfo: {
        href: any;
        isSearch: boolean;
        scheme: any;
    };
    _fixupError: any;
    /**
     * Returns the error that was thrown when fixupInfo was fetched, if any. If
     * fixupInfo has not yet been fetched for this queryContext, it is fetched
     * here.
     *
     * @returns {any?}
     */
    get fixupError(): any;
    /**
     * Returns whether results from remote services are generally allowed for the
     * context. Callers can impose further restrictions as appropriate, but
     * typically they should not fetch remote results if this returns false.
     *
     * @param {string} [searchString]
     *   Usually this is just the context's search string, but if you need to
     *   fetch remote results based on a modified version, you can pass it here.
     * @param {boolean} [allowEmptySearchString]
     *   Whether to check for the minimum length of the search string.
     * @returns {boolean}
     *   Whether remote results are allowed.
     */
    allowRemoteResults(searchString?: string, allowEmptySearchString?: boolean): boolean;
}
/**
 * Base class for a muxer.
 * The muxer scope is to sort a given list of results.
 */
export class UrlbarMuxer {
    /**
     * Unique name for the muxer, used by the context to sort results.
     * Not using a unique name will cause the newest registration to win.
     *
     * @abstract
     */
    get name(): string;
    /**
     * Sorts queryContext results in-place.
     *
     * @param {UrlbarQueryContext} queryContext the context to sort results for.
     * @abstract
     */
    sort(queryContext: UrlbarQueryContext): void;
}
/**
 * Base class for a provider.
 * The provider scope is to query a datasource and return results from it.
 */
export class UrlbarProvider {
    /**
     * Unique name for the provider, used by the context to filter on providers.
     * Not using a unique name will cause the newest registration to win.
     *
     * @abstract
     */
    get name(): string;
    /**
     * The type of the provider, must be one of UrlbarUtils.PROVIDER_TYPE.
     *
     * @abstract
     */
    get type(): void;
    /**
     * Calls a method on the provider in a try-catch block and reports any error.
     * Unlike most other provider methods, `tryMethod` is not intended to be
     * overridden.
     *
     * @param {string} methodName The name of the method to call.
     * @param {*} args The method arguments.
     * @returns {*} The return value of the method, or undefined if the method
     *          throws an error.
     * @abstract
     */
    tryMethod(methodName: string, ...args: any): any;
    /**
     * Whether this provider should be invoked for the given context.
     * If this method returns false, the providers manager won't start a query
     * with this provider, to save on resources.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {boolean} Whether this provider should be invoked for the search.
     * @abstract
     */
    isActive(queryContext: UrlbarQueryContext): boolean;
    /**
     * Gets the provider's priority.  Priorities are numeric values starting at
     * zero and increasing in value.  Smaller values are lower priorities, and
     * larger values are higher priorities.  For a given query, `startQuery` is
     * called on only the active and highest-priority providers.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {number} The provider's priority for the given query.
     * @abstract
     */
    getPriority(queryContext: UrlbarQueryContext): number;
    /**
     * Starts querying.
     *
     * Note: Extended classes should return a Promise resolved when the provider
     *       is done searching AND returning results.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result. A UrlbarResult should be passed to it.
     * @abstract
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): void;
    /**
     * Cancels a running query,
     *
     * @param {UrlbarQueryContext} queryContext the query context object to cancel
     *        query for.
     * @abstract
     */
    cancelQuery(queryContext: UrlbarQueryContext): void;
    /**
     * Called when the user starts and ends an engagement with the urlbar.
     *
     * @param {string} state
     *   The state of the engagement, one of the following strings:
     *
     *   start
     *       A new query has started in the urlbar.
     *   engagement
     *       The user picked a result in the urlbar or used paste-and-go.
     *   abandonment
     *       The urlbar was blurred (i.e., lost focus).
     *   discard
     *       This doesn't correspond to a user action, but it means that the
     *       urlbar has discarded the engagement for some reason, and the
     *       `onEngagement` implementation should ignore it.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The engagement's query context.  This is *not* guaranteed to be defined
     *   when `state` is "start".  It will always be defined for "engagement" and
     *   "abandonment".
     * @param {object} details
     *   This object is non-empty only when `state` is "engagement" or
     *   "abandonment", and it describes the search string and engaged result.
     *
     *   For "engagement", it has the following properties:
     *
     *   {UrlbarResult} result
     *       The engaged result. If a result itself was picked, this will be it.
     *       If an element related to a result was picked (like a button or menu
     *       command), this will be that result. This property will be present if
     *       and only if `state` == "engagement", so it can be used to quickly
     *       tell when the user engaged with a result.
     *   {Element} element
     *       The picked DOM element.
     *   {boolean} isSessionOngoing
     *       True if the search session remains ongoing or false if the engagement
     *       ended it. Typically picking a result ends the session but not always.
     *       Picking a button or menu command may not end the session; dismissals
     *       do not, for example.
     *   {string} searchString
     *       The search string for the engagement's query.
     *   {number} selIndex
     *       The index of the picked result.
     *   {string} selType
     *       The type of the selected result.  See TelemetryEvent.record() in
     *       UrlbarController.jsm.
     *   {string} provider
     *       The name of the provider that produced the picked result.
     *
     *   For "abandonment", only `searchString` is defined.
     * @param {UrlbarController} controller
     *  The associated controller.
     */
    onEngagement(state: string, queryContext: UrlbarQueryContext, details: object, controller: UrlbarController): void;
    /**
     * Called when a result from the provider is selected. "Selected" refers to
     * the user highlighing the result with the arrow keys/Tab, before it is
     * picked. onSelection is also called when a user clicks a result. In the
     * event of a click, onSelection is called just before onEngagement. Note that
     * this is called when heuristic results are pre-selected.
     *
     * @param {UrlbarResult} result
     *   The result that was selected.
     * @param {Element} element
     *   The element in the result's view that was selected.
     * @abstract
     */
    onSelection(result: UrlbarResult, element: Element): void;
    /**
     * This is called only for dynamic result types, when the urlbar view updates
     * the view of one of the results of the provider.  It should return an object
     * describing the view update that looks like this:
     *
     *   {
     *     nodeNameFoo: {
     *       attributes: {
     *         someAttribute: someValue,
     *       },
     *       style: {
     *         someStyleProperty: someValue,
     *       },
     *       l10n: {
     *         id: someL10nId,
     *         args: someL10nArgs,
     *       },
     *       textContent: "some text content",
     *     },
     *     nodeNameBar: {
     *       ...
     *     },
     *     nodeNameBaz: {
     *       ...
     *     },
     *   }
     *
     * The object should contain a property for each element to update in the
     * dynamic result type view.  The names of these properties are the names
     * declared in the view template of the dynamic result type; see
     * UrlbarView.addDynamicViewTemplate().  The values are similar to the nested
     * objects specified in the view template but not quite the same; see below.
     * For each property, the element in the view subtree with the specified name
     * is updated according to the object in the property's value.  If an
     * element's name is not specified, then it will not be updated and will
     * retain its current state.
     *
     * @param {UrlbarResult} result
     *   The result whose view will be updated.
     * @param {Map} idsByName
     *   A Map from an element's name, as defined by the provider; to its ID in
     *   the DOM, as defined by the browser. The browser manages element IDs for
     *   dynamic results to prevent collisions. However, a provider may need to
     *   access the IDs of the elements created for its results. For example, to
     *   set various `aria` attributes.
     * @returns {object}
     *   A view update object as described above.  The names of properties are the
     *   the names of elements declared in the view template.  The values of
     *   properties are objects that describe how to update each element, and
     *   these objects may include the following properties, all of which are
     *   optional:
     *
     *   {object} [attributes]
     *     A mapping from attribute names to values.  Each name-value pair results
     *     in an attribute being added to the element.  The `id` attribute is
     *     reserved and cannot be set by the provider.
     *   {object} [style]
     *     A plain object that can be used to add inline styles to the element,
     *     like `display: none`.   `element.style` is updated for each name-value
     *     pair in this object.
     *   {object} [l10n]
     *     An { id, args } object that will be passed to
     *     document.l10n.setAttributes().
     *   {string} [textContent]
     *     A string that will be set as `element.textContent`.
     */
    getViewUpdate(result: UrlbarResult, idsByName: Map<any, any>): object;
    /**
     * Gets the list of commands that should be shown in the result menu for a
     * given result from the provider. All commands returned by this method should
     * be handled by implementing `onEngagement()` with the possible exception of
     * commands automatically handled by the urlbar, like "help".
     *
     * @param {UrlbarResult} result
     *   The menu will be shown for this result.
     * @returns {Array}
     *   If the result doesn't have any commands, this should return null.
     *   Otherwise it should return an array of command objects that look like:
     *   `{ name, l10n, children}`
     *
     *   {string} name
     *     The name of the command. Must be specified unless `children` is
     *     present. When a command is picked, its name will be passed as
     *     `details.selType` to `onEngagement()`. The special name "separator"
     *     will create a menu separator.
     *   {object} l10n
     *     An l10n object for the command's label: `{ id, args }`
     *     Must be specified unless `name` is "separator".
     *   {array} children
     *     If specified, a submenu will be created with the given child commands.
     *     Each object in the array must be a command object.
     */
    getResultCommands(result: UrlbarResult): any[];
    /**
     * Defines whether the view should defer user selection events while waiting
     * for the first result from this provider.
     *
     * Note: UrlbarEventBufferer has a timeout after which user events will be
     *       processed regardless.
     *
     * @returns {boolean} Whether the provider wants to defer user selection
     *          events.
     * @see {@link UrlbarEventBufferer}
     */
    get deferUserSelection(): boolean;
}
/**
 * Class used to create a timer that can be manually fired, to immediately
 * invoke the callback, or canceled, as necessary.
 * Examples:
 *   let timer = new SkippableTimer();
 *   // Invokes the callback immediately without waiting for the delay.
 *   await timer.fire();
 *   // Cancel the timer, the callback won't be invoked.
 *   await timer.cancel();
 *   // Wait for the timer to have elapsed.
 *   await timer.promise;
 */
export class SkippableTimer {
    /**
     * Creates a skippable timer for the given callback and time.
     *
     * @param {object} options An object that configures the timer
     * @param {string} options.name The name of the timer, logged when necessary
     * @param {Function} options.callback To be invoked when requested
     * @param {number} options.time A delay in milliseconds to wait for
     * @param {boolean} options.reportErrorOnTimeout If true and the timer times
     *                  out, an error will be logged with Cu.reportError
     * @param {logger} options.logger An optional logger
     */
    constructor({ name, callback, time, reportErrorOnTimeout, logger, }?: {
        name: string;
        callback: Function;
        time: number;
        reportErrorOnTimeout: boolean;
        logger: logger;
    });
    /**
     * This can be used to track whether the timer completed.
     */
    done: boolean;
    name: string;
    logger: logger;
    _timer: any;
    fire: () => Promise<void>;
    promise: Promise<void>;
    /**
     * Allows to cancel the timer and the callback won't be invoked.
     * It is not strictly necessary to await for this, the promise can just be
     * used to ensure all the internal work is complete.
     */
    cancel(): Promise<void>;
    _canceled: boolean;
    _log(msg: any, isError?: boolean): void;
}
/**
 * This class implements a cache for l10n strings. Cached strings can be
 * accessed synchronously, avoiding the asynchronicity of `data-l10n-id` and
 * `document.l10n.setAttributes`, which can lead to text pop-in and flickering
 * as strings are fetched from Fluent. (`document.l10n.formatValueSync` is also
 * sync but should not be used since it may perform sync I/O.)
 *
 * Values stored and returned by the cache are JS objects similar to
 * `L10nMessage` objects, not bare strings. This allows the cache to store not
 * only l10n strings with bare values but also strings that define attributes
 * (e.g., ".label = My label value"). See `get` for details.
 */
export class L10nCache {
    /**
     * @param {Localization} l10n
     *   A `Localization` object like `document.l10n`. This class keeps a weak
     *   reference to this object, so the caller or something else must hold onto
     *   it.
     */
    constructor(l10n: Localization);
    l10n: any;
    QueryInterface: any;
    /**
     * Gets a cached l10n message.
     *
     * @param {object} options
     *   Options
     * @param {string} options.id
     *   The string's Fluent ID.
     * @param {object} options.args
     *   The Fluent arguments as passed to `l10n.setAttributes`.
     * @param {boolean} options.excludeArgsFromCacheKey
     *   Pass true if the string was cached using a key that excluded arguments.
     * @returns {object}
     *   The message object or undefined if it's not cached. The message object is
     *   similar to `L10nMessage` (defined in Localization.webidl) but its
     *   attributes are stored differently for convenience. It looks like this:
     *
     *     { value, attributes }
     *
     *   The properties are:
     *
     *     {string} value
     *       The bare value of the string. If the string does not have a bare
     *       value (i.e., it has only attributes), this will be null.
     *     {object} attributes
     *       A mapping from attribute names to their values. If the string doesn't
     *       have any attributes, this will be null.
     *
     *   For example, if we cache these strings from an ftl file:
     *
     *     foo = Foo's value
     *     bar =
     *       .label = Bar's label value
     *
     *   Then:
     *
     *     cache.get("foo")
     *     // => { value: "Foo's value", attributes: null }
     *     cache.get("bar")
     *     // => { value: null, attributes: { label: "Bar's label value" }}
     */
    get({ id, args, excludeArgsFromCacheKey }: {
        id: string;
        args: object;
        excludeArgsFromCacheKey: boolean;
    }): object;
    /**
     * Fetches a string from Fluent and caches it.
     *
     * @param {object} options
     *   Options
     * @param {string} options.id
     *   The string's Fluent ID.
     * @param {object} options.args
     *   The Fluent arguments as passed to `l10n.setAttributes`.
     * @param {boolean} options.excludeArgsFromCacheKey
     *   Pass true to cache the string using a key that excludes the arguments.
     *   The string will be cached only by its ID. This is useful if the string is
     *   used only once in the UI, its arguments vary, and it's acceptable to
     *   fetch and show a cached value with old arguments until the string is
     *   relocalized with new arguments.
     */
    add({ id, args, excludeArgsFromCacheKey }: {
        id: string;
        args: object;
        excludeArgsFromCacheKey: boolean;
    }): Promise<void>;
    /**
     * Fetches and caches a string if it's not already cached. This is just a
     * slight optimization over `add` that avoids calling into Fluent
     * unnecessarily.
     *
     * @param {object} options
     *   Options
     * @param {string} options.id
     *   The string's Fluent ID.
     * @param {object} options.args
     *   The Fluent arguments as passed to `l10n.setAttributes`.
     * @param {boolean} options.excludeArgsFromCacheKey
     *   Pass true to cache the string using a key that excludes the arguments.
     *   The string will be cached only by its ID. See `add()` for more.
     */
    ensure({ id, args, excludeArgsFromCacheKey }: {
        id: string;
        args: object;
        excludeArgsFromCacheKey: boolean;
    }): Promise<void>;
    /**
     * Fetches and caches strings that aren't already cached.
     *
     * @param {Array} objects
     *   An array of objects as passed to `ensure()`.
     */
    ensureAll(objects: any[]): Promise<void>;
    /**
     * Removes a cached string.
     *
     * @param {object} options
     *   Options
     * @param {string} options.id
     *   The string's Fluent ID.
     * @param {object} options.args
     *   The Fluent arguments as passed to `l10n.setAttributes`.
     * @param {boolean} options.excludeArgsFromCacheKey
     *   Pass true if the string was cached using a key that excludes the
     *   arguments. If true, `args` is ignored.
     */
    delete({ id, args, excludeArgsFromCacheKey }: {
        id: string;
        args: object;
        excludeArgsFromCacheKey: boolean;
    }): void;
    /**
     * Removes all cached strings.
     */
    clear(): void;
    /**
     * Returns the number of cached messages.
     *
     * @returns {number}
     */
    size(): number;
    /**
     * Observer method from Services.obs.addObserver.
     *
     * @param {nsISupports} subject
     *   The subject of the notification.
     * @param {string} topic
     *   The topic of the notification.
     * @param {string} data
     *   The data attached to the notification.
     */
    observe(subject: nsISupports, topic: string, data: string): Promise<void>;
    /**
     * Cache keys => cached message objects
     */
    _messagesByKey: Map<any, any>;
    /**
     * Returns a cache key for a string in `_messagesByKey`.
     *
     * @param {object} options
     *   Options
     * @param {string} options.id
     *   The string's Fluent ID.
     * @param {object} options.args
     *   The Fluent arguments as passed to `l10n.setAttributes`.
     * @param {boolean} options.excludeArgsFromCacheKey
     *   Pass true to exclude the arguments from the key and include only the ID.
     * @returns {string}
     *   The cache key.
     */
    _key({ id, args, excludeArgsFromCacheKey }: {
        id: string;
        args: object;
        excludeArgsFromCacheKey: boolean;
    }): string;
}
/**
 * This class provides a way of serializing access to a resource. It's a queue
 * of callbacks (or "tasks") where each callback is called and awaited in order,
 * one at a time.
 */
export class TaskQueue {
    /**
     * @returns {Promise}
     *   Resolves when the queue becomes empty. If the queue is already empty,
     *   then a resolved promise is returned.
     */
    get emptyPromise(): Promise<any>;
    /**
     * Adds a callback function to the task queue. The callback will be called
     * after all other callbacks before it in the queue. This method returns a
     * promise that will be resolved after awaiting the callback. The promise will
     * be resolved with the value returned by the callback.
     *
     * @param {Function} callback
     *   The function to queue.
     * @returns {Promise}
     *   Resolved after the task queue calls and awaits `callback`. It will be
     *   resolved with the value returned by `callback`. If `callback` throws an
     *   error, then it will be rejected with the error.
     */
    queue(callback: Function): Promise<any>;
    /**
     * Calls the next function in the task queue and recurses until the queue is
     * empty. Once empty, all empty callback functions are called.
     */
    _doNextTask(): Promise<void>;
    _queue: any[];
    _emptyCallbacks: any[];
}
