export const ClientID: Readonly<{
    /**
     * This returns a promise resolving to the the stable client ID we use for
     * data reporting (FHR & Telemetry).
     *
     * @return {Promise<string>} The stable client ID.
     */
    getClientID(): Promise<string>;
    /**
     * Get the client id synchronously without hitting the disk.
     * This returns:
     *  - the current on-disk client id if it was already loaded
     *  - the client id that we cached into preferences (if any)
     *  - null otherwise
     */
    getCachedClientID(): any;
    getClientIdHash(): Promise<any>;
    /**
     * Sets the client ID to the canary (known) client ID,
     * writing it to disk and updating the cached version.
     *
     * Use `removeClientID` followed by `getClientID` to clear the
     * existing ID and generate a new, random one if required.
     *
     * @return {Promise<void>}
     */
    setCanaryClientID(): Promise<void>;
    /**
     * Clears the client ID asynchronously, removing it
     * from disk. Use `getClientID()` to generate
     * a fresh ID after calling this method.
     *
     * Should only be used if a reset is explicitly requested by the user.
     *
     * @return {Promise<void>}
     */
    removeClientID(): Promise<void>;
    /**
     * Only used for testing. Invalidates the cached client ID so that it is
     * read again from file, but doesn't remove the existing ID from disk.
     */
    _reset(): Promise<void>;
}>;
