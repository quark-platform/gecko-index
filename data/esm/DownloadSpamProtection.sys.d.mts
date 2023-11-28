/**
 * Responsible for detecting events related to downloads spam and notifying the
 * relevant window's WindowSpamProtection object. This is a singleton object,
 * constructed by DownloadIntegration.sys.mjs when the first download is blocked.
 */
export class DownloadSpamProtection {
    /**
     * Stores spam protection data per-window.
     * @type {WeakMap<Window, WindowSpamProtection>}
     */
    _forWindowMap: WeakMap<Window, WindowSpamProtection>;
    /**
     * Add download spam data for a given source URL in the window where the
     * download was blocked. This is invoked when a download is blocked by
     * nsExternalAppHandler::IsDownloadSpam
     * @param {String} url
     * @param {Window} window
     */
    update(url: string, window: Window): void;
    /**
     * Get the spam list for a given window (provided it exists).
     * @param {Window} window
     * @returns {DownloadList}
     */
    getSpamListForWindow(window: Window): DownloadList;
    /**
     * Remove the download spam data for a given source URL in the passed window,
     * if any exists.
     * @param {String} url
     * @param {Window} window
     */
    removeDownloadSpamForWindow(url: string, window: Window): void;
    /**
     * Create the spam protection object for a given window (if not already
     * created) and prepare to start listening for notifications on the passed
     * downloads view. The bulk of resources won't be expended until a download is
     * blocked. To add multiple views, call this method multiple times.
     * @param {Object} view An object that implements handlers for download
     *                      related notifications, like onDownloadAdded.
     * @param {Window} window
     */
    register(view: any, window: Window): void;
    /**
     * Remove the spam protection object for a window when it is closed.
     * @param {Window} window
     */
    unregister(window: Window): void;
}
/**
 * Each window tracks download spam independently, so one of these objects is
 * constructed for each window. This is responsible for tracking the spam and
 * updating the window's downloads UI accordingly.
 */
declare class WindowSpamProtection {
    constructor(window: any);
    _window: any;
    /**
     * This map stores blocked spam downloads for the window, keyed by the
     * download's source URL. This is done so we can track the number of times a
     * given download has been blocked.
     * @type {Map<String, DownloadSpam>}
     */
    _downloadSpamForUrl: Map<string, DownloadSpam>;
    /**
     * This set stores views that are waiting to have download notification
     * listeners attached. They will be attached when the spamList is created
     * (i.e. when the first spam download is blocked).
     * @type {Set<Object>}
     */
    _pendingViews: Set<any>;
    /**
     * Set to true when we first start _blocking downloads in the window. This is
     * used to lazily load the spamList. Spam downloads are rare enough that many
     * sessions will have no blocked downloads. So we don't want to create a
     * DownloadList unless we actually need it.
     * @type {Boolean}
     */
    _blocking: boolean;
    /**
     * A per-window DownloadList for blocked spam downloads. Registered views will
     * be sent notifications about downloads in this list, so that blocked spam
     * downloads can be represented in the UI. If spam downloads haven't been
     * blocked in the window, this will be undefined. See DownloadList.sys.mjs.
     * @type {DownloadList | undefined}
     */
    get spamList(): any;
    _spamList: any;
    /**
     * A per-window downloads indicator whose state depends on notifications from
     * DownloadLists registered in the window (for example, the visual state of
     * the downloads toolbar button). See DownloadsCommon.sys.mjs for more details.
     * @type {DownloadsIndicatorData}
     */
    get indicator(): DownloadsIndicatorData;
    _indicator: any;
    /**
     * Add a blocked download to the spamList or increment the count of an
     * existing blocked download, then notify listeners about this.
     * @param {String} url
     */
    addDownloadSpam(url: string): void;
    /**
     * Notify the downloads panel that a new download has been added to the
     * spamList. This is invoked when a new DownloadSpam object is created.
     * @param {DownloadSpam} downloadSpam
     */
    _notifyDownloadSpamAdded(downloadSpam: DownloadSpam): void;
    /**
     * Remove the download spam data for a given source URL.
     * @param {String} url
     */
    removeDownloadSpamForUrl(url: string): void;
    /**
     * Set up a downloads view (e.g. the downloads panel) to receive notifications
     * about downloads in the spamList.
     * @param {Object} view An object that implements handlers for download
     *                      related notifications, like onDownloadAdded.
     */
    registerView(view: any): void;
    /**
     * If any downloads have been blocked in the window, add download notification
     * listeners for each downloads view that has been registered.
     */
    _maybeAddViews(): void;
    /**
     * Remove download notification listeners for all views. This is invoked when
     * the window is closed.
     */
    removeAllViews(): void;
}
/**
 * Represents a special Download object for download spam.
 * @extends Download
 */
declare class DownloadSpam {
    constructor(url: any);
    hasBlockedData: boolean;
    stopped: boolean;
    error: any;
    target: {
        path: string;
    };
    source: {
        url: any;
    };
    blockedDownloadsCount: number;
}
export {};
