export class Stream {
    constructor(path: any);
    destroy(): Promise<void>;
    seek(seekTo: any): Promise<void>;
    readBytes(count: any): Promise<Uint8Array>;
    available(): Promise<number>;
    length(): Promise<any>;
    get path(): any;
    #private;
}
export class StreamRegistry {
    streams: Map<any, any>;
    destructor(): Promise<void>;
    /**
     * Add a new stream to the registry.
     *
     * @param {Stream} stream
     *      The stream to use.
     *
     * @returns {string}
     *     Stream handle (uuid)
     */
    add(stream: Stream): string;
    /**
     * Get a stream from the registry.
     *
     * @param {string} handle
     *      Handle of the stream to retrieve.
     *
     * @returns {Stream}
     *      The requested stream.
     */
    get(handle: string): Stream;
    /**
     * Remove a stream from the registry.
     *
     * @param {string} handle
     *      Handle of the stream to remove.
     *
     * @returns {boolean}
     *     true if successfully removed
     */
    remove(handle: string): boolean;
}
