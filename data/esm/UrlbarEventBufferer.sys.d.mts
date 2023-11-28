/**
 * The UrlbarEventBufferer can queue up events and replay them later, to make
 * the urlbar results more predictable.
 *
 * Search results arrive asynchronously, which means that keydown events may
 * arrive before results do, and therefore not have the effect the user intends.
 * That's especially likely to happen with the down arrow and enter keys, due to
 * the one-off search buttons: if the user very quickly pastes something in the
 * input, presses the down arrow key, and then hits enter, they are probably
 * expecting to visit the first result.  But if there are no results, then
 * pressing down and enter will trigger the first one-off button.
 * To prevent that undesirable behavior, certain keys are buffered and deferred
 * until more results arrive, at which time they're replayed.
 */
export class UrlbarEventBufferer {
    static DEFERRING_TIMEOUT_MS: number;
    /**
     * Initialises the class.
     *
     * @param {UrlbarInput} input The urlbar input object.
     */
    constructor(input: UrlbarInput);
    input: UrlbarInput;
    _eventsQueue: any[];
    _deferringTimeout: any;
    _lastQuery: {
        startDate: any;
        status: number;
        context: any;
    };
    onQueryStarted(queryContext: any): void;
    onQueryCancelled(queryContext: any): void;
    onQueryFinished(queryContext: any): void;
    onQueryResults(queryContext: any): void;
    /**
     * Handles DOM events.
     *
     * @param {Event} event DOM event from the input.
     */
    handleEvent(event: Event): void;
    /**
     * Receives DOM events, eventually queues them up, and calls back when it's
     * the right time to handle the event.
     *
     * @param {Event} event DOM event from the input.
     * @param {Function} callback to be invoked when it's the right time to handle
     *        the event.
     */
    maybeDeferEvent(event: Event, callback: Function): void;
    /**
     * Adds a deferrable event to the deferred event queue.
     *
     * @param {Event} event The event to defer.
     * @param {Function} callback to be invoked when it's the right time to handle
     *        the event.
     */
    deferEvent(event: Event, callback: Function): void;
    /**
     * Replays deferred key events.
     *
     * @param {boolean} onlyIfSafe replays only if it's a safe time to do so.
     *        Setting this to false will replay all the queue events, without any
     *        checks, that is something we want to do only if the deferring
     *        timeout elapsed, and we don't want to appear ignoring user's input.
     */
    replayDeferredEvents(onlyIfSafe: boolean): void;
    /**
     * Checks whether a given event should be deferred
     *
     * @param {Event} event The event that should maybe be deferred.
     * @returns {boolean} Whether the event should be deferred.
     */
    shouldDeferEvent(event: Event): boolean;
    /**
     * Checks if the bufferer is deferring events.
     *
     * @returns {boolean} Whether the bufferer is deferring events.
     */
    get isDeferringEvents(): boolean;
    /**
     * Checks if any of the current query provider asked to defer user selection
     * events.
     *
     * @returns {boolean} Whether a provider asked to defer events.
     */
    get waitingDeferUserSelectionProviders(): boolean;
    /**
     * Returns true if the given deferred event can be played now without possibly
     * surprising the user.  This depends on the state of the view, the results,
     * and the type of event.
     * Use this method only after determining that the event should be deferred,
     * or after it has been deferred and you want to know if it can be played now.
     *
     * @param {Event} event The event.
     * @returns {boolean} Whether the event can be played.
     */
    isSafeToPlayDeferredEvent(event: Event): boolean;
    get lastResultIsSelected(): boolean;
}
