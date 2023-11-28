/**
 * An object that contains details of a stack frame.
 *
 * @typedef {object} StackFrame
 * @see nsIStackFrame
 *
 * @property {string=} asyncCause
 *     Type of asynchronous call by which this frame was invoked.
 * @property {number} columnNumber
 *     The column number for this stack frame.
 * @property {string} filename
 *     The source URL for this stack frame.
 * @property {string} function
 *     SpiderMonkey’s inferred name for this stack frame’s function, or null.
 * @property {number} lineNumber
 *     The line number for this stack frame (starts with 1).
 * @property {number} sourceId
 *     The process-unique internal integer ID of this source.
 */
/**
 * Return a list of stack frames from the given stack.
 *
 * Convert stack objects to the JSON attributes expected by consumers.
 *
 * @param {object} stack
 *     The native stack object to process.
 *
 * @returns {Array<StackFrame>=}
 */
export function getFramesFromStack(stack: object): Array<StackFrame> | undefined;
/**
 * Check if a frame is from chrome scope.
 *
 * @param {object} frame
 *     The frame to check
 *
 * @returns {boolean}
 *     True, if frame is from chrome scope
 */
export function isChromeFrame(frame: object): boolean;
/**
 * An object that contains details of a stack frame.
 */
export type StackFrame = object;
