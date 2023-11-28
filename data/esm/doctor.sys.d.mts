export namespace Doctor {
    function consult(recentlySyncedEngines: any): Promise<void>;
    function _getEnginesToValidate(recentlySyncedEngines: any): {};
    function _runValidators(engineInfos: any): Promise<void>;
    function _fetchCollectionCounts(): Promise<any>;
    function _now(): any;
}
