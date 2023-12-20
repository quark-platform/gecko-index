/**
 * Resolve element from specified web reference identifier.
 *
 * @param {BrowsingContext} browsingContext
 *     The browsing context to retrieve the element from.
 * @param {string} nodeId
 *     The WebReference uuid for a DOM element.
 * @param {NodeCache} nodeCache
 *     Node cache that holds already seen WebElement and ShadowRoot references.
 *
 * @returns {Element}
 *     The DOM element that the identifier was generated for.
 *
 * @throws {NoSuchElementError}
 *     If the element doesn't exist in the current browsing context.
 * @throws {StaleElementReferenceError}
 *     If the element has gone stale, indicating its node document is no
 *     longer the active document or it is no longer attached to the DOM.
 */
export function getKnownElement(browsingContext: BrowsingContext, nodeId: string, nodeCache: NodeCache): Element;
/**
 * Resolve ShadowRoot from specified web reference identifier.
 *
 * @param {BrowsingContext} browsingContext
 *     The browsing context to retrieve the shadow root from.
 * @param {string} nodeId
 *     The WebReference uuid for a ShadowRoot.
 * @param {NodeCache} nodeCache
 *     Node cache that holds already seen WebElement and ShadowRoot references.
 *
 * @returns {ShadowRoot}
 *     The ShadowRoot that the identifier was generated for.
 *
 * @throws {NoSuchShadowRootError}
 *     If the ShadowRoot doesn't exist in the current browsing context.
 * @throws {DetachedShadowRootError}
 *     If the ShadowRoot is detached, indicating its node document is no
 *     longer the active document or it is no longer attached to the DOM.
 */
export function getKnownShadowRoot(browsingContext: BrowsingContext, nodeId: string, nodeCache: NodeCache): ShadowRoot;
export namespace json {
    /**
     * Clone arbitrary objects to JSON-safe primitives that can be
     * transported across processes and over the Marionette protocol.
     *
     * The marshaling rules are as follows:
     *
     * - Primitives are returned as is.
     *
     * - Collections, such as `Array`, `NodeList`, `HTMLCollection`
     *   et al. are transformed to arrays and then recursed.
     *
     * - Elements and ShadowRoots that are not known WebReference's are added to
     *   the `NodeCache`. For both the associated unique web reference identifier
     *   is returned.
     *
     * - Objects with custom JSON representations, i.e. if they have
     *   a callable `toJSON` function, are returned verbatim.  This means
     *   their internal integrity _are not_ checked.  Be careful.
     *
     * - If a cyclic references is detected a JavaScriptError is thrown.
     *
     * @param {object} value
     *     Object to be cloned.
     * @param {NodeCache} nodeCache
     *     Node cache that holds already seen WebElement and ShadowRoot references.
     *
     * @returns {Object<Map<BrowsingContext, Array<string>, object>>}
     *     Object that contains a list of browsing contexts each with a list of
     *     shared ids for collected elements and shadow root nodes, and second the
     *     same object as provided by `value` with the WebDriver classic supported
     *     DOM nodes replaced by WebReference's.
     *
     * @throws {JavaScriptError}
     *     If an object contains cyclic references.
     * @throws {StaleElementReferenceError}
     *     If the element has gone stale, indicating it is no longer
     *     attached to the DOM.
     */
    function clone(value: any, nodeCache: NodeCache): any;
    /**
     * Deserialize an arbitrary object.
     *
     * @param {object} value
     *     Arbitrary object.
     * @param {NodeCache} nodeCache
     *     Node cache that holds already seen WebElement and ShadowRoot references.
     * @param {BrowsingContext} browsingContext
     *     The browsing context to check.
     *
     * @returns {object}
     *     Same object as provided by `value` with the WebDriver specific
     *     references replaced with real JavaScript objects.
     *
     * @throws {NoSuchElementError}
     *     If the WebElement reference has not been seen before.
     * @throws {StaleElementReferenceError}
     *     If the element is stale, indicating it is no longer attached to the DOM.
     */
    function deserialize(value: any, nodeCache: NodeCache, browsingContext: BrowsingContext): any;
    /**
     * Convert unique navigable ids to internal browser ids.
     *
     * @param {object} serializedData
     *     The data to process.
     *
     * @returns {object}
     *     The processed data.
     */
    function mapFromNavigableIds(serializedData: any): any;
    /**
     * Convert browser ids to unique navigable ids.
     *
     * @param {object} serializedData
     *     The data to process.
     *
     * @returns {object}
     *     The processed data.
     */
    function mapToNavigableIds(serializedData: any): any;
}
