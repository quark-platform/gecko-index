/**
 * This class checks for app updates in the foreground.  It has several public
 * methods for checking for updates, downloading updates, stopping the current
 * update, and getting the current update status.  It can also register
 * listeners that will be called back as different stages of updates occur.
 */
export class AppUpdater {
    QueryInterface: any;
    /**
     * This can be accessed by consumers to inspect the update that is being
     * prepared for installation. It will always be null if `AppUpdater.check`
     * hasn't been called yet. `AppUpdater.check` will set it to an instance of
     * nsIUpdate once there is one available. This may be immediate, if an update
     * is already downloading or has been downloaded. It may be delayed if an
     * update check needs to be performed first. It also may remain null if the
     * browser is up to date or if the update check fails.
     *
     * Regarding the difference between `AppUpdater.update`, `AppUpdater.#update`,
     * and `AppUpdater.#_update`:
     *  - `AppUpdater.update` and `AppUpdater.#update` are effectively identical
     *    except that `AppUpdater.update` is readonly since it should not be
     *    changed from outside this class.
     *  - `AppUpdater.#_update` should only ever be modified by the setter for
     *    `AppUpdater.#update` in order to ensure that the "foregroundDownload"
     *    property is set on assignment.
     * The quick and easy rule for using these is to always use `#update`
     * internally and (of course) always use `update` externally.
     */
    get update(): any;
    /**
     * The main entry point for checking for updates.  As different stages of the
     * check and possible subsequent update occur, the updater's status is set and
     * listeners are called.
     *
     * Note that this is the correct entry point, regardless of the current state
     * of the updater. Although the function name suggests that this function will
     * start an update check, it will only do that if we aren't already in the
     * update process. Otherwise, it will simply monitor the update process,
     * update its own status, and call listeners.
     *
     * This function is async and will resolve when the update is ready to
     * install, or a failure state is reached.
     * However, most callers probably don't actually want to track its progress by
     * awaiting on this function. More likely, it is desired to kick this function
     * off without awaiting and add a listener via addListener. This allows the
     * caller to see when the updater is checking for an update, downloading it,
     * etc rather than just knowing "now it's running" and "now it's done".
     *
     * Note that calling this function while this instance is already performing
     * or monitoring an update check/download will have no effect. In other words,
     * it is only really necessary/useful to call this function when the status is
     * `NEVER_CHECKED` or `NO_UPDATES_FOUND`.
     */
    check(): Promise<void>;
    /**
     * This only has an effect if the status is `DOWNLOAD_AND_INSTALL`.This
     * indicates that the user has configured Firefox not to download updates
     * without permission, and we are waiting the user's permission.
     * This function should be called if and only if the user's permission was
     * given as it will allow the update download to proceed.
     */
    allowUpdateDownload(): void;
    /**
     * Stops the current check for updates and any ongoing download.
     *
     * If this is called before `AppUpdater.check()` is called or after it
     * resolves, this should have no effect. If this is called while `check()` is
     * still running, `AppUpdater` will return to the NEVER_CHECKED state. We
     * don't really want to leave it in any of the intermediary states after we
     * have disconnected all the listeners that would allow those states to ever
     * change.
     */
    stop(): void;
    /**
     * {AppUpdater.STATUS} The status of the current check or update.
     *
     * Note that until AppUpdater.check has been called, this will always be set
     * to NEVER_CHECKED.
     */
    get status(): number;
    /**
     * Adds a listener function that will be called back on status changes as
     * different stages of updates occur.  The function will be called without
     * arguments for most status changes; see the comments around the STATUS value
     * definitions below.  This is safe to call multiple times with the same
     * function.  It will be added only once.
     *
     * @param {function} listener
     *   The listener function to add.
     */
    addListener(listener: Function): void;
    /**
     * Removes a listener.  This is safe to call multiple times with the same
     * function, or with a function that was never added.
     *
     * @param {function} listener
     *   The listener function to remove.
     */
    removeListener(listener: Function): void;
    observe(subject: any, topic: any, status: any): void;
    #private;
}
export namespace AppUpdater {
    namespace STATUS {
        let NEVER_CHECKED: number;
        let NO_UPDATER: number;
        let UPDATE_DISABLED_BY_POLICY: number;
        let OTHER_INSTANCE_HANDLING_UPDATES: number;
        let UNSUPPORTED_SYSTEM: number;
        let MANUAL_UPDATE: number;
        let CHECKING: number;
        let NO_UPDATES_FOUND: number;
        let DOWNLOADING: number;
        let DOWNLOAD_FAILED: number;
        let DOWNLOAD_AND_INSTALL: number;
        let STAGING: number;
        let READY_FOR_RESTART: number;
        let INTERNAL_ERROR: number;
        let CHECKING_FAILED: number;
        /**
         * Is the given `status` a terminal state in the update state machine?
         *
         * A terminal state means that the `check()` method has completed.
         *
         * N.b.: `DOWNLOAD_AND_INSTALL` is not considered terminal because the normal
         * flow is that Firefox will show UI prompting the user to install, and when
         * the user interacts, the `check()` method will continue through the update
         * state machine.
         *
         * @returns {boolean} `true` if `status` is terminal.
         */
        function isTerminalStatus(status: any): boolean;
        /**
         * Turn the given `status` into a string for debugging.
         *
         * @returns {?string} representation of given numerical `status`.
         */
        function debugStringFor(status: any): string;
    }
}
