export namespace reftest {
    export { Runner };
}
declare class Runner {
    constructor(driver: any);
    driver: any;
    canvasCache: DefaultMap;
    isPrint: boolean;
    windowUtils: any;
    lastURL: any;
    useRemoteTabs: any;
    useRemoteSubframes: any;
    /**
     * Setup the required environment for running reftests.
     *
     * This will open a non-browser window in which the tests will
     * be loaded, and set up various caches for the reftest run.
     *
     * @param {Object<number>} urlCount
     *     Object holding a map of URL: number of times the URL
     *     will be opened during the reftest run, where that's
     *     greater than 1.
     * @param {string} screenshotMode
     *     String enum representing when screenshots should be taken
     */
    setup(urlCount: any, screenshotMode: string, isPrint?: boolean): void;
    parentWindow: any;
    screenshotMode: any;
    urlCount: Map<any, any>;
    /**
     * Cleanup the environment once the reftest is finished.
     */
    teardown(): void;
    ensureWindow(timeout: any, width: any, height: any): Promise<any>;
    reftestWin: any;
    openWindow(width: any, height: any): Promise<any>;
    setupWindow(reftestWin: any, width: any, height: any): any;
    abort(): Promise<void>;
    /**
     * Run a specific reftest.
     *
     * The assumed semantics are those of web-platform-tests where
     * references form a tree and each test must meet all the conditions
     * to reach one leaf node of the tree in order for the overall test
     * to pass.
     *
     * @param {string} testUrl
     *     URL of the test itself.
     * @param {Array.<Array>} references
     *     Array representing a tree of references to try.
     *
     *     Each item in the array represents a single reference node and
     *     has the form <code>[referenceUrl, references, relation]</code>,
     *     where <var>referenceUrl</var> is a string to the URL, relation
     *     is either <code>==</code> or <code>!=</code> depending on the
     *     type of reftest, and references is another array containing
     *     items of the same form, representing further comparisons treated
     *     as AND with the current item. Sibling entries are treated as OR.
     *
     *     For example with testUrl of T:
     *
     *     <pre><code>
     *       references = [[A, [[B, [], ==]], ==]]
     *       Must have T == A AND A == B to pass
     *
     *       references = [[A, [], ==], [B, [], !=]
     *       Must have T == A OR T != B
     *
     *       references = [[A, [[B, [], ==], [C, [], ==]], ==], [D, [], ]]
     *       Must have (T == A AND A == B) OR (T == A AND A == C) OR (T == D)
     *     </code></pre>
     *
     * @param {string} expected
     *     Expected test outcome (e.g. <tt>PASS</tt>, <tt>FAIL</tt>).
     * @param {number} timeout
     *     Test timeout in milliseconds.
     *
     * @returns {object}
     *     Result object with fields status, message and extra.
     */
    run(testUrl: string, references: Array<any[]>, expected: string, timeout: number, pageRanges?: {}, width?: number, height?: number): object;
    runTest(testUrl: any, references: any, expected: any, timeout: any, pageRanges: any, width: any, height: any): Promise<{
        status: string;
        message: string;
        stack: any;
        extra: {};
    }>;
    compareUrls(win: any, lhsUrl: any, rhsUrl: any, relation: any, timeout: any, pageRanges: any, extras: any): Promise<{
        lhs: any;
        rhs: any;
        passed: boolean;
        error: any;
        msg: string;
    }>;
    isAcceptableDifference(maxDifference: any, pixelsDifferent: any, allowed: any): boolean;
    ensureFocus(win: any): void;
    updateBrowserRemotenessByURL(browser: any, url: any): void;
    loadTestUrl(win: any, url: any, timeout: any): Promise<void>;
    screenshot(win: any, url: any, timeout: any): Promise<{
        canvas: any;
        reuseCanvas: boolean;
    }>;
    screenshotPaginated(win: any, url: any, timeout: any, pageRanges: any): Promise<(number | AsyncGenerator<{
        canvas: any;
        reuseCanvas: boolean;
    }, void, unknown>)[]>;
    loadPdfJs(): Promise<void>;
    loadPdf(data: any): Promise<any>;
    renderPages(pdf: any, pages: any): AsyncGenerator<{
        canvas: any;
        reuseCanvas: boolean;
    }, void, unknown>;
    getPages(pageRanges: any, url: any, totalPages: any): Set<any>;
}
declare class DefaultMap extends Map<any, any> {
    constructor(iterable: any, defaultFactory: any);
    defaultFactory: any;
    get(key: any): any;
}
export {};
