export class TargetList {
    _targets: Map<any, any>;
    /**
     * Start listing and listening for all the debuggable targets
     */
    watchForTargets(): Promise<void>;
    unwatchForTargets(): void;
    /**
     * Watch for all existing and new tabs being opened.
     * So that we can create the related TabTarget instance for
     * each of them.
     */
    watchForTabs(): Promise<void>;
    tabObserver: any;
    unwatchForTabs(): void;
    /**
     * To be called right after instantiating a new Target instance.
     * This will hold the new instance in the list and notify about
     * its creation.
     */
    registerTarget(target: any): void;
    /**
     * To be called when the debuggable target has been destroy.
     * So that we can notify it no longer exists and disconnect
     * all connecting made to debug it.
     */
    destroyTarget(target: any): void;
    /**
     * Destroy all the registered target of all kinds.
     * This will end up dropping all connections made to debug any of them.
     */
    destructor(): void;
    mainProcessTarget: any;
    get size(): number;
    /**
     * Get Target instance by target id
     *
     * @param {string} id
     *     Target id
     *
     * @returns {Target}
     */
    getById(id: string): Target;
    /**
     * Get the Target instance for the main process.
     * This target is a singleton and only exposes a subset of domains.
     */
    getMainProcessTarget(): any;
    toJSON(): any[];
    toString(): string;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
