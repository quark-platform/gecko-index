/**
 * Inherits from JSONFile and handles serialization of login-related data and
 * persistence into a file.
 *
 * @param aPath
 *        String containing the file path where data should be saved.
 */
export function LoginStore(aPath: any, aBackupPath?: string): void;
export class LoginStore {
    /**
     * Inherits from JSONFile and handles serialization of login-related data and
     * persistence into a file.
     *
     * @param aPath
     *        String containing the file path where data should be saved.
     */
    constructor(aPath: any, aBackupPath?: string);
    _save(): Promise<void>;
    /**
     * Delete logins backup file if the last saved login was removed using
     * removeLogin() or if all logins were removed at once using removeAllUserFacingLogins().
     * Note that if the user has a fxa key stored as a login, we just update the
     * backup to only store the key when the last saved user facing login is removed.
     */
    _backupHandler(): Promise<void>;
    /**
     * Synchronously work on the data just loaded into memory.
     */
    _dataPostProcessor(data: any): any;
}
