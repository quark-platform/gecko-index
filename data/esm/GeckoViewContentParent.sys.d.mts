export class GeckoViewContentParent {
    collectState(): Promise<any>;
    containsFormData(): Promise<any>;
    restoreState({ history, switchId, formdata, scrolldata }: {
        history: any;
        switchId: any;
        formdata: any;
        scrolldata: any;
    }): any;
}
