/**
 * Parent JSWindowActor to handle navigation for reftests relying on marionette.
 */
export class MarionetteReftestParent extends JSWindowActorParent {
    /**
     * Wait for the expected URL to be loaded.
     *
     * @param {string} url
     *        The expected url.
     * @param {boolean} useRemote
     *        True if tests are running with e10s.
     * @returns {boolean} true if the page is fully loaded with the expected url,
     *         false otherwise.
     */
    reftestWait(url: string, useRemote: boolean): boolean;
    /**
     * Call flushRendering on all browsing contexts in the subtree.
     * Each actor will flush rendering in all the same process frames.
     */
    _flushRenderingInSubtree({ ignoreThrottledAnimations }: {
        ignoreThrottledAnimations: any;
    }): Promise<void>;
}
