export class FormHistoryParent {
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): Promise<any>;
    get formOrigin(): any;
    getRootBrowser(): any;
    #private;
}
