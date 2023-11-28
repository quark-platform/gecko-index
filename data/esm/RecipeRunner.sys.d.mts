export namespace RecipeRunner {
    let initializedPromise: any;
    function init(): Promise<void>;
    function enable(): void;
    function disable(): void;
    /** Watch for prefs to change, and call this.observer when they do */
    function watchPrefs(): void;
    function unwatchPrefs(): void;
    /** When prefs change, this is fired */
    function observe(subject: any, topic: any, data: any): void;
    function checkPrefs(): void;
    function registerTimer(): void;
    function unregisterTimer(): void;
    function setUpRemoteSettings(): void;
    /** Called when our Remote Settings collection is updated */
    function onSync(): Promise<void>;
    function updateRunInterval(): void;
    function run({ trigger }?: {
        trigger?: string;
    }): Promise<void>;
    function getFilterContext(recipe: any): {
        env: any;
        normandy: any;
    };
    /**
     * Return the set of capabilities this runner has.
     *
     * This is used to pre-filter recipes that aren't compatible with this client.
     *
     * @returns {Set<String>} The capabilities supported by this client.
     */
    function getCapabilities(): Set<string>;
    /**
     * Decide if a recipe is suitable to run, and returns a value from
     * `BaseAction.suitability`.
     *
     * This checks several things in order:
     *  - recipe signature
     *  - capabilities
     *  - filter expression
     *
     * If the provided signature does not match the provided recipe, then
     * `SIGNATURE_ERROR` is returned. Recipes with this suitability should not be
     * trusted. These recipes are included so that temporary signature errors on
     * the server can be handled intelligently by actions.
     *
     * Capabilities are a simple set of strings in the recipe. If the Normandy
     * client has all of the capabilities listed, then execution continues. If
     * not, then `CAPABILITY_MISMATCH` is returned. Recipes with this suitability
     * should be considered incompatible and treated with caution.
     *
     * If the capabilities check passes, then the filter expression is evaluated
     * against the current environment. The result of the expression is cast to a
     * boolean. If it is true, then `FILTER_MATCH` is returned. If not, then
     * `FILTER_MISMATCH` is returned.
     *
     * If there is an error while evaluating the recipe's filter, `FILTER_ERROR`
     * is returned instead.
     *
     * @param {object} recipe
     * @param {object} signature
     * @param {string} recipe.filter_expression The expression to evaluate against the environment.
     * @param {Set<String>} runnerCapabilities The capabilities provided by this runner.
     * @return {Promise<BaseAction.suitability>} The recipe's suitability
     */
    function getRecipeSuitability(recipe: any, signature: any): Promise<BaseAction.suitability>;
    /**
     * Some uses cases, such as Normandy Devtools, want the status of all
     * suitabilities, not only the most important one. This checks the cases of
     * suitabilities in order from most blocking to least blocking. The first
     * yielded is the "primary" suitability to pass on to actions.
     *
     * If this function yields only [FILTER_MATCH], then the recipe fully matches
     * and should be executed. If any other statuses are yielded, then the recipe
     * should not be executed as normal.
     *
     * This is a generator so that the execution can be halted as needed. For
     * example, after receiving a signature error, a caller can stop advancing
     * the iterator to avoid exposing the browser to unneeded risk.
     */
    function getAllSuitabilities(recipe: any, signature: any): AsyncGenerator<any, void, unknown>;
    /**
     * Clear all caches of systems used by RecipeRunner, in preparation
     * for a clean run.
     */
    function clearCaches(): void;
    /**
     * Clear out cached state and fetch/execute recipes from the given
     * API url. This is used mainly by the mock-recipe-server JS that is
     * executed in the browser console.
     */
    function testRun(baseApiUrl: any): Promise<void>;
    const _remoteSettingsClientForTesting: any;
    namespace migrations {
        /**
         * Delete the now-unused collection of recipes, since we are using the
         * "normandy-recipes-capabilities" collection now.
         */
        function migration01RemoveOldRecipesCollection(): Promise<void>;
    }
}
