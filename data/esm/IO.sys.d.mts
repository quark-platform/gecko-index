export const streamRegistry: any;
export class IO {
    /**
     * Close the stream, discard any temporary backing storage.
     *
     * @param {object} options
     * @param {string} options.handle
     *     Handle of the stream to close.
     */
    close(options?: {
        handle: string;
    }): Promise<void>;
    /**
     * Read a chunk of the stream.
     *
     * @param {object} options
     * @param {string} options.handle
     *     Handle of the stream to read.
     * @param {number=} options.offset
     *     Seek to the specified offset before reading. If not specificed,
     *     proceed with offset following the last read.
     *     Some types of streams may only support sequential reads.
     * @param {number=} options.size
     *     Maximum number of bytes to read (left upon the agent
     *     discretion if not specified).
     *
     * @returns {object}
     *     Data that were read, including flags for base64-encoded, and end-of-file reached.
     */
    read(options?: {
        handle: string;
        offset?: number | undefined;
        size?: number | undefined;
    }): object;
}
