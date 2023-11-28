export namespace LabelUtils {
    let EXCLUDED_TAGS: string[];
    let _mappedLabels: any;
    let _unmappedLabelControls: any;
    let _labelStrings: any;
    /**
     * Extract all strings of an element's children to an array.
     * "element.textContent" is a string which is merged of all children nodes,
     * and this function provides an array of the strings contains in an element.
     *
     * @param  {object} element
     *         A DOM element to be extracted.
     * @returns {Array}
     *          All strings in an element.
     */
    function extractLabelStrings(element: any): any[];
    function generateLabelMap(doc: any): void;
    function clearLabelMap(): void;
    function findLabelElements(element: any): any;
}
export default LabelUtils;
