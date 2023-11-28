export namespace PreferenceExperiments {
    /**
     * Update the the experiment storage with changes that happened during early startup.
     * @param {object} studyPrefsChanged Map from pref name to previous pref value
     */
    export function recordOriginalValues(studyPrefsChanged: any): Promise<void>;
    /**
     * Set the default preference value for active experiments that use the
     * default preference branch.
     */
    export function init(): Promise<void>;
    /**
     * Save in-progress, default-branch preference experiments in a sub-branch of
     * the normandy preferences. On startup, we read these to set the
     * experimental values.
     *
     * This is needed because the default branch does not persist between Firefox
     * restarts. To compensate for that, Normandy sets the default branch to the
     * experiment values again every startup. The values to set the preferences
     * to are stored in user-branch preferences because preferences have minimal
     * impact on the performance of startup.
     */
    export function saveStartupPrefs(): Promise<void>;
    /**
     * Test wrapper that temporarily replaces the stored experiment data with fake
     * data for testing.
     */
    export function withMockExperiments(prefExperiments?: any[]): (testFunction: any) => (args: any) => Promise<void>;
    /** When Telemetry is disabled, clear all identifiers from the stored experiments.  */
    export function onTelemetryDisabled(): Promise<void>;
    /**
     * Clear all stored data about active and past experiments.
     */
    export function clearAllExperimentStorage(): Promise<void>;
    /**
     * Start a new preference experiment.
     * @param {Object} experiment
     * @param {string} experiment.slug
     * @param {string} experiment.actionName  The action who knows about this
     *   experiment and is responsible for cleaning it up. This should
     *   correspond to the name of some BaseAction subclass.
     * @param {string} experiment.branch
     * @param {string} experiment.preferenceName
     * @param {string|integer|boolean} experiment.preferenceValue
     * @param {PreferenceBranchType} experiment.preferenceBranchType
     * @returns {Experiment} The experiment object stored in the data store
     * @rejects {Error}
     *   - If an experiment with the given name already exists
     *   - if an experiment for the given preference is active
     *   - If the given preferenceType does not match the existing stored preference
     */
    export function start({ name, slug, actionName, branch, preferences, experimentType, userFacingName, userFacingDescription, }: {
        slug: string;
        actionName: string;
        branch: string;
        preferenceName: string;
        preferenceValue: any;
        preferenceBranchType: any;
    }): Experiment;
    /**
     * Register a preference observer that stops an experiment when the user
     * modifies the preference.
     * @param {string} experimentSlug
     * @param {string} preferenceName
     * @param {string|integer|boolean} preferenceValue
     * @throws {Error}
     *   If an observer for the experiment is already active.
     */
    export function startObserver(experimentSlug: string, preferences: any): void;
    /**
     * Check if a preference observer is active for an experiment.
     * @param {string} experimentSlug
     * @return {Boolean}
     */
    export function hasObserver(experimentSlug: string): boolean;
    /**
     * Disable a preference observer for an experiment.
     * @param {string} experimentSlug
     * @throws {Error}
     *   If there is no active observer for the experiment.
     */
    export function stopObserver(experimentSlug: string): void;
    /**
     * Disable all currently-active preference observers for experiments.
     */
    export function stopAllObservers(): void;
    /**
     * Update the timestamp storing when Normandy last sent a recipe for the
     * experiment.
     * @param {string} experimentSlug
     * @rejects {Error}
     *   If there is no stored experiment with the given slug.
     */
    export function markLastSeen(experimentSlug: string): Promise<void>;
    /**
     * Called when an experimental pref has changed away from its experimental
     * value for the first time.
     *
     * One of `experiment` or `slug` must be passed.
     *
     * @param {object} options
     * @param {Experiment} [options.experiment]
     *   The experiment that had a pref change. If this is passed, slug is ignored.
     * @param {string} [options.slug]
     *   The slug of the experiment that had a pref change. This will be used to
     *   fetch an experiment if none was passed.
     * @param {string} options.preferenceName The preference changed.
     * @param {string} options.reason The reason the preference change was detected.
     */
    export function recordPrefChange({ experiment, experimentSlug, preferenceName, reason, }: {
        experiment?: Experiment;
        slug?: string;
        preferenceName: string;
        reason: string;
    }): Promise<void>;
    /**
     * Stop an active experiment, deactivate preference watchers, and optionally
     * reset the associated preference to its previous value.
     * @param {string} experimentSlug
     * @param {Object} options
     * @param {boolean} [options.resetValue = true]
     *   If true, reset the preference to its original value prior to
     *   the experiment. Optional, defaults to true.
     * @param {String} [options.reason = "unknown"]
     *   Reason that the experiment is ending. Optional, defaults to
     *   "unknown".
     * @rejects {Error}
     *   If there is no stored experiment with the given slug, or if the
     *   experiment has already expired.
     */
    export function stop(experimentSlug: string, { resetValue, reason, changedPref, caller }?: {
        resetValue?: boolean;
        reason?: string;
    }): Promise<void>;
    /**
     * Clone an experiment using knowledge of its structure to avoid
     * having to serialize/deserialize it.
     *
     * We do this in places where return experiments so clients can't
     * accidentally mutate our data underneath us.
     */
    export function _cloneExperiment(experiment: any): any;
    /**
     * Get the experiment object for the experiment.
     * @param {string} experimentSlug
     * @resolves {Experiment}
     * @rejects {Error}
     *   If no preference experiment exists with the given slug.
     */
    export function get(experimentSlug: string): Promise<any>;
    /**
     * Get a list of all stored experiment objects.
     * @resolves {Experiment[]}
     */
    export function getAll(): Promise<any[]>;
    /**
     * Get a list of experiment objects for all active experiments.
     * @resolves {Experiment[]}
     */
    export function getAllActive(): Promise<any[]>;
    /**
     * Check if an experiment exists with the given slug.
     * @param {string} experimentSlug
     * @resolves {boolean} True if the experiment exists, false if it doesn't.
     */
    export function has(experimentSlug: string): Promise<boolean>;
    /**
     * Update an experiment in the data store. If an experiment with the given
     * slug is not already in the store, an error will be thrown.
     *
     * @param experiment {Experiment} The experiment to update
     * @param experiment.slug {String} The experiment must have a slug
     */
    export function update(experiment: Experiment): Promise<void>;
    export { NotFoundError };
    export { InvalidPreferenceName };
    export namespace migrations {
        /** Move experiments into a specific key. */
        function migration01MoveExperiments(storage?: any): Promise<void>;
        /** Migrate storage.data to multi-preference format */
        function migration02MultiPreference(storage?: any): Promise<void>;
        /** Add "actionName" field for experiments that don't have it. */
        function migration03AddActionName(storage?: any): Promise<void>;
        function migration04RenameNameToSlug(storage?: any): Promise<void>;
        function migration05RemoveOldAction(): Promise<void>;
        function migration06TrackOverriddenPrefs(storage?: any): Promise<void>;
    }
}
/**
 * Experiments store info about an active or expired preference experiment.
 */
export type Experiment = {
    /**
     *   A string uniquely identifying the experiment. Used for telemetry, and other
     *   machine-oriented use cases. Used as a display name if `userFacingName` is
     *   null.
     */
    slug: string;
    /**
     *   A user-friendly name for the experiment. Null on old-style single-preference
     *   experiments, which do not have a userFacingName.
     */
    userFacingName: string | null;
    /**
     *   A user-friendly description of the experiment. Null on old-style
     *   single-preference experiments, which do not have a userFacingDescription.
     */
    userFacingDescription: string | null;
    /**
     *   Experiment branch that the user was matched to
     */
    branch: string;
    /**
     *   If false, the experiment is active.
     *   ISO-formatted date string of when the experiment was last seen from the
     *   recipe server.
     */
    expired: boolean;
    /**
     *   ISO-formatted date string of when temporary errors with this experiment
     *   should not longer be considered temporary. After this point, further errors
     *   will result in unenrollment.
     */
    temporaryErrorDeadline: string | null;
    /**
     *   An object consisting of all the preferences that are set by this experiment.
     *   Keys are the name of each preference affected by this experiment. Values are
     *   Preference Objects, about which see below.
     */
    preferences: any;
    /**
     *   The type to report to Telemetry's experiment marker API.
     */
    experimentType: string;
    /**
     *   A random ID generated at time of enrollment. It should be included on all
     *   telemetry related to this experiment. It should not be re-used by other
     *   studies, or any other purpose. May be null on old experiments.
     */
    enrollmentId: string;
    /**
     *   The action who knows about this experiment and is responsible for cleaning
     *   it up. This should correspond to the `name` of some BaseAction subclass.
     */
    actionName: string;
};
declare class NotFoundError extends Error {
}
declare class InvalidPreferenceName extends Error {
}
export {};
