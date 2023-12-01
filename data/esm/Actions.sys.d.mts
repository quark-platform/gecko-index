export namespace action {
    export { State };
    export { Chain };
}
declare class State {
    /**
     * A map between input ID and the device state for that input
     * source, with one entry for each active input source.
     *
     * Maps string => InputSource
     */
    inputStateMap: Map<any, any>;
    /**
     * List of {@link Action} associated with current session.  Used to
     * manage dispatching events when resetting the state of the input sources.
     * Reset operations are assumed to be idempotent.
     */
    inputsToCancel: TickActions;
    /**
     * Map between string input id and numeric pointer id
     */
    pointerIdMap: Map<any, any>;
    toString(): string;
    /**
     * Reset state stored in this object.
     * It is an error to use the State object after calling release().
     *
     * @param {WindowProxy} win Current window global.
     */
    release(win: WindowProxy): Promise<void>;
    /**
     * Get the state for a given input source.
     *
     * @param {string} id Input source id.
     * @returns {InputSource} Input source state.
     */
    getInputSource(id: string): InputSource;
    /**
     * Find or add state for an input source. The caller should verify
     * that the returned state is the expected type.
     *
     * @param {string} id Input source id.
     * @param {InputSource} newInputSource Input source state.
     */
    getOrAddInputSource(id: string, newInputSource: InputSource): InputSource;
    /**
     * Iterate over all input states of a given type
     *
     * @param {string} type Input source type name (e.g. "pointer").
     * @returns {Iterator} Iterator over [id, input source].
     */
    inputSourcesByType(type: string): Iterator<any, any, undefined>;
    /**
     * Get a numerical pointer id for a given pointer
     *
     * Pointer ids are positive integers. Mouse pointers are typically
     * ids 0 or 1. Non-mouse pointers never get assigned id < 2. Each
     * pointer gets a unique id.
     *
     * @param {string} id Pointer id.
     * @param {string} type Pointer type.
     * @returns {number} Numerical pointer id.
     */
    getPointerId(id: string, type: string): number;
}
declare class Chain extends Array<any> {
    /**
     * @param {State} state - Actions state.
     * @param {Array.<object>} actions - Array of objects that each
     * represent an action sequence.
     * @returns {action.Chain} - Object that allows dispatching a chain
     * of actions.
     * @throws {InvalidArgumentError} - If actions doesn't correspond to
     * a valid action chain.
     */
    static fromJSON(state: State, actions: Array<object>): {
        [n: number]: any;
        toString(): string;
        /**
         * Dispatch the action chain to the relevant window.
         *
         * @param {State} state - Actions state.
         * @param {WindowProxy} win - Current window global.
         * @returns {Promise} - Promise that is resolved once the action
         * chain is complete.
         */
        dispatch(state: State, win: WindowProxy): Promise<any>;
        length: number;
        toLocaleString(): string;
        pop(): any;
        push(...items: any[]): number;
        concat(...items: ConcatArray<any>[]): any[];
        concat(...items: any[]): any[];
        join(separator?: string): string;
        reverse(): any[];
        shift(): any;
        slice(start?: number, end?: number): any[];
        sort(compareFn?: (a: any, b: any) => number): any;
        splice(start: number, deleteCount?: number): any[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        unshift(...items: any[]): number;
        indexOf(searchElement: any, fromIndex?: number): number;
        lastIndexOf(searchElement: any, fromIndex?: number): number;
        every<S extends any>(predicate: (value: any, index: number, array: any[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[];
        filter<S_1 extends any>(predicate: (value: any, index: number, array: any[]) => value is S_1, thisArg?: any): S_1[];
        filter(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): any[];
        reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any;
        reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: any, currentIndex: number, array: any[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any;
        reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: any, currentIndex: number, array: any[]) => U_2, initialValue: U_2): U_2;
        find<S_2 extends any>(predicate: (value: any, index: number, obj: any[]) => value is S_2, thisArg?: any): S_2;
        find(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): any;
        findIndex(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number;
        fill(value: any, start?: number, end?: number): any;
        copyWithin(target: number, start: number, end?: number): any;
        entries(): IterableIterator<[number, any]>;
        /**
         * List of {@link Action} associated with current session.  Used to
         * manage dispatching events when resetting the state of the input sources.
         * Reset operations are assumed to be idempotent.
         */
        keys(): IterableIterator<number>;
        values(): IterableIterator<any>;
        includes(searchElement: any, fromIndex?: number): boolean;
        flatMap<U_3, This = undefined>(callback: (this: This, value: any, index: number, array: any[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
        flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
        [Symbol.iterator](): IterableIterator<any>;
        readonly [Symbol.unscopables]: {
            [x: number]: boolean;
            length?: boolean;
            toString?: boolean;
            toLocaleString?: boolean;
            pop?: boolean;
            push?: boolean;
            concat?: boolean;
            join?: boolean;
            reverse?: boolean;
            shift?: boolean;
            slice?: boolean;
            sort?: boolean;
            splice?: boolean;
            unshift?: boolean;
            indexOf?: boolean;
            lastIndexOf?: boolean;
            every?: boolean;
            some?: boolean;
            forEach?: boolean;
            map?: boolean;
            filter?: boolean;
            reduce?: boolean;
            reduceRight?: boolean;
            find?: boolean;
            findIndex?: boolean;
            fill?: boolean;
            copyWithin?: boolean;
            entries?: boolean;
            keys?: boolean;
            values?: boolean;
            includes?: boolean;
            flatMap?: boolean;
            flat?: boolean;
            [Symbol.iterator]?: boolean;
            readonly [Symbol.unscopables]?: boolean;
            at?: boolean;
        };
        at(index: number): any;
    };
    constructor(arrayLength?: number);
    constructor(arrayLength: number);
    constructor(...items: any[]);
    /**
     * Dispatch the action chain to the relevant window.
     *
     * @param {State} state - Actions state.
     * @param {WindowProxy} win - Current window global.
     * @returns {Promise} - Promise that is resolved once the action
     * chain is complete.
     */
    dispatch(state: State, win: WindowProxy): Promise<any>;
}
/**
 * Represents the action for each input device to perform in a single tick.
 */
declare class TickActions extends Array<any> {
    constructor(arrayLength?: number);
    constructor(arrayLength: number);
    constructor(...items: any[]);
    /**
     * Tick duration in milliseconds.
     *
     * @returns {number} - Longest action duration in |tickActions| if any, or 0.
     */
    getDuration(): number;
    /**
     * Dispatch sequence of actions for this tick.
     *
     * This creates a Promise for one tick that resolves once the Promise
     * for each tick-action is resolved, which takes at least |tickDuration|
     * milliseconds.  The resolved set of events for each tick is followed by
     * firing of pending DOM events.
     *
     * Note that the tick-actions are dispatched in order, but they may have
     * different durations and therefore may not end in the same order.
     *
     * @param {State} state - Actions state.
     * @param {WindowProxy} win - Current window global.
     *
     * @returns {Promise} - Promise that resolves when tick is complete.
     */
    dispatch(state: State, win: WindowProxy): Promise<any>;
    /**
     * Group together actions from input sources that have to be
     * dispatched together.
     *
     * The actual transformation here is to group together touch pointer
     * actions into {@link TouchActionGroup} instances.
     *
     * @param {State} state - Actions state.
     * @returns {Array.<Array.<InputSource?,Action|TouchActionGroup>>}
     *    Array of pairs. For ungrouped actions each element is
     *    [InputSource, Action] For touch actions there are multiple
     *    pointers handled at once, so the first item of the array is
     *    null, meaning the group has to perform its own handling of the
     *    relevant state, and the second element is a TouuchActionGroup.
     */
    groupTickActions(state: State): Array<Array<InputSource | null, Action | TouchActionGroup>>;
}
/**
 * Device state for an input source.
 */
declare class InputSource {
    static type: any;
    /**
     * @param {State} state Actions state.
     * @param {Sequence} actionSequence Actions for a specific input source.
     *
     * @returns {InputSource}
     *     An {@link InputSource} object for the type of the
     *     {@link actionSequence}.
     *
     * @throws {InvalidArgumentError}
     *     If {@link actionSequence.type} is not valid.
     */
    static fromJSON(state: State, actionSequence: Sequence): InputSource;
    constructor(id: any);
    type: any;
    toString(): string;
    #private;
}
/**
 * Repesents the behaviour of a single input source at a single
 * point in time.
 *
 * @param {string} id - Input source ID.
 */
declare class Action {
    /** Type of the input source associated with this action */
    static type: any;
    /** Type of action specific to the input source */
    static subtype: any;
    /**
     * @param {string} type - Input source type.
     * @param {string} id - Input source id.
     * @param {object} actionItem - Object representing a single action.
     *
     * @returns {Action} - An action that can be dispatched.
     *
     * @throws {InvalidArgumentError}
     *     If any <code>actionSequence</code> or <code>actionItem</code>
     *     attributes are invalid.
     */
    static fromJSON(type: string, id: string, actionItem: object): Action;
    constructor(id: any);
    /** Whether this kind of action affects the overall duration of a tick */
    affectsWallClockTime: boolean;
    id: any;
    type: any;
    subtype: any;
    toString(): string;
    /**
     * Dispatch the action to the relevant window.
     *
     * This is overridden by subclasses to implement the type-specific
     * dispatch of the action.
     *
     * @param {State} state - Actions state.
     * @param {InputSource} inputSource - State of the current input device.
     * @param {number} tickDuration - Length of the current tick, in ms.
     * @param {WindowProxy} win - Current window global.
     * @returns {Promise} - Promise that is resolved once the action is complete.
     */
    dispatch(state: State, inputSource: InputSource, tickDuration: number, win: WindowProxy): Promise<any>;
}
/**
 * Group of actions representing behaviour of all touch pointers during a single tick.
 *
 * For touch pointers, we need to call into the platform once with all
 * the actions so that they are regarded as simultaneous. This means
 * we don't use the `dispatch()` method on the underlying actions, but
 * instead use one on this group object.
 */
declare class TouchActionGroup {
    static type: any;
    static forType(type: any): any;
    type: any;
    actions: Map<any, any>;
    /**
     * Add action corresponding to a specific pointer to the group.
     *
     * @param {InputSource} inputSource - State of the current input device.
     * @param {Action} action - Action to add to the group
     */
    addPointer(inputSource: InputSource, action: Action): void;
    /**
     * Dispatch the action group to the relevant window.
     *
     * This is overridden by subclasses to implement the type-specific
     * dispatch of the action.
     *
     * @param {State} state - Actions state.
     * @param {null} inputSource
     *     This is always null; the argument only exists for compatibility
     *     with {@link Action.dispatch}.
     * @param {number} tickDuration - Length of the current tick, in ms.
     * @param {WindowProxy} win - Current window global.
     * @returns {Promise} - Promise that is resolved once the action is complete.
     */
    dispatch(state: State, inputSource: null, tickDuration: number, win: WindowProxy): Promise<any>;
}
/**
 * Represents one input source action sequence; this is essentially an
 * |Array.<Action>|.
 *
 * This is a temporary object only used when constructing an {@link
 * action.Chain}.
 */
declare class Sequence extends Array<any> {
    /**
     * @param {State} state - Actions state.
     * @param {object} actionSequence
     *     Protocol representation of the actions for a specific input source.
     * @returns {Array.<Array>} - Array of [InputSource?,Action|TouchActionGroup]
     */
    static fromJSON(state: State, actionSequence: object): Array<any[]>;
    constructor(arrayLength?: number);
    constructor(arrayLength: number);
    constructor(...items: any[]);
}
export {};
