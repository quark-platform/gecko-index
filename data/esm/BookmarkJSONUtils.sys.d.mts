export const BookmarkJSONUtils: Readonly<{
    /**
     * Import bookmarks from a url.
     *
     * @param {string} aSpec
     *        url of the bookmark data.
     * @param {boolean} [options.replace]
     *        Whether we should erase existing bookmarks before importing.
     * @param {PlacesUtils.bookmarks.SOURCES} [options.source]
     *        The bookmark change source, used to determine the sync status for
     *        imported bookmarks. Defaults to `RESTORE` if `replace = true`, or
     *        `IMPORT` otherwise.
     *
     * @returns {Promise<number>} The number of imported bookmarks, not including
     *                            folders and separators.
     * @resolves When the new bookmarks have been created.
     * @rejects JavaScript exception.
     */
    importFromURL(aSpec: string, { replace: aReplace, source: aSource, }?: boolean): Promise<number>;
    /**
     * Restores bookmarks and tags from a JSON file.
     *
     * @param aFilePath
     *        OS.File path string of bookmarks in JSON or JSONlz4 format to be restored.
     * @param [options.replace]
     *        Whether we should erase existing bookmarks before importing.
     * @param [options.source]
     *        The bookmark change source, used to determine the sync status for
     *        imported bookmarks. Defaults to `RESTORE` if `replace = true`, or
     *        `IMPORT` otherwise.
     *
     * @returns {Promise<number>} The number of imported bookmarks, not including
     *                            folders and separators.
     * @resolves When the new bookmarks have been created.
     * @rejects JavaScript exception.
     */
    importFromFile(aFilePath: any, { replace: aReplace, source: aSource, }?: {
        replace?: boolean;
        source?: any;
    }): Promise<number>;
    /**
     * Serializes bookmarks using JSON, and writes to the supplied file path.
     *
     * @param {path} aFilePath
     *   Path string for the bookmarks file to be created.
     * @param {object} [aOptions]
     * @param {string} [failIfHashIs]
     *   If the generated file would have the same hash defined here, will reject
     *   with ex.becauseSameHash
     * @param {boolean} [compress]
     *   If true, writes file using lz4 compression
     * @return {Promise}
     * @resolves once the file has been created, to an object with the
     *           following properties:
     *            - count: number of exported bookmarks
     *            - hash: file hash for contents comparison
     * @rejects JavaScript exception.
     */
    exportToFile(aFilePath: path, aOptions?: object): Promise<any>;
}>;
