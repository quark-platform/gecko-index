export let Service: typeof PushServiceContent;
/**
 * The content process implementation of `nsIPushService`. This version
 * uses the child message manager to forward calls to the parent process.
 * The parent Push service instance handles the request, and responds with a
 * message containing the result.
 */
declare function PushServiceContent(...args: any[]): any;
declare class PushServiceContent {
    /**
     * The content process implementation of `nsIPushService`. This version
     * uses the child message manager to forward calls to the parent process.
     * The parent Push service instance handles the request, and responds with a
     * message containing the result.
     */
    constructor(...args: any[]);
    _requests: Map<any, any>;
    _requestId: number;
}
export {};
