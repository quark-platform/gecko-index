export function LogManager(prefRoot: any, logNames: any, logFilePrefix: any): void;
export class LogManager {
    constructor(prefRoot: any, logNames: any, logFilePrefix: any);
    _prefObservers: any[];
    _cleaningUpFileLogs: boolean;
    init(prefRoot: any, logNames: any, logFilePrefix: any): void;
    _prefs: any;
    _prefsBranch: any;
    logFilePrefix: any;
    _observeConsolePref: (newVal: any) => void;
    _observeDumpPref: (newVal: any) => void;
    _fileAppender: FlushableStorageAppender;
    _observeStreamPref: (newVal: any) => void;
    _log: any;
    /**
     * Cleanup this instance
     */
    finalize(): void;
    get _logFileSubDirectoryEntries(): string[];
    get sawError(): any;
    SUCCESS_LOG_WRITTEN: string;
    ERROR_LOG_WRITTEN: string;
    /**
     * Possibly generate a log file for all accumulated log messages and refresh
     * the input & output streams.
     * Whether a "success" or "error" log is written is determined based on
     * whether an "Error" log entry was written to any of the logs.
     * Returns a promise that resolves on completion with either null (for no
     * file written or on error), SUCCESS_LOG_WRITTEN if a "success" log was
     * written, or ERROR_LOG_WRITTEN if an "error" log was written.
     */
    resetFileLog(): Promise<string>;
    /**
     * Finds all logs older than maxErrorAge and deletes them using async I/O.
     */
    cleanupLogs(): Promise<void>;
    /**
     * Finds all logs and removes them.
     */
    removeAllLogs(): Promise<void>;
    _deleteLogFiles(cbShouldDelete: any): Promise<void>;
}
export namespace LogManager {
    export { StorageStreamAppender };
}
declare class FlushableStorageAppender extends StorageStreamAppender {
    sawError: boolean;
    append(message: any): void;
    flushToFile(subdirArray: any, filename: any, log: any): Promise<void>;
    /**
     * Copy an input stream to the named file, doing everything off the main
     * thread.
     * subDirArray is an array of path components, relative to the profile
     * directory, where the file will be created.
     * outputFileName is the filename to create.
     * Returns a promise that is resolved on completion or rejected with an error.
     */
    _copyStreamToFile(inputStream: any, subdirArray: any, outputFileName: any, log: any): Promise<void>;
}
/**
 * Append to an nsIStorageStream
 *
 * This writes logging output to an in-memory stream which can later be read
 * back as an nsIInputStream. It can be used to avoid expensive I/O operations
 * during logging. Instead, one can periodically consume the input stream and
 * e.g. write it to disk asynchronously.
 */
declare class StorageStreamAppender {
    constructor(formatter: any);
    _name: string;
    _converterStream: any;
    _outputStream: any;
    _ss: any;
    get outputStream(): any;
    newOutputStream(): any;
    getInputStream(): any;
    reset(): void;
    doAppend(formatted: any): void;
}
export {};
