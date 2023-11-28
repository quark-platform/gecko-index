export namespace SessionFile {
    /**
     * Read the contents of the session file, asynchronously.
     */
    function read(): any;
    /**
     * Write the contents of the session file, asynchronously.
     * @param aData - May get changed on shutdown.
     */
    function write(aData: any): any;
    /**
     * Wipe the contents of the session file, asynchronously.
     */
    function wipe(): any;
    const Paths: any;
}
