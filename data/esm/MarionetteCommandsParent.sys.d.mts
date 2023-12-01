/**
 * Proxy that will dynamically create MarionetteCommands actors for a dynamically
 * provided browsing context until the method can be fully executed by the
 * JSWindowActor pair.
 *
 * @param {function(): BrowsingContext} browsingContextFn
 *     A function that returns the reference to the browsing context for which
 *     the query should run.
 */
export function getMarionetteCommandsActorProxy(browsingContextFn: () => BrowsingContext): {};
/**
 * Register the MarionetteCommands actor that holds all the commands.
 *
 * @param {string} sessionId
 *     The id of the current WebDriver session.
 */
export function registerCommandsActor(sessionId: string): void;
export function unregisterCommandsActor(): void;
export class MarionetteCommandsParent extends JSWindowActorParent {
    actorCreated(): void;
    _resolveDialogOpened: (value: any) => void;
    dialogOpenedPromise(): Promise<any>;
    sendQuery(name: any, serializedValue: any): Promise<any>;
    notifyDialogOpened(): void;
    clearElement(webEl: any): Promise<any>;
    clickElement(webEl: any, capabilities: any): Promise<any>;
    executeScript(script: any, args: any, opts: any): Promise<any>;
    findElement(strategy: any, selector: any, opts: any): Promise<any>;
    findElements(strategy: any, selector: any, opts: any): Promise<any>;
    getShadowRoot(webEl: any): Promise<any>;
    getActiveElement(): Promise<any>;
    getComputedLabel(webEl: any): Promise<any>;
    getComputedRole(webEl: any): Promise<any>;
    getElementAttribute(webEl: any, name: any): Promise<any>;
    getElementProperty(webEl: any, name: any): Promise<any>;
    getElementRect(webEl: any): Promise<any>;
    getElementTagName(webEl: any): Promise<any>;
    getElementText(webEl: any): Promise<any>;
    getElementValueOfCssProperty(webEl: any, name: any): Promise<any>;
    getPageSource(): Promise<any>;
    isElementDisplayed(webEl: any, capabilities: any): Promise<any>;
    isElementEnabled(webEl: any, capabilities: any): Promise<any>;
    isElementSelected(webEl: any, capabilities: any): Promise<any>;
    sendKeysToElement(webEl: any, text: any, capabilities: any): Promise<any>;
    performActions(actions: any): Promise<any>;
    releaseActions(): Promise<any>;
    switchToFrame(id: any): Promise<{
        browsingContext: any;
    }>;
    switchToParentFrame(): Promise<{
        browsingContext: any;
    }>;
    takeScreenshot(webEl: any, format: any, full: any, scroll: any): Promise<any>;
    #private;
}
