export namespace Qihoo360seMigrationUtils {
    function getAlternativeBookmarks({ bookmarksPath, localState }: {
        bookmarksPath: any;
        localState: any;
    }): Promise<{
        resource: Bookmarks;
        path?: undefined;
    } | {
        path: any;
        resource?: undefined;
    }>;
    function getLegacyBookmarksResource(aParentFolder: any): Bookmarks;
}
declare function Bookmarks(aProfileFolder: any): void;
declare class Bookmarks {
    constructor(aProfileFolder: any);
    _file: any;
    type: any;
    get exists(): any;
    migrate(aCallback: any): Promise<any>;
}
export {};
