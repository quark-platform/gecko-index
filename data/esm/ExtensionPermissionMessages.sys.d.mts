/**
 * Maps a permission name to its l10n identifier.
 *
 * Returns `null` for permissions not in `PERMISSIONS_WITH_MESSAGE`.
 *
 * The default `webext-perms-description-${permission}` mapping
 * may be overridden by entries in `PERMISSION_L10N_ID_OVERRIDES`.
 *
 * @param {string} permission
 * @returns {string | null}
 */
export function permissionToL10nId(permission: string): string | null;
/**
 * Localization object holding the fluent definitions of permission descriptions
 * of WebExtension APIs defined in toolkit.
 *
 * This is exported to allow builds (e.g. Thunderbird) to extend or modify the
 * object via its addResourceIds() method.
 */
export const PERMISSION_L10N: any;
/**
 * List of permissions that are associated with a permission message.
 *
 * Keep this list in sync with:
 * - The messages in `toolkit/locales/en-US/toolkit/global/extensionPermissions.ftl`
 * - `permissionToTranslation` at https://github.com/mozilla-mobile/firefox-android/blob/d9c08c387917e3e53963386ad53229e69d52da6e/android-components/components/feature/addons/src/main/java/mozilla/components/feature/addons/Addon.kt#L174-L206
 * - https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#advised-permissions
 * - https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions
 *
 * This is exported to allow builds (e.g. Thunderbird) to extend or modify the set.
 */
export const PERMISSIONS_WITH_MESSAGE: Set<string>;
/**
 * Overrides for permission description l10n identifiers,
 * which by default use the pattern `webext-perms-description-${permission}`
 * where `permission` is sanitized to be a valid Fluent identifier.
 *
 * This is exported to allow builds (e.g. Thunderbird) to extend or modify the map.
 */
export const PERMISSION_L10N_ID_OVERRIDES: Map<any, any>;
