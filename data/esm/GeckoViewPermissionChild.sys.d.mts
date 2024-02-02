/// <reference types="gecko-types" />
export class GeckoViewPermissionChild extends GeckoViewActorChild {
    getMediaPermission(aPermission: any): any;
    addCameraPermission(): Promise<any>;
    getAppPermissions(aPermissions: any): Promise<any>;
    mediaRecordingStatusChanged(aDevices: any): void;
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
