/// <reference types="gecko-types" />
export namespace ExtensionActivityLog {
    let initialized: boolean;
    let listeners: ExtensionUtils.DefaultMap;
    let watchedIds: Set<any>;
    function init(): void;
    /**
     * Notify all listeners of an extension activity.
     *
     * @param {string} id The ID of the extension that caused the activity.
     * @param {string} viewType The view type the activity is in.
     * @param {string} type The type of the activity.
     * @param {string} name The API name or path.
     * @param {object} data Activity specific data.
     * @param {string} timeStamp The timestamp for the activity.
     */
    function log(id: string, viewType: string, type: string, name: string, data: any, timeStamp: string): void;
    function addListener(id: any, callback: any): void;
    function removeListener(id: any, callback: any): void;
    function receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
}
import { ExtensionUtils } from "resource://gre/modules/ExtensionUtils.sys.mjs";
