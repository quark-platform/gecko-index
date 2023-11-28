export class SelectionActionDelegateParent {
    respondTo: any;
    actionId: any;
    get rootActor(): any;
    receiveMessage(aMessage: any): void;
    hideSelectionAction(aRespondTo: any, reason: any): void;
    showSelectionAction(aRespondTo: any, aData: any): void;
    executeSelectionAction(aData: any): void;
}
