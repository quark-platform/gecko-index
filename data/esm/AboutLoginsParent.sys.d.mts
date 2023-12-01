export class AboutLoginsParent extends JSWindowActorParent {
    receiveMessage(message: any): Promise<void>;
    openFilePickerDialog(title: any, okButtonLabel: any, appendFilters: any, ownerGlobal: any): Promise<any>;
    #private;
}
export const _AboutLogins: AboutLoginsInternal;
declare class AboutLoginsInternal {
    subscribers: WeakSet<object>;
    authExpirationTime: number;
    observe(subject: any, topic: any, type: any): Promise<void>;
    getAllLogins(): Promise<any>;
    sendAllLoginRelatedObjects(logins: any, browsingContext: any): Promise<void>;
    getSyncState(): {
        loggedIn: boolean;
        email: any;
        avatarURL: any;
        fxAccountsEnabled: any;
        passwordSyncEnabled: any;
    };
    onPasswordSyncEnabledPreferenceChange(data: any, previous: any, latest: any): void;
    addObservers(): void;
    #private;
}
export {};
