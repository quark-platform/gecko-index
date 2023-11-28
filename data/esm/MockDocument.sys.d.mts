export namespace MockDocument {
    /**
     * Create a document for the given URL containing the given HTML with the ownerDocument of all <form>s having a mocked location.
     */
    function createTestDocument(aDocumentURL: any, aContent?: string, aType?: string, useSystemPrincipal?: boolean): any;
    function mockOwnerDocumentProperty(aElement: any, aDoc: any, aURL: any): void;
    function mockOwnerGlobalProperty(aElement: any): void;
    function mockNodePrincipalProperty(aElement: any, aURL: any): void;
    function mockBrowsingContextProperty(aElement: any, aBC: any): void;
    function createTestDocumentFromFile(aDocumentURL: any, aFile: any): any;
}
