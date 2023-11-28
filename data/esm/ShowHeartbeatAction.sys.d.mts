export class ShowHeartbeatAction {
    static Heartbeat: any;
    static overrideHeartbeatForTests(newHeartbeat: any): void;
    get schema(): any;
    _run(recipe: any): Promise<void>;
    shouldShow(recipeStorage: any, recipe: any): Promise<boolean>;
    /**
     * Returns a surveyId value. If recipe calls to include the Normandy client
     * ID, then the client ID is attached to the surveyId in the format
     * `${surveyId}::${userId}`.
     *
     * @return {String} Survey ID, possibly with user UUID
     */
    generateSurveyId(recipe: any): string;
    /**
     * Generate the appropriate post-answer URL for a recipe.
     * @param  recipe
     * @return {String} URL with post-answer query params
     */
    generatePostAnswerURL(recipe: any): string;
    updateLastInteraction(recipeStorage: any): void;
}
