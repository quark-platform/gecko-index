export class GeckoViewPermissionChild {
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
