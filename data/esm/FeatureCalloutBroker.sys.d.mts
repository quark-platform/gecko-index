/**
 * @typedef {Object} FeatureCalloutOptions
 * @property {Window} win window in which messages will be rendered.
 * @property {{name: String, defaultValue?: String}} [pref] optional pref used
 *   to track progress through a given feature tour. for example:
 *   {
 *     name: "browser.pdfjs.feature-tour",
 *     defaultValue: '{ screen: "FEATURE_CALLOUT_1", complete: false }',
 *   }
 *   or { name: "browser.pdfjs.feature-tour" } (defaultValue is optional)
 * @property {String} [location] string to pass as the page when requesting
 *   messages from ASRouter and sending telemetry.
 * @property {MozBrowser} [browser] <browser> element responsible for the
 *   feature callout. for content pages, this is the browser element that the
 *   callout is being shown in. for chrome, this is the active browser.
 * @property {Function} [cleanup] callback to be invoked when the callout is
 *   removed or the window is unloaded.
 * @property {FeatureCalloutTheme} [theme] optional dynamic color theme.
 */
/** @typedef {import("resource:///modules/FeatureCallout.sys.mjs").FeatureCalloutTheme} FeatureCalloutTheme */
/**
 * @typedef {Object} FeatureCalloutItem
 * @property {lazy.FeatureCallout} callout instance of FeatureCallout.
 * @property {Function} [cleanup] cleanup callback.
 * @property {Boolean} showing whether the callout is currently showing.
 */
export class _FeatureCalloutBroker {
    /**
     * Make a new FeatureCallout instance and store it in the callout map. Also
     * add an unload listener to the window to clean up the callout when the
     * window is unloaded.
     * @param {FeatureCalloutOptions} config
     */
    makeFeatureCallout(config: FeatureCalloutOptions): void;
    /**
     * Show a feature callout message. For use by ASRouter, to be invoked when a
     * trigger has matched to a feature_callout message.
     * @param {MozBrowser} browser <browser> element associated with the trigger.
     * @param {Object} message feature_callout message from ASRouter.
     *   @see {@link FeatureCalloutMessages.sys.mjs}
     * @returns {Promise<Boolean>} whether the callout was shown.
     */
    showFeatureCallout(browser: MozBrowser, message: any): Promise<boolean>;
    /**
     * Make a new FeatureCallout instance specific to a special location, tearing
     * down the existing generic FeatureCallout if it exists, and (if no message
     * is passed) requesting a feature callout message to show. Does nothing if a
     * callout is already in progress. This allows the PDF.js feature tour, which
     * simulates content, to be shown in the chrome window without interfering
     * with chrome feature callouts.
     * @param {FeatureCalloutOptions} config
     * @param {Object} message feature_callout message from ASRouter.
     *   @see {@link FeatureCalloutMessages.sys.mjs}
     * @returns {FeatureCalloutItem|null} the callout item, if one was created.
     */
    showCustomFeatureCallout(config: FeatureCalloutOptions, message: any): FeatureCalloutItem | null;
    handleFeatureCalloutCallback(win: any, event: any, data: any): void;
    /** @returns {Boolean} whether a callout is currently showing. */
    get isCalloutShowing(): boolean;
    #private;
}
export const FeatureCalloutBroker: _FeatureCalloutBroker;
export type FeatureCalloutOptions = {
    /**
     * window in which messages will be rendered.
     */
    win: Window;
    /**
     * optional pref used
     * to track progress through a given feature tour. for example:
     * {
     * name: "browser.pdfjs.feature-tour",
     * defaultValue: '{ screen: "FEATURE_CALLOUT_1", complete: false }',
     * }
     * or { name: "browser.pdfjs.feature-tour" } (defaultValue is optional)
     */
    pref?: {
        name: string;
        defaultValue?: string;
    };
    /**
     * string to pass as the page when requesting
     * messages from ASRouter and sending telemetry.
     */
    location?: string;
    /**
     * <browser> element responsible for the
     * feature callout. for content pages, this is the browser element that the
     * callout is being shown in. for chrome, this is the active browser.
     */
    browser?: MozBrowser;
    /**
     * callback to be invoked when the callout is
     * removed or the window is unloaded.
     */
    cleanup?: Function;
    /**
     * optional dynamic color theme.
     */
    theme?: any;
};
export type FeatureCalloutTheme = any;
export type FeatureCalloutItem = {
    /**
     * instance of FeatureCallout.
     */
    callout: lazy.FeatureCallout;
    /**
     * cleanup callback.
     */
    cleanup?: Function;
    /**
     * whether the callout is currently showing.
     */
    showing: boolean;
};
