export namespace DownloadsViewUI {
    export { BaseView };
    /**
     * A download element shell is responsible for handling the commands and the
     * displayed data for a single element that uses the "download.xml" binding.
     *
     * The information to display is obtained through the associated Download object
     * from the JavaScript API for downloads, and commands are executed using a
     * combination of Download methods and DownloadsCommon.sys.mjs helper functions.
     *
     * Specialized versions of this shell must be defined, and they are required to
     * implement the "download" property or getter. Currently these objects are the
     * HistoryDownloadElementShell and the DownloadsViewItem for the panel. The
     * history view may use a HistoryDownload object in place of a Download object.
     */
    export function DownloadElementShell(): void;
    export class DownloadElementShell {
        element: null;
        /**
         * Manages the "active" state of the shell. By default all the shells are
         * inactive, thus their UI is not updated. They must be activated when
         * entering the visible area.
         */
        ensureActive(): void;
        _active: boolean;
        get active(): boolean;
        connect(): void;
        _downloadProgress: any;
        /**
         * URI string for the file type icon displayed in the download element.
         */
        get image(): string;
        get browserWindow(): any;
        /**
         * Updates the display name and icon.
         *
         * @param displayName
         *        This is usually the full file name of the download without the path.
         * @param icon
         *        URL of the icon to load, generally from the "image" property.
         */
        showDisplayNameAndIcon(displayName: any, icon: any): void;
        /**
         * Updates the displayed progress bar.
         *
         * @param mode
         *        Either "normal" or "undetermined".
         * @param value
         *        Percentage of the progress bar to display, from 0 to 100.
         * @param paused
         *        True to display the progress bar style for paused downloads.
         */
        showProgress(mode: any, value: any, paused: any): void;
        /**
         * Updates the full status line.
         *
         * @param status
         *        Status line of the Downloads Panel or the Downloads View.
         * @param hoverStatus
         *        Label to show in the Downloads Panel when the mouse pointer is over
         *        the main area of the item. If not specified, this will be the same
         *        as the status line. This is ignored in the Downloads View. Type is
         *        either l10n object or string literal.
         */
        showStatus(status: any, hoverStatus?: any): void;
        /**
         * Updates the status line combining the given state label with other labels.
         *
         * @param stateLabel
         *        Label representing the state of the download, for example "Failed".
         *        In the Downloads Panel, this is the only text displayed when the
         *        the mouse pointer is not over the main area of the item. In the
         *        Downloads View, this label is combined with the host and date, for
         *        example "Failed - example.com - 1:45 PM".
         * @param hoverStatus
         *        Label to show in the Downloads Panel when the mouse pointer is over
         *        the main area of the item. If not specified, this will be the
         *        state label combined with the host and date. This is ignored in the
         *        Downloads View. Type is either l10n object or string literal.
         */
        showStatusWithDetails(stateLabel: any, hoverStatus: any): void;
        /**
         * Updates the main action button and makes it visible.
         *
         * @param type
         *        One of the presets defined in gDownloadElementButtons.
         */
        showButton(type: any): void;
        buttonCommandName: any;
        hideButton(): void;
        lastEstimatedSecondsLeft: number;
        /**
         * This is called when a major state change occurs in the download, but is not
         * called for every progress update in order to improve performance.
         */
        _updateState(): void;
        /**
         * This is called for all changes in the download, including progress updates.
         * For major state changes, _updateState is called first, but several elements
         * are still updated here. When the download is in progress, this function
         * takes a faster path with less element updates to improve performance.
         */
        _updateStateInner(): void;
        /**
         * Returns [title, [details1, details2]] for blocked downloads.
         * The title or details could be raw strings or l10n objects.
         */
        get rawBlockedTitleAndDetails(): any[];
        showDeletedOrMissing(): void;
        /**
         * Shows the appropriate unblock dialog based on the verdict, and executes the
         * action selected by the user in the dialog, which may involve unblocking,
         * opening or removing the file.
         *
         * @param window
         *        The window to which the dialog should be anchored.
         * @param dialogType
         *        Can be "unblock", "chooseUnblock", or "chooseOpen".
         */
        confirmUnblock(window: any, dialogType: any): void;
        /**
         * Unblocks the downloaded file and opens it.
         *
         * @return A promise that's resolved after the file has been opened.
         */
        unblockAndOpenDownload(): any;
        unblockAndSave(): any;
        /**
         * Returns the name of the default command to use for the current state of the
         * download, when there is a double click or another default interaction. If
         * there is no default command for the current state, returns an empty string.
         * The commands are implemented as functions on this object or derived ones.
         */
        get currentDefaultCommandName(): "" | "downloadsCmd_cancel" | "downloadsCmd_retry" | "downloadsCmd_showBlockedInfo" | "downloadsCmd_pauseResume" | "downloadsCmd_open" | "downloadsCmd_openReferrer";
        /**
         * Returns true if the specified command can be invoked on the current item.
         * The commands are implemented as functions on this object or derived ones.
         *
         * @param aCommand
         *        Name of the command to check, for example "downloadsCmd_retry".
         */
        isCommandEnabled(aCommand: any): any;
        doCommand(aCommand: any): void;
        onButton(): void;
        downloadsCmd_cancel(): void;
        downloadsCmd_confirmBlock(): void;
        downloadsCmd_open(openWhere?: string): void;
        downloadsCmd_openReferrer(): void;
        downloadsCmd_pauseResume(): void;
        downloadsCmd_show(): void;
        downloadsCmd_retry(): void;
        downloadsCmd_delete(): void;
        cmd_delete(): void;
        downloadsCmd_deleteFile(): Promise<void>;
        downloadsCmd_openInSystemViewer(): void;
        downloadsCmd_alwaysOpenInSystemViewer(): void;
        downloadsCmd_alwaysOpenSimilarFiles(): void;
    }
}
declare class BaseView {
    canClearDownloads(nodeContainer: any): boolean;
}
export {};
