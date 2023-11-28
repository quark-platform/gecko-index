/**
 * This component represents a sniffer (implements nsIContentSniffer
 * interface) responsible for changing top level 'application/json'
 * document types to: 'application/vnd.mozilla.json.view'.
 *
 * This internal type is consequently rendered by JSON View component
 * that represents the JSON through a viewer interface.
 *
 * This is done in the .js file rather than a .jsm to avoid creating
 * a compartment at startup when no JSON is being viewed.
 */
export class Sniffer {
    getMIMETypeFromContent(request: any, data: any, length: any): "" | "application/json" | "application/vnd.mozilla.json.view";
    QueryInterface: any;
}
