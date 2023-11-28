/**
 * Represents a KeyBundle associated with a collection.
 *
 * This is just a KeyBundle with a collection attached.
 */
export function BulkKeyBundle(collection: any): void;
export class BulkKeyBundle {
    /**
     * Represents a KeyBundle associated with a collection.
     *
     * This is just a KeyBundle with a collection attached.
     */
    constructor(collection: any);
    _collection: any;
    get collection(): any;
    set keyPair(value: any[]);
    /**
     * Obtain the key pair in this key bundle.
     *
     * The returned keys are represented as raw byte strings.
     */
    get keyPair(): any[];
    encryptionKey: any;
    hmacKey: any;
    set keyPairB64(value: any[]);
    get keyPairB64(): any[];
}
export namespace BulkKeyBundle {
    function fromHexKey(hexKey: any): BulkKeyBundle;
    function fromJWK(jwk: any): BulkKeyBundle;
}
