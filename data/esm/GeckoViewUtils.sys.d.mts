export namespace GeckoViewUtils {
    /**
     * Define a lazy getter that loads an object from external code, and
     * optionally handles observer and/or message manager notifications for the
     * object, so the object only loads when a notification is received.
     *
     * @param scope     Scope for holding the loaded object.
     * @param name      Name of the object to load.
     * @param service   If specified, load the object from a JS component; the
     *                  component must include the line
     *                  "this.wrappedJSObject = this;" in its constructor.
     * @param module    If specified, load the object from a JS module.
     * @param init      Optional post-load initialization function.
     * @param observers If specified, listen to specified observer notifications.
     * @param ppmm      If specified, listen to specified process messages.
     * @param mm        If specified, listen to specified frame messages.
     * @param ged       If specified, listen to specified global EventDispatcher events.
     * @param once      if true, only listen to the specified
     *                  events/messages/notifications once.
     */
    function addLazyGetter(scope: any, name: any, { service, module, handler, observers, ppmm, mm, ged, init, once }: {
        service: any;
        module: any;
        handler: any;
        observers: any;
        ppmm: any;
        mm: any;
        ged: any;
        init: any;
        once: any;
    }): void;
    function _addLazyListeners(events: any, handler: any, scope: any, name: any, addFn: any, handleFn: any): void;
    /**
     * Add lazy event listeners that only load the actual handler when an event
     * is being handled.
     *
     * @param target  Event target for the event listeners.
     * @param events  Event name as a string or array.
     * @param handler If specified, function that, for a given event, returns the
     *                actual event handler as an object or an array of objects.
     *                If handler is not specified, the actual event handler is
     *                specified using the scope and name pair.
     * @param scope   See handler.
     * @param name    See handler.
     * @param options Options for addEventListener.
     */
    function addLazyEventListener(target: any, events: any, { handler, scope, name, options }: {
        handler: any;
        scope: any;
        name: any;
        options: any;
    }): void;
    /**
     * Add lazy pref observers, and only load the actual handler once the pref
     * value changes from default, and every time the pref value changes
     * afterwards.
     *
     * @param aPrefs  Prefs as an object or array. Each pref object has fields
     *                "name" and "default", indicating the name and default value
     *                of the pref, respectively.
     * @param handler If specified, function that, for a given pref, returns the
     *                actual event handler as an object or an array of objects.
     *                If handler is not specified, the actual event handler is
     *                specified using the scope and name pair.
     * @param scope   See handler.
     * @param name    See handler.
     * @param once    If true, only observe the specified prefs once.
     */
    function addLazyPrefObserver(aPrefs: any, { handler, scope, name, once }: {
        handler: any;
        scope: any;
        name: any;
        once: any;
    }): void;
    function getRootDocShell(aWin: any): any;
    /**
     * Return the outermost chrome DOM window (the XUL window) for a given DOM
     * window, in the parent process.
     *
     * @param aWin a DOM window.
     */
    function getChromeWindow(aWin: any): any;
    /**
     * Return the content frame message manager (aka the frame script global
     * object) for a given DOM window, in a child process.
     *
     * @param aWin a DOM window.
     */
    function getContentFrameMessageManager(aWin: any): any;
    /**
     * Return the per-nsWindow EventDispatcher for a given DOM window, in either
     * the parent process or a child process.
     *
     * @param aWin a DOM window.
     */
    function getDispatcherForWindow(aWin: any): any;
    /**
     * Return promise for waiting for finishing PanZoomState.
     *
     * @param aWindow a DOM window.
     * @return promise
     */
    function waitForPanZoomState(aWindow: any): Promise<any>;
    /**
     * Add logging functions to the specified scope that forward to the given
     * Log.sys.mjs logger. Currently "debug" and "warn" functions are supported. To
     * log something, call the function through a template literal:
     *
     *   function foo(bar, baz) {
     *     debug `hello world`;
     *     debug `foo called with ${bar} as bar`;
     *     warn `this is a warning for ${baz}`;
     *   }
     *
     * An inline format can also be used for logging:
     *
     *   let bar = 42;
     *   do_something(bar); // No log.
     *   do_something(debug.foo = bar); // Output "foo = 42" to the log.
     *
     * @param aTag Name of the Log.jsm logger to forward logs to.
     * @param aScope Scope to add the logging functions to.
     */
    function initLogging(aTag: any, aScope: any): any;
    const rootLogger: any;
    function _log(aLogger: any, aLevel: any, aStrings: any, aExprs: any): void;
    /**
     * Checks whether the principal is supported for permissions.
     *
     * @param {nsIPrincipal} principal
     *        The principal to check.
     *
     * @return {boolean} if the principal is supported.
     */
    function isSupportedPermissionsPrincipal(principal: nsIPrincipal): boolean;
    /**
     * Checks whether we support managing permissions for a specific scheme.
     * @param {string} scheme - Scheme to test.
     * @returns {boolean} Whether the scheme is supported.
     */
    function isSupportedPermissionsScheme(scheme: string): boolean;
}
