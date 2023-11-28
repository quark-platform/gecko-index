export namespace DER {
    export { UNIVERSAL };
    export { CONSTRUCTED };
    export { CONTEXT_SPECIFIC };
    export { INTEGER };
    export { BIT_STRING };
    export { NULL };
    export { OBJECT_IDENTIFIER };
    export { PrintableString };
    export { TeletexString };
    export { IA5String };
    export { UTCTime };
    export { GeneralizedTime };
    export { UTF8String };
    export { SEQUENCE };
    export { SET };
    export { DERDecoder };
}
declare const UNIVERSAL: number;
declare const CONSTRUCTED: number;
declare const CONTEXT_SPECIFIC: number;
declare const INTEGER: number;
declare const BIT_STRING: number;
declare const NULL: number;
declare const OBJECT_IDENTIFIER: number;
declare const PrintableString: number;
declare const TeletexString: number;
declare const IA5String: number;
declare const UTCTime: number;
declare const GeneralizedTime: number;
declare const UTF8String: number;
declare const SEQUENCE: number;
declare const SET: number;
/** Class representing DER-encoded data. Provides methods for decoding it. */
declare class DERDecoder {
    /**
     * @param {number[]} bytes an array of bytes representing the encoded data
     */
    constructor(bytes: number[]);
    _bytes: number[];
    _cursor: number;
    /**
     * Asserts that the decoder is at the end of the given data. Throws an error
     * if this is not the case.
     */
    assertAtEnd(): void;
    /**
     * Determines whether or not the decoder is at the end of the given data.
     *
     * @returns {boolean} true if the decoder is at the end and false otherwise
     */
    atEnd(): boolean;
    /**
     * Reads the next byte of data. Throws if no more data is available.
     *
     * @returns {number} the next byte of data
     */
    readByte(): number;
    /**
     * Given the next expected tag, reads and asserts that the next tag is in fact
     * the given tag.
     *
     * @param {number} expectedTag the expected next tag
     */
    _readExpectedTag(expectedTag: number): void;
    /**
     * Decodes and returns the length portion of an ASN.1 TLV tuple. Throws if the
     * length is incorrectly encoded or if it describes a length greater than
     * 65535 bytes. Indefinite-length encoding is not supported.
     *
     * @returns {number} the length of the value of the TLV tuple
     */
    _readLength(): number;
    /**
     * Reads <length> bytes of data if available. Throws if less than <length>
     * bytes are available.
     *
     * @param {number} length the number of bytes to read. Must be non-negative.
     * @returns {number[]} the next <length> bytes of data
     */
    readBytes(length: number): number[];
    /**
     * Given an expected next ASN.1 tag, ensures that that tag is next and returns
     * the contents of that tag. Throws if a different tag is encountered or if
     * the data is otherwise incorrectly encoded.
     *
     * @param {number} tag the next expected ASN.1 tag
     * @returns {number[]} the contents of the tag
     */
    readTagAndGetContents(tag: number): number[];
    /**
     * Returns the next byte without advancing the decoder. Throws if no more data
     * is available.
     *
     * @returns {number} the next available byte
     */
    _peekByte(): number;
    /**
     * Given an expected tag, reads the next entire ASN.1 TLV tuple, asserting
     * that the tag matches.
     *
     * @param {number} tag the expected tag
     * @returns {number[]} an array of bytes representing the TLV tuple
     */
    _readExpectedTLV(tag: number): number[];
    /**
     * Reads the next ASN.1 tag, length, and value and returns them as an array of
     * bytes.
     *
     * @returns {number[]} an array of bytes representing the next ASN.1 TLV
     */
    readTLV(): number[];
    /**
     * Convenience function for decoding a BIT STRING. Reads and returns the
     * contents of the expected next BIT STRING. Throws if the next TLV isn't a
     * BIT STRING or if the BIT STRING is incorrectly encoded.
     *
     * @returns {BitString} the next BIT STRING
     */
    readBIT_STRING(): BitString;
    /**
     * Looks to see if the next ASN.1 tag is the expected given tag.
     *
     * @param {number} tag the expected next ASN.1 tag
     * @returns {boolean} true if the next tag is the given one and false otherwise
     */
    peekTag(tag: number): boolean;
    /**
     * Given a list of possible next ASN.1 tags, returns the next TLV if the next
     * tag is in the list. Throws if the next tag is not in the list or if the
     * data is incorrectly encoded.
     *
     * @param {number[]} tagList the list of potential next tags
     * @returns {number[]} the contents of the next TLV if the next tag is in
     *                    <tagList>
     */
    readTLVChoice(tagList: number[]): number[];
}
/** Class representing a decoded BIT STRING. */
declare class BitString {
    /**
     * @param {number} unusedBits the number of unused bits
     * @param {number[]} contents an array of bytes comprising the BIT STRING
     */
    constructor(unusedBits: number, contents: number[]);
    _unusedBits: number;
    _contents: number[];
    /**
     * Get the number of unused bits in the BIT STRING
     *
     * @returns {number} the number of unused bits
     */
    get unusedBits(): number;
    /**
     * Get the contents of the BIT STRING
     *
     * @returns {number[]} an array of bytes representing the contents
     */
    get contents(): number[];
}
export {};
