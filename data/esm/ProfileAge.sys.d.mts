/**
 * Returns a promise that resolves to an instance of ProfileAgeImpl. Will always
 * return the same instance for every call for the same profile.
 *
 * @param {string} profile The path to the profile directory.
 * @return {Promise<ProfileAgeImpl>} Resolves to the ProfileAgeImpl.
 */
export function ProfileAge(profile: string): Promise<ProfileAgeImpl>;
/**
 * Profile access to times.json (eg, creation/reset time).
 * This is separate from the provider to simplify testing and enable extraction
 * to a shared location in the future.
 */
declare class ProfileAgeImpl {
    constructor(profile: any, times: any);
    _profilePath: any;
    _times: any;
    _log: any;
    get profilePath(): any;
    /**
     * There are two ways we can get our creation time:
     *
     * 1. From the on-disk JSON file.
     * 2. By calculating it from the filesystem.
     *
     * If we have to calculate, we write out the file; if we have
     * to touch the file, we persist in-memory.
     *
     * @return a promise that resolves to the profile's creation time.
     */
    get created(): Promise<any> | Promise<number>;
    _created: Promise<any> | Promise<number>;
    /**
     * Returns a promise to the time of first use of the profile. This may be
     * undefined if the first use time is unknown.
     */
    get firstUse(): Promise<any>;
    /**
     * Return a promise representing the writing the current times to the profile.
     */
    writeTimes(): Promise<void>;
    /**
     * Calculates the created time by scanning the profile directory, sets it in
     * the current set of times and persists it to the profile. Returns a promise
     * that resolves when all of that is complete.
     */
    computeAndPersistCreated(): Promise<number>;
    /**
     * Record (and persist) when a profile reset happened.  We just store a
     * single value - the timestamp of the most recent reset - but there is scope
     * to keep a list of reset times should our health-reporter successor
     * be able to make use of that.
     * Returns a promise that is resolved once the file has been written.
     */
    recordProfileReset(time?: number): Promise<void>;
    get reset(): Promise<any>;
}
export {};
