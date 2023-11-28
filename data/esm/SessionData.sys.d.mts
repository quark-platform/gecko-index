export type SessionDataCategory = string;
export namespace SessionDataCategory {
    let Event: string;
    let PreloadScript: string;
}
export type SessionDataMethod = string;
export namespace SessionDataMethod {
    let Add: string;
    let Remove: string;
}
export const SESSION_DATA_SHARED_DATA_KEY: "MessageHandlerSessionData";
/**
 * @typedef {object} SessionDataItem
 * @property {string} moduleName
 *     The name of the module responsible for this data item.
 * @property {SessionDataCategory} category
 *     The category of data. The supported categories depend on the module.
 * @property {(string|number|boolean)} value
 *     Value of the session data item.
 * @property {ContextDescriptor} contextDescriptor
 *     ContextDescriptor to which this session data applies.
 */
/**
 * @typedef SessionDataItemUpdate
 * @property {SessionDataMethod} method
 *     The way sessionData is updated.
 * @property {string} moduleName
 *     The name of the module responsible for this data item.
 * @property {SessionDataCategory} category
 *     The category of data. The supported categories depend on the module.
 * @property {Array<(string|number|boolean)>} values
 *     Values of the session data item update.
 * @property {ContextDescriptor} contextDescriptor
 *     ContextDescriptor to which this session data applies.
 */
/**
 * SessionData provides APIs to read and write the session data for a specific
 * ROOT message handler. It holds the session data as a property and acts as the
 * source of truth for this session data.
 *
 * The session data of a given message handler network should contain all the
 * information that might be needed to setup new contexts, for instance a list
 * of subscribed events, a list of breakpoints etc.
 *
 * The actual session data is an array of SessionDataItems. Example below:
 * ```
 * data: [
 *   {
 *     moduleName: "log",
 *     category: "event",
 *     value: "log.entryAdded",
 *     contextDescriptor: { type: "all" }
 *   },
 *   {
 *     moduleName: "browsingContext",
 *     category: "event",
 *     value: "browsingContext.contextCreated",
 *     contextDescriptor: { type: "browser-element", id: "7"}
 *   },
 *   {
 *     moduleName: "browsingContext",
 *     category: "event",
 *     value: "browsingContext.contextCreated",
 *     contextDescriptor: { type: "browser-element", id: "12"}
 *   },
 * ]
 * ```
 *
 * The session data will be persisted using Services.ppmm.sharedData, so that
 * new contexts living in different processes can also access the information
 * during their startup.
 *
 * This class should only be used from a ROOT MessageHandler, or from modules
 * owned by a ROOT MessageHandler. Other MessageHandlers should rely on
 * SessionDataReader's readSessionData to get read-only access to session data.
 *
 */
export class SessionData {
    constructor(messageHandler: any);
    _messageHandler: any;
    _data: any[];
    destroy(): void;
    /**
     * Update session data items of a given module, category and
     * contextDescriptor.
     *
     * A SessionDataItem will be added or removed for each value of each update
     * in the provided array.
     *
     * Attempting to add a duplicate SessionDataItem or to remove an unknown
     * SessionDataItem will be silently skipped (no-op).
     *
     * The data will be persisted across processes at the end of this method.
     *
     * @param {Array<SessionDataItemUpdate>} sessionDataItemUpdates
     *     Array of session data item updates.
     *
     * @returns {Array<SessionDataItemUpdate>}
     *     The subset of session data item updates which want to be applied.
     */
    applySessionData(sessionDataItemUpdates?: Array<SessionDataItemUpdate>): Array<SessionDataItemUpdate>;
    /**
     * Retrieve the SessionDataItems for a given module and type.
     *
     * @param {string} moduleName
     *     The name of the module responsible for this data item.
     * @param {string} category
     *     The session data category.
     * @param {ContextDescriptor=} contextDescriptor
     *     Optional context descriptor, to retrieve only session data items added
     *     for a specific context descriptor.
     * @returns {Array<SessionDataItem>}
     *     Array of SessionDataItems for the provided module and type.
     */
    getSessionData(moduleName: string, category: string, contextDescriptor?: ContextDescriptor): Array<SessionDataItem>;
    /**
     * Update session data items of a given module, category and
     * contextDescriptor and propagate the information
     * via a command to existing MessageHandlers.
     *
     * @param {Array<SessionDataItemUpdate>} sessionDataItemUpdates
     *     Array of session data item updates.
     */
    updateSessionData(sessionDataItemUpdates?: Array<SessionDataItemUpdate>): Promise<void>;
    _isSameItem(item1: any, item2: any): boolean;
    _isSameContextDescriptor(contextDescriptor1: any, contextDescriptor2: any): boolean;
    _isSameValue(category: any, value1: any, value2: any): boolean;
    _findIndex(item: any): number;
    _persist(): void;
}
export type SessionDataItem = {
    /**
     *     The name of the module responsible for this data item.
     */
    moduleName: string;
    /**
     *     The category of data. The supported categories depend on the module.
     */
    category: SessionDataCategory;
    /**
     *     Value of the session data item.
     */
    value: (string | number | boolean);
    /**
     *     ContextDescriptor to which this session data applies.
     */
    contextDescriptor: ContextDescriptor;
};
export type SessionDataItemUpdate = {
    /**
     *     The way sessionData is updated.
     */
    method: SessionDataMethod;
    /**
     *     The name of the module responsible for this data item.
     */
    moduleName: string;
    /**
     *     The category of data. The supported categories depend on the module.
     */
    category: SessionDataCategory;
    /**
     *     Values of the session data item update.
     */
    values: Array<(string | number | boolean)>;
    /**
     *     ContextDescriptor to which this session data applies.
     */
    contextDescriptor: ContextDescriptor;
};
