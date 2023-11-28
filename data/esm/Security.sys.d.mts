export class Security {
    destructor(): void;
    /**
     * Enable/disable whether all certificate errors should be ignored
     *
     * @param {object} options
     * @param {boolean=} options.ignore
     *    if true, all certificate errors will be ignored.
     */
    setIgnoreCertificateErrors(options?: {
        ignore?: boolean | undefined;
    }): void;
}
