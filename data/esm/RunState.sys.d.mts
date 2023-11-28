/**
 * This module keeps track of SessionStore's current run state. We will
 * always start out at STATE_STOPPED. After the session was read from disk and
 * the initial browser window has loaded we switch to STATE_RUNNING. On the
 * first notice that a browser shutdown was granted we switch to STATE_QUITTING.
 */
export const RunState: Readonly<{
    readonly isStopped: boolean;
    readonly isRunning: boolean;
    readonly isQuitting: boolean;
    readonly isClosing: boolean;
    readonly isClosed: boolean;
    setRunning(): void;
    setClosing(): void;
    setClosed(): void;
    setQuitting(): void;
}>;
