export namespace permissions {
    /**
     * Set a permission's state.
     * Note: Currently just a shim to support testdriver's set_permission.
     *
     * @param {object} descriptor
     *     Descriptor with the `name` property.
     * @param {string} state
     *     State of the permission. It can be `granted`, `denied` or `prompt`.
     * @param {boolean} oneRealm
     *     Currently ignored
     * @param {browsingContext=} thirdPartyBrowsingContext
     *     3rd party browsing context object
     * @param {browsingContext=} topLevelBrowsingContext
     *     Top level browsing context object
     * @throws {UnsupportedOperationError}
     *     If `marionette.setpermission.enabled` is not set or
     *     an unsupported permission is used.
     */
    function set(descriptor: any, state: string, oneRealm: boolean, thirdPartyBrowsingContext?: browsingContext, topLevelBrowsingContext?: browsingContext): void;
}
