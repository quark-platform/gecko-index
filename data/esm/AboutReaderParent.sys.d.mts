export class AboutReaderParent {
    static addMessageListener(name: any, listener: any): void;
    static removeMessageListener(name: any, listener: any): void;
    static broadcastAsyncMessage(name: any, data: any): void;
    static updateReaderButton(browser: any): void;
    static forceShowReaderIcon(browser: any): void;
    static buttonClick(event: any): void;
    static toggleReaderMode(event: any): void;
    didDestroy(): void;
    isReaderMode(): any;
    callListeners(message: any): void;
    receiveMessage(message: any): Promise<any>;
    updateReaderButton(browser: any): void;
    hasReaderModeEntryAtOffset(url: any, offset: any): boolean;
    enterReaderMode(url: any): void;
    leaveReaderMode(): void;
    /**
     * Gets an article for a given URL. This method will download and parse a document.
     *
     * @param url The article URL.
     * @param browser The browser where the article is currently loaded.
     * @return {Promise}
     * @resolves JS object representing the article, or null if no article is found.
     */
    _getArticle(url: any, browser: any): Promise<any>;
}
