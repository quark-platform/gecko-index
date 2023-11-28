/**
 * Base class for local actions.
 *
 * This should be subclassed. Subclasses must implement _run() for
 * per-recipe behavior, and may implement _preExecution and _finalize
 * for actions to be taken once before and after recipes are run.
 *
 * Other methods should be overridden with care, to maintain the life
 * cycle events and error reporting implemented by this class.
 */
export class BaseAction {
    state: string;
    log: any;
    lastError: any;
    /**
     * Be sure to run the _preExecution() hook once during its
     * lifecycle.
     *
     * This is not intended for overriding by subclasses.
     */
    _ensurePreExecution(): void;
    get schema(): {
        type: string;
        properties: {};
    };
    /**
     * Disable the action for a non-error reason, such as the user opting out of
     * this type of action.
     */
    disable(): void;
    fail(err: any): void;
    get name(): string;
    /**
     * Action specific pre-execution behavior should be implemented
     * here. It will be called once per execution session.
     */
    _preExecution(): void;
    validateArguments(args: any, schema?: {
        type: string;
        properties: {};
    }): any;
    /**
     * Execute the per-recipe behavior of this action for a given
     * recipe.  Reports Uptake telemetry for the execution of the recipe.
     *
     * @param {Recipe} recipe
     * @param {BaseAction.suitability} suitability
     * @throws If this action has already been finalized.
     */
    processRecipe(recipe: Recipe, suitability: {
        /**
         * The recipe's signature is not valid. If any action is taken this recipe
         * should be treated with extreme suspicion.
         */
        SIGNATURE_ERROR: string;
        /**
         * The recipe requires capabilities that this recipe runner does not have.
         * Use caution when interacting with this recipe, as it may not match the
         * expected schema.
         */
        CAPABILITIES_MISMATCH: string;
        /**
         * The recipe is suitable to execute in this client.
         */
        FILTER_MATCH: string;
        /**
         * This client does not match the recipe's filter, but it is otherwise a
         * suitable recipe.
         */
        FILTER_MISMATCH: string;
        /**
         * There was an error while evaluating the filter. It is unknown if this
         * client matches this filter. This may be temporary, due to network errors,
         * or permanent due to syntax errors.
         */
        FILTER_ERROR: string;
        /**
         * The arguments of the recipe do not match the expected schema for the named
         * action.
         */
        ARGUMENTS_INVALID: string;
    }): Promise<void>;
    /**
     * Action specific recipe behavior may be implemented here. It will be
     * executed once for each recipe that applies to this client.
     * The recipe will be passed as a parameter.
     *
     * @param {Recipe} recipe
     */
    _run(recipe: Recipe): Promise<void>;
    /**
     * Action specific recipe behavior should be implemented here. It will be
     * executed once for every recipe currently published. The suitability of the
     * recipe will be passed, it will be one of the constants from
     * `BaseAction.suitability`.
     *
     * By default, this calls `_run()` for recipes with `status == FILTER_MATCH`,
     * and does nothing for all other recipes. It is invalid for an action to
     * override both `_run` and `_processRecipe`.
     *
     * @param {Recipe} recipe
     * @param {RecipeSuitability} suitability
     */
    _processRecipe(recipe: Recipe, suitability: RecipeSuitability): Promise<void>;
    /**
     * Finish an execution session. After this method is called, no
     * other methods may be called on this method, and all relevant
     * recipes will be assumed to have been seen.
     */
    finalize(options: any): Promise<void>;
    /**
     * Action specific post-execution behavior should be implemented
     * here. It will be executed once after all recipes have been
     * processed.
     */
    _finalize(_options?: {}): Promise<void>;
}
export namespace BaseAction {
    let STATE_PREPARING: string;
    let STATE_READY: string;
    let STATE_DISABLED: string;
    let STATE_FAILED: string;
    let STATE_FINALIZED: string;
    namespace suitability {
        let SIGNATURE_ERROR: string;
        let CAPABILITIES_MISMATCH: string;
        let FILTER_MATCH: string;
        let FILTER_MISMATCH: string;
        let FILTER_ERROR: string;
        let ARGUMENTS_INVALID: string;
    }
    let suitabilitySet: Set<string>;
    let suitabilityToUptakeStatus: {
        [x: string]: any;
    };
}
