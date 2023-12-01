export class ShareDelegate {
    init(aParent: any): void;
    _openerWindow: any;
    get openerWindow(): any;
    share(aTitle: any, aText: any, aUri: any): Promise<void>;
    classID: unknown;
    QueryInterface: MozQueryInterface;
}
