export class Dedupe {
    constructor(createKey: any);
    createKey: any;
    defaultCreateKey(item: any): any;
    /**
     * Dedupe any number of grouped elements favoring those from earlier groups.
     *
     * @param {Array} groups Contains an arbitrary number of arrays of elements.
     * @returns {Array} A matching array of each provided group deduped.
     */
    group(...groups: any[]): any[];
}
