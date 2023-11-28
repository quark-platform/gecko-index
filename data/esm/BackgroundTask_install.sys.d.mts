export function runBackgroundTask(commandLine: any): Promise<void>;
/**
 * This task ought to have an ephemeral profile and should not apply updates.
 * These settings are controlled externally, by
 * `BackgroundTasks::IsUpdatingTaskName` and
 * `BackgroundTasks::IsEphemeralProfileTaskName`.
 */
export const backgroundTaskTimeoutSec: 30;
