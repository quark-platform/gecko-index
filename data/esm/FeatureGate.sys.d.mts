/** A high level control for turning features on and off. */
export class FeatureGate {
    /**
     * Constructs a feature gate object that is defined in ``Features.toml``.
     * This is the primary way to create a ``FeatureGate``.
     *
     * @param {string} id The ID of the feature's definition in `Features.toml`.
     * @param {string} testDefinitionsUrl A URL from which definitions can be fetched. Only use this in tests.
     * @throws If the ``id`` passed is not defined in ``Features.toml``.
     */
    static fromId(id: string, testDefinitionsUrl?: string): Promise<any>;
    /**
     * Constructs feature gate objects for each of the definitions in ``Features.toml``.
     * @param {string} testDefinitionsUrl A URL from which definitions can be fetched. Only use this in tests.
     */
    static all(testDefinitionsUrl?: string): Promise<any[]>;
    static observePrefChangesForCrashReportAnnotation(testDefinitionsUrl?: any): Promise<void>;
    static annotateCrashReporter(): Promise<void>;
    /**
     * Add an observer for a feature gate by ID. If the feature is of type
     * boolean and currently enabled, `onEnable` will be called.
     *
     * The underlying feature gate instance will be shared with all other callers
     * of this function, and share an observer.
     *
     * @param {string} id The ID of the feature's definition in `Features.toml`.
     * @param {object} observer Functions to be called when the feature changes.
     *        All observer functions are optional.
     * @param {Function()} [observer.onEnable] Called when the feature becomes enabled.
     * @param {Function()} [observer.onDisable] Called when the feature becomes disabled.
     * @param {Function(newValue)} [observer.onChange] Called when the
     *        feature's state changes to any value. The new value will be passed to the
     *        function.
     * @param {string} testDefinitionsUrl A URL from which definitions can be fetched. Only use this in tests.
     * @returns {Promise<boolean>} The current value of the feature.
     */
    static addObserver(id: string, observer: object, testDefinitionsUrl?: string): Promise<boolean>;
    /**
     * Remove an observer of changes from this feature
     * @param {string} id The ID of the feature's definition in `Features.toml`.
     * @param observer Then observer that was passed to addObserver to remove.
     */
    static removeObserver(id: string, observer: any): Promise<void>;
    /**
     * Get the current value of this feature gate. Implementors should avoid
     * storing the result to avoid missing changes to the feature's value.
     * Consider using :func:`addObserver` if it is necessary to store the value
     * of the feature.
     *
     * @async
     * @param {string} id The ID of the feature's definition in `Features.toml`.
     * @returns {Promise<boolean>} A promise for the value associated with this feature.
     */
    static getValue(id: string, testDefinitionsUrl?: any): Promise<boolean>;
    /**
     * An alias of `getValue` for boolean typed feature gates.
     *
     * @async
     * @param {string} id The ID of the feature's definition in `Features.toml`.
     * @returns {Promise<boolean>} A promise for the value associated with this feature.
     * @throws {Error} If the feature is not a boolean.
     */
    static isEnabled(id: string, testDefinitionsUrl?: any): Promise<boolean>;
    static targetingFacts: Map<string, any>;
    /**
     * Take a map of conditions to values, and return the value who's conditions
     * match this browser, or the default value in the map.
     *
     * @example
     *   Calling the function as
     *
     *       evaluateTargetedValue({"default": false, "nightly,linux": true})
     *
     *   would return true on Nightly on Linux, and false otherwise.
     *
     * @param {Object} targetedValue
     *   An object mapping string conditions to values. The conditions are comma
     *   separated values specified in `targetingFacts`. A condition "default" is
     *   required, as the fallback valued. All conditions must be true.
     *
     *   If multiple values have conditions that match, then an arbitrary one will
     *   be returned. Specifically, the one returned first in an `Object.entries`
     *   iteration of the targetedValue.
     *
     * @param {Map} [targetingFacts]
     *   A map of target facts to use. Defaults to facts about the current browser.
     *
     * @param {boolean} [options.mergeFactsWithDefault]
     *   If set to true, the value passed for `targetingFacts` will be merged with
     *   the default facts.
     *
     * @returns A value from `targetedValue`.
     */
    static evaluateTargetedValue(targetedValue: any, targetingFacts?: Map<any, any>, { mergeFactsWithDefault }?: boolean): any;
}
