export namespace WindowsVersionInfo {
    export namespace UNKNOWN_VERSION_INFO {
        let servicePackMajor: any;
        let servicePackMinor: any;
        let buildNumber: any;
    }
    /**
     * Gets the service pack and build number on Windows platforms.
     *
     * @param opts {Object} keyword arguments
     * @param opts.throwOnError {boolean} Optional, defaults to true. If set to
     *    false will return an object with keys set to null instead of throwing an
     *    error. If set to true, errors will be thrown instead.
     * @throws If `throwOnError` is true and version information cannot be
     *    determined.
     * @return {object} An object containing keys `servicePackMajor`,
     *    `servicePackMinor`, and `buildNumber`. If `throwOnError` is false, these
     *    values may be null.
     */
    export function get({ throwOnError }?: {
        throwOnError: boolean;
    }): any;
    export { CannotOpenKernelError };
    export { GetVersionExError };
    export { NotWindowsError };
}
declare class CannotOpenKernelError extends Error {
}
declare class GetVersionExError extends Error {
}
declare class NotWindowsError extends Error {
}
export {};
