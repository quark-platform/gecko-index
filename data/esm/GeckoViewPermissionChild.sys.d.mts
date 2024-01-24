/// <reference types="gecko-types" />
export class GeckoViewPermissionChild extends GeckoViewActorChild {
    getMediaPermission(aPermission: any): any;
    addCameraPermission(): any;
    getAppPermissions(aPermissions: any): any;
    mediaRecordingStatusChanged(aDevices: any): any;
    checkIfGrantedByExtensionPermissions(perm: any, aRequest: any): {
        allow: boolean;
        permission?: undefined;
    } | {
        allow: boolean;
        permission: {
            [x: number]: uint32_t;
        };
    };
    promptPermission(aRequest: any): Promise<{
        allow: boolean;
        permission?: undefined;
    } | {
        allow: boolean;
        permission: {
            [x: number]: uint32_t;
        };
    }>;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
