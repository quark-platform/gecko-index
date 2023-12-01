export function Preferences(args: any): void;
export class Preferences {
    constructor(args: any);
    _cachedPrefBranch: any;
    _branchStr: any;
    _defaultBranch: any;
    _privacyContext: any;
}
export namespace Preferences {
    /**
     * Get the value of a pref, if any; otherwise return the default value.
     *
     * @param   prefName  {String|Array}
     *          the pref to get, or an array of prefs to get
     *
     * @param   defaultValue
     *          the default value, if any, for prefs that don't have one
     *
     * @param   valueType
     *          the XPCOM interface of the pref's complex value type, if any
     *
     * @returns the value of the pref, if any; otherwise the default value
     */
    function get(prefName: string | any[], defaultValue: any, valueType?: any): any;
    function _get(prefName: any, defaultValue: any, valueType: any): any;
    /**
     * Set a preference to a value.
     *
     * You can set multiple prefs by passing an object as the only parameter.
     * In that case, this method will treat the properties of the object
     * as preferences to set, where each property name is the name of a pref
     * and its corresponding property value is the value of the pref.
     *
     * @param   prefName  {String|Object}
     *          the name of the pref to set; or an object containing a set
     *          of prefs to set
     *
     * @param   prefValue {String|Number|Boolean}
     *          the value to which to set the pref
     *
     * Note: Preferences cannot store non-integer numbers or numbers outside
     * the signed 32-bit range -(2^31-1) to 2^31-1, If you have such a number,
     * store it as a string by calling toString() on the number before passing
     * it to this method, i.e.:
     *   Preferences.set("pi", 3.14159.toString())
     *   Preferences.set("big", Math.pow(2, 31).toString()).
     */
    function set(prefName: any, prefValue: string | number | boolean): void;
    function _set(prefName: any, prefValue: any): void;
    /**
     * Whether or not the given pref has a value.  This is different from isSet
     * because it returns true whether the value of the pref is a default value
     * or a user-set value, while isSet only returns true if the value
     * is a user-set value.
     *
     * @param   prefName  {String|Array}
     *          the pref to check, or an array of prefs to check
     *
     * @returns {Boolean|Array}
     *          whether or not the pref has a value; or, if the caller provided
     *          an array of pref names, an array of booleans indicating whether
     *          or not the prefs have values
     */
    function has(prefName: string | any[]): boolean | any[];
    /**
     * Whether or not the given pref has a user-set value.  This is different
     * from |has| because it returns true only if the value of the pref is a user-
     * set value, while |has| returns true if the value of the pref is a default
     * value or a user-set value.
     *
     * @param   prefName  {String|Array}
     *          the pref to check, or an array of prefs to check
     *
     * @returns {Boolean|Array}
     *          whether or not the pref has a user-set value; or, if the caller
     *          provided an array of pref names, an array of booleans indicating
     *          whether or not the prefs have user-set values
     */
    function isSet(prefName: string | any[]): boolean | any[];
    /**
     * Whether or not the given pref has a user-set value. Use isSet instead,
     * which is equivalent.
     * @deprecated
     */
    function modified(prefName: any): boolean | any[];
    function reset(prefName: any): void;
    /**
     * Lock a pref so it can't be changed.
     *
     * @param   prefName  {String|Array}
     *          the pref to lock, or an array of prefs to lock
     */
    function lock(prefName: string | any[]): void;
    /**
     * Unlock a pref so it can be changed.
     *
     * @param   prefName  {String|Array}
     *          the pref to lock, or an array of prefs to lock
     */
    function unlock(prefName: string | any[]): void;
    /**
     * Whether or not the given pref is locked against changes.
     *
     * @param   prefName  {String|Array}
     *          the pref to check, or an array of prefs to check
     *
     * @returns {Boolean|Array}
     *          whether or not the pref has a user-set value; or, if the caller
     *          provided an array of pref names, an array of booleans indicating
     *          whether or not the prefs have user-set values
     */
    function locked(prefName: string | any[]): boolean | any[];
    /**
     * Start observing a pref.
     *
     * The callback can be a function or any object that implements nsIObserver.
     * When the callback is a function and thisObject is provided, it gets called
     * as a method of thisObject.
     *
     * @param   prefName    {String}
     *          the name of the pref to observe
     *
     * @param   callback    {Function|Object}
     *          the code to notify when the pref changes;
     *
     * @param   thisObject  {Object}  [optional]
     *          the object to use as |this| when calling a Function callback;
     *
     * @returns the wrapped observer
     */
    function observe(prefName: string, callback: any, thisObject: any): PrefObserver;
    /**
     * Stop observing a pref.
     *
     * You must call this method with the same prefName, callback, and thisObject
     * with which you originally registered the observer.  However, you don't have
     * to call this method on the same exact instance of Preferences; you can call
     * it on any instance.  For example, the following code first starts and then
     * stops observing the "foo.bar.baz" preference:
     *
     *   let observer = function() {...};
     *   Preferences.observe("foo.bar.baz", observer);
     *   new Preferences("foo.bar.").ignore("baz", observer);
     *
     * @param   prefName    {String}
     *          the name of the pref being observed
     *
     * @param   callback    {Function|Object}
     *          the code being notified when the pref changes
     *
     * @param   thisObject  {Object}  [optional]
     *          the object being used as |this| when calling a Function callback
     */
    function ignore(prefName: string, callback: any, thisObject: any): void;
    function resetBranch(prefBranch?: string): void;
    let _branchStr: string;
    let _cachedPrefBranch: any;
    const _prefBranch: any;
}
declare function PrefObserver(prefName: any, callback: any, thisObject: any): void;
declare class PrefObserver {
    constructor(prefName: any, callback: any, thisObject: any);
    prefName: any;
    callback: any;
    thisObject: any;
    QueryInterface: MozQueryInterface;
    observe(subject: any, topic: any, data: any): void;
}
export {};
