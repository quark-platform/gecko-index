/**
 * This class scores a query string against sets of phrases.  To refer to a
 * single set of phrases, we borrow the term "document" from search engine
 * terminology.  To use this class, first add your documents with `addDocument`,
 * and then call `score` with a query string.  `score` returns a sorted array of
 * document-score pairs.
 *
 * The scoring method is fairly simple and is based on Levenshtein edit
 * distance.  Therefore, lower scores indicate a better match than higher
 * scores.  In summary, a query matches a phrase if the query starts with the
 * phrase.  So a query "firefox update foo bar" matches the phrase "firefox
 * update" for example.  A query matches a document if it matches any phrase in
 * the document.  The query and phrases are compared word for word, and we allow
 * fuzzy matching by computing the Levenshtein edit distance in each comparison.
 * The amount of fuzziness allowed is controlled with `distanceThreshold`.  If
 * the distance in a comparison is greater than this threshold, then the phrase
 * does not match the query.  The final score for a document is the minimum edit
 * distance between its phrases and the query.
 *
 * As mentioned, `score` returns a sorted array of document-score pairs.  It's
 * up to you to filter the array to exclude scores above a certain threshold, or
 * to take the top scorer, etc.
 */
export class QueryScorer {
    /**
     * @param {object} options
     *   Constructor options.
     * @param {number} [options.distanceThreshold]
     *   Edit distances no larger than this value are considered matches.
     * @param {Map} [options.variations]
     *   For convenience, the scorer can augment documents by replacing certain
     *   words with other words and phrases. This mechanism is called variations.
     *   This keys of this map are words that should be replaced, and the values
     *   are the replacement words or phrases.  For example, if you add a document
     *   whose only phrase is "firefox update", normally the scorer will register
     *   only this single phrase for the document.  However, if you pass the value
     *   `new Map(["firefox", ["fire fox", "fox fire", "foxfire"]])` for this
     *   parameter, it will register 4 total phrases for the document: "fire fox
     *   update", "fox fire update", "foxfire update", and the original "firefox
     *   update".
     */
    constructor({ distanceThreshold, variations }?: {
        distanceThreshold?: number;
        variations?: Map<any, any>;
    });
    _distanceThreshold: number;
    _variations: Map<any, any>;
    _documents: Set<any>;
    _rootNode: Node;
    /**
     * Adds a document to the scorer.
     *
     * @param {object} doc
     *   The document.
     * @param {string} doc.id
     *   The document's ID.
     * @param {Array} doc.phrases
     *   The set of phrases in the document.  Each phrase should be a string.
     */
    addDocument(doc: {
        id: string;
        phrases: any[];
    }): void;
    /**
     * Scores a query string against the documents in the scorer.
     *
     * @param {string} queryString
     *   The query string to score.
     * @returns {Array}
     *   An array of objects: { document, score }.  Each element in the array is a
     *   a document and its score against the query string.  The elements are
     *   ordered by score from low to high.  Scores represent edit distance, so
     *   lower scores are better.
     */
    score(queryString: string): any[];
    /**
     * Builds the phrase tree based on the current documents.
     *
     * The phrase tree lets us efficiently match queries against phrases.  Each
     * path through the tree starting from the root and ending at a leaf
     * represents a complete phrase in a document (or more than one document, if
     * the same phrase is present in multiple documents).  Each node in the path
     * represents a word in the phrase.  To match a query, we start at the root,
     * and in the root we look up the query's first word.  If the word matches the
     * first word of any phrase, then the root will have a child node representing
     * that word, and we move on to the child node.  Then we look up the query's
     * second word in the child node, and so on, until either a lookup fails or we
     * reach a leaf node.
     *
     * @param {Node} node
     *   The current node being visited.
     * @param {object} doc
     *   The document whose phrases are being added to the tree.
     * @param {Array} phrase
     *   The phrase to add to the tree.
     * @param {number} wordIndex
     *   The index in the phrase of the current word.
     */
    _buildPhraseTree(node: Node, doc: object, phrase: any[], wordIndex: number): void;
    /**
     * Traverses a path in the phrase tree in order to score a query.  See
     * `_buildPhraseTree` for a description of how this works.
     *
     * @param {object} options
     *   Options.
     * @param {Array} options.queryWords
     *   The query being scored, split into words.
     * @param {Node} [options.node]
     *   The node currently being visited.
     * @param {Map} [options.minDistanceByDoc]
     *   Keeps track of the minimum edit distance for each document as the
     *   traversal continues.
     * @param {number} [options.queryWordsIndex]
     *   The current index in the query words array.
     * @param {number} [options.phraseDistance]
     *   The total edit distance between the query and the path in the tree that's
     *   been traversed so far.
     * @returns {Map} minDistanceByDoc
     */
    _traverse({ queryWords, node, minDistanceByDoc, queryWordsIndex, phraseDistance, }?: {
        queryWords: any[];
        node?: Node;
        minDistanceByDoc?: Map<any, any>;
        queryWordsIndex?: number;
        phraseDistance?: number;
    }): Map<any, any>;
}
export const UrlbarProviderInterventions: ProviderInterventions;
/**
 * A node in the QueryScorer's phrase tree.
 */
declare class Node {
    constructor(word: any);
    word: any;
    documents: Set<any>;
    childrenByWord: Map<any, any>;
}
/**
 * A provider that returns actionable tip results when the user is performing
 * a search related to those actions.
 */
declare class ProviderInterventions {
    currentTip: string;
    tipsShownInCurrentEngagement: Set<any>;
    /**
     * Enum of the types of intervention tips.
     *
     * @returns {{ NONE: string; CLEAR: string; REFRESH: string; UPDATE_ASK: string; UPDATE_CHECKING: string; UPDATE_REFRESH: string; UPDATE_RESTART: string; UPDATE_WEB: string; }}
     */
    get TIP_TYPE(): {
        NONE: string;
        CLEAR: string;
        REFRESH: string;
        UPDATE_ASK: string;
        UPDATE_CHECKING: string;
        UPDATE_REFRESH: string;
        UPDATE_RESTART: string;
        UPDATE_WEB: string;
    };
    /**
     * Unique name for the provider, used by the context to filter on providers.
     *
     * @returns {string}
     */
    get name(): string;
    /**
     * The type of the provider, must be one of UrlbarUtils.PROVIDER_TYPE.
     *
     * @returns {UrlbarUtils.PROVIDER_TYPE}
     */
    get type(): UrlbarUtils.PROVIDER_TYPE;
    /**
     * Whether this provider should be invoked for the given context.
     * If this method returns false, the providers manager won't start a query
     * with this provider, to save on resources.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {boolean} Whether this provider should be invoked for the search.
     */
    isActive(queryContext: UrlbarQueryContext): boolean;
    _setCurrentTipFromAppUpdaterStatus(waitForCheck: any): Promise<void>;
    /**
     * Starts querying.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result. A UrlbarResult should be passed to it.
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): Promise<void>;
    _appUpdaterListener: any;
    /**
     * Cancels a running query,
     *
     * @param {UrlbarQueryContext} queryContext the query context object to cancel
     *        query for.
     */
    cancelQuery(queryContext: UrlbarQueryContext): void;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    /**
     * Checks for app updates.
     *
     * @param {boolean} force If false, this only checks for updates if we haven't
     *        already checked within the update-check period.  If true, we check
     *        regardless.
     */
    checkForBrowserUpdate(force?: boolean): void;
    _lastUpdateCheckTime: number;
    /**
     * Resets the provider's app updater state by making a new app updater.  This
     * is intended to be used by tests.
     */
    resetAppUpdater(): void;
    #private;
}
export {};
