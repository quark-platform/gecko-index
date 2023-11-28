/**
 * Child JSWindowActor to handle navigation for reftests relying on marionette.
 */
export class MarionetteReftestChild {
    _loadedURLPromise: Promise<any>;
    _resolveLoadedURLPromise: (value: any) => void;
    handleEvent(event: any): void;
    actorCreated(): void;
    receiveMessage(msg: any): Promise<boolean | void>;
    /**
     * Wait for a reftest page to be ready for screenshots:
     * - wait for the loadedURL to be available (see handleEvent)
     * - check if the URL matches the expected URL
     * - if present, wait for the "reftest-wait" classname to be removed from the
     *   document element
     *
     * @param {object} options
     * @param {string} options.url
     *        The expected test page URL
     * @param {boolean} options.useRemote
     *        True when using e10s
     * @returns {boolean}
     *         Returns true when the correct page is loaded and ready for
     *         screenshots. Returns false if the page loaded bug does not have the
     *         expected URL.
     */
    reftestWait(options?: {
        url: string;
        useRemote: boolean;
    }): boolean;
    paintComplete({ useRemote, ignoreThrottledAnimations }: {
        useRemote: any;
        ignoreThrottledAnimations: any;
    }): Promise<any>;
    reftestWaitRemoved(): Promise<any>;
    /**
     * Ensure layout is flushed in each frame
     *
     * @param {object} options
     * @param {boolean} options.ignoreThrottledAnimations Don't flush
     *        the layout of throttled animations. We can end up in a
     *        situation where flushing a throttled animation causes
     *        mozAfterPaint events even when all rendering we care about
     *        should have ceased. See
     *        https://searchfox.org/mozilla-central/rev/d58860eb739af613774c942c3bb61754123e449b/layout/tools/reftest/reftest-content.js#723-729
     *        for more detail.
     */
    flushRendering(options?: {
        ignoreThrottledAnimations: boolean;
    }): void;
}
