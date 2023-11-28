export const event: typeof EventModule;
declare class EventModule {
    destroy(): void;
    interceptEvent(name: any, payload: any): any;
    /**
     * Commands
     */
    testEmitWindowGlobalInRootEvent(params: any, destination: any): void;
}
export {};
xport {};
   let shiftKey: number;
        let ctrlKey: number;
        let altKey: number;
        let metaKey: number;
    }
    namespace MouseButton {
        function isPrimary(button: any): boolean;
        function isAuxiliary(button: any): boolean;
        function isSecondary(button: any): boolean;
    }
    namespace DoubleClickTracker {
        let firstClick: boolean;
        function isClicked(): boolean;
        function setClick(): void;
        function resetClick(): void;
        function startTimer(): void;
        function cancelTimer(): void;
    }
    /**
     * Synthesise a mouse event at a point.
     *
     * If the type is specified in opts, an mouse event of that type is
     * fired. Otherwise, a mousedown followed by a mouseup is performed.
     *
     * @param {number} left
     *     Offset from viewport left, in CSS pixels
     * @param {number} top
     *     Offset from viewport top, in CSS pixels
     * @param {object} opts
     *     Object which may contain the properties "shiftKey", "ctrlKey",
     *     "altKey", "metaKey", "accessKey", "clickCount", "button", and
     *     "type".
     * @param {Window} win
     *     Window object.
     *
     * @returns {boolean} defaultPrevented
     */
    function synthesizeMouseAtPoint(left: number, top: number, opts: any, win: Window): boolean;
    /**
     * Synthesise a touch event at a point.
     *
     * If the type is specified in opts, a touch event of that type is
     * fired. Otherwise, a touchstart followed by a touchend is performed.
     *
     * @param {number} left
     *     Offset from viewport left, in CSS pixels
     * @param {number} top
     *     Offset from viewport top, in CSS pixels
     * @param {object} opts
     *     Object which may contain the properties "id", "rx", "ry", "angle",
     *     "force", "shiftKey", "ctrlKey", "altKey", "metaKey", "accessKey",
     *     "type".
     * @param {Window} win
     *     Window object.
     *
     * @returns {boolean} defaultPrevented
     */
    function synthesizeTouchAtPoint(left: number, top: number, opts: any, win: Window): boolean;
    /**
     * Synthesise a wheel scroll event at a point.
     *
     * @param {number} left
     *     Offset from viewport left, in CSS pixels
     * @param {number} top
     *     Offset from viewport top, in CSS pixels
     * @param {object} opts
     *     Object which may contain the properties "shiftKey", "ctrlKey",
     *     "altKey", "metaKey", "accessKey", "deltaX", "deltaY", "deltaZ",
     *     "deltaMode", "lineOrPageDeltaX", "lineOrPageDeltaY", "isMomentum",
     *     "isNoLineOrPageDelta", "isCustomizedByPrefs", "expectedOverflowDeltaX",
     *     "expectedOverflowDeltaY"
     * @param {Window} win
     *     Window object.
     */
    function synthesizeWheelAtPoint(left: number, top: number, opts: any, win: Window): any;
    function synthesizeMultiTouch(opts: any, win: any): void;
    /**
     * Synthesize a keydown event for a single key.
     *
     * @param {object} key
     *     Key data as returned by keyData.getData
     * @param {Window} win
     *     Window object.
     */
    function sendKeyDown(key: any, win: Window): void;
    /**
     * Synthesize a keyup event for a single key.
     *
     * @param {object} key
     *     Key data as returned by keyData.getData
     * @param {Window} win
     *     Window object.
     */
    function sendKeyUp(key: any, win: Window): void;
    /**
     * Synthesize a key event for a single key.
     *
     * @param {object} key
     *     Key data as returned by keyData.getData
     * @param {Window} win
     *     Window object.
     * @param {string=} type
     *     Event to emit. By default the full keydown/keypressed/keyup event
     *     sequence is emitted.
     */
    function sendSingleKey(key: any, win: Window, type?: string): void;
    /**
     * Send a string as a series of keypresses.
     *
     * @param {string} keyString
     *     Sequence of characters to send as key presses
     * @param {Window} win
     *     Window object
     */
    function sendKeys(keyString: string, win: Window): void;
    function sendEvent(eventType: any, el: any, modifiers?: {}, opts?: {}): void;
    function mouseover(el: any, modifiers?: {}, opts?: {}): void;
    function mousemove(el: any, modifiers?: {}, opts?: {}): void;
    function mousedown(el: any, modifiers?: {}, opts?: {}): void;
    function mouseup(el: any, modifiers?: {}, opts?: {}): void;
    function click(el: any, modifiers?: {}, opts?: {}): void;
    function change(el: any, modifiers?: {}, opts?: {}): void;
    function input(el: any, modifiers?: {}, opts?: {}): void;
}
