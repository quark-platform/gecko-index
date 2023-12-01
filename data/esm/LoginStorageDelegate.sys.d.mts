export class LoginStorageDelegate {
    _createMessage({ dismissed, autoSavedLoginGuid }: {
        dismissed: any;
        autoSavedLoginGuid: any;
    }, aLogins: any): {
        type: string;
        hint: number;
        logins: any;
    };
    promptToSavePassword(aBrowser: any, aLogin: any, dismissed?: boolean, notifySaved?: boolean): {
        dismiss(): void;
    };
    promptToChangePassword(aBrowser: any, aOldLogin: any, aNewLogin: any, dismissed?: boolean, notifySaved?: boolean, autoSavedLoginGuid?: string): {
        dismiss(): void;
    };
    promptToChangePasswordWithUsernames(aBrowser: any, aLogins: any, aNewLogin: any): void;
    classID: unknown;
    QueryInterface: MozQueryInterface;
}
