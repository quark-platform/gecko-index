/**
 * This class manages the process of translating the DOM from one language to another.
 * A translateHTML and a translateText function are injected into the constructor. This
 * class is responsible for subdividing a Node into small enough pieces to where it
 * contains a reasonable amount of text and inline elements for the translations engine
 * to translate. Once a node has been identified as a small enough chunk, its innerHTML
 * is read, and sent for translation. The async translation result comes back as an HTML
 * string. The DOM node is updated with the new text and potentially changed DOM ordering.
 *
 * This class also handles mutations of the DOM and will translate nodes as they are added
 * to the page, or the when the node's text is changed by content scripts.
 */
export class TranslationsDocument {
    /**
     * Construct a new TranslationsDocument. It is tied to a specific Document and cannot
     * be re-used. The translation functions are injected since this class shouldn't
     * manage the life cycle of the translations engines.
     *
     * @param {Document} document
     * @param {string} documentLanguage - The BCP 47 language tag.
     * @param {number} innerWindowId - This is used for better profiler marker reporting.
     * @param {TranslationFunction} translateHTML
     * @param {TranslationFunction} translateText
     */
    constructor(document: Document, documentLanguage: string, innerWindowId: number, translateHTML: TranslationFunction, translateText: TranslationFunction);
    /**
     * The BCP 47 language tag that is used on the page.
     *
     * @type {string} */
    documentLanguage: string;
    /**
     * This promise gets resolved when the initial viewport translations are done.
     * This is a key user-visible performance metric. It represents what the user
     * actually sees.
     *
     * @type {Promise<void> | null}
     */
    viewportTranslated: Promise<void> | null;
    /** @type {TranslationFunction} */
    translateHTML: TranslationFunction;
    /** @type {TranslationFunction} */
    translateText: TranslationFunction;
    /** @type {number} */
    innerWindowId: number;
    /** @type {DOMParser} */
    domParser: DOMParser;
    /**
     * This selector runs to find child nodes that should be excluded. It should be
     * basically the same implementation of `isExcludedNode`, but as a selector.
     *
     * @type {string}
     */
    excludedNodeSelector: string;
    observer: any;
    /**
     * Helper function for adding a new root to the mutation
     * observer.
     * @param {Node} root
     */
    observeNewRoot(root: Node): void;
    /**
     * This function finds all sub shadow trees of node and
     * add the ShadowRoot of those subtrees to the mutation
     * observer.
     */
    addShadowRootsToObserver(node: any): void;
    /**
     * Add a new element to start translating. This root is tracked for mutations and
     * kept up to date with translations. This will be the body element and title tag
     * for the document.
     *
     * @param {Element} [node]
     */
    addRootElement(node?: Element): void;
    /**
     * Add qualified nodes to queueNodeForTranslation by recursively walk
     * through the DOM tree of node, including elements in Shadow DOM.
     *
     * @param {Element} [node]
     */
    processSubdivide(node?: Element): void;
    /**
     * Start walking down through a node's subtree and decide which nodes to queue for
     * translation. This first node could be the root nodes of the DOM, such as the
     * document body, or the title element, or it could be a mutation target.
     *
     * The nodes go through a process of subdivision until an appropriate sized chunk
     * of inline text can be found.
     *
     * @param {Node} node
     */
    subdivideNodeForTranslations(node: Node): void;
    /**
     * Test whether this is an element we do not want to translate. These are things like
     * <code> elements, elements with a different "lang" attribute, and elements that
     * have a `translate=no` attribute.
     *
     * @param {Node} node
     */
    isExcludedNode(node: Node): boolean;
    /**
     * Runs `determineTranslationStatus`, but only on unprocessed nodes.
     *
     * @param {Node} node
     * @return {number} - One of the NodeStatus values.
     */
    determineTranslationStatusForUnprocessedNodes: (node: Node) => number;
    /**
     * Determines if a node should be submitted for translation, not translatable, or if
     * it should be subdivided further. It doesn't check if the node has already been
     * processed.
     *
     * The return result works as a TreeWalker NodeFilter as well.
     *
     * @param {Node} node
     * @returns {number} - One of the `NodeStatus` values. See that object
     *   for documentation. These values match the filters for the TreeWalker.
     *   These values also work as a `NodeFilter` value.
     */
    determineTranslationStatus(node: Node): number;
    /**
     * Queue a node for translation.
     * @param {Node} node
     */
    queueNodeForTranslation(node: Node): void;
    /**
     * Submit the translations giving priority to nodes in the viewport.
     */
    dispatchQueuedTranslations(): Promise<void>;
    /**
     * Record how many words were in the viewport, as this is the most important
     * user-visible translation content.
     */
    reportWordsInViewport(): void;
    /**
     * Submit a node for translation to the translations engine.
     *
     * @param {Node} node
     * @returns {Promise<void>}
     */
    submitTranslation(node: Node): Promise<void>;
    /**
     * Start the mutation observer, for instance after applying the translations to the DOM.
     */
    startMutationObserver(): void;
    /**
     * Stop the mutation observer, for instance to apply the translations to the DOM.
     */
    stopMutationObserver(): void;
    /**
     * This is called every `DOM_UPDATE_INTERVAL_MS` ms with translations for nodes.
     *
     * This function is called asynchronously, so nodes may already be dead. Before
     * accessing a node make sure and run `Cu.isDeadWrapper` to check that it is alive.
     */
    updateNodesWithTranslations(): void;
    /**
     * Schedule a node to be updated with a translation.
     *
     * @param {Node} node
     * @param {string} translatedHTML
     */
    scheduleNodeUpdateWithTranslation(node: Node, translatedHTML: string): void;
    /**
     * Check to see if a language matches the document language.
     *
     * @param {Node} node
     */
    matchesDocumentLanguage(node: Node): boolean;
    #private;
}
export type NodeVisibility = import("../translations").NodeVisibility;
export type TranslationFunction = (message: string) => Promise<string>;
