/**
 * A module for processes Experiment recipes, choosing and storing enrollment state,
 * and sending experiment-related Telemetry.
 */
export class _ExperimentManager {
    constructor({ id, store }?: {
        id?: string;
        store: any;
    });
    id: string;
    store: any;
    sessions: Map<any, any>;
    extraContext: {};
    _prefs: Map<any, any>;
    _prefsBySlug: Map<any, any>;
    get studiesEnabled(): any;
    /**
     * Creates a targeting context with following filters:
     *
     *   * `activeExperiments`: an array of slugs of all the active experiments
     *   * `isFirstStartup`: a boolean indicating whether or not the current enrollment
     *      is performed during the first startup
     *
     * @returns {Object} A context object
     * @memberof _ExperimentManager
     */
    createTargetingContext(): any;
    /**
     * Runs on startup, including before first run.
     *
     * @param {object} extraContext extra targeting context provided by the
     * ambient environment.
     */
    onStartup(extraContext?: object): Promise<void>;
    /**
     * Runs every time a Recipe is updated or seen for the first time.
     * @param {RecipeArgs} recipe
     * @param {string} source
     */
    onRecipe(recipe: RecipeArgs, source: string): Promise<void>;
    _checkUnseenEnrollments(enrollments: any, sourceToCheck: any, recipeMismatches: any, invalidRecipes: any, invalidBranches: any, invalidFeatures: any, missingLocale: any, missingL10nIds: any): void;
    /**
     * Removes stored enrollments that were not seen after syncing with Remote Settings
     * Runs when the all recipes been processed during an update, including at first run.
     * @param {string} sourceToCheck
     * @param {object} options Extra context used in telemetry reporting
     * @param {string[]} options.recipeMismatches
     *         The list of experiments that do not match targeting.
     * @param {string[]} options.invalidRecipes
     *         The list of recipes that do not match
     * @param {Map<string, string[]>} options.invalidBranches
     *         A mapping of experiment slugs to a list of branches that failed
     *         feature validation.
     * @param {Map<string, string[]>} options.invalidFeatures
     *        The mapping of experiment slugs to a list of invalid feature IDs.
     * @param {string[]} options.missingLocale
     *        The list of experiment slugs missing an entry in the localization
     *        table for the current locale.
     * @param {Map<string, string[]>} options.missingL10nIds
     *        The mapping of experiment slugs to the IDs of localization entries
     *        missing from the current locale.
     * @param {string | null} options.locale
     *        The current locale.
     * @param {boolean} options.validationEnabled
     *        Whether or not schema validation was enabled.
     */
    onFinalize(sourceToCheck: string, { recipeMismatches, invalidRecipes, invalidBranches, invalidFeatures, missingLocale, missingL10nIds, locale, validationEnabled, }?: {
        recipeMismatches: string[];
        invalidRecipes: string[];
        invalidBranches: Map<string, string[]>;
        invalidFeatures: Map<string, string[]>;
        missingLocale: string[];
        missingL10nIds: Map<string, string[]>;
        locale: string | null;
        validationEnabled: boolean;
    }): void;
    /**
     * Bucket configuration specifies a specific percentage of clients that can
     * be enrolled.
     * @param {BucketConfig} bucketConfig
     * @returns {Promise<boolean>}
     */
    isInBucketAllocation(bucketConfig: BucketConfig): Promise<boolean>;
    /**
     * Start a new experiment by enrolling the users
     *
     * @param {RecipeArgs} recipe
     * @param {string} source
     * @param {object} options
     * @param {boolean} options.reenroll - Allow re-enrollment. Only allowed for rollouts.
     * @returns {Promise<Enrollment>} The experiment object stored in the data store
     * @rejects {Error}
     * @memberof _ExperimentManager
     */
    enroll(recipe: RecipeArgs, source: string, { reenroll }?: {
        reenroll: boolean;
    }): Promise<Enrollment>;
    _enroll({ slug, experimentType, userFacingName, userFacingDescription, featureIds, isRollout, localizations, }: {
        slug: any;
        experimentType?: string;
        userFacingName: any;
        userFacingDescription: any;
        featureIds: any;
        isRollout: any;
        localizations: any;
    }, branch: any, source: any, options?: {}): Enrollment;
    forceEnroll(recipe: any, branch: any, source?: string): Enrollment;
    /**
     * Update an enrollment that was already set
     *
     * @param {RecipeArgs} recipe
     * @returns {boolean} whether the enrollment is still active
     */
    updateEnrollment(recipe: RecipeArgs, source: any): boolean;
    /**
     * Stop an enrollment that is currently active
     *
     * @param {string} slug
     *        The slug of the enrollment to stop.
     * @param {string} reason
     *        An optional reason for the unenrollment.
     *
     *        This will be reported in telemetry.
     */
    unenroll(slug: string, reason?: string): void;
    /**
     * Stop an enrollment that is currently active.
     *
     * @param {Enrollment} enrollment
     *        The enrollment to end.
     *
     * @param {object} options
     * @param {string} options.reason
     *        An optional reason for the unenrollment.
     *
     *        This will be reported in telemetry.
     *
     * @param {object?} options.changedPref
     *        If the unenrollment was due to pref change, this will contain the
     *        information about the pref that changed.
     *
     * @param {string} options.changedPref.name
     *        The name of the pref that caused the unenrollment.
     *
     * @param {string} options.changedPref.branch
     *        The branch that was changed ("user" or "default").
     */
    _unenroll(enrollment: Enrollment, { reason, changedPref, duringRestore }?: {
        reason: string;
        changedPref: object | null;
    }): void;
    /**
     * Unenroll from all active studies if user opts out.
     */
    observe(aSubject: any, aTopic: any, aPrefName: any): void;
    /**
     * Send Telemetry for undesired event
     *
     * @param {string} eventName
     * @param {string} slug
     * @param {string} reason
     */
    sendFailureTelemetry(eventName: string, slug: string, reason: string): void;
    sendValidationFailedTelemetry(slug: any, reason: any, extra: any): void;
    /**
     *
     * @param {Enrollment} experiment
     */
    sendEnrollmentTelemetry({ slug, branch, experimentType, enrollmentId }: Enrollment): void;
    /**
     * Sets Telemetry when activating an experiment.
     *
     * @param {Enrollment} experiment
     */
    setExperimentActive(experiment: Enrollment): void;
    /**
     * Generate Normandy UserId respective to a branch
     * for a given experiment.
     *
     * @param {string} slug
     * @param {Array<{slug: string; ratio: number}>} branches
     * @param {string} namespace
     * @param {number} start
     * @param {number} count
     * @param {number} total
     * @returns {Promise<{[branchName: string]: string}>} An object where
     * the keys are branch names and the values are user IDs that will enroll
     * a user for that particular branch. Also includes a `notInExperiment` value
     * that will not enroll the user in the experiment if not 100% enrollment.
     */
    generateTestIds(recipe: any): Promise<{
        [branchName: string]: string;
    }>;
    /**
     * Choose a branch randomly.
     *
     * @param {string} slug
     * @param {Branch[]} branches
     * @returns {Promise<Branch>}
     * @memberof _ExperimentManager
     */
    chooseBranch(slug: string, branches: Branch[], userId?: any): Promise<Branch>;
    /**
     * Generate the list of prefs a recipe will set.
     *
     * @params {object} branch The recipe branch that will be enrolled.
     * @params {boolean} isRollout Whether or not this recipe is a rollout.
     *
     * @returns {object} An object with the following keys:
     *
     *                   `prefs`:
     *                        The full list of prefs that this recipe would set,
     *                        if there are no conflicts. This will include prefs
     *                        that, for example, will not be set because this
     *                        enrollment is a rollout and there is an active
     *                        experiment that set the same pref.
     *
     *                   `prefsToSet`:
     *                        Prefs that should be set once enrollment is
     *                        complete.
     */
    _getPrefsForBranch(branch: any, isRollout?: boolean): object;
    /**
     * Set a list of prefs from enrolling in an experiment or rollout.
     *
     * The ExperimentManager's pref observers will be disabled while setting each
     * pref so as not to accidentally unenroll an existing rollout that an
     * experiment would override.
     *
     * @param {object[]} prefsToSet
     *                   A list of objects containing the prefs to set.
     *
     *                   Each object has the following properties:
     *
     *                   * `name`: The name of the pref.
     *                   * `value`: The value of the pref.
     *                   * `prefBranch`: The branch to set the pref on (either "user" or "default").
     */
    _setEnrollmentPrefs(prefsToSet: object[]): void;
    /**
     * Unset prefs set during this enrollment.
     *
     * If this enrollment is an experiment and there is an existing rollout that
     * would set a pref that was covered by this enrollment, the pref will be
     * updated to that rollout's value.
     *
     * Otherwise, it will be set to the original value from before the enrollment
     * began.
     *
     * @param {Enrollment} enrollment
     *        The enrollment that has ended.
     *
     * @param {object} options
     *
     * @param {object?} options.changedPref
     *        If provided, a changed pref that caused the unenrollment that
     *        triggered unsetting these prefs. This is provided as to not
     *        overwrite a changed pref with an original value.
     *
     * @param {string} options.changedPref.name
     *        The name of the changed pref.
     *
     * @param {string} options.changedPref.branch
     *        The branch that was changed ("user" or "default").
     *
     * @param {boolean} options.duringRestore
     *        The unenrollment was caused during restore.
     */
    _unsetEnrollmentPrefs(enrollment: Enrollment, { changedPref, duringRestore }?: {
        changedPref: object | null;
    }): void;
    /**
     * Restore the prefs set by an enrollment.
     *
     * @param {object} enrollment The enrollment.
     * @param {object} enrollment.branch The branch that was enrolled.
     * @param {object[]} enrollment.prefs The prefs that are set by the enrollment.
     * @param {object[]} enrollment.isRollout The prefs that are set by the enrollment.
     *
     * @returns {boolean} Whether the restore was successful. If false, the
     *                    enrollment has ended.
     */
    _restoreEnrollmentPrefs(enrollment: {
        branch: object;
        prefs: object[];
        isRollout: object[];
    }): boolean;
    /**
     * Make a cache to look up enrollments of the oppposite kind by feature ID.
     *
     * @param {boolean} isRollout Whether or not the current enrollment is a
     *                            rollout. If true, the cache will return
     *                            experiments. If false, the cache will return
     *                            rollouts.
     *
     * @returns {function} The cache, as a callable function.
     */
    _makeEnrollmentCache(isRollout: boolean): Function;
    /**
     * Update the set of observers with prefs set by the given enrollment.
     *
     * @param {Enrollment} enrollment
     *        The enrollment that is setting prefs.
     */
    _updatePrefObservers({ slug, prefs }: Enrollment): void;
    /**
     * Remove an entry for the pref observer for the given pref and slug.
     *
     * If there are no more enrollments listening to a pref, the observer will be removed.
     *
     * This is called when an enrollment is ending.
     *
     * @param {string} name The name of the pref.
     * @param {string} slug The slug of the enrollment that is being unenrolled.
     */
    _removePrefObserver(name: string, slug: string): void;
    /**
     * Handle a change to a pref set by enrollments by ending those enrollments.
     *
     * @param {object} pref
     *        Information about the pref that was changed.
     *
     * @param {string} pref.name
     *        The name of the pref that was changed.
     *
     * @param {string} pref.branch
     *        The branch enrollments set the pref on.
     *
     * @param {string} pref.featureId
     *        The feature ID of the feature containing the variable that set the
     *        pref.
     *
     * @param {string} pref.variable
     *        The variable in the given feature whose value determined the pref's
     *        value.
     */
    _onExperimentPrefChanged(pref: {
        name: string;
        branch: string;
        featureId: string;
        variable: string;
    }): void;
}
export const ExperimentManager: _ExperimentManager;
