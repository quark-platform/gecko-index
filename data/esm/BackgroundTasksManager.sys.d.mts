export class BackgroundTasksManager {
    get helpInfo(): any;
    handle(commandLine: any): void;
    runBackgroundTaskNamed(name: any, commandLine: any): Promise<number>;
    classID: any;
    QueryInterface: any;
}
export namespace EXIT_CODE {
    let SUCCESS: number;
    let NOT_FOUND: number;
    let EXCEPTION: number;
    let TIMEOUT: number;
    let LAST_RESERVED: number;
}
