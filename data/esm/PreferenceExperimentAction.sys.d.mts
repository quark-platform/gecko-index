/**
 * Enrolls a user in a preference experiment, in which we assign the
 * user to an experiment branch and modify a preference temporarily to
 * measure how it affects Firefox via Telemetry.
 */
export class PreferenceExperimentAction {
    get schema(): any;
    seenExperimentSlugs: Set<any>;
    _processRecipe(recipe: any, suitability: any): Promise<void>;
    _run(recipe: any): Promise<void>;
    chooseBranch(slug: any, branches: any): Promise<any>;
    /**
     * End any experiments which we didn't see during this session.
     * This is the "normal" way experiments end, as they are disabled on
     * the server and so we stop seeing them.  This can also happen if
     * the user doesn't match the filter any more.
     */
    _finalize({ noRecipes }?: {
        noRecipes: any;
    }): Promise<any>;
    /**
     * Given that a temporary error has occurred for an experiment, check if it
     * should be temporarily ignored, or if the deadline has passed. If the
     * deadline is passed, the experiment will be ended. If this is the first
     * temporary error, a deadline will be generated. Otherwise, nothing will
     * happen.
     *
     * If a temporary deadline exists but cannot be parsed, a new one will be
     * made.
     *
     * The deadline is 7 days from the first time that recipe failed, as
     * reckoned by the client's clock.
     *
     * @param {Object} args
     * @param {Experiment} args.experiment The enrolled experiment to potentially unenroll.
     * @param {String} args.reason If the recipe should end, the reason it is ending.
     */
    _considerTemporaryError({ experiment, reason }: {
        experiment: Experiment;
        reason: string;
    }): Promise<void>;
}
export namespace PreferenceExperimentAction {
    export { BadNoRecipesArg };
}
declare class BadNoRecipesArg extends Error {
}
export {};
