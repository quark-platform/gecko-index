export function _applyColorwayConfig(collections: any): void;
/**
 * A Map of themes built in to the browser, alongwith a Map of collections those themes belong to. Params for the objects contained
 * within the map:
 *
 * @param {string} id
 *   The unique identifier for the theme. The map's key.
 * @param {string} version
 *   The theme add-on's semantic version, as defined in its manifest.
 * @param {string} path
 *   Path to the add-on files.
 * @param {string} [expiry]
 *  Date in YYYY-MM-DD format. Optional. If defined, the themes in the collection can no longer be
 *  used after this date, unless the user has permission to retain it.
 * @param {string} [collection]
 *  The collection id that the theme is a part of. Optional.
 */
export const BuiltInThemeConfig: Map<string, {
    version: string;
    path: string;
    collection?: undefined;
    l10nId?: undefined;
} | {
    version: string;
    path: string;
    collection: string;
    l10nId?: undefined;
} | {
    version: string;
    path: string;
    collection: string;
    l10nId: {
        description: string;
        groupName: string;
    };
}>;
