export class MatchURLFilters {
    constructor(filters: any);
    filters: any[];
    matches(url: any): boolean;
    matchURLFilter({ filter, data, uri, uriURL }: {
        filter: any;
        data: any;
        uri: any;
        uriURL: any;
    }): boolean;
    testMatchOnURLComponent({ urlComponent: key, data, filter }: {
        urlComponent: any;
        data: any;
        filter: any;
    }): boolean;
    serialize(): any[];
}
