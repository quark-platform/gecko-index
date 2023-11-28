/**
 * ModuleCache instances are dedicated to lazily create and cache the instances
 * of all the modules related to a specific MessageHandler instance.
 *
 * ModuleCache also implements the logic to resolve the path to the file for a
 * given module, which depends both on the current MessageHandler context and on
 * the expected destination.
 *
 * In order to implement module logic in any context, separate module files
 * should be created for each situation. For instance, for a given module,
 * - ${MODULES_FOLDER}/root/{ModuleName}.sys.mjs contains the implementation for
 *   commands intended for the destination ROOT, and will be created for a ROOT
 *   MessageHandler only. Typically, they will run in the parent process.
 * - ${MODULES_FOLDER}/windowglobal/{ModuleName}.sys.mjs contains the implementation
 *   for commands intended for a WINDOW_GLOBAL destination, and will be created
 *   for a WINDOW_GLOBAL MessageHandler only. Those will usually run in a
 *   content process.
 * - ${MODULES_FOLDER}/windowglobal-in-root/{ModuleName}.sys.mjs also handles
 *   commands intended for a WINDOW_GLOBAL destination, but they will be created
 *   for the ROOT MessageHandler and will run in the parent process. This can be
 *   useful if some code has to be executed in the parent process, even though
 *   the final destination is a WINDOW_GLOBAL.
 * - And so on, as more MessageHandler types get added, more combinations will
 *   follow based on the same pattern:
 *   - {contextName}/{ModuleName}.sys.mjs
 *   - or {destinationType}-in-{currentType}/{ModuleName}.sys.mjs
 *
 * All those implementations are optional. If a module cannot be found, based on
 * the logic detailed above, the MessageHandler will assume that the command
 * should simply be forwarded to the next layer of the network.
 */
export class ModuleCache {
    constructor(messageHandler: any);
    /**
     * Destroy all instantiated modules.
     */
    destroy(): void;
    /**
     * Retrieve all module classes matching the provided module name to reach the
     * provided destination, from the current context.
     *
     * This corresponds to the path a command can take to reach its destination.
     * A command's method must be implemented in one of the classes returned by
     * getAllModuleClasses in order to be successfully handled.
     *
     * @param {string} moduleName
     *     The name of the module.
     * @param {Destination} destination
     *     The destination.
     * @returns {Array<class<Module>|null>}
     *     An array of Module classes.
     */
    getAllModuleClasses(moduleName: string, destination: Destination): any[];
    /**
     * Get a module instance corresponding to the provided moduleName and
     * destination. If no existing module can be found in the cache, ModuleCache
     * will attempt to import the module file and create a new instance, which
     * will then be cached and returned for subsequent calls.
     *
     * @param {string} moduleName
     *     The name of the module which should implement the command.
     * @param {CommandDestination} destination
     *     The destination of the command for which we need to instantiate a
     *     module. See MessageHandler.sys.mjs for the CommandDestination typedef.
     * @returns {object=}
     *     A module instance corresponding to the provided moduleName and
     *     destination, or null if it could not be instantiated.
     */
    getModuleInstance(moduleName: string, destination: CommandDestination): object | undefined;
    /**
     * Check if the given module exists for the destination.
     *
     * @param {string} moduleName
     *     The name of the module.
     * @param {Destination} destination
     *     The destination.
     * @returns {boolean}
     *     True if the module exists.
     */
    hasModuleClass(moduleName: string, destination: Destination): boolean;
    toString(): string;
    #private;
}
