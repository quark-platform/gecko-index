/**
 * This class is a simplified version from the AuthRequestor used by the
 * WebExtensions codebase at:
 *   https://searchfox.org/mozilla-central/rev/fd2325f5b2a5be8f8f2acf9307285f2b7de06582/toolkit/components/extensions/webrequest/WebRequest.sys.mjs#434-579
 *
 * The NetworkAuthListener will monitor the provided channel and will invoke the
 * owner's `onAuthPrompt` end point whenever an auth challenge is requested.
 *
 * The owner will receive several callbacks to proceed with the prompt:
 * - cancelAuthPrompt(): cancel the authentication attempt
 * - forwardAuthPrompt(): forward the auth prompt request to the next
 *   notification callback. If no other custom callback is set, this will
 *   typically lead to show the auth prompt dialog in the browser UI.
 * - provideAuthCredentials(username, password): attempt to authenticate with
 *   the provided username and password.
 *
 * Please note that the request will be blocked until the consumer calls one of
 * the callbacks listed above. Make sure to eventually unblock the request if
 * you implement `onAuthPrompt`.
 *
 * @param {nsIChannel} channel
 *     The channel to monitor.
 * @param {object} owner
 *     The owner object, expected to implement `onAuthPrompt`.
 */
export class NetworkAuthListener {
    constructor(channel: any, owner: any);
    notificationCallbacks: any;
    loadGroupCallbacks: any;
    owner: any;
    asyncPromptAuth(channel: any, callback: any, context: any, level: any, authInfo: any): {
        QueryInterface: MozQueryInterface;
        cancel: () => void;
    };
    getInterface(iid: any): any;
    getAuthPrompt(reason: any, iid: any): any;
    promptAuth(channel: any, level: any, authInfo: any): void;
    QueryInterface: MozQueryInterface;
    #private;
}
