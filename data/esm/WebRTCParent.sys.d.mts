export class WebRTCParent extends JSWindowActorParent {
    didDestroy(): void;
    getBrowser(): any;
    receiveMessage(aMessage: any): void;
    updateIndicators(aData: any): void;
    denyRequest(aRequest: any): void;
    denyRequestNoPermission(aRequest: any): void;
    checkOSPermission(camNeeded: any, micNeeded: any, scrNeeded: any): Promise<boolean>;
    checkAndGetOSPermission(devicePermission: any, requestPermissionFunc: any): Promise<boolean>;
    stopRecording(aOuterWindowId: any, aMediaSource: any, aRawId: any): void;
    /**
     * Add a device record to webrtcUI.activePerms, denoting a device as in use.
     * Important to call for permission grace periods to work correctly.
     */
    activateDevicePerm(aOuterWindowId: any, aMediaSource: any, aId: any): void;
    /**
     * Remove a device record from webrtcUI.activePerms, denoting a device as
     * no longer in use by the site. Meaning: gUM requests for this device will
     * no longer be implicitly granted through the webrtcUI.activePerms mechanism.
     *
     * However, if webrtcUI.deviceGracePeriodTimeoutMs is defined, the implicit
     * grant is extended for an additional period of time through SitePermissions.
     */
    deactivateDevicePerm(aOuterWindowId: any, aMediaSource: any, aId: any, aPermissionPrincipal: any): void;
    /**
     * Checks if the principal has sufficient permissions
     * to fulfill the given request. If the request can be
     * fulfilled, a message is sent to the child
     * signaling that WebRTC permissions were given and
     * this function will return true.
     */
    checkRequestAllowed(aRequest: any, aPrincipal: any): boolean;
}
