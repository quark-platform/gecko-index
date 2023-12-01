export function amContentHandler(): void;
export class amContentHandler {
    /**
     * Handles a new request for an application/x-xpinstall file.
     *
     * @param  aMimetype
     *         The mimetype of the file
     * @param  aContext
     *         The context passed to nsIChannel.asyncOpen
     * @param  aRequest
     *         The nsIRequest dealing with the content
     */
    handleContent(aMimetype: any, aContext: any, aRequest: any): void;
    classID: unknown;
    QueryInterface: MozQueryInterface;
    log(aMsg: any): void;
}
