export namespace FirstStartup {
    let NOT_STARTED: number;
    let IN_PROGRESS: number;
    let TIMED_OUT: number;
    let SUCCESS: number;
    let UNSUPPORTED: number;
    let _state: number;
    /**
     * Initialize and run first-startup services. This will always run synchronously
     * and spin the event loop until either all required services have
     * completed, or until a timeout is reached.
     *
     * In the latter case, services are expected to run post-UI instead as usual.
     */
    function init(): void;
    const state: number;
}
