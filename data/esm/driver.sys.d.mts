/**
 * The Marionette WebDriver services provides a standard conforming
 * implementation of the W3C WebDriver specification.
 *
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html}
 * @namespace driver
 */
/**
 * Implements (parts of) the W3C WebDriver protocol.  GeckoDriver lives
 * in chrome space and mediates calls to the current browsing context's actor.
 *
 * Throughout this prototype, functions with the argument <var>cmd</var>'s
 * documentation refers to the contents of the <code>cmd.parameter</code>
 * object.
 *
 * @class GeckoDriver
 *
 * @param {MarionetteServer} server
 *     The instance of Marionette server.
 */
export function GeckoDriver(server: MarionetteServer): void;
export class GeckoDriver {
    /**
     * The Marionette WebDriver services provides a standard conforming
     * implementation of the W3C WebDriver specification.
     *
     * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html}
     * @namespace driver
     */
    /**
     * Implements (parts of) the W3C WebDriver protocol.  GeckoDriver lives
     * in chrome space and mediates calls to the current browsing context's actor.
     *
     * Throughout this prototype, functions with the argument <var>cmd</var>'s
     * documentation refers to the contents of the <code>cmd.parameter</code>
     * object.
     *
     * @class GeckoDriver
     *
     * @param {MarionetteServer} server
     *     The instance of Marionette server.
     */
    constructor(server: MarionetteServer);
    _server: MarionetteServer;
    _currentSession: any;
    browsers: {};
    curBrowser: any;
    mainFrame: any;
    context: any;
    dialog: any;
    promptListener: any;
    get currentSession(): any;
    get currentURL(): URL;
    get title(): any;
    get windowType(): any;
    QueryInterface: MozQueryInterface;
    /**
     * Callback used to observe the closing of modal dialogs
     * during the session's lifetime.
     */
    handleClosedModalDialog(): void;
    /**
     * Callback used to observe the creation of new modal dialogs
     * during the session's lifetime.
     */
    handleOpenModalDialog(eventName: any, data: any): void;
    /**
     * Get the current visible URL.
     */
    _getCurrentURL(): URL;
    /**
     * Get the current "MarionetteCommands" parent actor.
     *
     * @param {object} options
     * @param {boolean=} options.top
     *     If set to true use the window's top-level browsing context for the actor,
     *     otherwise the one from the currently selected frame. Defaults to false.
     *
     * @returns {MarionetteCommandsParent}
     *     The parent actor.
     */
    getActor(options?: {
        top?: boolean | undefined;
    }): MarionetteCommandsParent;
    /**
     * Get the selected BrowsingContext for the current context.
     *
     * @param {object} options
     * @param {Context=} options.context
     *     Context (content or chrome) for which to retrieve the browsing context.
     *     Defaults to the current one.
     * @param {boolean=} options.parent
     *     If set to true return the window's parent browsing context,
     *     otherwise the one from the currently selected frame. Defaults to false.
     * @param {boolean=} options.top
     *     If set to true return the window's top-level browsing context,
     *     otherwise the one from the currently selected frame. Defaults to false.
     *
     * @returns {BrowsingContext}
     *     The browsing context, or `null` if none is available
     */
    getBrowsingContext(options?: {
        context?: Context | undefined;
        parent?: boolean | undefined;
        top?: boolean | undefined;
    }): BrowsingContext;
    /**
     * Get the currently selected window.
     *
     * It will return the outer {@link ChromeWindow} previously selected by
     * window handle through {@link #switchToWindow}, or the first window that
     * was registered.
     *
     * @param {object} options
     * @param {Context=} options.context
     *     Optional name of the context to use for finding the window.
     *     It will be required if a command always needs a specific context,
     *     whether which context is currently set. Defaults to the current
     *     context.
     *
     * @returns {ChromeWindow}
     *     The current top-level browsing context.
     */
    getCurrentWindow(options?: {
        context?: Context | undefined;
    }): ChromeWindow;
    isReftestBrowser(element: any): boolean;
    /**
     * Create a new browsing context for window and add to known browsers.
     *
     * @param {ChromeWindow} win
     *     Window for which we will create a browsing context.
     *
     * @returns {string}
     *     Returns the unique server-assigned ID of the window.
     */
    addBrowser(win: ChromeWindow): string;
    /**
     * Recursively get all labeled text.
     *
     * @param {Element} el
     *     The parent element.
     * @param {Array.<string>} lines
     *      Array that holds the text lines.
     */
    getVisibleText(el: Element, lines: Array<string>): void;
    /**
     * Handles registration of new content browsers.  Depending on
     * their type they are either accepted or ignored.
     *
     * @param {XULBrowser} browserElement
     */
    registerBrowser(browserElement: XULBrowser): void;
    /**
     * Create a new WebDriver session.
     *
     * @param {object} cmd
     * @param {Object<string, *>=} cmd.parameters
     *     JSON Object containing any of the recognised capabilities as listed
     *     on the `WebDriverSession` class.
     *
     * @returns {object}
     *     Session ID and capabilities offered by the WebDriver service.
     *
     * @throws {SessionNotCreatedError}
     *     If, for whatever reason, a session could not be created.
     */
    newSession(cmd: {
        parameters?: {
            [x: string]: any;
        } | undefined;
    }): object;
    /**
     * Start observing the specified window.
     *
     * @param {ChromeWindow} win
     *     Chrome window to register event listeners for.
     * @param {object=} options
     * @param {boolean=} options.registerBrowsers
     *     If true, register all content browsers of found tabs. Defaults to false.
     */
    registerWindow(win: ChromeWindow, options?: object | undefined): void;
    /**
     * Stop observing the specified window.
     *
     * @param {ChromeWindow} win
     *     Chrome window to unregister event listeners for.
     */
    stopObservingWindow(win: ChromeWindow): void;
    handleEvent({ target, type }: {
        target: any;
        type: any;
    }): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
    /**
     * Send the current session's capabilities to the client.
     *
     * Capabilities informs the client of which WebDriver features are
     * supported by Firefox and Marionette.  They are immutable for the
     * length of the session.
     *
     * The return value is an immutable map of string keys
     * ("capabilities") to values, which may be of types boolean,
     * numerical or string.
     */
    getSessionCapabilities(): {
        capabilities: any;
    };
    /**
     * Sets the context of the subsequent commands.
     *
     * All subsequent requests to commands that in some way involve
     * interaction with a browsing context will target the chosen browsing
     * context.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.value
     *     Name of the context to be switched to.  Must be one of "chrome" or
     *     "content".
     *
     * @throws {InvalidArgumentError}
     *     If <var>value</var> is not a string.
     * @throws {WebDriverError}
     *     If <var>value</var> is not a valid browsing context.
     */
    setContext(cmd: object): void;
    /**
     * Gets the context type that is Marionette's current target for
     * browsing context scoped commands.
     *
     * You may choose a context through the {@link #setContext} command.
     *
     * The default browsing context is {@link Context.Content}.
     *
     * @returns {Context}
     *     Current context.
     */
    getContext(): Context;
    /**
     * Executes a JavaScript function in the context of the current browsing
     * context, if in content space, or in chrome space otherwise, and returns
     * the return value of the function.
     *
     * It is important to note that if the <var>sandboxName</var> parameter
     * is left undefined, the script will be evaluated in a mutable sandbox,
     * causing any change it makes on the global state of the document to have
     * lasting side-effects.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.script
     *     Script to evaluate as a function body.
     * @param {Array.<(string|boolean|number|object|WebReference)>} cmd.parameters.args
     *     Arguments exposed to the script in <code>arguments</code>.
     *     The array items must be serialisable to the WebDriver protocol.
     * @param {string=} cmd.parameters.sandbox
     *     Name of the sandbox to evaluate the script in.  The sandbox is
     *     cached for later re-use on the same Window object if
     *     <var>newSandbox</var> is false.  If he parameter is undefined,
     *     the script is evaluated in a mutable sandbox.  If the parameter
     *     is "system", it will be evaluted in a sandbox with elevated system
     *     privileges, equivalent to chrome space.
     * @param {boolean=} cmd.parameters.newSandbox
     *     Forces the script to be evaluated in a fresh sandbox.  Note that if
     *     it is undefined, the script will normally be evaluted in a fresh
     *     sandbox.
     * @param {string=} cmd.parameters.filename
     *     Filename of the client's program where this script is evaluated.
     * @param {number=} cmd.parameters.line
     *     Line in the client's program where this script is evaluated.
     *
     * @returns {(string|boolean|number|object|WebReference)}
     *     Return value from the script, or null which signifies either the
     *     JavaScript notion of null or undefined.
     *
     * @throws {JavaScriptError}
     *     If an {@link Error} was thrown whilst evaluating the script.
     * @throws {NoSuchElementError}
     *     If an element that was passed as part of <var>args</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {ScriptTimeoutError}
     *     If the script was interrupted due to reaching the session's
     *     script timeout.
     * @throws {StaleElementReferenceError}
     *     If an element that was passed as part of <var>args</var> or that is
     *     returned as result has gone stale.
     */
    executeScript(cmd: object): (string | boolean | number | object | WebReference);
    /**
     * Executes a JavaScript function in the context of the current browsing
     * context, if in content space, or in chrome space otherwise, and returns
     * the object passed to the callback.
     *
     * The callback is always the last argument to the <var>arguments</var>
     * list passed to the function scope of the script.  It can be retrieved
     * as such:
     *
     * <pre><code>
     *     let callback = arguments[arguments.length - 1];
     *     callback("foo");
     *     // "foo" is returned
     * </code></pre>
     *
     * It is important to note that if the <var>sandboxName</var> parameter
     * is left undefined, the script will be evaluated in a mutable sandbox,
     * causing any change it makes on the global state of the document to have
     * lasting side-effects.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.script
     *     Script to evaluate as a function body.
     * @param {Array.<(string|boolean|number|object|WebReference)>} cmd.parameters.args
     *     Arguments exposed to the script in <code>arguments</code>.
     *     The array items must be serialisable to the WebDriver protocol.
     * @param {string=} cmd.parameters.sandbox
     *     Name of the sandbox to evaluate the script in.  The sandbox is
     *     cached for later re-use on the same Window object if
     *     <var>newSandbox</var> is false.  If the parameter is undefined,
     *     the script is evaluated in a mutable sandbox.  If the parameter
     *     is "system", it will be evaluted in a sandbox with elevated system
     *     privileges, equivalent to chrome space.
     * @param {boolean=} cmd.parameters.newSandbox
     *     Forces the script to be evaluated in a fresh sandbox.  Note that if
     *     it is undefined, the script will normally be evaluted in a fresh
     *     sandbox.
     * @param {string=} cmd.parameters.filename
     *     Filename of the client's program where this script is evaluated.
     * @param {number=} cmd.parameters.line
     *     Line in the client's program where this script is evaluated.
     *
     * @returns {(string|boolean|number|object|WebReference)}
     *     Return value from the script, or null which signifies either the
     *     JavaScript notion of null or undefined.
     *
     * @throws {JavaScriptError}
     *     If an Error was thrown whilst evaluating the script.
     * @throws {NoSuchElementError}
     *     If an element that was passed as part of <var>args</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {ScriptTimeoutError}
     *     If the script was interrupted due to reaching the session's
     *     script timeout.
     * @throws {StaleElementReferenceError}
     *     If an element that was passed as part of <var>args</var> or that is
     *     returned as result has gone stale.
     */
    executeAsyncScript(cmd: object): (string | boolean | number | object | WebReference);
    execute_(script: any, args?: any[], { sandboxName, newSandbox, file, line, async, }?: {
        sandboxName?: any;
        newSandbox?: boolean;
        file?: string;
        line?: number;
        async?: boolean;
    }): Promise<any>;
    /**
     * Navigate to given URL.
     *
     * Navigates the current browsing context to the given URL and waits for
     * the document to load or the session's page timeout duration to elapse
     * before returning.
     *
     * The command will return with a failure if there is an error loading
     * the document or the URL is blocked.  This can occur if it fails to
     * reach host, the URL is malformed, or if there is a certificate issue
     * to name some examples.
     *
     * The document is considered successfully loaded when the
     * DOMContentLoaded event on the frame element associated with the
     * current window triggers and document.readyState is "complete".
     *
     * In chrome context it will change the current window's location to
     * the supplied URL and wait until document.readyState equals "complete"
     * or the page timeout duration has elapsed.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.url
     *     URL to navigate to.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in current context.
     */
    navigateTo(cmd: object): Promise<void>;
    /**
     * Get a string representing the current URL.
     *
     * On Desktop this returns a string representation of the URL of the
     * current top level browsing context.  This is equivalent to
     * document.location.href.
     *
     * When in the context of the chrome, this returns the canonical URL
     * of the current resource.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getCurrentUrl(): Promise<string>;
    /**
     * Gets the current title of the window.
     *
     * @returns {string}
     *     Document title of the top-level browsing context.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getTitle(): string;
    /**
     * Gets the current type of the window.
     *
     * @returns {string}
     *     Type of window
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     */
    getWindowType(): string;
    /**
     * Gets the page source of the content document.
     *
     * @returns {string}
     *     String serialisation of the DOM of the current browsing context's
     *     active document.
     *
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getPageSource(): string;
    /**
     * Cause the browser to traverse one step backward in the joint history
     * of the current browsing context.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in current context.
     */
    goBack(): Promise<void>;
    /**
     * Cause the browser to traverse one step forward in the joint history
     * of the current browsing context.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in current context.
     */
    goForward(): Promise<void>;
    /**
     * Causes the browser to reload the page in current top-level browsing
     * context.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in current context.
     */
    refresh(): Promise<void>;
    /**
     * Get the current window's handle. On desktop this typically corresponds
     * to the currently selected tab.
     *
     * For chrome scope it returns the window identifier for the current chrome
     * window for tests interested in managing the chrome window and tab separately.
     *
     * Return an opaque server-assigned identifier to this window that
     * uniquely identifies it within this Marionette instance.  This can
     * be used to switch to this window at a later point.
     *
     * @returns {string}
     *     Unique window handle.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     */
    getWindowHandle(): string;
    /**
     * Get a list of top-level browsing contexts. On desktop this typically
     * corresponds to the set of open tabs for browser windows, or the window
     * itself for non-browser chrome windows.
     *
     * For chrome scope it returns identifiers for each open chrome window for
     * tests interested in managing a set of chrome windows and tabs separately.
     *
     * Each window handle is assigned by the server and is guaranteed unique,
     * however the return array does not have a specified ordering.
     *
     * @returns {Array.<string>}
     *     Unique window handles.
     */
    getWindowHandles(): Array<string>;
    /**
     * Get the current position and size of the browser window currently in focus.
     *
     * Will return the current browser window size in pixels. Refers to
     * window outerWidth and outerHeight values, which include scroll bars,
     * title bars, etc.
     *
     * @returns {Object<string, number>}
     *     Object with |x| and |y| coordinates, and |width| and |height|
     *     of browser window.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getWindowRect(): {
        [x: string]: number;
    };
    /**
     * Set the window position and size of the browser on the operating
     * system window manager.
     *
     * The supplied `width` and `height` values refer to the window `outerWidth`
     * and `outerHeight` values, which include browser chrome and OS-level
     * window borders.
     *
     * @param {object} cmd
     * @param {number} cmd.parameters.x
     *     X coordinate of the top/left of the window that it will be
     *     moved to.
     * @param {number} cmd.parameters.y
     *     Y coordinate of the top/left of the window that it will be
     *     moved to.
     * @param {number} cmd.parameters.width
     *     Width to resize the window to.
     * @param {number} cmd.parameters.height
     *     Height to resize the window to.
     *
     * @returns {Object<string, number>}
     *     Object with `x` and `y` coordinates and `width` and `height`
     *     dimensions.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not applicable to application.
     */
    setWindowRect(cmd: object): {
        [x: string]: number;
    };
    /**
     * Switch current top-level browsing context by name or server-assigned
     * ID.  Searches for windows by name, then ID.  Content windows take
     * precedence.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.handle
     *     Handle of the window to switch to.
     * @param {boolean=} cmd.parameters.focus
     *     A boolean value which determines whether to focus
     *     the window. Defaults to true.
     *
     * @throws {InvalidArgumentError}
     *     If <var>handle</var> is not a string or <var>focus</var> not a boolean.
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     */
    switchToWindow(cmd: object): Promise<void>;
    /**
     * Switch the marionette window to a given window. If the browser in
     * the window is unregistered, register that browser and wait for
     * the registration is complete. If |focus| is true then set the focus
     * on the window.
     *
     * @param {object} winProperties
     *     Object containing window properties such as returned from
     *     :js:func:`GeckoDriver#getWindowProperties`
     * @param {boolean=} focus
     *     A boolean value which determines whether to focus the window.
     *     Defaults to true.
     */
    setWindowHandle(winProperties: object, focus?: boolean | undefined): Promise<void>;
    /**
     * Set the current browsing context for future commands to the parent
     * of the current browsing context.
     *
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    switchToParentFrame(): Promise<void>;
    /**
     * Switch to a given frame within the current window.
     *
     * @param {object} cmd
     * @param {(string | object)=} cmd.parameters.element
     *     A web element reference of the frame or its element id.
     * @param {number=} cmd.parameters.id
     *     The index of the frame to switch to.
     *     If both element and id are not defined, switch to top-level frame.
     *
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>element</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>element</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    switchToFrame(cmd: object): Promise<void>;
    getTimeouts(): any;
    /**
     * Set timeout for page loading, searching, and scripts.
     *
     * @param {object} cmd
     * @param {Object<string, number>} cmd.parameters
     *     Dictionary of timeout types and their new value, where all timeout
     *     types are optional.
     *
     * @throws {InvalidArgumentError}
     *     If timeout type key is unknown, or the value provided with it is
     *     not an integer.
     */
    setTimeouts(cmd: {
        parameters: {
            [x: string]: number;
        };
    }): void;
    /**
     * Perform a series of grouped actions at the specified points in time.
     *
     * @param {object} cmd
     * @param {Array<?>} cmd.parameters.actions
     *     Array of objects that each represent an action sequence.
     *
     * @throws {NoSuchElementError}
     *     If an element that is used as part of the action chain is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If an element that is used as part of the action chain has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not yet available in current context.
     */
    performActions(cmd: object): Promise<void>;
    /**
     * Release all the keys and pointer buttons that are currently depressed.
     *
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in current context.
     */
    releaseActions(): Promise<void>;
    /**
     * Find an element using the indicated search strategy.
     *
     * @param {object} cmd
     * @param {string=} cmd.parameters.element
     *     Web element reference ID to the element that will be used as start node.
     * @param {string} cmd.parameters.using
     *     Indicates which search method to use.
     * @param {string} cmd.parameters.value
     *     Value the client is looking for.
     *
     * @returns {WebElement}
     *     Return the found element.
     *
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>element</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>element</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    findElement(cmd: object): WebElement;
    /**
     * Find an element within shadow root using the indicated search strategy.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.shadowRoot
     *     Shadow root reference ID.
     * @param {string} cmd.parameters.using
     *     Indicates which search method to use.
     * @param {string} cmd.parameters.value
     *     Value the client is looking for.
     *
     * @returns {WebElement}
     *     Return the found element.
     *
     * @throws {DetachedShadowRootError}
     *     If shadow root represented by reference <var>id</var> is
     *     no longer attached to the DOM.
     * @throws {NoSuchElementError}
     *     If the element which is looked for with <var>value</var> was
     *     not found.
     * @throws {NoSuchShadowRoot}
     *     If shadow root represented by reference <var>shadowRoot</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    findElementFromShadowRoot(cmd: object): WebElement;
    /**
     * Find elements using the indicated search strategy.
     *
     * @param {object} cmd
     * @param {string=} cmd.parameters.element
     *     Web element reference ID to the element that will be used as start node.
     * @param {string} cmd.parameters.using
     *     Indicates which search method to use.
     * @param {string} cmd.parameters.value
     *     Value the client is looking for.
     *
     * @returns {Array<WebElement>}
     *     Return the array of found elements.
     *
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>element</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>element</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    findElements(cmd: object): Array<WebElement>;
    /**
     * Find elements within shadow root using the indicated search strategy.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.shadowRoot
     *     Shadow root reference ID.
     * @param {string} cmd.parameters.using
     *     Indicates which search method to use.
     * @param {string} cmd.parameters.value
     *     Value the client is looking for.
     *
     * @returns {Array<WebElement>}
     *     Return the array of found elements.
     *
     * @throws {DetachedShadowRootError}
     *     If shadow root represented by reference <var>id</var> is
     *     no longer attached to the DOM.
     * @throws {NoSuchShadowRoot}
     *     If shadow root represented by reference <var>shadowRoot</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    findElementsFromShadowRoot(cmd: object): Array<WebElement>;
    /**
     * Return the shadow root of an element in the document.
     *
     * @param {object} cmd
     * @param {id} cmd.parameters.id
     *     A web element id reference.
     * @returns {ShadowRoot}
     *     ShadowRoot of the element.
     *
     * @throws {InvalidArgumentError}
     *     If element <var>id</var> is not a string.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchShadowRoot}
     *     Element does not have a shadow root attached.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in chrome current context.
     */
    getShadowRoot(cmd: object): ShadowRoot;
    /**
     * Return the active element in the document.
     *
     * @returns {WebReference}
     *     Active element of the current browsing context's document
     *     element, if the document element is non-null.
     *
     * @throws {NoSuchElementError}
     *     If the document does not have an active element, i.e. if
     *     its document element has been deleted.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in chrome context.
     */
    getActiveElement(): WebReference;
    /**
     * Send click event to element.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Reference ID to the element that will be clicked.
     *
     * @throws {InvalidArgumentError}
     *     If element <var>id</var> is not a string.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    clickElement(cmd: object): Promise<void>;
    /**
     * Get a given attribute of an element.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Web element reference ID to the element that will be inspected.
     * @param {string} cmd.parameters.name
     *     Name of the attribute which value to retrieve.
     *
     * @returns {string}
     *     Value of the attribute.
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> or <var>name</var> are not strings.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getElementAttribute(cmd: object): string;
    /**
     * Returns the value of a property associated with given element.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Web element reference ID to the element that will be inspected.
     * @param {string} cmd.parameters.name
     *     Name of the property which value to retrieve.
     *
     * @returns {string}
     *     Value of the property.
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> or <var>name</var> are not strings.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getElementProperty(cmd: object): string;
    /**
     * Get the text of an element, if any.  Includes the text of all child
     * elements.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Reference ID to the element that will be inspected.
     *
     * @returns {string}
     *     Element's text "as rendered".
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> is not a string.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getElementText(cmd: object): string;
    /**
     * Get the tag name of the element.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Reference ID to the element that will be inspected.
     *
     * @returns {string}
     *     Local tag name of element.
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> is not a string.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getElementTagName(cmd: object): string;
    /**
     * Check if element is displayed.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Reference ID to the element that will be inspected.
     *
     * @returns {boolean}
     *     True if displayed, false otherwise.
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> is not a string.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    isElementDisplayed(cmd: object): boolean;
    /**
     * Return the property of the computed style of an element.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Reference ID to the element that will be checked.
     * @param {string} cmd.parameters.propertyName
     *     CSS rule that is being requested.
     *
     * @returns {string}
     *     Value of |propertyName|.
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> or <var>propertyName</var> are not strings.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getElementValueOfCssProperty(cmd: object): string;
    /**
     * Check if element is enabled.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Reference ID to the element that will be checked.
     *
     * @returns {boolean}
     *     True if enabled, false if disabled.
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> is not a string.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    isElementEnabled(cmd: object): boolean;
    /**
     * Check if element is selected.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Reference ID to the element that will be checked.
     *
     * @returns {boolean}
     *     True if selected, false if unselected.
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> is not a string.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    isElementSelected(cmd: object): boolean;
    /**
     * @throws {InvalidArgumentError}
     *     If <var>id</var> is not a string.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    getElementRect(cmd: any): Promise<any>;
    /**
     * Send key presses to element after focusing on it.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Reference ID to the element that will be checked.
     * @param {string} cmd.parameters.text
     *     Value to send to the element.
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> or <var>text</var> are not strings.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    sendKeysToElement(cmd: object): Promise<any>;
    /**
     * Clear the text of an element.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Reference ID to the element that will be cleared.
     *
     * @throws {InvalidArgumentError}
     *     If <var>id</var> is not a string.
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    clearElement(cmd: object): Promise<void>;
    /**
     * Add a single cookie to the cookie store associated with the active
     * document's address.
     *
     * @param {object} cmd
     * @param {Map.<string, (string|number|boolean)>} cmd.parameters.cookie
     *     Cookie object.
     *
     * @throws {InvalidCookieDomainError}
     *     If <var>cookie</var> is for a different domain than the active
     *     document's host.
     * @throws {NoSuchWindowError}
     *     Bbrowsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in current context.
     */
    addCookie(cmd: object): Promise<void>;
    /**
     * Get all the cookies for the current domain.
     *
     * This is the equivalent of calling <code>document.cookie</code> and
     * parsing the result.
     *
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in current context.
     */
    getCookies(): Promise<any[]>;
    /**
     * Delete all cookies that are visible to a document.
     *
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in current context.
     */
    deleteAllCookies(): Promise<void>;
    /**
     * Delete a cookie by name.
     *
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in current context.
     */
    deleteCookie(cmd: any): Promise<void>;
    /**
     * Open a new top-level browsing context.
     *
     * @param {object} cmd
     * @param {string=} cmd.parameters.type
     *     Optional type of the new top-level browsing context. Can be one of
     *     `tab` or `window`. Defaults to `tab`.
     * @param {boolean=} cmd.parameters.focus
     *     Optional flag if the new top-level browsing context should be opened
     *     in foreground (focused) or background (not focused). Defaults to false.
     * @param {boolean=} cmd.parameters.private
     *     Optional flag, which gets only evaluated for type `window`. True if the
     *     new top-level browsing context should be a private window.
     *     Defaults to false.
     *
     * @returns {Object<string, string>}
     *     Handle and type of the new browsing context.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    newWindow(cmd: object): {
        [x: string]: string;
    };
    /**
     * Close the currently selected tab/window.
     *
     * With multiple open tabs present the currently selected tab will
     * be closed.  Otherwise the window itself will be closed. If it is the
     * last window currently open, the window will not be closed to prevent
     * a shutdown of the application. Instead the returned list of window
     * handles is empty.
     *
     * @returns {Array.<string>}
     *     Unique window handles of remaining windows.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     */
    close(): Array<string>;
    /**
     * Close the currently selected chrome window.
     *
     * If it is the last window currently open, the chrome window will not be
     * closed to prevent a shutdown of the application. Instead the returned
     * list of chrome window handles is empty.
     *
     * @returns {Array.<string>}
     *     Unique chrome window handles of remaining chrome windows.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     */
    closeChromeWindow(): Array<string>;
    /** Delete Marionette session. */
    deleteSession(): void;
    /**
     * Takes a screenshot of a web element, current frame, or viewport.
     *
     * The screen capture is returned as a lossless PNG image encoded as
     * a base 64 string.
     *
     * If called in the content context, the |id| argument is not null and
     * refers to a present and visible web element's ID, the capture area will
     * be limited to the bounding box of that element.  Otherwise, the capture
     * area will be the bounding box of the current frame.
     *
     * If called in the chrome context, the screenshot will always represent
     * the entire viewport.
     *
     * @param {object} cmd
     * @param {string=} cmd.parameters.id
     *     Optional web element reference to take a screenshot of.
     *     If undefined, a screenshot will be taken of the document element.
     * @param {boolean=} cmd.parameters.full
     *     True to take a screenshot of the entire document element. Is only
     *     considered if <var>id</var> is not defined. Defaults to true.
     * @param {boolean=} cmd.parameters.hash
     *     True if the user requests a hash of the image data. Defaults to false.
     * @param {boolean=} cmd.parameters.scroll
     *     Scroll to element if |id| is provided. Defaults to true.
     *
     * @returns {string}
     *     If <var>hash</var> is false, PNG image encoded as Base64 encoded
     *     string.  If <var>hash</var> is true, hex digest of the SHA-256
     *     hash of the Base64 encoded string.
     *
     * @throws {NoSuchElementError}
     *     If element represented by reference <var>id</var> is unknown.
     * @throws {NoSuchWindowError}
     *     Browsing context has been discarded.
     * @throws {StaleElementReferenceError}
     *     If element represented by reference <var>id</var> has gone stale.
     */
    takeScreenshot(cmd: object): string;
    /**
     * Get the current browser orientation.
     *
     * Will return one of the valid primary orientation values
     * portrait-primary, landscape-primary, portrait-secondary, or
     * landscape-secondary.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     */
    getScreenOrientation(): any;
    /**
     * Set the current browser orientation.
     *
     * The supplied orientation should be given as one of the valid
     * orientation values.  If the orientation is unknown, an error will
     * be raised.
     *
     * Valid orientations are "portrait" and "landscape", which fall
     * back to "portrait-primary" and "landscape-primary" respectively,
     * and "portrait-secondary" as well as "landscape-secondary".
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     */
    setScreenOrientation(cmd: any): Promise<void>;
    /**
     * Synchronously minimizes the user agent window as if the user pressed
     * the minimize button.
     *
     * No action is taken if the window is already minimized.
     *
     * Not supported on Fennec.
     *
     * @returns {Object<string, number>}
     *     Window rect and window state.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available for current application.
     */
    minimizeWindow(): {
        [x: string]: number;
    };
    /**
     * Synchronously maximizes the user agent window as if the user pressed
     * the maximize button.
     *
     * No action is taken if the window is already maximized.
     *
     * Not supported on Fennec.
     *
     * @returns {Object<string, number>}
     *     Window rect.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available for current application.
     */
    maximizeWindow(): {
        [x: string]: number;
    };
    /**
     * Synchronously sets the user agent window to full screen as if the user
     * had done "View > Enter Full Screen".
     *
     * No action is taken if the window is already in full screen mode.
     *
     * Not supported on Fennec.
     *
     * @returns {Map.<string, number>}
     *     Window rect.
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available for current application.
     */
    fullscreenWindow(): Map<string, number>;
    /**
     * Dismisses a currently displayed modal dialogs, or returns no such alert if
     * no modal is displayed.
     *
     * @throws {NoSuchAlertError}
     *     If there is no current user prompt.
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     */
    dismissDialog(): Promise<void>;
    /**
     * Accepts a currently displayed dialog modal, or returns no such alert if
     * no modal is displayed.
     *
     * @throws {NoSuchAlertError}
     *     If there is no current user prompt.
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     */
    acceptDialog(): Promise<void>;
    /**
     * Returns the message shown in a currently displayed modal, or returns
     * a no such alert error if no modal is currently displayed.
     *
     * @throws {NoSuchAlertError}
     *     If there is no current user prompt.
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     */
    getTextFromDialog(): Promise<any>;
    /**
     * Set the user prompt's value field.
     *
     * Sends keys to the input field of a currently displayed modal, or
     * returns a no such alert error if no modal is currently displayed. If
     * a modal dialog is currently displayed but has no means for text input,
     * an element not visible error is returned.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.text
     *     Input to the user prompt's value field.
     *
     * @throws {ElementNotInteractableError}
     *     If the current user prompt is an alert or confirm.
     * @throws {NoSuchAlertError}
     *     If there is no current user prompt.
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnsupportedOperationError}
     *     If the current user prompt is something other than an alert,
     *     confirm, or a prompt.
     */
    sendKeysToDialog(cmd: object): Promise<void>;
    _checkIfAlertIsPresent(): void;
    _handleUserPrompts(): Promise<void>;
    /**
     * Enables or disables accepting new socket connections.
     *
     * By calling this method with `false` the server will not accept any
     * further connections, but existing connections will not be forcible
     * closed. Use `true` to re-enable accepting connections.
     *
     * Please note that when closing the connection via the client you can
     * end-up in a non-recoverable state if it hasn't been enabled before.
     *
     * This method is used for custom in application shutdowns via
     * marionette.quit() or marionette.restart(), like File -> Quit.
     *
     * @param {object} cmd
     * @param {boolean} cmd.parameters.value
     *     True if the server should accept new socket connections.
     */
    acceptConnections(cmd: object): Promise<void>;
    /**
     * Quits the application with the provided flags.
     *
     * Marionette will stop accepting new connections before ending the
     * current session, and finally attempting to quit the application.
     *
     * Optional {@link nsIAppStartup} flags may be provided as
     * an array of masks, and these will be combined by ORing
     * them with a bitmask.  The available masks are defined in
     * https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAppStartup.
     *
     * Crucially, only one of the *Quit flags can be specified. The |eRestart|
     * flag may be bit-wise combined with one of the *Quit flags to cause
     * the application to restart after it quits.
     *
     * @param {object} cmd
     * @param {Array.<string>=} cmd.parameters.flags
     *     Constant name of masks to pass to |Services.startup.quit|.
     *     If empty or undefined, |nsIAppStartup.eAttemptQuit| is used.
     * @param {boolean=} cmd.parameters.safeMode
     *     Optional flag to indicate that the application has to
     *     be restarted in safe mode.
     *
     * @returns {Object<string,boolean>}
     *     Dictionary containing information that explains the shutdown reason.
     *     The value for `cause` contains the shutdown kind like "shutdown" or
     *     "restart", while `forced` will indicate if it was a normal or forced
     *     shutdown of the application. "in_app" is always set to indicate that
     *     it is a shutdown triggered from within the application.
     *
     * @throws {InvalidArgumentError}
     *     If <var>flags</var> contains unknown or incompatible flags,
     *     for example multiple Quit flags.
     */
    quit(cmd: object): {
        [x: string]: boolean;
    };
    installAddon(cmd: any): any;
    uninstallAddon(cmd: any): any;
    /**
     * Retrieve the localized string for the specified entity id.
     *
     * Example:
     *     localizeEntity(["chrome://branding/locale/brand.dtd"], "brandShortName")
     *
     * @param {object} cmd
     * @param {Array.<string>} cmd.parameters.urls
     *     Array of .dtd URLs.
     * @param {string} cmd.parameters.id
     *     The ID of the entity to retrieve the localized string for.
     *
     * @returns {string}
     *     The localized string for the requested entity.
     */
    localizeEntity(cmd: object): string;
    /**
     * Retrieve the localized string for the specified property id.
     *
     * Example:
     *
     *     localizeProperty(
     *         ["chrome://global/locale/findbar.properties"], "FastFind");
     *
     * @param {object} cmd
     * @param {Array.<string>} cmd.parameters.urls
     *     Array of .properties URLs.
     * @param {string} cmd.parameters.id
     *     The ID of the property to retrieve the localized string for.
     *
     * @returns {string}
     *     The localized string for the requested property.
     */
    localizeProperty(cmd: object): string;
    /**
     * Initialize the reftest mode
     */
    setupReftest(cmd: any): Promise<void>;
    _reftest: any;
    /** Run a reftest. */
    runReftest(cmd: any): any;
    /**
     * End a reftest run.
     *
     * Closes the reftest window (without changing the current window handle),
     * and removes cached canvases.
     */
    teardownReftest(): void;
    /**
     * Print page as PDF.
     *
     * @param {object} cmd
     * @param {boolean=} cmd.parameters.background
     *     Whether or not to print background colors and images.
     *     Defaults to false, which prints without background graphics.
     * @param {number=} cmd.parameters.margin.bottom
     *     Bottom margin in cm. Defaults to 1cm (~0.4 inches).
     * @param {number=} cmd.parameters.margin.left
     *     Left margin in cm. Defaults to 1cm (~0.4 inches).
     * @param {number=} cmd.parameters.margin.right
     *     Right margin in cm. Defaults to 1cm (~0.4 inches).
     * @param {number=} cmd.parameters.margin.top
     *     Top margin in cm. Defaults to 1cm (~0.4 inches).
     * @param {('landscape'|'portrait')=} cmd.parameters.options.orientation
     *     Paper orientation. Defaults to 'portrait'.
     * @param {Array.<string|number>=} cmd.parameters.pageRanges
     *     Paper ranges to print, e.g., ['1-5', 8, '11-13'].
     *     Defaults to the empty array, which means print all pages.
     * @param {number=} cmd.parameters.page.height
     *     Paper height in cm. Defaults to US letter height (27.94cm / 11 inches)
     * @param {number=} cmd.parameters.page.width
     *     Paper width in cm. Defaults to US letter width (21.59cm / 8.5 inches)
     * @param {number=} cmd.parameters.scale
     *     Scale of the webpage rendering. Defaults to 1.0.
     * @param {boolean=} cmd.parameters.shrinkToFit
     *     Whether or not to override page size as defined by CSS.
     *     Defaults to true, in which case the content will be scaled
     *     to fit the paper size.
     *
     * @returns {string}
     *     Base64 encoded PDF representing printed document
     *
     * @throws {NoSuchWindowError}
     *     Top-level browsing context has been discarded.
     * @throws {UnexpectedAlertOpenError}
     *     A modal dialog is open, blocking this operation.
     * @throws {UnsupportedOperationError}
     *     Not available in chrome context.
     */
    print(cmd: object): string;
    addVirtualAuthenticator(cmd: any): any;
    removeVirtualAuthenticator(cmd: any): void;
    addCredential(cmd: any): void;
    getCredentials(cmd: any): any;
    removeCredential(cmd: any): void;
    removeAllCredentials(cmd: any): void;
    setUserVerified(cmd: any): void;
    setPermission(cmd: any): Promise<void>;
    /**
     * Determines the Accessibility label for this element.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Web element reference ID to the element for which the accessibility label
     *     will be returned.
     *
     * @returns {string}
     *     The Accessibility label for this element
     */
    getComputedLabel(cmd: object): string;
    /**
     * Determines the Accessibility role for this element.
     *
     * @param {object} cmd
     * @param {string} cmd.parameters.id
     *     Web element reference ID to the element for which the accessibility role
     *     will be returned.
     *
     * @returns {string}
     *     The Accessibility role for this element
     */
    getComputedRole(cmd: object): string;
    commands: {
        "Marionette:AcceptConnections": any;
        "Marionette:GetContext": any;
        "Marionette:GetScreenOrientation": any;
        "Marionette:GetWindowType": any;
        "Marionette:Quit": any;
        "Marionette:SetContext": any;
        "Marionette:SetScreenOrientation": any;
        "Addon:Install": any;
        "Addon:Uninstall": any;
        "L10n:LocalizeEntity": any;
        "L10n:LocalizeProperty": any;
        "reftest:setup": any;
        "reftest:run": any;
        "reftest:teardown": any;
        "WebDriver:AcceptAlert": any;
        "WebDriver:AcceptDialog": any;
        "WebDriver:AddCookie": any;
        "WebDriver:Back": any;
        "WebDriver:CloseChromeWindow": any;
        "WebDriver:CloseWindow": any;
        "WebDriver:DeleteAllCookies": any;
        "WebDriver:DeleteCookie": any;
        "WebDriver:DeleteSession": any;
        "WebDriver:DismissAlert": any;
        "WebDriver:ElementClear": any;
        "WebDriver:ElementClick": any;
        "WebDriver:ElementSendKeys": any;
        "WebDriver:ExecuteAsyncScript": any;
        "WebDriver:ExecuteScript": any;
        "WebDriver:FindElement": any;
        "WebDriver:FindElementFromShadowRoot": any;
        "WebDriver:FindElements": any;
        "WebDriver:FindElementsFromShadowRoot": any;
        "WebDriver:Forward": any;
        "WebDriver:FullscreenWindow": any;
        "WebDriver:GetActiveElement": any;
        "WebDriver:GetAlertText": any;
        "WebDriver:GetCapabilities": any;
        "WebDriver:GetComputedLabel": any;
        "WebDriver:GetComputedRole": any;
        "WebDriver:GetCookies": any;
        "WebDriver:GetCurrentURL": any;
        "WebDriver:GetElementAttribute": any;
        "WebDriver:GetElementCSSValue": any;
        "WebDriver:GetElementProperty": any;
        "WebDriver:GetElementRect": any;
        "WebDriver:GetElementTagName": any;
        "WebDriver:GetElementText": any;
        "WebDriver:GetPageSource": any;
        "WebDriver:GetShadowRoot": any;
        "WebDriver:GetTimeouts": any;
        "WebDriver:GetTitle": any;
        "WebDriver:GetWindowHandle": any;
        "WebDriver:GetWindowHandles": any;
        "WebDriver:GetWindowRect": any;
        "WebDriver:IsElementDisplayed": any;
        "WebDriver:IsElementEnabled": any;
        "WebDriver:IsElementSelected": any;
        "WebDriver:MinimizeWindow": any;
        "WebDriver:MaximizeWindow": any;
        "WebDriver:Navigate": any;
        "WebDriver:NewSession": any;
        "WebDriver:NewWindow": any;
        "WebDriver:PerformActions": any;
        "WebDriver:Print": any;
        "WebDriver:Refresh": any;
        "WebDriver:ReleaseActions": any;
        "WebDriver:SendAlertText": any;
        "WebDriver:SetPermission": any;
        "WebDriver:SetTimeouts": any;
        "WebDriver:SetWindowRect": any;
        "WebDriver:SwitchToFrame": any;
        "WebDriver:SwitchToParentFrame": any;
        "WebDriver:SwitchToWindow": any;
        "WebDriver:TakeScreenshot": any;
        "WebAuthn:AddVirtualAuthenticator": any;
        "WebAuthn:RemoveVirtualAuthenticator": any;
        "WebAuthn:AddCredential": any;
        "WebAuthn:GetCredentials": any;
        "WebAuthn:RemoveCredential": any;
        "WebAuthn:RemoveAllCredentials": any;
        "WebAuthn:SetUserVerified": any;
    };
}
