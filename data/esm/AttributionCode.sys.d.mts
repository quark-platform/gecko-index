export namespace AttributionIOUtils {
    function write(path: any, bytes: any): Promise<number>;
    function read(path: any): Promise<Uint8Array>;
    function exists(path: any): Promise<boolean>;
}
export namespace AttributionCode {
    const msixCampaignId: any;
    const attributionFile: void | nsISupportsType;
    /**
     * Write the given attribution code to the attribution file.
     * @param {String} code to write.
     */
    function writeAttributionFile(code: string): Promise<void>;
    const allowedCodeKeys: string[];
    /**
     * Returns an object containing a key-value pair for each piece of attribution
     * data included in the passed-in attribution code string.
     * If the string isn't a valid attribution code, returns an empty object.
     */
    function parseAttributionCode(code: any): {};
    /**
     * Returns a string serializing the given attribution data.
     *
     * It is expected that the given values are already URL-encoded.
     */
    function serializeAttributionData(data: any): string;
    /**
     * Reads the attribution code, either from disk or a cached version.
     * Returns a promise that fulfills with an object containing the parsed
     * attribution data if the code could be read and is valid,
     * or an empty object otherwise.
     *
     * On windows the attribution service converts utm_* keys, removing "utm_".
     * On OSX the attributions are set directly on download and retain "utm_".  We
     * strip "utm_" while retrieving the params.
     */
    function getAttrDataAsync(): Promise<any>;
    /**
     * Return the cached attribution data synchronously without hitting
     * the disk.
     * @returns A dictionary with the attribution data if it's available,
     *          null otherwise.
     */
    function getCachedAttributionData(): any;
    /**
     * Deletes the attribution data file.
     * Returns a promise that resolves when the file is deleted,
     * or if the file couldn't be deleted (the promise is never rejected).
     */
    function deleteFileAsync(): Promise<void>;
    /**
     * Clears the cached attribution code value, if any.
     * Does nothing if called from outside of an xpcshell test.
     */
    function _clearCache(): void;
}
