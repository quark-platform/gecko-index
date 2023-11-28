/**
 * This task is intended to be interrupted by the JS debugger in tests.
 *
 * This task exposes its `exitCode` so that in the future the JS
 * debugger can change its exit code dynamically from a failing exit
 * code to exit code 0.
 */
export function runBackgroundTask(commandLine: any): number;
