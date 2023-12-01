export function WebVTTParserWrapper(): void;
export class WebVTTParserWrapper {
    loadParser(window: any): void;
    parser: any;
    parse(data: any): void;
    flush(): void;
    watch(callback: any): void;
    cancel(): void;
    convertCueToDOMTree(window: any, cue: any): any;
    processCues(window: any, cues: any, overlay: any, controls: any): void;
    classDescription: string;
    QueryInterface: MozQueryInterface;
}
