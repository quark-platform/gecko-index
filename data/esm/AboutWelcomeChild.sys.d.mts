export class AboutWelcomeChild extends JSWindowActorChild {
    _destroyed: boolean;
    didDestroy(): void;
    actorCreated(): void;
    /**
     * Send event that can be handled by the page
     *
     * @param {{type: string, data?: any}} action
     */
    sendToPage(action: {
        type: string;
        data?: any;
    }): void;
    /**
     * Export functions that can be called by page js
     */
    exportFunctions(): void;
    /**
     * Wrap a promise so content can use Promise methods.
     */
    wrapPromise(promise: any): any;
    /**
     * Clones the result of the query into the content window.
     */
    sendQueryAndCloneForContent(...sendQueryArgs: any[]): any;
    AWSelectTheme(data: any): any;
    AWEvaluateScreenTargeting(data: any): any;
    AWAddScreenImpression(screen: any): any;
    /**
     * Send initial data to page including experiment information
     */
    getAWContent(): Promise<any>;
    AWGetFeatureConfig(): any;
    AWGetFxAMetricsFlowURI(): any;
    AWGetSelectedTheme(): any;
    /**
     * Send Event Telemetry
     *
     * @param {object} eventData
     */
    AWSendEventTelemetry(eventData: object): void;
    /**
     * Send message that can be handled by AboutWelcomeParent.jsm
     *
     * @param {string} type
     * @param {any=} data
     * @returns {Promise<unknown>}
     */
    AWSendToParent(type: string, data?: any | undefined): Promise<unknown>;
    AWWaitForMigrationClose(): any;
    AWFinish(): void;
    AWEnsureLangPackInstalled(negotiated: any, screenContent: any): any;
    AWSetRequestedLocales(requestSystemLocales: any): any;
    AWNegotiateLangPackForLanguageMismatch(appAndSystemLocaleInfo: any): any;
    AWSendToDeviceEmailsSupported(): any;
    AWNewScreen(screenId: any): any;
    /**
     * @param {{type: string, detail?: any}} event
     * @override
     */
    override handleEvent(event: {
        type: string;
        detail?: any;
    }): void;
}
export class AboutWelcomeShoppingChild extends AboutWelcomeChild {
    static optedInSession: boolean;
    static eligiblePDPvisits: any[];
    surveyEnabled: any;
    resetChildStates: () => void;
    computeEligiblePDPCount(data: any): void;
    evaluateAndShowSurvey(): void;
    showMicroSurvey: boolean;
    setOptInTime(): void;
    handleEvent(event: any): void;
    renderMessage(): void;
    setShoppingSurveySeen(): void;
    AWSetProductURL(productUrl: any): void;
    AWEnsureLangPackInstalled(): void;
}
