export namespace WebNavigationFrames {
    export function getFrame(bc: any, frameId: any): any;
    export { getFrameId };
    export { getParentFrameId };
    export function getAllFrames(bc: any): any[];
    export function getFromWindow(target: any): number;
}
/**
 * The FrameDetail object which represents a frame in WebExtensions APIs.
 */
export type FrameDetail = object;
/**
 * The FrameDetail object which represents a frame in WebExtensions APIs.
 *
 * @typedef  {object}  FrameDetail
 * @inner
 * @property {number}  frameId        - Represents the numeric id which identify the frame in its tab.
 * @property {number}  parentFrameId  - Represents the numeric id which identify the parent frame.
 * @property {string}  url            - Represents the current location URL loaded in the frame.
 * @property {boolean} errorOccurred  - Indicates whether an error is occurred during the last load
 *                                      happened on this frame (NOT YET SUPPORTED).
 */
/**
 * Returns the frame ID of the given window. If the window is the
 * top-level content window, its frame ID is 0. Otherwise, its frame ID
 * is its outer window ID.
 *
 * @param {Window|BrowsingContext} bc - The window to retrieve the frame ID for.
 * @returns {number}
 */
declare function getFrameId(bc: Window | BrowsingContext): number;
/**
 * Returns the frame ID of the given window's parent.
 *
 * @param {Window|BrowsingContext} bc - The window to retrieve the parent frame ID for.
 * @returns {number}
 */
declare function getParentFrameId(bc: Window | BrowsingContext): number;
export {};
