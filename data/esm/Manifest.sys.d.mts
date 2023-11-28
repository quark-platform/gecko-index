export namespace Manifests {
    function _initialize(): Promise<any>;
    function manifestInstalled(manifest: any): void;
    function findManifestUrl(url: any): any;
    function getManifest(browser: any, manifestUrl: any): Promise<any>;
}
