export namespace GeckoViewTabUtil {
    /**
     * Creates a new tab through service worker delegate.
     * Needs to be ran in a parent process.
     *
     * @param {string} url
     * @returns {Tab}
     * @throws {Error} Throws an error if the tab cannot be created.
     */
    function createNewTab(url?: string): Tab;
}
