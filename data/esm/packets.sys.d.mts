/**
 * A generic Packet processing object (extended by two subtypes below).
 *
 * @class
 */
export function Packet(transport: any): void;
export class Packet {
    /**
     * A generic Packet processing object (extended by two subtypes below).
     *
     * @class
     */
    constructor(transport: any);
    _transport: any;
    _length: number;
    set length(length: any);
    get length(): any;
    destroy(): void;
}
export namespace Packet {
    /**
     * Attempt to initialize a new Packet based on the incoming packet header
     * we've received so far.  We try each of the types in succession, trying
     * JSON packets first since they are much more common.
     *
     * @param {string} header
     *     Packet header string to attempt parsing.
     * @param {DebuggerTransport} transport
     *     Transport instance that will own the packet.
     *
     * @returns {Packet}
     *     Parsed packet of the matching type, or null if no types matched.
     */
    function fromHeader(header: string, transport: DebuggerTransport): Packet;
}
/**
 * With a JSON packet (the typical packet type sent via the transport),
 * data is transferred as a JSON packet serialized into a string,
 * with the string length prepended to the packet, followed by a colon
 * ([length]:[packet]). The contents of the JSON packet are specified in
 * the Remote Debugging Protocol specification.
 *
 * @param {DebuggerTransport} transport
 *     Transport instance that will own the packet.
 */
export function JSONPacket(transport: DebuggerTransport): void;
export class JSONPacket {
    /**
     * With a JSON packet (the typical packet type sent via the transport),
     * data is transferred as a JSON packet serialized into a string,
     * with the string length prepended to the packet, followed by a colon
     * ([length]:[packet]). The contents of the JSON packet are specified in
     * the Remote Debugging Protocol specification.
     *
     * @param {DebuggerTransport} transport
     *     Transport instance that will own the packet.
     */
    constructor(transport: DebuggerTransport);
    _data: string;
    _done: boolean;
    set object(object: any);
    get object(): any;
    read(stream: any, scriptableStream: any): void;
    _object: any;
    _readData(stream: any, scriptableStream: any): void;
    write(stream: any): void;
    _outgoing: any;
    get done(): boolean;
    toString(): string;
}
export namespace JSONPacket {
    /**
     * Attempt to initialize a new JSONPacket based on the incoming packet
     * header we've received so far.
     *
     * @param {string} header
     *     Packet header string to attempt parsing.
     * @param {DebuggerTransport} transport
     *     Transport instance that will own the packet.
     *
     * @returns {JSONPacket}
     *     Parsed packet, or null if it's not a match.
     */
    function fromHeader(header: string, transport: DebuggerTransport): JSONPacket;
    let HEADER_PATTERN: RegExp;
}
/**
 * With a bulk packet, data is transferred by temporarily handing over
 * the transport's input or output stream to the application layer for
 * writing data directly.  This can be much faster for large data sets,
 * and avoids various stages of copies and data duplication inherent in
 * the JSON packet type.  The bulk packet looks like:
 *
 *     bulk [actor] [type] [length]:[data]
 *
 * The interpretation of the data portion depends on the kind of actor and
 * the packet's type.  See the Remote Debugging Protocol Stream Transport
 * spec for more details.
 *
 * @param {DebuggerTransport} transport
 *     Transport instance that will own the packet.
 */
export function BulkPacket(transport: DebuggerTransport): void;
export class BulkPacket {
    /**
     * With a bulk packet, data is transferred by temporarily handing over
     * the transport's input or output stream to the application layer for
     * writing data directly.  This can be much faster for large data sets,
     * and avoids various stages of copies and data duplication inherent in
     * the JSON packet type.  The bulk packet looks like:
     *
     *     bulk [actor] [type] [length]:[data]
     *
     * The interpretation of the data portion depends on the kind of actor and
     * the packet's type.  See the Remote Debugging Protocol Stream Transport
     * spec for more details.
     *
     * @param {DebuggerTransport} transport
     *     Transport instance that will own the packet.
     */
    constructor(transport: DebuggerTransport);
    _done: boolean;
    _readyForWriting: {
        promise: Promise<any>;
    };
    read: (stream: any) => void;
    write: (stream: any) => void;
    _outgoingHeader: any;
    get streamReadyForWriting(): Promise<any>;
    set header(header: {
        actor: any;
        type: any;
        length: any;
    });
    get header(): {
        actor: any;
        type: any;
        length: any;
    };
    get done(): boolean;
    toString(): string;
}
export namespace BulkPacket {
    /**
     * Attempt to initialize a new BulkPacket based on the incoming packet
     * header we've received so far.
     *
     * @param {string} header
     *     Packet header string to attempt parsing.
     * @param {DebuggerTransport} transport
     *     Transport instance that will own the packet.
     *
     * @returns {BulkPacket}
     *     Parsed packet, or null if it's not a match.
     */
    export function fromHeader(header: string, transport: DebuggerTransport): BulkPacket;
    let HEADER_PATTERN_1: RegExp;
    export { HEADER_PATTERN_1 as HEADER_PATTERN };
}
/**
 * RawPacket is used to test the transport's error handling of malformed
 * packets, by writing data directly onto the stream.
 *
 * @param {DebuggerTransport} transport
 *     The transport instance that will own the packet.
 * @param {string} data
 *     The raw string to send out onto the stream.
 */
export function RawPacket(transport: DebuggerTransport, data: string): void;
export class RawPacket {
    /**
     * RawPacket is used to test the transport's error handling of malformed
     * packets, by writing data directly onto the stream.
     *
     * @param {DebuggerTransport} transport
     *     The transport instance that will own the packet.
     * @param {string} data
     *     The raw string to send out onto the stream.
     */
    constructor(transport: DebuggerTransport, data: string);
    _data: string;
    length: number;
    _done: boolean;
    read(): never;
    write(stream: any): void;
    get done(): boolean;
}
