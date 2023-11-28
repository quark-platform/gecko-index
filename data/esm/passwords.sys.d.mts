/**
 * Password class constructor. Initializes instance properties.
 */
export function Password(props: any): void;
export class Password {
    /**
     * Password class constructor. Initializes instance properties.
     */
    constructor(props: any);
    props: PasswordProps;
    updateProps: PasswordProps;
    /**
     * Create
     *
     * Adds a password entry to the login manager for the password
     * represented by this object's properties. Throws on error.
     *
     * @return the new login guid
     */
    Create(): Promise<any>;
    /**
     * Find
     *
     * Finds a password entry in the login manager, for the password
     * represented by this object's properties.
     *
     * @return the guid of the password if found, otherwise -1
     */
    Find(): Promise<any>;
    /**
     * Update
     *
     * Updates an existing password entry in the login manager with
     * new properties. Throws on error.  The 'old' properties are this
     * object's properties, the 'new' properties are the properties in
     * this object's 'updateProps' object.
     *
     * @return nothing
     */
    Update(): void;
    /**
     * Remove
     *
     * Removes an entry from the login manager for a password which
     * matches this object's properties. Throws on error.
     *
     * @return nothing
     */
    Remove(): void;
}
export function DumpPasswords(): Promise<void>;
/**
 * PasswordProps object; holds password properties.
 */
declare function PasswordProps(props: any): void;
declare class PasswordProps {
    /**
     * PasswordProps object; holds password properties.
     */
    constructor(props: any);
    hostname: any;
    submitURL: any;
    realm: any;
    username: string;
    password: string;
    usernameField: string;
    passwordField: string;
    delete: boolean;
}
export {};
cord: any): any;
    _getLoginFromGUID(guid: any): Promise<any>;
    applyIncoming(record: any): Promise<void>;
    getAllIDs(): Promise<{}>;
    changeItemID(oldID: any, newID: any): Promise<void>;
    itemExists(id: any): Promise<boolean>;
    createRecord(id: any, collection: any): Promise<LoginRec>;
    create(record: any): Promise<void>;
    remove(record: any, { sourceSync }?: {
        sourceSync?: boolean;
    }): Promise<void>;
    update(record: any): Promise<void>;
    wipe(): Promise<void>;
}
declare function PasswordTracker(name: any, engine: any): void;
declare class PasswordTracker {
    constructor(name: any, engine: any);
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
}
export {};
