/**
 * Module that contains tab state collection methods.
 */
export const TabState: Readonly<{
    update(permanentKey: any, data: any): void;
    collect(tab: any, extData: any): TabData;
    clone(tab: any, extData: any): any;
    copyFromCache(permanentKey: any, tabData: any, options: any): void;
}>;
