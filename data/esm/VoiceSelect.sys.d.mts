export function VoiceSelect(win: any, label: any): void;
export class VoiceSelect {
    constructor(win: any, label: any);
    _winRef: any;
    _elementRef: any;
    add(label: any, value: any): any;
    addOptions(options: any): void;
    clear(): void;
    toggleList(force: any, focus?: boolean): void;
    handleEvent(evt: any): void;
    set selected(option: any);
    get selected(): any;
    _getPagedOption(option: any, up: any): any;
    _keyDownedButton(evt: any): void;
    _keyDownedInBox(evt: any): void;
    _select(option: any, suppressEvent?: boolean): void;
    _updateDropdownHeight(now: any): void;
    _pendingDropdownUpdate: boolean;
    _getOptionFromValue(value: any): any;
    get element(): any;
    get listbox(): any;
    get selectToggle(): any;
    get _win(): any;
    get _doc(): any;
    get options(): any;
    set value(value: any);
    get value(): any;
}
