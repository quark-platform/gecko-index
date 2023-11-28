export namespace Sanitizer {
    let PREF_SANITIZE_ON_SHUTDOWN: string;
    let PREF_PENDING_SANITIZATIONS: string;
    let PREF_CPD_BRANCH: string;
    let PREF_SHUTDOWN_BRANCH: string;
    let PREF_TIMESPAN: string;
    let PREF_NEWTAB_SEGREGATION: string;
    let TIMESPAN_EVERYTHING: number;
    let TIMESPAN_HOUR: number;
    let TIMESPAN_2HOURS: number;
    let TIMESPAN_4HOURS: number;
    let TIMESPAN_TODAY: number;
    let TIMESPAN_5MIN: number;
    let TIMESPAN_24HOURS: number;
    let shouldSanitizeOnShutdown: boolean;
    let shouldSanitizeNewTabContainer: boolean;
    /**
     * Shows a sanitization dialog to the user. Returns after the dialog box has
     * closed.
     *
     * @param parentWindow the browser window to use as parent for the created
     *        dialog.
     * @throws if parentWindow is undefined or doesn't have a gDialogBox.
     */
    function showUI(parentWindow: any): void;
    /**
     * Performs startup tasks:
     *  - Checks if sanitizations were not completed during the last session.
     *  - Registers sanitize-on-shutdown.
     */
    function onStartup(): Promise<void>;
    /**
     * Returns a 2 element array representing the start and end times,
     * in the uSec-since-epoch format that PRTime likes. If we should
     * clear everything, this function returns null.
     *
     * @param ts [optional] a timespan to convert to start and end time.
     *                      Falls back to the privacy.sanitize.timeSpan preference
     *                      if this argument is omitted.
     *                      If this argument is provided, it has to be one of the
     *                      Sanitizer.TIMESPAN_* constants. This function will
     *                      throw an error otherwise.
     *
     * @return {Array} a 2-element Array containing the start and end times.
     */
    function getClearRange(ts: any): any[];
    /**
     * Deletes privacy sensitive data in a batch, according to user preferences.
     * Returns a promise which is resolved if no errors occurred.  If an error
     * occurs, a message is reported to the console and all other items are still
     * cleared before the promise is finally rejected.
     *
     * @param [optional] itemsToClear
     *        Array of items to be cleared. if specified only those
     *        items get cleared, irrespectively of the preference settings.
     * @param [optional] options
     *        Object whose properties are options for this sanitization:
     *         - ignoreTimespan (default: true): Time span only makes sense in
     *           certain cases.  Consumers who want to only clear some private
     *           data can opt in by setting this to false, and can optionally
     *           specify a specific range.
     *           If timespan is not ignored, and range is not set, sanitize() will
     *           use the value of the timespan pref to determine a range.
     *         - range (default: null): array-tuple of [from, to] timestamps
     *         - privateStateForNewWindow (default: "non-private"): when clearing
     *           open windows, defines the private state for the newly opened window.
     * @returns {object} An object containing debug information about the
     *          sanitization progress. This state object is also used as
     *          AsyncShutdown metadata.
     */
    function sanitize(itemsToClear?: any, options?: {}): any;
    function observe(subject: any, topic: any, data: any): void;
    let QueryInterface: any;
    function runSanitizeOnShutdown(): Promise<void>;
    namespace items {
        namespace cache {
            function clear(range: any): Promise<void>;
        }
        namespace cookies {
            function clear(range: any, { progress }: {
                progress: any;
            }, clearHonoringExceptions: any): Promise<void>;
        }
        namespace offlineApps {
            function clear(range: any, { progress }: {
                progress: any;
            }, clearHonoringExceptions: any): Promise<void>;
        }
        namespace history {
            function clear(range: any, { progress }: {
                progress: any;
            }): Promise<void>;
        }
        namespace formdata {
            function clear(range: any): Promise<void>;
        }
        namespace downloads {
            function clear(range: any): Promise<void>;
        }
        namespace sessions {
            function clear(range: any): Promise<void>;
        }
        namespace siteSettings {
            function clear(range: any): Promise<void>;
        }
        namespace openWindows {
            function _canCloseWindow(win: any): boolean;
            function _resetAllWindowClosures(windowList: any): void;
            function clear(range: any, { privateStateForNewWindow }: {
                privateStateForNewWindow?: string;
            }): Promise<void>;
        }
        namespace pluginData {
            function clear(range: any): Promise<void>;
        }
    }
}
