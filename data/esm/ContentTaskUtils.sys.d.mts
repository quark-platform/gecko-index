export namespace ContentTaskUtils {
    /**
     * Checks if a DOM element is hidden.
     *
     * @param {Element} element
     *        The element which is to be checked.
     *
     * @return {boolean}
     */
    function is_hidden(element: Element): boolean;
    /**
     * Checks if a DOM element is visible.
     *
     * @param {Element} element
     *        The element which is to be checked.
     *
     * @return {boolean}
     */
    function is_visible(element: Element): boolean;
    /**
     * Will poll a condition function until it returns true.
     *
     * @param condition
     *        A condition function that must return true or false. If the
     *        condition ever throws, this is also treated as a false.
     * @param msg
     *        The message to use when the returned promise is rejected.
     *        This message will be extended with additional information
     *        about the number of tries or the thrown exception.
     * @param interval
     *        The time interval to poll the condition function. Defaults
     *        to 100ms.
     * @param maxTries
     *        The number of times to poll before giving up and rejecting
     *        if the condition has not yet returned true. Defaults to 50
     *        (~5 seconds for 100ms intervals)
     * @return Promise
     *        Resolves when condition is true.
     *        Rejects if timeout is exceeded or condition ever throws.
     */
    function waitForCondition(condition: any, msg: any, interval?: number, maxTries?: number): Promise<true>;
    /**
     * Waits for an event to be fired on a specified element.
     *
     * Usage:
     *    let promiseEvent = ContentTasKUtils.waitForEvent(element, "eventName");
     *    // Do some processing here that will cause the event to be fired
     *    // ...
     *    // Now yield until the Promise is fulfilled
     *    let receivedEvent = yield promiseEvent;
     *
     * @param {Element} subject
     *        The element that should receive the event.
     * @param {string} eventName
     *        Name of the event to listen to.
     * @param {bool} capture [optional]
     *        True to use a capturing listener.
     * @param {function} checkFn [optional]
     *        Called with the Event object as argument, should return true if the
     *        event is the expected one, or false if it should be ignored and
     *        listening should continue. If not specified, the first event with
     *        the specified name resolves the returned promise.
     *
     * @note Because this function is intended for testing, any error in checkFn
     *       will cause the returned promise to be rejected instead of waiting for
     *       the next event, since this is probably a bug in the test.
     *
     * @returns {Promise}
     * @resolves The Event object.
     */
    function waitForEvent(subject: Element, eventName: string, capture: bool, checkFn: Function, wantsUntrusted?: boolean): Promise<any>;
    /**
     * Wait until DOM mutations cause the condition expressed in checkFn to pass.
     * Intended as an easy-to-use alternative to waitForCondition.
     *
     * @param {Element} subject
     *        The element on which to observe mutations.
     * @param {Object} options
     *        The options to pass to MutationObserver.observe();
     * @param {function} checkFn [optional]
     *        Function that returns true when it wants the promise to be resolved.
     *        If not specified, the first mutation will resolve the promise.
     *
     * @returns {Promise<void>}
     */
    function waitForMutationCondition(subject: Element, options: any, checkFn: Function): Promise<void>;
    /**
     * Gets an instance of the `EventUtils` helper module for usage in
     * content tasks. See https://searchfox.org/mozilla-central/source/testing/mochitest/tests/SimpleTest/EventUtils.js
     *
     * @param content
     *        The `content` global object from your content task.
     *
     * @returns an EventUtils instance.
     */
    function getEventUtils(content: any): any;
}
