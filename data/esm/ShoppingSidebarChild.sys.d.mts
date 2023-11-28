export class ShoppingSidebarChild {
    actorCreated(): void;
    didDestroy(): void;
    _destroyed: boolean;
    receiveMessage(message: any): void;
    isSameProduct(newURI: any, currentURI: any): boolean;
    handleEvent(event: any): void;
    set productURI(uri: any);
    set product(product: any);
    get canFetchAndShowData(): boolean;
    get canFetchAndShowAd(): any;
    get userHasAdsEnabled(): any;
    optedInStateChanged(): void;
    adsEnabledByUserChanged(): void;
    getProductURI(): any;
    /**
     * This callback is invoked whenever something changes that requires
     * re-rendering content. The expected cases for this are:
     * - page navigations (both to new products and away from a product once
     *   the sidebar has been created)
     * - opt in state changes.
     *
     * @param {object?} options
     *        Optional parameter object.
     * @param {bool} options.haveUpdatedURI = false
     *        Whether we've got an up-to-date URI already. If true, we avoid
     *        fetching the URI from the parent, and assume `this.#productURI`
     *        is current. Defaults to false.
     * @param {bool} options.isPolledRequest = false
     *
     */
    updateContent({ haveUpdatedURI, isPolledRequest, }?: object | null): Promise<void>;
    /**
     * Utility function to determine if we should request ads.
     */
    canFetchAds(uri: any): any;
    /**
     * Utility function to determine if we should display ads. This is different
     * from fetching ads, because of ads exposure telemetry (bug 1858470).
     */
    canShowAds(uri: any): any;
    /**
     * Request recommended products for a given uri and send the recommendations
     * to the content if recommendations are enabled.
     *
     * @param {nsIURI} uri The uri of the current product page
     */
    requestRecommendations(uri: nsIURI): Promise<void>;
    sendToContent(eventName: any, detail: any): void;
    reportProductAvailable(): Promise<void>;
    #private;
}
