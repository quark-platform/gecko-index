/**
 * Returns a localized string with the given key name from the string bundle.
 *
 * @param name
 * @param ...rest
 *        Optional arguments to format in the string.
 * @return string
 */
export function getString(name: any, ...args: any[]): string;
/**
 * Assert an expression is true or throw if false.
 *
 * @param expression
 * @param message
 *        Optional message.
 * @return expression
 */
export function assert(expression: any, message: any): any;
/**
 * Retrieve or set the text content of an element.
 *
 * @param DOMElement root
 *        The element to use for querySelector.
 * @param string selector
 *        Selector string for the element to get/set the text content.
 * @param string textContent
 *        Optional text to set.
 * @return string
 *         Text content of matching element or null if there were no element
 *         matching selector.
 */
export function text(root: any, selector: any, textContent: any): any;
/**
 * Log a message to the console.
 *
 * @param ...rest
 *        One or multiple arguments to log.
 *        If multiple arguments are given, they will be joined by " "
 *        in the log.
 */
export function log(...args: any[]): void;
/**
 * Show file picker and return the file user selected.
 *
 * @param mixed file
 *        Optional nsIFile or string representing the filename to auto-select.
 * @param boolean toSave
 *        If true, the user is selecting a filename to save.
 * @param nsIWindow parentWindow
 *        Optional parent window. If null the parent window of the file picker
 *        will be the window of the attached input element.
 * @param callback
 *        The callback method, which will be called passing in the selected
 *        file or null if the user did not pick one.
 * @param AString suggestedFilename
 *        The suggested filename when toSave is true.
 */
export function showFilePicker(path: any, toSave: any, parentWindow: any, callback: any, suggestedFilename: any): void;
/**
 * Returns a Popup Menu for the Options ("gear") Button
 * @param {function} toggleOrigSources
 *        To toggle the original source pref
 * @param {function} toggleAtRulesSidebar
 *        To toggle the pref to show at-rules side bar
 * @return {object} popupMenu
 *         A Menu object holding the MenuItems
 */
export function optionsPopupMenu(toggleOrigSources: Function, toggleAtRulesSidebar: Function): object;
