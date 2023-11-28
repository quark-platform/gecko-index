export namespace TelemetryUtils {
    let TELEMETRY_UPLOAD_DISABLED_TOPIC: string;
    let Preferences: any;
    const knownClientID: string;
    const isContentProcess: boolean;
    const isTelemetryEnabled: any;
    /**
     * Turn a millisecond timestamp into a day timestamp.
     *
     * @param aMsec A number of milliseconds since Unix epoch.
     * @return The number of whole days since Unix epoch.
     */
    function millisecondsToDays(aMsec: any): number;
    /**
     * Takes a date and returns it truncated to a date with daily precision.
     */
    function truncateToDays(date: any): Date;
    /**
     * Takes a date and returns it truncated to a date with hourly precision.
     */
    function truncateToHours(date: any): Date;
    /**
     * Check if the difference between the times is within the provided tolerance.
     * @param {Number} t1 A time in milliseconds.
     * @param {Number} t2 A time in milliseconds.
     * @param {Number} tolerance The tolerance, in milliseconds.
     * @return {Boolean} True if the absolute time difference is within the tolerance, false
     *                   otherwise.
     */
    function areTimesClose(t1: number, t2: number, tolerance: number): boolean;
    /**
     * Get the next midnight for a date.
     * @param {Object} date The date object to check.
     * @return {Object} The Date object representing the next midnight.
     */
    function getNextMidnight(date: any): any;
    /**
     * Get the midnight which is closer to the provided date.
     * @param {Object} date The date object to check.
     * @param {Number} tolerance The tolerance within we find the closest midnight.
     * @return {Object} The Date object representing the closes midnight, or null if midnight
     *                  is not within the midnight tolerance.
     */
    function getNearestMidnight(date: any, tolerance: number): any;
    function generateUUID(): any;
    /**
     * Find how many months passed between two dates.
     * @param {Object} aStartDate The starting date.
     * @param {Object} aEndDate The ending date.
     * @return {Integer} The number of months between the two dates.
     */
    function getElapsedTimeInMonths(aStartDate: any, aEndDate: any): Integer;
    /**
     * Date.toISOString() gives us UTC times, this gives us local times in
     * the ISO date format. See http://www.w3.org/TR/NOTE-datetime
     * @param {Object} date The input date.
     * @return {String} The local time ISO string.
     */
    function toLocalTimeISOString(date: any): string;
    /**
     * @returns {number} The monotonic time since the process start
     * or (non-monotonic) Date value if this fails back.
     */
    function monotonicNow(): number;
    /**
     * @returns {string} The name of the update channel to report
     * in telemetry.
     * By default, this is the same as the name of the channel that
     * the browser uses to download its updates. However in certain
     * situations, a single update channel provides multiple (distinct)
     * build types, that need to be distinguishable on Telemetry.
     */
    function getUpdateChannel(): string;
}
