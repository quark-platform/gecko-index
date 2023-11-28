export class ControllersParent {
    supportedCommands: {};
    get browser(): any;
    enableDisableCommands(aAction: any, aEnabledCommands: any, aDisabledCommands: any): void;
    isCommandEnabled(aCommand: any): any;
    supportsCommand(aCommand: any): boolean;
    doCommand(aCommand: any): void;
    getCommandStateWithParams(aCommand: any, aCommandParams: any): void;
    doCommandWithParams(aCommand: any, aCommandParams: any): void;
    getSupportedCommands(): void;
    onEvent(): void;
    QueryInterface: any;
}
