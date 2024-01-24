/// <reference types="gecko-types" />
export class GeckoViewContent extends GeckoViewModule {
    get actor(): any;
    get isPdfJs(): boolean;
    sendToAllChildren(aEvent: any, aData: any): void;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
    handleEvent(aEvent: any): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    _contentCrashed: boolean;
    _containsFormData(aCallback: any): Promise<void>;
    _requestAnalysis(aData: any, aCallback: any): Promise<void>;
    _requestCreateAnalysis(aData: any, aCallback: any): Promise<void>;
    _requestAnalysisCreationStatus(aData: any, aCallback: any): Promise<void>;
    _requestAnalysisStatus(aData: any, aCallback: any): Promise<void>;
    _pollForAnalysisCompleted(aData: any, aCallback: any): Promise<void>;
    _sendAttributionEvent(aEvent: any, aData: any, aCallback: any): Promise<void>;
    _requestRecommendations(aData: any, aCallback: any): Promise<void>;
    _reportBackInStock(aData: any, aCallback: any): Promise<void>;
    _hasCookieBannerRuleForBrowsingContextTree(aCallback: any): Promise<void>;
    _findInPage(aData: any, aCallback: any): void;
    _finderListener: {
        response: {
            found: boolean;
            wrapped: boolean;
            current: number;
            total: number;
            searchString: any;
            linkURL: any;
            clientRect: any;
            flags: {
                backwards: boolean;
                linksOnly: boolean;
                matchCase: boolean;
                wholeWord: boolean;
            };
        };
        onFindResult(aOptions: any): void;
        onMatchesCountResult(aResult: any): void;
        onCurrentSelection(): void;
        onHighlightFinished(): void;
    };
    _clearMatches(): void;
    _displayMatches(aData: any): void;
    _matchDisplayOptions: any;
    #private;
}
import { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
