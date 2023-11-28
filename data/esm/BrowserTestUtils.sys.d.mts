export namespace BrowserTestUtils {
    /**
     * Loads a page in a new tab, executes a Task and closes the tab.
     *
     * @param {Object|String} options
     *        If this is a string it is the url to open and will be opened in the
     *        currently active browser window.
     * @param {tabbrowser} [options.gBrowser
     *        A reference to the ``tabbrowser`` element where the new tab should
     *        be opened,
     * @param {string} options.url
     *        The URL of the page to load.
     * @param {Function} taskFn
     *        Async function representing that will be executed while
     *        the tab is loaded. The first argument passed to the function is a
     *        reference to the browser object for the new tab.
     *
     * @return {Any} Returns the value that is returned from taskFn.
     * @resolves When the tab has been closed.
     * @rejects Any exception from taskFn is propagated.
     */
    function withNewTab(options: any, taskFn: Function): Any;
    /**
     * Opens a new tab in the foreground.
     *
     * This function takes an options object (which is preferred) or actual
     * parameters. The names of the options must correspond to the names below.
     * gBrowser is required and all other options are optional.
     *
     * @param {tabbrowser} gBrowser
     *        The tabbrowser to open the tab new in.
     * @param {string} opening (or url)
     *        May be either a string URL to load in the tab, or a function that
     *        will be called to open a foreground tab. Defaults to "about:blank".
     * @param {boolean} waitForLoad
     *        True to wait for the page in the new tab to load. Defaults to true.
     * @param {boolean} waitForStateStop
     *        True to wait for the web progress listener to send STATE_STOP for the
     *        document in the tab. Defaults to false.
     * @param {boolean} forceNewProcess
     *        True to force the new tab to load in a new process. Defaults to
     *        false.
     *
     * @return {Promise}
     *         Resolves when the tab is ready and loaded as necessary.
     * @resolves The new tab.
     */
    function openNewForegroundTab(tabbrowser: any, ...args: any[]): Promise<any>;
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
     * If the argument is a browsingContext, return it. If the
     * argument is a browser/frame, returns the browsing context for it.
     */
    function getBrowsingContextFrom(browser: any): any;
    /**
     * Switches to a tab and resolves when it is ready.
     *
     * @param {tabbrowser} tabbrowser
     *        The tabbrowser.
     * @param {tab} tab
     *        Either a tab element to switch to or a function to perform the switch.
     *
     * @return {Promise}
     *         Resolves when the tab has been switched to.
     * @resolves The tab switched to.
     */
    function switchTab(tabbrowser: any, tab: any): Promise<any>;
    /**
     * Waits for an ongoing page load in a browser window to complete.
     *
     * This can be used in conjunction with any synchronous method for starting a
     * load, like the "addTab" method on "tabbrowser", and must be called before
     * yielding control to the event loop. Note that calling this after multiple
     * successive load operations can be racy, so ``wantLoad`` should be specified
     * in these cases.
     *
     * This function works by listening for custom load events on ``browser``. These
     * are sent by a BrowserTestUtils window actor in response to "load" and
     * "DOMContentLoaded" content events.
     *
     * @param {xul:browser} browser
     *        A xul:browser.
     * @param {Boolean} [includeSubFrames = false]
     *        A boolean indicating if loads from subframes should be included.
     * @param {string|function} [wantLoad = null]
     *        If a function, takes a URL and returns true if that's the load we're
     *        interested in. If a string, gives the URL of the load we're interested
     *        in. If not present, the first load resolves the promise.
     * @param {boolean} [maybeErrorPage = false]
     *        If true, this uses DOMContentLoaded event instead of load event.
     *        Also wantLoad will be called with visible URL, instead of
     *        'about:neterror?...' for error page.
     *
     * @return {Promise}
     * @resolves When a load event is triggered for the browser.
     */
    function browserLoaded(browser: any, includeSubFrames?: boolean, wantLoad?: string | Function, maybeErrorPage?: boolean): Promise<any>;
    /**
     * Waits for the selected browser to load in a new window. This
     * is most useful when you've got a window that might not have
     * loaded its DOM yet, and where you can't easily use browserLoaded
     * on gBrowser.selectedBrowser since gBrowser doesn't yet exist.
     *
     * @param {xul:window} window
     *        A newly opened window for which we're waiting for the
     *        first browser load.
     * @param {Boolean} aboutBlank [optional]
     *        If false, about:blank loads are ignored and we continue
     *        to wait.
     * @param {function|null} checkFn [optional]
     *        If checkFn(browser) returns false, the load is ignored
     *        and we continue to wait.
     *
     * @return {Promise}
     * @resolves Once the selected browser fires its load event.
     */
    function firstBrowserLoaded(win: any, aboutBlank?: boolean, checkFn?: Function): Promise<any>;
    let _webProgressListeners: Set<any>;
    let _contentEventListenerSharedState: Map<any, any>;
    let _contentEventListeners: Map<any, any>;
    /**
     * Waits for the web progress listener associated with this tab to fire a
     * state change that matches checkFn for the toplevel document.
     *
     * @param {xul:browser} browser
     *        A xul:browser.
     * @param {String} expectedURI (optional)
     *        A specific URL to check the channel load against
     * @param {Function} checkFn
     *        If checkFn(aStateFlags, aStatus) returns false, the state change
     *        is ignored and we continue to wait.
     *
     * @return {Promise}
     * @resolves When the desired state change reaches the tab's progress listener
     */
    function waitForBrowserStateChange(browser: any, expectedURI: string, checkFn: Function): Promise<any>;
    /**
     * Waits for the web progress listener associated with this tab to fire a
     * STATE_STOP for the toplevel document.
     *
     * @param {xul:browser} browser
     *        A xul:browser.
     * @param {String} expectedURI (optional)
     *        A specific URL to check the channel load against
     * @param {Boolean} checkAborts (optional, defaults to false)
     *        Whether NS_BINDING_ABORTED stops 'count' as 'real' stops
     *        (e.g. caused by the stop button or equivalent APIs)
     *
     * @return {Promise}
     * @resolves When STATE_STOP reaches the tab's progress listener
     */
    function browserStopped(browser: any, expectedURI: string, checkAborts?: boolean): Promise<any>;
    /**
     * Waits for the web progress listener associated with this tab to fire a
     * STATE_START for the toplevel document.
     *
     * @param {xul:browser} browser
     *        A xul:browser.
     * @param {String} expectedURI (optional)
     *        A specific URL to check the channel load against
     *
     * @return {Promise}
     * @resolves When STATE_START reaches the tab's progress listener
     */
    function browserStarted(browser: any, expectedURI: string): Promise<any>;
    /**
     * Waits for a tab to open and load a given URL.
     *
     * By default, the method doesn't wait for the tab contents to load.
     *
     * @param {tabbrowser} tabbrowser
     *        The tabbrowser to look for the next new tab in.
     * @param {string|function} [wantLoad = null]
     *        If a function, takes a URL and returns true if that's the load we're
     *        interested in. If a string, gives the URL of the load we're interested
     *        in. If not present, the first non-about:blank load is used.
     * @param {boolean} [waitForLoad = false]
     *        True to wait for the page in the new tab to load. Defaults to false.
     * @param {boolean} [waitForAnyTab = false]
     *        True to wait for the url to be loaded in any new tab, not just the next
     *        one opened.
     *
     * @return {Promise}
     * @resolves With the {xul:tab} when a tab is opened and its location changes
     *           to the given URL and optionally that browser has loaded.
     *
     * NB: this method will not work if you open a new tab with e.g. BrowserOpenTab
     * and the tab does not load a URL, because no onLocationChange will fire.
     */
    function waitForNewTab(tabbrowser: any, wantLoad?: string | Function, waitForLoad?: boolean, waitForAnyTab?: boolean): Promise<any>;
    /**
     * Waits for onLocationChange.
     *
     * @param {tabbrowser} tabbrowser
     *        The tabbrowser to wait for the location change on.
     * @param {string} url
     *        The string URL to look for. The URL must match the URL in the
     *        location bar exactly.
     * @return {Promise}
     * @resolves When onLocationChange fires.
     */
    function waitForLocationChange(tabbrowser: any, url: string): Promise<any>;
    /**
     * Waits for the next browser window to open and be fully loaded.
     *
     * @param {Object} aParams
     * @param {string} [aParams.url]
     *        The url to await being loaded. If unset this may or may not wait for
     *        any page to be loaded, according to the waitForAnyURLLoaded param.
     * @param {bool} [aParams.waitForAnyURLLoaded] When `url` is unset, this
     *        controls whether to wait for any initial URL to be loaded.
     *        Defaults to false, that means the initial browser may or may not
     *        have finished loading its first page when this resolves.
     *        When `url` is set, this is ignored, thus the load is always awaited for.
     * @param {bool} [aParams.anyWindow]
     * @param {bool} [aParams.maybeErrorPage]
     *        See ``browserLoaded`` function.
     * @return {Promise}
     *         A Promise which resolves the next time that a DOM window
     *         opens and the delayed startup observer notification fires.
     */
    function waitForNewWindow(aParams?: {
        url?: string;
        waitForAnyURLLoaded?: bool;
        anyWindow?: bool;
        maybeErrorPage?: bool;
    }): Promise<any>;
    /**
     * Starts the load of a new URI in the given browser, triggered by the system
     * principal.
     * Note this won't want for the load to be complete. For that you may either
     * use BrowserTestUtils.browserLoaded(), BrowserTestUtils.waitForErrorPage(),
     * or make your own handler.
     *
     * @param {xul:browser} browser
     *        A xul:browser.
     * @param {string} uri
     *        The URI to load.
     */
    function startLoadingURIString(browser: any, uri: string): void;
    /**
     * Maybe create a preloaded browser and ensure it's finished loading.
     *
     * @param gBrowser (<xul:tabbrowser>)
     *        The tabbrowser in which to preload a browser.
     */
    function maybeCreatePreloadedBrowser(gBrowser: any): Promise<void>;
    /**
     * @param win (optional)
     *        The window we should wait to have "domwindowopened" sent through
     *        the observer service for. If this is not supplied, we'll just
     *        resolve when the first "domwindowopened" notification is seen.
     * @param {function} checkFn [optional]
     *        Called with the nsIDOMWindow object as argument, should return true
     *        if the event is the expected one, or false if it should be ignored
     *        and observing should continue. If not specified, the first window
     *        resolves the returned promise.
     * @return {Promise}
     *         A Promise which resolves when a "domwindowopened" notification
     *         has been fired by the window watcher.
     */
    function domWindowOpened(win: any, checkFn: Function): Promise<any>;
    /**
     * @param win (optional)
     *        The window we should wait to have "domwindowopened" sent through
     *        the observer service for. If this is not supplied, we'll just
     *        resolve when the first "domwindowopened" notification is seen.
     *        The promise will be resolved once the new window's document has been
     *        loaded.
     *
     * @param {function} checkFn (optional)
     *        Called with the nsIDOMWindow object as argument, should return true
     *        if the event is the expected one, or false if it should be ignored
     *        and observing should continue. If not specified, the first window
     *        resolves the returned promise.
     *
     * @return {Promise}
     *         A Promise which resolves when a "domwindowopened" notification
     *         has been fired by the window watcher.
     */
    function domWindowOpenedAndLoaded(win: any, checkFn: Function): Promise<any>;
    /**
     * @param win (optional)
     *        The window we should wait to have "domwindowclosed" sent through
     *        the observer service for. If this is not supplied, we'll just
     *        resolve when the first "domwindowclosed" notification is seen.
     * @return {Promise}
     *         A Promise which resolves when a "domwindowclosed" notification
     *         has been fired by the window watcher.
     */
    function domWindowClosed(win: any): Promise<any>;
    /**
     * Open a new browser window from an existing one.
     * This relies on OpenBrowserWindow in browser.js, and waits for the window
     * to be completely loaded before resolving.
     *
     * @param {Object} options
     *        Options to pass to OpenBrowserWindow. Additionally, supports:
     * @param {bool} options.waitForTabURL
     *          Forces the initial browserLoaded check to wait for the tab to
     *          load the given URL (instead of about:blank)
     *
     * @return {Promise}
     *         Resolves with the new window once it is loaded.
     */
    function openNewBrowserWindow(options?: {
        waitForTabURL: bool;
    }): Promise<any>;
    /**
     * Closes a window.
     *
     * @param {Window} win
     *        A window to close.
     *
     * @return {Promise}
     *         Resolves when the provided window has been closed. For browser
     *         windows, the Promise will also wait until all final SessionStore
     *         messages have been sent up from all browser tabs.
     */
    function closeWindow(win: Window): Promise<any>;
    /**
     * Returns a Promise that resolves when a window has finished closing.
     *
     * @param {Window} win
     *        The closing window.
     *
     * @return {Promise}
     *        Resolves when the provided window has been fully closed. For
     *        browser windows, the Promise will also wait until all final
     *        SessionStore messages have been sent up from all browser tabs.
     */
    function windowClosed(win: Window): Promise<any>;
    /**
     * Returns a Promise that resolves once the SessionStore information for the
     * given tab is updated and all listeners are called.
     *
     * @param {xul:tab} tab
     *        The tab that will be removed.
     * @returns {Promise}
     * @resolves When the SessionStore information is updated.
     */
    function waitForSessionStoreUpdate(tab: any): Promise<any>;
    /**
     * Waits for an event to be fired on a specified element.
     *
     * @example
     *
     *    let promiseEvent = BrowserTestUtils.waitForEvent(element, "eventName");
     *    // Do some processing here that will cause the event to be fired
     *    // ...
     *    // Now wait until the Promise is fulfilled
     *    let receivedEvent = await promiseEvent;
     *
     * @example
     *    // The promise resolution/rejection handler for the returned promise is
     *    // guaranteed not to be called until the next event tick after the event
     *    // listener gets called, so that all other event listeners for the element
     *    // are executed before the handler is executed.
     *
     *    let promiseEvent = BrowserTestUtils.waitForEvent(element, "eventName");
     *    // Same event tick here.
     *    await promiseEvent;
     *    // Next event tick here.
     *
     * @example
     *    // If some code, such like adding yet another event listener, needs to be
     *    // executed in the same event tick, use raw addEventListener instead and
     *    // place the code inside the event listener.
     *
     *    element.addEventListener("load", () => {
     *      // Add yet another event listener in the same event tick as the load
     *      // event listener.
     *      p = BrowserTestUtils.waitForEvent(element, "ready");
     *    }, { once: true });
     *
     * @param {Element} subject
     *        The element that should receive the event.
     * @param {string} eventName
     *        Name of the event to listen to.
     * @param {bool} [capture]
     *        True to use a capturing listener.
     * @param {function} [checkFn]
     *        Called with the Event object as argument, should return true if the
     *        event is the expected one, or false if it should be ignored and
     *        listening should continue. If not specified, the first event with
     *        the specified name resolves the returned promise.
     * @param {bool} [wantsUntrusted=false]
     *        True to receive synthetic events dispatched by web content.
     *
     * @note Because this function is intended for testing, any error in checkFn
     *       will cause the returned promise to be rejected instead of waiting for
     *       the next event, since this is probably a bug in the test.
     *
     * @returns {Promise}
     * @resolves The Event object.
     */
    function waitForEvent(subject: Element, eventName: string, capture?: bool, checkFn?: Function, wantsUntrusted?: bool): Promise<any>;
    /**
     * Like waitForEvent, but adds the event listener to the message manager
     * global for browser.
     *
     * @param {string} eventName
     *        Name of the event to listen to.
     * @param {bool} capture [optional]
     *        Whether to use a capturing listener.
     * @param {function} checkFn [optional]
     *        Called with the Event object as argument, should return true if the
     *        event is the expected one, or false if it should be ignored and
     *        listening should continue. If not specified, the first event with
     *        the specified name resolves the returned promise.
     * @param {bool} wantUntrusted [optional]
     *        Whether to accept untrusted events
     *
     * @note As of bug 1588193, this function no longer rejects the returned
     *       promise in the case of a checkFn error. Instead, since checkFn is now
     *       called through eval in the content process, the error is thrown in
     *       the listener created by ContentEventListenerChild. Work to improve
     *       error handling (eg. to reject the promise as before and to preserve
     *       the filename/stack) is being tracked in bug 1593811.
     *
     * @returns {Promise}
     */
    function waitForContentEvent(browser: any, eventName: string, capture: bool, checkFn: Function, wantUntrusted?: bool): Promise<any>;
    /**
     * Like waitForEvent, but acts on a popup. It ensures the popup is not already
     * in the expected state.
     *
     * @param {Element} popup
     *        The popup element that should receive the event.
     * @param {string} eventSuffix
     *        The event suffix expected to be received, one of "shown" or "hidden".
     * @returns {Promise}
     */
    function waitForPopupEvent(popup: Element, eventSuffix: string): Promise<any>;
    /**
     * Waits for the select popup to be shown. This is needed because the select
     * dropdown is created lazily.
     *
     * @param {Window} win
     *        A window to expect the popup in.
     *
     * @return {Promise}
     *        Resolves when the popup has been fully opened. The resolution value
     *        is the select popup.
     */
    function waitForSelectPopupShown(win: Window): Promise<any>;
    /**
     * Waits for the datetime picker popup to be shown.
     *
     * @param {Window} win
     *        A window to expect the popup in.
     *
     * @return {Promise}
     *        Resolves when the popup has been fully opened. The resolution value
     *        is the select popup.
     */
    function waitForDateTimePickerPanelShown(win: Window): Promise<any>;
    /**
     * Adds a content event listener on the given browser
     * element. Similar to waitForContentEvent, but the listener will
     * fire until it is removed. A callable object is returned that,
     * when called, removes the event listener. Note that this function
     * works even if the browser's frameloader is swapped.
     *
     * @param {xul:browser} browser
     *        The browser element to listen for events in.
     * @param {string} eventName
     *        Name of the event to listen to.
     * @param {function} listener
     *        Function to call in parent process when event fires.
     *        Not passed any arguments.
     * @param {object} listenerOptions [optional]
     *        Options to pass to the event listener.
     * @param {function} checkFn [optional]
     *        Called with the Event object as argument, should return true if the
     *        event is the expected one, or false if it should be ignored and
     *        listening should continue. If not specified, the first event with
     *        the specified name resolves the returned promise. This is called
     *        within the content process and can have no closure environment.
     *
     * @returns function
     *        If called, the return value will remove the event listener.
     */
    function addContentEventListener(browser: any, eventName: string, listener: Function, listenerOptions: any, checkFn: Function): () => void;
    /**
     * This is an internal method to be invoked by
     * BrowserTestUtilsParent.sys.mjs when a content event we were listening for
     * happens.
     *
     * @private
     */
    function _receivedContentEventListener(listenerId: any, browserId: any): void;
    /**
     * This is an internal method that cleans up any state from content event
     * listeners.
     *
     * @private
     */
    function _cleanupContentEventListeners(): void;
    function observe(subject: any, topic: any, data: any): void;
    /**
     * Wait until DOM mutations cause the condition expressed in checkFn
     * to pass.
     *
     * Intended as an easy-to-use alternative to waitForCondition.
     *
     * @param {Element} target    The target in which to observe mutations.
     * @param {Object}  options   The options to pass to MutationObserver.observe();
     * @param {function} checkFn  Function that returns true when it wants the promise to be
     * resolved.
     */
    function waitForMutationCondition(target: Element, options: any, checkFn: Function): Promise<any>;
    /**
     * Like browserLoaded, but waits for an error page to appear.
     *
     * @param {xul:browser} browser
     *        A xul:browser.
     *
     * @return {Promise}
     * @resolves When an error page has been loaded in the browser.
     */
    function waitForErrorPage(browser: any): Promise<any>;
    /**
     * Waits for the next top-level document load in the current browser.  The URI
     * of the document is compared against expectedURL.  The load is then stopped
     * before it actually starts.
     *
     * @param {string} expectedURL
     *        The URL of the document that is expected to load.
     * @param {object} browser
     *        The browser to wait for.
     * @param {function} checkFn (optional)
     *        Function to run on the channel before stopping it.
     * @returns {Promise}
     */
    function waitForDocLoadAndStopIt(expectedURL: string, browser: any, checkFn: Function): Promise<any>;
    /**
     *  Versions of EventUtils.jsm synthesizeMouse functions that synthesize a
     *  mouse event in a child process and return promises that resolve when the
     *  event has fired and completed. Instead of a window, a browser or
     *  browsing context is required to be passed to this function.
     *
     * @param target
     *        One of the following:
     *        - a selector string that identifies the element to target. The syntax is as
     *          for querySelector.
     *        - a function to be run in the content process that returns the element to
     *        target
     *        - null, in which case the offset is from the content document's edge.
     * @param {integer} offsetX
     *        x offset from target's left bounding edge
     * @param {integer} offsetY
     *        y offset from target's top bounding edge
     * @param {Object} event object
     *        Additional arguments, similar to the EventUtils.jsm version
     * @param {BrowserContext|MozFrameLoaderOwner} browsingContext
     *        Browsing context or browser element, must not be null
     * @param {boolean} handlingUserInput
     *        Whether the synthesize should be perfomed while simulating
     *        user interaction (making windowUtils.isHandlingUserInput be true).
     *
     * @returns {Promise}
     * @resolves True if the mouse event was cancelled.
     */
    function synthesizeMouse(target: any, offsetX: integer, offsetY: integer, event: any, browsingContext: any, handlingUserInput: boolean): Promise<any>;
    /**
     *  Versions of EventUtils.jsm synthesizeTouch functions that synthesize a
     *  touch event in a child process and return promises that resolve when the
     *  event has fired and completed. Instead of a window, a browser or
     *  browsing context is required to be passed to this function.
     *
     * @param target
     *        One of the following:
     *        - a selector string that identifies the element to target. The syntax is as
     *          for querySelector.
     *        - a function to be run in the content process that returns the element to
     *        target
     *        - null, in which case the offset is from the content document's edge.
     * @param {integer} offsetX
     *        x offset from target's left bounding edge
     * @param {integer} offsetY
     *        y offset from target's top bounding edge
     * @param {Object} event object
     *        Additional arguments, similar to the EventUtils.jsm version
     * @param {BrowserContext|MozFrameLoaderOwner} browsingContext
     *        Browsing context or browser element, must not be null
     *
     * @returns {Promise}
     * @resolves True if the touch event was cancelled.
     */
    function synthesizeTouch(target: any, offsetX: integer, offsetY: integer, event: any, browsingContext: any): Promise<any>;
    /**
     * Wait for a message to be fired from a particular message manager
     *
     * @param {nsIMessageManager} messageManager
     *                            The message manager that should be used.
     * @param {String}            message
     *                            The message we're waiting for.
     * @param {Function}          checkFn (optional)
     *                            Optional function to invoke to check the message.
     */
    function waitForMessage(messageManager: nsIMessageManager, message: string, checkFn: Function): Promise<any>;
    /**
     *  Version of synthesizeMouse that uses the center of the target as the mouse
     *  location. Arguments and the return value are the same.
     */
    function synthesizeMouseAtCenter(target: any, event: any, browsingContext: any): Promise<any>;
    /**
     *  Version of synthesizeMouse that uses a client point within the child
     *  window instead of a target as the offset. Otherwise, the arguments and
     *  return value are the same as synthesizeMouse.
     */
    function synthesizeMouseAtPoint(offsetX: any, offsetY: any, event: any, browsingContext: any): Promise<any>;
    /**
     * Removes the given tab from its parent tabbrowser.
     * This method doesn't SessionStore etc.
     *
     * @param (tab) tab
     *        The tab to remove.
     * @param (Object) options
     *        Extra options to pass to tabbrowser's removeTab method.
     */
    function removeTab(tab: any, options?: {}): void;
    /**
     * Returns a Promise that resolves once the tab starts closing.
     *
     * @param (tab) tab
     *        The tab that will be removed.
     * @returns (Promise)
     * @resolves When the tab starts closing. Does not get passed a value.
     */
    function waitForTabClosing(tab: any): Promise<any>;
    /**
     *
     * @param {tab} tab
     *        The tab that will be reloaded.
     * @param {Boolean} [includeSubFrames = false]
     *        A boolean indicating if loads from subframes should be included
     *        when waiting for the frame to reload.
     * @returns {Promise}
     * @resolves When the tab finishes reloading.
     */
    function reloadTab(tab: any, includeSubFrames?: boolean): Promise<any>;
    /**
     * Create enough tabs to cause a tab overflow in the given window.
     * @param {Function} registerCleanupFunction
     *    The test framework doesn't keep its cleanup stuff anywhere accessible,
     *    so the first argument is a reference to your cleanup registration
     *    function, allowing us to clean up after you if necessary.
     * @param {Window} win
     *    The window where the tabs need to be overflowed.
     * @param {object} params [optional]
     *        Parameters object for BrowserTestUtils.overflowTabs.
     *        overflowAtStart: bool
     *          Determines whether the new tabs are added at the beginning of the
     *          URL bar or at the end of it.
     *        overflowTabFactor: 3 | 1.1
     *          Factor that helps in determining the tab count for overflow.
     */
    function overflowTabs(registerCleanupFunction: Function, win: Window, params?: any): Promise<void>;
    /**
     * Crashes a remote frame tab and cleans up the generated minidumps.
     * Resolves with the data from the .extra file (the crash annotations).
     *
     * @param (Browser) browser
     *        A remote <xul:browser> element. Must not be null.
     * @param (bool) shouldShowTabCrashPage
     *        True if it is expected that the tab crashed page will be shown
     *        for this browser. If so, the Promise will only resolve once the
     *        tab crash page has loaded.
     * @param (bool) shouldClearMinidumps
     *        True if the minidumps left behind by the crash should be removed.
     * @param (BrowsingContext) browsingContext
     *        The context where the frame leaves. Default to
     *        top level context if not supplied.
     * @param (object?) options
     *        An object with any of the following fields:
     *          crashType: "CRASH_INVALID_POINTER_DEREF" | "CRASH_OOM"
     *            The type of crash. If unspecified, default to "CRASH_INVALID_POINTER_DEREF"
     *          asyncCrash: bool
     *            If specified and `true`, cause the crash asynchronously.
     *
     * @returns (Promise)
     * @resolves An Object with key-value pairs representing the data from the
     *           crash report's extra file (if applicable).
     */
    function crashFrame(browser: any, shouldShowTabCrashPage: boolean, shouldClearMinidumps: boolean, browsingContext: any, options?: {}): Promise<{}>;
    /**
     * Attempts to simulate a launch fail by crashing a browser, but
     * stripping the browser of its childID so that the TabCrashHandler
     * thinks it was a launch fail.
     *
     * @param browser (<xul:browser>)
     *   The browser to simulate a content process launch failure on.
     * @return Promise
     * @resolves undefined
     *   Resolves when the TabCrashHandler should be done handling the
     *   simulated crash.
     */
    function simulateProcessLaunchFail(browser: any, dueToBuildIDMismatch?: boolean): Promise<any>;
    /**
     * Returns a promise that is resolved when element gains attribute (or,
     * optionally, when it is set to value).
     * @param {String} attr
     *        The attribute to wait for
     * @param {Element} element
     *        The element which should gain the attribute
     * @param {String} value (optional)
     *        Optional, the value the attribute should have.
     *
     * @returns {Promise}
     */
    function waitForAttribute(attr: string, element: Element, value: string): Promise<any>;
    /**
     * Returns a promise that is resolved when element loses an attribute.
     * @param {String} attr
     *        The attribute to wait for
     * @param {Element} element
     *        The element which should lose the attribute
     *
     * @returns {Promise}
     */
    function waitForAttributeRemoval(attr: string, element: Element): Promise<any>;
    /**
     * Version of EventUtils' `sendChar` function; it will synthesize a keypress
     * event in a child process and returns a Promise that will resolve when the
     * event was fired. Instead of a Window, a Browser or Browsing Context
     * is required to be passed to this function.
     *
     * @param {String} char
     *        A character for the keypress event that is sent to the browser.
     * @param {BrowserContext|MozFrameLoaderOwner} browsingContext
     *        Browsing context or browser element, must not be null
     *
     * @returns {Promise}
     * @resolves True if the keypress event was synthesized.
     */
    function sendChar(char: string, browsingContext: any): Promise<any>;
    /**
     * Version of EventUtils' `synthesizeKey` function; it will synthesize a key
     * event in a child process and returns a Promise that will resolve when the
     * event was fired. Instead of a Window, a Browser or Browsing Context
     * is required to be passed to this function.
     *
     * @param {String} key
     *        See the documentation available for EventUtils#synthesizeKey.
     * @param {Object} event
     *        See the documentation available for EventUtils#synthesizeKey.
     * @param {BrowserContext|MozFrameLoaderOwner} browsingContext
     *        Browsing context or browser element, must not be null
     *
     * @returns {Promise}
     */
    function synthesizeKey(key: string, event: any, browsingContext: any): Promise<any>;
    /**
     * Version of EventUtils' `synthesizeComposition` function; it will synthesize
     * a composition event in a child process and returns a Promise that will
     * resolve when the event was fired. Instead of a Window, a Browser or
     * Browsing Context is required to be passed to this function.
     *
     * @param {Object} event
     *        See the documentation available for EventUtils#synthesizeComposition.
     * @param {BrowserContext|MozFrameLoaderOwner} browsingContext
     *        Browsing context or browser element, must not be null
     *
     * @returns {Promise}
     * @resolves False if the composition event could not be synthesized.
     */
    function synthesizeComposition(event: any, browsingContext: any): Promise<any>;
    /**
     * Version of EventUtils' `synthesizeCompositionChange` function; it will
     * synthesize a compositionchange event in a child process and returns a
     * Promise that will resolve when the event was fired. Instead of a Window, a
     * Browser or Browsing Context object is required to be passed to this function.
     *
     * @param {Object} event
     *        See the documentation available for EventUtils#synthesizeCompositionChange.
     * @param {BrowserContext|MozFrameLoaderOwner} browsingContext
     *        Browsing context or browser element, must not be null
     *
     * @returns {Promise}
     */
    function synthesizeCompositionChange(event: any, browsingContext: any): Promise<any>;
    let waitForCondition: any;
    /**
     * Waits for a <xul:notification> with a particular value to appear
     * for the <xul:notificationbox> of the passed in browser.
     *
     * @param {xul:tabbrowser} tabbrowser
     *        The gBrowser that hosts the browser that should show
     *        the notification. For most tests, this will probably be
     *        gBrowser.
     * @param {xul:browser} browser
     *        The browser that should be showing the notification.
     * @param {String} notificationValue
     *        The "value" of the notification, which is often used as
     *        a unique identifier. Example: "plugin-crashed".
     *
     * @return {Promise}
     *        Resolves to the <xul:notification> that is being shown.
     */
    function waitForNotificationBar(tabbrowser: any, browser: any, notificationValue: string): Promise<any>;
    /**
     * Waits for a <xul:notification> with a particular value to appear
     * in the global <xul:notificationbox> of the given browser window.
     *
     * @param {Window} win
     *        The browser window in whose global notificationbox the
     *        notification is expected to appear.
     * @param {String} notificationValue
     *        The "value" of the notification, which is often used as
     *        a unique identifier. Example: "captive-portal-detected".
     *
     * @return {Promise}
     *        Resolves to the <xul:notification> that is being shown.
     */
    function waitForGlobalNotificationBar(win: Window, notificationValue: string): Promise<any>;
    function waitForNotificationInNotificationBox(notificationBox: any, notificationValue: any): Promise<any>;
    /**
     * Waits for CSS transitions to complete for an element. Tracks any
     * transitions that start after this function is called and resolves once all
     * started transitions complete.
     *
     * @param {Element} element
     *        The element that will transition.
     * @param {Number} timeout
     *        The maximum time to wait in milliseconds. Defaults to 5 seconds.
     * @return {Promise}
     *        Resolves when transitions complete or rejects if the timeout is hit.
     */
    function waitForTransition(element: Element, timeout?: number): Promise<any>;
    let _knownAboutPages: Set<any>;
    let _loadedAboutContentScript: boolean;
    /**
     * Registers an about: page with particular flags in both the parent
     * and any content processes. Returns a promise that resolves when
     * registration is complete.
     *
     * @param {Function} registerCleanupFunction
     *        The test framework doesn't keep its cleanup stuff anywhere accessible,
     *        so the first argument is a reference to your cleanup registration
     *        function, allowing us to clean up after you if necessary.
     * @param {String} aboutModule
     *        The name of the about page.
     * @param {String} pageURI
     *        The URI the about: page should point to.
     * @param {Number} flags
     *        The nsIAboutModule flags to use for registration.
     *
     * @returns {Promise}
     *        Promise that resolves when registration has finished.
     */
    function registerAboutPage(registerCleanupFunction: Function, aboutModule: string, pageURI: string, flags: number): Promise<any>;
    function unregisterAboutPage(aboutModule: any): Promise<boolean>;
    function _removeAboutPageRegistrations(): Promise<void>;
    /**
     * Waits for the dialog to open, and clicks the specified button.
     *
     * @param {string} buttonNameOrElementID
     *        The name of the button ("accept", "cancel", etc) or element ID to
     *        click.
     * @param {string} uri
     *        The URI of the dialog to wait for.  Defaults to the common dialog.
     * @return {Promise}
     *         A Promise which resolves when a "domwindowopened" notification
     *         for a dialog has been fired by the window watcher and the
     *         specified button is clicked.
     */
    function promiseAlertDialogOpen(buttonNameOrElementID: string, uri?: string, options?: {
        callback: any;
        isSubDialog: boolean;
    }): Promise<any>;
    /**
     * Wait for the containing dialog with the id `window-modal-dialog` to become
     * empty and close.
     *
     * @param  {HTMLDialogElement} dialog
     *           The dialog to wait on.
     * @return {Promise}
     *           Resolves once the the dialog has closed
     */
    function waitForDialogClose(dialog: HTMLDialogElement): Promise<any>;
    /**
     * Waits for the dialog to open, and clicks the specified button, and waits
     * for the dialog to close.
     *
     * @param {string} buttonNameOrElementID
     *        The name of the button ("accept", "cancel", etc) or element ID to
     *        click.
     * @param {string} uri
     *        The URI of the dialog to wait for.  Defaults to the common dialog.
     *
     * @return {Promise}
     *         A Promise which resolves when a "domwindowopened" notification
     *         for a dialog has been fired by the window watcher and the
     *         specified button is clicked, and the dialog has been fully closed.
     */
    function promiseAlertDialog(buttonNameOrElementID: string, uri?: string, options?: {
        callback: any;
        isSubDialog: boolean;
    }): Promise<any>;
    /**
     * Opens a tab with a given uri and params object. If the params object is not set
     * or the params parameter does not include a triggeringPrincipal then this function
     * provides a params object using the systemPrincipal as the default triggeringPrincipal.
     *
     * @param {xul:tabbrowser} tabbrowser
     *        The gBrowser object to open the tab with.
     * @param {string} uri
     *        The URI to open in the new tab.
     * @param {object} params [optional]
     *        Parameters object for gBrowser.addTab.
     * @param {function} beforeLoadFunc [optional]
     *        A function to run after that xul:browser has been created but before the URL is
     *        loaded. Can spawn a content task in the tab, for example.
     */
    function addTab(tabbrowser: any, uri: string, params?: any, beforeLoadFunc?: Function): any;
    /**
     * There are two ways to listen for observers in a content process:
     *   1. Call contentTopicObserved which will watch for an observer notification
     *      in a content process to occur, and will return a promise which resolves
     *      when that notification occurs.
     *   2. Enclose calls to contentTopicObserved inside a pair of calls to
     *      startObservingTopics and stopObservingTopics. Usually this pair will be
     *      placed at the start and end of a test or set of tests. Any observer
     *      notification that happens between the start and stop that doesn't match
     *      any explicitly expected by using contentTopicObserved will cause
     *      stopObservingTopics to reject with an error.
     *      For example:
     *
     *        await BrowserTestUtils.startObservingTopics(bc, ["a", "b", "c"]);
     *        await BrowserTestUtils contentTopicObserved(bc, "a", 2);
     *        await BrowserTestUtils.stopObservingTopics(bc, ["a", "b", "c"]);
     *
     *      This will expect two "a" notifications to occur, but will fail if more
     *      than two occur, or if any "b" or "c" notifications occur.
     *
     * Note that this function doesn't handle adding a listener for the same topic
     * more than once. To do that, use the aCount argument.
     *
     * @param aBrowsingContext
     *        The browsing context associated with the content process to listen to.
     * @param {string} aTopic
     *        Observer topic to listen to. May be null to listen to any topic.
     * @param {number} aCount
     *        Number of such matching topics to listen to, defaults to 1. A match
     *        occurs when the topic and filter function match.
     * @param {function} aFilterFn
     *        Function to be evaluated in the content process which should
     *        return true if the notification matches. This function is passed
     *        the same arguments as nsIObserver.observe(). May be null to
     *        always match.
     * @returns {Promise} resolves when the notification occurs.
     */
    function contentTopicObserved(aBrowsingContext: any, aTopic: string, aCount?: number, aFilterFn?: Function): Promise<any>;
    /**
     * Starts observing a list of topics in a content process. Use contentTopicObserved
     * to allow an observer notification. Any other observer notification that occurs that
     * matches one of the specified topics will cause the promise to reject.
     *
     * Calling this function more than once adds additional topics to be observed without
     * replacing the existing ones.
     *
     * @param {BrowsingContext} aBrowsingContext
     *        The browsing context associated with the content process to listen to.
     * @param {String[]} aTopics array of observer topics
     * @returns {Promise} resolves when the listeners have been added.
     */
    function startObservingTopics(aBrowsingContext: BrowsingContext, aTopics: string[]): Promise<any>;
    /**
     * Stop listening to a set of observer topics.
     *
     * @param {BrowsingContext} aBrowsingContext
     *        The browsing context associated with the content process to listen to.
     * @param {String[]} aTopics array of observer topics. If empty, then all
     *                           current topics being listened to are removed.
     * @returns {Promise} promise that fails if an unexpected observer occurs.
     */
    function stopObservingTopics(aBrowsingContext: BrowsingContext, aTopics: string[]): Promise<any>;
    /**
     * Sends a message to a specific BrowserTestUtils window actor.
     * @param {BrowsingContext} aBrowsingContext
     *        The browsing context where the actor lives.
     * @param {string} aMessageName
     *        Name of the message to be sent to the actor.
     * @param {object} aMessageData
     *        Extra information to pass to the actor.
     */
    function sendAsyncMessage(aBrowsingContext: BrowsingContext, aMessageName: string, aMessageData: any): Promise<void>;
    /**
     * Sends a query to a specific BrowserTestUtils window actor.
     * @param {BrowsingContext} aBrowsingContext
     *        The browsing context where the actor lives.
     * @param {string} aMessageName
     *        Name of the message to be sent to the actor.
     * @param {object} aMessageData
     *        Extra information to pass to the actor.
     */
    function sendQuery(aBrowsingContext: BrowsingContext, aMessageName: string, aMessageData: any): Promise<any>;
    /**
     * A helper function for this test that returns a Promise that resolves
     * once the migration wizard appears.
     *
     * @param {DOMWindow} window
     *   The top-level window that the about:preferences tab is likely to open
     *   in if the new migration wizard is enabled.
     * @returns {Promise<Element>}
     *   Resolves to the opened about:preferences tab with the migration wizard
     *   running and loaded in it.
     */
    function waitForMigrationWizard(window: DOMWindow): Promise<Element>;
}
