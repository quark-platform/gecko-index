export namespace PermissionTestUtils {
    /**
     * Add permission information for a given subject.
     * Subject can be a principal, uri or origin string.
     *
     * @see nsIPermissionManager for documentation
     *
     * @param {Ci.nsIPrincipal|Ci.nsIURI|string} subject
     * @param {*} args
     */
    function add(subject: any, ...args: any): any;
    /**
     * Get all custom permissions for a given subject.
     * Subject can be a principal, uri or origin string.
     *
     * @see nsIPermissionManager for documentation
     *
     * @param {Ci.nsIPrincipal|Ci.nsIURI|string} subject
     * @param {*} args
     */
    function getAll(subject: any, ...args: any): any;
    /**
     * Remove permission information for a given subject and permission type
     * Subject can be a principal, uri or origin string.
     *
     * @see nsIPermissionManager for documentation
     *
     * @param {Ci.nsIPrincipal|Ci.nsIURI|string} subject
     * @param {*} args
     */
    function remove(subject: any, ...args: any): any;
    /**
     * Test whether a website has permission to perform the given action.
     * Subject can be a principal, uri or origin string.
     *
     * @see nsIPermissionManager for documentation
     *
     * @param {Ci.nsIPrincipal|Ci.nsIURI|string} subject
     * @param {*} args
     */
    function testPermission(subject: any, ...args: any): any;
    /**
     * Test whether a website has permission to perform the given action.
     * Subject can be a principal, uri or origin string.
     *
     * @see nsIPermissionManager for documentation
     *
     * @param {Ci.nsIPrincipal|Ci.nsIURI|string} subject
     * @param {*} args
     */
    function testExactPermission(subject: any, ...args: any): any;
    /**
     * Get the permission object associated with the given subject and action.
     * Subject can be a principal, uri or origin string.
     *
     * @see nsIPermissionManager for documentation
     *
     * @param {Ci.nsIPrincipal|Ci.nsIURI|string} subject
     * @param {*} args
     */
    function getPermissionObject(subject: any, type: any, exactHost?: boolean): any;
}
