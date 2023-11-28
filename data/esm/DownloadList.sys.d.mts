/**
 * Represents a collection of Download objects that can be viewed and managed by
 * the user interface, and persisted across sessions.
 */
export class DownloadList {
    /**
     * Array of Download objects currently in the list.
     */
    _downloads: any[];
    /**
     * Set of currently registered views.
     */
    _views: Set<any>;
    /**
     * Retrieves a snapshot of the downloads that are currently in the list.  The
     * returned array does not change when downloads are added or removed, though
     * the Download objects it contains are still updated in real time.
     *
     * @return {Promise}
     * @resolves An array of Download objects.
     * @rejects JavaScript exception.
     */
    getAll(): Promise<any>;
    /**
     * Adds a new download to the end of the items list.
     *
     * @note When a download is added to the list, its "onchange" event is
     *       registered by the list, thus it cannot be used to monitor the
     *       download.  To receive change notifications for downloads that are
     *       added to the list, use the addView method to register for
     *       onDownloadChanged notifications.
     *
     * @param download
     *        The Download object to add.
     *
     * @return {Promise}
     * @resolves When the download has been added.
     * @rejects JavaScript exception.
     */
    add(download: any): Promise<any>;
    /**
     * Removes a download from the list.  If the download was already removed,
     * this method has no effect.
     *
     * This method does not change the state of the download, to allow adding it
     * to another list, or control it directly.  If you want to dispose of the
     * download object, you should cancel it afterwards, and remove any partially
     * downloaded data if needed.
     *
     * @param download
     *        The Download object to remove.
     *
     * @return {Promise}
     * @resolves When the download has been removed.
     * @rejects JavaScript exception.
     */
    remove(download: any): Promise<any>;
    /**
     * This function is called when "onchange" events of downloads occur.
     *
     * @param download
     *        The Download object that changed.
     */
    _change(download: any): void;
    /**
     * Adds a view that will be notified of changes to downloads.  The newly added
     * view will receive onDownloadAdded notifications for all the downloads that
     * are already in the list.
     *
     * @param view
     *        The view object to add.  The following methods may be defined:
     *        {
     *          onDownloadAdded: function (download) {
     *            // Called after download is added to the end of the list.
     *          },
     *          onDownloadChanged: function (download) {
     *            // Called after the properties of download change.
     *          },
     *          onDownloadRemoved: function (download) {
     *            // Called after download is removed from the list.
     *          },
     *          onDownloadBatchStarting: function () {
     *            // Called before multiple changes are made at the same time.
     *          },
     *          onDownloadBatchEnded: function () {
     *            // Called after all the changes have been made.
     *          },
     *        }
     *
     * @return {Promise}
     * @resolves When the view has been registered and all the onDownloadAdded
     *           notifications for the existing downloads have been sent.
     * @rejects JavaScript exception.
     */
    addView(view: any): Promise<any>;
    /**
     * Removes a view that was previously added using addView.
     *
     * @param view
     *        The view object to remove.
     *
     * @return {Promise}
     * @resolves When the view has been removed.  At this point, the removed view
     *           will not receive any more notifications.
     * @rejects JavaScript exception.
     */
    removeView(view: any): Promise<any>;
    /**
     * Notifies all the views of a download addition, change, removal, or other
     * event. The additional arguments are passed to the called method.
     *
     * @param methodName
     *        String containing the name of the method to call on the view.
     */
    _notifyAllViews(methodName: any, ...args: any[]): void;
    /**
     * Removes downloads from the list that have finished, have failed, or have
     * been canceled without keeping partial data.  A filter function may be
     * specified to remove only a subset of those downloads.
     *
     * This method finalizes each removed download, ensuring that any partially
     * downloaded data associated with it is also removed.
     *
     * @param filterFn
     *        The filter function is called with each download as its only
     *        argument, and should return true to remove the download and false
     *        to keep it.  This parameter may be null or omitted to have no
     *        additional filter.
     */
    removeFinished(filterFn: any): void;
}
/**
 * Provides a unified, unordered list combining public and private downloads.
 *
 * Download objects added to this list are also added to one of the two
 * underlying lists, based on their "source.isPrivate" property.  Views on this
 * list will receive notifications for both public and private downloads.
 *
 * @param publicList
 *        Underlying DownloadList containing public downloads.
 * @param privateList
 *        Underlying DownloadList containing private downloads.
 */
export class DownloadCombinedList extends DownloadList {
    constructor(publicList: any, privateList: any);
    /**
     * Underlying DownloadList containing public downloads.
     */
    _publicList: any;
    /**
     * Underlying DownloadList containing private downloads.
     */
    _privateList: any;
    onDownloadAdded(download: any): void;
    onDownloadChanged(download: any): void;
    onDownloadRemoved(download: any): void;
}
/**
 * Provides an aggregated view on the contents of a DownloadList.
 */
export class DownloadSummary {
    /**
     * Array of Download objects that are currently part of the summary.
     */
    _downloads: any[];
    /**
     * Set of currently registered views.
     */
    _views: Set<any>;
    /**
     * Underlying DownloadList whose contents should be summarized.
     */
    _list: any;
    /**
     * Indicates whether all the downloads are currently stopped.
     */
    allHaveStopped: boolean;
    /**
     * Indicates whether whether all downloads have an unknown final size.
     */
    allUnknownSize: boolean;
    /**
     * Indicates the total number of bytes to be transferred before completing all
     * the downloads that are currently in progress.
     *
     * For downloads that do not have a known final size, the number of bytes
     * currently transferred is reported as part of this property.
     *
     * This is zero if no downloads are currently in progress.
     */
    progressTotalBytes: number;
    /**
     * Number of bytes currently transferred as part of all the downloads that are
     * currently in progress.
     *
     * This is zero if no downloads are currently in progress.
     */
    progressCurrentBytes: number;
    /**
     * This method may be called once to bind this object to a DownloadList.
     *
     * Views on the summarized data can be registered before this object is bound
     * to an actual list.  This allows the summary to be used without requiring
     * the initialization of the DownloadList first.
     *
     * @param list
     *        Underlying DownloadList whose contents should be summarized.
     *
     * @return {Promise}
     * @resolves When the view on the underlying list has been registered.
     * @rejects JavaScript exception.
     */
    bindToList(list: any): Promise<any>;
    /**
     * Adds a view that will be notified of changes to the summary.  The newly
     * added view will receive an initial onSummaryChanged notification.
     *
     * @param view
     *        The view object to add.  The following methods may be defined:
     *        {
     *          onSummaryChanged: function () {
     *            // Called after any property of the summary has changed.
     *          },
     *        }
     *
     * @return {Promise}
     * @resolves When the view has been registered and the onSummaryChanged
     *           notification has been sent.
     * @rejects JavaScript exception.
     */
    addView(view: any): Promise<any>;
    /**
     * Removes a view that was previously added using addView.
     *
     * @param view
     *        The view object to remove.
     *
     * @return {Promise}
     * @resolves When the view has been removed.  At this point, the removed view
     *           will not receive any more notifications.
     * @rejects JavaScript exception.
     */
    removeView(view: any): Promise<any>;
    /**
     * This function is called when any change in the list of downloads occurs,
     * and will recalculate the summary and notify the views in case the
     * aggregated properties are different.
     */
    _onListChanged(): void;
    onDownloadAdded(download: any): void;
    onDownloadChanged(download: any): void;
    onDownloadRemoved(download: any): void;
}
