export class CollectionProblemData {
    missingIDs: number;
    clientDuplicates: any[];
    duplicates: any[];
    clientMissing: any[];
    serverMissing: any[];
    serverDeleted: any[];
    serverUnexpected: any[];
    differences: any[];
    /**
     * Produce a list summarizing problems found. Each entry contains {name, count},
     * where name is the field name for the problem, and count is the number of times
     * the problem was encountered.
     *
     * Validation has failed if all counts are not 0.
     */
    getSummary(): {
        name: string;
        count: number;
    }[];
}
export class CollectionValidator {
    constructor(name: any, idProp: any, props: any);
    name: any;
    props: any;
    idProp: any;
    ignoresMissingClients: boolean;
    emptyProblemData(): CollectionProblemData;
    getServerItems(engine: any): Promise<any[]>;
    getClientItems(): Promise<never>;
    /**
     * Can we guarantee validation will fail with a reason that isn't actually a
     * problem? For example, if we know there are pending changes left over from
     * the last sync, this should resolve to false. By default resolves to true.
     */
    canValidate(): Promise<boolean>;
    normalizeClientItem(item: any): any;
    normalizeServerItem(item: any): Promise<any>;
    clientUnderstands(item: any): boolean;
    syncedByClient(item: any): Promise<boolean>;
    getDifferences(client: any, server: any): any[];
    compareClientWithServer(clientItems: any, serverItems: any): Promise<{
        problemData: CollectionProblemData;
        clientRecords: any[];
        records: any[];
        deletedRecords: any[];
    }>;
    validate(engine: any): Promise<{
        duration: number;
        version: number;
        problems: CollectionProblemData;
        recordCount: number;
    }>;
    version: number;
}
