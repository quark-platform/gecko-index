export class ExtensionStorageSync {
    listeners: Map<any, any>;
    migrationOk: boolean;
    _promisify(fnName: any, extension: any, context: any, ...args: any[]): Promise<any>;
    set(extension: any, items: any, context: any): Promise<any>;
    remove(extension: any, keys: any, context: any): Promise<any>;
    clear(extension: any, context: any): Promise<any>;
    clearOnUninstall(extensionId: any): Promise<any>;
    get(extension: any, spec: any, context: any): Promise<any>;
    getBytesInUse(extension: any, keys: any, context: any): Promise<any>;
    addOnChangedListener(extension: any, listener: any, context: any): void;
    removeOnChangedListener(extension: any, listener: any): void;
    notifyListeners(extId: any, changes: any): void;
}
export const extensionStorageSync: ExtensionStorageSync;
