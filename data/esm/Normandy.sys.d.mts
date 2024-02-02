/// <reference types="gecko-types" />
export namespace Normandy {
    let studyPrefsChanged: {};
    let rolloutPrefsChanged: {};
    let defaultPrefsHaveBeenApplied: import("resource://gre/modules/PromiseUtils.sys.mjs").Deferred;
    let uiAvailableNotificationObserved: import("resource://gre/modules/PromiseUtils.sys.mjs").Deferred;
    /** Initialization that needs to happen before the first paint on startup. */
    function init({ runAsync }?: {
        runAsync?: boolean;
    }): Promise<void>;
    function observe(subject: any, topic: any, data: any): Promise<void>;
    function finishInit(): Promise<void>;
    function uninit(): Promise<void>;
    /**
     * Copy a preference subtree from one branch to another, being careful about
     * types, and return the values the target branch originally had. Prefs will
     * be read from the user branch and applied to the default branch.
     *
     * @param sourcePrefix
     *   The pref prefix to read prefs from.
     * @returns
     *   The original values that each pref had on the default branch.
     */
    function applyStartupPrefs(sourcePrefix: any): {};
}
