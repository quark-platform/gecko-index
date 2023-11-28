export namespace WindowGlobalLogger {
    /**
     * This logger can run from the content or parent process, and windowGlobal
     * will either be of type `WindowGlobalParent` or `WindowGlobalChild`.
     *
     * The interface for each type can be found in WindowGlobalActors.webidl
     * (https://searchfox.org/mozilla-central/source/dom/chrome-webidl/WindowGlobalActors.webidl)
     *
     * @param {WindowGlobalParent|WindowGlobalChild} windowGlobal
     *        The window global to log. See WindowGlobalActors.webidl for details
     *        about the types.
     * @param {String} message
     *        A custom message that will be displayed at the beginning of the log.
     */
    function logWindowGlobal(windowGlobal: any, message: string): void;
}
