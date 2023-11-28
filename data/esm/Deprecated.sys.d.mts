export namespace Deprecated {
    /**
     * Log a deprecation warning.
     *
     * @param string aText
     *        Deprecation warning text.
     * @param string aUrl
     *        A URL pointing to documentation describing deprecation
     *        and the way to address it.
     * @param nsIStackFrame aStack
     *        An optional callstack. If it is not provided a
     *        snapshot of the current JavaScript callstack will be
     *        logged.
     */
    function warning(aText: any, aUrl: any, aStack: any): void;
}
