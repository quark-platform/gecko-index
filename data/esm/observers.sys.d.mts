export namespace Observers {
    /**
     * Register the given callback as an observer of the given topic.
     *
     * @param   topic       {String}
     *          the topic to observe
     *
     * @param   callback    {Object}
     *          the callback; an Object that implements nsIObserver or a Function
     *          that gets called when the notification occurs
     *
     * @param   thisObject  {Object}  [optional]
     *          the object to use as |this| when calling a Function callback
     *
     * @returns the observer
     */
    function add(topic: string, callback: any, thisObject: any): Observer;
    /**
     * Unregister the given callback as an observer of the given topic.
     *
     * @param topic       {String}
     *        the topic being observed
     *
     * @param callback    {Object}
     *        the callback doing the observing
     *
     * @param thisObject  {Object}  [optional]
     *        the object being used as |this| when calling a Function callback
     */
    function remove(topic: string, callback: any, thisObject: any): void;
    /**
     * Notify observers about something.
     *
     * @param topic   {String}
     *        the topic to notify observers about
     *
     * @param subject {Object}  [optional]
     *        some information about the topic; can be any JS object or primitive
     *
     * @param data    {String}  [optional] [deprecated]
     *        some more information about the topic; deprecated as the subject
     *        is sufficient to pass all needed information to the JS observers
     *        that this module targets; if you have multiple values to pass to
     *        the observer, wrap them in an object and pass them via the subject
     *        parameter (i.e.: { foo: 1, bar: "some string", baz: myObject })
     */
    function notify(topic: string, subject: any, data: string): void;
    let _cache: any[];
}
declare function Observer(topic: any, callback: any, thisObject: any): void;
declare class Observer {
    constructor(topic: any, callback: any, thisObject: any);
    topic: any;
    callback: any;
    thisObject: any;
    QueryInterface: any;
    observe(subject: any, topic: any, data: any): void;
}
export {};
