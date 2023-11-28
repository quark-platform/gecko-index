export namespace SyncedTabsErrorHandler {
    export function init(): {
        init(): any;
        readonly fxaSignedIn: any;
        getErrorType(): string;
        getFluentStringsForErrorType(type: any): any;
        readonly isPrimaryPasswordLocked: any;
        isSyncReady(): boolean;
        observe(_: any, topic: any, data: any): void;
        ErrorType: Readonly<{
            SYNC_ERROR: "sync-error";
            FXA_ADMIN_DISABLED: "fxa-admin-disabled";
            NETWORK_OFFLINE: "network-offline";
            SYNC_DISCONNECTED: "sync-disconnected";
            PASSWORD_LOCKED: "password-locked";
            SIGNED_OUT: "signed-out";
        }>;
        _errorStateStringMappings: {
            "sync-error": {
                header: string;
                description: string;
                buttonLabel: string;
            };
            "fxa-admin-disabled": {
                header: string;
                description: string;
            };
            "network-offline": {
                header: string;
                description: string;
                buttonLabel: string;
            };
            "sync-disconnected": {
                header: string;
                description: string;
                buttonLabel: string;
            };
            "password-locked": {
                header: string;
                description: string;
                buttonLabel: string;
                link: {
                    label: string;
                    href: string;
                };
            };
            "signed-out": {
                header: string;
                description: string;
                buttonLabel: string;
            };
        };
    };
    export const fxaSignedIn: any;
    export function getErrorType(): string;
    export function getFluentStringsForErrorType(type: any): any;
    export const isPrimaryPasswordLocked: any;
    export function isSyncReady(): boolean;
    export function observe(_: any, topic: any, data: any): void;
    export { ErrorType };
    export let _errorStateStringMappings: {
        "sync-error": {
            header: string;
            description: string;
            buttonLabel: string;
        };
        "fxa-admin-disabled": {
            header: string;
            description: string;
        };
        "network-offline": {
            header: string;
            description: string;
            buttonLabel: string;
        };
        "sync-disconnected": {
            header: string;
            description: string;
            buttonLabel: string;
        };
        "password-locked": {
            header: string;
            description: string;
            buttonLabel: string;
            link: {
                label: string;
                href: string;
            };
        };
        "signed-out": {
            header: string;
            description: string;
            buttonLabel: string;
        };
    };
}
declare const ErrorType: Readonly<{
    SYNC_ERROR: "sync-error";
    FXA_ADMIN_DISABLED: "fxa-admin-disabled";
    NETWORK_OFFLINE: "network-offline";
    SYNC_DISCONNECTED: "sync-disconnected";
    PASSWORD_LOCKED: "password-locked";
    SIGNED_OUT: "signed-out";
}>;
export {};
