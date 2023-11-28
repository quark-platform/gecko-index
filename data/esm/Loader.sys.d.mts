/**
 * The main devtools API. The standard instance of this loader is exported as
 * |loader| below, but if a fresh copy of the loader is needed, then a new
 * one can also be created.
 *
 * The two following boolean flags are used to control the sandboxes into
 * which the modules are loaded.
 * @param invisibleToDebugger boolean
 *        If true, the modules won't be visible by the Debugger API.
 *        This typically allows to hide server modules from the debugger panel.
 * @param freshCompartment boolean
 *        If true, the modules will be forced to be loaded in a distinct
 *        compartment. It is typically used to load the modules in a distinct
 *        system compartment, different from the main one, which is shared by
 *        all JSMs, XPCOMs and modules loaded with this flag set to true.
 *        We use this in order to debug modules loaded in this shared system
 *        compartment. The debugger actor has to be running in a distinct
 *        compartment than the context it is debugging.
 * @param useDevToolsLoaderGlobal boolean
 *        If true, the loader will reuse the current global to load other
 *        modules instead of creating a sandbox with custom options. Cannot be
 *        used with invisibleToDebugger and/or freshCompartment.
 *        TODO: This should ultimately replace invisibleToDebugger.
 */
export function DevToolsLoader({ invisibleToDebugger, freshCompartment, useDevToolsLoaderGlobal, }?: {
    invisibleToDebugger?: boolean;
    freshCompartment?: boolean;
    useDevToolsLoaderGlobal?: boolean;
}): void;
export class DevToolsLoader {
    /**
     * The main devtools API. The standard instance of this loader is exported as
     * |loader| below, but if a fresh copy of the loader is needed, then a new
     * one can also be created.
     *
     * The two following boolean flags are used to control the sandboxes into
     * which the modules are loaded.
     * @param invisibleToDebugger boolean
     *        If true, the modules won't be visible by the Debugger API.
     *        This typically allows to hide server modules from the debugger panel.
     * @param freshCompartment boolean
     *        If true, the modules will be forced to be loaded in a distinct
     *        compartment. It is typically used to load the modules in a distinct
     *        system compartment, different from the main one, which is shared by
     *        all JSMs, XPCOMs and modules loaded with this flag set to true.
     *        We use this in order to debug modules loaded in this shared system
     *        compartment. The debugger actor has to be running in a distinct
     *        compartment than the context it is debugging.
     * @param useDevToolsLoaderGlobal boolean
     *        If true, the loader will reuse the current global to load other
     *        modules instead of creating a sandbox with custom options. Cannot be
     *        used with invisibleToDebugger and/or freshCompartment.
     *        TODO: This should ultimately replace invisibleToDebugger.
     */
    constructor({ invisibleToDebugger, freshCompartment, useDevToolsLoaderGlobal, }?: {
        invisibleToDebugger?: boolean;
        freshCompartment?: boolean;
        useDevToolsLoaderGlobal?: boolean;
    });
    loader: any;
    require: any;
    id: number;
    lazyGetter: any;
    lazyServiceGetter: any;
    lazyRequireGetter: any;
    destroy(reason?: string): void;
    /**
     * Return true if |id| refers to something requiring help from a
     * loader plugin.
     */
    isLoaderPluginId(id: any): any;
}
export const DEFAULT_SANDBOX_NAME: "DevTools (Module loader)";
export const loader: DevToolsLoader;
export const require: any;
