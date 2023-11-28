export namespace TelemetryTestUtils {
    /**
     * A helper that asserts the value of a scalar.
     *
     * @param {Object} scalars The snapshot of the scalars.
     * @param {String} scalarName The name of the scalar to check.
     * @param {Boolean|Number|String} value The expected value for the scalar.
     * @param {String} msg The message to print when checking the value.
     */
    function assertScalar(scalars: any, scalarName: string, value: string | number | boolean, msg: string): void;
    /**
     * A helper that asserts a scalar is not set.
     *
     * @param {Object} scalars The snapshot of the scalars.
     * @param {String} scalarName The name of the scalar to check.
     */
    function assertScalarUnset(scalars: any, scalarName: string): void;
    /**
     * Asserts if the snapshotted keyed scalars contain the expected
     * data.
     *
     * @param {Object} scalars The snapshot of the keyed scalars.
     * @param {String} scalarName The name of the keyed scalar to check.
     * @param {String} key The key that must be within the keyed scalar.
     * @param {String|Boolean|Number} expectedValue The expected value for the
     *        provided key in the scalar.
     */
    function assertKeyedScalar(scalars: any, scalarName: string, key: string, expectedValue: string | number | boolean): void;
    /**
     * Returns a snapshot of scalars from the specified process.
     *
     * @param {String} aProcessName Name of the process. Could be parent or
     *   something else.
     * @param {boolean} [aKeyed] Set to true if keyed scalars rather than normal
     *   scalars should be snapshotted.
     * @param {boolean} [aClear] Set to true to clear the scalars once the snapshot
     *   has been obtained.
     * @param {Number} aChannel The channel dataset type from nsITelemetry.
     * @returns {Object} The snapshotted scalars from the parent process.
     */
    function getProcessScalars(aProcessName: string, aKeyed?: boolean, aClear?: boolean, aChannel?: number): any;
    /**
     * Asserts that the number of events, after filtering, is equal to numEvents.
     *
     * @param {Number} numEvents The number of events to assert.
     * @param {Object} filter As per assertEvents.
     * @param {Object} options As per assertEvents.
     */
    function assertNumberOfEvents(numEvents: number, filter: any, options: any): void;
    /**
     * Returns the events in a snapshot, after optional filtering.
     *
     * @param {Object} filter An object of strings or RegExps for first filtering
     *                 the event snapshot. Of the form {category, method, object}.
     *                 Absent filters filter nothing.
     * @param {Object} options An object containing any of
     *                     - process {string} the process to examine. Default parent.
     */
    function getEvents(filter?: any, { process }?: any): any;
    /**
     * Asserts that, after optional filtering, the current events snapshot
     * matches expectedEvents.
     *
     * @param {Array} expectedEvents An array of event structures of the form
     *                [category, method, object, value, extra]
     *                or the same as an object with fields named as above.
     *                The array can be empty to assert that there are no events
     *                that match the filter.
     *                Each field can be absent/undefined (to match
     *                everything), a string or null (to match that value), a
     *                RegExp to match what it can match, or a function which
     *                matches by returning true when called with the field.
     *                `extra` is slightly different. If present it must be an
     *                object whose fields are treated the same way as the others.
     * @param {Object} filter An object of strings or RegExps for first filtering
     *                 the event snapshot. Of the form {category, method, object}.
     *                 Absent filters filter nothing.
     * @param {Object} options An object containing any of
     *                     - clear {bool} clear events. Default true.
     *                     - process {string} the process to examine. Default parent.
     */
    function assertEvents(expectedEvents: any[], filter?: any, { clear, process }?: any): void;
    /**
     * Clear and get the named histogram.
     *
     * @param {String} name The name of the histogram
     * @returns {Object} The obtained histogram.
     */
    function getAndClearHistogram(name: string): any;
    /**
     * Clear and get the named keyed histogram.
     *
     * @param {String} name The name of the keyed histogram
     * @returns {Object} The obtained keyed histogram.
     */
    function getAndClearKeyedHistogram(name: string): any;
    /**
     * Assert that the histogram index is the right value. It expects that
     * other indexes are all zero.
     *
     * @param {Object} histogram The histogram to check.
     * @param {Number} index The index to check against the expected value.
     * @param {Number} expected The expected value of the index.
     */
    function assertHistogram(histogram: any, index: number, expected: number): void;
    /**
     * Assert that a key within a keyed histogram contains the required sum.
     *
     * @param {Object} histogram The keyed histogram to check.
     * @param {String} key The key to check.
     * @param {Number} [expected] The expected sum for the key.
     */
    function assertKeyedHistogramSum(histogram: any, key: string, expected?: number): void;
    /**
     * Assert that the value of a key within a keyed histogram is the right value.
     * It expects that other values are all zero.
     *
     * @param {Object} histogram The keyed histogram to check.
     * @param {String} key The key to check.
     * @param {Number} index The index to check against the expected value.
     * @param {Number} [expected] The expected values for the key.
     */
    function assertKeyedHistogramValue(histogram: any, key: string, index: number, expected?: number): void;
}
