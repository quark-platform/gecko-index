export namespace AddonRollouts {
    let STATE_ACTIVE: string;
    let STATE_ROLLED_BACK: string;
    function init(): Promise<void>;
    /**
     * Add a new rollout
     * @param {AddonRollout} rollout
     */
    function add(rollout: AddonRollout): Promise<any>;
    /**
     * Update an existing rollout
     * @param {AddonRollout} rollout
     * @throws If a matching rollout does not exist.
     */
    function update(rollout: AddonRollout): Promise<any>;
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
     * @returns {Promise<boolean>}
     */
    function has(slug: string): Promise<boolean>;
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
     * Test wrapper that temporarily replaces the stored rollout data with fake
     * data for testing.
     */
    function withTestMock(): (testFunction: any) => (...args: any[]) => Promise<void>;
}
/**
 * AddonRollouts store info about an active or expired addon rollouts.
 */
export type AddonRollout = {
    /**
     *   The ID of the recipe.
     */
    recipeId: int;
    /**
     *   Unique slug of the rollout.
     */
    slug: string;
    /**
     *   The current state of the rollout: "active", or "rolled-back".
     *   Active means that Normandy is actively managing therollout. Rolled-back
     *   means that the rollout was previously active, but has been rolled back for
     *   this user.
     */
    state: string;
    /**
     *   The ID used to look up the extension in Normandy's API.
     */
    extensionApiId: int;
    /**
     *   The add-on ID for this particular rollout.
     */
    addonId: string;
    /**
     *   The rollout add-on version number
     */
    addonVersion: string;
    /**
     *   URL that the add-on was installed from.
     */
    xpiUrl: string;
    /**
     *   The hash of the XPI file.
     */
    xpiHash: string;
    /**
     *   The algorithm used to hash the XPI file.
     */
    xpiHashAlgorithm: string;
};
