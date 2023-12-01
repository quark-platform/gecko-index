export class PageInfoChild extends JSWindowActorChild {
    receiveMessage(message: any): Promise<{
        metaViewRows: any[][];
        docInfo: {
            title: any;
            location: any;
            referrer: any;
            compatMode: any;
            contentType: any;
            characterSet: any;
            lastModified: any;
            principal: any;
            cookieJarSettings: any;
            documentURIObject: {
                spec: any;
            };
            isContentWindowPrivate: any;
        };
        windowInfo: {
            isTopWindow: boolean;
            hostName: string;
        };
    } | {
        mediaItems: any[];
    } | {
        partitionKey: any;
    }>;
    getPartitionKey(document: any): any;
    getMetaInfo(document: any): any[][];
    getWindowInfo(window: any): {
        isTopWindow: boolean;
        hostName: string;
    };
    getDocumentInfo(document: any): {
        title: any;
        location: any;
        referrer: any;
        compatMode: any;
        contentType: any;
        characterSet: any;
        lastModified: any;
        principal: any;
        cookieJarSettings: any;
        documentURIObject: {
            spec: any;
        };
        isContentWindowPrivate: any;
    };
    /**
     * Returns an array that stores all mediaItems found in the document
     * Calls getMediaItems for all nodes within the constructed tree walker and forms
     * resulting array.
     */
    getDocumentMedia(document: any): Promise<any[]>;
    getMediaItems(document: any, elem: any): any[];
    /**
     * Set up a JSON element object with all the instanceOf and other infomation that
     * makePreview in pageInfo.js uses to figure out how to display the preview.
     */
    serializeElementInfo(document: any, url: any, item: any, isBG: any): {
        imageText: any;
        longDesc: any;
        numFrames: any;
        mimeType: any;
        HTMLLinkElement: any;
        HTMLInputElement: any;
        HTMLImageElement: any;
        HTMLObjectElement: any;
        SVGImageElement: any;
        HTMLVideoElement: any;
        HTMLAudioElement: any;
        naturalWidth: any;
        naturalHeight: any;
        width: any;
        height: any;
        SVGImageElementWidth: any;
        SVGImageElementHeight: any;
        baseURI: any;
    };
    getValueText(node: any): any;
    getAltText(node: any): any;
    stripWS(text: any): any;
}
