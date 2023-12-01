export class PictureInPictureLauncherChild extends JSWindowActorChild {
    handleEvent(event: any): void;
    receiveMessage(message: any): void;
    /**
     * Tells the parent to open a Picture-in-Picture window hosting
     * a clone of the passed video. If we know about a pre-existing
     * Picture-in-Picture window existing, this tells the parent to
     * close it before opening the new one.
     *
     * @param {Object} pipObject An object containing the video and reason
     * for toggling the PiP video
     *
     * @return {Promise}
     * @resolves {undefined} Once the new Picture-in-Picture window
     * has been requested.
     */
    togglePictureInPicture(pipObject: any): Promise<any>;
    /**
     * The keyboard was used to attempt to open Picture-in-Picture. If a video is focused,
     * select that video. Otherwise find the first playing video, or if none, the largest
     * dimension video. We suspect this heuristic will handle most cases, though we
     * might refine this later on. Note that we assume that this method will only be
     * called for the focused document.
     */
    keyToggle(): void;
}
/**
 * The PictureInPictureToggleChild is responsible for displaying the overlaid
 * Picture-in-Picture toggle over top of <video> elements that the mouse is
 * hovering.
 */
export class PictureInPictureToggleChild extends JSWindowActorChild {
    /**
     * This is a test-only function that returns true if a video is being tracked
     * for mouseover events after having intersected the viewport.
     */
    static isTracking(video: any): boolean;
    /**
     * Gets any Picture-in-Picture site-specific overrides stored in the
     * sharedData struct, and returns them as an Array of two-element Arrays,
     * where the first element is a MatchPattern and the second element is an
     * object of the form { policy, disabledKeyboardControls } (where each property
     * may be missing or undefined).
     *
     * @returns {Array<Array<2>>} Array of 2-element Arrays where the first element
     * is a MatchPattern and the second element is an object with optional policy
     * and/or disabledKeyboardControls properties.
     */
    static getSiteOverrides(): Array<Array<2>>;
    weakDocStates: WeakMap<object, any>;
    toggleEnabled: boolean;
    toggleTesting: boolean;
    observerFunction: (subject: any, topic: any, data: any) => void;
    eligiblePipVideos: WeakSet<object>;
    trackingVideos: WeakSet<object>;
    receiveMessage(message: any): any;
    didDestroy(): void;
    videoWrapper: PictureInPictureChildVideoWrapper;
    isDestroyed: boolean;
    observe(subject: any, topic: any, data: any): void;
    /**
     * Returns the state for the current document referred to via
     * this.document. If no such state exists, creates it, stores it
     * and returns it.
     */
    get docState(): any;
    /**
     * Returns the video that the user was last hovering with the mouse if it
     * still exists.
     *
     * @return {Element} the <video> element that the user was last hovering,
     * or null if there was no such <video>, or the <video> no longer exists.
     */
    getWeakOverVideo(): Element;
    handleEvent(event: any): void;
    /**
     * Adds a <video> to the IntersectionObserver so that we know when it becomes
     * visible.
     *
     * @param {Element} video The <video> element to register.
     */
    registerVideo(video: Element): void;
    updatePipVideoEligibility(video: any): void;
    handleEligiblePipVideoMutation(mutationList: any): void;
    urlbarToggle(): void;
    isVideoPiPEligible(video: any): boolean;
    /**
     * Changes from the first-time toggle to the icon toggle if the Nimbus variable `displayDuration`'s
     * end date is reached when hovering over a video. The end date is calculated according to the timestamp
     * indicating when the PiP toggle was first seen.
     * @param {Number} firstSeenStartSeconds the timestamp in seconds indicating when the PiP toggle was first seen
     */
    changeToIconIfDurationEnd(firstSeenStartSeconds: number): void;
    /**
     * Called by the IntersectionObserver callback once a video becomes visible.
     * This adds some fine-grained checking to ensure that a sufficient amount of
     * the video is visible before we consider showing the toggles on it. For now,
     * that means that the entirety of the video must be in the viewport.
     *
     * @param {IntersectionEntry} intersectionEntry An IntersectionEntry passed to
     * the IntersectionObserver callback.
     * @return bool Whether or not we should start tracking mousemove events for
     * this registered video.
     */
    worthTracking(intersectionEntry: IntersectionEntry): any;
    /**
     * Called by the IntersectionObserver once a video crosses one of the
     * thresholds dictated by the IntersectionObserver configuration.
     *
     * @param {Array<IntersectionEntry>} A collection of one or more
     * IntersectionEntry's for <video> elements that might have entered or exited
     * the viewport.
     */
    onIntersection(entries: any): void;
    addMouseButtonListeners(): void;
    removeMouseButtonListeners(): void;
    /**
     * One of the challenges of displaying this toggle is that many sites put
     * things over top of <video> elements, like custom controls, or images, or
     * all manner of things that might intercept mouseevents that would normally
     * fire directly on the <video>. In order to properly detect when the mouse
     * is over top of one of the <video> elements in this situation, we currently
     * add a mousemove event handler to the entire document, and stash the most
     * recent mousemove that fires. At periodic intervals, that stashed mousemove
     * event is checked to see if it's hovering over one of our registered
     * <video> elements.
     *
     * This sort of thing will not be necessary once bug 1539652 is fixed.
     */
    beginTrackingMouseOverVideos(): void;
    /**
     * If we no longer have any interesting videos in the viewport, we deregister
     * the mousemove and click listeners, and also remove any toggles that might
     * be on the page still.
     */
    stopTrackingMouseOverVideos(): void;
    /**
     * This pageshow event handler will get called if and when we complete a tab
     * tear out or in. If we happened to be tracking videos before the tear
     * occurred, we re-add the mouse event listeners so that they're attached to
     * the right WindowRoot.
     *
     * @param {Event} event The pageshow event fired when completing a tab tear
     * out or in.
     */
    onPageShow(event: Event): void;
    /**
     * This pagehide event handler will get called if and when we start a tab
     * tear out or in. If we happened to be tracking videos before the tear
     * occurred, we remove the mouse event listeners. We'll re-add them when the
     * pageshow event fires.
     *
     * @param {Event} event The pagehide event fired when starting a tab tear
     * out or in.
     */
    onPageHide(event: Event): void;
    /**
     * If we're tracking <video> elements, this pointerdown event handler is run anytime
     * a pointerdown occurs on the document. This function is responsible for checking
     * if the user clicked on the Picture-in-Picture toggle. It does this by first
     * checking if the video is visible beneath the point that was clicked. Then
     * it tests whether or not the pointerdown occurred within the rectangle of the
     * toggle. If so, the event's propagation is stopped, and Picture-in-Picture is
     * triggered.
     *
     * @param {Event} event The mousemove event.
     */
    onPointerDown(event: Event): void;
    startPictureInPicture(event: any, video: any, toggle: any): void;
    /**
     * Called for mousedown, pointerup, mouseup and click events. If we
     * detected that the user is clicking on the Picture-in-Picture toggle,
     * these events are cancelled in the capture-phase before they reach
     * content. The state for suppressing these events is cleared on the
     * click event (unless the mouseup occurs on a different element from
     * the mousedown, in which case, the state is cleared on mouseup).
     *
     * @param {Event} event A mousedown, pointerup, mouseup or click event.
     */
    onMouseButtonEvent(event: Event): void;
    /**
     * Called on mouseout events to determine whether or not the mouse has
     * exited the window.
     *
     * @param {Event} event The mouseout event.
     */
    onMouseOut(event: Event): void;
    /**
     * Called for each mousemove event when we're tracking those events to
     * determine if the cursor is hovering over a <video>.
     *
     * @param {Event} event The mousemove event.
     */
    onMouseMove(event: Event): void;
    /**
     * Called by the DeferredTask after MOUSEMOVE_PROCESSING_DELAY_MS
     * milliseconds. Checked to see if that mousemove happens to be overtop of
     * any interesting <video> elements that we want to display the toggle
     * on. If so, puts the toggle on that video.
     */
    checkLastMouseMove(): void;
    /**
     * Called once it has been determined that the mouse is overtop of a video
     * that is in the viewport.
     *
     * @param {Element} video The video the mouse is over.
     */
    onMouseOverVideo(video: Element, event: any): void;
    /**
     * Checks if a mouse event is happening over a toggle element. If it is,
     * sets the hovering class on it. Otherwise, it clears the hovering
     * class.
     *
     * @param {Element} toggle The Picture-in-Picture toggle to check.
     * @param {MouseEvent} event A MouseEvent to test.
     */
    checkHoverToggle(toggle: Element, event: MouseEvent): void;
    /**
     * Called once it has been determined that the mouse is no longer overlapping
     * a video that we'd previously called onMouseOverVideo with.
     *
     * @param {Element} video The video that the mouse left.
     */
    onMouseLeaveVideo(video: Element): void;
    /**
     * Given a reference to a Picture-in-Picture toggle element, determines
     * if a MouseEvent event is occurring within its bounds.
     *
     * @param {Element} toggle The Picture-in-Picture toggle.
     * @param {MouseEvent} event A MouseEvent to test.
     *
     * @return {Boolean}
     */
    isMouseOverToggle(toggle: Element, event: MouseEvent): boolean;
    /**
     * Checks a contextmenu event to see if the mouse is currently over the
     * Picture-in-Picture toggle. If so, sends a message to the parent process
     * to open up the Picture-in-Picture toggle context menu.
     *
     * @param {MouseEvent} event A contextmenu event.
     */
    checkContextMenu(event: MouseEvent): void;
    /**
     * Returns the appropriate root element for the Picture-in-Picture toggle,
     * depending on whether or not we're using the experimental toggle preference.
     *
     * @param {Element} shadowRoot The shadowRoot of the video element.
     * @returns {Element} The toggle element.
     */
    getToggleElement(shadowRoot: Element): Element;
}
export class PictureInPictureChild extends JSWindowActorChild {
    static videoIsPlaying(video: any): boolean;
    static videoIsMuted(video: any): any;
    weakVideo: any;
    weakPlayerContent: any;
    _currentWebVTTTrack: any;
    observerFunction: any;
    observe(subject: any, topic: any, data: any): void;
    /**
     * Creates a link element with a reference to the css stylesheet needed
     * for text tracks responsive styling.
     * @returns {Element} the link element containing text tracks stylesheet.
     */
    createTextTracksStyleSheet(): Element;
    /**
     * Sets up Picture-in-Picture to support displaying text tracks from WebVTT
     * or if WebVTT isn't supported we will register the caption change mutation observer if
     * the site wrapper exists.
     *
     * If the originating video supports WebVTT, try to read the
     * active track and cues. Display any active cues on the pip window
     * right away if applicable.
     *
     * @param originatingVideo {Element|null}
     *  The <video> being displayed in Picture-in-Picture mode, or null if that <video> no longer exists.
     */
    setupTextTracks(originatingVideo: Element | null): void;
    /**
     * Toggle the visibility of the subtitles in the PiP window
     */
    toggleTextTracks(): void;
    /**
     * Removes existing text tracks on the Picture in Picture window.
     *
     * If the originating video supports WebVTT, clear references to active
     * tracks and cues. No longer listen for any track or cue changes.
     *
     * @param originatingVideo {Element|null}
     *  The <video> being displayed in Picture-in-Picture mode, or null if that <video> no longer exists.
     */
    removeTextTracks(originatingVideo: Element | null): void;
    /**
     * Moves the text tracks container position above the pip window's video controls
     * if their positions visually overlap. Since pip controls are within the parent
     * process, we determine if pip video controls and text tracks visually overlap by
     * comparing their relative positions with DOMRect.
     *
     * If overlap is found, set attribute "overlap-video-controls" to move text tracks
     * and define a new relative bottom position according to pip window size and the
     * position of video controls.
     *  @param {Object} data args needed to determine if text tracks must be moved
     */
    moveTextTracks(data: any): void;
    /**
     * Updates the text content for the container that holds and displays text tracks
     * on the pip window.
     * @param textTrackCues {TextTrackCueList|null}
     *  Collection of TextTrackCue objects containing text displayed, or null if there is no cue to display.
     */
    updateWebVTTTextTracksDisplay(textTrackCues: TextTrackCueList | null): void;
    set isSubtitlesEnabled(val: boolean);
    get isSubtitlesEnabled(): boolean;
    /**
     * Re-orders list of multiple active cues to ensure cues are rendered in the correct order.
     * How cues are ordered depends on the VTTCue.line value of the cue.
     *
     * If line is string "auto", we want to reverse the order of cues.
     * Cues are read from top to bottom in a vtt file, but are inserted into a video from bottom to top.
     * Ensure this order is followed.
     *
     * If line is an integer or percentage, we want to order cues according to numeric value.
     * Assumptions:
     *  1) all active cues are numeric
     *  2) all active cues are in range 0..100
     *  3) all actives cue are horizontal (no VTTCue.vertical)
     *  4) all active cues with VTTCue.line integer have VTTCue.snapToLines = true
     *  5) all active cues with VTTCue.line percentage have VTTCue.snapToLines = false
     *
     * vtt.jsm currently sets snapToLines to false if line is a percentage value, but
     * cues are still ordered by line. In most cases, snapToLines is set to true by default,
     * unless intentionally overridden.
     * @param allCuesArray {Array<VTTCue>} array of active cues
     */
    getOrderedWebVTTCues(allCuesArray: Array<VTTCue>): void;
    /**
     * Returns a reference to the PiP's <video> element being displayed in Picture-in-Picture
     * mode.
     *
     * @return {Element} The <video> being displayed in Picture-in-Picture mode, or null
     * if that <video> no longer exists.
     */
    getWeakVideo(): Element;
    /**
     * Returns a reference to the inner window of the about:blank document that is
     * cloning the originating <video> in the always-on-top player <xul:browser>.
     *
     * @return {Window} The inner window of the about:blank player <xul:browser>, or
     * null if that window has been closed.
     */
    getWeakPlayerContent(): Window;
    /**
     * Returns true if the passed video happens to be the one that this
     * content process is running in a Picture-in-Picture window.
     *
     * @param {Element} video The <video> element to check.
     *
     * @return {Boolean}
     */
    inPictureInPicture(video: Element): boolean;
    handleEvent(event: any): void;
    emptiedTimeout: number;
    /**
     * Tells the parent to close a pre-existing Picture-in-Picture
     * window.
     *
     * @return {Promise}
     *
     * @resolves {undefined} Once the pre-existing Picture-in-Picture
     * window has unloaded.
     */
    closePictureInPicture({ reason }: {
        reason: any;
    }): Promise<any>;
    receiveMessage(message: any): void;
    /**
     * Set the current time of the video based of the position of the scrubber
     * @param {Number} scrubberPosition A number between 0 and 1 representing the position of the scrubber
     */
    setVideoTime(scrubberPosition: number, wasPlaying: any): void;
    /**
     * @returns {boolean} true if a textTrack with mode "hidden" should be treated as "showing"
     */
    shouldShowHiddenTextTracks(): boolean;
    /**
     * Updates this._currentWebVTTTrack if an active track is found
     * for the originating video.
     * @param {TextTrackList} textTrackList list of text tracks
     */
    setActiveTextTrack(textTrackList: TextTrackList): void;
    /**
     * Set the font size on the PiP window using the current font size value from
     * the "media.videocontrols.picture-in-picture.display-text-tracks.size" pref
     */
    setTextTrackFontSize(): void;
    /**
     * Keeps an eye on the originating video's document. If it ever
     * goes away, this will cause the Picture-in-Picture window for any
     * of its content to go away as well.
     */
    trackOriginatingVideo(originatingVideo: any): void;
    setUpCaptionChangeListener(originatingVideo: any): void;
    /**
     * Stops tracking the originating video's document. This should
     * happen once the Picture-in-Picture window goes away (or is about
     * to go away), and we no longer care about hearing when the originating
     * window's document unloads.
     */
    untrackOriginatingVideo(originatingVideo: any): void;
    /**
     * Runs in an instance of PictureInPictureChild for the
     * player window's content, and not the originating video
     * content. Sets up the player so that it clones the originating
     * video. If anything goes wrong during set up, a message is
     * sent to the parent to close the Picture-in-Picture window.
     *
     * @param videoRef {ContentDOMReference}
     *    A reference to the video element that a Picture-in-Picture window
     *    is being created for
     * @return {Promise}
     * @resolves {undefined} Once the player window has been set up
     * properly, or a pre-existing Picture-in-Picture window has gone
     * away due to an unexpected error.
     */
    setupPlayer(videoRef: ContentDOMReference): Promise<any>;
    videoWrapper: PictureInPictureChildVideoWrapper;
    onCueChange(e: any): void;
    play(): void;
    pause(): void;
    mute(): void;
    unmute(): void;
    /**
     * This checks if a given keybinding has been disabled for the specific site
     * currently being viewed.
     */
    isKeyDisabled(key: any): boolean;
    /**
     * This reuses the keyHandler logic in the VideoControlsWidget
     * https://searchfox.org/mozilla-central/rev/cfd1cc461f1efe0d66c2fdc17c024a203d5a2fd8/toolkit/content/widgets/videocontrols.js#1687-1810.
     * There are future plans to eventually combine the two implementations.
     */
    keyDown({ altKey, shiftKey, metaKey, ctrlKey, keyCode }: {
        altKey: any;
        shiftKey: any;
        metaKey: any;
        ctrlKey: any;
        keyCode: any;
    }): void;
    #private;
}
/**
 * The PictureInPictureChildVideoWrapper class handles providing a path to a script that
 * defines a "site wrapper" for the original <video> (or other controls API provided
 * by the site) to command it.
 *
 * This "site wrapper" provided to PictureInPictureChildVideoWrapper is a script file that
 * defines a class called `PictureInPictureVideoWrapper` and exports it. These scripts can
 * be found under "browser/extensions/pictureinpicture/video-wrappers" as part of the
 * Picture-In-Picture addon.
 *
 * Site wrappers need to adhere to a specific interface to work properly with
 * PictureInPictureChildVideoWrapper:
 *
 * - The "site wrapper" script must export a class called "PictureInPictureVideoWrapper"
 * - Method names on a site wrapper class should match its caller's name
 *   (i.e: PictureInPictureChildVideoWrapper.play will only call `play` on a site-wrapper, if available)
 */
declare class PictureInPictureChildVideoWrapper {
    /**
     * Create a wrapper for the original <video>
     *
     * @param {String|null} videoWrapperScriptPath
     *        Path to a wrapper script from the Picture-in-Picture addon. If a wrapper isn't
     *        provided to the class, then we fallback on a default implementation for
     *        commanding the original <video>.
     * @param {HTMLVideoElement} video
     *        The original <video> we want to create a wrapper class for.
     * @param {Object} pipChild
     *        Reference to PictureInPictureChild class calling this function.
     */
    constructor(videoWrapperScriptPath: string | null, video: HTMLVideoElement, pipChild: any);
    /**
     * Destroys the sandbox for the site wrapper class
     */
    destroy(): void;
    /**
     * Function to display the captions on the PiP window
     * @param text The captions to be shown on the PiP window
     */
    updatePiPTextTracks(text: any): void;
    /**
     * OVERRIDABLE - calls the play() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to handle video
     * behaviour when a video is played.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     */
    play(video: HTMLVideoElement): any;
    /**
     * OVERRIDABLE - calls the pause() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to handle video
     * behaviour when a video is paused.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     */
    pause(video: HTMLVideoElement): any;
    /**
     * OVERRIDABLE - calls the getPaused() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to determine if
     * a video is paused or not.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @returns {Boolean} Boolean value true if paused, or false if video is still playing
     */
    getPaused(video: HTMLVideoElement): boolean;
    /**
     * OVERRIDABLE - calls the getEnded() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to determine if
     * video playback or streaming has stopped.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @returns {Boolean} Boolean value true if the video has ended, or false if still playing
     */
    getEnded(video: HTMLVideoElement): boolean;
    /**
     * OVERRIDABLE - calls the getDuration() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to get the current
     * duration of a video in seconds.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @returns {Number} Duration of the video in seconds
     */
    getDuration(video: HTMLVideoElement): number;
    /**
     * OVERRIDABLE - calls the getCurrentTime() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to get the current
     * time of a video in seconds.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @returns {Number} Current time of the video in seconds
     */
    getCurrentTime(video: HTMLVideoElement): number;
    /**
     * OVERRIDABLE - calls the setCurrentTime() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to set the current
     * time of a video.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @param {Number} position
     *  The current playback time of the video
     * @param {Boolean} wasPlaying
     *  True if the video was playing before seeking else false
     */
    setCurrentTime(video: HTMLVideoElement, position: number, wasPlaying: boolean): any;
    /**
     * Return hours, minutes, and seconds from seconds
     * @param {Number} aSeconds
     *  The time in seconds
     * @returns {String} Timestamp string
     **/
    timeFromSeconds(aSeconds: number): string;
    /**
     * Format a timestamp from current time and total duration,
     * output as a string in the form '0:00 / 0:00'
     * @param {Number} aCurrentTime
     *  The current time in seconds
     * @param {Number} aDuration
     *  The total duration in seconds
     * @returns {String} Formatted timestamp
     **/
    formatTimestamp(aCurrentTime: number, aDuration: number): string;
    /**
     * OVERRIDABLE - calls the getVolume() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to get the volume
     * value of a video.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @returns {Number} Volume of the video between 0 (muted) and 1 (loudest)
     */
    getVolume(video: HTMLVideoElement): number;
    /**
     * OVERRIDABLE - calls the setVolume() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to set the volume
     * value of a video.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @param {Number} volume
     *  Value between 0 (muted) and 1 (loudest)
     */
    setVolume(video: HTMLVideoElement, volume: number): any;
    /**
     * OVERRIDABLE - calls the isMuted() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to get the mute
     * state a video.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @param {Boolean} shouldMute
     *  Boolean value true to mute the video, or false to unmute the video
     */
    isMuted(video: HTMLVideoElement): any;
    /**
     * OVERRIDABLE - calls the setMuted() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to mute or unmute
     * a video.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @param {Boolean} shouldMute
     *  Boolean value true to mute the video, or false to unmute the video
     */
    setMuted(video: HTMLVideoElement, shouldMute: boolean): any;
    /**
     * OVERRIDABLE - calls the setCaptionContainerObserver() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to listen for any cue changes in a
     * video's caption container and execute a callback function responsible for updating the pip window's text tracks container whenever
     * a cue change is triggered {@see updatePiPTextTracks()}.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @param {Function} callback
     *  The callback function to be executed when cue changes are detected
     */
    setCaptionContainerObserver(video: HTMLVideoElement, callback: Function): any;
    /**
     * OVERRIDABLE - calls the shouldHideToggle() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to determine if the pip toggle
     * for a video should be hidden by the site wrapper.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     * @returns {Boolean} Boolean value true if the pip toggle should be hidden by the site wrapper, or false if it should not
     */
    shouldHideToggle(video: HTMLVideoElement): boolean;
    /**
     * OVERRIDABLE - calls the isLive() method defined in the site wrapper script. Runs a fallback implementation
     * if the method does not exist or if an error is thrown while calling it. This method is meant to get if the
     * video is a live stream.
     * @param {HTMLVideoElement} video
     *  The originating video source element
     */
    isLive(video: HTMLVideoElement): any;
    #private;
}
export {};
