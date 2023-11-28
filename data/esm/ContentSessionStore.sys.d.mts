export class ContentSessionStore {
    constructor(mm: any);
    mm: any;
    messageQueue: MessageQueue;
    epoch: number;
    contentRestoreInitialized: boolean;
    handlers: (EventListener | SessionHistoryListener | MessageQueue)[];
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    restoreHistory(data: any): void;
    restoreTabContent({ loadArguments, isRemotenessUpdate, reason }: {
        loadArguments: any;
        isRemotenessUpdate: any;
        reason: any;
    }): void;
    flush({ id }: {
        id: any;
    }): void;
    handleEvent(event: any): void;
    onUnload(): void;
}
/**
 * A message queue that takes collected data and will take care of sending it
 * to the chrome process. It allows flushing using synchronous messages and
 * takes care of any race conditions that might occur because of that. Changes
 * will be batched if they're pushed in quick succession to avoid a message
 * flood.
 */
declare class MessageQueue extends Handler {
    /**
     * A map (string -> lazy fn) holding lazy closures of all queued data
     * collection routines. These functions will return data collected from the
     * docShell.
     */
    _data: Map<any, any>;
    /**
     * The delay (in ms) used to delay sending changes after data has been
     * invalidated.
     */
    BATCH_DELAY_MS: number;
    /**
     * The minimum idle period (in ms) we need for sending data to chrome process.
     */
    NEEDED_IDLE_PERIOD_MS: number;
    /**
     * Timeout for waiting an idle period to send data. We will set this from
     * the pref "browser.sessionstore.interval".
     */
    _timeoutWaitIdlePeriodMs: any;
    /**
     * The current timeout ID, null if there is no queue data. We use timeouts
     * to damp a flood of data changes and send lots of changes as one batch.
     */
    _timeout: any;
    /**
     * Whether or not sending batched messages on a timer is disabled. This should
     * only be used for debugging or testing. If you need to access this value,
     * you should probably use the timeoutDisabled getter.
     */
    _timeoutDisabled: boolean;
    /**
     * True if there is already a send pending idle dispatch, set to prevent
     * scheduling more than one. If false there may or may not be one scheduled.
     */
    _idleScheduled: boolean;
    /**
     * Disables sending batched messages on a timer. Also cancels any pending
     * timers.
     */
    set timeoutDisabled(val: boolean);
    /**
     * True if batched messages are not being fired on a timer. This should only
     * ever be true when debugging or during tests.
     */
    get timeoutDisabled(): boolean;
    uninit(): void;
    /**
     * Cleanup pending idle callback and timer.
     */
    cleanupTimers(): void;
    observe(subject: any, topic: any, data: any): void;
    /**
     * Pushes a given |value| onto the queue. The given |key| represents the type
     * of data that is stored and can override data that has been queued before
     * but has not been sent to the parent process, yet.
     *
     * @param key (string)
     *        A unique identifier specific to the type of data this is passed.
     * @param fn (function)
     *        A function that returns the value that will be sent to the parent
     *        process.
     */
    push(key: any, fn: any): void;
    /**
     * Sends queued data when the remaining idle time is enough or waiting too
     * long; otherwise, request an idle time again. If the |deadline| is not
     * given, this function is going to schedule the first request.
     *
     * @param deadline (object)
     *        An IdleDeadline object passed by idleDispatch().
     */
    sendWhenIdle(deadline: any): void;
    /**
     * Sends queued data to the chrome process.
     *
     * @param options (object)
     *        {flushID: 123} to specify that this is a flush
     *        {isFinal: true} to signal this is the final message sent on unload
     */
    send(options?: {}): void;
}
/**
 * Listens for and handles content events that we need for the
 * session store service to be notified of state changes in content.
 */
declare class EventListener extends Handler {
    handleEvent(event: any): void;
}
/**
 * Listens for changes to the session history. Whenever the user navigates
 * we will collect URLs and everything belonging to session history.
 *
 * Causes a SessionStore:update message to be sent that contains the current
 * session history.
 *
 * Example:
 *   {entries: [{url: "about:mozilla", ...}, ...], index: 1}
 */
declare class SessionHistoryListener extends Handler {
    _fromIdx: number;
    uninit(): void;
    collect(): void;
    collectFrom(idx: any): void;
    handleEvent(event: any): void;
    OnHistoryNewEntry(newURI: any, oldIndex: any): void;
    OnHistoryGotoIndex(): void;
    OnHistoryPurge(): void;
    OnHistoryReload(): boolean;
    OnHistoryReplaceEntry(): void;
    /**
     * @see nsIWebProgressListener.onStateChange
     */
    onStateChange(webProgress: any, request: any, stateFlags: any, status: any): void;
    QueryInterface: any;
}
declare class Handler {
    constructor(store: any);
    store: any;
    get contentRestore(): any;
    get contentRestoreInitialized(): any;
    get mm(): any;
    get messageQueue(): any;
}
export {};
