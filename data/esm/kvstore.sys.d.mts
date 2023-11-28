/**
 * This module wraps the nsIKeyValue* interfaces in a Promise-based API.
 * To use it, import it, then call the KeyValueService.getOrCreate() method
 * with a database's path and (optionally) its name:
 *
 * ```
 *     ChromeUtils.import("resource://gre/modules/kvstore.jsm");
 *     let database = await KeyValueService.getOrCreate(path, name);
 * ```
 *
 * See the documentation in nsIKeyValue.idl for more information about the API
 * for key/value storage.
 */
export class KeyValueService {
    static getOrCreate(dir: any, name: any): Promise<KeyValueDatabase>;
}
/**
 * A class that wraps an nsIKeyValueDatabase in a Promise-based API.
 *
 * This class isn't exported, so you can't instantiate it directly, but you
 * can retrieve an instance of this class via KeyValueService.getOrCreate():
 *
 * ```
 *     const database = await KeyValueService.getOrCreate(path, name);
 * ```
 *
 * You can then call its put(), get(), has(), and delete() methods to access
 * and manipulate key/value pairs:
 *
 * ```
 *     await database.put("foo", 1);
 *     await database.get("foo") === 1; // true
 *     await database.has("foo"); // true
 *     await database.delete("foo");
 *     await database.has("foo"); // false
 * ```
 *
 * You can also call writeMany() to put/delete multiple key/value pairs:
 *
 * ```
 *     await database.writeMany({
 *       key1: "value1",
 *       key2: "value2",
 *       key3: "value3",
 *       key4: null, // delete
 *     });
 * ```
 *
 * And you can call its enumerate() method to retrieve a KeyValueEnumerator,
 * which is described below.
 */
declare class KeyValueDatabase {
    constructor(database: any);
    database: any;
    put(key: any, value: any): Promise<any>;
    /**
     * Writes multiple key/value pairs to the database.
     *
     * Note:
     *   * Each write could be either put or delete.
     *   * Given multiple values with the same key, only the last value will be stored.
     *   * If the same key gets put and deleted for multiple times, the final state
     *     of that key is subject to the ordering of the put(s) and delete(s).
     *
     * @param pairs Pairs could be any of following types:
     *        * An Object, all its properties and the corresponding values will
     *          be used as key value pairs. A property with null or undefined indicating
     *          a deletion.
     *        * An Array or an iterable whose elements are key-value pairs. such as
     *          [["key1", "value1"], ["key2", "value2"]]. Use a pair with value null
     *          to delete a key-value pair, e.g. ["delete-key", null].
     *        * A Map. A key with null or undefined value indicating a deletion.
     * @return A promise that is fulfilled when all the key/value pairs are written
     *         to the database.
     */
    writeMany(pairs: any): Promise<any>;
    has(key: any): Promise<any>;
    get(key: any, defaultValue: any): Promise<any>;
    delete(key: any): Promise<any>;
    clear(): Promise<any>;
    enumerate(from_key: any, to_key: any): Promise<KeyValueEnumerator>;
}
/**
 * A class that wraps an nsIKeyValueEnumerator in a Promise-based API.
 *
 * This class isn't exported, so you can't instantiate it directly, but you
 * can retrieve an instance of this class by calling enumerate() on an instance
 * of KeyValueDatabase:
 *
 * ```
 *     const database = await KeyValueService.getOrCreate(path, name);
 *     const enumerator = await database.enumerate();
 * ```
 *
 * And then iterate pairs via its hasMoreElements() and getNext() methods:
 *
 * ```
 *     while (enumerator.hasMoreElements()) {
 *       const { key, value } = enumerator.getNext();
 *       …
 *     }
 * ```
 *
 * Or with a `for...of` statement:
 *
 * ```
 *     for (const { key, value } of enumerator) {
 *         …
 *     }
 * ```
 */
declare class KeyValueEnumerator {
    constructor(enumerator: any);
    enumerator: any;
    hasMoreElements(): any;
    getNext(): any;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
export {};
