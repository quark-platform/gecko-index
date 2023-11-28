export function DumpBookmarks(): Promise<void>;
/**
 * PlacesItem object.  Base class for places items.
 */
export function PlacesItem(props: any): void;
export class PlacesItem {
    /**
     * PlacesItem object.  Base class for places items.
     */
    constructor(props: any);
    props: PlacesItemProps;
    updateProps: PlacesItemProps;
    _bookmarkFolders: {
        places: any;
        menu: any;
        tags: any;
        unfiled: any;
        toolbar: any;
        mobile: any;
    };
    _typeMap: Map<any, any>;
    toString(): string;
    /**
     * GetPlacesChildGuid
     *
     * Finds the guid of the an item with the specified properties in the places
     * database under the specified parent.
     *
     * @param folder The guid of the folder to search
     * @param type The type of the item to find, or null to match any item;
     *        this is one of the PlacesUtils.bookmarks.TYPE_* values
     * @param title The title of the item to find, or null to match any title
     * @param uri The uri of the item to find, or null to match any uri
     *
     * @return the node id if the item was found, otherwise null
     */
    GetPlacesChildGuid(folder: any, type: any, title: any, uri: any): Promise<any>;
    /**
     * IsAdjacentTo
     *
     * Determines if this object is immediately adjacent to another.
     *
     * @param itemName The name of the other object; this may be any kind of
     *        places item
     * @param relativePos The relative position of the other object.  If -1,
     *        it means the other object should precede this one, if +1,
     *        the other object should come after this one
     * @return true if this object is immediately adjacent to the other object,
     *         otherwise false
     */
    IsAdjacentTo(itemName: any, relativePos: any): Promise<boolean>;
    /**
     * GetItemIndex
     *
     * Gets the item index for this places item.
     *
     * @return the item index, or -1 if there's an error
     */
    GetItemIndex(): Promise<any>;
    /**
     * GetFolder
     *
     * Gets the folder guid for the specified bookmark folder
     *
     * @param location The full path of the folder, which must begin
     *        with one of the bookmark root folders
     * @return the folder guid if the folder is found, otherwise null
     */
    GetFolder(location: any): Promise<any>;
    /**
     * CreateFolder
     *
     * Creates a bookmark folder.
     *
     * @param location The full path of the folder, which must begin
     *        with one of the bookmark root folders
     * @return the folder id if the folder was created, otherwise -1
     */
    CreateFolder(location: any): Promise<any>;
    /**
     * GetOrCreateFolder
     *
     * Locates the specified folder; if not found it is created.
     *
     * @param location The full path of the folder, which must begin
     *        with one of the bookmark root folders
     * @return the folder id if the folder was found or created, otherwise -1
     */
    GetOrCreateFolder(location: any): Promise<any>;
    /**
     * CheckPosition
     *
     * Verifies the position of this places item.
     *
     * @param before The name of the places item that this item should be
              before, or null if this check should be skipped
     * @param after The name of the places item that this item should be
              after, or null if this check should be skipped
     * @param last_item_pos The index of the places item above this one,
     *        or null if this check should be skipped
     * @return true if this item is in the correct position, otherwise false
     */
    CheckPosition(before: any, after: any, last_item_pos: any): Promise<boolean>;
    /**
     * SetLocation
     *
     * Moves this places item to a different folder.
     *
     * @param location The full path of the folder to which to move this
     *        places item, which must begin with one of the bookmark root
     *        folders; if null, no changes are made
     * @return nothing if successful, otherwise an exception is thrown
     */
    SetLocation(location: any): Promise<void>;
    /**
     * SetPosition
     *
     * Updates the position of this places item within this item's current
     * folder.  Use SetLocation to change folders.
     *
     * @param position The new index this item should be moved to; if null,
     *        no changes are made; if -1, this item is moved to the bottom of
     *        the current folder. Otherwise, must be a string which is the
     *        title of an existing item in the folder, who's current position
     *        is used as the index.
     * @return nothing if successful, otherwise an exception is thrown
     */
    SetPosition(position: any): Promise<void>;
    /**
     * Update the title of this places item
     *
     * @param title The new title to set for this item; if null, no changes
     *        are made
     * @return nothing
     */
    SetTitle(title: any): Promise<void>;
}
/**
 * Bookmark class constructor.  Initializes instance properties.
 */
export function Bookmark(props: any): void;
export class Bookmark {
    /**
     * Bookmark class constructor.  Initializes instance properties.
     */
    constructor(props: any);
    /**
     * SetKeyword
     *
     * Update this bookmark's keyword.
     *
     * @param keyword The keyword to set for this bookmark; if null, no
     *        changes are made
     * @return nothing
     */
    SetKeyword(keyword: any): Promise<void>;
    /**
     * SetUri
     *
     * Updates this bookmark's URI.
     *
     * @param uri The new URI to set for this boomark; if null, no changes
     *        are made
     * @return nothing
     */
    SetUri(uri: any): Promise<void>;
    /**
     * SetTags
     *
     * Updates this bookmark's tags.
     *
     * @param tags An array of tags which should be associated with this
     *        bookmark; any previous tags are removed; if this param is null,
     *        no changes are made.  If this param is an empty array, all
     *        tags are removed from this bookmark.
     * @return nothing
     */
    SetTags(tags: any): void;
    /**
     * Create
     *
     * Creates the bookmark described by this object's properties.
     *
     * @return the id of the created bookmark
     */
    Create(): Promise<any>;
    /**
     * Update
     *
     * Updates this bookmark's properties according the properties on this
     * object's 'updateProps' property.
     *
     * @return nothing
     */
    Update(): Promise<void>;
    /**
     * Find
     *
     * Locates the bookmark which corresponds to this object's properties.
     *
     * @return the bookmark guid if the bookmark was found, otherwise null
     */
    Find(): Promise<any>;
    /**
     * Remove
     *
     * Removes this bookmark.  The bookmark should have been located previously
     * by a call to Find.
     *
     * @return nothing
     */
    Remove(): Promise<void>;
}
/**
 * BookmarkFolder class constructor. Initializes instance properties.
 */
export function BookmarkFolder(props: any): void;
export class BookmarkFolder {
    /**
     * BookmarkFolder class constructor. Initializes instance properties.
     */
    constructor(props: any);
    /**
     * Create
     *
     * Creates the bookmark folder described by this object's properties.
     *
     * @return the id of the created bookmark folder
     */
    Create(): Promise<any>;
    /**
     * Find
     *
     * Locates the bookmark folder which corresponds to this object's
     * properties.
     *
     * @return the folder guid if the folder was found, otherwise null
     */
    Find(): Promise<any>;
    /**
     * Remove
     *
     * Removes this folder.  The folder should have been located previously
     * by a call to Find.
     *
     * @return nothing
     */
    Remove(): Promise<void>;
    /**
     * Update
     *
     * Updates this bookmark's properties according the properties on this
     * object's 'updateProps' property.
     *
     * @return nothing
     */
    Update(): Promise<void>;
}
/**
 * Separator class constructor. Initializes instance properties.
 */
export function Separator(props: any): void;
export class Separator {
    /**
     * Separator class constructor. Initializes instance properties.
     */
    constructor(props: any);
    /**
     * Create
     *
     * Creates the bookmark separator described by this object's properties.
     *
     * @return the id of the created separator
     */
    Create(): Promise<any>;
    /**
     * Find
     *
     * Locates the bookmark separator which corresponds to this object's
     * properties.
     *
     * @return the item guid if the separator was found, otherwise null
     */
    Find(): Promise<any>;
    /**
     * Update
     *
     * Updates this separator's properties according the properties on this
     * object's 'updateProps' property.
     *
     * @return nothing
     */
    Update(): Promise<boolean>;
    /**
     * Remove
     *
     * Removes this separator.  The separator should have been located
     * previously by a call to Find.
     *
     * @return nothing
     */
    Remove(): Promise<void>;
}
/**
 * PlacesItemProps object, holds properties for places items
 */
declare function PlacesItemProps(props: any): void;
declare class PlacesItemProps {
    /**
     * PlacesItemProps object, holds properties for places items
     */
    constructor(props: any);
    location: any;
    uri: any;
    keyword: any;
    title: any;
    after: any;
    before: any;
    folder: any;
    position: any;
    delete: boolean;
    tags: any;
    last_item_pos: any;
    type: any;
}
export {};
