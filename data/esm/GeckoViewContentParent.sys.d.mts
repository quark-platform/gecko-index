/// <reference types="gecko-types" />
export class GeckoViewContentParent extends GeckoViewActorParent {
    collectState(): Promise<any>;
    containsFormData(): Promise<any>;
    restoreState({ history, switchId, formdata, scrolldata }: {
        history: any;
        switchId: any;
        formdata: any;
        scrolldata: any;
    }): Promise<undefined>;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
