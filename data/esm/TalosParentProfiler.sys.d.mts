export namespace TalosParentProfiler {
    let initted: boolean;
    let currentTest: string;
    let interval: any;
    let entries: any;
    let featuresArray: any;
    let threadsArray: any;
    let profileDir: any;
    const TalosPowers: any;
    /**
     * Initialize the profiler using profiler settings supplied in a JS object.
     *
     * @param obj (object)
     *   The following properties on the object are respected:
     *     gecko_profile_interval (int)
     *     gecko_profile_entries (int)
     *     gecko_profile_features (string, comma separated list of features to enable)
     *     gecko_profile_threads (string, comma separated list of threads to filter with)
     *     gecko_profile_dir (string)
     */
    function initFromObject(obj?: {}): void;
    /**
     * Initialize the profiler using a string from a location string.
     *
     * @param locationSearch (string)
     *        The location string to initialize with.
     */
    function initFromURLQueryParams(locationSearch: any): void;
    /**
     * Parses an url query string into a JS object.
     *
     * @param locationSearch (string)
     *        The location string to parse.
     * @returns Object
     *        The GET params from the location string as
     *        key-value pairs in the Object.
     */
    function searchToObject(locationSearch: any): {};
    /**
     * A Talos test is about to start. Note that the Gecko Profiler will be
     * paused immediately after starting and that resume() should be called
     * in order to collect samples.
     *
     * @param testName (string)
     *        The name of the test to use in Profiler markers.
     */
    function beginTest(testName: any): void;
    /**
     * A Talos test has finished. This will stop the Gecko Profiler from
     * sampling, and return a Promise that resolves once the Profiler has
     * finished dumping the multi-process profile to disk.
     *
     * @returns Promise
     *          Resolves once the profile has been dumped to disk. The test should
     *          not try to quit the browser until this has resolved.
     */
    function finishTest(): any;
    /**
     * A start-up test has finished. Callers don't need to run beginTest or
     * finishTest, but should pause the sampler as soon as possible, and call
     * this function to dump the profile.
     *
     * @returns Promise
     *          Resolves once the profile has been dumped to disk. The test should
     *          not try to quit the browser until this has resolved.
     */
    function finishStartupProfiling(): any;
    /**
     * Resumes the Gecko Profiler sampler. Can also simultaneously set a marker.
     *
     * @returns Promise
     *          Resolves once the Gecko Profiler has resumed.
     */
    function resume(marker?: string): void;
    /**
     * Pauses the Gecko Profiler sampler. Can also simultaneously set a marker.
     *
     * @param marker (string, optional)
     *        If non-empty, will set a marker immediately before pausing.
     * @param startTime (number, optional)
     *        Start time, used to create an interval profile marker. If
     *        undefined, a single instance marker will be placed.
     * @returns Promise
     *          Resolves once the Gecko Profiler has resumed.
     */
    function pause(marker?: string, startTime?: any): void;
    /**
     * Adds a marker to the profile.
     *
     * @param marker (string, optional)
     *        If non-empty, will set a marker immediately before pausing.
     * @param startTime (number, optional)
     *        Start time, used to create an interval profile marker. If
     *        undefined, a single instance marker will be placed.
     * @returns Promise
     *          Resolves once the marker has been set.
     */
    function mark(marker: any, startTime?: any): void;
    function afterProfileGathered(): Promise<any>;
}
