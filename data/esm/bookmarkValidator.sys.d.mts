/**
 * Result of bookmark validation. Contains the following fields which describe
 * server-side problems unless otherwise specified.
 *
 * - missingIDs (number): # of objects with missing ids
 * - duplicates (array of ids): ids seen more than once
 * - parentChildMismatches (array of {parent: parentid, child: childid}):
 *   instances where the child's parentid and the parent's children array
 *   do not match
 * - cycles (array of array of ids). List of cycles found in the server-side tree.
 * - clientCycles (array of array of ids). List of cycles found in the client-side tree.
 * - orphans (array of {id: string, parent: string}): List of nodes with
 *   either no parentid, or where the parent could not be found.
 * - missingChildren (array of {parent: id, child: id}):
 *   List of parent/children where the child id couldn't be found
 * - deletedChildren (array of { parent: id, child: id }):
 *   List of parent/children where child id was a deleted item (but still showed up
 *   in the children array)
 * - multipleParents (array of {child: id, parents: array of ids}):
 *   List of children that were part of multiple parent arrays
 * - deletedParents (array of ids) : List of records that aren't deleted but
 *   had deleted parents
 * - childrenOnNonFolder (array of ids): list of non-folders that still have
 *   children arrays
 * - duplicateChildren (array of ids): list of records who have the same
 *   child listed multiple times in their children array
 * - parentNotFolder (array of ids): list of records that have parents that
 *   aren't folders
 * - rootOnServer (boolean): true if the root came from the server
 * - badClientRoots (array of ids): Contains any client-side root ids where
 *   the root is missing or isn't a (direct) child of the places root.
 *
 * - clientMissing: Array of ids on the server missing from the client
 * - serverMissing: Array of ids on the client missing from the server
 * - serverDeleted: Array of ids on the client that the server had marked as deleted.
 * - serverUnexpected: Array of ids that appear on the server but shouldn't
 *   because the client attempts to never upload them.
 * - differences: Array of {id: string, differences: string array} recording
 *   the non-structural properties that are differente between the client and server
 * - structuralDifferences: As above, but contains the items where the differences were
 *   structural, that is, they contained childGUIDs or parentid
 */
export class BookmarkProblemData {
    rootOnServer: boolean;
    missingIDs: number;
    duplicates: any[];
    parentChildMismatches: any[];
    cycles: any[];
    clientCycles: any[];
    orphans: any[];
    missingChildren: any[];
    deletedChildren: any[];
    multipleParents: any[];
    deletedParents: any[];
    childrenOnNonFolder: any[];
    duplicateChildren: any[];
    parentNotFolder: any[];
    badClientRoots: any[];
    clientMissing: any[];
    serverMissing: any[];
    serverDeleted: any[];
    serverUnexpected: any[];
    differences: any[];
    structuralDifferences: any[];
    /**
     * Convert ("difference", [{ differences: ["tags", "name"] }, { differences: ["name"] }]) into
     * [{ name: "difference:tags", count: 1}, { name: "difference:name", count: 2 }], etc.
     */
    _summarizeDifferences(prefix: any, diffs: any): {
        name: any;
        count: any;
    }[];
    /**
     * Produce a list summarizing problems found. Each entry contains {name, count},
     * where name is the field name for the problem, and count is the number of times
     * the problem was encountered.
     *
     * Validation has failed if all counts are not 0.
     *
     * If the `full` argument is truthy, we also include information about which
     * properties we saw structural differences in. Currently, this means either
     * "sdiff:parentid" and "sdiff:childGUIDS" may be present.
     */
    getSummary(full: any): {
        name: string;
        count: number;
    }[];
}
export class BookmarkValidator {
    yieldState: any;
    canValidate(): Promise<boolean>;
    _followQueries(recordsByQueryId: any): Promise<void>;
    createClientRecordsFromTree(clientTree: any): Promise<any[]>;
    /**
     * Process the server-side list. Mainly this builds the records into a tree,
     * but it also records information about problems, and produces arrays of the
     * deleted and non-deleted nodes.
     *
     * Returns an object containing:
     * - records:Array of non-deleted records. Each record contains the following
     *    properties
     *     - childGUIDs (array of strings, only present if type is 'folder'): the
     *       list of child GUIDs stored on the server.
     *     - children (array of records, only present if type is 'folder'):
     *       each record has these same properties. This may differ in content
     *       from what you may expect from the childGUIDs list, as it won't
     *       contain any records that could not be found.
     *     - parent (record): The parent to this record.
     *     - Unchanged properties send down from the server: id, title, type,
     *       parentName, parentid, bmkURI, keyword, tags, pos, queryId
     * - root: Root of the server-side bookmark tree. Has the same properties as
     *   above.
     * - deletedRecords: As above, but only contains items that the server sent
     *   where it also sent indication that the item should be deleted.
     * - problemData: a BookmarkProblemData object, with the caveat that
     *   the fields describing client/server relationship will not have been filled
     *   out yet.
     */
    inspectServerRecords(serverRecords: any): Promise<{
        deletedRecords: any[];
        records: any[];
        problemData: BookmarkProblemData;
        root: any;
    }>;
    _validateClient(problemData: any, clientRecords: any): Promise<void>;
    _computeUnifiedRecordMap(serverRecords: any, clientRecords: any): Promise<Map<any, any>>;
    _recordMissing(problems: any, id: any, clientRecord: any, serverRecord: any, serverTombstones: any): void;
    _compareRecords(client: any, server: any): {
        differences: string[];
        structuralDifferences: string[];
    };
    /**
     * Compare the list of server records with the client tree.
     *
     * Returns the same data as described in the inspectServerRecords comment,
     * with the following additional fields.
     * - clientRecords: an array of client records in a similar format to
     *   the .records (ie, server records) entry.
     * - problemData is the same as for inspectServerRecords, except all properties
     *   will be filled out.
     */
    compareServerWithClient(serverRecords: any, clientTree: any): Promise<{
        deletedRecords: any[];
        records: any[];
        problemData: BookmarkProblemData;
        root: any;
    }>;
    _getServerState(engine: any): Promise<any[]>;
    validate(engine: any): Promise<{
        duration: number;
        version: number;
        problems: BookmarkProblemData;
        recordCount: number;
    }>;
    version: number;
}
