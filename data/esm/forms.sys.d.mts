/**
 * FormData class constructor
 *
 * Initializes instance properties.
 */
export function FormData(props: any, msSinceEpoch: any): void;
export class FormData {
    /**
     * FormData class constructor
     *
     * Initializes instance properties.
     */
    constructor(props: any, msSinceEpoch: any);
    fieldname: any;
    value: any;
    date: number;
    newvalue: any;
    usSinceEpoch: number;
    /**
     * hours_to_us
     *
     * Converts hours since present to microseconds since epoch.
     *
     * @param hours The number of hours since the present time (e.g., 0 is
     *        'now', and -1 is 1 hour ago)
     * @return the corresponding number of microseconds since the epoch
     */
    hours_to_us(hours: any): number;
    /**
     * Create
     *
     * If this FormData object doesn't exist in the moz_formhistory database,
     * add it.  Throws on error.
     *
     * @return nothing
     */
    Create(): Promise<void>;
    /**
     * Find
     *
     * Attempts to locate an entry in the moz_formhistory database that
     * matches the fieldname and value for this FormData object.
     *
     * @return true if this entry exists in the database, otherwise false
     */
    Find(): Promise<boolean>;
    id: any;
    /**
     * Remove
     *
     * Removes the row represented by this FormData instance from the
     * moz_formhistory database.
     *
     * @return nothing
     */
    Remove(): Promise<void>;
}
 FormTracker(name: any, engine: any): void;
declare class FormTracker {
    constructor(name: any, engine: any);
    QueryInterface: any;
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
    trackEntry(guid: any): Promise<void>;
}
declare class FormsProblemData {
    getSummary(): any;
}
export {};
