export class _RemoteSettingsExperimentLoader {
    _initialized: boolean;
    _updating: boolean;
    manager: any;
    get studiesEnabled(): any;
    /**
     * Initialize the loader, updating recipes from Remote Settings.
     *
     * @param {Object} options            additional options.
     * @param {bool}   options.forceSync  force Remote Settings to sync recipe collection
     *                                    before updating recipes; throw if sync fails.
     * @return {Promise}                  which resolves after initialization and recipes
     *                                    are updated.
     */
    init(options?: {
        forceSync: bool;
    }): Promise<any>;
    uninit(): void;
    /**
     * Get all recipes from remote settings
     * @param {string} trigger   What caused the update to occur?
     * @param {Object} options            additional options.
     * @param {bool}   options.forceSync  force Remote Settings to sync recipe collection
     *                                    before updating recipes; throw if sync fails.
     * @return {Promise}                  which resolves after recipes are updated.
     */
    updateRecipes(trigger: string, options?: {
        forceSync: bool;
    }): Promise<any>;
    optInToExperiment({ slug, branch: branchSlug, collection, applyTargeting, }: {
        slug: any;
        branch: any;
        collection: any;
        applyTargeting?: boolean;
    }): Promise<void>;
    /**
     * Handles feature status based on feature pref and STUDIES_OPT_OUT_PREF.
     * Changing any of them to false will turn off any recipe fetching and
     * processing.
     */
    onEnabledPrefChange(): void;
    observe(aSubect: any, aTopic: any, aData: any): void;
    /**
     * Sets a timer to update recipes every this.intervalInSeconds
     */
    setTimer(): void;
}
export class EnrollmentsContext {
    constructor(experimentManager: any, recipeValidator: any, { validationEnabled, shouldCheckTargeting }?: {
        validationEnabled?: boolean;
        shouldCheckTargeting?: boolean;
    });
    experimentManager: any;
    recipeValidator: any;
    validationEnabled: boolean;
    shouldCheckTargeting: boolean;
    matches: number;
    recipeMismatches: any[];
    invalidRecipes: any[];
    invalidBranches: Map<any, any>;
    invalidFeatures: Map<any, any>;
    validatorCache: {};
    missingLocale: any[];
    missingL10nIds: Map<any, any>;
    locale: any;
    getResults(): {
        recipeMismatches: any[];
        invalidRecipes: any[];
        invalidBranches: Map<any, any>;
        invalidFeatures: Map<any, any>;
        missingLocale: any[];
        missingL10nIds: Map<any, any>;
        locale: any;
        validationEnabled: boolean;
    };
    checkRecipe(recipe: any): Promise<boolean>;
    evaluateJexl(jexlString: any, customContext: any): Promise<any>;
    /**
     * Checks targeting of a recipe if it is defined
     * @param {Recipe} recipe
     * @param {{[key: string]: any}} customContext A custom filter context
     * @returns {Promise<boolean>} Should we process the recipe?
     */
    checkTargeting(recipe: Recipe): Promise<boolean>;
    /**
     * Validate the branches of an experiment.
     *
     * @param {object} recipe The recipe object.
     * @param {boolean} validateSchema Whether to validate the feature values
     *        using JSON schemas.
     *
     * @returns {object} The lists of invalid branch slugs and invalid feature
     *                   IDs.
     */
    _validateBranches({ id, branches, localizations }: object, validateSchema: boolean): object;
    _generateVariablesOnlySchema({ featureId, manifest }: {
        featureId: any;
        manifest: any;
    }): {
        $schema: string;
        title: any;
        description: any;
        type: string;
        properties: {};
        additionalProperties: boolean;
    };
}
export const RemoteSettingsExperimentLoader: _RemoteSettingsExperimentLoader;
