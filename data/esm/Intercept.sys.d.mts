/**
 * The serialization of JavaScript objects in the content process might produce
 * extra data that needs to be transfered and then processed by the parent
 * process. This extra data is part of the payload as returned by commands
 * and events and can contain the following:
 *
 *     - {Map<BrowsingContext, Array<string>>} seenNodeIds
 *         DOM nodes that need to be added to the navigable seen nodes map.
 *
 * @param {string} sessionId
 *     Id of the WebDriver session
 * @param {object} payload
 *     Payload of the response for the command and event that might contain
 *     a `_extraData` field.
 *
 * @returns {object}
 *     The payload with the extra data removed if it was present.
 */
export function processExtraData(sessionId: string, payload: object): object;
