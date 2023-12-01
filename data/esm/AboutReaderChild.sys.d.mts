export class AboutReaderChild extends JSWindowActorChild {
    _reader: any;
    _articlePromise: any;
    _isLeavingReaderableReaderMode: boolean;
    didDestroy(): void;
    readerModeHidden(): void;
    receiveMessage(message: any): Promise<void>;
    get isAboutReader(): boolean;
    get isReaderableAboutReader(): boolean;
    handleEvent(aEvent: any): void;
    /**
     * NB: this function will update the state of the reader button asynchronously
     * after the next mozAfterPaint call (assuming reader mode is enabled and
     * this is a suitable document). Calling it on things which won't be
     * painted is not going to work.
     */
    updateReaderButton(forceNonArticle: any): void;
    canDoReadabilityCheck(): boolean;
    cancelPotentialPendingReadabilityCheck(): void;
    scheduleReadabilityCheckPostPaint(forceNonArticle: any): void;
    _pendingReadabilityCheck: any;
    _listenerWindow: any;
    onPaintWhenWaitedFor(forceNonArticle: any, event: any): void;
    performReadabilityCheckNow(forceNonArticle: any): void;
    closeReaderMode(): void;
}
