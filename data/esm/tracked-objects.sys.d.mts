/**
 * Request to track why the given object is kept in memory,
 * later on, when retrieving all the watched object via getAllNodeIds.
 */
export function track(obj: any): void;
/**
 * Return the NodeId's of all the objects passed via `track()` method.
 *
 * NodeId's are used by spidermonkey memory API to designates JS objects in head snapshots.
 */
export function getAllNodeIds(): NodeId[];
/**
 * Used by tests to clear all tracked objects
 */
export function clear(): void;
