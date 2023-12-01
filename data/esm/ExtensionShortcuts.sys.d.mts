/// <reference types="gecko-types" />
export class ExtensionShortcutKeyMap extends ExtensionUtils.DefaultMap {
    constructor();
    buildForAddonIds(addonIds: any): Promise<void>;
    recordShortcut(shortcutString: any, addonName: any, commandName: any): void;
    removeShortcut(shortcutString: any, addonName: any, commandName: any): void;
    getFirstAddonName(shortcutString: any): any;
    has(shortcutString: any): boolean;
    _os: any;
    defaultConstructor(): Set<any>;
    getPlatformShortcutString(shortcutString: any): any;
    get(shortcutString: any): any;
    add(shortcutString: any, addonCommandValue: any): void;
    delete(shortcutString: any): void;
}
/**
 * An instance of this class is assigned to the shortcuts property of each
 * active webextension that has commands defined.
 *
 * It manages loading any updated shortcuts along with the ones defined in
 * the manifest and registering them to a browser window. It also provides
 * the list, update and reset APIs for the browser.commands interface and
 * the about:addons manage shortcuts page.
 */
export class ExtensionShortcuts {
    static removeCommandsFromStorage(extensionId: any): Promise<void>;
    constructor({ extension, onCommand, onShortcutChanged }: {
        extension: any;
        onCommand: any;
        onShortcutChanged: any;
    });
    keysetsMap: WeakMap<WeakKey, any>;
    windowOpenListener: (window: any) => void;
    extension: any;
    onCommand: any;
    onShortcutChanged: any;
    id: any;
    allCommands(): Promise<{
        name: any;
        description: any;
        shortcut: any;
    }[]>;
    updateCommand({ name, description, shortcut }: {
        name: any;
        description: any;
        shortcut: any;
    }): Promise<void>;
    resetCommand(name: any): Promise<void>;
    loadCommands(): void;
    manifestCommands: Map<string, any>;
    commands: Promise<Map<any, any>>;
    registerKeys(commands: any): void;
    /**
     * Registers the commands to all open windows and to any which
     * are later created.
     */
    register(): Promise<void>;
    /**
     * Unregisters the commands from all open windows and stops commands
     * from being registered to windows which are later created.
     */
    unregister(): void;
    /**
     * Creates a Map from commands for each command in the manifest.commands object.
     *
     * @param {object} manifest The manifest JSON object.
     * @returns {Map<string, object>}
     */
    loadCommandsFromManifest(manifest: object): Map<string, object>;
    loadCommandsFromStorage(extensionId: any): Promise<any>;
    /**
     * Registers the commands to a document.
     *
     * @param {ChromeWindow} window The XUL window to insert the Keyset.
     * @param {Map} commands The commands to be set.
     */
    registerKeysToDocument(window: ChromeWindow, commands: Map<any, any>): void;
    /**
     * Builds a XUL Key element and attaches an onCommand listener which
     * emits a command event with the provided name when fired.
     *
     * @param {Document} doc The XUL document.
     * @param {string} name The name of the command.
     * @param {string} shortcut The shortcut provided in the manifest.
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/key
     *
     * @returns {Document} The newly created Key element.
     */
    buildKey(doc: Document, name: string, shortcut: string): Document;
    /**
     * Builds a XUL Key element from the provided shortcut.
     *
     * @param {Document} doc The XUL document.
     * @param {string} name The name of the shortcut.
     * @param {string} shortcut The shortcut provided in the manifest.
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/key
     * @returns {Document} The newly created Key element.
     */
    buildKeyFromShortcut(doc: Document, name: string, shortcut: string): Document;
}
import { ExtensionUtils } from "resource://gre/modules/ExtensionUtils.sys.mjs";
