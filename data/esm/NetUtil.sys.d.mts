export namespace NetUtil {
    function asyncCopy(aSource: any, aSink: any, aCallback?: any): any;
    function asyncFetch(aSource: any, aCallback: any): void;
    function newURI(aTarget: any, aOriginCharset: any, aBaseURI: any): any;
    function newChannel(aWhatToLoad: any, ...args: any[]): any;
    function newWebTransport(): any;
    function readInputStreamToString(aInputStream: any, aCount: any, aOptions: any): any;
    /**
     * Reads aCount bytes from aInputStream into a string.
     *
     * @param {nsIInputStream} aInputStream
     *        The input stream to read from.
     * @param {integer} [aCount = aInputStream.available()]
     *        The number of bytes to read from the stream.
     *
     * @return the bytes from the input stream in string form.
     *
     * @throws NS_ERROR_INVALID_ARG if aInputStream is not an nsIInputStream.
     * @throws NS_BASE_STREAM_WOULD_BLOCK if reading from aInputStream would
     *         block the calling thread (non-blocking mode only).
     * @throws NS_ERROR_FAILURE if there are not enough bytes available to read
     *         aCount amount of data.
     */
    function readInputStream(aInputStream: nsIInputStream, aCount?: integer): ArrayBuffer;
}
