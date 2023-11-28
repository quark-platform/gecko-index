/**
 * The address bar controller handles queries from the address bar, obtains
 * results and returns them to the UI for display.
 *
 * Listeners may be added to listen for the results. They may support the
 * following methods which may be called when a query is run:
 *
 * - onQueryStarted(queryContext)
 * - onQueryResults(queryContext)
 * - onQueryCancelled(queryContext)
 * - onQueryFinished(queryContext)
 * - onQueryResultRemoved(index)
 * - onViewOpen()
 * - onViewClose()
 */
export class UrlbarController {
    /**
     * Initialises the class. The manager may be overridden here, this is for
     * test purposes.
     *
     * @param {object} options
     *   The initial options for UrlbarController.
     * @param {UrlbarInput} options.input
     *   The input this controller is operating with.
     * @param {object} [options.manager]
     *   Optional fake providers manager to override the built-in providers manager.
     *   Intended for use in unit tests only.
     */
    constructor(options?: {
        input: UrlbarInput;
        manager?: object;
    });
    input: any;
    browserWindow: any;
    manager: any;
    _listeners: Set<any>;
    _userSelectionBehavior: string;
    engagementEvent: TelemetryEvent;
    get NOTIFICATIONS(): {
        QUERY_STARTED: string;
        QUERY_RESULTS: string;
        QUERY_RESULT_REMOVED: string;
        QUERY_CANCELLED: string;
        QUERY_FINISHED: string;
        VIEW_OPEN: string;
        VIEW_CLOSE: string;
    };
    /**
     * Hooks up the controller with a view.
     *
     * @param {UrlbarView} view
     *   The UrlbarView instance associated with this controller.
     */
    setView(view: UrlbarView): void;
    view: UrlbarView;
    /**
     * Takes a query context and starts the query based on the user input.
     *
     * @param {UrlbarQueryContext} queryContext The query details.
     */
    startQuery(queryContext: UrlbarQueryContext): Promise<UrlbarQueryContext>;
    _lastQueryContextWrapper: {
        queryContext: UrlbarQueryContext;
    };
    /**
     * Cancels an in-progress query. Note, queries may continue running if they
     * can't be cancelled.
     */
    cancelQuery(): void;
    /**
     * Receives results from a query.
     *
     * @param {UrlbarQueryContext} queryContext The query details.
     */
    receiveResults(queryContext: UrlbarQueryContext): void;
    /**
     * Adds a listener for query actions and results.
     *
     * @param {object} listener The listener to add.
     * @throws {TypeError} Throws if the listener is not an object.
     */
    addQueryListener(listener: object): void;
    /**
     * Removes a query listener.
     *
     * @param {object} listener The listener to add.
     */
    removeQueryListener(listener: object): void;
    /**
     * Checks whether a keyboard event that would normally open the view should
     * instead be handled natively by the input field.
     * On certain platforms, the up and down keys can be used to move the caret,
     * in which case we only want to open the view if the caret is at the
     * start or end of the input.
     *
     * @param {KeyboardEvent} event
     *   The DOM KeyboardEvent.
     * @returns {boolean}
     *   Returns true if the event should move the caret instead of opening the
     *   view.
     */
    keyEventMovesCaret(event: KeyboardEvent): boolean;
    /**
     * Receives keyboard events from the input and handles those that should
     * navigate within the view or pick the currently selected item.
     *
     * @param {KeyboardEvent} event
     *   The DOM KeyboardEvent.
     * @param {boolean} executeAction
     *   Whether the event should actually execute the associated action, or just
     *   be managed (at a preventDefault() level). This is used when the event
     *   will be deferred by the event bufferer, but preventDefault() and friends
     *   should still happen synchronously.
     */
    handleKeyNavigation(event: KeyboardEvent, executeAction?: boolean): void;
    /**
     * Stores the selection behavior that the user has used to select a result.
     *
     * @param {"arrow"|"tab"|"none"} behavior
     *   The behavior the user used.
     */
    set userSelectionBehavior(behavior: "none" | "tab" | "arrow");
    /**
     * Tries to initialize a speculative connection on a result.
     * Speculative connections are only supported for a subset of all the results.
     *
     * Speculative connect to:
     *  - Search engine heuristic results
     *  - autofill results
     *  - http/https results
     *
     * @param {UrlbarResult} result The result to speculative connect to.
     * @param {UrlbarQueryContext} context The queryContext
     * @param {string} reason Reason for the speculative connect request.
     */
    speculativeConnect(result: UrlbarResult, context: UrlbarQueryContext, reason: string): void;
    /**
     * Records details of the selected result in telemetry. We only record the
     * selection behavior, type and index.
     *
     * @param {Event} event
     *   The event which triggered the result to be selected.
     * @param {UrlbarResult} result
     *   The selected result.
     */
    recordSelectedResult(event: Event, result: UrlbarResult): void;
    /**
     * Removes a result from the current query context and notifies listeners.
     * Heuristic results cannot be removed.
     *
     * @param {UrlbarResult} result
     *   The result to remove.
     */
    removeResult(result: UrlbarResult): void;
    /**
     * Clear the previous query context cache.
     */
    clearLastQueryContextCache(): void;
    /**
     * Notifies listeners of results.
     *
     * @param {string} name Name of the notification.
     * @param {object} params Parameters to pass with the notification.
     */
    notify(name: string, ...params: object): void;
    #private;
}
/**
 * Tracks and records telemetry events for the given category, if provided,
 * otherwise it's a no-op.
 * It is currently designed around the "urlbar" category, even if it can
 * potentially be extended to other categories.
 * To record an event, invoke start() with a starting event, then either
 * invoke record() with a final event, or discard() to drop the recording.
 *
 * @see Events.yaml
 */
declare class TelemetryEvent {
    constructor(controller: any, category: any);
    _controller: any;
    _category: any;
    /**
     * Start measuring the elapsed time from a user-generated event.
     * After this has been invoked, any subsequent calls to start() are ignored,
     * until either record() or discard() are invoked. Thus, it is safe to keep
     * invoking this on every input event as the user is typing, for example.
     *
     * @param {event} event A DOM event.
     * @param {string} [searchString] Pass a search string related to the event if
     *        you have one.  The event by itself sometimes isn't enough to
     *        determine the telemetry details we should record.
     * @throws This should never throw, or it may break the urlbar.
     * @see {@link https://firefox-source-docs.mozilla.org/browser/urlbar/telemetry.html}
     */
    start(event: Event, searchString?: string): void;
    _startEventInfo: {
        timeStamp: any;
        interactionType: any;
        searchString: string;
    };
    /**
     * Record an engagement telemetry event.
     * When the user picks a result from a search through the mouse or keyboard,
     * an engagement event is recorded. If instead the user abandons a search, by
     * blurring the input field, an abandonment event is recorded.
     *
     * On return, `details.isSessionOngoing` will be set to true if the engagement
     * did not end the search session. Not all engagements end the session. The
     * session remains ongoing when certain commands are picked (like dismissal)
     * and results that enter search mode are picked.
     *
     * @param {event} [event]
     *        A DOM event.
     *        Note: event can be null, that usually happens for paste&go or drop&go.
     *        If there's no _startEventInfo this is a no-op.
     * @param {object} details An object describing action details.
     * @param {string} [details.searchString] The user's search string. Note that
     *        this string is not sent with telemetry data. It is only used
     *        locally to discern other data, such as the number of characters and
     *        words in the string.
     * @param {string} [details.selType] type of the selected element, undefined
     *        for "blur". One of "unknown", "autofill", "visiturl", "bookmark",
     *        "help", "history", "keyword", "searchengine", "searchsuggestion",
     *        "switchtab", "remotetab", "extension", "oneoff", "dismiss".
     * @param {UrlbarResult} [details.result] The engaged result. This should be
     *        set to the result related to the picked element.
     * @param {DOMElement} [details.element] The picked view element.
     */
    record(event?: Event, details: {
        searchString?: string;
        selType?: string;
        result?: UrlbarResult;
        element?: DOMElement;
    }): void;
    _discarded: boolean;
    /**
     * Clear the pause impression timer started by startPauseImpressionTimer().
     */
    clearPauseImpressionTimer(): void;
    /**
     * Start a timer that records the pause impression telemetry for given context.
     * The telemetry will be recorded after
     * "browser.urlbar.searchEngagementTelemetry.pauseImpressionIntervalMs" ms.
     * If want to clear this timer, please use clearPauseImpressionTimer().
     *
     * @param {UrlbarQueryContext} queryContext
     *        The query details that will be recorded as pause impression telemetry.
     * @param {string} searchSource
     *        The seach source that will be recorded as pause impression telemetry.
     */
    startPauseImpressionTimer(queryContext: UrlbarQueryContext, searchSource: string): void;
    _pauseImpressionTimer: any;
    _impressionStartEventInfo: {
        timeStamp: any;
        interactionType: any;
        searchString: string;
    };
    _internalRecord(event: any, details: any): void;
    _recordSearchEngagementTelemetry(queryContext: any, method: any, startEventInfo: any, { action, numWords, numChars, provider, reason, searchWords, searchSource, searchMode, selectedElement, selIndex, selType, }: {
        action: any;
        numWords: any;
        numChars: any;
        provider: any;
        reason: any;
        searchWords: any;
        searchSource: any;
        searchMode: any;
        selectedElement: any;
        selIndex: any;
        selType: any;
    }): void;
    /**
     * Add result type to engagementEvent instance exposureResultTypes Set.
     *
     * @param {UrlbarResult} result UrlbarResult to have exposure recorded.
     */
    addExposure(result: UrlbarResult): void;
    _parseSearchString(searchString: any): {
        numChars: any;
        numWords: any;
        searchWords: any;
    };
    /**
     * Checks whether re-searched by modifying some of the keywords from the
     * previous search. Concretely, returns true if there is intersects between
     * both keywords, otherwise returns false. Also, returns false even if both
     * are the same.
     *
     * @param {Set} currentSet The current keywords.
     * @param {Set} [previousSet] The previous keywords.
     * @returns {boolean} true if current searching are refined.
     */
    _isRefined(currentSet: Set<any>, previousSet?: Set<any>): boolean;
    _getStartInteractionType(event: any, searchString: any): any;
    /**
     * Resets the currently tracked user-generated event that was registered via
     * start(), so it won't be recorded.  If there's no tracked event, this is a
     * no-op.
     */
    discard(): void;
    /**
     * Extracts a telemetry type from a result and the element being interacted
     * with for event telemetry.
     *
     * @param {object} result The element to analyze.
     * @param {Element} element The element to analyze.
     * @returns {string} a string type for the telemetry event.
     */
    typeFromElement(result: object, element: Element): string;
    /**
     * Reset the internal state. This function is used for only when testing.
     */
    reset(): void;
    onPrefChanged(pref: any): void;
    #private;
}
export {};
