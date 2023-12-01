/// <reference types="gecko-types" />
export const libc: any;
export const win32: any;
export namespace SubprocessImpl {
    export { Process };
    export function call(options: any): Promise<BaseProcess>;
    export function getEnvironment(): Generator<any[], void, unknown>;
    export function isExecutableFile(path: any): Promise<boolean>;
    /**
     * Searches for the given executable file in the system executable
     * file paths as specified by the PATH environment variable.
     *
     * On Windows, if the unadorned filename cannot be found, the
     * extensions in the semicolon-separated list in the PATHEXT
     * environment variable are successively appended to the original
     * name and searched for in turn.
     *
     * @param {string} bin
     *        The name of the executable to find.
     * @param {object} environment
     *        An object containing a key for each environment variable to be used
     *        in the search.
     * @returns {Promise<string>}
     */
    export function pathSearch(bin: string, environment: any): Promise<string>;
}
declare class Process extends BaseProcess {
    static get WORKER_URL(): string;
    static get WorkerClass(): typeof WinPromiseWorker;
}
import { BaseProcess } from "resource://gre/modules/subprocess/subprocess_common.sys.mjs";
declare class WinPromiseWorker extends PromiseWorker {
    constructor(...args: any[]);
    signalEvent: any;
    signalWorker(): void;
    postMessage(...args: any[]): any;
}
import { PromiseWorker } from "resource://gre/modules/subprocess/subprocess_common.sys.mjs";
export {};
