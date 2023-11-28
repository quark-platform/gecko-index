export namespace SharedUtils {
    /**
     * Check that the specified content matches the expected size and SHA-256 hash.
     * @param {ArrayBuffer} buffer binary content
     * @param {Number} size expected file size
     * @param {String} size expected file SHA-256 as hex string
     * @returns {boolean}
     */
    function checkContentHash(buffer: ArrayBuffer, size: number, hash: any): boolean;
    /**
     * Load (from disk) the JSON file distributed with the release for this collection.
     * @param {String}  bucket
     * @param {String}  collection
     */
    function loadJSONDump(bucket: string, collection: string): Promise<any>;
}
