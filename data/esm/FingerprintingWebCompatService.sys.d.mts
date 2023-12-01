/**
 * The object represents a fingerprinting override.
 */
export class FingerprintingOverride {
    constructor(firstPartyDomain: any, thirdPartyDomain: any, overrides: any);
    classID: unknown;
    QueryInterface: MozQueryInterface;
    firstPartyDomain: any;
    thirdPartyDomain: any;
    overrides: any;
}
/**
 * The singleton service that is responsible for the WebCompat of the
 * fingerprinting protection. It gets fingerprinting overrides from remote
 * settings and the local test pref.
 */
export class FingerprintingWebCompatService {
    classId: unknown;
    QueryInterface: MozQueryInterface;
    init(): Promise<void>;
    observe(subject: any, topic: any, prefName: any): void;
    shutdown(): void;
    #private;
}
