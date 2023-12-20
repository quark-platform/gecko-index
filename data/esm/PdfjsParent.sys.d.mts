export class PdfjsParent extends JSWindowActorParent {
    _boundToFindbar: any;
    _findFailedString: any;
    didDestroy(): void;
    receiveMessage(aMsg: any): void;
    get browser(): any;
    _saveURL(aMsg: any): void;
    _updateControlState(aMsg: any): void;
    _updateMatchesCount(aMsg: any): void;
    _requestMatchesCount(data: any): {
        current: any;
        total: any;
        limit: any;
    } | {
        current: number;
        total: number;
    };
    handleEvent(aEvent: any): void;
    _addEventListener(): void;
    /**
     * Either hook up all the find event listeners if a findbar exists,
     * or listen for a find bar being created and hook up event listeners
     * when it does get created.
     */
    _hookupEventListeners(aBrowser: any): boolean;
    _removeEventListener(): void;
}
