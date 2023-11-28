/**
 * Simple parser for authenticate (WWW-Authenticate or Proxy-Authenticate)
 * headers.
 *
 * Bug 1857847: Replace with Necko's ChallengeParser once exposed to JS.
 *
 * @param {string} headerValue
 *     The value of an authenticate header.
 *
 * @returns {Array<object>}
 *     Array of challenge objects containing two properties:
 *     - {string} scheme: The scheme for the challenge
 *     - {Array<object>} params: Array of { name, value } objects representing
 *       all the parameters of the challenge.
 */
export function parseChallengeHeader(headerValue: string): Array<object>;
