export namespace SchemaOrgPageData {
    /**
     * Parses and collects the schema.org items from the given document.
     * The returned items are the roots, i.e. the top-level items, there may be
     * other items as nested properties.
     *
     * @param {Document} document
     *   The DOM document to parse.
     * @returns {Item[]}
     */
    function collectItems(document: Document): Item[];
    /**
     * Performs PageData collection from the given document.
     *
     * @param {Document} document
     *   The DOM document to collect from.
     * @returns {PageData}
     */
    function collect(document: Document): PageData;
}
/**
 * Represents an item from the schema.org specification.
 *
 * Every `Item` has a type and a set of properties. Each property has a string
 * name and a list of values. It often isn't clear from the spec whether a
 * property is expected to have a list of values or just one value so this
 * data structure stores every property as a list and provides a simple method
 * to get the first property value.
 */
declare class Item {
    /**
     * Constructors a new `Item` of the given type.
     *
     * @param {string} type
     *   The type of the item.
     */
    constructor(type: string);
    /** @type {string} The type of the item e.g. "Product" or "Person". */
    type: string;
    /** @type {Map<string, any[]>} Properties of the item. */
    properties: Map<string, any[]>;
    /**
     * Tests whether a property has any values in this item.
     *
     * @param {string} prop
     *   The name of the property.
     * @returns {boolean}
     */
    has(prop: string): boolean;
    /**
     * Gets all of the values for a property. This may return an empty array if
     * there are no values.
     *
     * @param {string} prop
     *   The name of the property.
     * @returns {any[]}
     */
    all(prop: string): any[];
    /**
     * Gets the first value for a property.
     *
     * @param {string} prop
     *   The name of the property.
     * @returns {any}
     */
    get(prop: string): any;
    /**
     * Sets a value for a property.
     *
     * @param {string} prop
     *   The name of the property.
     * @param {any} value
     *   The value of the property.
     */
    set(prop: string, value: any): void;
    /**
     * Converts this item to JSON-LD.
     *
     * Single array properties are converted into simple properties.
     *
     * @returns {object}
     */
    toJsonLD(): object;
}
export {};
