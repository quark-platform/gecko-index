/**
 * Base class for all remote protocol errors.
 */
export class RemoteError extends Error {
    get isRemoteError(): boolean;
    /**
     * Convert to a serializable object. Should be implemented by subclasses.
     */
    toJSON(): void;
}
