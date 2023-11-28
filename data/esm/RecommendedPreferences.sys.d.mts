export namespace RecommendedPreferences {
    let alteredPrefs: Set<any>;
    let isInitialized: boolean;
    /**
     * Apply the provided map of preferences.
     * They will be automatically reset on application shutdown.
     *
     * @param {Map} preferences
     *     Map of preference key to preference value.
     */
    function applyPreferences(preferences: Map<any, any>): void;
    function observe(subject: any, topic: any): void;
    /**
     * Restore all the altered preferences.
     */
    function restoreAllPreferences(): void;
    /**
     * Restore provided preferences.
     *
     * @param {Map} preferences
     *     Map of preferences that should be restored.
     */
    function restorePreferences(preferences: Map<any, any>): void;
}
