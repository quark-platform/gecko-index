export function getSubprocessImplForTest(): any;
export namespace Subprocess {
    /**
     * Launches a process, and returns a handle to it.
     *
     * @param {object} options
     * An object describing the process to launch.
     *
     * @param {string} options.command
     * The full path of the executable to launch. Relative paths are not
     * accepted, and `$PATH` is not searched.
     *
     * If a path search is necessary, the {@link Subprocess.pathSearch} method may
     * be used to map a bare executable name to a full path.
     *
     * @param {string[]} [options.arguments]
     * A list of strings to pass as arguments to the process.
     *
     * @param {object} [options.environment] An object containing a key
     * and value for each environment variable to pass to the
     * process. Values that are `=== null` are ignored. Only the
     * object's own, enumerable properties are added to the environment.
     *
     * @param {boolean} [options.environmentAppend] If true, append the
     * environment variables passed in `environment` to the existing set
     * of environment variables. Values that are `=== null` are removed
     * from the environment. Otherwise, the values in 'environment'
     * constitute the entire set of environment variables passed to the
     * new process.
     *
     * @param {string} [options.stderr]
     * Defines how the process's stderr output is handled. One of:
     *
     * - `"ignore"`: (default) The process's standard error is not redirected.
     * - `"stdout"`: The process's stderr is merged with its stdout.
     * - `"pipe"`: The process's stderr is redirected to a pipe, which can be read
     *   from via its `stderr` property.
     *
     * @param {string} [options.workdir]
     *        The working directory in which to launch the new process.
     *
     * @param {boolean} [options.disclaim]
     * macOS-specific option for 10.14+ OS versions. If true, enables a
     * macOS-specific process launch option allowing the parent process to
     * disclaim responsibility for the child process with respect to privacy/
     * security permission prompts and decisions. This option is ignored on
     * platforms that do not support it.
     *
     * @returns {Promise<Process>}
     *
     * @throws {Error}
     * May be rejected with an Error object if the process can not be
     * launched. The object will include an `errorCode` property with
     * one of the following values if it was rejected for the
     * corresponding reason:
     *
     * - Subprocess.ERROR_BAD_EXECUTABLE: The given command could not
     *   be found, or the file that it references is not executable.
     *
     * Note that if the process is successfully launched, but exits with
     * a non-zero exit code, the promise will still resolve successfully.
     */
    function call(options: {
        command: string;
        arguments?: string[];
        environment?: any;
        environmentAppend?: boolean;
        stderr?: string;
        workdir?: string;
        disclaim?: boolean;
    }): Promise<Process>;
    /**
     * Returns an object with a key-value pair for every variable in the process's
     * current environment.
     *
     * @returns {object}
     */
    function getEnvironment(): any;
    /**
     * Searches for the given executable file in the system executable
     * file paths as specified by the PATH environment variable.
     *
     * On Windows, if the unadorned filename cannot be found, the
     * extensions in the semicolon-separated list in the PATHSEP
     * environment variable are successively appended to the original
     * name and searched for in turn.
     *
     * @param {string} command
     *        The name of the executable to find.
     * @param {object} [environment]
     *        An object containing a key for each environment variable to be used
     *        in the search. If not provided, full the current process environment
     *        is used.
     * @returns {Promise<string>}
     */
    function pathSearch(command: string, environment?: any): Promise<string>;
}
