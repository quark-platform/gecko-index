/**
 * Parent side conduit, registers as a global listeners for certain messages,
 * and can target specific child conduits when sending.
 */
export class BroadcastConduit {
    /**
     * @param {object} subject
     * @param {ConduitAddress} address
     */
    constructor(subject: object, address: ConduitAddress);
    open: boolean;
    /**
     * Internal, sends a message to a specific conduit, used by sendX stubs.
     *
     * @param {string} method
     * @param {boolean} query
     * @param {ConduitID} target
     * @param {object?} arg
     * @returns {Promise<any>}
     */
    _send(method: string, query: boolean, target: ConduitID, arg?: object | null): Promise<any>;
    /**
     * Broadcasts a method call to all conduits of kind that satisfy filtering by
     * kind-specific properties from arg, returns an array of response promises.
     *
     * @param {string} method
     * @param {BroadcastKind} kind
     * @param {object} arg
     * @returns {Promise[]}
     */
    _cast(method: string, kind: BroadcastKind, arg: object): Promise<any>[];
    /**
     * Custom Promise.race() function that ignores certain resolutions and errors.
     *
     * @param {Promise<response>[]} promises
     * @returns {Promise<response?>}
     */
    _raceResponses(promises: Promise<response>[]): Promise<response | null>;
    close(): Promise<void>;
}
/**
 * Implements the parent side of the Conduits actor.
 */
export class ConduitsParent {
    batchData: any[];
    batchPromise: Promise<any>;
    batchResolve: (value: any) => void;
    timerActive: boolean;
    /**
     * Group webRequest events to send them as a batch, reducing IPC overhead.
     *
     * @param {string} name
     * @param {MessageData} data
     * @returns {Promise<object>}
     */
    batch(name: string, data: MessageData): Promise<object>;
    /**
     * JSWindowActor method, routes the message to the target subject.
     *
     * @param {object} options
     * @param {string} options.name
     * @param {MessageData} options.data
     * @returns {Promise?}
     */
    receiveMessage({ name, data: { arg, query, sender } }: {
        name: string;
        data: MessageData;
    }): Promise<any> | null;
    /**
     * JSWindowActor method, ensure cleanup.
     */
    didDestroy(): void;
}
/**
 * Parent side of the Conduits process actor.  Same code as JSWindowActor.
 */
export class ProcessConduitsParent {
    receiveMessage: ({ name, data: { arg, query, sender } }: {
        name: string;
        data: MessageData;
    }) => Promise<any>;
    willDestroy: any;
    didDestroy: () => void;
}
/**
 * This
 */
export type ConduitID = number | string;
/**
 * This
 */
export type ConduitAddress = {
    /**
     * Globally unique across all processes.
     */
    id: ConduitID;
    recv?: string[];
    send?: string[];
    query?: string[];
    /**
     * Lists of recvX, sendX, queryX and castX methods this subject will use.
     */
    cast?: string[];
};
/**
 * Kinds of broadcast targeting filters.
 */
export type BroadcastKind = "messenger" | "port" | "tab";
