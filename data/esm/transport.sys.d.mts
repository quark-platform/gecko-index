/**
 * An adapter that handles data transfers between the debugger client
 * and server. It can work with both nsIPipe and nsIServerSocket
 * transports so long as the properly created input and output streams
 * are specified.  (However, for intra-process connections,
 * LocalDebuggerTransport, below, is more efficient than using an nsIPipe
 * pair with DebuggerTransport.)
 *
 * @param {nsIAsyncInputStream} input
 *     The input stream.
 * @param {nsIAsyncOutputStream} output
 *     The output stream.
 *
 * Given a DebuggerTransport instance dt:
 * 1) Set dt.hooks to a packet handler object (described below).
 * 2) Call dt.ready() to begin watching for input packets.
 * 3) Call dt.send() / dt.startBulkSend() to send packets.
 * 4) Call dt.close() to close the connection, and disengage from
 *    the event loop.
 *
 * A packet handler is an object with the following methods:
 *
 * - onPacket(packet) - called when we have received a complete packet.
 *   |packet| is the parsed form of the packet --- a JavaScript value, not
 *   a JSON-syntax string.
 *
 * - onBulkPacket(packet) - called when we have switched to bulk packet
 *   receiving mode. |packet| is an object containing:
 *   actor:  Name of actor that will receive the packet
 *   type:   Name of actor's method that should be called on receipt
 *   length: Size of the data to be read
 *   stream: This input stream should only be used directly if you
 *             can ensure that you will read exactly |length| bytes and
 *             will not close the stream when reading is complete
 *   done:   If you use the stream directly (instead of |copyTo|
 *             below), you must signal completion by resolving/rejecting
 *             this deferred.  If it's rejected, the transport will
 *             be closed.  If an Error is supplied as a rejection value,
 *             it will be logged via |dump|.  If you do use |copyTo|,
 *             resolving is taken care of for you when copying completes.
 *   copyTo: A helper function for getting your data out of the
 *             stream that meets the stream handling requirements above,
 *             and has the following signature:
 *
 *             - params
 *                {nsIAsyncOutputStream} output
 *                  The stream to copy to.
 *             - returns {Promise}
 *                  The promise is resolved when copying completes or
 *                  rejected if any (unexpected) errors occur.  This object
 *                  also emits "progress" events for each chunk that is
 *                  copied.  See stream-utils.js.
 *
 * - onClosed(reason) - called when the connection is closed. |reason|
 *   is an optional nsresult or object, typically passed when the
 *   transport is closed due to some error in a underlying stream.
 *
 * See ./packets.js and the Remote Debugging Protocol specification for
 * more details on the format of these packets.
 *
 * @class
 */
export function DebuggerTransport(input: nsIAsyncInputStream, output: nsIAsyncOutputStream): void;
export class DebuggerTransport {
    /**
     * An adapter that handles data transfers between the debugger client
     * and server. It can work with both nsIPipe and nsIServerSocket
     * transports so long as the properly created input and output streams
     * are specified.  (However, for intra-process connections,
     * LocalDebuggerTransport, below, is more efficient than using an nsIPipe
     * pair with DebuggerTransport.)
     *
     * @param {nsIAsyncInputStream} input
     *     The input stream.
     * @param {nsIAsyncOutputStream} output
     *     The output stream.
     *
     * Given a DebuggerTransport instance dt:
     * 1) Set dt.hooks to a packet handler object (described below).
     * 2) Call dt.ready() to begin watching for input packets.
     * 3) Call dt.send() / dt.startBulkSend() to send packets.
     * 4) Call dt.close() to close the connection, and disengage from
     *    the event loop.
     *
     * A packet handler is an object with the following methods:
     *
     * - onPacket(packet) - called when we have received a complete packet.
     *   |packet| is the parsed form of the packet --- a JavaScript value, not
     *   a JSON-syntax string.
     *
     * - onBulkPacket(packet) - called when we have switched to bulk packet
     *   receiving mode. |packet| is an object containing:
     *   actor:  Name of actor that will receive the packet
     *   type:   Name of actor's method that should be called on receipt
     *   length: Size of the data to be read
     *   stream: This input stream should only be used directly if you
     *             can ensure that you will read exactly |length| bytes and
     *             will not close the stream when reading is complete
     *   done:   If you use the stream directly (instead of |copyTo|
     *             below), you must signal completion by resolving/rejecting
     *             this deferred.  If it's rejected, the transport will
     *             be closed.  If an Error is supplied as a rejection value,
     *             it will be logged via |dump|.  If you do use |copyTo|,
     *             resolving is taken care of for you when copying completes.
     *   copyTo: A helper function for getting your data out of the
     *             stream that meets the stream handling requirements above,
     *             and has the following signature:
     *
     *             - params
     *                {nsIAsyncOutputStream} output
     *                  The stream to copy to.
     *             - returns {Promise}
     *                  The promise is resolved when copying completes or
     *                  rejected if any (unexpected) errors occur.  This object
     *                  also emits "progress" events for each chunk that is
     *                  copied.  See stream-utils.js.
     *
     * - onClosed(reason) - called when the connection is closed. |reason|
     *   is an optional nsresult or object, typically passed when the
     *   transport is closed due to some error in a underlying stream.
     *
     * See ./packets.js and the Remote Debugging Protocol specification for
     * more details on the format of these packets.
     *
     * @class
     */
    constructor(input: nsIAsyncInputStream, output: nsIAsyncOutputStream);
    _input: nsIAsyncInputStream;
    _scriptableInput: any;
    _output: nsIAsyncOutputStream;
    _incomingHeader: string;
    _incoming: any;
    _outgoing: any[];
    hooks: any;
    active: boolean;
    _incomingEnabled: boolean;
    _outgoingEnabled: boolean;
    close: any;
    /**
     * Transmit an object as a JSON packet.
     *
     * This method returns immediately, without waiting for the entire
     * packet to be transmitted, registering event handlers as needed to
     * transmit the entire packet. Packets are transmitted in the order they
     * are passed to this method.
     */
    send(object: any): void;
    /**
     * Transmit streaming data via a bulk packet.
     *
     * This method initiates the bulk send process by queuing up the header
     * data.  The caller receives eventual access to a stream for writing.
     *
     * N.B.: Do *not* attempt to close the stream handed to you, as it
     * will continue to be used by this transport afterwards.  Most users
     * should instead use the provided |copyFrom| function instead.
     *
     * @param {object} header
     *     This is modeled after the format of JSON packets above, but does
     *     not actually contain the data, but is instead just a routing
     *     header:
     *
     *       - actor:  Name of actor that will receive the packet
     *       - type:   Name of actor's method that should be called on receipt
     *       - length: Size of the data to be sent
     *
     * @returns {Promise}
     *     The promise will be resolved when you are allowed to write to
     *     the stream with an object containing:
     *
     *       - stream:   This output stream should only be used directly
     *                   if you can ensure that you will write exactly
     *                   |length| bytes and will not close the stream when
     *                    writing is complete.
     *       - done:     If you use the stream directly (instead of
     *                   |copyFrom| below), you must signal completion by
     *                   resolving/rejecting this deferred.  If it's
     *                   rejected, the transport will be closed.  If an
     *                   Error is supplied as a rejection value, it will
     *                   be logged via |dump|.  If you do use |copyFrom|,
     *                   resolving is taken care of for you when copying
     *                   completes.
     *       - copyFrom: A helper function for getting your data onto the
     *                   stream that meets the stream handling requirements
     *                   above, and has the following signature:
     *
     *                   - params
     *                     {nsIAsyncInputStream} input
     *                       The stream to copy from.
     *                   - returns {Promise}
     *                       The promise is resolved when copying completes
     *                       or rejected if any (unexpected) errors occur.
     *                       This object also emits "progress" events for
     *                       each chunkthat is copied.  See stream-utils.js.
     */
    startBulkSend(header: object): Promise<any>;
    /**
     * The currently outgoing packet (at the top of the queue).
     */
    get _currentOutgoing(): any;
    /**
     * Flush data to the outgoing stream.  Waits until the output
     * stream notifies us that it is ready to be written to (via
     * onOutputStreamReady).
     */
    _flushOutgoing(): void;
    /**
     * Pause this transport's attempts to write to the output stream.
     * This is used when we've temporarily handed off our output stream for
     * writing bulk data.
     */
    pauseOutgoing(): void;
    /**
     * Resume this transport's attempts to write to the output stream.
     */
    resumeOutgoing(): void;
    /**
     * This is called when the output stream is ready for more data to
     * be written.  The current outgoing packet will attempt to write some
     * amount of data, but may not complete.
     */
    onOutputStreamReady(stream: any): void;
    /**
     * Remove the current outgoing packet from the queue upon completion.
     */
    _finishCurrentOutgoing(): void;
    /**
     * Clear the entire outgoing queue.
     */
    _destroyAllOutgoing(): void;
    /**
     * Initialize the input stream for reading. Once this method has been
     * called, we watch for packets on the input stream, and pass them to
     * the appropriate handlers via this.hooks.
     */
    ready(): void;
    /**
     * Asks the input stream to notify us (via onInputStreamReady) when it is
     * ready for reading.
     */
    _waitForIncoming(): void;
    /**
     * Pause this transport's attempts to read from the input stream.
     * This is used when we've temporarily handed off our input stream for
     * reading bulk data.
     */
    pauseIncoming(): void;
    /**
     * Resume this transport's attempts to read from the input stream.
     */
    resumeIncoming(): void;
    /**
     * Called when the stream is either readable or closed.
     */
    onInputStreamReady(stream: any): void;
    /**
     * Process the incoming data.  Will create a new currently incoming
     * Packet if needed.  Tells the incoming Packet to read as much data
     * as it can, but reading may not complete.  The Packet signals that
     * its data is ready for delivery by calling one of this transport's
     * _on*Ready methods (see ./packets.js and the _on*Ready methods below).
     *
     * @returns {boolean}
     *     Whether incoming stream processing should continue for any
     *     remaining data.
     */
    _processIncoming(stream: any, count: any): boolean;
    /**
     * Read as far as we can into the incoming data, attempting to build
     * up a complete packet header (which terminates with ":").  We'll only
     * read up to PACKET_HEADER_MAX characters.
     *
     * @returns {boolean}
     *     True if we now have a complete header.
     */
    _readHeader(): boolean;
    /**
     * If the incoming packet is done, log it as needed and clear the buffer.
     */
    _flushIncoming(): void;
    /**
     * Handler triggered by an incoming JSONPacket completing it's |read|
     * method.  Delivers the packet to this.hooks.onPacket.
     */
    _onJSONObjectReady(object: any): void;
    /**
     * Handler triggered by an incoming BulkPacket entering the |read|
     * phase for the stream portion of the packet.  Delivers info about the
     * incoming streaming data to this.hooks.onBulkPacket.  See the main
     * comment on the transport at the top of this file for more details.
     */
    _onBulkReadReady(...args: any[]): void;
    /**
     * Remove all handlers and references related to the current incoming
     * packet, either because it is now complete or because the transport
     * is closing.
     */
    _destroyIncoming(): void;
}
