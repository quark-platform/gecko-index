export function nsWebHandlerApp(): void;
export class nsWebHandlerApp {
    classDescription: string;
    classID: unknown;
    contractID: string;
    QueryInterface: MozQueryInterface;
    _name: null;
    _detailedDescription: null;
    _uriTemplate: null;
    set name(aName: any);
    get name(): any;
    set detailedDescription(aDesc: any);
    get detailedDescription(): any;
    equals(aHandlerApp: any): boolean;
    launchWithURI(aURI: any, aBrowsingContext: any): void;
    set uriTemplate(aURITemplate: any);
    get uriTemplate(): any;
}
