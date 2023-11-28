export namespace Utils {
    export let generateRandomBytesLegacy: any;
    export let computeHTTPMACSHA1: any;
    export let digestUTF8: any;
    export let digestBytes: any;
    export let sha256: any;
    export let hkdfExpand: any;
    export let pbkdf2Generate: any;
    export let getHTTPMACSHA1Header: any;
    export let _userAgent: any;
    export const userAgent: any;
    /**
     * Wrap a [promise-returning] function to catch all exceptions and log them.
     *
     * @usage MyObj._catch = Utils.catch;
     *        MyObj.foo = function() { this._catch(func)(); }
     *
     * Optionally pass a function which will be called if an
     * exception occurs.
     */
    function _catch(func: any, exceptionCallback: any): () => Promise<any>;
    export { _catch as catch };
    export function throwLockException(label: any): never;
    /**
     * Wrap a [promise-returning] function to call lock before calling the function
     * then unlock when it finishes executing or if it threw an error.
     *
     * @usage MyObj._lock = Utils.lock;
     *        MyObj.foo = async function() { await this._lock(func)(); }
     */
    export function lock(label: any, func: any): () => Promise<any>;
    export function isLockException(ex: any): boolean;
    /**
     * Wrap [promise-returning] functions to notify when it starts and
     * finishes executing or if it threw an error.
     *
     * The message is a combination of a provided prefix, the local name, and
     * the event. Possible events are: "start", "finish", "error". The subject
     * is the function's return value on "finish" or the caught exception on
     * "error". The data argument is the predefined data value.
     *
     * Example:
     *
     * @usage function MyObj(name) {
     *          this.name = name;
     *          this._notify = Utils.notify("obj:");
     *        }
     *        MyObj.prototype = {
     *          foo: function() this._notify("func", "data-arg", async function () {
     *            //...
     *          }(),
     *        };
     */
    export function notify(prefix: any): (name: any, data: any, func: any) => () => Promise<any>;
    export function makeGUID(): any;
    export let _base64url_regex: RegExp;
    export function checkGUID(guid: any): boolean;
    export function deferGetSet(obj: any, defer: any, prop: any): any;
    export function deepEquals(a: any, b: any): boolean;
    export function throwHMACMismatch(shouldBe: any, is: any): never;
    export function isHMACMismatch(ex: any): boolean;
    export function base32ToFriendly(input: any): any;
    export function base32FromFriendly(input: any): any;
    export function encodeKeyBase32(keyData: any): any;
    export function decodeKeyBase32(encoded: any): any;
    export function jsonFilePath(...args: any[]): any;
    /**
     * Load a JSON file from disk in the profile directory.
     *
     * @param filePath
     *        JSON file path load from profile. Loaded file will be
     *        extension.
     * @param that
     *        Object to use for logging.
     *
     * @return Promise<>
     *        Promise resolved when the write has been performed.
     */
    export function jsonLoad(filePath: any, that: any): Promise<any>;
    /**
     * Save a json-able object to disk in the profile directory.
     *
     * @param filePath
     *        JSON file path save to <filePath>.json
     * @param that
     *        Object to use for logging.
     * @param obj
     *        Function to provide json-able object to save. If this isn't a
     *        function, it'll be used as the object to make a json string.*
     *        Function called when the write has been performed. Optional.
     *
     * @return Promise<>
     *        Promise resolved when the write has been performed.
     */
    export function jsonSave(filePath: any, that: any, obj: any): Promise<any>;
    /**
     * Helper utility function to fit an array of records so that when serialized,
     * they will be within payloadSizeMaxBytes. Returns a new array without the
     * items.
     *
     * Note: This shouldn't be used for extremely large record sizes as
     * it uses JSON.stringify, which could lead to a heavy performance hit.
     * See Bug 1815151 for more details.
     *
     */
    export function tryFitItems(records: any, payloadSizeMaxBytes: any): any;
    /**
     * Move a json file in the profile directory. Will fail if a file exists at the
     * destination.
     *
     * @returns a promise that resolves to undefined on success, or rejects on failure
     *
     * @param aFrom
     *        Current path to the JSON file saved on disk, relative to profileDir/weave
     *        .json will be appended to the file name.
     * @param aTo
     *        New path to the JSON file saved on disk, relative to profileDir/weave
     *        .json will be appended to the file name.
     * @param that
     *        Object to use for logging
     */
    export function jsonMove(aFrom: any, aTo: any, that: any): any;
    /**
     * Removes a json file in the profile directory.
     *
     * @returns a promise that resolves to undefined on success, or rejects on failure
     *
     * @param filePath
     *        Current path to the JSON file saved on disk, relative to profileDir/weave
     *        .json will be appended to the file name.
     * @param that
     *        Object to use for logging
     */
    export function jsonRemove(filePath: any, that: any): any;
    /**
     * The following are the methods supported for UI use:
     *
     * * isPassphrase:
     *     determines whether a string is either a normalized or presentable
     *     passphrase.
     * * normalizePassphrase:
     *     take a presentable passphrase and reduce it to a normalized
     *     representation for storage. normalizePassphrase can safely be called
     *     on normalized input.
     */
    export function isPassphrase(s: any): boolean;
    export function normalizePassphrase(pp: any): any;
    export function arraySub(minuend: any, subtrahend: any): any;
    export function arrayUnion(foo: any, bar: any): any;
    /**
     * Add all the items in `items` to the provided Set in-place.
     *
     * @return The provided set.
     */
    export function setAddAll(set: any, items: any): any;
    /**
     * Delete every items in `items` to the provided Set in-place.
     *
     * @return The provided set.
     */
    export function setDeleteAll(set: any, items: any): any;
    /**
     * Take the first `size` items from the Set `items`.
     *
     * @return A Set of size at most `size`
     */
    export function subsetOfSize(items: any, size: any): Set<any>;
    export function bind2(object: any, method: any): (...args: any[]) => any;
    /**
     * Is there a master password configured and currently locked?
     */
    export function mpLocked(): boolean;
    export function ensureMPUnlocked(): boolean;
    export function calculateBackoff(attempts: any, baseInterval: any, statusInterval: any): number;
    /**
     * Return a set of hostnames (including the protocol) which may have
     * credentials for sync itself stored in the login manager.
     *
     * In general, these hosts will not have their passwords synced, will be
     * reset when we drop sync credentials, etc.
     */
    export function getSyncCredentialsHosts(): Set<any>;
    /**
     * Helper to implement a more efficient version of fairly common pattern:
     *
     * Utils.defineLazyIDProperty(this, "syncID", "services.sync.client.syncID")
     *
     * is equivalent to (but more efficient than) the following:
     *
     * Foo.prototype = {
     *   ...
     *   get syncID() {
     *     let syncID = Svc.PrefBranch.getStringPref("client.syncID", "");
     *     return syncID == "" ? this.syncID = Utils.makeGUID() : syncID;
     *   },
     *   set syncID(value) {
     *     Svc.PrefBranch.setStringPref("client.syncID", value);
     *   },
     *   ...
     * };
     */
    export function defineLazyIDProperty(object: any, propName: any, prefName: any): void;
    export function getDeviceType(): any;
    export function formatTimestamp(date: any): string;
    export function walkTree(tree: any, parent?: any): any;
}
/**
 * A subclass of Set that serializes as an Array when passed to JSON.stringify.
 */
export class SerializableSet extends Set<any> {
    constructor(values?: readonly any[]);
    constructor(iterable?: Iterable<any>);
    toJSON(): any[];
}
export namespace Svc {
    export let PrefBranch: any;
    export { Observers as Obs };
}
