export namespace KeywordUtils {
    /**
     * Replaces %s or %S in the provided url or postData with the given parameter,
     * acccording to the best charset for the given url.
     *
     * @return [url, postData]
     * @throws if nor url nor postData accept a param, but a param was provided.
     */
    function parseUrlAndPostData(url: any, postData: any, param: any): Promise<any[]>;
    /**
     * Returns a set of parameters if a keyword is registered and the search
     * string can be bound to it.
     *
     * @param {string} keyword The typed keyword.
     * @param {string} searchString The full search string, including the keyword.
     * @returns { entry, url, postData }
     */
    function getBindableKeyword(keyword: string, searchString: string): any;
}
