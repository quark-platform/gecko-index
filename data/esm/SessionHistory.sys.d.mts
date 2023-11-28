/**
 * The external API exported by this module.
 */
export const SessionHistory: Readonly<{
    isEmpty(docShell: any): boolean;
    collect(docShell: any, aFromIdx?: number): {
        entries: any[];
        requestedIndex: any;
    };
    collectFromParent(uri: any, documentHasChildNodes: any, history: any, aFromIdx?: number): {
        entries: any[];
        requestedIndex: any;
    };
    collectNonWebControlledBlankLoadingSession(browsingContext: any): {
        entries: {
            url: any;
            title: any;
        }[];
        index: number;
        fromIdx: number;
        requestedIndex: any;
    };
    restore(docShell: any, tabData: any): any;
    restoreFromParent(history: any, tabData: any): any;
}>;
