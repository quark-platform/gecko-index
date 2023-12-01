export namespace PermissionUI {
    export { PermissionPromptForRequest };
    export { GeolocationPermissionPrompt };
    export { XRPermissionPrompt };
    export { DesktopNotificationPermissionPrompt };
    export { PersistentStoragePermissionPrompt };
    export { MIDIPermissionPrompt };
    export { StorageAccessPermissionPrompt };
}
/**
 * A subclass of PermissionPrompt that assumes
 * that this.request is an nsIContentPermissionRequest
 * and fills in some of the required properties on the
 * PermissionPrompt. For callers that are wrapping an
 * nsIContentPermissionRequest, this should be subclassed
 * rather than PermissionPrompt.
 */
declare class PermissionPromptForRequest extends PermissionPrompt {
    get browser(): any;
    allow(choices: any): void;
}
/**
 * Creates a PermissionPrompt for a nsIContentPermissionRequest for
 * the GeoLocation API.
 *
 * @param request (nsIContentPermissionRequest)
 *        The request for a permission from content.
 */
declare class GeolocationPermissionPrompt extends PermissionPromptForRequest {
    constructor(request: any);
    request: any;
    get type(): string;
    get permissionKey(): string;
    get popupOptions(): {
        learnMoreURL: string;
        displayURI: boolean;
        name: any;
    };
    get message(): any;
    get promptActions(): {
        label: any;
        accessKey: any;
        action: any;
    }[];
    allow(...args: any[]): void;
    cancel(...args: any[]): void;
    #private;
}
/**
 * Creates a PermissionPrompt for a nsIContentPermissionRequest for
 * the WebXR API.
 *
 * @param request (nsIContentPermissionRequest)
 *        The request for a permission from content.
 */
declare class XRPermissionPrompt extends PermissionPromptForRequest {
    constructor(request: any);
    request: any;
    get type(): string;
    get permissionKey(): string;
    get popupOptions(): {
        learnMoreURL: string;
        displayURI: boolean;
        name: any;
    };
    get message(): any;
    get promptActions(): {
        label: any;
        accessKey: any;
        action: any;
    }[];
    allow(...args: any[]): void;
    cancel(...args: any[]): void;
    #private;
}
/**
 * Creates a PermissionPrompt for a nsIContentPermissionRequest for
 * the Desktop Notification API.
 *
 * @param request (nsIContentPermissionRequest)
 *        The request for a permission from content.
 * @return {PermissionPrompt} (see documentation in header)
 */
declare class DesktopNotificationPermissionPrompt extends PermissionPromptForRequest {
    constructor(request: any);
    request: any;
    get type(): string;
    get permissionKey(): string;
    get popupOptions(): {
        learnMoreURL: string;
        displayURI: boolean;
        name: any;
    };
    get message(): any;
    get promptActions(): {
        label: any;
        accessKey: any;
        action: any;
        scope: any;
    }[];
    get postPromptActions(): {
        label: any;
        accessKey: any;
        action: any;
    }[];
}
/**
 * Creates a PermissionPrompt for a nsIContentPermissionRequest for
 * the persistent-storage API.
 *
 * @param request (nsIContentPermissionRequest)
 *        The request for a permission from content.
 */
declare class PersistentStoragePermissionPrompt extends PermissionPromptForRequest {
    constructor(request: any);
    request: any;
    get type(): string;
    get permissionKey(): string;
    get popupOptions(): {
        learnMoreURL: string;
        displayURI: boolean;
        name: any;
    };
    get message(): any;
    get promptActions(): ({
        label: any;
        accessKey: any;
        action: 1;
        scope: any;
    } | {
        label: any;
        accessKey: any;
        action: any;
        scope?: undefined;
    })[];
}
/**
 * Creates a PermissionPrompt for a nsIContentPermissionRequest for
 * the WebMIDI API.
 *
 * @param request (nsIContentPermissionRequest)
 *        The request for a permission from content.
 */
declare class MIDIPermissionPrompt extends SitePermsAddonInstallRequest {
    constructor(request: any);
    request: any;
    isSysexPerm: boolean;
    permName: string;
    get type(): string;
    get permissionKey(): string;
    get popupOptions(): {
        displayURI: boolean;
        name: any;
    };
    get message(): any;
    get promptActions(): ({
        label: any;
        accessKey: any;
        action: 1;
    } | {
        label: any;
        accessKey: any;
        action: 2;
    })[];
}
declare class StorageAccessPermissionPrompt extends PermissionPromptForRequest {
    constructor(request: any);
    request: any;
    siteOption: any;
    get type(): string;
    get permissionKey(): string;
    get temporaryPermissionURI(): nsIURIType;
    prettifyHostPort(hostport: any): any;
    get popupOptions(): {
        learnMoreURL: string;
        displayURI: boolean;
        hintText: any;
        escAction: string;
    };
    get message(): any;
    get promptActions(): ({
        label: any;
        accessKey: any;
        action: 1;
        callback(state: any): void;
    } | {
        label: any;
        accessKey: any;
        action: 2;
        callback(state: any): void;
    })[];
    get topLevelPrincipal(): any;
    #private;
}
/**
 * PermissionPrompt should be subclassed by callers that
 * want to display prompts to the user. See each method and property
 * below for guidance on what to override.
 *
 * Note that if you're creating a prompt for an
 * nsIContentPermissionRequest, you'll want to subclass
 * PermissionPromptForRequest instead.
 */
declare class PermissionPrompt {
    /**
     * Returns the associated <xul:browser> for the request. This should
     * work for the e10s and non-e10s case.
     *
     * Subclasses must override this.
     *
     * @return {<xul:browser>}
     */
    get browser(): <xul>() => any;
    /**
     * Returns the nsIPrincipal associated with the request.
     *
     * Subclasses must override this.
     *
     * @return {nsIPrincipal}
     */
    get principal(): nsIPrincipal;
    /**
     * Indicates the type of the permission request from content. This type might
     * be different from the permission key used in the permissions database.
     */
    get type(): any;
    /**
     * If the nsIPermissionManager is being queried and written
     * to for this permission request, set this to the key to be
     * used. If this is undefined, no integration with temporary
     * permissions infrastructure will be provided.
     *
     * Note that if a permission is set, in any follow-up
     * prompting within the expiry window of that permission,
     * the prompt will be skipped and the allow or deny choice
     * will be selected automatically.
     */
    get permissionKey(): any;
    /**
     * If true, user permissions will be read from and written to.
     * When this is false, we still provide integration with
     * infrastructure such as temporary permissions. permissionKey should
     * still return a valid name in those cases for that integration to work.
     */
    get usePermissionManager(): boolean;
    /**
     * Indicates what URI should be used as the scope when using temporary
     * permissions. If undefined, it defaults to the browser.currentURI.
     */
    get temporaryPermissionURI(): any;
    /**
     * These are the options that will be passed to the PopupNotification when it
     * is shown. See the documentation of `PopupNotifications_show` in
     * PopupNotifications.sys.mjs for details.
     *
     * Note that prompt() will automatically set displayURI to
     * be the URI of the requesting pricipal, unless the displayURI is exactly
     * set to false.
     */
    get popupOptions(): {};
    /**
     * If true, automatically denied permission requests will
     * spawn a "post-prompt" that allows the user to correct the
     * automatic denial by giving permanent permission access to
     * the site.
     *
     * Note that if this function returns true, the permissionKey
     * and postPromptActions attributes must be implemented.
     */
    get postPromptEnabled(): boolean;
    /**
     * If true, the prompt will be cancelled automatically unless
     * request.hasValidTransientUserGestureActivation is true.
     */
    get requiresUserInput(): boolean;
    /**
     * PopupNotification requires a unique ID to open the notification.
     * You must return a unique ID string here, for which PopupNotification
     * will then create a <xul:popupnotification> node with the ID
     * "<notificationID>-notification".
     *
     * If there's a custom <xul:popupnotification> you're hoping to show,
     * then you need to make sure its ID has the "-notification" suffix,
     * and then return the prefix here.
     *
     * See PopupNotifications.sys.mjs for more details.
     *
     * @return {string}
     *         The unique ID that will be used to as the
     *         "<unique ID>-notification" ID for the <xul:popupnotification>
     *         to use or create.
     */
    get notificationID(): string;
    /**
     * The ID of the element to anchor the PopupNotification to.
     *
     * @return {string}
     */
    get anchorID(): string;
    /**
     * The message to show to the user in the PopupNotification, see
     * `PopupNotifications_show` in PopupNotifications.sys.mjs.
     *
     * Subclasses must override this.
     *
     * @return {string}
     */
    get message(): string;
    /**
     * Provides the preferred name to use in the permission popups,
     * based on the principal URI (the URI.hostPort for any URI scheme
     * besides the moz-extension one which should default to the
     * extension name).
     */
    getPrincipalName(principal?: nsIPrincipal): any;
    /**
     * This will be called if the request is to be cancelled.
     *
     * Subclasses only need to override this if they provide a
     * permissionKey.
     */
    cancel(): void;
    /**
     * This will be called if the request is to be allowed.
     *
     * Subclasses only need to override this if they provide a
     * permissionKey.
     */
    allow(): void;
    /**
     * The actions that will be displayed in the PopupNotification
     * via a dropdown menu. The first item in this array will be
     * the default selection. Each action is an Object with the
     * following properties:
     *
     *  label (string):
     *    The label that will be displayed for this choice.
     *  accessKey (string):
     *    The access key character that will be used for this choice.
     *  action (SitePermissions state)
     *    The action that will be associated with this choice.
     *    This should be either SitePermissions.ALLOW or SitePermissions.BLOCK.
     *  scope (SitePermissions scope)
     *    The scope of the associated action (e.g. SitePermissions.SCOPE_PERSISTENT)
     *
     *  callback (function, optional)
     *    A callback function that will fire if the user makes this choice, with
     *    a single parameter, state. State is an Object that contains the property
     *    checkboxChecked, which identifies whether the checkbox to remember this
     *    decision was checked.
     */
    get promptActions(): any[];
    /**
     * The actions that will be displayed in the PopupNotification
     * for post-prompt notifications via a dropdown menu.
     * The first item in this array will be the default selection.
     * Each action is an Object with the following properties:
     *
     *  label (string):
     *    The label that will be displayed for this choice.
     *  accessKey (string):
     *    The access key character that will be used for this choice.
     *  action (SitePermissions state)
     *    The action that will be associated with this choice.
     *    This should be either SitePermissions.ALLOW or SitePermissions.BLOCK.
     *    Note that the scope of this action will always be persistent.
     *
     *  callback (function, optional)
     *    A callback function that will fire if the user makes this choice.
     */
    get postPromptActions(): any;
    /**
     * If the prompt will be shown to the user, this callback will
     * be called just before. Subclasses may want to override this
     * in order to, for example, bump a counter Telemetry probe for
     * how often a particular permission request is seen.
     *
     * If this returns false, it cancels the process of showing the prompt.  In
     * that case, it is the responsibility of the onBeforeShow() implementation
     * to ensure that allow() or cancel() are called on the object appropriately.
     */
    onBeforeShow(): boolean;
    /**
     * If the prompt was shown to the user, this callback will be called just
     * after it's been shown.
     */
    onShown(): void;
    /**
     * If the prompt was shown to the user, this callback will be called just
     * after it's been hidden.
     */
    onAfterShow(): void;
    /**
     * Will determine if a prompt should be shown to the user, and if so,
     * will show it.
     *
     * If a permissionKey is defined prompt() might automatically
     * allow or cancel itself based on the user's current
     * permission settings without displaying the prompt.
     *
     * If the permission is not already set and the <xul:browser> that the request
     * is associated with does not belong to a browser window with the
     * PopupNotifications global set, the prompt request is ignored.
     */
    prompt(): void;
    postPrompt(): void;
    #private;
}
/**
 * A subclass of PermissionPromptForRequest that prompts
 * for a Synthetic SitePermsAddon addon type and starts a synthetic
 * addon install flow.
 */
declare class SitePermsAddonInstallRequest extends PermissionPromptForRequest {
    /**
     * Returns an error message that will be printed to the console given a passed Component.Exception.
     * This should be overriden by children classes.
     *
     * @param {Components.Exception} err
     * @returns {String} The error message
     */
    getInstallErrorMessage(err: typeof Components.Exception): string;
}
export {};
