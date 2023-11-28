export class Emulation {
    destructor(): void;
    /**
     * Overrides the values of device screen dimensions.
     *
     * Values as modified are:
     *   - window.screen.width
     *   - window.screen.height
     *   - window.innerWidth
     *   - window.innerHeight
     *   - "device-width"/"device-height"-related CSS media query results
     *
     * @param {object} options
     * @param {number} options.width
     *     Overriding width value in pixels. 0 disables the override.
     * @param {number} options.height
     *     Overriding height value in pixels. 0 disables the override.
     * @param {number} options.deviceScaleFactor
     *     Overriding device scale factor value. 0 disables the override.
     * @param {number} options.mobile [not supported]
     *     Whether to emulate a mobile device. This includes viewport meta tag,
     *     overlay scrollbars, text autosizing and more.
     * @param {number} options.screenOrientation
     *     Screen orientation override [not supported]
     */
    setDeviceMetricsOverride(options?: {
        width: number;
        height: number;
        deviceScaleFactor: number;
        mobile: number;
        screenOrientation: number;
    }): Promise<void>;
    /**
     * Enables touch on platforms which do not support them.
     *
     * @param {object} options
     * @param {boolean} options.enabled
     *     Whether the touch event emulation should be enabled.
     * @param {number=} options.maxTouchPoints [not yet supported]
     *     Maximum touch points supported. Defaults to one.
     */
    setTouchEmulationEnabled(options?: {
        enabled: boolean;
        maxTouchPoints?: number | undefined;
    }): Promise<void>;
    /**
     * Allows overriding user agent with the given string.
     *
     * @param {object} options
     * @param {string} options.userAgent
     *     User agent to use.
     * @param {string=} options.acceptLanguage [not yet supported]
     *     Browser langugage to emulate.
     * @param {string=} options.platform
     *     The platform navigator.platform should return.
     */
    setUserAgentOverride(options?: {
        userAgent: string;
        acceptLanguage?: string | undefined;
        platform?: string | undefined;
    }): Promise<void>;
    _isValidHTTPRequestHeaderValue(value: any): boolean;
}
