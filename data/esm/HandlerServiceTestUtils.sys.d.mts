export namespace HandlerServiceTestUtils {
    /**
     * Retrieves the names of all the MIME types and protocols configured in the
     * handler service instance currently under testing.
     *
     * @return Array of strings like "example/type" or "example-scheme", sorted
     *         alphabetically regardless of category.
     */
    function getAllHandlerInfoTypes(): any[];
    /**
     * Retrieves all the configured handlers for MIME types and protocols.
     *
     * @note The nsIHandlerInfo instances returned by the "enumerate" method
     *       cannot be used for testing because they incorporate information from
     *       the operating system and also from the default nsIHandlerService
     *       instance, independently from what instance is under testing.
     *
     * @return Array of nsIHandlerInfo instances sorted by their "type" property.
     */
    function getAllHandlerInfos(): any[];
    /**
     * Retrieves an nsIHandlerInfo for the given MIME type or protocol, which
     * incorporates information from the operating system and also from the
     * handler service instance currently under testing.
     *
     * @note If the handler service instance currently under testing is not the
     *       default one and the requested type is a MIME type, the returned
     *       nsIHandlerInfo will include information from the default
     *       nsIHandlerService instance. This cannot be avoided easily because the
     *       getMIMEInfoFromOS method is not exposed to JavaScript.
     *
     * @param type
     *        MIME type or scheme name of the nsIHandlerInfo to retrieve.
     *
     * @return The populated nsIHandlerInfo instance.
     */
    function getHandlerInfo(type: any): any;
    /**
     * Creates an nsIHandlerInfo for the given MIME type or protocol, initialized
     * to the default values for the current platform.
     *
     * @note For this method to work, the specified MIME type or protocol must not
     *       be configured in the default handler service instance or the one
     *       under testing, and must not be registered in the operating system.
     *
     * @param type
     *        MIME type or scheme name of the nsIHandlerInfo to create.
     *
     * @return The blank nsIHandlerInfo instance.
     */
    function getBlankHandlerInfo(type: any): any;
    /**
     * Checks whether an nsIHandlerInfo instance matches the provided object.
     */
    function assertHandlerInfoMatches(handlerInfo: any, expected: any): void;
    /**
     * Checks whether an nsIHandlerApp instance matches the provided object.
     */
    function assertHandlerAppMatches(handlerApp: any, expected: any): void;
}
