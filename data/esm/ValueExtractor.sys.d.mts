export class ValueExtractor {
    constructor(errors: any, aBundle: any);
    errors: any;
    domBundle: any;
    /**
     * @param options
     *        The 'spec' object.
     * @note  This function takes a 'spec' object and destructures it to extract
     *        a value. If the value is of the wrong type, it warns the developer
     *        and returns undefined.
     *        expectedType: is the type of a JS primitive (string, number, etc.)
     *        object: is the object from which to extract the value.
     *        objectName: string used to construct the developer warning.
     *        property: the name of the property being extracted.
     *        throwTypeError: boolean, throw a TypeError if the type is incorrect.
     *        trim: boolean, if the value should be trimmed (used by string type).
     */
    extractValue(options: any): any;
    extractColorValue(spec: any): string;
    extractLanguageValue(spec: any): any;
}
