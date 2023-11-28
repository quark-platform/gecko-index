export class WebDriverProcessDataChild {
    actorCreated(): void;
    didDestroy(): void;
    /**
     * Clean up all the process specific data.
     *
     * @param {object=} options
     * @param {BrowsingContext=} options.browsingContext
     *     If specified only clear data living in that browsing context.
     */
    cleanUp(options?: object | undefined): void;
    /**
     * Get the node cache.
     *
     * @returns {NodeCache}
     *     The cache containing DOM node references.
     */
    getNodeCache(): NodeCache;
    receiveMessage(msg: any): Promise<void>;
    #private;
}
