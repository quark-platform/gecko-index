/// <reference types="gecko-types" />
/// <reference types="gecko-types" />
export function NarrateControls(win: any, languagePromise: any): void;
export class NarrateControls {
    constructor(win: any, languagePromise: any);
    _winRef: any;
    _languagePromise: any;
    narrator: Narrator;
    voiceSelect: VoiceSelect;
    handleEvent(evt: any): void;
    /**
     * Returns true if synth voices are available.
     */
    _setupVoices(): any;
    _voicesInitialized: boolean;
    _getVoicePref(): any;
    _onRateInput(evt: any): void;
    _onVoiceChange(): void;
    _onButtonClick(evt: any): void;
    _updateSpeechControls(speaking: any): void;
    _createVoiceLabel(voice: any): any;
    _getLanguageName(lang: any): any;
    _convertRate(rate: any): number;
    get _win(): any;
    get _doc(): any;
    get rate(): number;
    get voice(): any;
}
import { Narrator } from "resource://gre/modules/narrate/Narrator.sys.mjs";
import { VoiceSelect } from "resource://gre/modules/narrate/VoiceSelect.sys.mjs";
