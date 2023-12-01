export class AboutMessagePreviewChild extends JSWindowActorChild {
    handleEvent(event: any): void;
    actorCreated(): void;
    exportFunctions(): void;
    /**
     * Check if the Message Preview feature is enabled. This reflects the value of
     * the pref `browser.newtabpage.activity-stream.asrouter.devtoolsEnabled`.
     *
     * @returns {boolean}
     */
    MPIsEnabled(): boolean;
    /**
     * Route a message to the parent process to be displayed with the relevant
     * messaging surface.
     *
     * @param {object} message
     */
    MPShowMessage(message: object): void;
    /**
     * Check if a hint should be shown about how to enable Message Preview. The
     * hint is only displayed in local/unofficial builds.
     *
     * @returns {boolean}
     */
    MPShouldShowHint(): boolean;
}
