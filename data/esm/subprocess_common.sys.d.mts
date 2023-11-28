export const SubprocessConstants: any;
/**
 * Wraps a ChromeWorker so that messages sent to it return a promise which
 * resolves when the message has been received and the operation it triggers is
 * complete.
 */
export class PromiseWorker {
    constructor(url: any);
    listeners: Map<any, any>;
    pendingResponses: Map<any, any>;
    shutdown(): Promise<any>;
    onClose(): void;
    /**
     * Adds a listener for the given message from the worker. Any message received
     * from the worker with a `data.msg` property matching the given `msg`
     * parameter are passed to the given listener.
     *
     * @param {string} msg
     *        The message to listen for.
     * @param {function(Event)} listener
     *        The listener to call when matching messages are received.
     */
    addListener(msg: string, listener: (arg0: Event) => any): void;
    /**
     * Removes the given message listener.
     *
     * @param {string} msg
     *        The message to stop listening for.
     * @param {function(Event)} listener
     *        The listener to remove.
     */
    removeListener(msg: string, listener: (arg0: Event) => any): void;
    onmessage(event: any): void;
    /**
     * Called when a message sent to the worker has failed, and rejects its
     * corresponding promise.
     *
     * @private
     */
    private onFailure;
    /**
     * Called when a message sent to the worker has succeeded, and resolves its
     * corresponding promise.
     *
     * @private
     */
    private onSuccess;
    onDebug({ message }: {
        message: any;
    }): void;
    /**
     * Calls the given method in the worker, and returns a promise which resolves
     * or rejects when the method has completed.
     *
     * @param {string} method
     *        The name of the method to call.
     * @param {Array} args
     *        The arguments to pass to the method.
     * @param {Array} [transferList]
     *        A list of objects to transfer to the worker, rather than cloning.
     * @returns {Promise}
     */
    call(method: string, args: any[], transferList?: any[]): Promise<any>;
}
/**
 * @class Process
 * @augments BaseProcess
 */
/**
 * Represents a currently-running process, and allows interaction with it.
 */
export class BaseProcess {
    /**
     * Spawns a process, and resolves to a BaseProcess instance on success.
     *
     * @param {object} options
     *        An options object as passed to `Subprocess.call`.
     *
     * @returns {Promise<BaseProcess>}
     */
    static create(options: object): Promise<BaseProcess>;
    static get WORKER_URL(): void;
    static get WorkerClass(): typeof PromiseWorker;
    /**
     * Gets the current subprocess worker, or spawns a new one if it does not
     * currently exist.
     *
     * @returns {PromiseWorker}
     */
    static getWorker(): PromiseWorker;
    /**
     * @param {PromiseWorker} worker
     *        The worker instance which owns the process.
     * @param {integer} processId
     *        The internal ID of the Process object, which ties it to the
     *        corresponding process on the Worker side.
     * @param {integer[]} fds
     *        An array of internal Pipe IDs, one for each standard file descriptor
     *        in the child process.
     * @param {integer} pid
     *        The operating system process ID of the process.
     */
    constructor(worker: PromiseWorker, processId: integer, fds: integer[], pid: integer);
    id: integer;
    worker: PromiseWorker;
    /**
     * @property {integer} pid
     *           The process ID of the process, assigned by the operating system.
     *           @readonly
     */
    readonly pid: integer;
    exitCode: any;
    exitPromise: Promise<any>;
    /**
     * @property {OutputPipe} stdin
     *           A Pipe object which allows writing to the process's standard
     *           input.
     *           @readonly
     */
    readonly stdin: OutputPipe;
    /**
     * @property {InputPipe} stdout
     *           A Pipe object which allows reading from the process's standard
     *           output.
     *           @readonly
     */
    readonly stdout: InputPipe;
    /**
     * @property {InputPipe} [stderr]
     *           An optional Pipe object which allows reading from the
     *           process's standard error output.
     *           @readonly
     */
    readonly stderr: InputPipe;
    /**
     * Kills the process.
     *
     * @param {integer} [timeout=300]
     *        A timeout, in milliseconds, after which the process will be forcibly
     *        killed. On platforms which support it, the process will be sent
     *        a `SIGTERM` signal immediately, so that it has a chance to terminate
     *        gracefully, and a `SIGKILL` signal if it hasn't exited within
     *        `timeout` milliseconds. On other platforms (namely Windows), the
     *        process will be forcibly terminated immediately.
     *
     * @returns {Promise<object>}
     *          Resolves to an object with an `exitCode` property when the process
     *          has exited.
     */
    kill(timeout?: integer): Promise<object>;
    /**
     * Returns a promise which resolves to the process's exit code, once it has
     * exited.
     *
     * @returns {Promise<object>}
     * Resolves to an object with an `exitCode` property, containing the
     * process's exit code, once the process has exited.
     *
     * On Unix-like systems, a negative exit code indicates that the
     * process was killed by a signal whose signal number is the absolute
     * value of the error code. On Windows, an exit code of -9 indicates
     * that the process was killed via the {@linkcode BaseProcess#kill kill()}
     * method.
     */
    wait(): Promise<object>;
}
/**
 * Represents an output-only pipe, to which data may be written.
 */
declare class OutputPipe extends Pipe {
    constructor(...args: any[]);
    encoder: TextEncoder;
    /**
     * Writes the given data to the stream.
     *
     * When given an array buffer or typed array, ownership of the buffer is
     * transferred to the IO worker, and it may no longer be used from this
     * thread.
     *
     * @param {ArrayBuffer|TypedArray|string} buffer
     *        Data to write to the stream.
     * @returns {Promise<object>}
     *          Resolves to an object with a `bytesWritten` property, containing
     *          the number of bytes successfully written, once the operation has
     *          completed.
     *
     * @throws {object}
     *          May be rejected with an Error object, or an object with similar
     *          properties. The object will include an `errorCode` property with
     *          one of the following values if it was rejected for the
     *          corresponding reason:
     *
     *            - Subprocess.ERROR_END_OF_FILE: The pipe was closed before
     *              all of the data in `buffer` could be written to it.
     */
    write(buffer: ArrayBuffer | TypedArray | string): Promise<object>;
}
/**
 * Represents an input-only pipe, from which data may be read.
 */
declare class InputPipe extends Pipe {
    constructor(...args: any[]);
    buffers: any[];
    /**
     * @property {integer} dataAvailable
     *           The number of readable bytes currently stored in the input
     *           buffer.
     *           @readonly
     */
    readonly dataAvailable: number;
    decoder: TextDecoder;
    pendingReads: any[];
    _pendingBufferRead: any;
    /**
     * @property {integer} bufferSize
     *           The current size of the input buffer. This varies depending on
     *           the size of pending read operations.
     *           @readonly
     */
    readonly get bufferSize(): number;
    /**
     * Attempts to fill the input buffer.
     *
     * @private
     */
    private fillBuffer;
    _read(size: any): any;
    /**
     * Adds the given data to the end of the input buffer.
     *
     * @param {ArrayBuffer} buffer
     *        An input buffer to append to the current buffered input.
     * @private
     */
    private onInput;
    /**
     * Checks the topmost pending read operations and fulfills as many as can be
     * filled from the current input buffer.
     *
     * @private
     */
    private checkPendingReads;
    /**
     * Reads exactly `length` bytes of binary data from the input stream, or, if
     * length is not provided, reads the first chunk of data to become available.
     * In the latter case, returns an empty array buffer on end of file.
     *
     * The read operation will not complete until enough data is available to
     * fulfill the request. If the pipe closes without enough available data to
     * fulfill the read, the operation fails, and any remaining buffered data is
     * lost.
     *
     * @param {integer} [length]
     *        The number of bytes to read.
     * @returns {Promise<ArrayBuffer>}
     *
     * @throws {object}
     *          May be rejected with an Error object, or an object with similar
     *          properties. The object will include an `errorCode` property with
     *          one of the following values if it was rejected for the
     *          corresponding reason:
     *
     *            - Subprocess.ERROR_END_OF_FILE: The pipe was closed before
     *              enough input could be read to satisfy the request.
     */
    read(length?: integer): Promise<ArrayBuffer>;
    /**
     * Reads exactly `length` bytes from the input stream, and parses them as
     * UTF-8 JSON data.
     *
     * @param {integer} length
     *        The number of bytes to read.
     * @returns {Promise<object>}
     *
     * @throws {object}
     *          May be rejected with an Error object, or an object with similar
     *          properties. The object will include an `errorCode` property with
     *          one of the following values if it was rejected for the
     *          corresponding reason:
     *
     *            - Subprocess.ERROR_END_OF_FILE: The pipe was closed before
     *              enough input could be read to satisfy the request.
     *            - Subprocess.ERROR_INVALID_JSON: The data read from the pipe
     *              could not be parsed as a valid JSON string.
     */
    readJSON(length: integer): Promise<object>;
    /**
     * Reads a chunk of UTF-8 data from the input stream, and converts it to a
     * JavaScript string.
     *
     * If `length` is provided, reads exactly `length` bytes. Otherwise, reads the
     * first chunk of data to become available, and returns an empty string on end
     * of file. In the latter case, the chunk is decoded in streaming mode, and
     * any incomplete UTF-8 sequences at the end of a chunk are returned at the
     * start of a subsequent read operation.
     *
     * @param {integer} [length]
     *        The number of bytes to read.
     * @param {object} [options]
     *        An options object as expected by TextDecoder.decode.
     * @returns {Promise<string>}
     *
     * @throws {object}
     *          May be rejected with an Error object, or an object with similar
     *          properties. The object will include an `errorCode` property with
     *          one of the following values if it was rejected for the
     *          corresponding reason:
     *
     *            - Subprocess.ERROR_END_OF_FILE: The pipe was closed before
     *              enough input could be read to satisfy the request.
     */
    readString(length?: integer, options?: object): Promise<string>;
    /**
     * Reads 4 bytes from the input stream, and parses them as an unsigned
     * integer, in native byte order.
     *
     * @returns {Promise<integer>}
     *
     * @throws {object}
     *          May be rejected with an Error object, or an object with similar
     *          properties. The object will include an `errorCode` property with
     *          one of the following values if it was rejected for the
     *          corresponding reason:
     *
     *            - Subprocess.ERROR_END_OF_FILE: The pipe was closed before
     *              enough input could be read to satisfy the request.
     */
    readUint32(): Promise<integer>;
}
/**
 * Represents an input or output pipe connected to a subprocess.
 *
 * @property {integer} fd
 *           The file descriptor number of the pipe on the child process's side.
 *           @readonly
 */
declare class Pipe {
    /**
     * @param {Process} process
     *        The child process that this pipe is connected to.
     * @param {integer} fd
     *        The file descriptor number of the pipe on the child process's side.
     * @param {integer} id
     *        The internal ID of the pipe, which ties it to the corresponding Pipe
     *        object on the Worker side.
     */
    constructor(process: Process, fd: integer, id: integer);
    id: integer;
    fd: integer;
    processId: any;
    worker: any;
    /**
     * @property {boolean} closed
     *           True if the file descriptor has been closed, and can no longer
     *           be read from or written to. Pending IO operations may still
     *           complete, but new operations may not be initiated.
     *           @readonly
     */
    readonly closed: boolean;
    /**
     * Closes the end of the pipe which belongs to this process.
     *
     * @param {boolean} force
     *        If true, the pipe is closed immediately, regardless of any pending
     *        IO operations. If false, the pipe is closed after any existing
     *        pending IO operations have completed.
     * @returns {Promise<object>}
     *          Resolves to an object with no properties once the pipe has been
     *          closed.
     */
    close(force?: boolean): Promise<object>;
}
export {};
