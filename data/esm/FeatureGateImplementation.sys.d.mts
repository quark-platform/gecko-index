/** An individual feature gate that can be re-used for more advanced usage. */
export class FeatureGateImplementation {
    constructor(definition: any);
    _definition: any;
    _observers: Set<any>;
    /**
     * A short string used to refer to this feature in code.
     * @type string
     */
    get id(): string;
    /**
     * A Fluent string ID that will resolve to some text to identify this feature to users.
     * @type string
     */
    get title(): string;
    /**
     * A Fluent string ID that will resolve to a longer string to show to users that explains the feature.
     * @type string
     */
    get description(): string;
    get descriptionLinks(): any;
    /**
     * Whether this feature requires a browser restart to take effect after toggling.
     * @type boolean
     */
    get restartRequired(): boolean;
    /**
     * The type of feature. Currently only booleans are supported. This may be
     * richer than JS types in the future, such as enum values.
     * @type string
     */
    get type(): string;
    /**
     * The name of the preference that stores the value of this feature.
     *
     * This preference should not be read directly, but instead its values should
     * be accessed via FeatureGate#addObserver or FeatureGate#getValue. This
     * property is provided for backwards compatibility.
     *
     * @type string
     */
    get preference(): string;
    /**
     * The default value for the feature gate for this update channel.
     * @type boolean
     */
    get defaultValue(): boolean;
    /** The default value before any targeting evaluation. */
    get defaultValueOriginalValue(): any;
    /**
     * Check what the default value of this feature gate would be on another
     * browser with different facts, such as on another platform.
     *
     * @param {Map} extraFacts
     *   A `Map` of hypothetical facts to consider, such as {'windows': true} to
     *   check what the value of this feature would be on Windows.
     */
    defaultValueWith(extraFacts: Map<any, any>): any;
    /**
     * If this feature should be exposed to users in an advanced settings panel
     * for this build of Firefox.
     *
     * @type boolean
     */
    get isPublic(): boolean;
    /** The isPublic before any targeting evaluation. */
    get isPublicOriginalValue(): any;
    /**
     * Check if this feature is available on another browser with different
     * facts, such as on another platform.
     *
     * @param {Map} extraFacts
     *   A `Map` of hypothetical facts to consider, such as {'windows': true} to
     *   check if this feature would be available on Windows.
     */
    isPublicWith(extraFacts: Map<any, any>): any;
    /**
     * Bug numbers associated with this feature.
     * @type Array<number>
     */
    get bugNumbers(): number[];
    /**
     * Get the current value of this feature gate. Implementors should avoid
     * storing the result to avoid missing changes to the feature's value.
     * Consider using :func:`addObserver` if it is necessary to store the value
     * of the feature.
     *
     * @async
     * @returns {Promise<boolean>} A promise for the value associated with this feature.
     */
    getValue(): Promise<boolean>;
    /**
     * An alias of `getValue` for boolean typed feature gates.
     *
     * @async
     * @returns {Promise<boolean>} A promise for the value associated with this feature.
     * @throws {Error} If the feature is not a boolean.
     */
    isEnabled(): Promise<boolean>;
    /**
     * Add an observer for changes to this feature. When the observer is added,
     * `onChange` will asynchronously be called with the current value of the
     * preference. If the feature is of type boolean and currently enabled,
     * `onEnable` will additionally be called.
     *
     * @param {object} observer Functions to be called when the feature changes.
     *        All observer functions are optional.
     * @param {Function()} [observer.onEnable] Called when the feature becomes enabled.
     * @param {Function()} [observer.onDisable] Called when the feature becomes disabled.
     * @param {Function(newValue: boolean)} [observer.onChange] Called when the
     *        feature's state changes to any value. The new value will be passed to the
     *        function.
     * @returns {Promise<boolean>} The current value of the feature.
     */
    addObserver(observer: object): Promise<boolean>;
    /**
     * Remove an observer of changes from this feature
     * @param observer The observer that was passed to addObserver to remove.
     */
    removeObserver(observer: any): void;
    /**
     * Removes all observers from this instance of the feature gate.
     */
    removeAllObservers(): void;
    _callObserverMethod(observer: any, method: any, ...args: any[]): void;
    /**
     * Observes changes to the preference storing the enabled state of the
     * feature. The observer is dynamically added only when observer have been
     * added.
     * @private
     */
    private observe;
}
