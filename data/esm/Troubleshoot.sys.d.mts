export namespace Troubleshoot {
    /**
     * Captures a snapshot of data that may help troubleshooters troubleshoot
     * trouble.
     *
     * @returns {Promise}
     *   A promise that is resolved with the snapshot data.
     */
    function snapshot(): Promise<any>;
    let kMaxCrashAge: number;
}
