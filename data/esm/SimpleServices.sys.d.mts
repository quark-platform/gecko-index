export function AddonLocalizationConverter(): void;
export class AddonLocalizationConverter {
    QueryInterface: any;
    FROM_TYPE: string;
    TO_TYPE: string;
    checkTypes(aFromType: any, aToType: any): void;
    getAddon(aContext: any): any;
    convertToStream(aAddon: any, aString: any): any;
    convert(aStream: any, aFromType: any, aToType: any, aContext: any): any;
    asyncConvertData(aFromType: any, aToType: any, aListener: any, aContext: any): void;
    addon: any;
    listener: any;
    onStartRequest(aRequest: any): void;
    parts: any[];
    decoder: TextDecoder;
    onDataAvailable(aRequest: any, aInputStream: any, aOffset: any, aCount: any): void;
    onStopRequest(aRequest: any, aStatusCode: any): void;
}
export function HttpIndexViewer(): void;
export class HttpIndexViewer {
    QueryInterface: any;
    createInstance(aCommand: any, aChannel: any, aLoadGroup: any, aContentType: any, aContainer: any, aExtraInfo: any, aDocListenerResult: any): any;
}
