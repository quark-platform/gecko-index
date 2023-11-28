export class GeckoViewPermissionParent {
    _appPermissions: {};
    getAppPermissions(aPermissions: any): Promise<any>;
    addCameraPermission(): any;
    receiveMessage(aMessage: any): any;
}
