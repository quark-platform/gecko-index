export namespace ContentDOMReference {
    function _init(): void;
    function observe(subject: any, topic: any, data: any): void;
    /**
     * Generate and return an identifier for a given DOM element.
     *
     * @param {Element} element The DOM element to generate the identifier for.
     * @return {ElementIdentifier} The identifier for the DOM element that can be passed between
     * processes as a message.
     */
    function get(element: Element): any;
    /**
     * Resolves an identifier back into the DOM Element that it was generated from.
     *
     * @param {ElementIdentifier} The identifier generated via ContentDOMReference.get for a
     * DOM element.
     * @return {Element} The DOM element that the identifier was generated for, or
     * null if the element does not still exist.
     */
    function resolve(identifier: any): Element;
    /**
     * Removes an identifier from the registry so that subsequent attempts
     * to resolve it will result in null. This is done automatically when the
     * target node is GCed.
     *
     * @param {ElementIdentifier} The identifier to revoke, issued by ContentDOMReference.get for
     * a DOM element.
     */
    function _revoke(identifier: any): void;
    /**
     * Private helper function that resolves a BrowsingContext and ID (the
     * pair that makes up an identifier) to a DOM element.
     *
     * @param {BrowsingContext} browsingContext The BrowsingContext that was hosting
     * the DOM element at the time that the identifier was generated.
     * @param {ElementID} id The ID generated for the DOM element.
     *
     * @return {Element} The DOM element that the identifier was generated for, or
     * null if the element does not still exist.
     */
    function _resolveIDToElement(browsingContext: BrowsingContext, id: number): Element;
}
export type ElementID = number;
export type ElementIdentifier = any;
