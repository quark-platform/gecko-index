/**
 * Perform synchronization of engines.
 *
 * This was originally split out of service.js. The API needs lots of love.
 */
export function EngineSynchronizer(service: any): void;
export class EngineSynchronizer {
    /**
     * Perform synchronization of engines.
     *
     * This was originally split out of service.js. The API needs lots of love.
     */
    constructor(service: any);
    _log: any;
    service: any;
    sync(engineNamesToSync: any, why: any): Promise<void>;
    _syncEngine(engine: any): Promise<boolean>;
    _updateEnabledFromMeta(meta: any, numClients: any, engineManager?: any): Promise<void>;
    _updateEnabledEngines(): Promise<void>;
}
