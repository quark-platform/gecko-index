/**
 * Maybe submit a "background-update" custom Glean ping.
 *
 * If data reporting upload in general is enabled Glean will submit a ping.  To determine if
 * telemetry is enabled, Glean will look at the relevant pref, which was mirrored from the default
 * profile.  Note that the Firefox policy mechanism will manage this pref, locking it to particular
 * values as appropriate.
 */
export function maybeSubmitBackgroundUpdatePing(): Promise<void>;
export function runBackgroundTask(commandLine: any): Promise<any>;
export const backgroundTaskTimeoutSec: number;
