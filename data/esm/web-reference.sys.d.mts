/**
 * A web reference is an abstraction used to identify an element when
 * it is transported via the protocol, between remote- and local ends.
 *
 * In Marionette this abstraction can represent DOM elements,
 * WindowProxies, and XUL elements.
 */
export class WebReference {
    /**
     * Returns a new {@link WebReference} reference for a DOM or XUL element,
     * <code>WindowProxy</code>, or <code>ShadowRoot</code>.
     *
     * @param {(Element|ShadowRoot|WindowProxy|MockXULElement)} node
     *     Node to construct a web element reference for.
     * @param {string=} uuid
     *     Optional unique identifier of the WebReference if already known.
     *     If not defined a new unique identifier will be created.
     *
     * @returns {WebReference}
     *     Web reference for <var>node</var>.
     *
     * @throws {InvalidArgumentError}
     *     If <var>node</var> is neither a <code>WindowProxy</code>,
     *     DOM or XUL element, or <code>ShadowRoot</code>.
     */
    static from(node: (Element | ShadowRoot | WindowProxy | MockXULElement), uuid?: string | undefined): WebReference;
    /**
     * Unmarshals a JSON Object to one of {@link ShadowRoot}, {@link WebElement},
     * {@link WebFrame}, or {@link WebWindow}.
     *
     * @param {Object<string, string>} json
     *     Web reference, which is supposed to be a JSON Object
     *     where the key is one of the {@link WebReference} concrete
     *     classes' UUID identifiers.
     *
     * @returns {WebReference}
     *     Web reference for the JSON object.
     *
     * @throws {InvalidArgumentError}
     *     If <var>json</var> is not a web reference.
     */
    static fromJSON(json: {
        [x: string]: string;
    }): WebReference;
    /**
     * Checks if <var>obj<var> is a {@link WebReference} reference.
     *
     * @param {Object<string, string>} obj
     *     Object that represents a {@link WebReference}.
     *
     * @returns {boolean}
     *     True if <var>obj</var> is a {@link WebReference}, false otherwise.
     */
    static isReference(obj: {
        [x: string]: string;
    }): boolean;
    /**
     * @param {string} uuid
     *     Identifier that must be unique across all browsing contexts
     *     for the contract to be upheld.
     */
    constructor(uuid: string);
    uuid: any;
    /**
     * Performs an equality check between this web element and
     * <var>other</var>.
     *
     * @param {WebReference} other
     *     Web element to compare with this.
     *
     * @returns {boolean}
     *     True if this and <var>other</var> are the same.  False
     *     otherwise.
     */
    is(other: WebReference): boolean;
    toString(): string;
}
/**
 * Shadow Root elements are represented as shadow root references when they are
 * transported over the wire protocol
 */
export class ShadowRoot extends WebReference {
    static fromJSON(json: any): ShadowRoot;
    /**
     * Constructs a {@link ShadowRoot} from a string <var>uuid</var>.
     *
     * This whole function is a workaround for the fact that clients
     * to Marionette occasionally pass <code>{id: <uuid>}</code> JSON
     * Objects instead of shadow root representations.
     *
     * @param {string} uuid
     *     UUID to be associated with the web reference.
     *
     * @returns {ShadowRoot}
     *     The shadow root reference.
     *
     * @throws {InvalidArgumentError}
     *     If <var>uuid</var> is not a string.
     */
    static fromUUID(uuid: string): ShadowRoot;
    toJSON(): {
        [x: string]: any;
    };
}
export namespace ShadowRoot {
    let Identifier: string;
}
/**
 * DOM elements are represented as web elements when they are
 * transported over the wire protocol.
 */
export class WebElement extends WebReference {
    static fromJSON(json: any): WebElement;
    /**
     * Constructs a {@link WebElement} from a string <var>uuid</var>.
     *
     * This whole function is a workaround for the fact that clients
     * to Marionette occasionally pass <code>{id: <uuid>}</code> JSON
     * Objects instead of web element representations.
     *
     * @param {string} uuid
     *     UUID to be associated with the web reference.
     *
     * @returns {WebElement}
     *     The web element reference.
     *
     * @throws {InvalidArgumentError}
     *     If <var>uuid</var> is not a string.
     */
    static fromUUID(uuid: string): WebElement;
    toJSON(): {
        [x: string]: any;
    };
}
export namespace WebElement {
    let Identifier_1: string;
    export { Identifier_1 as Identifier };
}
/**
 * Nested browsing contexts, such as the <code>WindowProxy</code>
 * associated with <tt>&lt;frame&gt;</tt> and <tt>&lt;iframe&gt;</tt>,
 * are represented as web frames over the wire protocol.
 */
export class WebFrame extends WebReference {
    static fromJSON(json: any): WebFrame;
    toJSON(): {
        [x: string]: any;
    };
}
export namespace WebFrame {
    let Identifier_2: string;
    export { Identifier_2 as Identifier };
}
/**
 * Top-level browsing contexts, such as <code>WindowProxy</code>
 * whose <code>opener</code> is null, are represented as web windows
 * over the wire protocol.
 */
export class WebWindow extends WebReference {
    static fromJSON(json: any): WebWindow;
    toJSON(): {
        [x: string]: any;
    };
}
export namespace WebWindow {
    let Identifier_3: string;
    export { Identifier_3 as Identifier };
}
