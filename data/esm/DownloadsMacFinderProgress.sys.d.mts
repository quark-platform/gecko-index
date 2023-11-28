export namespace DownloadsMacFinderProgress {
    let _finderProgresses: any;
    /**
     * This method is called after a new browser window on macOS is opened, it
     * registers for receiving download events for the progressbar of the Finder.
     */
    function register(): void;
    function onDownloadAdded(download: any): void;
    function onDownloadChanged(download: any): void;
    function onDownloadRemoved(download: any): void;
}
