export namespace WindowsRegistry {
    /**
     * Safely reads a value from the registry.
     *
     * @param aRoot
     *        The root registry to use.
     * @param aPath
     *        The registry path to the key.
     * @param aKey
     *        The key name.
     * @param [aRegistryNode=0]
     *        Optionally set to nsIWindowsRegKey.WOW64_64 (or nsIWindowsRegKey.WOW64_32)
     *        to access a 64-bit (32-bit) key from either a 32-bit or 64-bit application.
     * @return The key value or undefined if it doesn't exist.  If the key is
     *         a REG_MULTI_SZ, an array is returned.
     */
    function readRegKey(aRoot: any, aPath: any, aKey: any, aRegistryNode?: number): any;
    /**
     * Safely removes a key from the registry.
     *
     * @param aRoot
     *        The root registry to use.
     * @param aPath
     *        The registry path to the key.
     * @param aKey
     *        The key name.
     * @param [aRegistryNode=0]
     *        Optionally set to nsIWindowsRegKey.WOW64_64 (or nsIWindowsRegKey.WOW64_32)
     *        to access a 64-bit (32-bit) key from either a 32-bit or 64-bit application.
     * @return True if the key was removed or never existed, false otherwise.
     */
    function removeRegKey(aRoot: any, aPath: any, aKey: any, aRegistryNode?: number): boolean;
}
