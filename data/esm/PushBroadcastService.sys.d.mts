export const BroadcastService: {
    new (pushService: any, path: any): {
        PHASES: {
            HELLO: string;
            REGISTER: string;
            BROADCAST: string;
        };
        pushService: any;
        jsonFile: any;
        initializePromise: any;
        /**
         * Convert the listeners from our on-disk format to the format
         * needed by a hello message.
         */
        getListeners(): Promise<{}>;
        _initializeJSONFile(data: any): any;
        /**
         * Reset to a state akin to what you would get in a new profile.
         * In particular, wipe anything from storage.
         *
         * Used mainly for testing.
         */
        _resetListeners(): Promise<void>;
        /**
         * Ensure that a sourceInfo is correct (has the expected fields).
         */
        _validateSourceInfo(sourceInfo: any): void;
        /**
         * Add an entry for a given listener if it isn't present, or update
         * one if it is already present.
         *
         * Note that this means only a single listener can be set for a
         * given subscription. This is a limitation in the current API that
         * stems from the fact that there can only be one source of truth
         * for the subscriber's version. As a workaround, you can define a
         * listener which calls multiple other listeners.
         *
         * @param {string} broadcastId The broadcastID to listen for
         * @param {string} version The most recent version we have for
         *   updates from this broadcastID
         * @param {Object} sourceInfo A description of the handler for
         *   updates on this broadcastID
         */
        addListener(broadcastId: string, version: string, sourceInfo: any): Promise<void>;
        /**
         * Call the listeners of the specified broadcasts.
         *
         * @param {Array<Object>} broadcasts Map between broadcast ids and versions.
         * @param {Object} context Additional information about the context in which the
         *  broadcast notification was originally received. This is transmitted to listeners.
         * @param {String} context.phase One of `BroadcastService.PHASES`
         */
        receivedBroadcastMessage(broadcasts: Array<any>, context: {
            phase: string;
        }): Promise<void>;
        _saveImmediately(): any;
    };
};
export const pushBroadcastService: {
    PHASES: {
        HELLO: string;
        REGISTER: string;
        BROADCAST: string;
    };
    pushService: any;
    jsonFile: any;
    initializePromise: any;
    /**
     * Convert the listeners from our on-disk format to the format
     * needed by a hello message.
     */
    getListeners(): Promise<{}>;
    _initializeJSONFile(data: any): any;
    /**
     * Reset to a state akin to what you would get in a new profile.
     * In particular, wipe anything from storage.
     *
     * Used mainly for testing.
     */
    _resetListeners(): Promise<void>;
    /**
     * Ensure that a sourceInfo is correct (has the expected fields).
     */
    _validateSourceInfo(sourceInfo: any): void;
    /**
     * Add an entry for a given listener if it isn't present, or update
     * one if it is already present.
     *
     * Note that this means only a single listener can be set for a
     * given subscription. This is a limitation in the current API that
     * stems from the fact that there can only be one source of truth
     * for the subscriber's version. As a workaround, you can define a
     * listener which calls multiple other listeners.
     *
     * @param {string} broadcastId The broadcastID to listen for
     * @param {string} version The most recent version we have for
     *   updates from this broadcastID
     * @param {Object} sourceInfo A description of the handler for
     *   updates on this broadcastID
     */
    addListener(broadcastId: string, version: string, sourceInfo: any): Promise<void>;
    /**
     * Call the listeners of the specified broadcasts.
     *
     * @param {Array<Object>} broadcasts Map between broadcast ids and versions.
     * @param {Object} context Additional information about the context in which the
     *  broadcast notification was originally received. This is transmitted to listeners.
     * @param {String} context.phase One of `BroadcastService.PHASES`
     */
    receivedBroadcastMessage(broadcasts: Array<any>, context: {
        phase: string;
    }): Promise<void>;
    _saveImmediately(): any;
};
