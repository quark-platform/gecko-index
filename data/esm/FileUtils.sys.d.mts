export namespace FileUtils {
    let MODE_RDONLY: number;
    let MODE_WRONLY: number;
    let MODE_RDWR: number;
    let MODE_CREATE: number;
    let MODE_APPEND: number;
    let MODE_TRUNCATE: number;
    let PERMS_FILE: number;
    let PERMS_DIRECTORY: number;
    function getDir(key: any, pathArray: any): void;
    function openFileOutputStream(file: any, modeFlags: any): any;
    function openAtomicFileOutputStream(file: any, modeFlags: any): any;
    function openSafeFileOutputStream(file: any, modeFlags: any): any;
    function _initFileOutputStream(fos: any, file: any, modeFlags: any): any;
    function closeAtomicFileOutputStream(stream: any): void;
    function closeSafeFileOutputStream(stream: any): void;
    let File: new (...params: never) => unknown;
}
