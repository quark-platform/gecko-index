export function nsUnknownContentTypeDialog(): void;
export class nsUnknownContentTypeDialog {
    mLauncher: any;
    mContext: any;
    mReason: any;
    chosenApp: any;
    givenDefaultApp: boolean;
    updateSelf: boolean;
    mTitle: string;
    classID: any;
    nsIMIMEInfo: any;
    QueryInterface: any;
    show(aLauncher: any, aContext: any, aReason: any): void;
    _mDownloadDir: any;
    _showTimer: any;
    reallyShow(): void;
    mDialog: any;
    getSpecialFolderKey: any;
    displayBadPermissionAlert(): void;
    promptForSaveToFileAsync(aLauncher: any, aContext: any, aDefaultFileName: any, aSuggestedFileExtension: any, aForcePrompt: any): void;
    getFinalLeafName(aLeafName: any, aFileExt: any, aAfterFilePicker: any): any;
    /**
     * Ensures that a local folder/file combination does not already exist in
     * the file system (or finds such a combination with a reasonably similar
     * leaf name), creates the corresponding file, and returns it.
     *
     * @param   aLocalFolder
     *          the folder where the file resides
     * @param   aLeafName
     *          the string name of the file (may be empty if no name is known,
     *          in which case a name will be chosen)
     * @param   aFileExt
     *          the extension of the file, if one is known; this will be ignored
     *          if aLeafName is non-empty
     * @param   aAllowExisting
     *          if set to true, avoid creating a unique file.
     * @param   aAfterFilePicker
     *          if set to true, this was a file entered by the user from a file picker.
     * @return  nsIFile
     *          the created file
     * @throw   an error such as permission doesn't allow creation of
     *          file, etc.
     */
    validateLeafName(aLocalFolder: any, aLeafName: any, aFileExt: any, aAllowExisting?: boolean, aAfterFilePicker?: boolean): any;
    initDialog(): void;
    mSourcePath: any;
    isExemptExecutableExtension: any;
    delayHelper: any;
    notify(aTimer: any): void;
    _saveToDiskTimer: any;
    postShowCallback(): void;
    initIntro(url: any, displayName: any): void;
    openWithDefaultOK(): any;
    initDefaultApp(): void;
    getPath(aFile: any): any;
    initInteractiveControls(): void;
    helperAppChoice(): any;
    get saveToDisk(): any;
    get useOtherHandler(): boolean;
    get useSystemDefault(): boolean;
    get handleInternally(): any;
    toggleRememberChoice(aCheckbox: any): void;
    openHandlerCommand(): void;
    updateOKButton(): void;
    appChanged(): boolean;
    updateMIMEInfo(): boolean;
    updateHelperAppPref(): void;
    onOK(aEvent: any): void;
    onCancel(): void;
    onUnload(): void;
    handleEvent(aEvent: any): void;
    dialogElement(id: any): any;
    getFileDisplayName: (file: any) => any;
    finishChooseApp(): void;
    chooseApp(): void;
    shouldShowInternalHandlerOption(): any;
    debug: boolean;
    dump(text: any): void;
}
