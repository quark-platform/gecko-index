export namespace pktApi {
    export { isUserLoggedIn };
    export { clearUserData };
    export { addLink };
    export { deleteItem };
    export { archiveItem };
    export { addTagsToItem };
    export { addTagsToURL };
    export { getTags };
    export { getRecentTags };
    export { isPremiumUser };
    export { getSuggestedTagsForItem };
    export { getSuggestedTagsForURL };
    export { retrieve };
    export { getRecentSavesCache };
    export { getRecentSaves };
    export { getArticleInfo };
    export { getMobileDownload };
}
/**
 * Returns users logged in status
 * @return {Boolean} Users logged in status
 */
declare function isUserLoggedIn(): boolean;
/**
 * Cleans all settings for the previously logged in user
 */
declare function clearUserData(): void;
/**
 * Add a new link to Pocket
 * @param {string} url     URL of the link
 * @param {Object | undefined} options Can provide a string-based title, a
 *                                     `success` callback and an `error` callback.
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function addLink(url: string, options: any | undefined): boolean;
/**
 * Delete an item identified by item id from the users list
 * @param  {string} itemId  The id from the item we want to remove
 * @param  {Object | undefined} options Can provide an actionInfo object with
 *                                      further data to send to the API. Can
 *                                      have success and error callbacks
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function deleteItem(itemId: string, options: any | undefined): boolean;
/**
 * Archive an item identified by item id from the users list
 * @param  {string} itemId  The id from the item we want to archive
 * @param  {Object | undefined} options Can provide an actionInfo object with
 *                                      further data to send to the API. Can
 *                                      have success and error callbacks
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function archiveItem(itemId: string, options: any | undefined): boolean;
/**
 * Handling Tags
 */
/**
 * Add tags to the item identified by the url. Also updates the used tags
 * list
 * @param {string} itemId  The item identifier by item id
 * @param {Array}  tags    Tags adding to the item
 * @param {Object | undefined} options Can provide an actionInfo object with
 *                                     further data to send to the API. Can
 *                                     have success and error callbacks
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function addTagsToItem(itemId: string, tags: any[], options: any | undefined): boolean;
/**
 * Add tags to the item identified by the url. Also updates the used tags
 * list
 * @param {string} url     The item identifier by url
 * @param {Array}  tags    Tags adding to the item
 * @param {Object} options Can provide an actionInfo object with further
 *                         data to send to the API. Can have success and error
 *                         callbacks
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function addTagsToURL(url: string, tags: any[], options: any): boolean;
/**
 * Return all cached tags and used tags.
 */
declare function getTags(): {
    tags: any;
};
/**
 * Return all recent tags.
 */
declare function getRecentTags(): {
    recentTags: any;
};
/**
 * Helper method to check if a user is premium or not
 * @return {Boolean} Boolean if user is premium or not
 */
declare function isPremiumUser(): boolean;
/**
 * Fetch suggested tags for a given item id
 * @param  {string} itemId Item id of
 * @param  {Object | undefined} options Can provide an actionInfo object
 *                                      with further data to send to the API.
 *                                      Can have success and error callbacks
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function getSuggestedTagsForItem(itemId: string, options: any | undefined): boolean;
/**
 * Fetch suggested tags for a given URL
 * @param {string} url (required) The item identifier by url
 * @param {Object} options Can provide an actionInfo object with further
 *                         data to send to the API. Can have success and error
 *                         callbacks
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function getSuggestedTagsForURL(url: string, options: any): boolean;
/**
 * Helper function to get a user's pocket stories
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function retrieve(data?: {}, options?: {}): boolean;
declare function getRecentSavesCache(): Promise<any>;
declare function getRecentSaves(options?: {}): Promise<void>;
/**
 * Get a preview for saved URL
 * @param {string} url     URL of the link
 * @param {Object | undefined} options Can provide a `success` callback and an `error` callback.
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function getArticleInfo(url: string, options: any | undefined): boolean;
/**
 * Request a email for mobile apps
 * @param {Object | undefined} options Can provide a `success` callback and an `error` callback.
 * @return {Boolean} Returns Boolean whether the api call started sucessfully
 */
declare function getMobileDownload(options: any | undefined): boolean;
export {};
