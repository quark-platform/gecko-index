export function nsLoginInfo(): void;
export class nsLoginInfo {
    classID: any;
    QueryInterface: any;
    origin: null;
    formActionOrigin: null;
    httpRealm: null;
    username: null;
    password: null;
    usernameField: null;
    passwordField: null;
    unknownFields: null;
    everSynced: boolean;
    syncCounter: number;
    get displayOrigin(): any;
    /**
     * @deprecated Use `origin` instead.
     */
    get hostname(): any;
    /**
     * @deprecated Use `formActionOrigin` instead.
     */
    get formSubmitURL(): any;
    init(aOrigin: any, aFormActionOrigin: any, aHttpRealm: any, aUsername: any, aPassword: any, aUsernameField?: string, aPasswordField?: string): void;
    matches(aLogin: any, ignorePassword: any): any;
    equals(aLogin: any): boolean;
    clone(): any;
    guid: null;
    timeCreated: null;
    timeLastUsed: null;
    timePasswordChanged: null;
    timesUsed: null;
}
