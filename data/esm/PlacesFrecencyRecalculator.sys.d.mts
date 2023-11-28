export class PlacesFrecencyRecalculator {
    classID: any;
    /**
     * This is useful for testing.
     */
    get alternativeFrecencyInfo(): any;
    QueryInterface: any;
    wrappedJSObject: this;
    pendingFrecencyDecayPromise: Promise<void>;
    /**
     * Updates a chunk of outdated frecency values. If there's more frecency
     * values to update at the end of the process, it may rearm the task.
     * @param {Number} chunkSize maximum number of entries to update at a time,
     *   set to -1 to update any entry.
     * @resolves {boolean} Whether any entry was recalculated.
     */
    recalculateSomeFrecencies({ chunkSize }?: number): Promise<boolean>;
    /**
     * Forces full recalculation of any outdated frecency values.
     * This exists for testing purposes; in tests we don't want to wait for
     * the deferred task to run, this can enforce a recalculation.
     */
    recalculateAnyOutdatedFrecencies(): Promise<boolean>;
    /**
     * Whether a recalculation task is pending.
     */
    get isRecalculationPending(): any;
    /**
     * Invoked periodically to eventually start a recalculation task.
     */
    maybeStartFrecencyRecalculation(): void;
    /**
     * Decays frecency and adaptive history.
     * @resolves once the process is complete. Never rejects.
     */
    decay(): Promise<void>;
    observe(subject: any, topic: any, data: any): void;
    #private;
}
