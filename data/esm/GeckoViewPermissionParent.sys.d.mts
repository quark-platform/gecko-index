/// <reference types="gecko-types" />
export class GeckoViewPermissionParent extends GeckoViewActorParent {
    _appPermissions: {};
    getAppPermissions(aPermissions: any): Promise<any>;
    addCameraPermission(): any;
    receiveMessage(aMessage: any): any;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
