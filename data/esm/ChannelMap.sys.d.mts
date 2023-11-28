/**
 * This object implements iterable weak map for HTTP channels tracked by
 * the network observer.
 *
 * We can't use Map() for storing HTTP channel references since we don't
 * know when we should remove the entry in it (it's wrong to do it in
 * 'onTransactionClose' since it doesn't have to be the last platform
 * notification for a given channel). We want the map to auto update
 * when the channel is garbage collected.
 *
 * We can't use WeakMap() since searching for a value by the channel object
 * isn't reliable (there might be different objects representing the same
 * channel). We need to search by channel ID, but ID can't be used as key
 * in WeakMap().
 *
 * So, this custom map solves aforementioned issues.
 */
export class ChannelMap {
    /**
     * Remove all entries from the ChannelMap.
     */
    clear(): void;
    /**
     * Delete the entry for the provided channel from the underlying maps, if any.
     * Note that this will only delete entries which were set for the exact same
     * nsIChannel object, and will not attempt to look up entries by channel id.
     *
     * @param {nsIChannel} channel
     *     The key to delete from the ChannelMap.
     *
     * @return {boolean}
     *     True if an entry was deleted, false otherwise.
     */
    delete(channel: nsIChannel): boolean;
    /**
     * Retrieve a value stored in the ChannelMap by the provided channel.
     *
     * @param {nsIChannel} channel
     *     The key to delete from the ChannelMap.
     *
     * @return {Object|null}
     *     The value held for the provided channel.
     *     Null if the channel did not match any known key.
     */
    get(channel: nsIChannel): any | null;
    /**
     * Adds or updates an entry in the ChannelMap for the provided channel.
     *
     * @param {nsIChannel} channel
     *     The key of the entry to add or update.
     * @param {Object} value
     *     The value to add or update.
     */
    set(channel: nsIChannel, value: any): void;
    #private;
}
