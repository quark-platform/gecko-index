export class WebAPI extends APIObject {
    allInstalls: any[];
    listenerCount: number;
    init(window: any): void;
    getAddonByID(id: any): Promise<any>;
    createInstall(options: any): Promise<any>;
    reportAbuse(id: any): Promise<any>;
    get abuseReportPanelEnabled(): any;
    eventListenerAdded(type: any): void;
    eventListenerRemoved(type: any): void;
    QueryInterface: MozQueryInterface;
    classID: unknown;
}
declare class APIObject {
    init(window: any, broker: any, properties: any): void;
    window: any;
    broker: any;
    /**
     * Helper to implement an asychronous method visible to content, where
     * the method is implemented by sending a message to the parent process
     * and then wrapping the returned object or error in an appropriate object.
     * This helper method ensures that:
     *  - Returned Promise objects are from the content window
     *  - Rejected Promises have Error objects from the content window
     *  - Only non-internal errors are exposed to the caller
     *
     * @param {string} apiRequest The command to invoke in the parent process.
     * @param {array<cloneable>} apiArgs The arguments to include with the
     *                                   request to the parent process.
     * @param {function} resultConvert If provided, a function called with the
     *                                 result from the parent process as an
     *                                 argument.  Used to convert the result
     *                                 into something appropriate for content.
     * @returns {Promise<any>} A Promise suitable for passing directly to content.
     */
    _apiTask(apiRequest: string, apiArgs: array<cloneable>, resultConverter: any): Promise<any>;
}
export {};
