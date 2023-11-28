export namespace FileTestUtils {
    /**
     * Returns a reference to a temporary file that is guaranteed not to exist and
     * to have never been created before. If a file or a directory with this name
     * is created by the test, it will be deleted when all tests terminate.
     *
     * @param suggestedName [optional]
     *        Any extension on this template file name will be preserved. If this
     *        is unspecified, the returned file name will have the generic ".dat"
     *        extension, which may indicate either a binary or a text data file.
     *
     * @return nsIFile pointing to a non-existent file in a temporary directory.
     *
     * @note It is not enough to delete the file if it exists, or to delete the
     *       file after calling nsIFile.createUnique, because on Windows the
     *       delete operation in the file system may still be pending, preventing
     *       a new file with the same name to be created.
     */
    function getTempFile(suggestedName?: string): any;
    /**
     * Attemps to remove the given file or directory recursively, in a way that
     * works even on Windows, where race conditions may occur in the file system
     * when creating and removing files at the pace of the test suites.
     *
     * The function may fail silently if access is denied. This means that it
     * should only be used to clean up temporary files, rather than for cases
     * where the removal is part of a test and must be guaranteed.
     *
     * @param path
     *        String representing the path to remove.
     */
    function tolerantRemove(path: any): Promise<void>;
}
