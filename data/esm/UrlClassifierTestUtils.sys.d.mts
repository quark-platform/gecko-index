export namespace UrlClassifierTestUtils {
    function addTestTrackers(): any;
    function cleanupTestTrackers(): void;
    /**
     * Add some entries to a test tracking protection database, and resets
     * back to the default database after the test ends.
     *
     * @return {Promise}
     */
    function useTestDatabase(table: any): Promise<any>;
    /**
     * Handle the next "urlclassifier-before-block-channel" event.
     * @param {Object} options
     * @param {String} [options.filterOrigin] - Only handle event for channels
     * with matching origin.
     * @param {function} [options.onBeforeBlockChannel] - Optional callback for
     * the event. Called before acting on the channel.
     * @param {("allow"|"replace")} [options.action] - Whether to allow or replace
     * the channel.
     * @returns {Promise} - Resolves once event has been handled.
     */
    function handleBeforeBlockChannel({ filterOrigin, onBeforeBlockChannel, action, }: {
        filterOrigin?: string;
        onBeforeBlockChannel?: Function;
        action?: "replace" | "allow";
    }): Promise<any>;
}
