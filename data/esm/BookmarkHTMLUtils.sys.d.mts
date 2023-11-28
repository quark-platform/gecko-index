export const BookmarkHTMLUtils: Readonly<{
    /**
     * Loads the current bookmarks hierarchy from a "bookmarks.html" file.
     *
     * @param aSpec
     *        String containing the "file:" URI for the existing "bookmarks.html"
     *        file to be loaded.
     * @param [options.replace]
     *        Whether we should erase existing bookmarks before loading.
     *        Defaults to `false`.
     * @param [options.source]
     *        The bookmark change source, used to determine the sync status for
     *        imported bookmarks. Defaults to `RESTORE` if `replace = true`, or
     *        `IMPORT` otherwise.
     *
     * @returns {Promise<number>} The number of imported bookmarks, not including
     *                           folders and separators.
     * @resolves When the new bookmarks have been created.
     * @rejects JavaScript exception.
     */
    importFromURL(aSpec: any, { replace: aInitialImport, source: aSource, }?: {
        replace?: boolean;
        source?: any;
    }): Promise<number>;
    /**
     * Loads the current bookmarks hierarchy from a "bookmarks.html" file.
     *
     * @param aFilePath
     *        OS.File path string of the "bookmarks.html" file to be loaded.
     * @param [options.replace]
     *        Whether we should erase existing bookmarks before loading.
     *        Defaults to `false`.
     * @param [options.source]
     *        The bookmark change source, used to determine the sync status for
     *        imported bookmarks. Defaults to `RESTORE` if `replace = true`, or
     *        `IMPORT` otherwise.
     *
     * @returns {Promise<number>} The number of imported bookmarks, not including
     *                            folders and separators
     * @resolves When the new bookmarks have been created.
     * @rejects JavaScript exception.
     */
    importFromFile(aFilePath: any, { replace: aInitialImport, source: aSource, }?: {
        replace?: boolean;
        source?: any;
    }): Promise<number>;
    /**
     * Saves the current bookmarks hierarchy to a "bookmarks.html" file.
     *
     * @param aFilePath
     *        OS.File path string for the "bookmarks.html" file to be created.
     *
     * @return {Promise}
     * @resolves To the exported bookmarks count when the file has been created.
     * @rejects JavaScript exception.
     */
    exportToFile(aFilePath: any): Promise<any>;
    readonly defaultPath: any;
}>;
