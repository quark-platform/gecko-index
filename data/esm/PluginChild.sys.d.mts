export class PluginChild {
    handleEvent(event: any): void;
    /**
     * Determines whether or not the crashed plugin is contained within current
     * full screen DOM element.
     * @param fullScreenElement (DOM element)
     *   The DOM element that is currently full screen, or null.
     * @param domElement
     *   The DOM element which contains the crashed plugin, or the crashed plugin
     *   itself.
     * @returns bool
     *   True if the plugin is a descendant of the full screen DOM element, false otherwise.
     **/
    isWithinFullScreenElement(fullScreenElement: any, domElement: any): any;
    /**
     * The PluginCrashed event handler. The target of the event is the
     * document that GMP is being used in.
     */
    onPluginCrashed(aEvent: any): Promise<void>;
}
