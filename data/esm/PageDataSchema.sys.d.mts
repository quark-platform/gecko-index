export namespace PageDataSchema {
    let DATA_TYPE: Readonly<{
        PRODUCT: 3;
        DOCUMENT: 4;
        ARTICLE: 5;
        AUDIO: 6;
        VIDEO: 7;
    }>;
    /**
     * Gets the data type name.
     *
     * @param {DATA_TYPE} type
     *   The data type from the DATA_TYPE enumeration
     *
     * @returns {string | null} The name for the type or null if not found.
     */
    function nameForType(type: DATA_TYPE): string;
    /**
     * Asynchronously validates some page data against the expected schema. Throws
     * an exception if validation fails.
     *
     * @param {DATA_TYPE} type
     *   The data type from the DATA_TYPE enumeration
     * @param {object} data
     *   The page data
     */
    function validateData(type: DATA_TYPE, data: any): Promise<void>;
    /**
     * Asynchronously validates an entire PageData structure. Any invalid or
     * unknown data types are dropped.
     *
     * @param {PageData} pageData
     *   The page data
     *
     * @returns {PageData} The validated page data structure
     */
    function validatePageData(pageData: PageData): PageData;
    /**
     * Adds new page data into an existing data set. Any existing data is not
     * overwritten.
     *
     * @param {PageData} existingPageData
     *   The existing page data
     * @param {PageData} newPageData
     *   The new page data
     *
     * @returns {PageData} The joined data.
     */
    function coalescePageData(existingPageData: PageData, newPageData: PageData): PageData;
    /**
     * Collects page data from a DOM document.
     *
     * @param {Document} document
     *   The DOM document to collect data from
     *
     * @returns {Promise<PageData | null>} The data collected or null in case of
     *   error.
     */
    function collectPageData(document: Document): Promise<any>;
}
