export class RemoteAgentError extends Error {
    static format(e: any, { stack }?: {
        stack?: boolean;
    }): any;
    /**
     * Takes a serialised CDP error and reconstructs it
     * as a RemoteAgentError.
     *
     * The error must be of this form:
     *
     *     {"message": "TypeError: foo is not a function\n
     *     execute@chrome://remote/content/cdp/sessions/Session.jsm:73:39\n
     *     onMessage@chrome://remote/content/cdp/sessions/TabSession.jsm:65:20"}
     *
     * This approach has the notable deficiency that it cannot deal
     * with causes to errors because of the unstructured nature of CDP
     * errors.  A possible future improvement would be to extend the
     * error serialisation to include discrete fields for each data
     * property.
     *
     * @param {object} json
     *     CDP error encoded as a JSON object, which must have a
     *     "message" field, where the first line will make out the error
     *     message and the subsequent lines the stacktrace.
     *
     * @returns {RemoteAgentError}
     */
    static fromJSON(json: object): RemoteAgentError;
    constructor(message?: string, cause?: any);
    cause: any;
    notify(): void;
    toString({ stack }?: {
        stack?: boolean;
    }): any;
}
/**
 * A fatal error that it is not possible to recover from
 * or send back to the client.
 *
 * Constructing this error will force the application to quit.
 */
export class FatalError extends RemoteAgentError {
    constructor(...args: any[]);
    quit(mode?: 3): void;
}
/** When an operation is not yet implemented. */
export class UnsupportedError extends RemoteAgentError {
}
/** The requested remote method does not exist. */
export class UnknownMethodError extends RemoteAgentError {
    constructor(domain: any, command?: any);
}
