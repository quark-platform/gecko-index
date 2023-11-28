export function newAppInfo(options?: {}): any;
export function getAppInfo(): any;
export function updateAppInfo(options: any): void;
 @typedef {object} RemoteAgent.AppInfo
 * @property {boolean} isAndroid - Whether the application runs on Android.
 * @property {boolean} isLinux - Whether the application runs on Linux.
 * @property {boolean} isMac - Whether the application runs on Mac OS.
 * @property {boolean} isWindows - Whether the application runs on Windows.
 * @property {boolean} isFirefox - Whether the application is Firefox.
 * @property {boolean} isThunderbird - Whether the application is Thunderbird.
 *
 * @since 88
 */
export const AppInfo: {};
export namespace RemoteAgent {
    /**
     * Extends Services.appinfo with further properties that are
     * used by different protocols as handled by the Remote Agent.
     */
    type AppInfo = {
        /**
         * - Whether the application runs on Android.
         */
        isAndroid: boolean;
        /**
         * - Whether the application runs on Linux.
         */
        isLinux: boolean;
        /**
         * - Whether the application runs on Mac OS.
         */
        isMac: boolean;
        /**
         * - Whether the application runs on Windows.
         */
        isWindows: boolean;
        /**
         * - Whether the application is Firefox.
         */
        isFirefox: boolean;
        /**
         * - Whether the application is Thunderbird.
         */
        isThunderbird: boolean;
    };
}
