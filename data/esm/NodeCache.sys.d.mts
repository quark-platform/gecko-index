/**
 * @typedef {object} NodeReferenceDetails
 * @property {number} browserId
 * @property {number} browsingContextGroupId
 * @property {number} browsingContextId
 * @property {boolean} isTopBrowsingContext
 * @property {WeakRef} nodeWeakRef
 */
/**
 * The class provides a mapping between DOM nodes and a unique node references.
 * Supported types of nodes are Element and ShadowRoot.
 */
export class NodeCache {
    /**
     * Get the number of nodes in the cache.
     */
    get size(): number;
    /**
     * Get or if not yet existent create a unique reference for an Element or
     * ShadowRoot node.
     *
     * @param {Node} node
     *    The node to be added.
     * @param {Map<BrowsingContext, Array<string>>} seenNodeIds
     *     Map of browsing contexts to their seen node ids during the current
     *     serialization.
     *
     * @returns {string}
     *     The unique node reference for the DOM node.
     */
    getOrCreateNodeReference(node: Node, seenNodeIds: Map<BrowsingContext, Array<string>>): string;
    /**
     * Clear known DOM nodes.
     *
     * @param {object=} options
     * @param {boolean=} options.all
     *     Clear all references from any browsing context. Defaults to false.
     * @param {BrowsingContext=} options.browsingContext
     *     Clear all references living in that browsing context.
     */
    clear(options?: object | undefined): void;
    /**
     * Get a DOM node by its unique reference.
     *
     * @param {BrowsingContext} browsingContext
     *     The browsing context the node should be part of.
     * @param {string} nodeId
     *     The unique node reference of the DOM node.
     *
     * @returns {Node|null}
     *     The DOM node that the unique identifier was generated for or
     *     `null` if the node does not exist anymore.
     */
    getNode(browsingContext: BrowsingContext, nodeId: string): Node | null;
    /**
     * Get detailed information for the node reference.
     *
     * @param {string} nodeId
     *
     * @returns {NodeReferenceDetails}
     *     Node details like: browsingContextId
     */
    getReferenceDetails(nodeId: string): NodeReferenceDetails;
    #private;
}
export type NodeReferenceDetails = {
    browserId: number;
    browsingContextGroupId: number;
    browsingContextId: number;
    isTopBrowsingContext: boolean;
    nodeWeakRef: WeakRef<any>;
};
