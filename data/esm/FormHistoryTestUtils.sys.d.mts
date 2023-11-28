export namespace FormHistoryTestUtils {
    /**
     * Adds values to form history.
     *
     * @param {string} fieldname The field name.
     * @param {Array} additions Array of entries describing the values to add.
     *   Each entry can either be a string, or an object with the shape
     *   { value, source}.
     * @returns {Promise} Resolved once the operation is complete.
     */
    function add(fieldname: string, additions?: any[]): Promise<any>;
    /**
     * Counts values from form history.
     *
     * @param {string} fieldname The field name.
     * @param {Array} filters Objects describing the search properties.
     * @returns {number} The number of entries found.
     */
    function count(fieldname: string, filters?: any[]): number;
    /**
     * Removes values from form history.
     * If you want to remove all history, use clear() instead.
     *
     * @param {string} fieldname The field name.
     * @param {Array} removals Array of entries describing the values to add.
     *   Each entry can either be a string, or an object with the shape
     *   { value, source}. If source is specified, only the source relation will
     *   be removed, while the global form history value persists.
     * @returns {Promise} Resolved once the operation is complete.
     */
    function remove(fieldname: string, removals: any[]): Promise<any>;
    /**
     * Removes all values from form history.
     * If you want to remove individual values, use remove() instead.
     *
     * @param {string} fieldname The field name whose history should be cleared.
     *   Can be omitted to clear all form history.
     * @returns {Promise} Resolved once the operation is complete.
     */
    function clear(fieldname: string): Promise<any>;
    /**
     * Searches form history.
     *
     * @param {string} fieldname The field name.
     * @param {Array} filters Objects describing the search properties.
     * @returns {Promise<Array>} Resolves an array of found form history entries.
     */
    function search(fieldname: string, filters?: any[]): Promise<any[]>;
    /**
     * Gets autocomplete results from form history.
     *
     * @param {string} searchString The search string.
     * @param {string} fieldname The field name.
     * @param {Array} filters Objects describing the search properties.
     * @returns {Promise<Array>} Resolves an array of found form history entries.
     */
    function autocomplete(searchString: string, fieldname: string, filters?: any[]): Promise<any[]>;
}
