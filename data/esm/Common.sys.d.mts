export namespace CommonUtils {
    let DONOTFAIL_IF_NO_ACC: number;
    let DONOTFAIL_IF_NO_INTERFACE: number;
    const accService: any;
    function clearAccService(): void;
    /**
     * Adds an observer for an 'a11y-consumers-changed' event.
     */
    function addAccConsumersChangedObserver(): void;
    /**
     * Returns a promise that resolves when 'a11y-consumers-changed' event is
     * fired.
     *
     * @return {Promise}
     *         event promise evaluating to event's data
     */
    function observeAccConsumersChanged(): Promise<any>;
    /**
     * Adds an observer for an 'a11y-init-or-shutdown' event with a value of "1"
     * which indicates that an accessibility service is initialized in the current
     * process.
     */
    function addAccServiceInitializedObserver(): void;
    /**
     * Returns a promise that resolves when an accessibility service is
     * initialized in the current process. Otherwise (if the service is shutdown)
     * the promise is rejected.
     */
    function observeAccServiceInitialized(): any;
    /**
     * Adds an observer for an 'a11y-init-or-shutdown' event with a value of "0"
     * which indicates that an accessibility service is shutdown in the current
     * process.
     */
    function addAccServiceShutdownObserver(): void;
    /**
     * Returns a promise that resolves when an accessibility service is shutdown
     * in the current process. Otherwise (if the service is initialized) the
     * promise is rejected.
     */
    function observeAccServiceShutdown(): any;
    /**
     * Extract DOMNode id from an accessible. If the accessible is in the remote
     * process, DOMNode is not present in parent process. However, if specified by
     * the author, DOMNode id will be attached to an accessible object.
     *
     * @param  {nsIAccessible} accessible  accessible
     * @return {String?}                   DOMNode id if available
     */
    function getAccessibleDOMNodeID(accessible: nsIAccessible): string;
    function getObjAddress(obj: any): any;
    function getNodePrettyName(node: any): string;
    /**
     * Convert role to human readable string.
     */
    function roleToString(role: any): any;
    /**
     * Shorten a long string if it exceeds MAX_TRIM_LENGTH.
     *
     * @param aString the string to shorten.
     *
     * @returns the shortened string.
     */
    function shortenString(str: any): any;
    function normalizeAccTreeObj(obj: any): any;
    function stringifyTree(obj: any): string;
    /**
     * Return pretty name for identifier, it may be ID, DOM node or accessible.
     */
    function prettyName(identifier: any): string;
    /**
     * Return accessible for the given identifier (may be ID attribute or DOM
     * element or accessible object) or null.
     *
     * @param accOrElmOrID
     *        identifier to get an accessible implementing the given interfaces
     * @param aInterfaces
     *        [optional] the interface or an array interfaces to query it/them
     *        from obtained accessible
     * @param elmObj
     *        [optional] object to store DOM element which accessible is obtained
     *        for
     * @param doNotFailIf
     *        [optional] no error for special cases (see DONOTFAIL_IF_NO_ACC,
     *        DONOTFAIL_IF_NO_INTERFACE)
     * @param doc
     *        [optional] document for when accOrElmOrID is an ID.
     */
    function getAccessible(accOrElmOrID: any, interfaces: any, elmObj: any, doNotFailIf: any, doc: any): any;
    /**
     * Return the DOM node by identifier (may be accessible, DOM node or ID).
     */
    function getNode(accOrNodeOrID: any, doc: any): any;
    /**
     * Return root accessible.
     *
     * @param  {DOMNode} doc
     *         Chrome document.
     *
     * @return {nsIAccessible}
     *         Accessible object for chrome window.
     */
    function getRootAccessible(doc: DOMNode): nsIAccessible;
    /**
     * Analogy of SimpleTest.is function used to compare objects.
     */
    function isObject(obj: any, expectedObj: any, msg: any): void;
}
