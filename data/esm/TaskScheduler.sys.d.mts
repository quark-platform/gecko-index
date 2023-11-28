export namespace TaskScheduler {
    let MIN_INTERVAL_SECONDS: number;
    /**
     * Create a scheduled task that will run a command indepedent of the application.
     *
     * It will run every intervalSeconds seconds, starting intervalSeconds seconds from now.
     *
     * If the task is unable to run one or more scheduled times (e.g. if the computer is
     * off, or the owning user is not logged in), then the next time a run is possible the task
     * will be run once.
     *
     * An existing task with the same `id` will be replaced.
     *
     * Only one instance of the task will run at once, though this does not affect different
     * tasks from the same application.
     *
     * @param id
     *        A unique string (including a UUID is recommended) to distinguish the task among
     *        other tasks from this installation.
     *        This string will also be visible to system administrators, so it should be a legible
     *        description, but it does not need to be localized.
     *
     * @param command
     *        Full path to the executable to run.
     *
     * @param intervalSeconds
     *        Interval at which to run the command, in seconds. Minimum 1800 (30 minutes).
     *
     * @param options
     *        Optional, as are all of its properties:
     *        {
     *          args
     *            Array of arguments to pass on the command line. Does not include the command
     *            itself even if that is considered part of the command line. If missing, no
     *            argument list is generated.
     *
     *          workingDirectory
     *            Working directory for the command. If missing, no working directory is set.
     *
     *          description
     *            A description string that will be visible to system administrators. This should
     *            be localized. If missing, no description is set.
     *
     *          disabled
     *            If true the task will be created disabled, so that it will not be run.
     *            Ignored on macOS: see comments in TaskSchedulerMacOSImpl.jsm.
     *            Default false, intended for tests.
     *
     *          executionTimeoutSec
     *            Specifies how long (in seconds) the scheduled task can execute for before it is
     *            automatically stopped by the task scheduler. If a value <= 0 is given, it will be
     *            ignored.
     *            This is not currently implemented on macOS.
     *            On Windows, the default timeout is 72 hours.
     *        }
     * }
     */
    function registerTask(id: any, command: any, intervalSeconds: any, options: any): Promise<any>;
    /**
     * Delete a scheduled task previously created with registerTask.
     *
     * @throws NS_ERROR_FILE_NOT_FOUND if the task does not exist.
     */
    function deleteTask(id: any): Promise<any>;
    /**
     * Delete all tasks registered by this application.
     */
    function deleteAllTasks(): Promise<any>;
    /**
     * Checks if a task exists.
     *
     * @param id
     *        A string representing the identifier of the task to look for.
     *
     * @return
     *        true if the task exists, otherwise false.
     */
    function taskExists(id: any): Promise<any>;
}
