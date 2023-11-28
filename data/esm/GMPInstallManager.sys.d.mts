/**
 * Provides an easy API for downloading and installing GMP Addons
 */
export function GMPInstallManager(): void;
export class GMPInstallManager {
    /**
     * Obtains a URL with replacement of vars
     */
    _getURL(): Promise<any>;
    /**
     * Records telemetry results on if fetching update.xml from Balrog succeeded
     * when content signature was used to verify the response from Balrog.
     * @param didGetAddonList
     *        A boolean indicating if an update.xml containing the addon list was
     *        successfully fetched (true) or not (false).
     * @param err
     *        The error that was thrown (if it exists) for the failure case. This
     *        is expected to have a addonCheckerErr member which provides further
     *        information on why the addon checker failed.
     */
    recordUpdateXmlTelemetryForContentSignature(didGetAddonList: any, err?: any): void;
    /**
     * Records telemetry results on if fetching update.xml from Balrog succeeded
     * when cert pinning was used to verify the response from Balrog. This
     * should be removed once we're no longer using cert pinning.
     * @param didGetAddonList
     *        A boolean indicating if an update.xml containing the addon list was
     *        successfully fetched (true) or not (false).
     * @param err
     *        The error that was thrown (if it exists) for the failure case. This
     *        is expected to have a addonCheckerErr member which provides further
     *        information on why the addon checker failed.
     */
    recordUpdateXmlTelemetryForCertPinning(didGetAddonList: any, err?: any): void;
    /**
     * Performs an addon check.
     * @return a promise which will be resolved or rejected.
     *         The promise is resolved with an object with properties:
     *           addons: array of addons
     *           usedFallback: whether the data was collected from online or
     *                         from fallback data within the build
     *         The promise is rejected with an object with properties:
     *           target: The XHR request object
     *           status: The HTTP status code
     *           type: Sometimes specifies type of rejection
     */
    checkForAddons(): Promise<any>;
    _deferred: any;
    /**
     * Installs the specified addon and calls a callback when done.
     * @param gmpAddon The GMPAddon object to install
     * @return a promise which will be resolved or rejected
     *         The promise will resolve with an array of paths that were extracted
     *         The promise will reject with an error object:
     *           target: The XHR request object
     *           status: The HTTP status code
     *           type: A string to represent the type of error
     *                 downloaderr, verifyerr or previouserrorencountered
     */
    installAddon(gmpAddon: any): any;
    gmpDownloader: GMPDownloader;
    _getTimeSinceLastCheck(): number;
    get _isEMEEnabled(): any;
    _isAddonEnabled(aAddon: any): any;
    _isAddonUpdateEnabled(aAddon: any): any;
    _updateLastCheck(): void;
    _versionchangeOccurred(): boolean;
    /**
     * Wrapper for checkForAddons and installAddon.
     * Will only install if not already installed and will log the results.
     * This will only install/update the OpenH264 and EME plugins
     * @return a promise which will be resolved if all addons could be installed
     *         successfully, rejected otherwise.
     */
    simpleCheckAndInstall(): Promise<{
        status: string;
        results?: undefined;
    } | {
        status: string;
        results: {
            id: any;
            result: string;
        }[];
    }>;
    /**
     * Makes sure everything is cleaned up
     */
    uninit(): void;
    overrideLeaveDownloadedZip: boolean;
}
/**
 * Used to construct a single GMP addon
 * GMPAddon objects are returns from GMPInstallManager.checkForAddons
 * GMPAddon objects can also be used in calls to GMPInstallManager.installAddon
 *
 * @param addon The ProductAddonChecker `addon` object
 */
export function GMPAddon(addon: any): void;
export class GMPAddon {
    /**
     * Used to construct a single GMP addon
     * GMPAddon objects are returns from GMPInstallManager.checkForAddons
     * GMPAddon objects can also be used in calls to GMPInstallManager.installAddon
     *
     * @param addon The ProductAddonChecker `addon` object
     */
    constructor(addon: any);
    /**
     * Returns a string representation of the addon
     */
    toString(): string;
    /**
     * If all the fields aren't specified don't consider this addon valid
     * @return true if the addon is parsed and valid
     */
    get isValid(): boolean;
    get isInstalled(): boolean;
    get isEME(): boolean;
    get isOpenH264(): boolean;
    /**
     * @return true if the addon has been previously installed and this is
     * a new version, if this is a fresh install return false
     */
    get isUpdate(): any;
}
/**
 * Constructs a GMPExtractor object which is used to extract a GMP zip
 * into the specified location.
 * @param zipPath The path on disk of the zip file to extract
 * @param relativePath The relative path components inside the profile directory
 *                     to extract the zip to.
 */
export function GMPExtractor(zipPath: any, relativeInstallPath: any): void;
export class GMPExtractor {
    /**
     * Constructs a GMPExtractor object which is used to extract a GMP zip
     * into the specified location.
     * @param zipPath The path on disk of the zip file to extract
     * @param relativePath The relative path components inside the profile directory
     *                     to extract the zip to.
     */
    constructor(zipPath: any, relativeInstallPath: any);
    zipPath: any;
    relativeInstallPath: any;
    /**
     * Installs the this.zipPath contents into the directory used to store GMP
     * addons for the current platform.
     *
     * @return a promise which will be resolved or rejected
     *         See GMPInstallManager.installAddon for resolve/rejected info
     */
    install(): any;
    _deferred: any;
}
/**
 * Constructs an object which downloads and initiates an install of
 * the specified GMPAddon object.
 * @param gmpAddon The addon to install.
 */
export function GMPDownloader(gmpAddon: any): void;
export class GMPDownloader {
    /**
     * Constructs an object which downloads and initiates an install of
     * the specified GMPAddon object.
     * @param gmpAddon The addon to install.
     */
    constructor(gmpAddon: any);
    _gmpAddon: any;
    /**
     * Starts the download process for an addon.
     * @return a promise which will be resolved or rejected
     *         See GMPInstallManager.installAddon for resolve/rejected info
     */
    start(): any;
}
