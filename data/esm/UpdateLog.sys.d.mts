export namespace UpdateLog {
    export { logPrefixedString };
    export const enabled: any;
    export const logFileEnabled: any;
    /**
     * Adds a callback function to be called when `UpdateLog.enabled` or
     * `UpdateLog.logFileEnabled` change values.
     *
     * Adding listeners here is preferable to adding pref listeners to the
     * underlying prefs both because it keeps callers out of the implementation
     * details and because this file also uses those listeners. Since it's hard to
     * guarantee what order the listeners run in, the actual logging behavior may
     * not have changed yet when another pref listener is invoked.
     *
     * @param listener
     *        The callback function that will be called when the configuration
     *        changes. It will be called with no arguments.
     */
    export function addConfigChangeListener(listener: any): void;
}
declare function logPrefixedString(prefix: any, message: any): void;
export {};
