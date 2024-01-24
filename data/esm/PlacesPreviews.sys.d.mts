/**
 * Used to exposes nsIPlacesPreviewsHelperService to the moz-page-thumb protocol
 * cpp implementation.
 */
export function PlacesPreviewsHelperService(): void;
export class PlacesPreviewsHelperService {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    getFilePathForURL(url: any): string;
}
/**
 * Handles previews for Places urls.
 * Previews are stored in WebP format, using MD5 hash of the page url in hex
 * format. All the previews are saved into a "places-previews" folder under
 * the roaming profile folder.
 */
export const PlacesPreviews: {
    "__#1117603@#placesObserver": any;
    "__#1117603@#deletionHandler": any;
    "__#1117603@#recentlyUpdatedPreviews": LimitedSet;
    fileExtension: string;
    fileContentType: string;
    handlePlacesEvents(events: any): void;
    /**
     * Whether the feature is enabled. Use this instead of directly checking
     * the pref, since it requires a restart.
     */
    readonly enabled: any;
    /**
     * Returns the path to the previews folder.
     * @returns {string} The path to the previews folder.
     */
    getPath(): string;
    /**
     * Returns the file path of the preview for the given url.
     * This doesn't guarantee the file exists.
     * @param {string} url Address of the page.
     * @returns {string} File path of the preview for the given url.
     */
    getPathForUrl(url: string): string;
    /**
     * Returns the file path of the preview having the given hash.
     * @param {string} hash md5 hash in hex format.
     * @returns {string } File path of the preview having the given hash.
     */
    getPathForHash(hash: string): string;
    /**
     * Returns the moz-page-thumb: url to show the preview for the given url.
     * @param {string} url Address of the page.
     * @returns {string} Preview url for the given page url.
     */
    getPageThumbURL(url: string): string;
    /**
     * Updates the preview for the given page url. The update happens in
     * background, using a windowless browser with very conservative privacy
     * settings. Due to this, it may not look exactly like the page that the user
     * is normally facing when logged in. See BackgroundPageThumbs.jsm for
     * additional details.
     * Unless `forceUpdate` is set, the preview is not updated if:
     *  - It was already fetched recently
     *  - The stored preview is younger than DAYS_BEFORE_REPLACEMENT
     * The previem image is encoded using WebP.
     * @param {string} url The address of the page.
     * @param {boolean} [forceUpdate] Whether to update the preview regardless.
     * @returns {boolean} Whether a preview is available and ready.
     */
    update(url: string, { forceUpdate }?: boolean): boolean;
    /**
     * Removes orphan previews that are not tracked by Places.
     * Orphaning should normally not happen, but unexpected manipulation (e.g. the
     * user touching the profile folder, or third party applications) could cause
     * it.
     * This method is slow, because it has to go through all the Places stored
     * pages, thus it's suggested to only run it as periodic maintenance.
     * @returns {boolean} Whether orphans deletion ran.
     */
    deleteOrphans(): boolean;
    /**
     * This is invoked by #deletionHandler every time a preview file is removed.
     * @param {string} filePath The path of the deleted file.
     */
    onDelete(filePath: string): void;
    /**
     * Used by tests to change the deletion timeout between chunks.
     * @param {integer} timeout New timeout in milliseconds.
     */
    testSetDeletionTimeout(timeout: integer): void;
};
/**
 * This extends Set to only keep the latest 100 entries.
 */
declare class LimitedSet extends Set<any> {
    constructor(values?: readonly any[]);
    constructor(iterable?: Iterable<any>);
    add(key: any): void;
    #private;
}
export {};
