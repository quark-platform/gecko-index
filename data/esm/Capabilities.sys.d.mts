/**
 * Merge WebDriver capabilities.
 *
 * @see https://w3c.github.io/webdriver/#dfn-merging-capabilities
 *
 * @param {object} primary
 *     Required capabilities which need to be merged with <var>secondary</var>.
 * @param {object=} secondary
 *     Secondary capabilities.
 *
 * @returns {object} Merged capabilities.
 *
 * @throws {InvalidArgumentError}
 *     If <var>primary</var> and <var>secondary</var> have the same keys.
 */
export function mergeCapabilities(primary: object, secondary?: object | undefined): object;
/**
 * Validate WebDriver capabilities.
 *
 * @see https://w3c.github.io/webdriver/#dfn-validate-capabilities
 *
 * @param {object} capabilities
 *     Capabilities which need to be validated.
 *
 * @returns {object} Validated capabilities.
 *
 * @throws {InvalidArgumentError}
 *     If <var>capabilities</var> is not an object.
 */
export function validateCapabilities(capabilities: object): object;
/**
 * Process WebDriver capabilities.
 *
 * @see https://w3c.github.io/webdriver/#processing-capabilities
 *
 * @param {object} params
 * @param {object} params.capabilities
 *     Capabilities which need to be processed.
 *
 * @returns {object} Processed capabilities.
 *
 * @throws {InvalidArgumentError}
 *     If <var>capabilities</var> do not satisfy the criteria.
 */
export function processCapabilities(params: {
    capabilities: object;
}): object;
export const WEBDRIVER_CLASSIC_CAPABILITIES: string[];
/** Representation of WebDriver session timeouts. */
export class Timeouts {
    static fromJSON(json: any): Timeouts;
    implicit: number;
    pageLoad: number;
    script: number;
    toString(): string;
    /** Marshals timeout durations to a JSON Object. */
    toJSON(): {
        implicit: number;
        pageLoad: number;
        script: number;
    };
}
/**
 * Enum of page loading strategies.
 */
export type PageLoadStrategy = any;
export namespace PageLoadStrategy {
    let None: string;
    let Eager: string;
    let Normal: string;
}
/** Proxy configuration object representation. */
export class Proxy {
    /**
     * @param {Object<string, ?>} json
     *     JSON Object to unmarshal.
     *
     * @throws {InvalidArgumentError}
     *     When proxy configuration is invalid.
     */
    static fromJSON(json: {
        [x: string]: unknown;
    }): Proxy;
    proxyType: any;
    httpProxy: any;
    httpProxyPort: any;
    noProxy: any;
    sslProxy: any;
    sslProxyPort: any;
    socksProxy: any;
    socksProxyPort: any;
    socksVersion: any;
    proxyAutoconfigUrl: any;
    /**
     * Sets Firefox proxy settings.
     *
     * @returns {boolean}
     *     True if proxy settings were updated as a result of calling this
     *     function, or false indicating that this function acted as
     *     a no-op.
     */
    init(): boolean;
    /**
     * @returns {Object<string, (number | string)>}
     *     JSON serialisation of proxy object.
     */
    toJSON(): {
        [x: string]: (number | string);
    };
    toString(): string;
}
/**
 * Enum of unhandled prompt behavior.
 */
export type UnhandledPromptBehavior = any;
export namespace UnhandledPromptBehavior {
    let Accept: string;
    let AcceptAndNotify: string;
    let Dismiss: string;
    let DismissAndNotify: string;
    let Ignore: string;
}
/** WebDriver session capabilities representation. */
export class Capabilities extends Map<any, any> {
    /**
     * Unmarshal a JSON object representation of WebDriver capabilities.
     *
     * @param {Object<string, *>=} json
     *     WebDriver capabilities.
     *
     * @returns {Capabilities}
     *     Internal representation of WebDriver capabilities.
     */
    static fromJSON(json?: {
        [x: string]: any;
    } | undefined): Capabilities;
    /**
     * Validate WebDriver capability.
     *
     * @param {string} name
     *    The name of capability.
     * @param {string} value
     *    The value of capability.
     *
     * @throws {InvalidArgumentError}
     *   If <var>value</var> doesn't pass validation,
     *   which depends on <var>name</var>.
     *
     * @returns {string}
     *     The validated capability value.
     */
    static validate(name: string, value: string): string;
    /** @class */
    constructor();
    /**
     * @param {string} key
     *     Capability key.
     * @param {(string|number|boolean)} value
     *     JSON-safe capability value.
     */
    set(key: string, value: (string | number | boolean)): this;
    /**
     * JSON serialisation of capabilities object.
     *
     * @returns {Object<string, ?>}
     */
    toJSON(): {
        [x: string]: unknown;
    };
}
