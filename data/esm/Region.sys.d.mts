export let Region: RegionDetector;
/**
 * This module keeps track of the users current region (country).
 * so the SearchService and other consumers can apply region
 * specific customisations.
 */
declare class RegionDetector {
    _home: any;
    _current: any;
    _rsClient: any;
    _wifiDataPromise: any;
    _retryCount: number;
    _initPromise: any;
    REGION_TOPIC: string;
    TELEMETRY: {
        SUCCESS: number;
        NO_RESULT: number;
        TIMEOUT: number;
        ERROR: number;
    };
    /**
     * Read currently stored region data and if needed trigger background
     * region detection.
     */
    init(): Promise<any>;
    /**
     * Get the region we currently consider the users home.
     *
     * @returns {string}
     *   The users current home region.
     */
    get home(): string;
    /**
     * Get the last region we detected the user to be in.
     *
     * @returns {string}
     *   The users current region.
     */
    get current(): string;
    /**
     * Fetch the users current region.
     *
     * @returns {string}
     *   The country_code defining users current region.
     */
    _fetchRegion(): string;
    /**
     * Validate then store the region and report telemetry.
     *
     * @param region
     *   The region to store.
     */
    _storeRegion(region: any): Promise<void>;
    /**
     * Save the update current region and check if the home region
     * also needs an update.
     *
     * @param {string} region
     *   The region to store.
     */
    _setCurrentRegion(region?: string): void;
    _createSupportsString(data: any): any;
    /**
     * Save the updated home region and notify observers.
     *
     * @param {string} region
     *   The region to store.
     * @param {boolean} [notify]
     *   Tests can disable the notification for convenience as it
     *   may trigger an engines reload.
     */
    _setHomeRegion(region: string, notify?: boolean): void;
    /**
     * Make the request to fetch the region from the configured service.
     */
    _getRegion(): Promise<any>;
    /**
     * Setup the RemoteSetting client + sync listener and ensure
     * the map files are downloaded.
     */
    _setupRemoteSettings(): Promise<void>;
    /**
     * Called when RemoteSettings syncs new data, clean up any
     * stale attachments and download any new ones.
     *
     * @param {Object} syncData
     *   Object describing the data that has just been synced.
     */
    _onRegionFilesSync({ data: { deleted } }: any): Promise<void>;
    /**
     * Download the RemoteSetting record attachments, when they are
     * successfully downloaded set a flag so we can start using them
     * for geocoding.
     */
    _ensureRegionFilesDownloaded(): Promise<void>;
    _regionFilesReady: boolean;
    /**
     * Fetch an attachment from RemoteSettings.
     *
     * @param {String} id
     *   The id of the record to fetch the attachment from.
     */
    _fetchAttachment(id: string): Promise<any>;
    /**
     * Get a map of the world with region definitions.
     */
    _getPlainMap(): Promise<any>;
    /**
     * Get a map with the regions expanded by a few km to help
     * fallback lookups when a location is not within a region.
     */
    _getBufferedMap(): Promise<any>;
    /**
     * Gets the users current location using the same reverse IP
     * request that is used for GeoLocation requests.
     *
     * @returns {Object} location
     *   Object representing the user location, with a location key
     *   that contains the lat / lng coordinates.
     */
    _getLocation(): any;
    /**
     * Return the users current region using
     * request that is used for GeoLocation requests.
     *
     * @returns {String}
     *   A 2 character string representing a region.
     */
    _getRegionLocally(): string;
    /**
     * Take a location and return the region code for that location
     * by looking up the coordinates in geojson map files.
     * Inspired by https://github.com/mozilla/ichnaea/blob/874e8284f0dfa1868e79aae64e14707eed660efe/ichnaea/geocode.py#L114
     *
     * @param {Object} location
     *   A location object containing lat + lng coordinates.
     *
     * @returns {String}
     *   A 2 character string representing a region.
     */
    _geoCode(location: any): string;
    /**
     * Find all the polygons that contain a single point, return
     * an array of those polygons along with the region that
     * they define
     *
     * @param {Object} point
     *   A lat + lng coordinate.
     * @param {Object} map
     *   Geojson object that defined seperate regions with a list
     *   of polygons.
     *
     * @returns {Array}
     *   An array of polygons that contain the point, along with the
     *   region they define.
     */
    _getPolygonsContainingPoint(point: any, map: any): any[];
    /**
     * Find the largest distance between a point and any of the points that
     * make up an array of regions.
     *
     * @param {Object} location
     *   A lat + lng coordinate.
     * @param {Array} regions
     *   An array of GeoJSON region definitions.
     *
     * @returns {String}
     *   A 2 character string representing a region.
     */
    _findFurthest(location: any, regions: any[]): string;
    /**
     * Find the smallest distance between a point and any of the points that
     * make up an array of regions.
     *
     * @param {Object} location
     *   A lat + lng coordinate.
     * @param {Array} regions
     *   An array of GeoJSON region definitions.
     *
     * @returns {String}
     *   A 2 character string representing a region.
     */
    _findClosest(location: any, regions: any[]): string;
    /**
     * Utility function to loop over all the coordinate points in an
     * array of polygons and call a function on them.
     *
     * @param {Array} regions
     *   An array of GeoJSON region definitions.
     * @param {Function} fun
     *   Function to call on individual coordinates.
     */
    _traverse(regions: any[], fun: Function): void;
    /**
     * Check whether a point is contained within a polygon using the
     * point in polygon algorithm:
     * https://en.wikipedia.org/wiki/Point_in_polygon
     * This casts a ray from the point and counts how many times
     * that ray intersects with the polygons borders, if it is
     * an odd number of times the point is inside the polygon.
     *
     * @param {Object} location
     *   A lat + lng coordinate.
     * @param {Object} polygon
     *   Array of coordinates that define the boundaries of a polygon.
     *
     * @returns {boolean}
     *   Whether the point is within the polygon.
     */
    _polygonInPoint({ lng, lat }: any, poly: any): boolean;
    /**
     * Find the distance between 2 points.
     *
     * @param {Object} p1
     *   A lat + lng coordinate.
     * @param {Object} p2
     *   A lat + lng coordinate.
     *
     * @returns {int}
     *   The distance between the 2 points.
     */
    _distanceBetween(p1: any, p2: any): int;
    /**
     * A wrapper around fetch that implements a timeout, will throw
     * a TIMEOUT error if the request is not completed in time.
     *
     * @param {String} url
     *   The time url to fetch.
     * @param {Object} opts
     *   The options object passed to the call to fetch.
     * @param {int} timeout
     *   The time in ms to wait for the request to complete.
     */
    _fetchTimeout(url: string, opts: any, timeout: int): Promise<void | Response>;
    /**
     * Implement the timeout for network requests. This will be run for
     * all network requests, but the error will only be returned if it
     * completes first.
     *
     * @param {int} timeout
     *   The time in ms to wait for the request to complete.
     * @param {Object} controller
     *   The AbortController passed to the fetch request that
     *   allows us to abort the request.
     */
    _timeout(timeout: int, controller: any): Promise<void>;
    _fetchWifiData(): Promise<any>;
    wifiService: any;
    /**
     * If the user is using geolocation then we will see frequent updates
     * debounce those so we aren't processing them constantly.
     *
     * @returns {bool}
     *   Whether we should continue the update check.
     */
    _needsUpdateCheck(): bool;
    /**
     * Dispatch a promise returning function to the main thread and
     * resolve when it is completed.
     */
    _idleDispatch(fun: any): Promise<any>;
    /**
     * timerManager will call this periodically to update the region
     * in case the user never users geolocation.
     */
    _updateTimer(): Promise<void>;
    /**
     * Called when we see geolocation updates.
     * in case the user never users geolocation.
     *
     * @param {Object} location
     *   A location object containing lat + lng coordinates.
     *
     */
    _seenLocation(location: any): Promise<void>;
    onChange(accessPoints: any): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    newInstance(): RegionDetector;
}
export {};
