export namespace ResetProfile {
    /**
     * Check if reset is supported for the currently running profile.
     *
     * @return boolean whether reset is supported.
     */
    function resetSupported(): boolean;
    /**
     * Ask the user if they wish to restart the application to reset the profile.
     */
    function openConfirmationDialog(window: any): Promise<void>;
}
