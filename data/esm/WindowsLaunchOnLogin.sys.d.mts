export namespace WindowsLaunchOnLogin {
    /**
     * Accepts another function as an argument and provides an open Windows
     * launch on login registry key for the passed-in function to manipulate.
     *
     * @param func
     *        The function to use.
     */
    function withLaunchOnLoginRegistryKey(func: any): Promise<void>;
    /**
     * Safely creates a Windows launch on login registry key
     */
    function createLaunchOnLoginRegistryKey(): Promise<void>;
    /**
     * Safely removes a Windows launch on login registry key
     */
    function removeLaunchOnLoginRegistryKey(): Promise<void>;
    /**
     * Checks if Windows launch on login was independently enabled or disabled
     * by the user in the Windows Startup Apps menu. The registry key that
     * stores this information should not be modified.
     */
    function getLaunchOnLoginApproved(): boolean;
    /**
     * Quotes a string for use as a single command argument, using Windows quoting
     * conventions.
     *
     * @see https://msdn.microsoft.com/en-us/library/17w5ykft(v=vs.85).aspx
     *
     * @param {string} str
     *        The argument string to quote.
     * @returns {string}
     */
    function quoteString(str: string): string;
    /**
     * Generates a unique registry name for the current application
     * like "Mozilla-Firefox-71AE18FE3142402B".
     */
    function getLaunchOnLoginRegistryName(): string;
}
