export class Input {
    /**
     * Simulate key events.
     *
     * @param {object} options
     *        - autoRepeat (not supported)
     *        - code (not supported)
     *        - key
     *        - isKeypad (not supported)
     *        - location (not supported)
     *        - modifiers
     *        - text (not supported)
     *        - type
     *        - unmodifiedText (not supported)
     *        - windowsVirtualKeyCode
     *        - nativeVirtualKeyCode (not supported)
     *        - keyIdentifier (not supported)
     *        - isSystemKey (not supported)
     */
    dispatchKeyEvent(options?: object): Promise<void>;
    /**
     * Simulate mouse events.
     *
     * @param {object} options
     * @param {string} options.type
     * @param {number} options.x
     * @param {number} options.y
     * @param {number} options.modifiers
     * @param {number} options.timestamp [Not Supported]
     * @param {string} options.button
     * @param {number} options.buttons [Not Supported]
     * @param {string} options.clickCount
     * @param {number} options.deltaX [Not Supported]
     * @param {number} options.deltaY [Not Supported]
     * @param {string} options.pointerType [Not Supported]
     */
    dispatchMouseEvent(options?: {
        type: string;
        x: number;
        y: number;
        modifiers: number;
        timestamp: number;
        button: string;
        buttons: number;
        clickCount: string;
        deltaX: number;
        deltaY: number;
        pointerType: string;
    }): Promise<void>;
    /**
     * Memoized EventUtils getter.
     */
    _getEventUtils(win: any): {
        window: any;
        parent: any;
        _EU_Ci: any;
        _EU_Cc: any;
    };
    _eventUtils: {
        window: any;
        parent: any;
        _EU_Ci: any;
        _EU_Cc: any;
    };
}
export namespace Input {
    namespace Button {
        let left: number;
        let middle: number;
        let right: number;
        let back: number;
        let forward: number;
    }
    namespace Modifier {
        let alt: number;
        let ctrl: number;
        let meta: number;
        let shift: number;
    }
}
