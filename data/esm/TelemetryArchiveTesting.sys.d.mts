export namespace TelemetryArchiveTesting {
    export function setup(): void;
    export { Checker };
}
/**
 * A helper object that allows test code to check whether a telemetry ping
 * was properly saved. To use, first initialize to collect the starting pings
 * and then check for new ping data.
 */
declare function Checker(): void;
declare class Checker {
    promiseInit(): any;
    _pingMap: Map<any, any>;
    /**
     * Find and return a new ping with certain properties.
     *
     * @param expected: an array of [['prop'...], 'value'] to check
     * For example:
     * [
     *   [['environment', 'build', 'applicationId'], '20150101010101'],
     *   [['version'], 1],
     *   [['metadata', 'OOMAllocationSize'], 123456789],
     * ]
     * @returns a matching ping if found, or null
     */
    promiseFindPing(type: any, expected: any): Promise<any>;
}
export {};
