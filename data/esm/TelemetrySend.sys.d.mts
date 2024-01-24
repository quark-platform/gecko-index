/**
 * @return {String} This returns a string with the gzip compressed data.
 */
export function gzipCompressString(string: any): string;
export function sendStandalonePing(endpoint: any, payload: any, extraHeaders?: {}): Promise<any>;
export const PING_SUBMIT_TIMEOUT_MS: number;
export namespace Policy {
    function now(): Date;
    function midnightPingFuzzingDelay(): number;
    function pingSubmissionTimeout(): number;
    function setSchedulerTickTimeout(callback: any, delayMs: any): number;
    function clearSchedulerTickTimeout(id: any): void;
    function gzipCompressString(data: any): string;
}
export namespace TelemetrySend {
    const pendingPingCount: any;
    /**
     * Partial setup that runs immediately at startup. This currently triggers
     * the crash report annotations.
     */
    function earlyInit(): void;
    /**
     * Initializes this module.
     *
     * @param {Boolean} testing Whether this is run in a test. This changes some behavior
     * to enable proper testing.
     * @return {Promise} Resolved when setup is finished.
     */
    function setup(testing?: boolean): Promise<any>;
    /**
     * Shutdown this module - this will cancel any pending ping tasks and wait for
     * outstanding async activity like network and disk I/O.
     *
     * @return {Promise} Promise that is resolved when shutdown is finished.
     */
    function shutdown(): Promise<any>;
    /**
     * Flushes all pings to pingsender that were both
     *   1. submitted after profile-change-net-teardown, and
     *   2. wanting to be sent using pingsender.
     */
    function flushPingSenderBatch(): void;
    /**
     * Submit a ping for sending. This will:
     * - send the ping right away if possible or
     * - save the ping to disk and send it at the next opportunity
     *
     * @param {Object} ping The ping data to send, must be serializable to JSON.
     * @param {Object} [aOptions] Options object.
     * @param {Boolean} [options.usePingSender=false] if true, send the ping using the PingSender.
     * @return {Promise} Test-only - a promise that is resolved when the ping is sent or saved.
     */
    function submitPing(ping: any, options?: {}): Promise<any>;
    /**
     * Check if sending is disabled. If Telemetry is not allowed to upload,
     * pings are not sent to the server.
     * If trying to send a deletion-request ping, don't block it.
     *
     * @param {Object} [ping=null] A ping to be checked.
     * @return {Boolean} True if pings can be send to the servers, false otherwise.
     */
    function sendingEnabled(ping?: any): boolean;
    /**
     * Notify that we can start submitting data to the servers.
     */
    function notifyCanUpload(): any;
    /**
     * Only used in tests. Used to reset the module data to emulate a restart.
     */
    function reset(): Promise<void>;
    /**
     * Only used in tests.
     */
    function setServer(server: any): void;
    /**
     * Clear out unpersisted, yet to be sent, pings and cancel outgoing ping requests.
     */
    function clearCurrentPings(): Promise<void>;
    /**
     * Only used in tests to wait on outgoing pending pings.
     */
    function testWaitOnOutgoingPings(): any;
    /**
     * Only used in tests to set whether it is too late in shutdown to send pings.
     */
    function testTooLateToSend(tooLate: any): void;
    /**
     * Test-only - this allows overriding behavior to enable ping sending in debug builds.
     */
    function setTestModeEnabled(testing: any): void;
    /**
     * This returns state info for this module for AsyncShutdown timeout diagnostics.
     */
    function getShutdownState(): {
        sendingEnabled: boolean;
        pendingPingRequestCount: number;
        pendingPingActivityCount: number;
        unpersistedPingCount: number;
        persistedPingCount: any;
        schedulerState: {
            shutdown: boolean;
            hasSendTask: boolean;
            sendsFailed: boolean;
            sendTaskState: any;
            backoffDelay: number;
        };
    };
    /**
     * Send a ping using the ping sender.
     * This method will not wait for the ping to be sent, instead it will return
     * as soon as the pingsender program has been launched.
     *
     * This method is currently exposed here only for testing purposes as it's
     * only used internally.
     *
     * @param {Array}<Object> pings An array of objects holding url / path pairs
     *        for each ping to be sent. The URL represent the telemetry server the
     *        ping will be sent to and the path points to the ping data. The ping
     *        data files will be deleted if the pings have been submitted
     *        successfully.
     * @param {callback} observer A function called with parameters
     *        (subject, topic, data) and a topic of "process-finished" or
     *        "process-failed" after pingsender completion.
     *
     * @throws NS_ERROR_FAILURE if we couldn't find or run the pingsender
     *         executable.
     * @throws NS_ERROR_NOT_IMPLEMENTED on Android as the pingsender is not
     *         available.
     */
    function testRunPingSender(pings: any, observer: callback): void;
}
export namespace SendScheduler {
    export let _sendsFailed: boolean;
    export { SEND_TICK_DELAY as _backoffDelay };
    export let _shutdown: boolean;
    export let _sendTask: any;
    export let _sendTaskState: any;
    export let _logger: any;
    export const _log: any;
    export function shutdown(): Promise<any>;
    export function start(): void;
    /**
     * Only used for testing, resets the state to emulate a restart.
     */
    export function reset(): Promise<void>;
    /**
     * Notify the scheduler of a failure in sending out pings that warrants retrying.
     * This will trigger the exponential backoff timer behavior on the next tick.
     */
    export function notifySendsFailed(): void;
    /**
     * Returns whether ping submissions are currently throttled.
     */
    export function isThrottled(): boolean;
    export function waitOnSendTask(): Promise<any>;
    export function triggerSendingPings(immediately: any): any;
    export function _doSendTask(): Promise<void>;
    /**
     * This helper calculates the next time that we can send pings at.
     * Currently this mostly redistributes ping sends from midnight until one hour after
     * to avoid submission spikes around local midnight for daily pings.
     *
     * @param now Date The current time.
     * @return Number The next time (ms from UNIX epoch) when we can send pings.
     */
    export function _getNextPingSendTime(now: any): any;
    export function getShutdownState(): {
        shutdown: boolean;
        hasSendTask: boolean;
        sendsFailed: boolean;
        sendTaskState: any;
        backoffDelay: number;
    };
}
export namespace TelemetrySendImpl {
    export let _sendingEnabled: boolean;
    let _shutdown_1: boolean;
    export { _shutdown_1 as _shutdown };
    let _logger_1: any;
    export { _logger_1 as _logger };
    export let _pendingPingRequests: Map<any, any>;
    export let _pendingPingActivity: Set<any>;
    export let _testMode: boolean;
    export let _currentPings: Map<any, any>;
    export let _isOSShutdown: boolean;
    export let _tooLateToSend: boolean;
    export let _pingSenderBatch: any[];
    export let OBSERVER_TOPICS: string[];
    export let OBSERVED_PREFERENCES: any[];
    export const _overrideOfficialCheck: boolean;
    const _log_1: any;
    export { _log_1 as _log };
    export const pendingPingRequests: Map<any, any>;
    const pendingPingCount_1: any;
    export { pendingPingCount_1 as pendingPingCount };
    export function setTestModeEnabled(testing: any): void;
    export function earlyInit(): void;
    export let QueryInterface: MozQueryInterface;
    export function setup(testing: any): Promise<void>;
    /**
     * Triggers the crash report annotations depending on the current
     * configuration. This communicates to the crash reporter if it can send a
     * crash ping or not. This method can be called safely before setup() has
     * been called.
     */
    export function _annotateCrashReport(): void;
    /**
     * Discard old pings from the pending pings and detect overdue ones.
     * @return {Boolean} True if we have overdue pings, false otherwise.
     */
    export function _checkPendingPings(): boolean;
    export function shutdown(): Promise<void>;
    export function flushPingSenderBatch(): void;
    export function reset(): Promise<void>;
    /**
     * Notify that we can start submitting data to the servers.
     */
    export function notifyCanUpload(): any;
    export function observe(subject: any, topic: any, data: any): void;
    /**
     * Spawn the PingSender process that sends a ping. This function does
     * not return an error or throw, it only logs an error.
     *
     * Even if the function doesn't fail, it doesn't mean that the ping was
     * successfully sent, as we have no control over the spawned process. If it,
     * succeeds, the ping is eventually removed from the disk to prevent duplicated
     * submissions.
     *
     * @param {String} pingId The id of the ping to send.
     * @param {String} submissionURL The complete Telemetry-compliant URL for the ping.
     */
    export function _sendWithPingSender(pingId: string, submissionURL: string): void;
    export function submitPing(ping: any, options: any): Promise<any>;
    /**
     * Only used in tests.
     */
    export function setServer(server: any): void;
    /**
     * Clear out unpersisted, yet to be sent, pings and cancel outgoing ping requests.
     */
    export function clearCurrentPings(): Promise<void>;
    export function _cancelOutgoingRequests(): void;
    export function sendPings(currentPings: any, persistedPingIds: any): Promise<void[]>;
    /**
     * Send the persisted pings to the server.
     *
     * @param {Array<string>} List of ping ids that should be sent.
     *
     * @return Promise A promise that is resolved when all pings finished sending or failed.
     */
    export function _sendPersistedPings(pingIds: any): Promise<void>;
    export function _onPingRequestFinished(success: any, startTime: any, id: any, isPersisted: any): any;
    export function _buildSubmissionURL(ping: any): string;
    export function _getSubmissionPath(ping: any): string;
    export function _doPingRequest(ping: any, id: any, url: any, options: any, errorHandler: any, onloadHandler: any): {
        promise: any;
        payloadStream?: undefined;
    } | {
        payloadStream: nsIDocShellType | nsIDocShellTreeItemType | nsISupportsType | nsIExceptionType | nsIUUIDGeneratorType | nsIFocusManagerType | mozIJSSubScriptLoaderType | nsIStringBundleServiceType | nsIStringBundleType | nsIPrefServiceType | nsIPrefBranchType | nsIIOServiceType | nsISpeculativeConnectType | nsINetUtilType | nsIURIType | nsIScriptSecurityManagerType | nsIPrincipalType | nsIObserverServiceType | nsIThreadManagerType | nsIRunnableType | nsIURLFormatterType | nsIObserverType | nsITelemetryType | nsIFOGType | nsIXULRuntimeType | nsIXULAppInfoType | nsIPlatformInfoType | nsICrashReporterType | mozILocaleServiceType | nsIDirectoryServiceType | nsIPropertiesType | IJSDebuggerType | IPeerConnectionObserverType | IPeerConnectionType | IUrlClassifierUITelemetryType | nsIScriptableOKType | nsIScriptableWithNotXPCOMType | nsISessionStoreFunctionsType | amIAddonManagerStartupType | amIWebInstallPromptType | extIWebNavigationType | imgICacheType | imgIContainerType | imgIContainerDebugType | imgIEncoderType | nsIAsyncInputStreamType | nsIInputStreamType | imgILoaderType | imgINotificationObserverType | imgIRequestType | nsIRequestType | imgIScriptedNotificationObserverType | imgIToolsType | imgIContainerCallbackType | inIDeepTreeWalkerType | mozIAppServicesLoggerType | mozIVisitInfoType | mozIPlaceInfoType | mozIVisitInfoCallbackType | mozIVisitedStatusCallbackType | mozIAsyncHistoryType | mozIBridgedSyncEngineCallbackType | mozIBridgedSyncEngineApplyCallbackType | mozIBridgedSyncEngineType | mozIDOMWindowType | mozIDOMWindowProxyType | mozIDownloadPlatformType | mozIExtensionServiceWorkerInfoType | mozIExtensionListenerCallOptionsType | mozIExtensionEventListenerType | mozIExtensionAPIRequestType | mozIExtensionAPIRequestResultType | mozIExtensionAPIRequestHandlerType | mozIExtensionProcessScriptType | mozIExtensionStorageAreaType | mozIConfigurableExtensionStorageAreaType | mozISyncedExtensionStorageAreaType | mozIExtensionStorageListenerType | mozIExtensionStorageCallbackType | mozIGeckoMediaPluginChromeServiceType | mozIGeckoMediaPluginServiceType | mozIInterruptibleType | mozIMozIntlType | mozIMozIntlHelperType | mozIOSPreferencesType | mozIPersonalDictionaryType | mozIPlacesAutoCompleteType | mozIPlacesPendingOperationType | mozIRemoteLazyInputStreamType | mozISandboxReportType | mozISandboxReportArrayType | mozISandboxReporterType | mozISandboxSettingsType | mozISandboxTestType | mozIServicesLogSinkType | mozISpellCheckingEngineType | mozIStorageAsyncConnectionType | mozIStorageAsyncStatementType | mozIStorageBaseStatementType | mozIStorageBindingParamsType | mozIStorageBindingParamsArrayType | mozIStorageCompletionCallbackType | mozIStorageConnectionType | mozIStorageErrorType | mozIStorageFunctionType | mozIStoragePendingStatementType | mozIStorageProgressHandlerType | mozIStorageResultSetType | mozIStorageRowType | mozIStorageValueArrayType | mozIStorageServiceType | mozIStorageStatementType | mozIStorageStatementCallbackType | mozIStorageVacuumParticipantType | mozISyncedBookmarksMirrorProgressListenerType | mozISyncedBookmarksMirrorCallbackType | mozISyncedBookmarksMirrorLoggerType | mozISyncedBookmarksMergerType | mozITXTToHTMLConvType | nsIStreamConverterType | nsIStreamListenerType | nsIRequestObserverType | mozITestInterfaceJSType | mozIThirdPartyUtilType | nsIASN1TreeType | nsITreeViewType | nsIAboutModuleType | nsIAboutNewTabServiceType | nsIInstalledApplicationType | nsIAboutThirdPartyType | nsIAddonPolicyServiceType | nsIAddonContentPolicyType | nsIAlertNotificationImageListenerType | nsIAlertActionType | nsIAlertNotificationType | nsIAlertsServiceType | nsIAlertsDoNotDisturbType | nsIAlertsIconDataType | nsIAlertsIconURIType | nsIAndroidEventCallbackType | nsIAndroidEventFinalizerType | nsIAndroidEventListenerType | nsIAndroidEventDispatcherType | nsIAndroidViewType | nsIAndroidBridgeType | nsIAppShellType | nsIAppShellServiceType | nsIAppStartupType | nsIAppWindowType | nsIApplicationChooserFinishedCallbackType | nsIApplicationChooserType | nsIApplicationReputationServiceType | nsIApplicationReputationQueryType | nsIApplicationReputationCallbackType | nsIArrayType | nsIArrayBufferInputStreamType | nsIArrayExtensionsType | nsIInputStreamCallbackType | nsIAsyncOutputStreamType | nsIOutputStreamType | nsIOutputStreamCallbackType | nsIAsyncShutdownBlockerType | nsIAsyncShutdownClientType | nsIAsyncShutdownCompletionCallbackType | nsIAsyncShutdownBarrierType | nsIAsyncShutdownServiceType | nsIAsyncStreamCopierType | nsIAsyncStreamCopier2Type | nsIAsyncVerifyRedirectCallbackType | nsISuspendedTypesType | nsIAudioChannelAgentCallbackType | nsIAudioChannelAgentType | nsIAudioDeviceInfoType | nsIAuthInformationType | nsIAuthModuleType | nsIAuthPromptType | nsIAuthPrompt2Type | nsIAuthPromptAdapterFactoryType | nsIAuthPromptCallbackType | nsIAuthPromptProviderType | nsIAutoCompleteControllerType | nsIAutoCompleteInputType | nsIAutoCompletePopupType | nsIAutoCompleteResultType | nsIAutoCompleteSearchType | nsIAutoCompleteObserverType | nsIAutoCompleteSearchDescriptorType | nsIAutoCompleteSimpleResultType | nsIAutoCompleteSimpleResultListenerType | nsIAutoCompleteSimpleSearchType | nsIAutoplayType | nsITabUnloaderType | nsIAvailableMemoryWatcherBaseType | nsIBFCacheEntryType | nsIBackgroundChannelRegistrarType | nsIBackgroundFileSaverType | nsIBackgroundFileSaverObserverType | nsIBackgroundTasksType | nsIBackgroundTasksManagerType | nsICommandLineHandlerType | nsIBackgroundTasksRunnerType | nsIBaseWindowType | nsIBidiKeyboardType | nsIBinaryHttpRequestType | nsIBinaryHttpResponseType | nsIBinaryHttpType | nsIBinaryInputStreamType | nsIBinaryOutputStreamType | nsIBitsType | nsIBitsNewRequestCallbackType | nsIBitsRequestType | nsIBitsCallbackType | nsIBlocklistServiceType | nsIBounceTrackingProtectionType | nsIBrowserType | nsIBrowserChildType | nsIBrowserControllerType | nsIOpenURIInFrameParamsType | nsIBrowserDOMWindowType | nsIBrowserElementAPIType | nsIBrowserHandlerType | nsIBrowserUsageType | nsIVisibleTabType | nsIBrowserWindowTrackerType | nsIBufferedInputStreamType | nsIBufferedOutputStreamType | nsIByteRangeRequestType | nsICacheEntryType | nsICacheEntryMetaDataVisitorType | nsICacheEntryDoomCallbackType | nsICacheEntryOpenCallbackType | nsIInputStreamReceiverType | nsICacheInfoChannelType | nsICachePurgeLockType | nsICacheStorageType | nsICacheStorageServiceType | nsICacheStorageConsumptionObserverType | nsICacheStorageVisitorType | nsICacheTestingType | nsICachingChannelType | nsICancelableType | nsICaptivePortalCallbackType | nsICaptivePortalDetectorType | nsICaptivePortalServiceCallbackType | nsICaptivePortalServiceType | nsICascadeFilterType | nsICategoryEntryType | nsISupportsCStringType | nsISupportsPrimitiveType | nsICategoryManagerType | nsICertOverrideType | nsICertOverrideServiceType | nsICertStorageCallbackType | nsIRevocationStateType | nsIIssuerAndSerialRevocationStateType | nsISubjectAndPubKeyRevocationStateType | nsICRLiteCoverageType | nsICRLiteTimestampType | nsICertInfoType | nsICertStorageType | nsICertTreeItemType | nsICertTreeType | nsICertificateDialogsType | nsIChannelType | nsIIdentChannelType | nsIUrlClassifierBlockedChannelType | nsIChannelClassifierServiceType | nsIChannelEventSinkType | nsIChildChannelType | nsIChromeRegistryType | nsIXULChromeRegistryType | nsIClassInfoType | nsIClassOfServiceType | nsIClassifiedChannelType | nsIClearDataServiceType | nsIClearDataCallbackType | nsIClickRuleType | nsIClientAuthDialogCallbackType | nsIClientAuthDialogServiceType | nsIClientAuthDialogsType | nsIClientAuthRememberRecordType | nsIClientAuthRememberServiceType | nsIAsyncSetClipboardDataType | nsIAsyncSetClipboardDataCallbackType | nsIClipboardType | nsIClipboardHelperType | nsIClipboardOwnerType | nsICloneableInputStreamType | nsICloneableInputStreamWithRangeType | nsICodeCoverageType | nsIColorPickerShownCallbackType | nsIColorPickerType | nsICommandLineType | nsICommandLineRunnerType | nsICommandLineValidatorType | nsICommandManagerType | nsICommandParamsType | nsIComponentManagerType | nsIComponentRegistrarType | nsICompressConvStatsType | nsIConsoleAPIStorageType | nsIConsoleListenerType | nsIConsoleMessageType | nsIConsoleServiceType | nsIContentBlockingAllowListType | nsIContentDispatchChooserType | nsIContentHandlerType | nsIContentPermissionTypeType | nsIContentPermissionRequestType | nsIContentPermissionPromptType | nsIContentPolicyType | nsIContentPrefObserverType | nsIContentPrefService2Type | nsIContentPrefCallback2Type | nsIContentPrefType | nsIContentProcessInfoType | nsIContentProcessProviderType | nsIContentSecurityManagerType | nsIContentSecurityPolicyType | nsISerializableType | nsICSPEventListenerType | nsIContentSignatureVerifierType | nsIContentSnifferType | nsIContentViewerType | nsIContentViewerEditType | nsIControllerType | nsICommandControllerType | nsIControllerCommandType | nsIControllerCommandTableType | nsIControllerContextType | nsIControllersType | nsIConverterInputStreamType | nsIUnicharInputStreamType | nsIConverterOutputStreamType | nsIUnicharOutputStreamType | nsICookieType | nsICookieBannerListServiceType | nsICookieBannerRuleType | nsICookieBannerServiceType | nsICookieJarSettingsType | nsICookieManagerType | nsICookieNotificationType | nsICookiePermissionType | nsICookieRuleType | nsICookieTransactionCallbackType | nsICookieServiceType | nsICrashServiceType | nsICryptoHashType | nsICycleCollectorHandlerType | nsICycleCollectorLogSinkType | nsICycleCollectorListenerType | nsIDAPTelemetryType | nsIDHCPClientType | nsIDNSAdditionalInfoType | nsIDNSByTypeRecordType | nsIDNSRecordType | nsIDNSTXTRecordType | nsISVCParamType | nsISVCParamAlpnType | nsISVCParamNoDefaultAlpnType | nsISVCParamPortType | nsISVCParamIPv4HintType | nsISVCParamEchConfigType | nsISVCParamIPv6HintType | nsISVCParamODoHConfigType | nsISVCBRecordType | nsIDNSHTTPSSVCRecordType | nsIDNSListenerType | nsIDNSAddrRecordType | nsIDNSServiceType | nsIDOMChromeWindowType | nsIDOMEventListenerType | nsIDOMGeoPositionType | nsIDOMGeoPositionCallbackType | nsIDOMGeoPositionCoordsType | nsIDOMGeoPositionErrorCallbackType | nsIDOMGlobalPropertyInitializerType | nsIDOMMozBrowserFrameType | nsIDOMProcessChildType | nsIDOMProcessParentType | nsIDOMRequestServiceType | nsIDOMStorageManagerType | nsIDOMSessionStorageManagerType | nsIDOMMozWakeLockListenerType | nsIDOMWindowType | nsIDOMWindowUtilsType | nsITranslationNodeListType | nsIJSRAIIHelperType | nsIDOMXULButtonElementType | nsIDOMXULControlElementType | nsIDOMXULCommandDispatcherType | nsIDOMXULContainerItemElementType | nsIDOMXULContainerElementType | nsIDOMXULMenuListElementType | nsIDOMXULSelectControlElementType | nsIDOMXULMultiSelectControlElementType | nsIDOMXULRadioGroupElementType | nsIDOMXULRelatedElementType | nsIDOMXULSelectControlItemElementType | nsINetDashboardCallbackType | nsIDashboardType | nsIDashboardEventNotifierType | nsIDataStorageManagerType | nsIDataStorageType | nsIDataStorageItemType | nsIDebug2Type | nsIDefaultAgentType | nsIDeviceSensorDataType | nsIDeviceSensorsType | nsIDialogParamBlockType | nsIDirIndexType | nsIDirIndexListenerType | nsIDirIndexParserType | nsIDirectTaskDispatcherType | nsIDirectoryEnumeratorType | nsISimpleEnumeratorType | nsISimpleEnumeratorBaseType | nsIDirectoryServiceProviderType | nsIDirectoryServiceProvider2Type | nsIDisplayInfoType | nsIDocShellTreeOwnerType | nsIDocumentEncoderNodeFixupType | nsIDocumentEncoderType | nsIDocumentLoaderType | nsIDocumentLoaderFactoryType | nsIDocumentStateListenerType | nsIDomainPolicyType | nsIDomainSetType | nsIDownloaderType | nsIDownloadObserverType | nsIDragServiceType | nsIDragSessionType | nsIDroppedLinkItemType | nsIDroppedLinkHandlerType | nsIE10SUtilsType | nsIEarlyHintObserverType | nsIEdgeMigrationUtilsType | nsIEditActionListenerType | nsIEditingSessionType | nsIEditorType | nsIEditorMailSupportType | nsIEditorSpellCheckType | nsIEditorSpellCheckCallbackType | nsIEffectiveTLDServiceType | nsIEmbeddingSiteWindowType | nsIEncodedChannelType | nsIEnterprisePoliciesType | nsIEnvironmentType | nsIEventListenerChangeType | nsIListenerChangeListenerType | nsIEventListenerInfoType | nsIEventListenerServiceType | nsIEventSourceEventListenerType | nsIEventSourceEventServiceType | nsIEventTargetType | nsIStackFrameType | nsIExpatSinkType | nsIExternalHelperAppServiceType | nsPIExternalAppLauncherType | nsIHelperAppLauncherType | nsIExternalProtocolHandlerType | nsIProtocolHandlerType | nsIExternalProtocolServiceType | nsIFactoryType | nsIFaviconServiceType | nsIFaviconDataCallbackType | nsIFileType | nsIFileChannelType | nsIFilePickerType | nsIFilePickerShownCallbackType | nsIFileProtocolHandlerType | nsIFileInputStreamType | nsIFileOutputStreamType | nsIFileRandomAccessStreamType | nsIRandomAccessStreamType | nsISeekableStreamType | nsITellableStreamType | nsIFileMetadataType | nsIAsyncFileMetadataType | nsIFileMetadataCallbackType | nsIFileURLType | nsIURLType | nsIFileURLMutatorType | nsIFinalizationWitnessServiceType | nsIFindType | nsIFindServiceType | nsIFingerprintingOverrideType | nsIFingerprintingWebCompatServiceType | nsIFontEnumeratorType | nsIFontLoadCompleteCallbackType | nsIForcePendingChannelType | nsIFormAutoCompleteType | nsIFormAutoCompleteObserverType | nsIFormFillControllerType | nsIFormPOSTActionChannelType | nsIUploadChannelType | nsIFormatConverterType | nsIGIOMimeAppType | nsIHandlerAppType | nsIGIOServiceType | nsIGNOMEShellServiceType | nsIShellServiceType | nsIGSettingsCollectionType | nsIGSettingsServiceType | nsIGeolocationUpdateType | nsIGeolocationProviderType | nsIGfxInfoType | nsIGfxInfoDebugType | nsIGleanBooleanType | nsIGleanDatetimeType | nsIGleanCounterType | nsIGleanTimingDistributionType | nsIGleanMemoryDistributionType | nsIGleanCustomDistributionType | nsIGleanPingTestCallbackType | nsIGleanPingType | nsIGleanStringType | nsIGleanStringListType | nsIGleanTimespanType | nsIGleanUuidType | nsIGleanEventType | nsIGleanQuantityType | nsIGleanDenominatorType | nsIGleanNumeratorType | nsIGleanRateType | nsIGleanUrlType | nsIGleanTextType | nsIGtkTaskbarProgressType | nsITaskbarProgressType | nsIHTMLAbsPosEditorType | nsIHTMLEditorType | nsIHTMLInlineTableEditorType | nsIHTMLObjectResizerType | nsIHandlerServiceType | nsIHangDetailsType | nsIHangReportType | nsIHapticFeedbackType | nsIHelperAppLauncherDialogType | nsIHttpActivityObserverType | nsIHttpActivityDistributorType | nsIHttpAuthManagerType | nsIHttpAuthenticableChannelType | nsIProxiedChannelType | nsIHttpAuthenticatorType | nsIHttpAuthenticatorCallbackType | nsIHttpChannelType | nsIHttpChannelAuthProviderType | nsIHttpChannelChildType | nsIHttpUpgradeListenerType | nsIHttpChannelInternalType | nsIHttpHeaderVisitorType | nsIHttpProtocolHandlerType | nsIProxiedProtocolHandlerType | nsIHttpPushListenerType | nsIHttpServerType | nsIHttpServerStoppedCallbackType | nsIHttpServerIdentityType | nsIHttpRequestHandlerType | nsIHttpRequestType | nsIHttpResponseType | nsIHttpsOnlyModePermissionType | nsIIDBPermissionsRequestType | nsIIDNServiceType | nsIINIParserType | nsIINIParserWriterType | nsIINIParserFactoryType | nsIIOServiceInternalType | nsIIOUtilType | nsIMozIconURIType | nsIIdentityCredentialPromptServiceType | nsIIdentityCredentialStorageServiceType | nsIIdlePeriodType | nsIImageLoadingContentType | nsIIncrementalDownloadType | nsIIncrementalStreamLoaderObserverType | nsIIncrementalStreamLoaderType | nsIInlineSpellCheckerType | nsIInputListAutoCompleteType | nsIInputStreamChannelType | nsIInputStreamLengthType | nsIAsyncInputStreamLengthType | nsIInputStreamLengthCallbackType | nsIInputStreamPriorityType | nsIInputStreamPumpType | nsIInputStreamTeeType | nsIInterceptionInfoType | nsIInterfaceRequestorType | nsIJARChannelType | nsIJARURIType | nsIJARURIMutatorType | nsIJSInspectorType | nsIJumpListCommittedCallbackType | nsIJumpListBuilderType | nsIJumpListItemType | nsIJumpListSeparatorType | nsIJumpListLinkType | nsIJumpListShortcutType | nsIKeyValueServiceType | nsIKeyValueDatabaseType | nsIKeyValuePairType | nsIKeyValueEnumeratorType | nsIKeyValueDatabaseCallbackType | nsIKeyValueEnumeratorCallbackType | nsIKeyValuePairCallbackType | nsIKeyValueVariantCallbackType | nsIKeyValueVoidCallbackType | nsIKeychainMigrationUtilsType | nsILayoutDebuggingToolsType | nsILayoutHistoryStateType | nsILineInputStreamType | nsILoadContextType | nsILoadContextInfoType | nsILoadContextInfoFactoryType | nsILoadGroupType | nsILoadGroupChildType | nsILoadInfoType | nsILoadURIDelegateType | nsILocalFileMacType | nsILocalFileWinType | nsILocalStorageManagerType | nsILoginAutoCompleteSearchType | nsILoginDetectionServiceType | nsILoginInfoType | nsILoginSearchCallbackType | nsILoginManagerType | nsILoginManagerAuthPrompterType | nsILoginManagerCryptoType | nsILoginManagerPrompterType | nsILoginManagerStorageType | nsILoginMetaInfoType | nsILoginReputationVerdictTypeType | nsILoginReputationQueryType | nsILoginReputationQueryCallbackType | nsILoginReputationServiceType | nsIMIMEHeaderParamType | nsIHandlerInfoType | nsIMIMEInfoType | nsILocalHandlerAppType | nsIWebHandlerAppType | nsIDBusHandlerAppType | nsIMIMEInputStreamType | nsIMIMEServiceType | nsIMacAttributionServiceType | nsIMacDockSupportType | nsIMacFinderProgressCanceledCallbackType | nsIMacFinderProgressType | nsIMacPreferencesReaderType | nsIMacSharingServiceType | nsIMacShellServiceType | nsIMacUserActivityUpdaterType | nsITrashAppCallbackType | nsIMacWebAppUtilsType | nsIMarionetteType | nsIMediaDeviceType | nsIMediaManagerServiceType | nsIFinishDumpingCallbackType | nsIDumpGCAndCCLogsCallbackType | nsIMemoryInfoDumperType | nsIHandleReportCallbackType | nsIMemoryReporterType | nsIFinishReportingCallbackType | nsIHeapAllocatedCallbackType | nsIMemoryReporterManagerType | nsIMessageLoopType | nsIMessageSenderType | nsIInProcessContentFrameMessageManagerType | nsIMozBrowserFrameType | nsIMultiPartChannelType | nsIMultiPartChannelListenerType | nsIMultiplexInputStreamType | nsIMutableArrayType | nsINSSComponentType | nsINSSErrorsServiceType | nsINSSVersionType | nsINamedType | nsINamedPipeDataObserverType | nsINamedPipeServiceType | nsINativeAppSupportType | nsINativeDNSResolverOverrideType | nsINativeOSFileResultType | nsINativeOSFileSuccessCallbackType | nsINativeOSFileErrorCallbackType | nsINativeOSFileInternalsServiceType | nsINavBookmarksServiceType | nsINavHistoryResultNodeType | nsINavHistoryContainerResultNodeType | nsINavHistoryQueryResultNodeType | nsINavHistoryResultObserverType | nsINavHistoryResultType | nsINavHistoryQueryType | nsINavHistoryQueryOptionsType | nsINavHistoryServiceType | nsINestedURIType | nsINestedURIMutatorType | nsINestedAboutURIMutatorType | nsIJSURIMutatorType | nsINetAddrType | nsINetworkConnectivityServiceType | nsIListNetworkAddressesListenerType | nsIGetHostnameListenerType | nsINetworkInfoServiceType | nsIInterceptedBodyCallbackType | nsIInterceptedChannelType | nsINetworkInterceptControllerType | nsINetworkLinkServiceType | nsINetworkPredictorType | nsINetworkPredictorVerifierType | nsINotificationStorageCallbackType | nsINotificationStorageType | nsINullChannelType | nsIOSFileConstantsServiceType | nsIOSKeyStoreType | nsIOSPermissionRequestType | nsIOSReauthenticatorType | nsIObjectInputStreamType | nsIObjectLoadingContentType | nsIObjectOutputStreamType | nsIObliviousHttpClientResponseType | nsIObliviousHttpClientRequestType | nsIObliviousHttpServerResponseType | nsIObliviousHttpServerType | nsIObliviousHttpType | nsIObliviousHttpServiceType | nsIObliviousHttpChannelType | nsIBrowsingContextReadyCallbackType | nsIOpenWindowInfoType | nsIPK11TokenType | nsIPK11TokenDBType | nsIPKCS11ModuleType | nsIPKCS11ModuleDBType | nsIPKCS11SlotType | nsIPageThumbsStorageServiceType | nsIPaperType | nsIPaperMarginType | nsIParentChannelType | nsIAsyncVerifyRedirectReadyCallbackType | nsIParentRedirectingChannelType | nsIParentalControlsServiceType | nsIParserUtilsType | nsIPartitioningExceptionListObserverType | nsIPartitioningExceptionListServiceType | nsIPaymentResponseDataType | nsIGeneralResponseDataType | nsIBasicCardResponseDataType | nsIPaymentActionResponseType | nsIPaymentCanMakeActionResponseType | nsIPaymentShowActionResponseType | nsIPaymentAbortActionResponseType | nsIPaymentCompleteActionResponseType | nsIMethodChangeDetailsType | nsIGeneralChangeDetailsType | nsIBasicCardChangeDetailsType | nsIPaymentAddressType | nsIPaymentMethodDataType | nsIPaymentCurrencyAmountType | nsIPaymentItemType | nsIPaymentDetailsModifierType | nsIPaymentShippingOptionType | nsIPaymentDetailsType | nsIPaymentOptionsType | nsIPaymentRequestType | nsIPaymentRequestServiceType | nsIPaymentUIServiceType | nsIPermissionType | nsIPermissionDelegateHandlerType | nsIPermissionManagerType | nsIPropertyElementType | nsIPersistentPropertiesType | nsIPipeType | nsISearchableInputStreamType | nsIPlacesPreviewsHelperServiceType | nsIPluginTagType | nsIFakePluginTagType | nsIPowerManagerServiceType | nsIPrefLocalizedStringType | nsISupportsStringType | nsIPrefStatsCallbackType | nsIPrefObserverType | nsIPrefetchServiceType | nsIPreloadedStyleSheetType | nsIExpandedPrincipalType | nsIPrintDialogServiceType | nsIPrintPreviewNavigationType | nsIPrintSettingsType | nsIPrintSettingsServiceType | nsIPrintSettingsWinType | nsIPrinterInfoType | nsIPrinterType | nsIPrinterListType | nsIPrivacyTransitionObserverType | nsIPrivateBrowsingChannelType | nsIProcessType | nsIProcessToolsServiceType | nsIProfileStartupType | nsIProfileMigratorType | nsIProfileUnlockerType | nsIProfilerStartParamsType | nsIProfilerType | nsIProgressEventSinkType | nsIPromptType | nsIPromptCollectionType | nsIPromptFactoryType | nsIPromptInstanceType | nsIPromptServiceType | nsIPropertyType | nsIPropertyBagType | nsIPropertyBag2Type | nsIProtectedAuthThreadType | nsIProtocolHandlerWithDynamicFlagsType | nsIProtocolProxyCallbackType | nsIProxyProtocolFilterResultType | nsIProtocolProxyFilterType | nsIProtocolProxyChannelFilterType | nsIProxyConfigChangedCallbackType | nsIProtocolProxyServiceType | nsIProtocolProxyService2Type | nsIProxyInfoType | nsIPublicKeyPinningServiceType | nsIPurgeTrackerServiceType | nsIPushErrorReporterType | nsIPushNotifierType | nsIPushDataType | nsIPushMessageType | nsIPushSubscriptionType | nsIPushSubscriptionCallbackType | nsIUnsubscribeResultCallbackType | nsIPushClearResultCallbackType | nsIPushServiceType | nsIPushQuotaManagerType | nsIQueryContentEventResultType | nsIQuotaUsageCallbackType | nsIQuotaCallbackType | nsIQuotaManagerServiceType | nsIQuotaRequestBaseType | nsIQuotaUsageRequestType | nsIQuotaRequestType | nsIQuotaFullOriginMetadataResultType | nsIQuotaUsageResultType | nsIQuotaOriginUsageResultType | nsIQuotaEstimateResultType | nsIRFPServiceType | nsIRaceCacheWithNetworkType | nsIRandomGeneratorType | nsIRddProcessTestType | nsIRedirectChannelRegistrarType | nsIRedirectHistoryEntryType | nsIRedirectResultListenerType | nsIReferrerInfoType | nsIReflowObserverType | nsIRefreshURIType | nsIRegionType | nsIRelativeFilePrefType | nsIRemoteAgentType | nsIRemoteTabType | nsIRequestTailUnblockCallbackType | nsIRequestContextType | nsIRequestContextServiceType | nsIRequestObserverProxyType | nsIResProtocolHandlerType | nsISubstitutingProtocolHandlerType | nsIResumableChannelType | nsIRunnablePriorityType | nsIRunnableIPCMessageTypeType | nsISDBCallbackType | nsISDBCloseCallbackType | nsISDBConnectionType | nsISDBRequestType | nsISDBResultType | nsISHEntryType | nsISHistoryType | nsISHistoryListenerType | nsISafeOutputStreamType | nsIScreenType | nsIScreenManagerType | nsIScriptChannelType | nsIScriptErrorNoteType | nsIScriptErrorType | nsIScriptLoaderObserverType | nsIScriptableBase64EncoderType | nsIScriptableContentIteratorType | nsIScriptableInputStreamType | nsIScriptableUnicodeConverterType | nsISearchSubmissionType | nsISearchEngineType | nsISearchParseSubmissionResultType | nsISearchServiceType | nsISecCheckWrapChannelType | nsISecretDecoderRingType | nsISecureBrowserUIType | nsISecurityConsoleMessageType | nsISecurityUITelemetryType | nsISelectionControllerType | nsISelectionDisplayType | nsISelectionListenerType | nsISensitiveInfoHiddenURIType | nsISerialEventTargetType | nsISerializationHelperType | nsIServerSocketType | nsIServerSocketListenerType | nsIServiceManagerType | nsIServiceWorkerUnregisterCallbackType | nsIServiceWorkerInfoType | nsIServiceWorkerRegistrationInfoListenerType | nsIServiceWorkerRegistrationInfoType | nsIServiceWorkerManagerListenerType | nsIServiceWorkerManagerType | nsISessionStorageServiceType | nsISessionStoreRestoreDataType | nsISharePickerType | nsISharingHandlerAppType | nsIJSEnumeratorType | nsISimpleStreamListenerType | nsISimpleURIMutatorType | nsISiteSecurityServiceType | nsISlowScriptDebugCallbackType | nsISlowScriptDebuggerStartupCallbackType | nsISlowScriptDebugRemoteCallbackType | nsISlowScriptDebugType | nsISocketFilterType | nsISocketFilterHandlerType | nsISocketProviderType | nsISocketProviderServiceType | nsISocketTransportType | nsITransportType | nsISTSShutdownObserverType | nsISocketTransportServiceType | nsIRoutedSocketTransportServiceType | nsISoundType | nsISpeculativeConnectionOverriderType | nsISpeechGrammarCompilationCallbackType | nsISpeechRecognitionServiceType | nsISpeechTaskCallbackType | nsISpeechTaskType | nsISpeechServiceType | nsIStandaloneNativeMenuType | nsIStandardURLType | nsIStandardURLMutatorType | nsIStartupCacheInfoType | nsIStorageActivityServiceType | nsIStorageStreamType | nsIStreamBufferAccessType | nsIStreamConverterServiceType | nsIStreamListenerTeeType | nsIStreamLoaderObserverType | nsIStreamLoaderType | nsIStreamTransportServiceType | nsIInputAvailableCallbackType | nsIStringEnumeratorBaseType | nsIStringEnumeratorType | nsIUTF8StringEnumeratorType | nsIStringInputStreamType | nsIStructuredCloneContainerType | nsISFVBareItemType | nsISFVIntegerType | nsISFVStringType | nsISFVBoolType | nsISFVDecimalType | nsISFVTokenType | nsISFVByteSeqType | nsISFVParamsType | nsISFVParametrizableType | nsISFVItemOrInnerListType | nsISFVSerializeType | nsISFVItemType | nsISFVInnerListType | nsISFVListType | nsISFVDictionaryType | nsISFVServiceType | nsIStyleSheetServiceType | nsIOutputIteratorType | nsIInputIteratorType | nsIForwardIteratorType | nsIBidirectionalIteratorType | nsIRandomAccessIteratorType | nsISupportsIDType | nsISupportsPRBoolType | nsISupportsPRUint8Type | nsISupportsPRUint16Type | nsISupportsPRUint32Type | nsISupportsPRUint64Type | nsISupportsPRTimeType | nsISupportsCharType | nsISupportsPRInt16Type | nsISupportsPRInt32Type | nsISupportsPRInt64Type | nsISupportsFloatType | nsISupportsDoubleType | nsISupportsInterfacePointerType | nsISupportsPriorityType | nsISyncStreamListenerType | nsISynthVoiceRegistryType | nsISystemInfoType | nsISystemProxySettingsType | nsISystemStatusBarType | nsITCPSocketCallbackType | nsITLSServerSocketType | nsITLSClientStatusType | nsITLSServerConnectionInfoType | nsITLSServerSecurityObserverType | nsITLSSocketControlType | nsITRRSkipReasonType | nsITXTToHTMLConvType | nsITableEditorType | nsITaggingServiceType | nsITaskbarOverlayIconControllerType | nsITaskbarPreviewType | nsITaskbarPreviewButtonType | nsITaskbarPreviewCallbackType | nsITaskbarPreviewControllerType | nsITaskbarTabPreviewType | nsITaskbarWindowPreviewType | nsIFetchTelemetryDataCallbackType | nsITextInputProcessorType | nsITextInputProcessorNotificationType | nsITextInputProcessorCallbackType | nsITextToSubURIType | nsIThreadType | nsIThreadInternalType | nsIThreadObserverType | nsINestedEventLoopConditionType | nsIThreadPoolListenerType | nsIThreadPoolType | nsIThreadRetargetableRequestType | nsIThreadRetargetableStreamListenerType | nsIThreadShutdownType | nsIInputChannelThrottleQueueType | nsIThrottledInputChannelType | nsIServerTimingType | nsITimedChannelType | nsITimerCallbackType | nsITimerType | nsITimerManagerType | nsITlsHandshakeCallbackListenerType | nsITokenDialogsType | nsITokenPasswordDialogsType | nsIToolkitChromeRegistryType | nsIProfileLockType | nsIToolkitProfileType | nsIToolkitProfileServiceType | nsIToolkitShellServiceType | nsITooltipListenerType | nsITooltipTextProviderType | nsITouchBarHelperType | nsITouchBarInputCallbackType | nsITouchBarInputType | nsITouchBarUpdaterType | nsITraceableChannelType | nsITrackingDBServiceType | nsITransactionType | nsITransactionManagerType | nsITransferType | nsIWebProgressListener2Type | nsIWebProgressListenerType | nsIFlavorDataProviderType | nsITransferableType | nsITransportEventSinkType | nsITransportProviderType | nsITransportSecurityInfoType | nsITreeSelectionType | nsINativeTreeSelectionType | nsITypeAheadFindType | nsIU2FTokenManagerType | nsIUDPSocketType | nsIUDPSocketListenerType | nsIUDPMessageType | nsIUDPSocketSyncListenerType | nsIUDPSocketInternalType | nsIURIClassifierCallbackType | nsIURIClassifierType | nsIURIContentListenerType | nsIURIFixupInfoType | nsIURIFixupType | nsIURILoaderType | nsIURISetSpecType | nsIURISettersType | nsIURIMutatorType | nsIURIWithSpecialOriginType | nsIURLMutatorType | nsIURLDecorationAnnotationsServiceType | nsIURLParserType | nsIURLQueryStringStripperType | nsIURLQueryStrippingListObserverType | nsIURLQueryStrippingListServiceType | nsIUnicharLineInputStreamType | nsIUpdatePatchType | nsIUpdateType | nsIUpdateCheckResultType | nsIUpdateCheckType | nsIUpdateCheckerType | nsIApplicationUpdateServiceType | nsIUpdateProcessorType | nsIUpdateSyncManagerType | nsIUpdateManagerType | nsIUpdateTimerManagerType | nsIUploadChannel2Type | nsIUrlClassifierCallbackType | nsIUrlClassifierUpdateObserverType | nsIUrlClassifierDBServiceType | nsIUrlClassifierLookupCallbackType | nsIUrlClassifierClassifyCallbackType | nsIUrlClassifierExceptionListObserverType | nsIUrlClassifierExceptionListServiceType | nsIUrlClassifierFeatureType | nsIUrlClassifierFeatureResultType | nsIUrlClassifierFeatureCallbackType | nsIFullHashMatchType | nsIUrlClassifierHashCompleterCallbackType | nsIUrlClassifierHashCompleterType | nsIUrlClassifierPositiveCacheEntryType | nsIUrlClassifierCacheEntryType | nsIUrlClassifierCacheInfoType | nsIUrlClassifierGetCacheCallbackType | nsIUrlClassifierInfoType | nsIUrlClassifierPrefixSetType | nsIUrlClassifierRemoteSettingsServiceType | nsIUrlClassifierStreamUpdaterType | nsIUrlClassifierParseFindFullHashCallbackType | nsIUrlClassifierUtilsType | nsIUrlListManagerType | nsIUserIdleServiceType | nsIUserIdleServiceInternalType | nsIUtilityProcessTestType | nsIVariantType | nsIWritableVariantType | nsIVersionComparatorType | nsIViewSourceChannelType | nsIWakeLockType | nsIWeakReferenceType | nsISupportsWeakReferenceType | nsIWebAuthnRegisterArgsType | nsIWebAuthnSignArgsType | nsIWebAuthnAttObjType | nsICtapRegisterArgsType | nsICtapSignArgsType | nsICtapRegisterResultType | nsICtapSignResultType | nsIWebAuthnControllerType | nsICredentialParametersType | nsIWebAuthnTransportType | nsIWebAuthnRegisterPromiseType | nsIWebAuthnSignPromiseType | nsIWebAuthnRegisterResultType | nsIWebAuthnSignResultType | nsIWebAuthnServiceType | nsIWebBrowserType | nsIWebBrowserChromeType | nsIWebBrowserChromeFocusType | nsIWebBrowserFindType | nsIWebBrowserFindInFramesType | nsIWebBrowserPersistType | nsIWebBrowserPersistURIMapType | nsIWebBrowserPersistDocumentType | nsIWebBrowserPersistResourceVisitorType | nsIWebBrowserPersistWriteCompletionType | nsIWebBrowserPersistDocumentReceiverType | nsIWebBrowserPrintType | nsIWebNavigationType | nsIWebNavigationInfoType | nsIWebPageDescriptorType | nsIWebProgressType | nsIWebProtocolHandlerRegistrarType | nsIWebSocketChannelType | nsIWebSocketFrameType | nsIWebSocketEventListenerType | nsIWebSocketEventServiceType | nsIWebSocketImplType | nsIWebSocketListenerType | nsIWebTransportType | WebTransportSessionEventListenerType | nsIWebTransportStreamCallbackType | nsIWebTransportSendStreamStatsType | nsIWebTransportReceiveStreamStatsType | nsIWebTransportStreamStatsCallbackType | nsIWebTransportReceiveStreamType | nsIWebTransportSendStreamType | nsIWebTransportBidirectionalStreamType | nsIWebVTTListenerType | nsIWebVTTParserWrapperType | nsIWellKnownOpportunisticUtilsType | nsIWifiAccessPointType | nsIWifiListenerType | nsIWifiMonitorType | nsIWinAppHelperType | nsIWinTaskSchedulerServiceType | nsIWinTaskbarType | nsIWindowCreatorType | nsIWindowMediatorType | nsIWindowMediatorListenerType | nsIWindowProviderType | nsIWindowWatcherType | nsIWindowlessBrowserType | nsIWindowsAlertsServiceType | nsIWindowsPackageManagerType | nsIWindowsRegKeyType | nsIWindowsShellServiceType | nsIWindowsUIUtilsType | nsIWorkerChannelLoadInfoType | nsIWorkerChannelInfoType | nsIWorkerDebuggerListenerType | nsIWorkerDebuggerType | nsIWorkerDebuggerManagerListenerType | nsIWorkerDebuggerManagerType | nsIWritablePropertyBagType | nsIWritablePropertyBag2Type | nsIX509CertType | nsIOpenSignedAppFileCallbackType | nsIAsyncBoolCallbackType | nsICertVerificationCallbackType | nsIX509CertDBType | nsIX509CertValidityType | nsIXPCScriptableType | nsIXREDirProviderType | nsIXULBrowserWindowType | nsIXULStoreType | nsIZipEntryType | nsIZipReaderType | nsIZipReaderCacheType | nsIZipWriterType | nsPIDNSServiceType | nsPIPromptServiceType | nsPISocketTransportServiceType | nsPIWidgetCocoaType | nsPIWindowWatcherType | txIEXSLTFunctionsType | xpcIJSWeakReferenceType | nsIXPCComponents_InterfacesType | nsIXPCComponents_ClassesType | nsIXPCComponents_ResultsType | nsIXPCComponents_IDType | nsIXPCComponents_ExceptionType | nsIXPCComponents_ConstructorType | nsIXPCComponents_utils_SandboxType | nsIScheduledGCCallbackType | nsIXPCComponents_UtilsType | nsIXPCComponentsType | nsIXPCTestObjectReadOnlyType | nsIXPCTestObjectReadWriteType | nsIXPCTestBug809674Type | nsIXPCTestCEnumsType | nsIXPCTestESMReturnCodeParentType | nsIXPCTestESMReturnCodeChildType | nsIXPCTestInterfaceAType | nsIXPCTestInterfaceBType | nsIXPCTestInterfaceCType | nsIXPCTestParamsType | nsIXPCTestReturnCodeParentType | nsIXPCTestReturnCodeChildType | nsIXPCTestFunctionInterfaceType | nsIXPCTestUtilsType;
        promise?: undefined;
    };
    export function _doPing(ping: any, id: any, isPersisted: any): any;
    export const canSendNow: boolean;
    /**
     * Check if sending is disabled. If Telemetry is not allowed to upload,
     * pings are not sent to the server.
     * If trying to send a "deletion-request" ping, don't block it.
     * If unified telemetry is off, don't send pings if Telemetry is disabled.
     *
     * @param {Object} [ping=null] A ping to be checked.
     * @return {Boolean} True if pings can be send to the servers, false otherwise.
     */
    export function sendingEnabled(ping?: any): boolean;
    /**
     * Track any pending ping send and save tasks through the promise passed here.
     * This is needed to block shutdown on any outstanding ping activity.
     */
    export function _trackPendingPingTask(promise: any): void;
    /**
     * Return a promise that allows to wait on pending pings.
     * @return {Object<Promise>} A promise resolved when all the pending pings promises
     *         are resolved.
     */
    export function promisePendingPingActivity(): any;
    export function _persistCurrentPings(): Promise<void>;
    /**
     * Returns the current pending, not yet persisted, pings, newest first.
     */
    export function getUnpersistedPings(): any[];
    export function getShutdownState(): {
        sendingEnabled: boolean;
        pendingPingRequestCount: number;
        pendingPingActivityCount: number;
        unpersistedPingCount: number;
        persistedPingCount: any;
        schedulerState: {
            shutdown: boolean;
            hasSendTask: boolean;
            sendsFailed: boolean;
            sendTaskState: any;
            backoffDelay: number;
        };
    };
    export function runPingSender(pings: any, observer: any): void;
}
declare const SEND_TICK_DELAY: number;
export {};
