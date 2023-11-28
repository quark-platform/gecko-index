export namespace ObjectUtils {
    /**
     * This tests objects & values for deep equality.
     *
     * We check using the most exact approximation of equality between two objects
     * to keep the chance of false positives to a minimum.
     * `JSON.stringify` is not designed to be used for this purpose; objects may
     * have ambiguous `toJSON()` implementations that would influence the test.
     *
     * @param a (mixed) Object or value to be compared.
     * @param b (mixed) Object or value to be compared.
     * @return Boolean Whether the objects are deep equal.
     */
    function deepEqual(a: any, b: any): any;
    /**
     * A thin wrapper on an object, designed to prevent client code from
     * accessing non-existent properties because of typos.
     *
     * // Without `strict`
     * let foo = { myProperty: 1 };
     * foo.MyProperty; // undefined
     *
     * // With `strict`
     * let strictFoo = ObjectUtils.strict(foo);
     * strictFoo.myProperty; // 1
     * strictFoo.MyProperty; // TypeError: No such property "MyProperty"
     *
     * Note that `strict` has no effect in non-DEBUG mode.
     */
    function strict(obj: any): any;
    /**
     * Returns `true` if `obj` is an array without elements, an object without
     * enumerable properties, or a falsy primitive; `false` otherwise.
     */
    function isEmpty(obj: any): boolean;
}
