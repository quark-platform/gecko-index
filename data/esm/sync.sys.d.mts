/**
 * Dispatch a function to be executed on the main thread.
 *
 * @param {Function} func
 *     Function to be executed.
 */
export function executeSoon(func: Function): void;
/**
 * Runs a Promise-like function off the main thread until it is resolved
 * through ``resolve`` or ``rejected`` callbacks.  The function is
 * guaranteed to be run at least once, irregardless of the timeout.
 *
 * The ``func`` is evaluated every ``interval`` for as long as its
 * runtime duration does not exceed ``interval``.  Evaluations occur
 * sequentially, meaning that evaluations of ``func`` are queued if
 * the runtime evaluation duration of ``func`` is greater than ``interval``.
 *
 * ``func`` is given two arguments, ``resolve`` and ``reject``,
 * of which one must be called for the evaluation to complete.
 * Calling ``resolve`` with an argument indicates that the expected
 * wait condition was met and will return the passed value to the
 * caller.  Conversely, calling ``reject`` will evaluate ``func``
 * again until the ``timeout`` duration has elapsed or ``func`` throws.
 * The passed value to ``reject`` will also be returned to the caller
 * once the wait has expired.
 *
 * Usage::
 *
 *     let els = new PollPromise((resolve, reject) => {
 *       let res = document.querySelectorAll("p");
 *       if (res.length > 0) {
 *         resolve(Array.from(res));
 *       } else {
 *         reject([]);
 *       }
 *     }, {timeout: 1000});
 *
 * @param {Condition} func
 *     Function to run off the main thread.
 * @param {object=} options
 * @param {number=} options.timeout
 *     Desired timeout if wanted.  If 0 or less than the runtime evaluation
 *     time of ``func``, ``func`` is guaranteed to run at least once.
 *     Defaults to using no timeout.
 * @param {number=} options.interval
 *     Duration between each poll of ``func`` in milliseconds.
 *     Defaults to 10 milliseconds.
 *
 * @returns {Promise.<*>}
 *     Yields the value passed to ``func``'s
 *     ``resolve`` or ``reject`` callbacks.
 *
 * @throws {*}
 *     If ``func`` throws, its error is propagated.
 * @throws {TypeError}
 *     If `timeout` or `interval`` are not numbers.
 * @throws {RangeError}
 *     If `timeout` or `interval` are not unsigned integers.
 */
export function PollPromise(func: Condition, { timeout, interval }?: object | undefined): Promise<any>;
/**
 * Represents the timed, eventual completion (or failure) of an
 * asynchronous operation, and its resulting value.
 *
 * In contrast to a regular Promise, it times out after ``timeout``.
 *
 * @param {Function} fn
 *     Function to run, which will have its ``reject``
 *     callback invoked after the ``timeout`` duration is reached.
 *     It is given two callbacks: ``resolve(value)`` and
 *     ``reject(error)``.
 * @param {object=} options
 * @param {string} options.errorMessage
 *     Message to use for the thrown error.
 * @param {number=} options.timeout
 *     ``condition``'s ``reject`` callback will be called
 *     after this timeout, given in milliseconds.
 *     By default 1500 ms in an optimised build and 4500 ms in
 *     debug builds.
 * @param {Error=} options.throws
 *     When the ``timeout`` is hit, this error class will be
 *     thrown.  If it is null, no error is thrown and the promise is
 *     instead resolved on timeout with a TimeoutError.
 *
 * @returns {Promise.<*>}
 *     Timed promise.
 *
 * @throws {TypeError}
 *     If `timeout` is not a number.
 * @throws {RangeError}
 *     If `timeout` is not an unsigned integer.
 */
export function TimedPromise(fn: Function, options?: object | undefined): Promise<any>;
/**
 * Pauses for the given duration.
 *
 * @param {number} timeout
 *     Duration to wait before fulfilling promise in milliseconds.
 *
 * @returns {Promise}
 *     Promise that fulfills when the `timeout` is elapsed.
 *
 * @throws {TypeError}
 *     If `timeout` is not a number.
 * @throws {RangeError}
 *     If `timeout` is not an unsigned integer.
 */
export function Sleep(timeout: number): Promise<any>;
/**
 * Detects when the specified message manager has been destroyed.
 *
 * One can observe the removal and detachment of a content browser
 * (`<xul:browser>`) or a chrome window by its message manager
 * disconnecting.
 *
 * When a browser is associated with a tab, this is safer than only
 * relying on the event `TabClose` which signalises the _intent to_
 * remove a tab and consequently would lead to the destruction of
 * the content browser and its browser message manager.
 *
 * When closing a chrome window it is safer than only relying on
 * the event 'unload' which signalises the _intent to_ close the
 * chrome window and consequently would lead to the destruction of
 * the window and its window message manager.
 *
 * @param {MessageListenerManager} messageManager
 *     The message manager to observe for its disconnect state.
 *     Use the browser message manager when closing a content browser,
 *     and the window message manager when closing a chrome window.
 *
 * @returns {Promise}
 *     A promise that resolves when the message manager has been destroyed.
 */
export function MessageManagerDestroyedPromise(messageManager: MessageListenerManager): Promise<any>;
/**
 * Throttle until the main thread is idle and `window` has performed
 * an animation frame (in that order).
 *
 * @param {ChromeWindow} win
 *     Window to request the animation frame from.
 *
 * @returns {Promise}
 */
export function IdlePromise(win: ChromeWindow): Promise<any>;
/**
 * Wait for a message to be fired from a particular message manager.
 *
 * This method has been duplicated from BrowserTestUtils.sys.mjs.
 *
 * @param {nsIMessageManager} messageManager
 *     The message manager that should be used.
 * @param {string} messageName
 *     The message to wait for.
 * @param {object=} options
 *     Extra options.
 * @param {function(Message)=} options.checkFn
 *     Called with the ``Message`` object as argument, should return ``true``
 *     if the message is the expected one, or ``false`` if it should be
 *     ignored and listening should continue. If not specified, the first
 *     message with the specified name resolves the returned promise.
 *
 * @returns {Promise.<object>}
 *     Promise which resolves to the data property of the received
 *     ``Message``.
 */
export function waitForMessage(messageManager: nsIMessageManager, messageName: string, { checkFn }?: object | undefined): Promise<object>;
/**
 * Wait for the specified observer topic to be observed.
 *
 * This method has been duplicated from TestUtils.sys.mjs.
 *
 * Because this function is intended for testing, any error in checkFn
 * will cause the returned promise to be rejected instead of waiting for
 * the next notification, since this is probably a bug in the test.
 *
 * @param {string} topic
 *     The topic to observe.
 * @param {object=} options
 *     Extra options.
 * @param {function(string, object)=} options.checkFn
 *     Called with ``subject``, and ``data`` as arguments, should return true
 *     if the notification is the expected one, or false if it should be
 *     ignored and listening should continue. If not specified, the first
 *     notification for the specified topic resolves the returned promise.
 * @param {number=} options.timeout
 *     Timeout duration in milliseconds, if provided.
 *     If specified, then the returned promise will be rejected with
 *     TimeoutError, if not already resolved, after this duration has elapsed.
 *     If not specified, then no timeout is used. Defaults to null.
 *
 * @returns {Promise.<Array<string, object>>}
 *     Promise which is either resolved to an array of ``subject``, and ``data``
 *     from the observed notification, or rejected with TimeoutError after
 *     options.timeout milliseconds if specified.
 *
 * @throws {TypeError}
 * @throws {RangeError}
 */
export function waitForObserverTopic(topic: string, options?: object | undefined): Promise<Array<string, object>>;
/**
 * Wraps a callback function, that, as long as it continues to be
 * invoked, will not be triggered.  The given function will be
 * called after the timeout duration is reached, after no more
 * events fire.
 *
 * This class implements the {@link EventListener} interface,
 * which means it can be used interchangably with `addEventHandler`.
 *
 * Debouncing events can be useful when dealing with e.g. DOM events
 * that fire at a high rate.  It is generally advisable to avoid
 * computationally expensive operations such as DOM modifications
 * under these circumstances.
 *
 * One such high frequenecy event is `resize` that can fire multiple
 * times before the window reaches its final dimensions.  In order
 * to delay an operation until the window has completed resizing,
 * it is possible to use this technique to only invoke the callback
 * after the last event has fired::
 *
 *     let cb = new DebounceCallback(event => {
 *       // fires after the final resize event
 *       console.log("resize", event);
 *     });
 *     window.addEventListener("resize", cb);
 *
 * Note that it is not possible to use this synchronisation primitive
 * with `addEventListener(..., {once: true})`.
 *
 * @param {function(Event)} fn
 *     Callback function that is guaranteed to be invoked once only,
 *     after `timeout`.
 * @param {number=} [timeout = 250] timeout
 *     Time since last event firing, before `fn` will be invoked.
 */
export class DebounceCallback {
    constructor(fn: any, { timeout }?: {
        timeout?: number;
    });
    fn: any;
    timeout: number;
    timer: nsIDocShellType | nsIDocShellTreeItemType | nsISupportsType | nsIPrefServiceType | nsIPrefBranchType | nsIWindowMediatorType | nsISimpleEnumeratorType | nsISimpleEnumeratorBaseType | nsIObserverServiceType | nsIObserverType | nsIEnvironmentType | nsIIOServiceType | nsISpeculativeConnectType | nsINetUtilType | nsIURIType | mozIDOMWindowProxyType | nsIThreadManagerType | nsINestedEventLoopConditionType | nsIScriptSecurityManagerType | nsIPrincipalType | nsIEffectiveTLDServiceType | nsIURIFixupType | nsIURIFixupInfoType | IJSDebuggerType | IPeerConnectionObserverType | IPeerConnectionType | IUrlClassifierUITelemetryType | nsIScriptableOKType | nsIScriptableWithNotXPCOMType | nsISessionStoreFunctionsType | amIAddonManagerStartupType | amIWebInstallPromptType | extIWebNavigationType | imgICacheType | imgIContainerType | imgIContainerDebugType | imgIEncoderType | nsIAsyncInputStreamType | nsIInputStreamType | imgILoaderType | imgINotificationObserverType | imgIRequestType | nsIRequestType | imgIScriptedNotificationObserverType | imgIToolsType | imgIContainerCallbackType | inIDeepTreeWalkerType | mozIAppServicesLoggerType | mozIVisitInfoType | mozIPlaceInfoType | mozIVisitInfoCallbackType | mozIVisitedStatusCallbackType | mozIAsyncHistoryType | mozIBridgedSyncEngineCallbackType | mozIBridgedSyncEngineApplyCallbackType | mozIBridgedSyncEngineType | mozIDOMWindowType | mozIDownloadPlatformType | mozIExtensionServiceWorkerInfoType | mozIExtensionListenerCallOptionsType | mozIExtensionEventListenerType | mozIExtensionAPIRequestType | mozIExtensionAPIRequestResultType | mozIExtensionAPIRequestHandlerType | mozIExtensionProcessScriptType | mozIExtensionStorageAreaType | mozIConfigurableExtensionStorageAreaType | mozISyncedExtensionStorageAreaType | mozIExtensionStorageListenerType | mozIExtensionStorageCallbackType | mozIGeckoMediaPluginChromeServiceType | mozIGeckoMediaPluginServiceType | mozIInterruptibleType | mozIJSSubScriptLoaderType | mozILocaleServiceType | mozIMozIntlType | mozIMozIntlHelperType | mozIOSPreferencesType | mozIPersonalDictionaryType | mozIPlacesAutoCompleteType | mozIPlacesPendingOperationType | mozIRemoteLazyInputStreamType | mozISandboxReportType | mozISandboxReportArrayType | mozISandboxReporterType | mozISandboxSettingsType | mozISandboxTestType | mozIServicesLogSinkType | mozISpellCheckingEngineType | mozIStorageAsyncConnectionType | mozIStorageAsyncStatementType | mozIStorageBaseStatementType | mozIStorageBindingParamsType | mozIStorageBindingParamsArrayType | mozIStorageCompletionCallbackType | mozIStorageConnectionType | mozIStorageErrorType | mozIStorageFunctionType | mozIStoragePendingStatementType | mozIStorageProgressHandlerType | mozIStorageResultSetType | mozIStorageRowType | mozIStorageValueArrayType | mozIStorageServiceType | mozIStorageStatementType | mozIStorageStatementCallbackType | mozIStorageVacuumParticipantType | mozISyncedBookmarksMirrorProgressListenerType | mozISyncedBookmarksMirrorCallbackType | mozISyncedBookmarksMirrorLoggerType | mozISyncedBookmarksMergerType | mozITXTToHTMLConvType | nsIStreamConverterType | nsIStreamListenerType | nsIRequestObserverType | mozITestInterfaceJSType | mozIThirdPartyUtilType | nsIASN1TreeType | nsITreeViewType | nsIAboutModuleType | nsIAboutNewTabServiceType | nsIInstalledApplicationType | nsIAboutThirdPartyType | nsIAddonPolicyServiceType | nsIAddonContentPolicyType | nsIAlertNotificationImageListenerType | nsIAlertActionType | nsIAlertNotificationType | nsIAlertsServiceType | nsIAlertsDoNotDisturbType | nsIAlertsIconDataType | nsIAlertsIconURIType | nsIAndroidEventCallbackType | nsIAndroidEventFinalizerType | nsIAndroidEventListenerType | nsIAndroidEventDispatcherType | nsIAndroidViewType | nsIAndroidBridgeType | nsIAppShellType | nsIAppShellServiceType | nsIAppStartupType | nsIAppWindowType | nsIApplicationChooserFinishedCallbackType | nsIApplicationChooserType | nsIApplicationReputationServiceType | nsIApplicationReputationQueryType | nsIApplicationReputationCallbackType | nsIArrayType | nsIArrayBufferInputStreamType | nsIArrayExtensionsType | nsIInputStreamCallbackType | nsIAsyncOutputStreamType | nsIOutputStreamType | nsIOutputStreamCallbackType | nsIAsyncShutdownBlockerType | nsIAsyncShutdownClientType | nsIAsyncShutdownCompletionCallbackType | nsIAsyncShutdownBarrierType | nsIAsyncShutdownServiceType | nsIAsyncStreamCopierType | nsIAsyncStreamCopier2Type | nsIAsyncVerifyRedirectCallbackType | nsISuspendedTypesType | nsIAudioChannelAgentCallbackType | nsIAudioChannelAgentType | nsIAudioDeviceInfoType | nsIAuthInformationType | nsIAuthModuleType | nsIAuthPromptType | nsIAuthPrompt2Type | nsIAuthPromptAdapterFactoryType | nsIAuthPromptCallbackType | nsIAuthPromptProviderType | nsIAutoCompleteControllerType | nsIAutoCompleteInputType | nsIAutoCompletePopupType | nsIAutoCompleteResultType | nsIAutoCompleteSearchType | nsIAutoCompleteObserverType | nsIAutoCompleteSearchDescriptorType | nsIAutoCompleteSimpleResultType | nsIAutoCompleteSimpleResultListenerType | nsIAutoCompleteSimpleSearchType | nsIAutoplayType | nsITabUnloaderType | nsIAvailableMemoryWatcherBaseType | nsIBFCacheEntryType | nsIBackgroundChannelRegistrarType | nsIBackgroundFileSaverType | nsIBackgroundFileSaverObserverType | nsIBackgroundTasksType | nsIBackgroundTasksManagerType | nsICommandLineHandlerType | nsIBackgroundTasksRunnerType | nsIBaseWindowType | nsIBidiKeyboardType | nsIBinaryHttpRequestType | nsIBinaryHttpResponseType | nsIBinaryHttpType | nsIBinaryInputStreamType | nsIBinaryOutputStreamType | nsIBitsType | nsIBitsNewRequestCallbackType | nsIBitsRequestType | nsIBitsCallbackType | nsIBlocklistServiceType | nsIBounceTrackingProtectionType | nsIBrowserType | nsIBrowserChildType | nsIBrowserControllerType | nsIOpenURIInFrameParamsType | nsIBrowserDOMWindowType | nsIBrowserElementAPIType | nsIBrowserHandlerType | nsIBrowserUsageType | nsIVisibleTabType | nsIBrowserWindowTrackerType | nsIBufferedInputStreamType | nsIBufferedOutputStreamType | nsIByteRangeRequestType | nsICacheEntryType | nsICacheEntryMetaDataVisitorType | nsICacheEntryDoomCallbackType | nsICacheEntryOpenCallbackType | nsIInputStreamReceiverType | nsICacheInfoChannelType | nsICachePurgeLockType | nsICacheStorageType | nsICacheStorageServiceType | nsICacheStorageConsumptionObserverType | nsICacheStorageVisitorType | nsICacheTestingType | nsICachingChannelType | nsICancelableType | nsICaptivePortalCallbackType | nsICaptivePortalDetectorType | nsICaptivePortalServiceCallbackType | nsICaptivePortalServiceType | nsICascadeFilterType | nsICategoryEntryType | nsISupportsCStringType | nsISupportsPrimitiveType | nsICategoryManagerType | nsICertOverrideType | nsICertOverrideServiceType | nsICertStorageCallbackType | nsIRevocationStateType | nsIIssuerAndSerialRevocationStateType | nsISubjectAndPubKeyRevocationStateType | nsICRLiteCoverageType | nsICRLiteTimestampType | nsICertInfoType | nsICertStorageType | nsICertTreeItemType | nsICertTreeType | nsICertificateDialogsType | nsIChannelType | nsIIdentChannelType | nsIUrlClassifierBlockedChannelType | nsIChannelClassifierServiceType | nsIChannelEventSinkType | nsIChildChannelType | nsIChromeRegistryType | nsIXULChromeRegistryType | nsIClassInfoType | nsIClassOfServiceType | nsIClassifiedChannelType | nsIClearDataServiceType | nsIClearDataCallbackType | nsIClickRuleType | nsIClientAuthDialogCallbackType | nsIClientAuthDialogServiceType | nsIClientAuthDialogsType | nsIClientAuthRememberRecordType | nsIClientAuthRememberServiceType | nsIAsyncSetClipboardDataType | nsIAsyncSetClipboardDataCallbackType | nsIClipboardType | nsIClipboardHelperType | nsIClipboardOwnerType | nsICloneableInputStreamType | nsICloneableInputStreamWithRangeType | nsICodeCoverageType | nsIColorPickerShownCallbackType | nsIColorPickerType | nsICommandLineType | nsICommandLineRunnerType | nsICommandLineValidatorType | nsICommandManagerType | nsICommandParamsType | nsIComponentManagerType | nsIComponentRegistrarType | nsICompressConvStatsType | nsIConsoleAPIStorageType | nsIConsoleListenerType | nsIConsoleMessageType | nsIConsoleServiceType | nsIContentBlockingAllowListType | nsIContentDispatchChooserType | nsIContentHandlerType | nsIContentPermissionTypeType | nsIContentPermissionRequestType | nsIContentPermissionPromptType | nsIContentPolicyType | nsIContentPrefObserverType | nsIContentPrefService2Type | nsIContentPrefCallback2Type | nsIContentPrefType | nsIContentProcessInfoType | nsIContentProcessProviderType | nsIContentSecurityManagerType | nsIContentSecurityPolicyType | nsISerializableType | nsICSPEventListenerType | nsIContentSignatureVerifierType | nsIContentSnifferType | nsIContentViewerType | nsIContentViewerEditType | nsIControllerType | nsICommandControllerType | nsIControllerCommandType | nsIControllerCommandTableType | nsIControllerContextType | nsIControllersType | nsIConverterInputStreamType | nsIUnicharInputStreamType | nsIConverterOutputStreamType | nsIUnicharOutputStreamType | nsICookieType | nsICookieBannerListServiceType | nsICookieBannerRuleType | nsICookieBannerServiceType | nsICookieJarSettingsType | nsICookieManagerType | nsICookieNotificationType | nsICookiePermissionType | nsICookieRuleType | nsICookieTransactionCallbackType | nsICookieServiceType | nsICrashReporterType | nsICrashServiceType | nsICryptoHashType | nsICycleCollectorHandlerType | nsICycleCollectorLogSinkType | nsICycleCollectorListenerType | nsIDAPTelemetryType | nsIDHCPClientType | nsIDNSAdditionalInfoType | nsIDNSByTypeRecordType | nsIDNSRecordType | nsIDNSTXTRecordType | nsISVCParamType | nsISVCParamAlpnType | nsISVCParamNoDefaultAlpnType | nsISVCParamPortType | nsISVCParamIPv4HintType | nsISVCParamEchConfigType | nsISVCParamIPv6HintType | nsISVCParamODoHConfigType | nsISVCBRecordType | nsIDNSHTTPSSVCRecordType | nsIDNSListenerType | nsIDNSAddrRecordType | nsIDNSServiceType | nsIDOMChromeWindowType | nsIDOMEventListenerType | nsIDOMGeoPositionType | nsIDOMGeoPositionCallbackType | nsIDOMGeoPositionCoordsType | nsIDOMGeoPositionErrorCallbackType | nsIDOMGlobalPropertyInitializerType | nsIDOMMozBrowserFrameType | nsIDOMProcessChildType | nsIDOMProcessParentType | nsIDOMRequestServiceType | nsIDOMStorageManagerType | nsIDOMSessionStorageManagerType | nsIDOMMozWakeLockListenerType | nsIDOMWindowType | nsIDOMWindowUtilsType | nsITranslationNodeListType | nsIJSRAIIHelperType | nsIDOMXULButtonElementType | nsIDOMXULControlElementType | nsIDOMXULCommandDispatcherType | nsIDOMXULContainerItemElementType | nsIDOMXULContainerElementType | nsIDOMXULMenuListElementType | nsIDOMXULSelectControlElementType | nsIDOMXULMultiSelectControlElementType | nsIDOMXULRadioGroupElementType | nsIDOMXULRelatedElementType | nsIDOMXULSelectControlItemElementType | nsINetDashboardCallbackType | nsIDashboardType | nsIDashboardEventNotifierType | nsIDataStorageManagerType | nsIDataStorageType | nsIDataStorageItemType | nsIDebug2Type | nsIDefaultAgentType | nsIDeviceSensorDataType | nsIDeviceSensorsType | nsIDialogParamBlockType | nsIDirIndexType | nsIDirIndexListenerType | nsIDirIndexParserType | nsIDirectTaskDispatcherType | nsIDirectoryEnumeratorType | nsIDirectoryServiceProviderType | nsIDirectoryServiceProvider2Type | nsIDirectoryServiceType | nsIDisplayInfoType | nsIDocShellTreeOwnerType | nsIDocumentEncoderNodeFixupType | nsIDocumentEncoderType | nsIDocumentLoaderType | nsIDocumentLoaderFactoryType | nsIDocumentStateListenerType | nsIDomainPolicyType | nsIDomainSetType | nsIDownloaderType | nsIDownloadObserverType | nsIDragServiceType | nsIDragSessionType | nsIDroppedLinkItemType | nsIDroppedLinkHandlerType | nsIE10SUtilsType | nsIEarlyHintObserverType | nsIEdgeMigrationUtilsType | nsIEditActionListenerType | nsIEditingSessionType | nsIEditorType | nsIEditorMailSupportType | nsIEditorSpellCheckType | nsIEditorSpellCheckCallbackType | nsIEmbeddingSiteWindowType | nsIEncodedChannelType | nsIEnterprisePoliciesType | nsIEventListenerChangeType | nsIListenerChangeListenerType | nsIEventListenerInfoType | nsIEventListenerServiceType | nsIEventSourceEventListenerType | nsIEventSourceEventServiceType | nsIEventTargetType | nsIStackFrameType | nsIExceptionType | nsIExpatSinkType | nsIExternalHelperAppServiceType | nsPIExternalAppLauncherType | nsIHelperAppLauncherType | nsIExternalProtocolHandlerType | nsIProtocolHandlerType | nsIExternalProtocolServiceType | nsIFOGType | nsIFactoryType | nsIFaviconServiceType | nsIFaviconDataCallbackType | nsIFileType | nsIFileChannelType | nsIFilePickerType | nsIFilePickerShownCallbackType | nsIFileProtocolHandlerType | nsIFileInputStreamType | nsIFileOutputStreamType | nsIFileRandomAccessStreamType | nsIRandomAccessStreamType | nsISeekableStreamType | nsITellableStreamType | nsIFileMetadataType | nsIAsyncFileMetadataType | nsIFileMetadataCallbackType | nsIFileURLType | nsIURLType | nsIFileURLMutatorType | nsIFinalizationWitnessServiceType | nsIFindType | nsIFindServiceType | nsIFingerprintingOverrideType | nsIFingerprintingWebCompatServiceType | nsIFocusManagerType | nsIFontEnumeratorType | nsIFontLoadCompleteCallbackType | nsIForcePendingChannelType | nsIFormAutoCompleteType | nsIFormAutoCompleteObserverType | nsIFormFillControllerType | nsIFormPOSTActionChannelType | nsIUploadChannelType | nsIFormatConverterType | nsIGIOMimeAppType | nsIHandlerAppType | nsIGIOServiceType | nsIGNOMEShellServiceType | nsIShellServiceType | nsIGSettingsCollectionType | nsIGSettingsServiceType | nsIGeolocationUpdateType | nsIGeolocationProviderType | nsIGfxInfoType | nsIGfxInfoDebugType | nsIGleanBooleanType | nsIGleanDatetimeType | nsIGleanCounterType | nsIGleanTimingDistributionType | nsIGleanMemoryDistributionType | nsIGleanCustomDistributionType | nsIGleanPingTestCallbackType | nsIGleanPingType | nsIGleanStringType | nsIGleanStringListType | nsIGleanTimespanType | nsIGleanUuidType | nsIGleanEventType | nsIGleanQuantityType | nsIGleanDenominatorType | nsIGleanNumeratorType | nsIGleanRateType | nsIGleanUrlType | nsIGleanTextType | nsIGtkTaskbarProgressType | nsITaskbarProgressType | nsIHTMLAbsPosEditorType | nsIHTMLEditorType | nsIHTMLInlineTableEditorType | nsIHTMLObjectResizerType | nsIHandlerServiceType | nsIHangDetailsType | nsIHangReportType | nsIHapticFeedbackType | nsIHelperAppLauncherDialogType | nsIHttpActivityObserverType | nsIHttpActivityDistributorType | nsIHttpAuthManagerType | nsIHttpAuthenticableChannelType | nsIProxiedChannelType | nsIHttpAuthenticatorType | nsIHttpAuthenticatorCallbackType | nsIHttpChannelType | nsIHttpChannelAuthProviderType | nsIHttpChannelChildType | nsIHttpUpgradeListenerType | nsIHttpChannelInternalType | nsIHttpHeaderVisitorType | nsIHttpProtocolHandlerType | nsIProxiedProtocolHandlerType | nsIHttpPushListenerType | nsIHttpServerType | nsIHttpServerStoppedCallbackType | nsIHttpServerIdentityType | nsIHttpRequestHandlerType | nsIHttpRequestType | nsIHttpResponseType | nsIHttpsOnlyModePermissionType | nsIIDBPermissionsRequestType | nsIIDNServiceType | nsIINIParserType | nsIINIParserWriterType | nsIINIParserFactoryType | nsIIOServiceInternalType | nsIIOUtilType | nsIMozIconURIType | nsIIdentityCredentialPromptServiceType | nsIIdentityCredentialStorageServiceType | nsIIdlePeriodType | nsIImageLoadingContentType | nsIIncrementalDownloadType | nsIIncrementalStreamLoaderObserverType | nsIIncrementalStreamLoaderType | nsIInlineSpellCheckerType | nsIInputListAutoCompleteType | nsIInputStreamChannelType | nsIInputStreamLengthType | nsIAsyncInputStreamLengthType | nsIInputStreamLengthCallbackType | nsIInputStreamPriorityType | nsIInputStreamPumpType | nsIInputStreamTeeType | nsIInterceptionInfoType | nsIInterfaceRequestorType | nsIJARChannelType | nsIJARURIType | nsIJARURIMutatorType | nsIJSInspectorType | nsIJumpListCommittedCallbackType | nsIJumpListBuilderType | nsIJumpListItemType | nsIJumpListSeparatorType | nsIJumpListLinkType | nsIJumpListShortcutType | nsIKeyValueServiceType | nsIKeyValueDatabaseType | nsIKeyValuePairType | nsIKeyValueEnumeratorType | nsIKeyValueDatabaseCallbackType | nsIKeyValueEnumeratorCallbackType | nsIKeyValuePairCallbackType | nsIKeyValueVariantCallbackType | nsIKeyValueVoidCallbackType | nsIKeychainMigrationUtilsType | nsILayoutDebuggingToolsType | nsILayoutHistoryStateType | nsILineInputStreamType | nsILoadContextType | nsILoadContextInfoType | nsILoadContextInfoFactoryType | nsILoadGroupType | nsILoadGroupChildType | nsILoadInfoType | nsILoadURIDelegateType | nsILocalFileMacType | nsILocalFileWinType | nsILocalStorageManagerType | nsILoginAutoCompleteSearchType | nsILoginDetectionServiceType | nsILoginInfoType | nsILoginSearchCallbackType | nsILoginManagerType | nsILoginManagerAuthPrompterType | nsILoginManagerCryptoType | nsILoginManagerPrompterType | nsILoginManagerStorageType | nsILoginMetaInfoType | nsILoginReputationVerdictTypeType | nsILoginReputationQueryType | nsILoginReputationQueryCallbackType | nsILoginReputationServiceType | nsIMIMEHeaderParamType | nsIHandlerInfoType | nsIMIMEInfoType | nsILocalHandlerAppType | nsIWebHandlerAppType | nsIDBusHandlerAppType | nsIMIMEInputStreamType | nsIMIMEServiceType | nsIMacAttributionServiceType | nsIMacDockSupportType | nsIMacFinderProgressCanceledCallbackType | nsIMacFinderProgressType | nsIMacPreferencesReaderType | nsIMacSharingServiceType | nsIMacShellServiceType | nsIMacUserActivityUpdaterType | nsITrashAppCallbackType | nsIMacWebAppUtilsType | nsIMarionetteType | nsIMediaDeviceType | nsIMediaManagerServiceType | nsIFinishDumpingCallbackType | nsIDumpGCAndCCLogsCallbackType | nsIMemoryInfoDumperType | nsIHandleReportCallbackType | nsIMemoryReporterType | nsIFinishReportingCallbackType | nsIHeapAllocatedCallbackType | nsIMemoryReporterManagerType | nsIMessageLoopType | nsIMessageSenderType | nsIInProcessContentFrameMessageManagerType | nsIMozBrowserFrameType | nsIMultiPartChannelType | nsIMultiPartChannelListenerType | nsIMultiplexInputStreamType | nsIMutableArrayType | nsINSSComponentType | nsINSSErrorsServiceType | nsINSSVersionType | nsINamedType | nsINamedPipeDataObserverType | nsINamedPipeServiceType | nsINativeAppSupportType | nsINativeDNSResolverOverrideType | nsINativeOSFileResultType | nsINativeOSFileSuccessCallbackType | nsINativeOSFileErrorCallbackType | nsINativeOSFileInternalsServiceType | nsINavBookmarksServiceType | nsINavHistoryResultNodeType | nsINavHistoryContainerResultNodeType | nsINavHistoryQueryResultNodeType | nsINavHistoryResultObserverType | nsINavHistoryResultType | nsINavHistoryQueryType | nsINavHistoryQueryOptionsType | nsINavHistoryServiceType | nsINestedURIType | nsINestedURIMutatorType | nsINestedAboutURIMutatorType | nsIJSURIMutatorType | nsINetAddrType | nsINetworkConnectivityServiceType | nsIListNetworkAddressesListenerType | nsIGetHostnameListenerType | nsINetworkInfoServiceType | nsIInterceptedBodyCallbackType | nsIInterceptedChannelType | nsINetworkInterceptControllerType | nsINetworkLinkServiceType | nsINetworkPredictorType | nsINetworkPredictorVerifierType | nsINotificationStorageCallbackType | nsINotificationStorageType | nsINullChannelType | nsIOSFileConstantsServiceType | nsIOSKeyStoreType | nsIOSPermissionRequestType | nsIOSReauthenticatorType | nsIObjectInputStreamType | nsIObjectLoadingContentType | nsIObjectOutputStreamType | nsIObliviousHttpClientResponseType | nsIObliviousHttpClientRequestType | nsIObliviousHttpServerResponseType | nsIObliviousHttpServerType | nsIObliviousHttpType | nsIObliviousHttpServiceType | nsIObliviousHttpChannelType | nsIBrowsingContextReadyCallbackType | nsIOpenWindowInfoType | nsIPK11TokenType | nsIPK11TokenDBType | nsIPKCS11ModuleType | nsIPKCS11ModuleDBType | nsIPKCS11SlotType | nsIPageThumbsStorageServiceType | nsIPaperType | nsIPaperMarginType | nsIParentChannelType | nsIAsyncVerifyRedirectReadyCallbackType | nsIParentRedirectingChannelType | nsIParentalControlsServiceType | nsIParserUtilsType | nsIPartitioningExceptionListObserverType | nsIPartitioningExceptionListServiceType | nsIPaymentResponseDataType | nsIGeneralResponseDataType | nsIBasicCardResponseDataType | nsIPaymentActionResponseType | nsIPaymentCanMakeActionResponseType | nsIPaymentShowActionResponseType | nsIPaymentAbortActionResponseType | nsIPaymentCompleteActionResponseType | nsIMethodChangeDetailsType | nsIGeneralChangeDetailsType | nsIBasicCardChangeDetailsType | nsIPaymentAddressType | nsIPaymentMethodDataType | nsIPaymentCurrencyAmountType | nsIPaymentItemType | nsIPaymentDetailsModifierType | nsIPaymentShippingOptionType | nsIPaymentDetailsType | nsIPaymentOptionsType | nsIPaymentRequestType | nsIPaymentRequestServiceType | nsIPaymentUIServiceType | nsIPermissionType | nsIPermissionDelegateHandlerType | nsIPermissionManagerType | nsIPropertyElementType | nsIPersistentPropertiesType | nsIPropertiesType | nsIPipeType | nsISearchableInputStreamType | nsIPlacesPreviewsHelperServiceType | nsIPlatformInfoType | nsIPluginTagType | nsIFakePluginTagType | nsIPowerManagerServiceType | nsIPrefLocalizedStringType | nsISupportsStringType | nsIPrefStatsCallbackType | nsIPrefObserverType | nsIPrefetchServiceType | nsIPreloadedStyleSheetType | nsIExpandedPrincipalType | nsIPrintDialogServiceType | nsIPrintPreviewNavigationType | nsIPrintSettingsType | nsIPrintSettingsServiceType | nsIPrintSettingsWinType | nsIPrinterInfoType | nsIPrinterType | nsIPrinterListType | nsIPrivacyTransitionObserverType | nsIPrivateBrowsingChannelType | nsIProcessType | nsIProcessToolsServiceType | nsIProfileStartupType | nsIProfileMigratorType | nsIProfileUnlockerType | nsIProfilerStartParamsType | nsIProfilerType | nsIProgressEventSinkType | nsIPromptType | nsIPromptCollectionType | nsIPromptFactoryType | nsIPromptInstanceType | nsIPromptServiceType | nsIPropertyType | nsIPropertyBagType | nsIPropertyBag2Type | nsIProtectedAuthThreadType | nsIProtocolHandlerWithDynamicFlagsType | nsIProtocolProxyCallbackType | nsIProxyProtocolFilterResultType | nsIProtocolProxyFilterType | nsIProtocolProxyChannelFilterType | nsIProxyConfigChangedCallbackType | nsIProtocolProxyServiceType | nsIProtocolProxyService2Type | nsIProxyInfoType | nsIPublicKeyPinningServiceType | nsIPurgeTrackerServiceType | nsIPushErrorReporterType | nsIPushNotifierType | nsIPushDataType | nsIPushMessageType | nsIPushSubscriptionType | nsIPushSubscriptionCallbackType | nsIUnsubscribeResultCallbackType | nsIPushClearResultCallbackType | nsIPushServiceType | nsIPushQuotaManagerType | nsIQueryContentEventResultType | nsIQuotaUsageCallbackType | nsIQuotaCallbackType | nsIQuotaManagerServiceType | nsIQuotaRequestBaseType | nsIQuotaUsageRequestType | nsIQuotaRequestType | nsIQuotaFullOriginMetadataResultType | nsIQuotaUsageResultType | nsIQuotaOriginUsageResultType | nsIQuotaEstimateResultType | nsIRFPServiceType | nsIRaceCacheWithNetworkType | nsIRandomGeneratorType | nsIRddProcessTestType | nsIRedirectChannelRegistrarType | nsIRedirectHistoryEntryType | nsIRedirectResultListenerType | nsIReferrerInfoType | nsIReflowObserverType | nsIRefreshURIType | nsIRegionType | nsIRelativeFilePrefType | nsIRemoteAgentType | nsIRemoteTabType | nsIRequestTailUnblockCallbackType | nsIRequestContextType | nsIRequestContextServiceType | nsIRequestObserverProxyType | nsIResProtocolHandlerType | nsISubstitutingProtocolHandlerType | nsIResumableChannelType | nsIRunnableType | nsIRunnablePriorityType | nsIRunnableIPCMessageTypeType | nsISDBCallbackType | nsISDBCloseCallbackType | nsISDBConnectionType | nsISDBRequestType | nsISDBResultType | nsISHEntryType | nsISHistoryType | nsISHistoryListenerType | nsISafeOutputStreamType | nsIScreenType | nsIScreenManagerType | nsIScriptChannelType | nsIScriptErrorNoteType | nsIScriptErrorType | nsIScriptLoaderObserverType | nsIScriptableBase64EncoderType | nsIScriptableContentIteratorType | nsIScriptableInputStreamType | nsIScriptableUnicodeConverterType | nsISearchSubmissionType | nsISearchEngineType | nsISearchParseSubmissionResultType | nsISearchServiceType | nsISecCheckWrapChannelType | nsISecretDecoderRingType | nsISecureBrowserUIType | nsISecurityConsoleMessageType | nsISecurityUITelemetryType | nsISelectionControllerType | nsISelectionDisplayType | nsISelectionListenerType | nsISensitiveInfoHiddenURIType | nsISerialEventTargetType | nsISerializationHelperType | nsIServerSocketType | nsIServerSocketListenerType | nsIServiceManagerType | nsIServiceWorkerUnregisterCallbackType | nsIServiceWorkerInfoType | nsIServiceWorkerRegistrationInfoListenerType | nsIServiceWorkerRegistrationInfoType | nsIServiceWorkerManagerListenerType | nsIServiceWorkerManagerType | nsISessionStorageServiceType | nsISessionStoreRestoreDataType | nsISharePickerType | nsISharingHandlerAppType | nsIJSEnumeratorType | nsISimpleStreamListenerType | nsISimpleURIMutatorType | nsISiteSecurityServiceType | nsISlowScriptDebugCallbackType | nsISlowScriptDebuggerStartupCallbackType | nsISlowScriptDebugRemoteCallbackType | nsISlowScriptDebugType | nsISocketFilterType | nsISocketFilterHandlerType | nsISocketProviderType | nsISocketProviderServiceType | nsISocketTransportType | nsITransportType | nsISTSShutdownObserverType | nsISocketTransportServiceType | nsIRoutedSocketTransportServiceType | nsISoundType | nsISpeculativeConnectionOverriderType | nsISpeechGrammarCompilationCallbackType | nsISpeechRecognitionServiceType | nsISpeechTaskCallbackType | nsISpeechTaskType | nsISpeechServiceType | nsIStandaloneNativeMenuType | nsIStandardURLType | nsIStandardURLMutatorType | nsIStartupCacheInfoType | nsIStorageActivityServiceType | nsIStorageStreamType | nsIStreamBufferAccessType | nsIStreamConverterServiceType | nsIStreamListenerTeeType | nsIStreamLoaderObserverType | nsIStreamLoaderType | nsIStreamTransportServiceType | nsIInputAvailableCallbackType | nsIStringBundleType | nsIStringBundleServiceType | nsIStringEnumeratorBaseType | nsIStringEnumeratorType | nsIUTF8StringEnumeratorType | nsIStringInputStreamType | nsIStructuredCloneContainerType | nsISFVBareItemType | nsISFVIntegerType | nsISFVStringType | nsISFVBoolType | nsISFVDecimalType | nsISFVTokenType | nsISFVByteSeqType | nsISFVParamsType | nsISFVParametrizableType | nsISFVItemOrInnerListType | nsISFVSerializeType | nsISFVItemType | nsISFVInnerListType | nsISFVListType | nsISFVDictionaryType | nsISFVServiceType | nsIStyleSheetServiceType | nsIOutputIteratorType | nsIInputIteratorType | nsIForwardIteratorType | nsIBidirectionalIteratorType | nsIRandomAccessIteratorType | nsISupportsIDType | nsISupportsPRBoolType | nsISupportsPRUint8Type | nsISupportsPRUint16Type | nsISupportsPRUint32Type | nsISupportsPRUint64Type | nsISupportsPRTimeType | nsISupportsCharType | nsISupportsPRInt16Type | nsISupportsPRInt32Type | nsISupportsPRInt64Type | nsISupportsFloatType | nsISupportsDoubleType | nsISupportsInterfacePointerType | nsISupportsPriorityType | nsISyncStreamListenerType | nsISynthVoiceRegistryType | nsISystemInfoType | nsISystemProxySettingsType | nsISystemStatusBarType | nsITCPSocketCallbackType | nsITLSServerSocketType | nsITLSClientStatusType | nsITLSServerConnectionInfoType | nsITLSServerSecurityObserverType | nsITLSSocketControlType | nsITRRSkipReasonType | nsITXTToHTMLConvType | nsITableEditorType | nsITaggingServiceType | nsITaskbarOverlayIconControllerType | nsITaskbarPreviewType | nsITaskbarPreviewButtonType | nsITaskbarPreviewCallbackType | nsITaskbarPreviewControllerType | nsITaskbarTabPreviewType | nsITaskbarWindowPreviewType | nsIFetchTelemetryDataCallbackType | nsITelemetryType | nsITextInputProcessorType | nsITextInputProcessorNotificationType | nsITextInputProcessorCallbackType | nsITextToSubURIType | nsIThreadType | nsIThreadInternalType | nsIThreadObserverType | nsIThreadPoolListenerType | nsIThreadPoolType | nsIThreadRetargetableRequestType | nsIThreadRetargetableStreamListenerType | nsIThreadShutdownType | nsIInputChannelThrottleQueueType | nsIThrottledInputChannelType | nsIServerTimingType | nsITimedChannelType | nsITimerCallbackType | nsITimerType | nsITimerManagerType | nsITlsHandshakeCallbackListenerType | nsITokenDialogsType | nsITokenPasswordDialogsType | nsIToolkitChromeRegistryType | nsIProfileLockType | nsIToolkitProfileType | nsIToolkitProfileServiceType | nsIToolkitShellServiceType | nsITooltipListenerType | nsITooltipTextProviderType | nsITouchBarHelperType | nsITouchBarInputCallbackType | nsITouchBarInputType | nsITouchBarUpdaterType | nsITraceableChannelType | nsITrackingDBServiceType | nsITransactionType | nsITransactionManagerType | nsITransferType | nsIWebProgressListener2Type | nsIWebProgressListenerType | nsIFlavorDataProviderType | nsITransferableType | nsITransportEventSinkType | nsITransportProviderType | nsITransportSecurityInfoType | nsITreeSelectionType | nsINativeTreeSelectionType | nsITypeAheadFindType | nsIU2FTokenManagerType | nsIUDPSocketType | nsIUDPSocketListenerType | nsIUDPMessageType | nsIUDPSocketSyncListenerType | nsIUDPSocketInternalType | nsIURIClassifierCallbackType | nsIURIClassifierType | nsIURIContentListenerType | nsIURILoaderType | nsIURISetSpecType | nsIURISettersType | nsIURIMutatorType | nsIURIWithSpecialOriginType | nsIURLMutatorType | nsIURLDecorationAnnotationsServiceType | nsIURLFormatterType | nsIURLParserType | nsIURLQueryStringStripperType | nsIURLQueryStrippingListObserverType | nsIURLQueryStrippingListServiceType | nsIUUIDGeneratorType | nsIUnicharLineInputStreamType | nsIUpdatePatchType | nsIUpdateType | nsIUpdateCheckResultType | nsIUpdateCheckType | nsIUpdateCheckerType | nsIApplicationUpdateServiceType | nsIUpdateProcessorType | nsIUpdateSyncManagerType | nsIUpdateManagerType | nsIUpdateTimerManagerType | nsIUploadChannel2Type | nsIUrlClassifierCallbackType | nsIUrlClassifierUpdateObserverType | nsIUrlClassifierDBServiceType | nsIUrlClassifierLookupCallbackType | nsIUrlClassifierClassifyCallbackType | nsIUrlClassifierExceptionListObserverType | nsIUrlClassifierExceptionListServiceType | nsIUrlClassifierFeatureType | nsIUrlClassifierFeatureResultType | nsIUrlClassifierFeatureCallbackType | nsIFullHashMatchType | nsIUrlClassifierHashCompleterCallbackType | nsIUrlClassifierHashCompleterType | nsIUrlClassifierPositiveCacheEntryType | nsIUrlClassifierCacheEntryType | nsIUrlClassifierCacheInfoType | nsIUrlClassifierGetCacheCallbackType | nsIUrlClassifierInfoType | nsIUrlClassifierPrefixSetType | nsIUrlClassifierRemoteSettingsServiceType | nsIUrlClassifierStreamUpdaterType | nsIUrlClassifierParseFindFullHashCallbackType | nsIUrlClassifierUtilsType | nsIUrlListManagerType | nsIUserIdleServiceType | nsIUserIdleServiceInternalType | nsIUtilityProcessTestType | nsIVariantType | nsIWritableVariantType | nsIVersionComparatorType | nsIViewSourceChannelType | nsIWakeLockType | nsIWeakReferenceType | nsISupportsWeakReferenceType | nsIWebAuthnRegisterArgsType | nsIWebAuthnSignArgsType | nsIWebAuthnAttObjType | nsICtapRegisterArgsType | nsICtapSignArgsType | nsICtapRegisterResultType | nsICtapSignResultType | nsIWebAuthnControllerType | nsICredentialParametersType | nsIWebAuthnTransportType | nsIWebAuthnRegisterPromiseType | nsIWebAuthnSignPromiseType | nsIWebAuthnRegisterResultType | nsIWebAuthnSignResultType | nsIWebAuthnServiceType | nsIWebBrowserType | nsIWebBrowserChromeType | nsIWebBrowserChromeFocusType | nsIWebBrowserFindType | nsIWebBrowserFindInFramesType | nsIWebBrowserPersistType | nsIWebBrowserPersistURIMapType | nsIWebBrowserPersistDocumentType | nsIWebBrowserPersistResourceVisitorType | nsIWebBrowserPersistWriteCompletionType | nsIWebBrowserPersistDocumentReceiverType | nsIWebBrowserPrintType | nsIWebNavigationType | nsIWebNavigationInfoType | nsIWebPageDescriptorType | nsIWebProgressType | nsIWebProtocolHandlerRegistrarType | nsIWebSocketChannelType | nsIWebSocketFrameType | nsIWebSocketEventListenerType | nsIWebSocketEventServiceType | nsIWebSocketImplType | nsIWebSocketListenerType | nsIWebTransportType | WebTransportSessionEventListenerType | nsIWebTransportStreamCallbackType | nsIWebTransportSendStreamStatsType | nsIWebTransportReceiveStreamStatsType | nsIWebTransportStreamStatsCallbackType | nsIWebTransportReceiveStreamType | nsIWebTransportSendStreamType | nsIWebTransportBidirectionalStreamType | nsIWebVTTListenerType | nsIWebVTTParserWrapperType | nsIWellKnownOpportunisticUtilsType | nsIWifiAccessPointType | nsIWifiListenerType | nsIWifiMonitorType | nsIWinAppHelperType | nsIWinTaskSchedulerServiceType | nsIWinTaskbarType | nsIWindowCreatorType | nsIWindowMediatorListenerType | nsIWindowProviderType | nsIWindowWatcherType | nsIWindowlessBrowserType | nsIWindowsAlertsServiceType | nsIWindowsPackageManagerType | nsIWindowsRegKeyType | nsIWindowsShellServiceType | nsIWindowsUIUtilsType | nsIWorkerChannelLoadInfoType | nsIWorkerChannelInfoType | nsIWorkerDebuggerListenerType | nsIWorkerDebuggerType | nsIWorkerDebuggerManagerListenerType | nsIWorkerDebuggerManagerType | nsIWritablePropertyBagType | nsIWritablePropertyBag2Type | nsIX509CertType | nsIOpenSignedAppFileCallbackType | nsIAsyncBoolCallbackType | nsICertVerificationCallbackType | nsIX509CertDBType | nsIX509CertValidityType | nsIXPCScriptableType | nsIXREDirProviderType | nsIXULAppInfoType | nsIXULBrowserWindowType | nsIXULRuntimeType | nsIXULStoreType | nsIZipEntryType | nsIZipReaderType | nsIZipReaderCacheType | nsIZipWriterType | nsPIDNSServiceType | nsPIPromptServiceType | nsPISocketTransportServiceType | nsPIWidgetCocoaType | nsPIWindowWatcherType | txIEXSLTFunctionsType | xpcIJSWeakReferenceType | nsIXPCComponents_InterfacesType | nsIXPCComponents_ClassesType | nsIXPCComponents_ResultsType | nsIXPCComponents_IDType | nsIXPCComponents_ExceptionType | nsIXPCComponents_ConstructorType | nsIXPCComponents_utils_SandboxType | nsIScheduledGCCallbackType | nsIXPCComponents_UtilsType | nsIXPCComponentsType | nsIXPCTestObjectReadOnlyType | nsIXPCTestObjectReadWriteType | nsIXPCTestBug809674Type | nsIXPCTestCEnumsType | nsIXPCTestESMReturnCodeParentType | nsIXPCTestESMReturnCodeChildType | nsIXPCTestInterfaceAType | nsIXPCTestInterfaceBType | nsIXPCTestInterfaceCType | nsIXPCTestParamsType | nsIXPCTestReturnCodeParentType | nsIXPCTestReturnCodeChildType | nsIXPCTestFunctionInterfaceType | nsIXPCTestUtilsType;
    handleEvent(ev: any): void;
}
