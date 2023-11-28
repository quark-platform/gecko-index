export namespace GMPTestUtils {
    /**
     * Used to override the GMP service with a mock.
     *
     * @param {object} mockService
     *        The mocked gmpService object.
     * @param {function} callback
     *        Method called with the overridden gmpService. The override
     *        is undone after the callback returns.
     */
    function overrideGmpService(mockService: any, callback: Function): Promise<any>;
}
