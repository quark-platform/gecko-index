export class ContextMenuChild {
    static getTarget(browsingContext: any, message: any, key: any): any;
    static getLastTarget(browsingContext: any): any;
    target: any;
    context: any;
    lastMenuTarget: {
        targetRef: any;
        timeStamp: any;
    };
    receiveMessage(message: any): any;
    /**
     * Returns the event target of the context menu, using a locally stored
     * reference if possible. If not, and aMessage.objects is defined,
     * aMessage.objects[aKey] is returned. Otherwise null.
     * @param  {Object} aMessage Message with a objects property
     * @param  {String} aKey     Key for the target on aMessage.objects
     * @return {Object}          Context menu target
     */
    getTarget(aMessage: any, aKey?: string): any;
    _isXULTextLinkLabel(aNode: any): any;
    _getLinkURL(): any;
    _getLinkURI(): any;
    _getLinkText(): string;
    _getLinkProtocol(): any;
    _isLinkSaveable(aLink: any): boolean;
    _gatherTextUnder(root: any): string;
    _getComputedURL(aElem: any, aProp: any): any;
    _makeURLAbsolute(aBase: any, aUrl: any): any;
    _isProprietaryDRM(): boolean;
    _isMediaURLReusable(aURL: any): any;
    _isTargetATextBox(node: any): any;
    /**
     * Check if we are in the parent process and the current iframe is the RDM iframe.
     */
    _isTargetRDMFrame(node: any): any;
    _isSpellCheckEnabled(aNode: any): any;
    _disableSetDesktopBackground(aTarget: any): boolean;
    handleEvent(aEvent: any): Promise<void>;
    /**
     * Some things are not serializable, so we either have to only send
     * their needed data or regenerate them in nsContextMenu.js
     * - target and target.ownerDocument
     * - link
     * - linkURI
     */
    _cleanContext(aEvent: any): void;
    _setContext(aEvent: any): void;
    /**
     * Sets up the parts of the context menu for when when nodes have no children.
     *
     * @param {Integer} editFlags The edit flags for the node. See SpellCheckHelper
     *                            for the details.
     */
    _setContextForNodesNoChildren(editFlags: Integer): void;
    /**
     * Sets up the parts of the context menu for when when nodes have children.
     *
     * @param {Integer} editFlags The edit flags for the node. See SpellCheckHelper
     *                            for the details.
     */
    _setContextForNodesWithChildren(editFlags: Integer): void;
    _destructionObservers: Set<any>;
    registerDestructionObserver(obj: any): void;
    unregisterDestructionObserver(obj: any): void;
    didDestroy(): void;
}
