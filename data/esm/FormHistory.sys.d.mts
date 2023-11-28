/**
 * FormHistory
 *
 * Used to store values that have been entered into forms which may later
 * be used to automatically fill in the values when the form is visited again.
 *
 * async search(terms, queryData)
 *   Look up values that have been previously stored.
 *     terms - array of terms to return data for
 *     queryData - object that contains the query terms
 *       The query object contains properties for each search criteria to match, where the value
 *       of the property specifies the value that term must have. For example,
 *       { term1: value1, term2: value2 }
 *   Resolves to an array containing the found results. Each element in
 *   the array is an object containing a property for each search term
 *   specified by 'terms'.
 *   Rejects in case of errors.
 * async count(queryData)
 *   Find the number of stored entries that match the given criteria.
 *     queryData - array of objects that indicate the query. See the search method for details.
 *   Resolves to the number of found entries.
 *   Rejects in case of errors.
 * async update(changes)
 *    Write data to form history storage.
 *      changes - an array of changes to be made. If only one change is to be made, it
 *                may be passed as an object rather than a one-element array.
 *        Each change object is of the form:
 *          { op: operation, term1: value1, term2: value2, ... }
 *        Valid operations are:
 *          add - add a new entry
 *          update - update an existing entry
 *          remove - remove an entry
 *          bump - update the last accessed time on an entry
 *        The terms specified allow matching of one or more specific entries. If no terms
 *        are specified then all entries are matched. This means that { op: "remove" } is
 *        used to remove all entries and clear the form history.
 *   Resolves once the operation is complete.
 *   Rejects in case of errors.
 * async getAutoCompeteResults(searchString, params, callback)
 *   Retrieve an array of form history values suitable for display in an autocomplete list.
 *     searchString - the string to search for, typically the entered value of a textbox
 *     params - zero or more filter arguments:
 *       fieldname - form field name
 *       agedWeight
 *       bucketSize
 *       expiryDate
 *       maxTimeGroundings
 *       timeGroupingSize
 *       prefixWeight
 *       boundaryWeight
 *       source
 *     callback - callback that is invoked for each result, the second argument
 *                is a function that can be used to cancel the operation.
 *                Each result is an object with four properties:
 *                  text, textLowerCase, frecency, totalScore
 *   Resolves with an array of results, once the operation is complete.
 *   Rejects in case of errors.
 *
 * schemaVersion
 *   This property holds the version of the database schema
 *
 * Terms:
 *  guid - entry identifier. For 'add', a guid will be generated.
 *  fieldname - form field name
 *  value - form value
 *  timesUsed - the number of times the entry has been accessed
 *  firstUsed - the time the the entry was first created
 *  lastUsed - the time the entry was last accessed
 *  firstUsedStart - search for entries created after or at this time
 *  firstUsedEnd - search for entries created before or at this time
 *  lastUsedStart - search for entries last accessed after or at this time
 *  lastUsedEnd - search for entries last accessed before or at this time
 *  newGuid - a special case valid only for 'update' and allows the guid for
 *            an existing record to be updated. The 'guid' term is the only
 *            other term which can be used (ie, you can not also specify a
 *            fieldname, value etc) and indicates the guid of the existing
 *            record that should be updated.
 */
export let FormHistory: any;
export type InsertQueryData = {
    /**
     *           A change requested by FormHistory.
     */
    updatedChange: object;
    /**
     *           The insert query string.
     */
    query: string;
};
