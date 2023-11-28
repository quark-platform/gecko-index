export namespace LegacyHeartbeat {
    function getHeartbeatRecipe(): {
        id: string;
        name: string;
        action: string;
        arguments: any;
        capabilities: string[];
        filter_expression: string;
        use_only_baseline_capabilities: boolean;
    };
}
