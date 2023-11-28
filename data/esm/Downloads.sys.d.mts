export namespace Downloads {
    export const PUBLIC: string;
    export const PRIVATE: string;
    export const ALL: string;
    /**
     * Creates a new Download object.
     *
     * @param properties
     *        Provides the initial properties for the newly created download.
     *        This matches the serializable representation of a Download object.
     *        Some of the most common properties in this object include:
     *        {
     *          source: String containing the URI for the download source.
     *                  Alternatively, may be an nsIURI, a DownloadSource object,
     *                  or an object with the following properties:
     *          {
     *            url: String containing the URI for the download source.
     *            isPrivate: Indicates whether the download originated from a
     *                       private window.  If omitted, the download is public.
     *            referrerInfo: String or nsIReferrerInfo object represents the
     *                          referrerInfo of the download source.  Can be
     *                          omitted or null for example when the download
     *                          source is not HTTP.
     *            cookieJarSettings: The nsICookieJarSettings object represents
     *                               the cookieJarSetting of the download source.
     *                               Can be omitted or null if the download source
     *                               is not from a document.
     *          },
     *          target: String containing the path of the target file.
     *                  Alternatively, may be an nsIFile, a DownloadTarget object,
     *                  or an object with the following properties:
     *          {
     *            path: String containing the path of the target file.
     *          },
     *          saver: String representing the class of the download operation.
     *                 If omitted, defaults to "copy".  Alternatively, may be the
     *                 serializable representation of a DownloadSaver object.
     *        }
     *
     * @return {Promise}
     * @resolves The newly created Download object.
     * @rejects JavaScript exception.
     */
    export function createDownload(properties: any): Promise<any>;
    /**
     * Downloads data from a remote network location to a local file.
     *
     * This download method does not provide user interface, or the ability to
     * cancel or restart the download programmatically.  For that, you should
     * obtain a reference to a Download object using the createDownload function.
     *
     * Since the download cannot be restarted, any partially downloaded data will
     * not be kept in case the download fails.
     *
     * @param source
     *        String containing the URI for the download source.  Alternatively,
     *        may be an nsIURI or a DownloadSource object.
     * @param target
     *        String containing the path of the target file.  Alternatively, may
     *        be an nsIFile or a DownloadTarget object.
     * @param options
     *        An optional object used to control the behavior of this function.
     *        You may pass an object with a subset of the following fields:
     *        {
     *          isPrivate: Indicates whether the download originated from a
     *                     private window.
     *        }
     *
     * @return {Promise}
     * @resolves When the download has finished successfully.
     * @rejects JavaScript exception if the download failed.
     */
    export function fetch(source: any, target: any, options: any): Promise<any>;
    /**
     * Retrieves the specified type of DownloadList object.  There is one download
     * list for each type, and this method always retrieves a reference to the
     * same download list when called with the same argument.
     *
     * Calling this function may cause the list of public downloads to be reloaded
     * from the previous session, if it wasn't loaded already.
     *
     * @param type
     *        This can be Downloads.PUBLIC, Downloads.PRIVATE, or Downloads.ALL.
     *        Downloads added to the Downloads.PUBLIC and Downloads.PRIVATE lists
     *        are reflected in the Downloads.ALL list, and downloads added to the
     *        Downloads.ALL list are also added to either the Downloads.PUBLIC or
     *        the Downloads.PRIVATE list based on their properties.
     *
     * @return {Promise}
     * @resolves The requested DownloadList or DownloadCombinedList object.
     * @rejects JavaScript exception.
     */
    export function getList(type: any): Promise<any>;
    export let _promiseListsInitialized: any;
    export let _lists: {};
    /**
     * Retrieves the specified type of DownloadSummary object.  There is one
     * download summary for each type, and this method always retrieves a
     * reference to the same download summary when called with the same argument.
     *
     * Calling this function does not cause the list of public downloads to be
     * reloaded from the previous session.  The summary will behave as if no
     * downloads are present until the getList method is called.
     *
     * @param type
     *        This can be Downloads.PUBLIC, Downloads.PRIVATE, or Downloads.ALL.
     *
     * @return {Promise}
     * @resolves The requested DownloadList or DownloadCombinedList object.
     * @rejects JavaScript exception.
     */
    export function getSummary(type: any): Promise<any>;
    export let _summaries: {};
    /**
     * Returns the system downloads directory asynchronously.
     *   Mac OSX:
     *     User downloads directory
     *   XP/2K:
     *     My Documents/Downloads
     *   Vista and others:
     *     User downloads directory
     *   Linux:
     *     XDG user dir spec, with a fallback to Home/Downloads
     *   Android:
     *     standard downloads directory i.e. /sdcard
     *
     * @return {Promise}
     * @resolves The downloads directory string path.
     */
    export function getSystemDownloadsDirectory(): Promise<any>;
    /**
     * Returns the preferred downloads directory based on the user preferences
     * in the current profile asynchronously.
     *
     * @return {Promise}
     * @resolves The downloads directory string path.
     */
    export function getPreferredDownloadsDirectory(): Promise<any>;
    /**
     * Returns the temporary directory where downloads are placed before the
     * final location is chosen, or while the document is opened temporarily
     * with an external application. This may or may not be the system temporary
     * directory, based on the platform asynchronously.
     *
     * @return {Promise}
     * @resolves The downloads directory string path.
     */
    export function getTemporaryDownloadsDirectory(): Promise<any>;
    export { DownloadError as Error };
}
