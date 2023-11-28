export function ContentAreaDropListener(): void;
export class ContentAreaDropListener {
    classID: any;
    QueryInterface: any;
    _addLink(links: any, url: any, name: any, type: any): void;
    _addLinksFromItem(links: any, dt: any, i: any): void;
    _getDropLinks(dt: any): any[];
    _validateURI(dataTransfer: any, uriString: any, disallowInherit: any, triggeringPrincipal: any): any;
    _getTriggeringPrincipalFromDataTransfer(aDataTransfer: any, fallbackToSystemPrincipal: any): any;
    getTriggeringPrincipal(aEvent: any): any;
    getCsp(aEvent: any): any;
    canDropLink(aEvent: any, aAllowSameDocument: any): boolean;
    dropLinks(aEvent: any, aDisallowInherit: any): any[];
    validateURIsForDrop(aEvent: any, aURIs: any, aDisallowInherit: any): void;
    queryLinks(aDataTransfer: any): any[];
    _eventTargetIsDisabled(aEvent: any): any;
}
