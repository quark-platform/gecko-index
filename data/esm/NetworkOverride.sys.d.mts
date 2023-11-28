export namespace NetworkOverride {
    export { overrideChannelWithFilePath };
}
/**
 * Given an in-flight channel, we will force to replace the content of this request
 * with the content of a local file.
 *
 * @param {nsIHttpChannel} channel
 *        The request to replace content for.
 * @param {String} path
 *        The absolute path to the local file to read content from.
 */
declare function overrideChannelWithFilePath(channel: nsIHttpChannel, path: string): void;
export {};
