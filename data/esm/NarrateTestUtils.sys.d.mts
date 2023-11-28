export namespace NarrateTestUtils {
    let TOGGLE: string;
    let POPUP: string;
    let VOICE_SELECT: string;
    let VOICE_OPTIONS: string;
    let VOICE_SELECTED: string;
    let VOICE_SELECT_LABEL: string;
    let RATE: string;
    let START: string;
    let STOP: string;
    let BACK: string;
    let FORWARD: string;
    function isVisible(element: any): any;
    function isStoppedState(window: any, ok: any): void;
    function isStartedState(window: any, ok: any): void;
    function selectVoice(window: any, voiceUri: any): any;
    function getEventUtils(window: any): {
        _EU_Ci: any;
        _EU_Cc: any;
        window: any;
        setTimeout: any;
        parent: any;
        navigator: any;
        KeyboardEvent: any;
        KeyEvent: any;
    };
    function getReaderReadyPromise(window: any): Promise<any>;
    function waitForNarrateToggle(window: any): any;
    function waitForPrefChange(pref: any): Promise<any>;
    function sendBoundaryEvent(window: any, name: any, charIndex: any, charLength: any): void;
    function isWordHighlightGone(window: any, ok: any): void;
    function getWordHighlights(window: any): {
        word: any;
        left: number;
        top: number;
    }[];
}
