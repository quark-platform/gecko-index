export class ExperimentStore {
    static SYNC_DATA_PREF_BRANCH: string;
    static SYNC_DEFAULTS_PREF_BRANCH: string;
    constructor(sharedDataKey: any, options?: {
        isParent: boolean;
    });
    init(): Promise<void>;
    /**
     * Given a feature identifier, find an active experiment that matches that feature identifier.
     * This assumes, for now, that there is only one active experiment per feature per browser.
     * Does not activate the experiment (send an exposure event)
     *
     * @param {string} featureId
     * @returns {Enrollment|undefined} An active experiment if it exists
     * @memberof ExperimentStore
     */
    getExperimentForFeature(featureId: string): Enrollment | undefined;
    /**
     * Check if an active experiment already exists for a feature.
     * Does not activate the experiment (send an exposure event)
     *
     * @param {string} featureId
     * @returns {boolean} Does an active experiment exist for that feature?
     * @memberof ExperimentStore
     */
    hasExperimentForFeature(featureId: string): boolean;
    /**
     * @returns {Enrollment[]}
     */
    getAll(): Enrollment[];
    /**
     * Returns all active experiments
     * @returns {Enrollment[]}
     */
    getAllActiveExperiments(): Enrollment[];
    /**
     * Returns all active rollouts
     * @returns {Enrollment[]}
     */
    getAllActiveRollouts(): Enrollment[];
    /**
     * Query the store for the remote configuration of a feature
     * @param {string} featureId The feature we want to query for
     * @returns {{Rollout}|undefined} Remote defaults if available
     */
    getRolloutForFeature(featureId: string): {
        Rollout;
    } | undefined;
    /**
     * Check if an active rollout already exists for a feature.
     * Does not active the experiment (send an exposure event).
     *
     * @param {string} featureId
     * @returns {boolean} Does an active rollout exist for that feature?
     */
    hasRolloutForFeature(featureId: string): boolean;
    /**
     * Remove inactive enrollments older than 6 months
     */
    _cleanupOldRecipes(): void;
    _emitUpdates(enrollment: any): void;
    _emitFeatureUpdate(featureId: any, reason: any): void;
    _onFeatureUpdate(featureId: any, callback: any): void;
    _offFeatureUpdate(featureId: any, callback: any): void;
    /**
     * Persists early startup experiments or rollouts
     * @param {Enrollment} enrollment Experiment or rollout
     */
    _updateSyncStore(enrollment: Enrollment): void;
    /**
     * Add an enrollment and notify listeners
     * @param {Enrollment} enrollment
     */
    addEnrollment(enrollment: Enrollment): void;
    /**
     * Merge new properties into the properties of an existing experiment
     * @param {string} slug
     * @param {Partial<Enrollment>} newProperties
     */
    updateExperiment(slug: string, newProperties: Enrollment): void;
    /**
     * Test only helper for cleanup
     *
     * @param slugOrFeatureId Can be called with slug (which removes the SharedDataMap entry) or
     * with featureId which removes the SyncDataStore entry for the feature
     */
    _deleteForTests(slugOrFeatureId: any): void;
}
