export namespace PerfTestHelpers {
    /**
     * Maps the entries in the given iterable to the given
     * promise-returning task function, and waits for all returned
     * promises to have resolved. At most `limit` promises may remain
     * unresolved at a time. When the limit is reached, the function will
     * wait for some to resolve before spawning more tasks.
     */
    function throttledMapPromises(iterable: any, task: any, limit?: number): Promise<any[]>;
    /**
     * Returns a promise which resolves to true if the resource at the
     * given URI exists, false if it doesn't. This should only be used
     * with local resources, such as from resource:/chrome:/jar:/file:
     * URIs.
     */
    function checkURIExists(uri: any): Promise<any>;
}
