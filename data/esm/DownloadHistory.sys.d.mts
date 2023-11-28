export namespace DownloadHistory {
    /**
     * Retrieves the main DownloadHistoryList object which provides a unified view
     * on downloads from both previous browsing sessions and this session.
     *
     * @param type
     *        Determines which type of downloads from this session should be
     *        included in the list. This is Downloads.PUBLIC by default, but can
     *        also be Downloads.PRIVATE or Downloads.ALL.
     * @param maxHistoryResults
     *        Optional number that limits the amount of results the history query
     *        may return.
     *
     * @return {Promise}
     * @resolves The requested DownloadHistoryList object.
     * @rejects JavaScript exception.
     */
    function getList({ type, maxHistoryResults }?: {
        type?: any;
        maxHistoryResults: any;
    }): Promise<any>;
    let _listPromises: {};
    function addDownloadToHistory(download: any): Promise<void>;
    /**
     * Stores new detailed metadata for the given download in history. This is
     * normally called after a download finishes, fails, or is canceled.
     *
     * Failed or canceled downloads with partial data are not stored as paused,
     * because the information from the session download is required for resuming.
     *
     * @param download
     *        Download object whose metadata should be updated. If the object
     *        represents a private download, the call has no effect.
     */
    function updateMetaData(download: any): Promise<void>;
    function _updateHistoryListData(sourceUrl: any): Promise<void>;
}
