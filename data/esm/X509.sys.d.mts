export namespace X509 {
    export { Certificate };
}
declare class Certificate extends DecodedDER {
    _tbsCertificate: TBSCertificate;
    _signatureAlgorithm: AlgorithmIdentifier;
    _signatureValue: any[];
    get tbsCertificate(): TBSCertificate;
    get signatureAlgorithm(): AlgorithmIdentifier;
    get signatureValue(): any[];
}
/**
 * Class that serves as an abstract base class for more specific classes that
 * represent datatypes from RFC 5280 and others. Given an array of bytes
 * representing the DER encoding of such types, this framework simplifies the
 * process of making a new DER object, attempting to parse the given bytes, and
 * catching and stashing thrown exceptions. Subclasses are to implement
 * parseOverride, which should read from this._der to fill out the structure's
 * values.
 */
declare class DecodedDER {
    _der: any;
    _error: any;
    /**
     * Returns the first exception encountered when decoding or null if none has
     * been encountered.
     *
     * @returns {Error} the first exception encountered when decoding or null
     */
    get error(): Error;
    /**
     * Does the actual work of parsing the data. To be overridden by subclasses.
     * If an implementation of parseOverride throws an exception, parse will catch
     * that exception and stash it in the error property. This enables parent
     * levels in a nested decoding hierarchy to continue to decode as much as
     * possible.
     */
    parseOverride(): void;
    /**
     * Public interface to be called to parse all data. Calls parseOverride inside
     * a try/catch block. If an exception is thrown, stashes the error, which can
     * be obtained via the error getter (above).
     *
     * @param {number[]} bytes encoded DER to be decoded
     */
    parse(bytes: number[]): void;
}
declare class TBSCertificate extends DecodedDER {
    _version: any;
    _serialNumber: any[];
    _signature: AlgorithmIdentifier;
    _issuer: Name;
    _validity: Validity;
    _subject: Name;
    _subjectPublicKeyInfo: SubjectPublicKeyInfo;
    _extensions: any[];
    get version(): any;
    get serialNumber(): any[];
    get signature(): AlgorithmIdentifier;
    get issuer(): Name;
    get validity(): Validity;
    get subject(): Name;
    get subjectPublicKeyInfo(): SubjectPublicKeyInfo;
    get extensions(): any[];
}
declare class AlgorithmIdentifier extends DecodedDER {
    _algorithm: OID;
    _parameters: OID;
    get algorithm(): OID;
    get parameters(): OID;
}
declare class Name extends DecodedDER {
    _rdns: any[];
    get rdns(): any[];
}
declare class Validity extends DecodedDER {
    _notBefore: Time;
    _notAfter: Time;
    get notBefore(): Time;
    get notAfter(): Time;
}
declare class SubjectPublicKeyInfo extends DecodedDER {
    _algorithm: AlgorithmIdentifier;
    _subjectPublicKey: any;
    get algorithm(): AlgorithmIdentifier;
    get subjectPublicKey(): any;
}
/** Class representing an ASN.1 OBJECT IDENTIFIER */
declare class OID {
    /**
     * @param {number[]} bytes the encoded contents of the OBJECT IDENTIFIER
     *                   (not including the ASN.1 tag or length bytes)
     */
    constructor(bytes: number[]);
    _values: number[];
}
declare class Time extends DecodedDER {
    _type: any;
    _time: Date;
    get time(): Date;
    /**
     * Takes a byte that is supposed to be in the ASCII range for "0" to "9".
     * Validates the range and then converts it to the range 0 to 9.
     *
     * @param {number} d the digit in question (as ASCII in the range ["0", "9"])
     * @returns {number} the numerical value of the digit (in the range [0, 9])
     */
    _validateDigit(d: number): number;
}
export {};
