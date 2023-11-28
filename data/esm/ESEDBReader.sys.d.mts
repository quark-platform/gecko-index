export function declareESEFunction(methodName: any, ...args: any[]): void;
export function loadLibraries(): void;
export namespace KERNEL {
    let FILETIME: any;
    let SYSTEMTIME: any;
}
export namespace COLUMN_TYPES {
    let JET_coltypBit: number;
    let JET_coltypUnsignedByte: number;
    let JET_coltypShort: number;
    let JET_coltypLong: number;
    let JET_coltypCurrency: number;
    let JET_coltypIEEESingle: number;
    let JET_coltypIEEEDouble: number;
    let JET_coltypDateTime: number;
    let JET_coltypBinary: number;
    let JET_coltypText: number;
    let JET_coltypLongBinary: number;
    let JET_coltypLongText: number;
    let JET_coltypUnsignedLong: number;
    let JET_coltypLongLong: number;
    let JET_coltypGUID: number;
}
export namespace ESE {
    export let JET_ERR: any;
    export let JET_PCWSTR: any;
    export let JET_API_ITEM: any;
    import JET_INSTANCE = JET_API_ITEM;
    export { JET_INSTANCE };
    import JET_SESID = JET_API_ITEM;
    export { JET_SESID };
    import JET_TABLEID = JET_API_ITEM;
    export { JET_TABLEID };
    export let JET_COLUMNID: any;
    export let JET_GRBIT: any;
    export let JET_COLTYP: any;
    export let JET_DBID: any;
    export let JET_COLUMNDEF: any;
}
export let gLibs: {};
export namespace ESEDBReader {
    export function openDB(rootDir: any, dbFile: any, logDir: any): any;
    export function dbLocked(dbFile: any): Promise<any>;
    export function closeDB(db: any): void;
    export { COLUMN_TYPES };
}
