export function LoginRec(collection: any, id: any): void;
export class LoginRec {
    constructor(collection: any, id: any);
    _logName: string;
    cleartextToString(): string;
}
export function PasswordEngine(service: any): void;
export class PasswordEngine {
    constructor(service: any);
    _storeObj: typeof PasswordStore;
    _trackerObj: typeof PasswordTracker;
    _recordObj: typeof LoginRec;
    syncPriority: number;
    emptyChangeset(): PasswordsChangeset;
    ensureCurrentSyncID(newSyncID: any): Promise<any>;
    getLastSync(): Promise<any>;
    setLastSync(timestamp: any): Promise<void>;
    markSynced(guid: any): Promise<void>;
    pullAllChanges(): Promise<{}>;
    getChangedIDs(): Promise<{}>;
    _getChangedIDs(getAll: any): Promise<{}>;
    trackRemainingChanges(): Promise<void>;
    _findDupe(item: any): Promise<any>;
    _deleteId(id: any): void;
    getValidator(): PasswordValidator;
}
export class PasswordValidator {
    getClientItems(): Promise<any>;
    normalizeClientItem(item: any): {
        id: any;
        guid: any;
        hostname: any;
        formSubmitURL: any;
        httpRealm: any;
        password: any;
        passwordField: any;
        username: any;
        usernameField: any;
        original: any;
    };
    normalizeServerItem(item: any): Promise<any>;
}
export class PasswordsChangeset {
    getModifiedTimestamp(id: any): any;
    has(id: any): boolean;
    delete(id: any): void;
}
declare function PasswordStore(name: any, engine: any): void;
declare class PasswordStore {
    constructor(name: any, engine: any);
    _nsLoginInfo: any;
    storage: any;
    _newPropertyBag(): nsIDocShellType | nsIDocShellTreeItemType | nsISupportsType | nsIObserverServiceType | nsIWindowWatcherType | mozIDOMWindowProxyType | nsIIOServiceType | nsISpeculativeConnectType | nsINetUtilType | nsIURIType | nsIScriptSecurityManagerType | nsIPrincipalType | nsIThreadManagerType | nsIUUIDGeneratorType | nsINestedEventLoopConditionType | IJSDebuggerType | IPeerConnectionObserverType | IPeerConnectionType | IUrlClassifierUITelemetryType | nsIScriptableOKType | nsIScriptableWithNotXPCOMType | nsISessionStoreFunctionsType | amIAddonManagerStartupType | amIWebInstallPromptType | extIWebNavigationType | imgICacheType | imgIContainerType | imgIContainerDebugType | imgIEncoderType | nsIAsyncInputStreamType | nsIInputStreamType | imgILoaderType | imgINotificationObserverType | imgIRequestType | nsIRequestType | imgIScriptedNotificationObserverType | imgIToolsType | imgIContainerCallbackType | inIDeepTreeWalkerType | mozIAppServicesLoggerType | mozIVisitInfoType | mozIPlaceInfoType | mozIVisitInfoCallbackType | mozIVisitedStatusCallbackType | mozIAsyncHistoryType | mozIBridgedSyncEngineCallbackType | mozIBridgedSyncEngineApplyCallbackType | mozIBridgedSyncEngineType | mozIDOMWindowType | mozIDownloadPlatformType | mozIExtensionServiceWorkerInfoType | mozIExtensionListenerCallOptionsType | mozIExtensionEventListenerType | mozIExtensionAPIRequestType | mozIExtensionAPIRequestResultType | mozIExtensionAPIRequestHandlerType | mozIExtensionProcessScriptType | mozIExtensionStorageAreaType | mozIConfigurableExtensionStorageAreaType | mozISyncedExtensionStorageAreaType | mozIExtensionStorageListenerType | mozIExtensionStorageCallbackType | mozIGeckoMediaPluginChromeServiceType | mozIGeckoMediaPluginServiceType | mozIInterruptibleType | mozIJSSubScriptLoaderType | mozILocaleServiceType | mozIMozIntlType | mozIMozIntlHelperType | mozIOSPreferencesType | mozIPersonalDictionaryType | mozIPlacesAutoCompleteType | mozIPlacesPendingOperationType | mozIRemoteLazyInputStreamType | mozISandboxReportType | mozISandboxReportArrayType | mozISandboxReporterType | mozISandboxSettingsType | mozISandboxTestType | mozIServicesLogSinkType | mozISpellCheckingEngineType | mozIStorageAsyncConnectionType | mozIStorageAsyncStatementType | mozIStorageBaseStatementType | mozIStorageBindingParamsType | mozIStorageBindingParamsArrayType | mozIStorageCompletionCallbackType | mozIStorageConnectionType | mozIStorageErrorType | mozIStorageFunctionType | mozIStoragePendingStatementType | mozIStorageProgressHandlerType | mozIStorageResultSetType | mozIStorageRowType | mozIStorageValueArrayType | mozIStorageServiceType | mozIStorageStatementType | mozIStorageStatementCallbackType | mozIStorageVacuumParticipantType | mozISyncedBookmarksMirrorProgressListenerType | mozISyncedBookmarksMirrorCallbackType | mozISyncedBookmarksMirrorLoggerType | mozISyncedBookmarksMergerType | mozITXTToHTMLConvType | nsIStreamConverterType | nsIStreamListenerType | nsIRequestObserverType | mozITestInterfaceJSType | mozIThirdPartyUtilType | nsIASN1TreeType | nsITreeViewType | nsIAboutModuleType | nsIAboutNewTabServiceType | nsIInstalledApplicationType | nsIAboutThirdPartyType | nsIAddonPolicyServiceType | nsIAddonContentPolicyType | nsIAlertNotificationImageListenerType | nsIAlertActionType | nsIAlertNotificationType | nsIAlertsServiceType | nsIAlertsDoNotDisturbType | nsIAlertsIconDataType | nsIAlertsIconURIType | nsIAndroidEventCallbackType | nsIAndroidEventFinalizerType | nsIAndroidEventListenerType | nsIAndroidEventDispatcherType | nsIAndroidViewType | nsIAndroidBridgeType | nsIAppShellType | nsIAppShellServiceType | nsIAppStartupType | nsIAppWindowType | nsIApplicationChooserFinishedCallbackType | nsIApplicationChooserType | nsIApplicationReputationServiceType | nsIApplicationReputationQueryType | nsIApplicationReputationCallbackType | nsIArrayType | nsIArrayBufferInputStreamType | nsIArrayExtensionsType | nsIInputStreamCallbackType | nsIAsyncOutputStreamType | nsIOutputStreamType | nsIOutputStreamCallbackType | nsIAsyncShutdownBlockerType | nsIAsyncShutdownClientType | nsIAsyncShutdownCompletionCallbackType | nsIAsyncShutdownBarrierType | nsIAsyncShutdownServiceType | nsIAsyncStreamCopierType | nsIAsyncStreamCopier2Type | nsIAsyncVerifyRedirectCallbackType | nsISuspendedTypesType | nsIAudioChannelAgentCallbackType | nsIAudioChannelAgentType | nsIAudioDeviceInfoType | nsIAuthInformationType | nsIAuthModuleType | nsIAuthPromptType | nsIAuthPrompt2Type | nsIAuthPromptAdapterFactoryType | nsIAuthPromptCallbackType | nsIAuthPromptProviderType | nsIAutoCompleteControllerType | nsIAutoCompleteInputType | nsIAutoCompletePopupType | nsIAutoCompleteResultType | nsIAutoCompleteSearchType | nsIAutoCompleteObserverType | nsIAutoCompleteSearchDescriptorType | nsIAutoCompleteSimpleResultType | nsIAutoCompleteSimpleResultListenerType | nsIAutoCompleteSimpleSearchType | nsIAutoplayType | nsITabUnloaderType | nsIAvailableMemoryWatcherBaseType | nsIBFCacheEntryType | nsIBackgroundChannelRegistrarType | nsIBackgroundFileSaverType | nsIBackgroundFileSaverObserverType | nsIBackgroundTasksType | nsIBackgroundTasksManagerType | nsICommandLineHandlerType | nsIBackgroundTasksRunnerType | nsIBaseWindowType | nsIBidiKeyboardType | nsIBinaryHttpRequestType | nsIBinaryHttpResponseType | nsIBinaryHttpType | nsIBinaryInputStreamType | nsIBinaryOutputStreamType | nsIBitsType | nsIBitsNewRequestCallbackType | nsIBitsRequestType | nsIBitsCallbackType | nsIBlocklistServiceType | nsIBounceTrackingProtectionType | nsIBrowserType | nsIBrowserChildType | nsIBrowserControllerType | nsIOpenURIInFrameParamsType | nsIBrowserDOMWindowType | nsIBrowserElementAPIType | nsIBrowserHandlerType | nsIBrowserUsageType | nsIVisibleTabType | nsIBrowserWindowTrackerType | nsIBufferedInputStreamType | nsIBufferedOutputStreamType | nsIByteRangeRequestType | nsICacheEntryType | nsICacheEntryMetaDataVisitorType | nsICacheEntryDoomCallbackType | nsICacheEntryOpenCallbackType | nsIInputStreamReceiverType | nsICacheInfoChannelType | nsICachePurgeLockType | nsICacheStorageType | nsICacheStorageServiceType | nsICacheStorageConsumptionObserverType | nsICacheStorageVisitorType | nsICacheTestingType | nsICachingChannelType | nsICancelableType | nsICaptivePortalCallbackType | nsICaptivePortalDetectorType | nsICaptivePortalServiceCallbackType | nsICaptivePortalServiceType | nsICascadeFilterType | nsICategoryEntryType | nsISupportsCStringType | nsISupportsPrimitiveType | nsICategoryManagerType | nsICertOverrideType | nsICertOverrideServiceType | nsICertStorageCallbackType | nsIRevocationStateType | nsIIssuerAndSerialRevocationStateType | nsISubjectAndPubKeyRevocationStateType | nsICRLiteCoverageType | nsICRLiteTimestampType | nsICertInfoType | nsICertStorageType | nsICertTreeItemType | nsICertTreeType | nsICertificateDialogsType | nsIChannelType | nsIIdentChannelType | nsIUrlClassifierBlockedChannelType | nsIChannelClassifierServiceType | nsIChannelEventSinkType | nsIChildChannelType | nsIChromeRegistryType | nsIXULChromeRegistryType | nsIClassInfoType | nsIClassOfServiceType | nsIClassifiedChannelType | nsIClearDataServiceType | nsIClearDataCallbackType | nsIClickRuleType | nsIClientAuthDialogCallbackType | nsIClientAuthDialogServiceType | nsIClientAuthDialogsType | nsIClientAuthRememberRecordType | nsIClientAuthRememberServiceType | nsIAsyncSetClipboardDataType | nsIAsyncSetClipboardDataCallbackType | nsIClipboardType | nsIClipboardHelperType | nsIClipboardOwnerType | nsICloneableInputStreamType | nsICloneableInputStreamWithRangeType | nsICodeCoverageType | nsIColorPickerShownCallbackType | nsIColorPickerType | nsICommandLineType | nsICommandLineRunnerType | nsICommandLineValidatorType | nsICommandManagerType | nsICommandParamsType | nsIComponentManagerType | nsIComponentRegistrarType | nsICompressConvStatsType | nsIConsoleAPIStorageType | nsIConsoleListenerType | nsIConsoleMessageType | nsIConsoleServiceType | nsIContentBlockingAllowListType | nsIContentDispatchChooserType | nsIContentHandlerType | nsIContentPermissionTypeType | nsIContentPermissionRequestType | nsIContentPermissionPromptType | nsIContentPolicyType | nsIContentPrefObserverType | nsIContentPrefService2Type | nsIContentPrefCallback2Type | nsIContentPrefType | nsIContentProcessInfoType | nsIContentProcessProviderType | nsIContentSecurityManagerType | nsIContentSecurityPolicyType | nsISerializableType | nsICSPEventListenerType | nsIContentSignatureVerifierType | nsIContentSnifferType | nsIContentViewerType | nsIContentViewerEditType | nsIControllerType | nsICommandControllerType | nsIControllerCommandType | nsIControllerCommandTableType | nsIControllerContextType | nsIControllersType | nsIConverterInputStreamType | nsIUnicharInputStreamType | nsIConverterOutputStreamType | nsIUnicharOutputStreamType | nsICookieType | nsICookieBannerListServiceType | nsICookieBannerRuleType | nsICookieBannerServiceType | nsICookieJarSettingsType | nsICookieManagerType | nsICookieNotificationType | nsICookiePermissionType | nsICookieRuleType | nsICookieTransactionCallbackType | nsICookieServiceType | nsICrashReporterType | nsICrashServiceType | nsICryptoHashType | nsICycleCollectorHandlerType | nsICycleCollectorLogSinkType | nsICycleCollectorListenerType | nsIDAPTelemetryType | nsIDHCPClientType | nsIDNSAdditionalInfoType | nsIDNSByTypeRecordType | nsIDNSRecordType | nsIDNSTXTRecordType | nsISVCParamType | nsISVCParamAlpnType | nsISVCParamNoDefaultAlpnType | nsISVCParamPortType | nsISVCParamIPv4HintType | nsISVCParamEchConfigType | nsISVCParamIPv6HintType | nsISVCParamODoHConfigType | nsISVCBRecordType | nsIDNSHTTPSSVCRecordType | nsIDNSListenerType | nsIDNSAddrRecordType | nsIDNSServiceType | nsIDOMChromeWindowType | nsIDOMEventListenerType | nsIDOMGeoPositionType | nsIDOMGeoPositionCallbackType | nsIDOMGeoPositionCoordsType | nsIDOMGeoPositionErrorCallbackType | nsIDOMGlobalPropertyInitializerType | nsIDOMMozBrowserFrameType | nsIDOMProcessChildType | nsIDOMProcessParentType | nsIDOMRequestServiceType | nsIDOMStorageManagerType | nsIDOMSessionStorageManagerType | nsIDOMMozWakeLockListenerType | nsIDOMWindowType | nsIDOMWindowUtilsType | nsITranslationNodeListType | nsIJSRAIIHelperType | nsIDOMXULButtonElementType | nsIDOMXULControlElementType | nsIDOMXULCommandDispatcherType | nsIDOMXULContainerItemElementType | nsIDOMXULContainerElementType | nsIDOMXULMenuListElementType | nsIDOMXULSelectControlElementType | nsIDOMXULMultiSelectControlElementType | nsIDOMXULRadioGroupElementType | nsIDOMXULRelatedElementType | nsIDOMXULSelectControlItemElementType | nsINetDashboardCallbackType | nsIDashboardType | nsIDashboardEventNotifierType | nsIDataStorageManagerType | nsIDataStorageType | nsIDataStorageItemType | nsIDebug2Type | nsIDefaultAgentType | nsIDeviceSensorDataType | nsIDeviceSensorsType | nsIDialogParamBlockType | nsIDirIndexType | nsIDirIndexListenerType | nsIDirIndexParserType | nsIDirectTaskDispatcherType | nsIDirectoryEnumeratorType | nsISimpleEnumeratorType | nsISimpleEnumeratorBaseType | nsIDirectoryServiceProviderType | nsIDirectoryServiceProvider2Type | nsIDirectoryServiceType | nsIDisplayInfoType | nsIDocShellTreeOwnerType | nsIDocumentEncoderNodeFixupType | nsIDocumentEncoderType | nsIDocumentLoaderType | nsIDocumentLoaderFactoryType | nsIDocumentStateListenerType | nsIDomainPolicyType | nsIDomainSetType | nsIDownloaderType | nsIDownloadObserverType | nsIDragServiceType | nsIDragSessionType | nsIDroppedLinkItemType | nsIDroppedLinkHandlerType | nsIE10SUtilsType | nsIEarlyHintObserverType | nsIEdgeMigrationUtilsType | nsIEditActionListenerType | nsIEditingSessionType | nsIEditorType | nsIEditorMailSupportType | nsIEditorSpellCheckType | nsIEditorSpellCheckCallbackType | nsIEffectiveTLDServiceType | nsIEmbeddingSiteWindowType | nsIEncodedChannelType | nsIEnterprisePoliciesType | nsIEnvironmentType | nsIEventListenerChangeType | nsIListenerChangeListenerType | nsIEventListenerInfoType | nsIEventListenerServiceType | nsIEventSourceEventListenerType | nsIEventSourceEventServiceType | nsIEventTargetType | nsIStackFrameType | nsIExceptionType | nsIExpatSinkType | nsIExternalHelperAppServiceType | nsPIExternalAppLauncherType | nsIHelperAppLauncherType | nsIExternalProtocolHandlerType | nsIProtocolHandlerType | nsIExternalProtocolServiceType | nsIFOGType | nsIFactoryType | nsIFaviconServiceType | nsIFaviconDataCallbackType | nsIFileType | nsIFileChannelType | nsIFilePickerType | nsIFilePickerShownCallbackType | nsIFileProtocolHandlerType | nsIFileInputStreamType | nsIFileOutputStreamType | nsIFileRandomAccessStreamType | nsIRandomAccessStreamType | nsISeekableStreamType | nsITellableStreamType | nsIFileMetadataType | nsIAsyncFileMetadataType | nsIFileMetadataCallbackType | nsIFileURLType | nsIURLType | nsIFileURLMutatorType | nsIFinalizationWitnessServiceType | nsIFindType | nsIFindServiceType | nsIFingerprintingOverrideType | nsIFingerprintingWebCompatServiceType | nsIFocusManagerType | nsIFontEnumeratorType | nsIFontLoadCompleteCallbackType | nsIForcePendingChannelType | nsIFormAutoCompleteType | nsIFormAutoCompleteObserverType | nsIFormFillControllerType | nsIFormPOSTActionChannelType | nsIUploadChannelType | nsIFormatConverterType | nsIGIOMimeAppType | nsIHandlerAppType | nsIGIOServiceType | nsIGNOMEShellServiceType | nsIShellServiceType | nsIGSettingsCollectionType | nsIGSettingsServiceType | nsIGeolocationUpdateType | nsIGeolocationProviderType | nsIGfxInfoType | nsIGfxInfoDebugType | nsIGleanBooleanType | nsIGleanDatetimeType | nsIGleanCounterType | nsIGleanTimingDistributionType | nsIGleanMemoryDistributionType | nsIGleanCustomDistributionType | nsIGleanPingTestCallbackType | nsIGleanPingType | nsIGleanStringType | nsIGleanStringListType | nsIGleanTimespanType | nsIGleanUuidType | nsIGleanEventType | nsIGleanQuantityType | nsIGleanDenominatorType | nsIGleanNumeratorType | nsIGleanRateType | nsIGleanUrlType | nsIGleanTextType | nsIGtkTaskbarProgressType | nsITaskbarProgressType | nsIHTMLAbsPosEditorType | nsIHTMLEditorType | nsIHTMLInlineTableEditorType | nsIHTMLObjectResizerType | nsIHandlerServiceType | nsIHangDetailsType | nsIHangReportType | nsIHapticFeedbackType | nsIHelperAppLauncherDialogType | nsIHttpActivityObserverType | nsIHttpActivityDistributorType | nsIHttpAuthManagerType | nsIHttpAuthenticableChannelType | nsIProxiedChannelType | nsIHttpAuthenticatorType | nsIHttpAuthenticatorCallbackType | nsIHttpChannelType | nsIHttpChannelAuthProviderType | nsIHttpChannelChildType | nsIHttpUpgradeListenerType | nsIHttpChannelInternalType | nsIHttpHeaderVisitorType | nsIHttpProtocolHandlerType | nsIProxiedProtocolHandlerType | nsIHttpPushListenerType | nsIHttpServerType | nsIHttpServerStoppedCallbackType | nsIHttpServerIdentityType | nsIHttpRequestHandlerType | nsIHttpRequestType | nsIHttpResponseType | nsIHttpsOnlyModePermissionType | nsIIDBPermissionsRequestType | nsIIDNServiceType | nsIINIParserType | nsIINIParserWriterType | nsIINIParserFactoryType | nsIIOServiceInternalType | nsIIOUtilType | nsIMozIconURIType | nsIIdentityCredentialPromptServiceType | nsIIdentityCredentialStorageServiceType | nsIIdlePeriodType | nsIImageLoadingContentType | nsIIncrementalDownloadType | nsIIncrementalStreamLoaderObserverType | nsIIncrementalStreamLoaderType | nsIInlineSpellCheckerType | nsIInputListAutoCompleteType | nsIInputStreamChannelType | nsIInputStreamLengthType | nsIAsyncInputStreamLengthType | nsIInputStreamLengthCallbackType | nsIInputStreamPriorityType | nsIInputStreamPumpType | nsIInputStreamTeeType | nsIInterceptionInfoType | nsIInterfaceRequestorType | nsIJARChannelType | nsIJARURIType | nsIJARURIMutatorType | nsIJSInspectorType | nsIJumpListCommittedCallbackType | nsIJumpListBuilderType | nsIJumpListItemType | nsIJumpListSeparatorType | nsIJumpListLinkType | nsIJumpListShortcutType | nsIKeyValueServiceType | nsIKeyValueDatabaseType | nsIKeyValuePairType | nsIKeyValueEnumeratorType | nsIKeyValueDatabaseCallbackType | nsIKeyValueEnumeratorCallbackType | nsIKeyValuePairCallbackType | nsIKeyValueVariantCallbackType | nsIKeyValueVoidCallbackType | nsIKeychainMigrationUtilsType | nsILayoutDebuggingToolsType | nsILayoutHistoryStateType | nsILineInputStreamType | nsILoadContextType | nsILoadContextInfoType | nsILoadContextInfoFactoryType | nsILoadGroupType | nsILoadGroupChildType | nsILoadInfoType | nsILoadURIDelegateType | nsILocalFileMacType | nsILocalFileWinType | nsILocalStorageManagerType | nsILoginAutoCompleteSearchType | nsILoginDetectionServiceType | nsILoginInfoType | nsILoginSearchCallbackType | nsILoginManagerType | nsILoginManagerAuthPrompterType | nsILoginManagerCryptoType | nsILoginManagerPrompterType | nsILoginManagerStorageType | nsILoginMetaInfoType | nsILoginReputationVerdictTypeType | nsILoginReputationQueryType | nsILoginReputationQueryCallbackType | nsILoginReputationServiceType | nsIMIMEHeaderParamType | nsIHandlerInfoType | nsIMIMEInfoType | nsILocalHandlerAppType | nsIWebHandlerAppType | nsIDBusHandlerAppType | nsIMIMEInputStreamType | nsIMIMEServiceType | nsIMacAttributionServiceType | nsIMacDockSupportType | nsIMacFinderProgressCanceledCallbackType | nsIMacFinderProgressType | nsIMacPreferencesReaderType | nsIMacSharingServiceType | nsIMacShellServiceType | nsIMacUserActivityUpdaterType | nsITrashAppCallbackType | nsIMacWebAppUtilsType | nsIMarionetteType | nsIMediaDeviceType | nsIMediaManagerServiceType | nsIFinishDumpingCallbackType | nsIDumpGCAndCCLogsCallbackType | nsIMemoryInfoDumperType | nsIHandleReportCallbackType | nsIMemoryReporterType | nsIFinishReportingCallbackType | nsIHeapAllocatedCallbackType | nsIMemoryReporterManagerType | nsIMessageLoopType | nsIMessageSenderType | nsIInProcessContentFrameMessageManagerType | nsIMozBrowserFrameType | nsIMultiPartChannelType | nsIMultiPartChannelListenerType | nsIMultiplexInputStreamType | nsIMutableArrayType | nsINSSComponentType | nsINSSErrorsServiceType | nsINSSVersionType | nsINamedType | nsINamedPipeDataObserverType | nsINamedPipeServiceType | nsINativeAppSupportType | nsINativeDNSResolverOverrideType | nsINativeOSFileResultType | nsINativeOSFileSuccessCallbackType | nsINativeOSFileErrorCallbackType | nsINativeOSFileInternalsServiceType | nsINavBookmarksServiceType | nsINavHistoryResultNodeType | nsINavHistoryContainerResultNodeType | nsINavHistoryQueryResultNodeType | nsINavHistoryResultObserverType | nsINavHistoryResultType | nsINavHistoryQueryType | nsINavHistoryQueryOptionsType | nsINavHistoryServiceType | nsINestedURIType | nsINestedURIMutatorType | nsINestedAboutURIMutatorType | nsIJSURIMutatorType | nsINetAddrType | nsINetworkConnectivityServiceType | nsIListNetworkAddressesListenerType | nsIGetHostnameListenerType | nsINetworkInfoServiceType | nsIInterceptedBodyCallbackType | nsIInterceptedChannelType | nsINetworkInterceptControllerType | nsINetworkLinkServiceType | nsINetworkPredictorType | nsINetworkPredictorVerifierType | nsINotificationStorageCallbackType | nsINotificationStorageType | nsINullChannelType | nsIOSFileConstantsServiceType | nsIOSKeyStoreType | nsIOSPermissionRequestType | nsIOSReauthenticatorType | nsIObjectInputStreamType | nsIObjectLoadingContentType | nsIObjectOutputStreamType | nsIObliviousHttpClientResponseType | nsIObliviousHttpClientRequestType | nsIObliviousHttpServerResponseType | nsIObliviousHttpServerType | nsIObliviousHttpType | nsIObliviousHttpServiceType | nsIObliviousHttpChannelType | nsIObserverType | nsIBrowsingContextReadyCallbackType | nsIOpenWindowInfoType | nsIPK11TokenType | nsIPK11TokenDBType | nsIPKCS11ModuleType | nsIPKCS11ModuleDBType | nsIPKCS11SlotType | nsIPageThumbsStorageServiceType | nsIPaperType | nsIPaperMarginType | nsIParentChannelType | nsIAsyncVerifyRedirectReadyCallbackType | nsIParentRedirectingChannelType | nsIParentalControlsServiceType | nsIParserUtilsType | nsIPartitioningExceptionListObserverType | nsIPartitioningExceptionListServiceType | nsIPaymentResponseDataType | nsIGeneralResponseDataType | nsIBasicCardResponseDataType | nsIPaymentActionResponseType | nsIPaymentCanMakeActionResponseType | nsIPaymentShowActionResponseType | nsIPaymentAbortActionResponseType | nsIPaymentCompleteActionResponseType | nsIMethodChangeDetailsType | nsIGeneralChangeDetailsType | nsIBasicCardChangeDetailsType | nsIPaymentAddressType | nsIPaymentMethodDataType | nsIPaymentCurrencyAmountType | nsIPaymentItemType | nsIPaymentDetailsModifierType | nsIPaymentShippingOptionType | nsIPaymentDetailsType | nsIPaymentOptionsType | nsIPaymentRequestType | nsIPaymentRequestServiceType | nsIPaymentUIServiceType | nsIPermissionType | nsIPermissionDelegateHandlerType | nsIPermissionManagerType | nsIPropertyElementType | nsIPersistentPropertiesType | nsIPropertiesType | nsIPipeType | nsISearchableInputStreamType | nsIPlacesPreviewsHelperServiceType | nsIPlatformInfoType | nsIPluginTagType | nsIFakePluginTagType | nsIPowerManagerServiceType | nsIPrefBranchType | nsIPrefLocalizedStringType | nsISupportsStringType | nsIPrefStatsCallbackType | nsIPrefObserverType | nsIPrefServiceType | nsIPrefetchServiceType | nsIPreloadedStyleSheetType | nsIExpandedPrincipalType | nsIPrintDialogServiceType | nsIPrintPreviewNavigationType | nsIPrintSettingsType | nsIPrintSettingsServiceType | nsIPrintSettingsWinType | nsIPrinterInfoType | nsIPrinterType | nsIPrinterListType | nsIPrivacyTransitionObserverType | nsIPrivateBrowsingChannelType | nsIProcessType | nsIProcessToolsServiceType | nsIProfileStartupType | nsIProfileMigratorType | nsIProfileUnlockerType | nsIProfilerStartParamsType | nsIProfilerType | nsIProgressEventSinkType | nsIPromptType | nsIPromptCollectionType | nsIPromptFactoryType | nsIPromptInstanceType | nsIPromptServiceType | nsIPropertyType | nsIPropertyBagType | nsIPropertyBag2Type | nsIProtectedAuthThreadType | nsIProtocolHandlerWithDynamicFlagsType | nsIProtocolProxyCallbackType | nsIProxyProtocolFilterResultType | nsIProtocolProxyFilterType | nsIProtocolProxyChannelFilterType | nsIProxyConfigChangedCallbackType | nsIProtocolProxyServiceType | nsIProtocolProxyService2Type | nsIProxyInfoType | nsIPublicKeyPinningServiceType | nsIPurgeTrackerServiceType | nsIPushErrorReporterType | nsIPushNotifierType | nsIPushDataType | nsIPushMessageType | nsIPushSubscriptionType | nsIPushSubscriptionCallbackType | nsIUnsubscribeResultCallbackType | nsIPushClearResultCallbackType | nsIPushServiceType | nsIPushQuotaManagerType | nsIQueryContentEventResultType | nsIQuotaUsageCallbackType | nsIQuotaCallbackType | nsIQuotaManagerServiceType | nsIQuotaRequestBaseType | nsIQuotaUsageRequestType | nsIQuotaRequestType | nsIQuotaFullOriginMetadataResultType | nsIQuotaUsageResultType | nsIQuotaOriginUsageResultType | nsIQuotaEstimateResultType | nsIRFPServiceType | nsIRaceCacheWithNetworkType | nsIRandomGeneratorType | nsIRddProcessTestType | nsIRedirectChannelRegistrarType | nsIRedirectHistoryEntryType | nsIRedirectResultListenerType | nsIReferrerInfoType | nsIReflowObserverType | nsIRefreshURIType | nsIRegionType | nsIRelativeFilePrefType | nsIRemoteAgentType | nsIRemoteTabType | nsIRequestTailUnblockCallbackType | nsIRequestContextType | nsIRequestContextServiceType | nsIRequestObserverProxyType | nsIResProtocolHandlerType | nsISubstitutingProtocolHandlerType | nsIResumableChannelType | nsIRunnableType | nsIRunnablePriorityType | nsIRunnableIPCMessageTypeType | nsISDBCallbackType | nsISDBCloseCallbackType | nsISDBConnectionType | nsISDBRequestType | nsISDBResultType | nsISHEntryType | nsISHistoryType | nsISHistoryListenerType | nsISafeOutputStreamType | nsIScreenType | nsIScreenManagerType | nsIScriptChannelType | nsIScriptErrorNoteType | nsIScriptErrorType | nsIScriptLoaderObserverType | nsIScriptableBase64EncoderType | nsIScriptableContentIteratorType | nsIScriptableInputStreamType | nsIScriptableUnicodeConverterType | nsISearchSubmissionType | nsISearchEngineType | nsISearchParseSubmissionResultType | nsISearchServiceType | nsISecCheckWrapChannelType | nsISecretDecoderRingType | nsISecureBrowserUIType | nsISecurityConsoleMessageType | nsISecurityUITelemetryType | nsISelectionControllerType | nsISelectionDisplayType | nsISelectionListenerType | nsISensitiveInfoHiddenURIType | nsISerialEventTargetType | nsISerializationHelperType | nsIServerSocketType | nsIServerSocketListenerType | nsIServiceManagerType | nsIServiceWorkerUnregisterCallbackType | nsIServiceWorkerInfoType | nsIServiceWorkerRegistrationInfoListenerType | nsIServiceWorkerRegistrationInfoType | nsIServiceWorkerManagerListenerType | nsIServiceWorkerManagerType | nsISessionStorageServiceType | nsISessionStoreRestoreDataType | nsISharePickerType | nsISharingHandlerAppType | nsIJSEnumeratorType | nsISimpleStreamListenerType | nsISimpleURIMutatorType | nsISiteSecurityServiceType | nsISlowScriptDebugCallbackType | nsISlowScriptDebuggerStartupCallbackType | nsISlowScriptDebugRemoteCallbackType | nsISlowScriptDebugType | nsISocketFilterType | nsISocketFilterHandlerType | nsISocketProviderType | nsISocketProviderServiceType | nsISocketTransportType | nsITransportType | nsISTSShutdownObserverType | nsISocketTransportServiceType | nsIRoutedSocketTransportServiceType | nsISoundType | nsISpeculativeConnectionOverriderType | nsISpeechGrammarCompilationCallbackType | nsISpeechRecognitionServiceType | nsISpeechTaskCallbackType | nsISpeechTaskType | nsISpeechServiceType | nsIStandaloneNativeMenuType | nsIStandardURLType | nsIStandardURLMutatorType | nsIStartupCacheInfoType | nsIStorageActivityServiceType | nsIStorageStreamType | nsIStreamBufferAccessType | nsIStreamConverterServiceType | nsIStreamListenerTeeType | nsIStreamLoaderObserverType | nsIStreamLoaderType | nsIStreamTransportServiceType | nsIInputAvailableCallbackType | nsIStringBundleType | nsIStringBundleServiceType | nsIStringEnumeratorBaseType | nsIStringEnumeratorType | nsIUTF8StringEnumeratorType | nsIStringInputStreamType | nsIStructuredCloneContainerType | nsISFVBareItemType | nsISFVIntegerType | nsISFVStringType | nsISFVBoolType | nsISFVDecimalType | nsISFVTokenType | nsISFVByteSeqType | nsISFVParamsType | nsISFVParametrizableType | nsISFVItemOrInnerListType | nsISFVSerializeType | nsISFVItemType | nsISFVInnerListType | nsISFVListType | nsISFVDictionaryType | nsISFVServiceType | nsIStyleSheetServiceType | nsIOutputIteratorType | nsIInputIteratorType | nsIForwardIteratorType | nsIBidirectionalIteratorType | nsIRandomAccessIteratorType | nsISupportsIDType | nsISupportsPRBoolType | nsISupportsPRUint8Type | nsISupportsPRUint16Type | nsISupportsPRUint32Type | nsISupportsPRUint64Type | nsISupportsPRTimeType | nsISupportsCharType | nsISupportsPRInt16Type | nsISupportsPRInt32Type | nsISupportsPRInt64Type | nsISupportsFloatType | nsISupportsDoubleType | nsISupportsInterfacePointerType | nsISupportsPriorityType | nsISyncStreamListenerType | nsISynthVoiceRegistryType | nsISystemInfoType | nsISystemProxySettingsType | nsISystemStatusBarType | nsITCPSocketCallbackType | nsITLSServerSocketType | nsITLSClientStatusType | nsITLSServerConnectionInfoType | nsITLSServerSecurityObserverType | nsITLSSocketControlType | nsITRRSkipReasonType | nsITXTToHTMLConvType | nsITableEditorType | nsITaggingServiceType | nsITaskbarOverlayIconControllerType | nsITaskbarPreviewType | nsITaskbarPreviewButtonType | nsITaskbarPreviewCallbackType | nsITaskbarPreviewControllerType | nsITaskbarTabPreviewType | nsITaskbarWindowPreviewType | nsIFetchTelemetryDataCallbackType | nsITelemetryType | nsITextInputProcessorType | nsITextInputProcessorNotificationType | nsITextInputProcessorCallbackType | nsITextToSubURIType | nsIThreadType | nsIThreadInternalType | nsIThreadObserverType | nsIThreadPoolListenerType | nsIThreadPoolType | nsIThreadRetargetableRequestType | nsIThreadRetargetableStreamListenerType | nsIThreadShutdownType | nsIInputChannelThrottleQueueType | nsIThrottledInputChannelType | nsIServerTimingType | nsITimedChannelType | nsITimerCallbackType | nsITimerType | nsITimerManagerType | nsITlsHandshakeCallbackListenerType | nsITokenDialogsType | nsITokenPasswordDialogsType | nsIToolkitChromeRegistryType | nsIProfileLockType | nsIToolkitProfileType | nsIToolkitProfileServiceType | nsIToolkitShellServiceType | nsITooltipListenerType | nsITooltipTextProviderType | nsITouchBarHelperType | nsITouchBarInputCallbackType | nsITouchBarInputType | nsITouchBarUpdaterType | nsITraceableChannelType | nsITrackingDBServiceType | nsITransactionType | nsITransactionManagerType | nsITransferType | nsIWebProgressListener2Type | nsIWebProgressListenerType | nsIFlavorDataProviderType | nsITransferableType | nsITransportEventSinkType | nsITransportProviderType | nsITransportSecurityInfoType | nsITreeSelectionType | nsINativeTreeSelectionType | nsITypeAheadFindType | nsIU2FTokenManagerType | nsIUDPSocketType | nsIUDPSocketListenerType | nsIUDPMessageType | nsIUDPSocketSyncListenerType | nsIUDPSocketInternalType | nsIURIClassifierCallbackType | nsIURIClassifierType | nsIURIContentListenerType | nsIURIFixupInfoType | nsIURIFixupType | nsIURILoaderType | nsIURISetSpecType | nsIURISettersType | nsIURIMutatorType | nsIURIWithSpecialOriginType | nsIURLMutatorType | nsIURLDecorationAnnotationsServiceType | nsIURLFormatterType | nsIURLParserType | nsIURLQueryStringStripperType | nsIURLQueryStrippingListObserverType | nsIURLQueryStrippingListServiceType | nsIUnicharLineInputStreamType | nsIUpdatePatchType | nsIUpdateType | nsIUpdateCheckResultType | nsIUpdateCheckType | nsIUpdateCheckerType | nsIApplicationUpdateServiceType | nsIUpdateProcessorType | nsIUpdateSyncManagerType | nsIUpdateManagerType | nsIUpdateTimerManagerType | nsIUploadChannel2Type | nsIUrlClassifierCallbackType | nsIUrlClassifierUpdateObserverType | nsIUrlClassifierDBServiceType | nsIUrlClassifierLookupCallbackType | nsIUrlClassifierClassifyCallbackType | nsIUrlClassifierExceptionListObserverType | nsIUrlClassifierExceptionListServiceType | nsIUrlClassifierFeatureType | nsIUrlClassifierFeatureResultType | nsIUrlClassifierFeatureCallbackType | nsIFullHashMatchType | nsIUrlClassifierHashCompleterCallbackType | nsIUrlClassifierHashCompleterType | nsIUrlClassifierPositiveCacheEntryType | nsIUrlClassifierCacheEntryType | nsIUrlClassifierCacheInfoType | nsIUrlClassifierGetCacheCallbackType | nsIUrlClassifierInfoType | nsIUrlClassifierPrefixSetType | nsIUrlClassifierRemoteSettingsServiceType | nsIUrlClassifierStreamUpdaterType | nsIUrlClassifierParseFindFullHashCallbackType | nsIUrlClassifierUtilsType | nsIUrlListManagerType | nsIUserIdleServiceType | nsIUserIdleServiceInternalType | nsIUtilityProcessTestType | nsIVariantType | nsIWritableVariantType | nsIVersionComparatorType | nsIViewSourceChannelType | nsIWakeLockType | nsIWeakReferenceType | nsISupportsWeakReferenceType | nsIWebAuthnRegisterArgsType | nsIWebAuthnSignArgsType | nsIWebAuthnAttObjType | nsICtapRegisterArgsType | nsICtapSignArgsType | nsICtapRegisterResultType | nsICtapSignResultType | nsIWebAuthnControllerType | nsICredentialParametersType | nsIWebAuthnTransportType | nsIWebAuthnRegisterPromiseType | nsIWebAuthnSignPromiseType | nsIWebAuthnRegisterResultType | nsIWebAuthnSignResultType | nsIWebAuthnServiceType | nsIWebBrowserType | nsIWebBrowserChromeType | nsIWebBrowserChromeFocusType | nsIWebBrowserFindType | nsIWebBrowserFindInFramesType | nsIWebBrowserPersistType | nsIWebBrowserPersistURIMapType | nsIWebBrowserPersistDocumentType | nsIWebBrowserPersistResourceVisitorType | nsIWebBrowserPersistWriteCompletionType | nsIWebBrowserPersistDocumentReceiverType | nsIWebBrowserPrintType | nsIWebNavigationType | nsIWebNavigationInfoType | nsIWebPageDescriptorType | nsIWebProgressType | nsIWebProtocolHandlerRegistrarType | nsIWebSocketChannelType | nsIWebSocketFrameType | nsIWebSocketEventListenerType | nsIWebSocketEventServiceType | nsIWebSocketImplType | nsIWebSocketListenerType | nsIWebTransportType | WebTransportSessionEventListenerType | nsIWebTransportStreamCallbackType | nsIWebTransportSendStreamStatsType | nsIWebTransportReceiveStreamStatsType | nsIWebTransportStreamStatsCallbackType | nsIWebTransportReceiveStreamType | nsIWebTransportSendStreamType | nsIWebTransportBidirectionalStreamType | nsIWebVTTListenerType | nsIWebVTTParserWrapperType | nsIWellKnownOpportunisticUtilsType | nsIWifiAccessPointType | nsIWifiListenerType | nsIWifiMonitorType | nsIWinAppHelperType | nsIWinTaskSchedulerServiceType | nsIWinTaskbarType | nsIWindowCreatorType | nsIWindowMediatorType | nsIWindowMediatorListenerType | nsIWindowProviderType | nsIWindowlessBrowserType | nsIWindowsAlertsServiceType | nsIWindowsPackageManagerType | nsIWindowsRegKeyType | nsIWindowsShellServiceType | nsIWindowsUIUtilsType | nsIWorkerChannelLoadInfoType | nsIWorkerChannelInfoType | nsIWorkerDebuggerListenerType | nsIWorkerDebuggerType | nsIWorkerDebuggerManagerListenerType | nsIWorkerDebuggerManagerType | nsIWritablePropertyBagType | nsIWritablePropertyBag2Type | nsIX509CertType | nsIOpenSignedAppFileCallbackType | nsIAsyncBoolCallbackType | nsICertVerificationCallbackType | nsIX509CertDBType | nsIX509CertValidityType | nsIXPCScriptableType | nsIXREDirProviderType | nsIXULAppInfoType | nsIXULBrowserWindowType | nsIXULRuntimeType | nsIXULStoreType | nsIZipEntryType | nsIZipReaderType | nsIZipReaderCacheType | nsIZipWriterType | nsPIDNSServiceType | nsPIPromptServiceType | nsPISocketTransportServiceType | nsPIWidgetCocoaType | nsPIWindowWatcherType | txIEXSLTFunctionsType | xpcIJSWeakReferenceType | nsIXPCComponents_InterfacesType | nsIXPCComponents_ClassesType | nsIXPCComponents_ResultsType | nsIXPCComponents_IDType | nsIXPCComponents_ExceptionType | nsIXPCComponents_ConstructorType | nsIXPCComponents_utils_SandboxType | nsIScheduledGCCallbackType | nsIXPCComponents_UtilsType | nsIXPCComponentsType | nsIXPCTestObjectReadOnlyType | nsIXPCTestObjectReadWriteType | nsIXPCTestBug809674Type | nsIXPCTestCEnumsType | nsIXPCTestESMReturnCodeParentType | nsIXPCTestESMReturnCodeChildType | nsIXPCTestInterfaceAType | nsIXPCTestInterfaceBType | nsIXPCTestInterfaceCType | nsIXPCTestParamsType | nsIXPCTestReturnCodeParentType | nsIXPCTestReturnCodeChildType | nsIXPCTestFunctionInterfaceType | nsIXPCTestUtilsType;
    _processUnknownFields(record: any): string;
    /**
     * Return an instance of nsILoginInfo (and, implicitly, nsILoginMetaInfo).
     */
    _nsLoginInfoFromRecord(record: any): any;
    _getLoginFromGUID(guid: any): Promise<any>;
    applyIncoming(record: any): Promise<void>;
    getAllIDs(): Promise<{}>;
    changeItemID(oldID: any, newID: any): Promise<void>;
    itemExists(id: any): Promise<boolean>;
    createRecord(id: any, collection: any): Promise<LoginRec>;
    create(record: any): Promise<void>;
    remove(record: any, { sourceSync }?: {
        sourceSync?: boolean;
    }): Promise<void>;
    update(record: any): Promise<void>;
    wipe(): Promise<void>;
}
declare function PasswordTracker(name: any, engine: any): void;
declare class PasswordTracker {
    constructor(name: any, engine: any);
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
}
export {};
