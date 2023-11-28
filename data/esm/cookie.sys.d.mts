export namespace cookie {
    /**
     * @name Cookie
     *
     * @returns {Object<string, (number|boolean|string)>}
     */
    /**
     * Unmarshal a JSON Object to a cookie representation.
     *
     * Effectively this will run validation checks on ``json``, which
     * will produce the errors expected by WebDriver if the input is
     * not valid.
     *
     * @param {Object<string, (number | boolean | string)>} json
     *     Cookie to be deserialised. ``name`` and ``value`` are required
     *     fields which must be strings.  The ``path`` and ``domain`` fields
     *     are optional, but must be a string if provided.  The ``secure``,
     *     and ``httpOnly`` are similarly optional, but must be booleans.
     *     Likewise, the ``expiry`` field is optional but must be
     *     unsigned integer.
     *
     * @returns {Cookie}
     *     Valid cookie object.
     *
     * @throws {InvalidArgumentError}
     *     If any of the properties are invalid.
     */
    function fromJSON(json: {
        [x: string]: string | number | boolean;
    }): Cookie;
    /**
     * Insert cookie to the cookie store.
     *
     * @param {Cookie} newCookie
     *     Cookie to add.
     * @param {object} options
     * @param {string=} options.restrictToHost
     *     Perform test that ``newCookie``'s domain matches this.
     * @param {string=} options.protocol
     *     The protocol of the caller. It can be `http:` or `https:`.
     *
     * @throws {TypeError}
     *     If ``name``, ``value``, or ``domain`` are not present and
     *     of the correct type.
     * @throws {InvalidCookieDomainError}
     *     If ``restrictToHost`` is set and ``newCookie``'s domain does
     *     not match.
     * @throws {UnableToSetCookieError}
     *     If an error occurred while trying to save the cookie.
     */
    function add(newCookie: Cookie, { restrictToHost, protocol }?: {
        restrictToHost?: string;
        protocol?: string;
    }): void;
    /**
     * Remove cookie from the cookie store.
     *
     * @param {Cookie} toDelete
     *     Cookie to remove.
     */
    function remove(toDelete: Cookie): void;
    /**
     * Iterates over the cookies for the current ``host``.  You may
     * optionally filter for specific paths on that ``host`` by specifying
     * a path in ``currentPath``.
     *
     * @param {string} host
     *     Hostname to retrieve cookies for.
     * @param {string=} [currentPath="/"] currentPath
     *     Optionally filter the cookies for ``host`` for the specific path.
     *     Defaults to ``/``, meaning all cookies for ``host`` are included.
     *
     * @returns {Iterable.<Cookie>}
     *     Iterator.
     */
    function iter(host: string, currentPath?: string): Iterable<Cookie>;
}
