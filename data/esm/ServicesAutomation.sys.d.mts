export function initConfig(autoconfig: any): void;
export function triggerSync(username: any, password: any, autoconfig: any): Promise<{
    result: number;
    logs: {
        sync: {
            name: string;
            content: string;
        }[];
        condprof: {
            name: string;
            content: string;
        }[];
    };
}>;
export namespace Authentication {
    function isLoggedIn(): Promise<boolean>;
    function isReady(): Promise<any>;
    function getSignedInUser(): Promise<any>;
    function shortWaitForVerification(ms: any): Promise<any>;
    function _confirmUser(uri: any): Promise<any>;
    function _completeVerification(username: any): Promise<any>;
    function signIn(username: any, password: any): Promise<boolean>;
    function signOut(): Promise<void>;
}
export namespace Sync {
    function getSyncLogsDirectory(): string;
    function init(): Promise<void>;
    function observe(subject: any, topic: any, data: any): void;
    function configureSync(): Promise<void>;
    function triggerSync(): Promise<number>;
    function wipeLogs(): Promise<void>;
    function getLogs(): Promise<{
        name: string;
        content: string;
    }[]>;
}
