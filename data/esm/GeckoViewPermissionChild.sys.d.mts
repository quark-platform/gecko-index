/// <reference types="gecko-types" />
export class GeckoViewPermissionChild extends GeckoViewActorChild {
    getMediaPermission(aPermission: any): any;
    addCameraPermission(): any;
    getAppPermissions(aPermissions: any): any;
    mediaRecordingStatusChanged(aDevices: any): any;
    promptPermission(aRequest: any): Promise<{
        allow: boolean;
        permission?: undefined;
    } | {
        allow: true;
        permission: {
            "storage-access": string;
        };
    }>;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
