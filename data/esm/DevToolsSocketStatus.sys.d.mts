export namespace DevToolsSocketStatus {
    let _browserToolboxSockets: number;
    let _otherSockets: number;
    /**
     * Check if there are opened DevTools sockets.
     *
     * @param {Object=} options
     * @param {boolean=} options.excludeBrowserToolboxSockets
     *     Exclude sockets opened by local Browser Toolbox sessions. Defaults to
     *     false.
     *
     * @return {boolean}
     *     Returns true if there are DevTools sockets opened and matching the
     *     provided options if any.
     */
    function hasSocketOpened(options?: any): boolean;
    function notifySocketOpened(options: any): void;
    function notifySocketClosed(options: any): void;
}
