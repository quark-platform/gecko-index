export namespace SecurityInfo {
    /**
     * Extracts security information from nsIChannel.securityInfo.
     *
     * @param {nsIChannel} channel
     *        If null channel is assumed to be insecure.
     * @param {object} options
     *
     * @returns {object}
     *         Returns an object containing following members:
     *          - state: The security of the connection used to fetch this
     *                   request. Has one of following string values:
     *                    - "insecure": the connection was not secure (only http)
     *                    - "weak": the connection has minor security issues
     *                    - "broken": secure connection failed (e.g. expired cert)
     *                    - "secure": the connection was properly secured.
     *          If state == broken:
     *            - errorMessage: full error message from
     *                            nsITransportSecurityInfo.
     *          If state == secure:
     *            - protocolVersion: one of TLSv1, TLSv1.1, TLSv1.2, TLSv1.3.
     *            - cipherSuite: the cipher suite used in this connection.
     *            - cert: information about certificate used in this connection.
     *                    See parseCertificateInfo for the contents.
     *            - hsts: true if host uses Strict Transport Security,
     *                    false otherwise
     *            - hpkp: true if host uses Public Key Pinning, false otherwise
     *          If state == weak: Same as state == secure and
     *            - weaknessReasons: list of reasons that cause the request to be
     *                               considered weak. See getReasonsForWeakness.
     */
    function getSecurityInfo(channel: nsIChannel, options?: any): any;
    function getCertificateChain(certChain: any, options?: {}): any[];
    /**
     * Takes an nsIX509Cert and returns an object with certificate information.
     *
     * @param {nsIX509Cert} cert
     *        The certificate to extract the information from.
     * @param {object} options
     * @returns {object}
     *         An object with following format:
     *           {
     *             subject: subjectName,
     *             issuer: issuerName,
     *             validity: { start, end },
     *             fingerprint: { sha1, sha256 }
     *           }
     */
    function parseCertificateInfo(cert: nsIX509Cert, options?: any): any;
    function getTransparencyStatus(status: any): "unknown" | "not_applicable" | "policy_compliant" | "policy_not_enough_scts" | "policy_not_diverse_scts";
    /**
     * Takes protocolVersion of TransportSecurityInfo object and returns human readable
     * description.
     *
     * @param {number} version
     *        One of nsITransportSecurityInfo version constants.
     * @returns {string}
     *         One of TLSv1, TLSv1.1, TLSv1.2, TLSv1.3 if version
     *         is valid, Unknown otherwise.
     */
    function formatSecurityProtocol(version: number): string;
    /**
     * Takes the securityState bitfield and returns reasons for weak connection
     * as an array of strings.
     *
     * @param {number} state
     *        nsITransportSecurityInfo.securityState.
     *
     * @returns {Array<string>}
     *         List of weakness reasons. A subset of { cipher } where
     *         cipher: The cipher suite is consireded to be weak (RC4).
     */
    function getReasonsForWeakness(state: number): string[];
}
