export class JSONHandler {
    constructor(cdp: any);
    cdp: any;
    routes: {
        "/json/version": {
            handler: any;
        };
        "/json/protocol": {
            handler: any;
        };
        "/json/list": {
            handler: any;
        };
        "/json": {
            handler: any;
        };
        "/json/new": {
            handler: any;
            method: string;
        };
        "/json/activate": {
            handler: any;
            parameter: boolean;
        };
        "/json/close": {
            handler: any;
            parameter: boolean;
        };
    };
    getVersion(): {
        body: {
            Browser: string;
            "Protocol-Version": string;
            "User-Agent": any;
            "V8-Version": string;
            "WebKit-Version": string;
            webSocketDebuggerUrl: any;
        };
    };
    getProtocol(): {
        body: any;
    };
    getTargetList(): {
        body: any[];
    };
    /** HTTP copy of Target.createTarget() */
    newTarget(url: any): Promise<{
        body: any;
    }>;
    /** HTTP copy of Target.activateTarget() */
    activateTarget(targetId: any): Promise<{
        status: any;
        body: string;
        json: boolean;
    } | {
        body: string;
        json: boolean;
        status?: undefined;
    }>;
    /** HTTP copy of Target.closeTarget() */
    closeTarget(targetId: any): Promise<{
        status: any;
        body: string;
        json: boolean;
    } | {
        body: string;
        json: boolean;
        status?: undefined;
    }>;
    handle(request: any, response: any): Promise<any>;
    get QueryInterface(): any;
}
