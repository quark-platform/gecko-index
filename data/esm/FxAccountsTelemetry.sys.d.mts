export class FxAccountsTelemetry {
    constructor(fxai: any);
    _fxai: any;
    recordEvent(object: any, method: any, value: any, extra?: any): void;
    generateUUID(): any;
    generateFlowID(): any;
    _setHashedUID(hashedUID: any): void;
    getSanitizedUID(): any;
    sanitizeDeviceId(deviceId: any): any;
    recordConnection(services: any, how?: any): Promise<void>;
    recordDisconnection(service?: any, how?: any): Promise<void>;
}
