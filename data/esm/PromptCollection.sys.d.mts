/**
 * Implements nsIPromptCollection
 * @class PromptCollection
 */
export class PromptCollection {
    confirmRepost(browsingContext: any): boolean;
    asyncBeforeUnloadCheck(browsingContext: any): Promise<boolean>;
    confirmFolderUpload(browsingContext: any, directoryName: any): boolean;
    stringBundles: {};
    QueryInterface: MozQueryInterface;
}
