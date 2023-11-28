export namespace CrashMonitor {
    const previousCheckpoints: Promise<any>;
    /**
     * Initialize CrashMonitor.
     *
     * Should only be called from the CrashMonitor XPCOM component.
     *
     * @return {Promise}
     */
    function init(): Promise<any>;
    /**
     * Handle registered notifications.
     *
     * Update checkpoint file for every new notification received.
     */
    function observe(aSubject: any, aTopic: any, aData: any): void;
    function writeCheckpoint(aCheckpoint: any): Promise<void>;
}
