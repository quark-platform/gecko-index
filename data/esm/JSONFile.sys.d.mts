/**
 * Handles serialization of the data and persistence into a file.
 *
 * @param config An object containing following members:
 *        - path: String containing the file path where data should be saved.
 *        - sanitizedBasename: Sanitized string identifier used for logging,
 *                             shutdown debugging, and telemetry.  Defaults to
 *                             basename of given `path`, sanitized.
 *        - dataPostProcessor: Function triggered when data is just loaded. The
 *                             data object will be passed as the first argument
 *                             and should be returned no matter it's modified or
 *                             not. Its failure leads to the failure of load()
 *                             and ensureDataReady().
 *        - saveDelayMs: Number indicating the delay (in milliseconds) between a
 *                       change to the data and the related save operation. The
 *                       default value will be applied if omitted.
 *        - beforeSave: Promise-returning function triggered just before the
 *                      data is written to disk. This can be used to create any
 *                      intermediate directories before saving. The file will
 *                      not be saved if the promise rejects or the function
 *                      throws an exception.
 *        - finalizeAt: An `IOUtils` phase or barrier client that should
 *                      automatically finalize the file when triggered. Defaults
 *                      to `profileBeforeChange`; exposed as an option for
 *                      testing.
 *        - compression: A compression algorithm to use when reading and
 *                       writing the data.
 *        - backupTo: A string value indicating where writeAtomic should create
 *                    a backup before writing to json files. Note that using this
 *                    option currently ensures that we automatically restore backed
 *                    up json files in load() and ensureDataReady() when original
 *                    files are missing or corrupt.
 */
export function JSONFile(config: any): void;
export class JSONFile {
    /**
     * Handles serialization of the data and persistence into a file.
     *
     * @param config An object containing following members:
     *        - path: String containing the file path where data should be saved.
     *        - sanitizedBasename: Sanitized string identifier used for logging,
     *                             shutdown debugging, and telemetry.  Defaults to
     *                             basename of given `path`, sanitized.
     *        - dataPostProcessor: Function triggered when data is just loaded. The
     *                             data object will be passed as the first argument
     *                             and should be returned no matter it's modified or
     *                             not. Its failure leads to the failure of load()
     *                             and ensureDataReady().
     *        - saveDelayMs: Number indicating the delay (in milliseconds) between a
     *                       change to the data and the related save operation. The
     *                       default value will be applied if omitted.
     *        - beforeSave: Promise-returning function triggered just before the
     *                      data is written to disk. This can be used to create any
     *                      intermediate directories before saving. The file will
     *                      not be saved if the promise rejects or the function
     *                      throws an exception.
     *        - finalizeAt: An `IOUtils` phase or barrier client that should
     *                      automatically finalize the file when triggered. Defaults
     *                      to `profileBeforeChange`; exposed as an option for
     *                      testing.
     *        - compression: A compression algorithm to use when reading and
     *                       writing the data.
     *        - backupTo: A string value indicating where writeAtomic should create
     *                    a backup before writing to json files. Note that using this
     *                    option currently ensures that we automatically restore backed
     *                    up json files in load() and ensureDataReady() when original
     *                    files are missing or corrupt.
     */
    constructor(config: any);
    path: string;
    sanitizedBasename: string;
    _dataPostProcessor: any;
    _beforeSave: any;
    _saver: null;
    _options: {};
    _finalizeAt: null;
    _finalizeInternalBound: null;
    dataReady: boolean;
    _data: null;
    _finalizePromise: null;
    /**
     * Sets the loaded data to a new object. This will overwrite any persisted
     * data on the next save.
     */
    set data(data: any);
    /**
     * Serializable object containing the data. This is populated directly with
     * the data loaded from the file, and is saved without modifications.
     *
     * The raw data should be manipulated synchronously, without waiting for the
     * event loop or for promise resolution, so that the saved file is always
     * consistent.
     */
    get data(): any;
    /**
     * Loads persistent data from the file to memory.
     *
     * @return {Promise}
     * @resolves When the operation finished successfully.
     * @rejects JavaScript exception when dataPostProcessor fails. It never fails
     *          if there is no dataPostProcessor.
     */
    load(): Promise<any>;
    /**
     * Loads persistent data from the file to memory, synchronously. An exception
     * can be thrown only if dataPostProcessor exists and fails.
     */
    ensureDataReady(): void;
    /**
     * Called when the data changed, this triggers asynchronous serialization.
     */
    saveSoon(): any;
    /**
     * Saves persistent data from memory to the file.
     *
     * If an error occurs, the previous file is not deleted.
     *
     * @return {Promise}
     * @resolves When the operation finished successfully.
     * @rejects JavaScript exception.
     */
    _save(): Promise<any>;
    /**
     * Synchronously work on the data just loaded into memory.
     */
    _processLoadedData(data: any): void;
    _recordTelemetry(method: any, value: any): void;
    /**
     * Finishes persisting data to disk and resets all state for this file.
     *
     * @return {Promise}
     * @resolves When the object is finalized.
     */
    _finalizeInternal(): Promise<any>;
    /**
     * Ensures that all data is persisted to disk, and prevents future calls to
     * `saveSoon`. This is called automatically on shutdown, but can also be
     * called explicitly when the file is no longer needed.
     */
    finalize(): Promise<void>;
}
