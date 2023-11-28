export const PropertyListUtils: Readonly<{
    /**
     * Asynchronously reads a file as a property list.
     *
     * @param aFile (Blob/nsIFile)
     *        the file to be read as a property list.
     * @param aCallback
     *        If the property list is read successfully, aPropertyListRoot is set
     *        to the root object of the property list.
     *        Use getPropertyListObjectType to detect its type.
     *        If it's not read successfully, aPropertyListRoot is set to null.
     *        The reaon for failure is reported to the Error Console.
     */
    read: (aFile: any, aCallback: any) => void;
    /**
     * DO NOT USE ME.  Once Bug 718189 is fixed, this method won't be public.
     *
     * Synchronously read an ArrayBuffer contents as a property list.
     */
    _readFromArrayBufferSync: (aBuffer: any) => any;
    TYPE_PRIMITIVE: 0;
    TYPE_DATE: 1;
    TYPE_UINT8_ARRAY: 2;
    TYPE_ARRAY: 3;
    TYPE_DICTIONARY: 4;
    TYPE_INT64: 5;
    /**
     * Get the type in which the given property list object is represented.
     * Check the header for the mapping between the TYPE* constants to js types
     * and objects.
     *
     * @return one of the TYPE_* constants listed above.
     * @note this method is merely for convenience.  It has no magic to detect
     * that aObject is indeed a property list object created by this module.
     */
    getObjectType: (aObject: any) => 0 | 2 | 1 | 3 | 4 | 5;
    /**
     * Wraps a 64-bit stored in the form of a string primitive as a String object,
     * which we can later distiguish from regular string values.
     * @param aPrimitive
     *        a number in the form of either a primitive string or a primitive number.
     * @return a String wrapper around aNumberStr that can later be identified
     * as holding 64-bit number using getObjectType.
     */
    wrapInt64: (aPrimitive: any) => String;
}>;
