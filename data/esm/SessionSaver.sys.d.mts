/**
 * The external API implemented by the SessionSaver module.
 */
export const SessionSaver: Readonly<{
    /**
     * Immediately saves the current session to disk.
     */
    run(): any;
    /**
     * Saves the current session to disk delayed by a given amount of time. Should
     * another delayed run be scheduled already, we will ignore the given delay
     * and state saving may occur a little earlier.
     */
    runDelayed(): void;
    /**
     * Sets the last save time to the current time. This will cause us to wait for
     * at least the configured interval when runDelayed() is called next.
     */
    updateLastSaveTime(): void;
    /**
     * Cancels all pending session saves.
     */
    cancel(): void;
}>;
