export class LoginRelatedRealmsParent {
    /**
     * @type RemoteSettingsClient
     *
     * @memberof LoginRelatedRealmsParent
     */
    _sharedCredentialsClient: RemoteSettingsClient;
    /**
     * @type string[][]
     *
     * @memberof LoginRelatedRealmsParent
     */
    _relatedDomainsList: string[][];
    /**
     * Handles the Remote Settings sync event
     *
     * @param {Object} aEvent
     * @param {Array} aEvent.current Records that are currently in the collection after the sync event
     * @param {Array} aEvent.created Records that were created
     * @param {Array} aEvent.updated Records that were updated
     * @param {Array} aEvent.deleted Records that were deleted
     * @memberof LoginRelatedRealmsParent
     */
    onRemoteSettingsSync(aEvent: {
        current: any[];
        created: any[];
        updated: any[];
        deleted: any[];
    }): void;
    getSharedCredentialsCollection(): Promise<string[][]>;
    /**
     * Determine if there are any related realms of this `formOrigin` using the related realms collection
     * @param {string} formOrigin A form origin
     * @return {string[]} filteredRealms An array of domains related to the `formOrigin`
     * @async
     * @memberof LoginRelatedRealmsParent
     */
    findRelatedRealms(formOrigin: string): string[];
}
