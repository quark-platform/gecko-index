export namespace ExperimentAPI {
    /**
     * @returns {Promise} Resolves when the API has synchronized to the main store
     */
    function ready(): Promise<any>;
    /**
     * Returns an experiment, including all its metadata
     * Sends exposure event
     *
     * @param {{slug?: string, featureId?: string}} options slug = An experiment identifier
     * or feature = a stable identifier for a type of experiment
     * @returns {{slug: string, active: bool}} A matching experiment if one is found.
     */
    function getExperiment({ slug, featureId }?: {
        slug?: string;
        featureId?: string;
    }): {
        slug: string;
        active: bool;
    };
    /**
     * Used by getExperimentMetaData and getRolloutMetaData
     *
     * @param {{slug: string, featureId: string}} options Enrollment identifier
     * @param isRollout Is enrollment an experiment or a rollout
     * @returns {object} Enrollment metadata
     */
    function getEnrollmentMetaData({ slug, featureId }: {
        slug: string;
        featureId: string;
    }, isRollout: any): any;
    /**
     * Return experiment slug its status and the enrolled branch slug
     * Does NOT send exposure event because you only have access to the slugs
     */
    function getExperimentMetaData(options: any): any;
    /**
     * Return rollout slug its status and the enrolled branch slug
     * Does NOT send exposure event because you only have access to the slugs
     */
    function getRolloutMetaData(options: any): any;
    /**
     * Return FeatureConfig from first active experiment where it can be found
     * @param {{slug: string, featureId: string }}
     * @returns {Branch | null}
     */
    function getActiveBranch({ slug, featureId }: {
        slug: string;
        featureId: string;
    }): any;
    /**
     * Deregisters an event listener.
     * @param {string} eventName
     * @param {function} callback
     */
    function off(eventName: string, callback: Function): void;
    /**
     * Returns the recipe for a given experiment slug
     *
     * This should noly be called from the main process.
     *
     * Note that the recipe is directly fetched from RemoteSettings, which has
     * all the recipe metadata available without relying on the `this._store`.
     * Therefore, calling this function does not require to call `this.ready()` first.
     *
     * @param slug {String} An experiment identifier
     * @returns {Recipe|undefined} A matching experiment recipe if one is found
     */
    function getRecipe(slug: string): any;
    /**
     * Returns all the branches for a given experiment slug
     *
     * This should only be called from the main process. Like `getRecipe()`,
     * calling this function does not require to call `this.ready()` first.
     *
     * @param slug {String} An experiment identifier
     * @returns {[Branches]|undefined} An array of branches for the given slug
     */
    function getAllBranches(slug: string): [Branches];
    function recordExposureEvent({ featureId, experimentSlug, branchSlug }: {
        featureId: any;
        experimentSlug: any;
        branchSlug: any;
    }): void;
}
/**
 * Singleton that holds lazy references to _ExperimentFeature instances
 * defined by the FeatureManifest
 */
export const NimbusFeatures: {};
export class _ExperimentFeature {
    /**
     * Do recursive locale substitution on the values, if applicable.
     *
     * If there are no localizations provided, the value will be returned as-is.
     *
     * If the value is an object containing an $l10n key, its substitution will be
     * returned.
     *
     * Otherwise, the value will be recursively substituted.
     *
     * @param {unknown} values The values to perform substitutions upon.
     * @param {Record<string, string>} localizations The localization
     *        substitutions for a specific locale.
     * @param {Set<string>?} missingIds An optional set to collect all the IDs of
     *        all missing l10n entries.
     *
     * @returns {any} The values, potentially locale substituted.
     */
    static substituteLocalizations(values: unknown, localizations: Record<string, string>, missingIds?: Set<string> | null): any;
    /**
     * The implementation of localization substitution.
     *
     * @param {unknown} values The values to perform substitutions upon.
     * @param {Record<string, string>} localizations The localization
     *        substitutions for a specific locale.
     * @param {Set<string>?} missingIds An optional set to collect all the IDs of
     *        all missing l10n entries.
     *
     * @returns {any} The values, potentially locale substituted.
     */
    static _substituteLocalizations(values: unknown, localizations: Record<string, string>, missingIds: Set<string> | null): any;
    constructor(featureId: any, manifest: any);
    featureId: any;
    prefGetters: {};
    manifest: any;
    _didSendExposureEvent: boolean;
    getSetPrefName(variable: any): any;
    getFallbackPrefName(variable: any): any;
    /**
     * Wait for ExperimentStore to load giving access to experiment features that
     * do not have a pref cache
     */
    ready(): Promise<any>;
    /**
     * Lookup feature variables in experiments, rollouts, and fallback prefs.
     * @param {{defaultValues?: {[variableName: string]: any}}} options
     * @returns {{[variableName: string]: any}} The feature value
     */
    getAllVariables({ defaultValues }?: {
        defaultValues?: {
            [variableName: string]: any;
        };
    }): {
        [variableName: string]: any;
    };
    getVariable(variable: any): any;
    getRollout(): any;
    recordExposureEvent({ once }?: {
        once?: boolean;
    }): void;
    onUpdate(callback: any): void;
    offUpdate(callback: any): void;
    /**
     * The applications this feature applies to.
     *
     */
    get applications(): any;
    debug(): {
        variables: {
            [variableName: string]: any;
        };
        experiment: any;
        fallbackPrefs: any[][];
        rollouts: any;
    };
    /**
     * Return a value (or all values) from an enrollment, potentially localized.
     *
     * @param {Enrollment} enrollment - The enrollment to query for the value or values.
     * @param {string?} variable - The name of the variable to query for. If not
     *                             provided, all variables will be returned.
     *
     * @returns {any} The value for the variable(s) in question.
     */
    _getLocalizedValue(enrollment: Enrollment, variable?: string | null): any;
}
