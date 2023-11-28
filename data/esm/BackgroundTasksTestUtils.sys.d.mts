export namespace BackgroundTasksTestUtils {
    function init(scope: any): void;
    function do_backgroundtask(task: any, options?: {
        extraArgs: any[];
        extraEnv: {};
        onStdoutLine: any;
    }): Promise<any>;
    function setupProfileService(): void;
}
