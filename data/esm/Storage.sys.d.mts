export const Storage: {
    new (prefix: any): {
        prefix: any;
        /**
         * Sets an item in the prefixed storage.
         * @returns {Promise}
         * @resolves With the stored value, or null.
         * @rejects Javascript exception.
         */
        getItem(name: any): Promise<any>;
        /**
         * Sets an item in the prefixed storage.
         * @returns {Promise}
         * @resolves When the operation is completed successfully
         * @rejects Javascript exception.
         */
        setItem(name: any, value: any): Promise<any>;
        /**
         * Removes a single item from the prefixed storage.
         * @returns {Promise}
         * @resolves When the operation is completed successfully
         * @rejects Javascript exception.
         */
        removeItem(name: any): Promise<any>;
        /**
         * Clears all storage for the prefix.
         * @returns {Promise}
         * @resolves When the operation is completed successfully
         * @rejects Javascript exception.
         */
        clear(): Promise<any>;
    };
    /**
     * Clear ALL storage data and save to the disk.
     */
    clearAllStorage(): Promise<void>;
};
