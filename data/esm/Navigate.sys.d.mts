/**
 * Returns the multiplier used for the unload timer. Useful for tests which
 * assert the behavior of this timeout.
 */
export function getUnloadTimeoutMultiplier(): any;
/**
 * Wait until the initial load of the given WebProgress is done.
 *
 * @param {WebProgress} webProgress
 *     The WebProgress instance to observe.
 * @param {object=} options
 * @param {boolean=} options.resolveWhenStarted
 *     Flag to indicate that the Promise has to be resolved when the
 *     page load has been started. Otherwise wait until the page has
 *     finished loading. Defaults to `false`.
 * @param {number=} options.unloadTimeout
 *     Time to allow before the page gets unloaded. See ProgressListener options.
 * @returns {Promise}
 *     Promise which resolves when the page load is in the expected state.
 *     Values as returned:
 *       - {nsIURI} currentURI The current URI of the page
 *       - {nsIURI} targetURI Target URI of the navigation
 */
export function waitForInitialNavigationCompleted(webProgress: WebProgress, options?: object | undefined): Promise<any>;
export const DEFAULT_UNLOAD_TIMEOUT: 200;
/**
 * WebProgressListener to observe for page loads.
 */
export class ProgressListener {
    /**
     * Create a new WebProgressListener instance.
     *
     * @param {WebProgress} webProgress
     *     The web progress to attach the listener to.
     * @param {object=} options
     * @param {boolean=} options.expectNavigation
     *     Flag to indicate that a navigation is guaranteed to happen.
     *     When set to `true`, the ProgressListener will ignore options.unloadTimeout
     *     and will only resolve when the expected navigation happens.
     *     Defaults to `false`.
     * @param {boolean=} options.resolveWhenStarted
     *     Flag to indicate that the Promise has to be resolved when the
     *     page load has been started. Otherwise wait until the page has
     *     finished loading. Defaults to `false`.
     * @param {number=} options.unloadTimeout
     *     Time to allow before the page gets unloaded. Defaults to 200ms on
     *     regular platforms. A multiplier will be applied on slower platforms
     *     (eg. debug, ccov...).
     *     Ignored if options.expectNavigation is set to `true`
     * @param {boolean=} options.waitForExplicitStart
     *     Flag to indicate that the Promise can only resolve after receiving a
     *     STATE_START state change. In other words, if the webProgress is already
     *     navigating, the Promise will only resolve for the next navigation.
     *     Defaults to `false`.
     */
    constructor(webProgress: WebProgress, options?: object | undefined);
    get browsingContext(): any;
    get currentURI(): any;
    get isLoadingDocument(): any;
    get isStarted(): boolean;
    get targetURI(): any;
    onStateChange(progress: any, request: any, flag: any, status: any): void;
    onLocationChange(progress: any, request: any, location: any, flag: any): void;
    /**
     * Start observing web progress changes.
     *
     * @returns {Promise}
     *     A promise that will resolve when the navigation has been finished.
     */
    start(): Promise<any>;
    /**
     * Stop observing web progress changes.
     *
     * @param {object=} options
     * @param {Error=} options.error
     *     If specified the navigation promise will be rejected with this error.
     */
    stop(options?: object | undefined): void;
    /**
     * Stop the progress listener if and only if we already detected a navigation
     * start.
     *
     * @param {object=} options
     * @param {Error=} options.error
     *     If specified the navigation promise will be rejected with this error.
     */
    stopIfStarted(options?: object | undefined): void;
    toString(): string;
    get QueryInterface(): any;
    #private;
}
