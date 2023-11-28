export namespace PlacesTransactions {
    /**
     * @see Batches in the module documentation.
     */
    function batch(transactionsToBatch: any): Promise<any>;
    /**
     * Asynchronously undo the transaction immediately after the current undo
     * position in the transactions history in the reverse order, if any, and
     * adjusts the undo position.
     *
     * @return {Promises).  The promise always resolves.
     * @note All undo manager operations are queued. This means that transactions
     * history may change by the time your request is fulfilled.
     */
    function undo(): Promises;
    /**
     * Asynchronously redo the transaction immediately before the current undo
     * position in the transactions history, if any, and adjusts the undo
     * position.
     *
     * @return {Promises).  The promise always resolves.
     * @note All undo manager operations are queued. This means that transactions
     * history may change by the time your request is fulfilled.
     */
    function redo(): Promises;
    /**
     * Asynchronously clear the undo, redo, or all entries from the transactions
     * history.
     *
     * @param [optional] undoEntries
     *        Whether or not to clear undo entries.  Default: true.
     * @param [optional] redoEntries
     *        Whether or not to clear undo entries.  Default: true.
     *
     * @return {Promises).  The promise always resolves.
     * @throws if both aUndoEntries and aRedoEntries are false.
     * @note All undo manager operations are queued. This means that transactions
     * history may change by the time your request is fulfilled.
     */
    function clearTransactionsHistory(undoEntries?: boolean, redoEntries?: boolean): Promises;
    const length: any;
    /**
     * Get the transaction history entry at a given index.  Each entry consists
     * of one or more transaction objects.
     *
     * @param index
     *        the index of the entry to retrieve.
     * @return an array of transaction objects in their undo order (that is,
     * reversely to the order they were executed).
     * @throw if aIndex is invalid (< 0 or >= length).
     * @note the returned array is a clone of the history entry and is not
     * kept in sync with the original entry if it changes.
     */
    function entry(index: any): any;
    const undoPosition: any;
    const topUndoEntry: any;
    const topRedoEntry: any;
}
