export namespace CommonUtils {
    /**
     * Return elements of `a` or `b`.
     */
    function union(a: any, b: any): Set<any>;
    /**
     * Return elements of `a` that are not present in `b`.
     */
    function difference(a: any, b: any): Set<any>;
    /**
     * Return elements of `a` that are also in `b`.
     */
    function intersection(a: any, b: any): Set<any>;
    /**
     * Return true if `a` and `b` are the same size, and
     * every element of `a` is in `b`.
     */
    function setEqual(a: any, b: any): boolean;
    /**
     * Checks elements in two arrays for equality, as determined by the `===`
     * operator. This function does not perform a deep comparison; see Sync's
     * `Util.deepEquals` for that.
     */
    function arrayEqual(a: any, b: any): boolean;
    function encodeBase64URL(bytes: any, pad?: boolean): string;
    function makeURI(URIString: any): nsIURIType;
    function nextTick(callback: any, thisObj: any): void;
    function namedTimer(callback: any, wait: any, thisObj: any, name: any): any;
    function encodeUTF8(str: any): any;
    function decodeUTF8(str: any): any;
    function byteArrayToString(bytes: any): any;
    function stringToByteArray(bytesString: any): any;
    function byteStringToArrayBuffer(byteString: any): Uint8Array;
    function arrayBufferToByteString(buffer: any): any;
    function bufferToHex(buffer: any): any;
    function bytesAsHex(bytes: any): string;
    function stringAsHex(str: any): string;
    function stringToBytes(str: any): any;
    function hexToBytes(str: any): any;
    function hexToArrayBuffer(str: any): Uint8Array;
    function hexAsString(hex: any): any;
    function base64urlToHex(b64str: any): any;
    function encodeBase32(bytes: any): string;
    function decodeBase32(str: any): any;
    function safeAtoB(b64: any): string;
    function ensureMillisecondsTimestamp(value: any): void;
    function readBytesFromInputStream(stream: any, count: any): void;
    function generateUUID(): any;
    function getEpochPref(branch: any, pref: any, def?: number, log?: any): number;
    function getDatePref(branch: any, pref: any, def?: number, log?: any, oldestYear?: number): Date;
    function setDatePref(branch: any, pref: any, date: any, oldestYear?: number): void;
    function convertString(s: any, source: any, dest: any): undefined;
}
