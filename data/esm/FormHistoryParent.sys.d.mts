export class FormHistoryParent extends JSWindowActorParent {
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): Promise<any>;
    get formOrigin(): any;
    getRootBrowser(): any;
    #private;
}
