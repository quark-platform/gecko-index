export function Narrator(win: any, languagePromise: any): void;
export class Narrator {
    constructor(win: any, languagePromise: any);
    _winRef: any;
    _languagePromise: any;
    _inTest: boolean;
    _speechOptions: {};
    _startTime: number;
    _stopped: boolean;
    get _doc(): any;
    get _win(): any;
    get _treeWalker(): any;
    _treeWalkerRef: WeakMap<WeakKey, any>;
    get _timeIntoParagraph(): number;
    get speaking(): any;
    _getVoice(voiceURI: any): any;
    _voiceMap: Map<any, any>;
    _isParagraphInView(paragraph: any): boolean;
    _sendTestEvent(eventType: any, detail: any): void;
    _speakInner(): Promise<any>;
    start(speechOptions: any): any;
    stop(): void;
    skipNext(): void;
    skipPrevious(): void;
    setRate(rate: any): void;
    setVoice(voice: any): void;
    _goBackParagraphs(count: any): void;
}
