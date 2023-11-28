export class PreferenceRolloutAction {
    get schema(): any;
    _run(recipe: any): Promise<void>;
    /**
     * Check that all the preferences in a rollout are ok to set. This means 1) no
     * other rollout is managing them, and 2) they match the types of the builtin
     * values.
     * @param {PreferenceRollout} rollout The arguments from a rollout recipe.
     * @throws If the preferences are not valid, with details in the error message.
     */
    _verifyRolloutPrefs({ slug, preferences }: PreferenceRollout): Promise<void>;
    _updatePrefsForExistingRollout(existingRollout: any, newRollout: any): Promise<boolean>;
    _finalize(): Promise<void>;
}
