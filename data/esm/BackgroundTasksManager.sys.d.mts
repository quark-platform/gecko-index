export class BackgroundTasksManager {
    get helpInfo(): any;
    handle(commandLine: any): void;
    runBackgroundTaskNamed(name: any, commandLine: any): Promise<number>;
    classID: unknown;
    QueryInterface: MozQueryInterface;
}
export namespace EXIT_CODE {
    let SUCCESS: number;
    let NOT_FOUND: number;
    let EXCEPTION: number;
    let TIMEOUT: number;
    let LAST_RESERVED: number;
}
