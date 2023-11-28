export const MAIN_MESSAGE_TYPE: "ActivityStream:Main";
export const CONTENT_MESSAGE_TYPE: "ActivityStream:Content";
export const PRELOAD_MESSAGE_TYPE: "ActivityStream:PreloadedBrowser";
export const UI_CODE: 1;
export const BACKGROUND_PROCESS: 2;
/**
 * globalImportContext - Are we in UI code (i.e. react, a dom) or some kind of background process?
 *                       Use this in action creators if you need different logic
 *                       for ui/background processes.
 */
export const globalImportContext: 1 | 2;
export const actionTypes: {};
export namespace actionCreators {
    export { BroadcastToContent };
    export { UserEvent };
    export { DiscoveryStreamUserEvent };
    export { ASRouterUserEvent };
    export { ImpressionStats };
    export { AlsoToOneContent };
    export { OnlyToOneContent };
    export { AlsoToMain };
    export { OnlyToMain };
    export { AlsoToPreloaded };
    export { SetPref };
    export { WebExtEvent };
    export { DiscoveryStreamImpressionStats };
    export { DiscoveryStreamLoadedContent };
}
export namespace actionUtils {
    export function isSendToMain(action: any): boolean;
    export function isBroadcastToContent(action: any): boolean;
    export function isSendToOneContent(action: any): boolean;
    export function isSendToPreloaded(action: any): boolean;
    export function isFromMain(action: any): boolean;
    export function getPortIdOfSender(action: any): any;
    export { _RouteMessage };
}
/**
 * BroadcastToContent - Creates a message that will be dispatched to main and sent to ALL content processes.
 *
 * @param  {object} action Any redux action (required)
 * @return {object} An action with added .meta properties
 */
declare function BroadcastToContent(action: object): object;
/**
 * UserEvent - A telemetry ping indicating a user action. This should only
 *                   be sent from the UI during a user session.
 *
 * @param  {object} data Fields to include in the ping (source, etc.)
 * @return {object} An AlsoToMain action
 */
declare function UserEvent(data: object): object;
/**
 * DiscoveryStreamUserEvent - A telemetry ping indicating a user action from Discovery Stream. This should only
 *                     be sent from the UI during a user session.
 *
 * @param  {object} data Fields to include in the ping (source, etc.)
 * @return {object} An AlsoToMain action
 */
declare function DiscoveryStreamUserEvent(data: object): object;
/**
 * ASRouterUserEvent - A telemetry ping indicating a user action from AS router. This should only
 *                     be sent from the UI during a user session.
 *
 * @param  {object} data Fields to include in the ping (source, etc.)
 * @return {object} An AlsoToMain action
 */
declare function ASRouterUserEvent(data: object): object;
/**
 * ImpressionStats - A telemetry ping indicating an impression stats.
 *
 * @param  {object} data Fields to include in the ping
 * @param  {int} importContext (For testing) Override the import context for testing.
 * #return {object} An action. For UI code, a AlsoToMain action.
 */
declare function ImpressionStats(data: object, importContext?: int): any;
/**
 * AlsoToOneContent - Creates a message that will be will be dispatched to the main store
 *                    and also sent to a particular Content process.
 *
 * @param  {object} action Any redux action (required)
 * @param  {string} target The id of a content port
 * @param  {bool} skipMain Used by OnlyToOneContent to skip the main process
 * @return {object} An action with added .meta properties
 */
declare function AlsoToOneContent(action: object, target: string, skipMain: bool): object;
/**
 * OnlyToOneContent - Creates a message that will be sent to a particular Content process
 *                    and skip the main reducer.
 *
 * @param  {object} action Any redux action (required)
 * @param  {string} target The id of a content port
 * @return {object} An action with added .meta properties
 */
declare function OnlyToOneContent(action: object, target: string): object;
/**
 * AlsoToMain - Creates a message that will be dispatched locally and also sent to the Main process.
 *
 * @param  {object} action Any redux action (required)
 * @param  {object} options
 * @param  {bool}   skipLocal Used by OnlyToMain to skip the main reducer
 * @param  {string} fromTarget The id of the content port from which the action originated. (optional)
 * @return {object} An action with added .meta properties
 */
declare function AlsoToMain(action: object, fromTarget: string, skipLocal: bool): object;
/**
 * OnlyToMain - Creates a message that will be sent to the Main process and skip the local reducer.
 *
 * @param  {object} action Any redux action (required)
 * @param  {object} options
 * @param  {string} fromTarget The id of the content port from which the action originated. (optional)
 * @return {object} An action with added .meta properties
 */
declare function OnlyToMain(action: object, fromTarget: string): object;
/**
 * AlsoToPreloaded - Creates a message that dispatched to the main reducer and also sent to the preloaded tab.
 *
 * @param  {object} action Any redux action (required)
 * @return {object} An action with added .meta properties
 */
declare function AlsoToPreloaded(action: object): object;
declare function SetPref(name: any, value: any, importContext?: number): any;
declare function WebExtEvent(type: any, data: any, importContext?: number): any;
/**
 * DiscoveryStreamImpressionStats - A telemetry ping indicating an impression stats in Discovery Stream.
 *
 * @param  {object} data Fields to include in the ping
 * @param  {int} importContext (For testing) Override the import context for testing.
 * #return {object} An action. For UI code, a AlsoToMain action.
 */
declare function DiscoveryStreamImpressionStats(data: object, importContext?: int): any;
/**
 * DiscoveryStreamLoadedContent - A telemetry ping indicating a content gets loaded in Discovery Stream.
 *
 * @param  {object} data Fields to include in the ping
 * @param  {int} importContext (For testing) Override the import context for testing.
 * #return {object} An action. For UI code, a AlsoToMain action.
 */
declare function DiscoveryStreamLoadedContent(data: object, importContext?: int): any;
declare function _RouteMessage(action: any, options: any): any;
export {};
ber, array: any[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
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
