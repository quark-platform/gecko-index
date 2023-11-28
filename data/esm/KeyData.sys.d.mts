export namespace keyData {
    /**
     * Get key event data for a given key character.
     *
     * @param {string} rawKey
     *     Key for which to get data. This can either be the key codepoint
     *     itself or one of the codepoints in the range U+E000-U+E05D that
     *     WebDriver uses to represent keys not corresponding directly to
     *     a codepoint.
     * @returns {object} Key event data object.
     */
    function getData(rawKey: string): any;
    /**
     * Get shifted key character for a given key character.
     *
     * For characters unaffected by the shift key, this returns the input.
     *
     * @param {string} rawKey Key for which to get shifted key.
     * @returns {string} Key string to use when the shift modifier is set.
     */
    function getShiftedKey(rawKey: string): string;
}
