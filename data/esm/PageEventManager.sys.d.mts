/**
 * Methods for setting up and tearing down page event listeners. These are used
 * to dismiss Feature Callouts when the callout's anchor element is clicked.
 */
export class PageEventManager {
    /**
     * @param {Window} win Window containing the document to listen to
     */
    constructor(win: Window);
    /**
     * A set of parameters defining a page event listener.
     * @typedef {Object} PageEventListenerParams
     * @property {String} type Event type string e.g. `click`
     * @property {String} [selectors] Target selector, e.g. `tag.class, #id[attr]`
     * @property {PageEventListenerOptions} [options] addEventListener options
     *
     * @typedef {Object} PageEventListenerOptions
     * @property {Boolean} [capture] Use event capturing phase?
     * @property {Boolean} [once] Remove listener after first event?
     * @property {Boolean} [preventDefault] Inverted value for `passive` option
     * @property {Number} [interval] Used only for `timeout` and `interval` event
     *   types. These don't set up real event listeners, but instead invoke the
     *   action on a timer.
     *
     * @typedef {Object} PageEventListener
     * @property {Function} callback Function to call when event is triggered
     * @property {AbortController} controller Handle for aborting the listener
     *
     * @typedef {Object} PageEvent
     * @property {String} type Event type string e.g. `click`
     * @property {Element} [target] Event target
     */
    /**
     * Maps event listener params to their PageEventListeners, so they can be
     * called and cancelled.
     * @type {Map<PageEventListenerParams, PageEventListener>}
     */
    _listeners: Map<{
        /**
         * Event type string e.g. `click`
         */
        type: string;
        /**
         * Target selector, e.g. `tag.class, #id[attr]`
         */
        selectors?: string;
        /**
         * addEventListener options
         */
        options?: {
            /**
             * Use event capturing phase?
             */
            capture?: boolean;
            /**
             * Remove listener after first event?
             */
            once?: boolean;
            /**
             * Inverted value for `passive` option
             */
            preventDefault?: boolean;
            /**
             * Used only for `timeout` and `interval` event
             * types. These don't set up real event listeners, but instead invoke the
             * action on a timer.
             */
            interval?: number;
        };
    }, {
        /**
         * Function to call when event is triggered
         */
        callback: Function;
        /**
         * Handle for aborting the listener
         */
        controller: AbortController;
    }>;
    win: Window;
    doc: Document;
    /**
     * Adds a page event listener.
     * @param {PageEventListenerParams} params
     * @param {Function} callback Function to call when event is triggered
     */
    on(params: {
        /**
         * Event type string e.g. `click`
         */
        type: string;
        /**
         * Target selector, e.g. `tag.class, #id[attr]`
         */
        selectors?: string;
        /**
         * addEventListener options
         */
        options?: {
            /**
             * Use event capturing phase?
             */
            capture?: boolean;
            /**
             * Remove listener after first event?
             */
            once?: boolean;
            /**
             * Inverted value for `passive` option
             */
            preventDefault?: boolean;
            /**
             * Used only for `timeout` and `interval` event
             * types. These don't set up real event listeners, but instead invoke the
             * action on a timer.
             */
            interval?: number;
        };
    }, callback: Function): void;
    /**
     * Removes a page event listener.
     * @param {PageEventListenerParams} params
     */
    off(params: {
        /**
         * Event type string e.g. `click`
         */
        type: string;
        /**
         * Target selector, e.g. `tag.class, #id[attr]`
         */
        selectors?: string;
        /**
         * addEventListener options
         */
        options?: {
            /**
             * Use event capturing phase?
             */
            capture?: boolean;
            /**
             * Remove listener after first event?
             */
            once?: boolean;
            /**
             * Inverted value for `passive` option
             */
            preventDefault?: boolean;
            /**
             * Used only for `timeout` and `interval` event
             * types. These don't set up real event listeners, but instead invoke the
             * action on a timer.
             */
            interval?: number;
        };
    }): void;
    /**
     * Adds a page event listener that is removed after the first event.
     * @param {PageEventListenerParams} params
     * @param {Function} callback Function to call when event is triggered
     */
    once(params: {
        /**
         * Event type string e.g. `click`
         */
        type: string;
        /**
         * Target selector, e.g. `tag.class, #id[attr]`
         */
        selectors?: string;
        /**
         * addEventListener options
         */
        options?: {
            /**
             * Use event capturing phase?
             */
            capture?: boolean;
            /**
             * Remove listener after first event?
             */
            once?: boolean;
            /**
             * Inverted value for `passive` option
             */
            preventDefault?: boolean;
            /**
             * Used only for `timeout` and `interval` event
             * types. These don't set up real event listeners, but instead invoke the
             * action on a timer.
             */
            interval?: number;
        };
    }, callback: Function): void;
    /**
     * Removes all page event listeners.
     */
    clear(): void;
    /**
     * Calls matching page event listeners. A way to dispatch a "fake" event.
     * @param {PageEvent} event
     */
    emit(event: {
        /**
         * Event type string e.g. `click`
         */
        type: string;
        /**
         * Event target
         */
        target?: Element;
    }): void;
}
