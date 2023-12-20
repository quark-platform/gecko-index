export namespace PreferenceRollouts {
    let STATE_ACTIVE: string;
    let STATE_ROLLED_BACK: string;
    let STATE_GRADUATED: string;
    let GRADUATION_SET: Set<string>;
    /**
     * Update the rollout database with changes that happened during early startup.
     * @param {object} rolloutPrefsChanged Map from pref name to previous pref value
     */
    function recordOriginalValues(originalPreferences: any): Promise<void>;
    function init(): Promise<void>;
    /**
     * Test wrapper that temporarily replaces the stored rollout data with fake
     * data for testing.
     */
    function withTestMock({ graduationSet, rollouts: prefRollouts, }?: {
        graduationSet?: Set<any>;
        rollouts?: any[];
    }): (testFunction: any) => (args: any) => Promise<void>;
    /**
     * Add a new rollout
     * @param {PreferenceRollout} rollout
     */
    function add(rollout: PreferenceRollout): Promise<any>;
    /**
     * Update an existing rollout
     * @param {PreferenceRollout} rollout
     * @throws If a matching rollout does not exist.
     */
    function update(rollout: PreferenceRollout): Promise<any>;
    /**
     * Update many existing rollouts. More efficient than calling `update` many
     * times in a row.
     * @param {Array<PreferenceRollout>} rollouts
     * @throws If any of the passed rollouts have a slug that doesn't exist in the database already.
     */
    function updateMany(rollouts: PreferenceRollout[]): Promise<void>;
    /**
     * Test whether there is a rollout in storage with the given slug.
     * @param {string} slug
     * @returns {boolean}
     */
    function has(slug: string): boolean;
    /**
     * Get a rollout by slug
     * @param {string} slug
     */
    function get(slug: string): Promise<any>;
    /** Get all rollouts in the database. */
    function getAll(): Promise<any>;
    /** Get all rollouts in the "active" state. */
    function getAllActive(): Promise<any>;
    /**
     * Save in-progress preference rollouts in a sub-branch of the normandy prefs.
     * On startup, we read these to set the rollout values.
     */
    function saveStartupPrefs(): Promise<void>;
    function graduate(rollout: any, reason: any): Promise<void>;
}
/**
 * PreferenceRollouts store info about an active or expired preference rollout.
 */
export type PreferenceRollout = {
    /**
     *   Unique slug of the experiment
     */
    slug: string;
    /**
     *   The current state of the rollout: "active", "rolled-back", "graduated".
     *   Active means that Normandy is actively managing therollout. Rolled-back
     *   means that the rollout was previously active, but has been rolled back for
     *   this user. Graduated means that the built-in default now matches the
     *   rollout value, and so Normandy is no longer managing the preference.
     */
    state: string;
    /**
     *   An array of preferences specifications involved in the rollout.
     */
    preferences: Array<PreferenceSpec>;
};
/**
 * PreferenceSpec describe how a preference should change during a rollout.
 */
export type PreferenceSpec = {
    /**
     *   The preference to modify.
     */
    preferenceName: string;
    /**
     *   Type of the preference being set.
     */
    preferenceType: string;
    /**
     *   The value to change the preference to.
     */
    value: string | integer | boolean;
    /**
     *   The value the preference would have on the default branch if this rollout
     *   were not active.
     */
    previousValue: string | integer | boolean;
};
