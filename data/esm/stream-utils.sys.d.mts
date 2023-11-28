export namespace StreamUtils {
    export { copyStream };
    export { delimitedRead };
}
/**
 * This helper function (and its companion object) are used by bulk
 * senders and receivers to read and write data in and out of other streams.
 * Functions that make use of this tool are passed to callers when it is
 * time to read or write bulk data.  It is highly recommended to use these
 * copier functions instead of the stream directly because the copier
 * enforces the agreed upon length. Since bulk mode reuses an existing
 * stream, the sender and receiver must write and read exactly the agreed
 * upon amount of data, or else the entire transport will be left in a
 * invalid state.  Additionally, other methods of stream copying (such as
 * NetUtil.asyncCopy) close the streams involved, which would terminate
 * the debugging transport, and so it is avoided here.
 *
 * Overall, this *works*, but clearly the optimal solution would be
 * able to just use the streams directly.  If it were possible to fully
 * implement nsIInputStream/nsIOutputStream in JS, wrapper streams could
 * be created to enforce the length and avoid closing, and consumers could
 * use familiar stream utilities like NetUtil.asyncCopy.
 *
 * The function takes two async streams and copies a precise number
 * of bytes from one to the other.  Copying begins immediately, but may
 * complete at some future time depending on data size.  Use the returned
 * promise to know when it's complete.
 *
 * @param {nsIAsyncInputStream} input
 *     Stream to copy from.
 * @param {nsIAsyncOutputStream} output
 *        Stream to copy to.
 * @param {number} length
 *        Amount of data that needs to be copied.
 *
 * @returns {Promise}
 *     Promise is resolved when copying completes or rejected if any
 *     (unexpected) errors occur.
 */
declare function copyStream(input: nsIAsyncInputStream, output: nsIAsyncOutputStream, length: number): Promise<any>;
/**
 * Read from a stream, one byte at a time, up to the next
 * <var>delimiter</var> character, but stopping if we've read |count|
 * without finding it.  Reading also terminates early if there are less
 * than <var>count</var> bytes available on the stream.  In that case,
 * we only read as many bytes as the stream currently has to offer.
 *
 * @param {nsIInputStream} stream
 *     Input stream to read from.
 * @param {string} delimiter
 *     Character we're trying to find.
 * @param {number} count
 *     Max number of characters to read while searching.
 *
 * @returns {string}
 *     Collected data.  If the delimiter was found, this string will
 *     end with it.
 */
declare function delimitedRead(stream: nsIInputStream, delimiter: string, count: number): string;
export {};
