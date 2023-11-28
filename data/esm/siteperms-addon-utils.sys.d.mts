/**
 * @param {string} type
 * @returns {boolean}
 */
export function isGatedPermissionType(type: string): boolean;
/**
 * @param {string} siteOrigin
 * @returns {boolean}
 */
export function isKnownPublicSuffix(siteOrigin: string): boolean;
/**
 * ⚠️ This should be only used for testing purpose ⚠️
 *
 * @param {Array<String>} permissionTypes
 * @throws if not called from xpcshell test
 */
export function addGatedPermissionTypesForXpcShellTests(permissionTypes: Array<string>): void;
/**
 * @param {nsIPrincipal} principal
 * @returns {Boolean}
 */
export function isPrincipalInSitePermissionsBlocklist(principal: nsIPrincipal): boolean;
export const GATED_PERMISSIONS: string[];
export const SITEPERMS_ADDON_PROVIDER_PREF: "dom.sitepermsaddon-provider.enabled";
export const SITEPERMS_ADDON_TYPE: "sitepermission";
export const SITEPERMS_ADDON_BLOCKEDLIST_PREF: "dom.sitepermsaddon-provider.separatedBlocklistedDomains";
