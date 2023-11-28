export namespace OsEnvironment {
    namespace Policy {
        function getAllowedAppSources(): any;
        function windowsVersionHasAppSourcesFeature(): boolean;
    }
    function reportAllowedAppSources(): void;
}
