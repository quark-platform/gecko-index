export const BinarySearch: Readonly<{
    /**
     * Returns the index of the given target in the given array or -1 if the
     * target is not found.
     *
     * See search() for a description of this function's parameters.
     *
     * @return The index of `target` in `array` or -1 if `target` is not found.
     */
    indexOf(comparator: any, array: any, target: any): number | boolean;
    /**
     * Returns the index within the given array where the given target may be
     * inserted to keep the array ordered.
     *
     * See search() for a description of this function's parameters.
     *
     * @return The index in `array` where `target` may be inserted to keep `array`
     *         ordered.
     */
    insertionIndexOf(comparator: any, array: any, target: any): number | boolean;
    /**
     * Searches for the given target in the given array.
     *
     * @param  comparator
     *         A function that takes two arguments and compares them, returning a
     *         negative number if the first should be ordered before the second,
     *         zero if the first and second have the same ordering, or a positive
     *         number if the second should be ordered before the first.  The first
     *         argument is always `target`, and the second argument is a value
     *         from the array.
     * @param  array
     *         An array whose elements are ordered by `comparator`.
     * @param  target
     *         The value to search for.
     * @return An array with two elements.  If `target` is found, the first
     *         element is true, and the second element is its index in the array.
     *         If `target` is not found, the first element is false, and the
     *         second element is the index where it may be inserted to keep the
     *         array ordered.
     */
    search(comparator: any, array: any, target: any): (number | boolean)[];
}>;
