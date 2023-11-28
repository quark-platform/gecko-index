export namespace DownloadPaths {
    /**
     * Sanitizes an arbitrary string via mimeSvc.validateFileNameForSaving.
     *
     * If the filename being validated is one that was returned from a
     * file picker, pass false for compressWhitespaces and true for
     * allowInvalidFilenames. Otherwise, the default values of the arguments
     * should generally be used.
     *
     * @param {string} leafName The full leaf name to sanitize
     * @param {boolean} [compressWhitespaces] Whether consecutive whitespaces
     *        should be compressed. The default value is true.
     * @param {boolean} [allowInvalidFilenames] Allow invalid and dangerous
     *        filenames and extensions as is.
     */
    function sanitize(leafName: string, { compressWhitespaces, allowInvalidFilenames }?: boolean): any;
    /**
     * Creates a uniquely-named file starting from the name of the provided file.
     * If a file with the provided name already exists, the function attempts to
     * create nice alternatives, like "base(1).ext" (instead of "base-1.ext").
     *
     * If a unique name cannot be found, the function throws the XPCOM exception
     * NS_ERROR_FILE_TOO_BIG. Other exceptions, like NS_ERROR_FILE_ACCESS_DENIED,
     * can also be expected.
     *
     * @param templateFile
     *        nsIFile whose leaf name is going to be used as a template. The
     *        provided object is not modified.
     *
     * @return A new instance of an nsIFile object pointing to the newly created
     *         empty file. On platforms that support permission bits, the file is
     *         created with permissions 644.
     */
    function createNiceUniqueFile(templateFile: any): any;
    /**
     * Separates the base name from the extension in a file name, recognizing some
     * double extensions like ".tar.gz".
     *
     * @param leafName
     *        The full leaf name to be parsed. Be careful when processing names
     *        containing leading or trailing dots or spaces.
     *
     * @return [base, ext]
     *         The base name of the file, which can be empty, and its extension,
     *         which always includes the leading dot unless it's an empty string.
     *         Concatenating the two items always results in the original name.
     */
    function splitBaseNameAndExtension(leafName: any): string[];
}
