export namespace pktTelemetry {
    const impressionId: any;
    function getOrCreateImpressionId(): any;
    function _profileCreationDate(): any;
    /**
     * Records the provided data and common pocket-button data to Glean,
     * then submits it all in a pocket-button ping.
     *
     * @param eventAction - A string like "click"
     * @param eventSource - A string like "save_button"
     * @param eventPosition - (optional) A 0-based index.
     *                        If falsey and not 0, is coalesced to undefined.
     * @param model - (optional) An identifier for the machine learning model
     *                used to generate the recommendations like "vec-bestarticle"
     */
    function submitPocketButtonPing(eventAction: any, eventSource: any, eventPosition?: any, model?: any): void;
}
