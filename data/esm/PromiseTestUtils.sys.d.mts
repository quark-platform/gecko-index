export namespace PromiseTestUtils {
    let _rejections: any[];
    let _rejectionIgnoreFns: any[];
    let _globalRejectionIgnoreFns: any[];
    /**
     * Called only by the test infrastructure, registers the rejection observers.
     *
     * This should be called only once, and a matching "uninit" call must be made
     * or the tests will crash on shutdown.
     */
    function init(): void;
    let _initialized: boolean;
    /**
     * Called only by the test infrastructure, unregisters the observers.
     */
    function uninit(): void;
    /**
     * Called only by the test infrastructure, collect all the
     * JavaScript Developer Errors that have been thrown and
     * treat them as uncaught promise rejections.
     */
    function collectJSDevErrors(): void;
    /**
     * Called only by the test infrastructure, spins the event loop until the
     * messages for pending DOM Promise rejections have been processed.
     */
    function ensureDOMPromiseRejectionsProcessed(): void;
    let _ensureDOMPromiseRejectionsProcessedReason: {};
    /**
     * Called only by the tests for PromiseDebugging.addUncaughtRejectionObserver
     * and for JSMPromise.Debugging, disables the observers in this module.
     */
    function disableUncaughtRejectionObserverForSelfTest(): void;
    /**
     * Called by tests with uncaught rejections to disable the observers in this
     * module. For new tests where uncaught rejections are expected, you should
     * use the more granular expectUncaughtRejection function instead.
     */
    function thisTestLeaksUncaughtRejectionsAndShouldBeFixed(): void;
    function onLeftUncaught(promise: any): void;
    function onConsumed(promise: any): void;
    /**
     * Informs the test suite that the test code will generate a Promise rejection
     * that will still be unhandled when the test file terminates.
     *
     * This method must be called once for each instance of Promise that is
     * expected to be uncaught, even if the rejection reason is the same for each
     * instance.
     *
     * If the expected rejection does not occur, the test will fail.
     *
     * @param regExpOrCheckFn
     *        This can either be a regular expression that should match the error
     *        message of the rejection, or a check function that is invoked with
     *        the rejection details object as its first argument.
     */
    function expectUncaughtRejection(regExpOrCheckFn: any): void;
    /**
     * Allows an entire class of Promise rejections. Usage of this function
     * should be kept to a minimum because it has a broad scope and doesn't
     * prevent new unhandled rejections of this class from being added.
     *
     * @param regExp
     *        This should match the error message of the rejection.
     */
    function allowMatchingRejectionsGlobally(regExp: any): void;
    /**
     * Fails the test if there are any uncaught rejections at this time that have
     * not been explicitly allowed using expectUncaughtRejection.
     *
     * Depending on the configuration of the test suite, this function might only
     * report the details of the first uncaught rejection that was generated.
     *
     * This is called by the test suite at the end of each test function.
     */
    function assertNoUncaughtRejections(): void;
    /**
     * Fails the test if any rejection indicated by expectUncaughtRejection has
     * not yet been reported at this time.
     *
     * This is called by the test suite at the end of each test file.
     */
    function assertNoMoreExpectedRejections(): void;
}
