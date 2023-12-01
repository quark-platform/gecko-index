/**
 * The BrowserElementParent is for performing actions on one or more subframes of
 * a <xul:browser> from the browser element binding.
 */
export class BrowserElementParent extends JSWindowActorParent {
    receiveMessage(message: any): void;
}
