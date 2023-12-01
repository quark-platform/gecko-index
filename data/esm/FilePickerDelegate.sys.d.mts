export class FilePickerDelegate {
    init(aParent: any, aTitle: any, aMode: any): void;
    _prompt: any;
    _msg: {
        type: string;
        title: any;
        mode: string;
    };
    _mode: any;
    _mimeTypes: any[];
    _capture: any;
    get mode(): any;
    appendRawFilter(aFilter: any): void;
    show(): void;
    open(aFilePickerShownCallback: any): void;
    _resolveFiles(aFiles: any, aCallback: any): Promise<void>;
    _fileData: {
        file: any;
        domFile: any;
    }[];
    get file(): any;
    get fileURL(): nsIURIType;
    _getEnumerator(aDOMFile: any): Generator<any, void, unknown>;
    get files(): Generator<any, void, unknown>;
    _getDOMFile(aPath: any): any;
    get domFileOrDirectory(): any;
    get domFileOrDirectoryEnumerator(): Generator<any, void, unknown>;
    set defaultString(aValue: string);
    get defaultString(): string;
    set defaultExtension(aValue: string);
    get defaultExtension(): string;
    set filterIndex(aValue: number);
    get filterIndex(): number;
    set displayDirectory(aValue: any);
    get displayDirectory(): any;
    set displaySpecialDirectory(aValue: string);
    get displaySpecialDirectory(): string;
    set addToRecentDocs(aValue: boolean);
    get addToRecentDocs(): boolean;
    set okButtonLabel(aValue: string);
    get okButtonLabel(): string;
    set capture(aValue: any);
    get capture(): any;
    classID: unknown;
    QueryInterface: MozQueryInterface;
}
