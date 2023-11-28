export class GeckoViewExperimentDelegateParent {
    /**
     * Gets experiment information on a given feature.
     *
     * @param feature the experiment item to retrieve information on
     * @returns a promise of success with a JSON message or failure
     */
    getExperimentFeature(feature: any): Promise<any>;
    /**
     * Records an exposure event, that the experiment area was encountered, on a given feature.
     *
     * @param feature the experiment item to record an exposure event of
     * @returns a promise of success or failure
     */
    recordExposure(feature: any): Promise<any>;
    /**
     * Records an exposure event on a specific experiment feature and element.
     *
     * Note: Use recordExposure, if the slug is not known.
     *
     * @param feature the experiment item to record an exposure event of
     * @param slug a specific experiment element
     * @returns a promise of success or failure
     */
    recordExperimentExposure(feature: any, slug: any): Promise<any>;
    /**
     * For recording malformed configuration.
     *
     * @param feature the experiment item to record an exposure event of
     * @param part malformed information to send
     * @returns a promise of success or failure
     */
    recordExperimentMalformedConfig(feature: any, part: any): Promise<any>;
}
