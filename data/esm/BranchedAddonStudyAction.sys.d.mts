export class BranchedAddonStudyAction {
    get schema(): any;
    seenRecipeIds: Set<any>;
    _run(recipe: any): Promise<void>;
    /**
     * This hook is executed once for every recipe currently enabled on the
     * server. It is responsible for:
     *
     *   - Enrolling studies the first time they have a FILTER_MATCH suitability.
     *   - Updating studies that have changed and still have a FILTER_MATCH suitability.
     *   - Marking studies as having been seen in this session.
     *   - Unenrolling studies when they have permanent errors.
     *   - Unenrolling studies when temporary errors persist for too long.
     *
     * If the action fails to perform any of these tasks, it should throw to
     * properly report its status.
     */
    _processRecipe(recipe: any, suitability: any): Promise<void>;
    /**
     * This hook is executed once after all recipes that apply to this client
     * have been processed. It is responsible for unenrolling the client from any
     * studies that no longer apply, based on this.seenRecipeIds.
     */
    _finalize({ noRecipes }?: {
        noRecipes: any;
    }): Promise<void>;
    /**
     * Download and install the addon for a given recipe
     *
     * @param recipe Object describing the study to enroll in.
     * @param extensionDetails Object describing the addon to be installed.
     * @param onInstallStarted A function that returns a callback for the install listener.
     * @param onComplete A callback function that is run on completion of the download.
     * @param onFailedInstall A callback function that is run if the installation fails.
     * @param errorClass The class of error to be thrown when exceptions occur.
     * @param reportError A function that reports errors to Telemetry.
     * @param [errorExtra] Optional, an object that will be merged into the
     *                     `extra` field of the error generated, if any.
     */
    downloadAndInstall({ recipe, extensionDetails, branchSlug, onInstallStarted, onComplete, onFailedInstall, errorClass, reportError, errorExtra, }: {
        recipe: any;
        extensionDetails: any;
        branchSlug: any;
        onInstallStarted: any;
        onComplete: any;
        onFailedInstall: any;
        errorClass: any;
        reportError: any;
        errorExtra?: {};
    }): Promise<any[]>;
    chooseBranch({ slug, branches }: {
        slug: any;
        branches: any;
    }): Promise<any>;
    /**
     * Enroll in the study represented by the given recipe.
     * @param recipe Object describing the study to enroll in.
     * @param extensionDetails Object describing the addon to be installed.
     */
    enroll(recipe: any): Promise<void>;
    /**
     * Update the study represented by the given recipe.
     * @param recipe Object describing the study to be updated.
     * @param extensionDetails Object describing the addon to be installed.
     */
    update(recipe: any, study: any): Promise<void>;
    reportEnrollError(error: any): void;
    reportUpdateError(error: any): void;
    /**
     * Unenrolls the client from the study with a given recipe ID.
     * @param recipeId The recipe ID of an enrolled study
     * @param reason The reason for this unenrollment, to be used in Telemetry
     * @throws If the specified study does not exist, or if it is already inactive.
     */
    unenroll(recipeId: any, reason?: string): Promise<void>;
    /**
     * Given that a temporary error has occured for a study, check if it
     * should be temporarily ignored, or if the deadline has passed. If the
     * deadline is passed, the study will be ended. If this is the first
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
     * @param {Study} args.study The enrolled study to potentially unenroll.
     * @param {String} args.reason If the study should end, the reason it is ending.
     */
    _considerTemporaryError({ study, reason }: {
        study: Study;
        reason: string;
    }): Promise<void>;
}
export namespace BranchedAddonStudyAction {
    export { BadNoRecipesArg };
}
declare class BadNoRecipesArg extends Error {
}
export {};
