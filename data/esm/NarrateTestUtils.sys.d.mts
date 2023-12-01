/// <reference types="gecko-types" />
export namespace NarrateTestUtils {
    let TOGGLE: string;
    let POPUP: string;
    let VOICE_SELECT: string;
    let VOICE_OPTIONS: string;
    let VOICE_SELECTED: string;
    let VOICE_SELECT_LABEL: string;
    let RATE: string;
    let START: string;
    let STOP: string;
    let BACK: string;
    let FORWARD: string;
    function isVisible(element: any): any;
    function isStoppedState(window: any, ok: any): void;
    function isStartedState(window: any, ok: any): void;
    function selectVoice(window: any, voiceUri: any): any;
    function getEventUtils(window: any): {
        _EU_Ci: CiType;
        _EU_Cc: {
            "@mozilla.org/devtools/jsonview-sniffer;1": {
                createInstance<I extends CiKeys>(req: CiType[I]): CiMap[I];
                name: "@mozilla.org/devtools/jsonview-sniffer;1";
                number: "{4148c488-dca1-49fc-a621-2a0097a62422}";
            };
            "@mozilla.org/streamconv;1?from=application/vnd.mozilla.json.view&to=*/*": {
                createInstance<I_1 extends CiKeys>(req: CiType[I_1]): CiMap[I_1];
                name: "@mozilla.org/streamconv;1?from=application/vnd.mozilla.json.view&to=*/*";
                number: "{d8c9acee-dec5-11e4-8c75-1681e6b88ec1}";
            };
            "@mozilla.org/jsinspector;1": {
                createInstance<I_2 extends CiKeys>(req: CiType[I_2]): CiMap[I_2];
                name: "@mozilla.org/jsinspector;1";
                number: "{ec5aa99c-7abb-4142-ac5f-aab2419e38e2}";
                typeName: "mozilla::jsinspector::nsJSInspector";
                interfaceName: "jsinsIpector";
            };
            "@mozilla.org/jsdebugger;1": {
                createInstance<I_3 extends CiKeys>(req: CiType[I_3]): CiMap[I_3];
                name: "@mozilla.org/jsdebugger;1";
                number: "{0365cbd5-d46e-4e94-a39f-83b63cd1a963}";
                typeName: "mozilla::jsdebugger::JSDebugger";
                interfaceName: "jsdebugger";
            };
            "@mozilla.org/devtools/startup-clh;1": {
                createInstance<I_4 extends CiKeys>(req: CiType[I_4]): CiMap[I_4];
                name: "@mozilla.org/devtools/startup-clh;1";
                number: "{9e9a9283-0ce9-4e4a-8f1c-ba129a032c32}";
            };
            "@mozilla.org/network/protocol/about;1?what=debugging": {
                createInstance<I_5 extends CiKeys>(req: CiType[I_5]): CiMap[I_5];
                name: "@mozilla.org/network/protocol/about;1?what=debugging";
                number: "{1060afaf-dc9e-43da-8646-23a2faf48493}";
            };
            "@mozilla.org/network/protocol/about;1?what=devtools-toolbox": {
                createInstance<I_6 extends CiKeys>(req: CiType[I_6]): CiMap[I_6];
                name: "@mozilla.org/network/protocol/about;1?what=devtools-toolbox";
                number: "{11342911-3135-45a8-8d71-737a2b0ad469}";
            };
            "@mozilla.org/docloaderservice;1": {
                createInstance<I_7 extends CiKeys>(req: CiType[I_7]): CiMap[I_7];
                name: "@mozilla.org/docloaderservice;1";
                number: "{057b04d0-0ccf-11d2-beba-00805f8a66dc}";
                typeName: "nsDocLoader";
                interfaceName: "nsIDocLoader";
            };
            "@mozilla.org/docshell/uri-fixup;1": {
                getService(): nsIURIFixupType;
                name: "@mozilla.org/docshell/uri-fixup;1";
                number: "{c6cf88b7-452e-47eb-bdc9-86e3561648ef}";
            };
            "@mozilla.org/docshell/uri-fixup-info;1": {
                createInstance<I_8 extends CiKeys>(req: CiType[I_8]): CiMap[I_8];
                name: "@mozilla.org/docshell/uri-fixup-info;1";
                number: "{33d75835-722f-42c0-89cc-44f328e56a86}";
            };
            "@mozilla.org/network/protocol/about;1?what=about": {
                createInstance<I_9 extends CiKeys>(req: CiType[I_9]): CiMap[I_9];
                name: "@mozilla.org/network/protocol/about;1?what=about";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=addons": {
                createInstance<I_10 extends CiKeys>(req: CiType[I_10]): CiMap[I_10];
                name: "@mozilla.org/network/protocol/about;1?what=addons";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=buildconfig": {
                createInstance<I_11 extends CiKeys>(req: CiType[I_11]): CiMap[I_11];
                name: "@mozilla.org/network/protocol/about;1?what=buildconfig";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=certificate": {
                createInstance<I_12 extends CiKeys>(req: CiType[I_12]): CiMap[I_12];
                name: "@mozilla.org/network/protocol/about;1?what=certificate";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=checkerboard": {
                createInstance<I_13 extends CiKeys>(req: CiType[I_13]): CiMap[I_13];
                name: "@mozilla.org/network/protocol/about;1?what=checkerboard";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=config": {
                createInstance<I_14 extends CiKeys>(req: CiType[I_14]): CiMap[I_14];
                name: "@mozilla.org/network/protocol/about;1?what=config";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=crashcontent": {
                createInstance<I_15 extends CiKeys>(req: CiType[I_15]): CiMap[I_15];
                name: "@mozilla.org/network/protocol/about;1?what=crashcontent";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=crashparent": {
                createInstance<I_16 extends CiKeys>(req: CiType[I_16]): CiMap[I_16];
                name: "@mozilla.org/network/protocol/about;1?what=crashparent";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=crashgpu": {
                createInstance<I_17 extends CiKeys>(req: CiType[I_17]): CiMap[I_17];
                name: "@mozilla.org/network/protocol/about;1?what=crashgpu";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=crashextensions": {
                createInstance<I_18 extends CiKeys>(req: CiType[I_18]): CiMap[I_18];
                name: "@mozilla.org/network/protocol/about;1?what=crashextensions";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=credits": {
                createInstance<I_19 extends CiKeys>(req: CiType[I_19]): CiMap[I_19];
                name: "@mozilla.org/network/protocol/about;1?what=credits";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=httpsonlyerror": {
                createInstance<I_20 extends CiKeys>(req: CiType[I_20]): CiMap[I_20];
                name: "@mozilla.org/network/protocol/about;1?what=httpsonlyerror";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=license": {
                createInstance<I_21 extends CiKeys>(req: CiType[I_21]): CiMap[I_21];
                name: "@mozilla.org/network/protocol/about;1?what=license";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=logging": {
                createInstance<I_22 extends CiKeys>(req: CiType[I_22]): CiMap[I_22];
                name: "@mozilla.org/network/protocol/about;1?what=logging";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=logo": {
                createInstance<I_23 extends CiKeys>(req: CiType[I_23]): CiMap[I_23];
                name: "@mozilla.org/network/protocol/about;1?what=logo";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=memory": {
                createInstance<I_24 extends CiKeys>(req: CiType[I_24]): CiMap[I_24];
                name: "@mozilla.org/network/protocol/about;1?what=memory";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=mozilla": {
                createInstance<I_25 extends CiKeys>(req: CiType[I_25]): CiMap[I_25];
                name: "@mozilla.org/network/protocol/about;1?what=mozilla";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=neterror": {
                createInstance<I_26 extends CiKeys>(req: CiType[I_26]): CiMap[I_26];
                name: "@mozilla.org/network/protocol/about;1?what=neterror";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=networking": {
                createInstance<I_27 extends CiKeys>(req: CiType[I_27]): CiMap[I_27];
                name: "@mozilla.org/network/protocol/about;1?what=networking";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=performance": {
                createInstance<I_28 extends CiKeys>(req: CiType[I_28]): CiMap[I_28];
                name: "@mozilla.org/network/protocol/about;1?what=performance";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=plugins": {
                createInstance<I_29 extends CiKeys>(req: CiType[I_29]): CiMap[I_29];
                name: "@mozilla.org/network/protocol/about;1?what=plugins";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=processes": {
                createInstance<I_30 extends CiKeys>(req: CiType[I_30]): CiMap[I_30];
                name: "@mozilla.org/network/protocol/about;1?what=processes";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=serviceworkers": {
                createInstance<I_31 extends CiKeys>(req: CiType[I_31]): CiMap[I_31];
                name: "@mozilla.org/network/protocol/about;1?what=serviceworkers";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=srcdoc": {
                createInstance<I_32 extends CiKeys>(req: CiType[I_32]): CiMap[I_32];
                name: "@mozilla.org/network/protocol/about;1?what=srcdoc";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=support": {
                createInstance<I_33 extends CiKeys>(req: CiType[I_33]): CiMap[I_33];
                name: "@mozilla.org/network/protocol/about;1?what=support";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=telemetry": {
                createInstance<I_34 extends CiKeys>(req: CiType[I_34]): CiMap[I_34];
                name: "@mozilla.org/network/protocol/about;1?what=telemetry";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=translations": {
                createInstance<I_35 extends CiKeys>(req: CiType[I_35]): CiMap[I_35];
                name: "@mozilla.org/network/protocol/about;1?what=translations";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=url-classifier": {
                createInstance<I_36 extends CiKeys>(req: CiType[I_36]): CiMap[I_36];
                name: "@mozilla.org/network/protocol/about;1?what=url-classifier";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=webrtc": {
                createInstance<I_37 extends CiKeys>(req: CiType[I_37]): CiMap[I_37];
                name: "@mozilla.org/network/protocol/about;1?what=webrtc";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=crashes": {
                createInstance<I_38 extends CiKeys>(req: CiType[I_38]): CiMap[I_38];
                name: "@mozilla.org/network/protocol/about;1?what=crashes";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol/about;1?what=profiles": {
                createInstance<I_39 extends CiKeys>(req: CiType[I_39]): CiMap[I_39];
                name: "@mozilla.org/network/protocol/about;1?what=profiles";
                number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
                interfaceName: "nsIAboutRedirector";
            };
            "@mozilla.org/network/protocol;1?name=default": {
                createInstance<I_40 extends CiKeys>(req: CiType[I_40]): CiMap[I_40];
                name: "@mozilla.org/network/protocol;1?name=default";
                number: "{bd6390c8-fbea-11d4-98f6-001083010e9b}";
                typeName: "nsExternalProtocolHandler";
                interfaceName: "nsIExternalProtocolHandler";
            };
            "@mozilla.org/ospermissionrequest;1": {
                createInstance<I_41 extends CiKeys>(req: CiType[I_41]): CiMap[I_41];
                name: "@mozilla.org/ospermissionrequest;1";
                number: "{95790842-75a0-430d-98bf-f5ce3788ea6d}";
                typeName: "nsOSPermissionRequest";
                interfaceName: "nsIOSPermissionRequest";
            };
            "@mozilla.org/prefetch-service;1": {
                createInstance<I_42 extends CiKeys>(req: CiType[I_42]): CiMap[I_42];
                name: "@mozilla.org/prefetch-service;1";
                number: "{6b8bdffc-3394-417d-be83-a81b7c0f63bf}";
                typeName: "nsPrefetchService";
                interfaceName: "nsIPrefetchService";
            };
            "@mozilla.org/uriloader/handler-service;1": {
                createInstance<I_43 extends CiKeys>(req: CiType[I_43]): CiMap[I_43];
                name: "@mozilla.org/uriloader/handler-service;1";
                number: "{c4b6fb7c-bfb1-49dc-a65f-035796524b53}";
                typeName: "nsIHandlerService";
                interfaceName: "nsIIHandlerService";
            };
            "@mozilla.org/uriloader/local-handler-app;1": {
                createInstance<I_44 extends CiKeys>(req: CiType[I_44]): CiMap[I_44];
                name: "@mozilla.org/uriloader/local-handler-app;1";
                number: "{bc0017e3-2438-47be-a567-41db58f17627}";
                typeName: "PlatformLocalHandlerApp_t";
                interfaceName: "PlatformLocalHandlerApp_t";
            };
            "@mozilla.org/uriloader;1": {
                createInstance<I_45 extends CiKeys>(req: CiType[I_45]): CiMap[I_45];
                name: "@mozilla.org/uriloader;1";
                number: "{9f6d5d40-90e7-11d3-af80-00a024ffc08c}";
                typeName: "nsURILoader";
                interfaceName: "nsIURILoader";
            };
            "@mozilla.org/webnavigation-info;1": {
                createInstance<I_46 extends CiKeys>(req: CiType[I_46]): CiMap[I_46];
                name: "@mozilla.org/webnavigation-info;1";
                number: "{f30bc0a2-958b-4287-bf62-ce38ba0c811e}";
                typeName: "nsWebNavigationInfo";
                interfaceName: "nsIWebNavigationInfo";
            };
            "@mozilla.org/uriloader/dbus-handler-app;1": {
                createInstance<I_47 extends CiKeys>(req: CiType[I_47]): CiMap[I_47];
                name: "@mozilla.org/uriloader/dbus-handler-app;1";
                number: "{6c3c274b-4cbf-4bb5-a635-05ad2cbb6535}";
                typeName: "nsDBusHandlerApp";
                interfaceName: "nsIDBusHandlerApp";
            };
            "@mozilla.org/mime;1": {
                createInstance<I_48 extends CiKeys>(req: CiType[I_48]): CiMap[I_48];
                name: "@mozilla.org/mime;1";
                number: "{a7f800e0-4306-11d4-98d0-001083010e9b}";
                typeName: "nsExternalHelperAppService";
                interfaceName: "nsIExternalHelperAppService";
            };
            "@mozilla.org/uriloader/external-helper-app-service;1": {
                createInstance<I_49 extends CiKeys>(req: CiType[I_49]): CiMap[I_49];
                name: "@mozilla.org/uriloader/external-helper-app-service;1";
                number: "{a7f800e0-4306-11d4-98d0-001083010e9b}";
                typeName: "nsExternalHelperAppService";
                interfaceName: "nsIExternalHelperAppService";
            };
            "@mozilla.org/uriloader/external-protocol-service;1": {
                createInstance<I_50 extends CiKeys>(req: CiType[I_50]): CiMap[I_50];
                name: "@mozilla.org/uriloader/external-protocol-service;1";
                number: "{a7f800e0-4306-11d4-98d0-001083010e9b}";
                typeName: "nsExternalHelperAppService";
                interfaceName: "nsIExternalHelperAppService";
            };
            "@mozilla.org/content/dropped-link-handler;1": {
                createInstance<I_51 extends CiKeys>(req: CiType[I_51]): CiMap[I_51];
                name: "@mozilla.org/content/dropped-link-handler;1";
                number: "{1f34bc80-1bc7-11d6-a384-d705dd0746fc}";
            };
            "@mozilla.org/ipc/processselector;1": {
                createInstance<I_52 extends CiKeys>(req: CiType[I_52]): CiMap[I_52];
                name: "@mozilla.org/ipc/processselector;1";
                number: "{2dc08eaf-6eef-4394-b1df-a3a927c1290b}";
            };
            "@mozilla.org/dom/slow-script-debug;1": {
                createInstance<I_53 extends CiKeys>(req: CiType[I_53]): CiMap[I_53];
                name: "@mozilla.org/dom/slow-script-debug;1";
                number: "{e740ddb4-18b4-4aac-8ae1-9b0f4320769d}";
            };
            "@mozilla.org/dom/browser-element-api;1": {
                createInstance<I_54 extends CiKeys>(req: CiType[I_54]): CiMap[I_54];
                name: "@mozilla.org/dom/browser-element-api;1";
                number: "{9f171ac4-0939-4ef8-b360-3408aedc3060}";
            };
            "@mozilla.org/consoleAPI-storage;1": {
                createInstance<I_55 extends CiKeys>(req: CiType[I_55]): CiMap[I_55];
                name: "@mozilla.org/consoleAPI-storage;1";
                number: "{96cf7855-dfa9-4c6d-8276-f9705b4890f2}";
            };
            "@mozilla.org/network/protocol;1?name=blob": {
                createInstance<I_56 extends CiKeys>(req: CiType[I_56]): CiMap[I_56];
                name: "@mozilla.org/network/protocol;1?name=blob";
                number: "{b43964aa-a078-44b2-b06b-fd4d1b172e66}";
                typeName: "mozilla::dom::BlobURLProtocolHandler";
                interfaceName: "dom";
            };
            "@mozilla.org/login-detection-service;1": {
                getService(): unknown;
                name: "@mozilla.org/login-detection-service;1";
                number: "{91fdaa4e-eba4-4ed3-831c-ce05c142822d}";
                typeName: "mozilla::dom::LoginDetectionService";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/l10n/localization;1": {
                createInstance<I_57 extends CiKeys>(req: CiType[I_57]): CiMap[I_57];
                name: "@mozilla.org/dom/l10n/localization;1";
                number: "{a2017fd2-7d8d-11e9-b492-ab187f765b54}";
                typeName: "mozilla::dom::DOMLocalization";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/l10n/overlays;1": {
                createInstance<I_58 extends CiKeys>(req: CiType[I_58]): CiMap[I_58];
                name: "@mozilla.org/dom/l10n/overlays;1";
                number: "{8d85597c-3a92-11e9-9ffc-73d225b2d53f}";
                typeName: "mozilla::dom::L10nOverlays";
                interfaceName: "dom";
            };
            "@mozilla.org/peerconnection;1": {
                createInstance<I_59 extends CiKeys>(req: CiType[I_59]): CiMap[I_59];
                name: "@mozilla.org/peerconnection;1";
                number: "{b93af7a1-3411-44a8-bd0a-8af3dde4d8d8}";
                typeName: "mozilla::PeerConnectionImpl";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/network/tcp-filter-handler;1?name=stun": {
                createInstance<I_60 extends CiKeys>(req: CiType[I_60]): CiMap[I_60];
                name: "@mozilla.org/network/tcp-filter-handler;1?name=stun";
                number: "{9fea635a-2fc2-4d08-9721-d238d3f52f92}";
                typeName: "nsStunTCPSocketFilterHandler";
                interfaceName: "nsIStunTCPSocketFilterHandler";
            };
            "@mozilla.org/network/udp-filter-handler;1?name=stun": {
                createInstance<I_61 extends CiKeys>(req: CiType[I_61]): CiMap[I_61];
                name: "@mozilla.org/network/udp-filter-handler;1?name=stun";
                number: "{3e43ee93-829e-4ea6-a34e-62d9e4c9f993}";
                typeName: "nsStunUDPSocketFilterHandler";
                interfaceName: "nsIStunUDPSocketFilterHandler";
            };
            "@mozilla.org/dom/peerconnection;1": {
                createInstance<I_62 extends CiKeys>(req: CiType[I_62]): CiMap[I_62];
                name: "@mozilla.org/dom/peerconnection;1";
                number: "{bdc2e533-b308-4708-ac8e-a8bfade6d851}";
            };
            "@mozilla.org/dom/peerconnectionobserver;1": {
                createInstance<I_63 extends CiKeys>(req: CiType[I_63]): CiMap[I_63];
                name: "@mozilla.org/dom/peerconnectionobserver;1";
                number: "{d1748d4c-7f6a-4dc5-add6-d55b7678537e}";
            };
            "@mozilla.org/dom/rtcdtmfsender;1": {
                createInstance<I_64 extends CiKeys>(req: CiType[I_64]): CiMap[I_64];
                name: "@mozilla.org/dom/rtcdtmfsender;1";
                number: "{3610C242-654E-11E6-8EC0-6D1BE389A607}";
            };
            "@mozilla.org/dom/rtcicecandidate;1": {
                createInstance<I_65 extends CiKeys>(req: CiType[I_65]): CiMap[I_65];
                name: "@mozilla.org/dom/rtcicecandidate;1";
                number: "{02b9970c-433d-4cc2-923d-f7028ac66073}";
            };
            "@mozilla.org/dom/rtcsessiondescription;1": {
                createInstance<I_66 extends CiKeys>(req: CiType[I_66]): CiMap[I_66];
                name: "@mozilla.org/dom/rtcsessiondescription;1";
                number: "{1775081b-b62d-4954-8ffe-a067bbf508a7}";
            };
            "@mozilla.org/dom/peerconnectionmanager;1": {
                createInstance<I_67 extends CiKeys>(req: CiType[I_67]): CiMap[I_67];
                name: "@mozilla.org/dom/peerconnectionmanager;1";
                number: "{7293e901-2be3-4c02-b4bd-cbef6fc24f78}";
            };
            "@mozilla.org/dom/rtcstatsreport;1": {
                createInstance<I_68 extends CiKeys>(req: CiType[I_68]): CiMap[I_68];
                name: "@mozilla.org/dom/rtcstatsreport;1";
                number: "{7fe6e18b-0da3-4056-bf3b-440ef3809e06}";
            };
            "@mozilla.org/dom/peerconnectionstatic;1": {
                createInstance<I_69 extends CiKeys>(req: CiType[I_69]): CiMap[I_69];
                name: "@mozilla.org/dom/peerconnectionstatic;1";
                number: "{0fb47c47-a205-4583-a9fc-cbadf8c95880}";
            };
            "@mozilla.org/dom/rtpsender;1": {
                createInstance<I_70 extends CiKeys>(req: CiType[I_70]): CiMap[I_70];
                name: "@mozilla.org/dom/rtpsender;1";
                number: "{4fff5d46-d827-4cd4-a970-8fd53977440e}";
            };
            "@mozilla.org/dom/rtpreceiver;1": {
                createInstance<I_71 extends CiKeys>(req: CiType[I_71]): CiMap[I_71];
                name: "@mozilla.org/dom/rtpreceiver;1";
                number: "{d974b814-8fde-411c-8c45-b86791b81030}";
            };
            "@mozilla.org/dom/createofferrequest;1": {
                createInstance<I_72 extends CiKeys>(req: CiType[I_72]): CiMap[I_72];
                name: "@mozilla.org/dom/createofferrequest;1";
                number: "{74b2122d-65a8-4824-aa9e-3d664cb75dc2}";
            };
            "@mozilla.org/rdd-process-test;1": {
                createInstance<I_73 extends CiKeys>(req: CiType[I_73]): CiMap[I_73];
                name: "@mozilla.org/rdd-process-test;1";
                number: "{12f7d302-5368-412d-bdc9-26d151518e6c}";
                typeName: "mozilla::RddProcessTest";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/androidspeechsynth;1": {
                getService(): unknown;
                name: "@mozilla.org/androidspeechsynth;1";
                number: "{311b2dab-f4d3-4be4-8123-6732313d95c2}";
                typeName: "mozilla::dom::SpeechSynthesisService";
                interfaceName: "dom";
            };
            "@mozilla.org/synthsystem;1": {
                getService(): unknown;
                name: "@mozilla.org/synthsystem;1";
                number: "{914e73b4-6337-4bef-97f3-4d069e053a12}";
                typeName: "mozilla::dom::OSXSpeechSynthesizerService";
                interfaceName: "dom";
            };
            "@mozilla.org/synthspeechdispatcher;1": {
                getService(): unknown;
                name: "@mozilla.org/synthspeechdispatcher;1";
                number: "{8817b1cf-5ada-43bf-bd73-607657703d0d}";
                typeName: "mozilla::dom::SpeechDispatcherService";
                interfaceName: "dom";
            };
            "@mozilla.org/fakesynth;1": {
                getService(): unknown;
                name: "@mozilla.org/fakesynth;1";
                number: "{e7d52d9e-c148-47d8-ab2a-95d7f40ea53d}";
                typeName: "mozilla::dom::nsFakeSynthServices";
                interfaceName: "dom";
            };
            "@mozilla.org/synthsapi;1": {
                getService(): unknown;
                name: "@mozilla.org/synthsapi;1";
                number: "{21b4a45b-9806-4021-a706-d768ab0548f9}";
                typeName: "mozilla::dom::SapiService";
                interfaceName: "dom";
            };
            "@mozilla.org/webvttParserWrapper;1": {
                createInstance<I_74 extends CiKeys>(req: CiType[I_74]): CiMap[I_74];
                name: "@mozilla.org/webvttParserWrapper;1";
                number: "{acf6e493-0092-4b26-b172-241e375c57ab}";
            };
            "@mozilla.org/notificationStorage;1": {
                createInstance<I_75 extends CiKeys>(req: CiType[I_75]): CiMap[I_75];
                name: "@mozilla.org/notificationStorage;1";
                number: "{37f819b0-0b5c-11e3-8ffd-0800200c9a66}";
            };
            "@mozilla.org/dom/payments/basiccard-change-details;1": {
                createInstance<I_76 extends CiKeys>(req: CiType[I_76]): CiMap[I_76];
                name: "@mozilla.org/dom/payments/basiccard-change-details;1";
                number: "{5296f79e-15ea-40c3-8196-19cfa64d328c}";
                typeName: "mozilla::dom::BasicCardMethodChangeDetails";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/payments/basiccard-response-data;1": {
                createInstance<I_77 extends CiKeys>(req: CiType[I_77]): CiMap[I_77];
                name: "@mozilla.org/dom/payments/basiccard-response-data;1";
                number: "{0d55a5e6-d185-44f0-b992-a8e1321e4bce}";
                typeName: "mozilla::dom::BasicCardResponseData";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/payments/general-change-details;1": {
                createInstance<I_78 extends CiKeys>(req: CiType[I_78]): CiMap[I_78];
                name: "@mozilla.org/dom/payments/general-change-details;1";
                number: "{e031267e-bec8-4f3c-b0b1-396b77ca260c}";
                typeName: "mozilla::dom::GeneralMethodChangeDetails";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/payments/general-response-data;1": {
                createInstance<I_79 extends CiKeys>(req: CiType[I_79]): CiMap[I_79];
                name: "@mozilla.org/dom/payments/general-response-data;1";
                number: "{b986773e-2b30-4ed2-b8fe-6a96631c8000}";
                typeName: "mozilla::dom::GeneralResponseData";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/payments/payment-abort-action-response;1": {
                createInstance<I_80 extends CiKeys>(req: CiType[I_80]): CiMap[I_80];
                name: "@mozilla.org/dom/payments/payment-abort-action-response;1";
                number: "{8c72bcdb-0c37-4786-a9e5-510afa2f8ede}";
                typeName: "mozilla::dom::PaymentAbortActionResponse";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/payments/payment-address;1": {
                createInstance<I_81 extends CiKeys>(req: CiType[I_81]): CiMap[I_81];
                name: "@mozilla.org/dom/payments/payment-address;1";
                number: "{49a02241-7e48-477a-9345-9f246925dcb3}";
                typeName: "mozilla::dom::payments::PaymentAddress";
                interfaceName: "payments";
            };
            "@mozilla.org/dom/payments/payment-canmake-action-response;1": {
                createInstance<I_82 extends CiKeys>(req: CiType[I_82]): CiMap[I_82];
                name: "@mozilla.org/dom/payments/payment-canmake-action-response;1";
                number: "{52fc3f9f-c0cb-4874-b3d4-ee4b6e9cbe9c}";
                typeName: "mozilla::dom::PaymentCanMakeActionResponse";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/payments/payment-complete-action-response;1": {
                createInstance<I_83 extends CiKeys>(req: CiType[I_83]): CiMap[I_83];
                name: "@mozilla.org/dom/payments/payment-complete-action-response;1";
                number: "{62c01e69-9ca4-4060-99e4-b95f628c8e6d}";
                typeName: "mozilla::dom::PaymentCompleteActionResponse";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/payments/payment-request-service;1": {
                getService(): unknown;
                name: "@mozilla.org/dom/payments/payment-request-service;1";
                number: "{cccd665f-edf3-41fc-ab9b-fc55b37340aa}";
                typeName: "mozilla::dom::PaymentRequestService";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/payments/payment-show-action-response;1": {
                createInstance<I_84 extends CiKeys>(req: CiType[I_84]): CiMap[I_84];
                name: "@mozilla.org/dom/payments/payment-show-action-response;1";
                number: "{184385cb-2d35-4b99-a9a3-7c780bf66b9b}";
                typeName: "mozilla::dom::PaymentShowActionResponse";
                interfaceName: "dom";
            };
            "@mozilla.org/power/powermanagerservice;1": {
                getService(): unknown;
                name: "@mozilla.org/power/powermanagerservice;1";
                number: "{18c2e238-3a0a-4153-89fc-166b3b1465a1}";
                typeName: "mozilla::dom::power::PowerManagerService";
                interfaceName: "power";
            };
            "@mozilla.org/push/PushManager;1": {
                createInstance<I_85 extends CiKeys>(req: CiType[I_85]): CiMap[I_85];
                name: "@mozilla.org/push/PushManager;1";
                number: "{cde1d019-fad8-4044-b141-65fb4fb7a245}";
            };
            "@mozilla.org/push/Service;1": {
                createInstance<I_86 extends CiKeys>(req: CiType[I_86]): CiMap[I_86];
                name: "@mozilla.org/push/Service;1";
                number: "{daaa8d73-677e-4233-8acd-2c404bd01658}";
            };
            "@mozilla.org/network/protocol;1?name=indexeddb": {
                createInstance<I_87 extends CiKeys>(req: CiType[I_87]): CiMap[I_87];
                name: "@mozilla.org/network/protocol;1?name=indexeddb";
                number: "{b6f2f870-b0bc-4a1a-9c40-02cc171adb5b}";
                typeName: "nsIndexedDBProtocolHandler";
                interfaceName: "nsIIndexedDBProtocolHandler";
            };
            "@mozilla.org/dom/session-storage-service;1": {
                getService(): nsISessionStorageServiceType;
                name: "@mozilla.org/dom/session-storage-service;1";
                number: "{7ec4bc82-5022-4d32-8e98-ffbceadb692c}";
                typeName: "nsISessionStorageService";
                interfaceName: "nsIISessionStorageService";
            };
            "@mozilla.org/geolocation/provider;1": {
                createInstance<I_88 extends CiKeys>(req: CiType[I_88]): CiMap[I_88];
                name: "@mozilla.org/geolocation/provider;1";
                number: "{77DA64D3-7458-4920-9491-86CC9914F904}";
            };
            "@mozilla.org/geolocation/mls-provider;1": {
                createInstance<I_89 extends CiKeys>(req: CiType[I_89]): CiMap[I_89];
                name: "@mozilla.org/geolocation/mls-provider;1";
                number: "{77DA64D3-7458-4920-9491-86CC9914F904}";
            };
            "@mozilla.org/webauthn/service;1": {
                createInstance<I_90 extends CiKeys>(req: CiType[I_90]): CiMap[I_90];
                name: "@mozilla.org/webauthn/service;1";
                number: "{ebe8a51d-bd54-4838-b031-cd2289990e14}";
            };
            "@mozilla.org/dom/test-interface-js;1": {
                createInstance<I_91 extends CiKeys>(req: CiType[I_91]): CiMap[I_91];
                name: "@mozilla.org/dom/test-interface-js;1";
                number: "{2ac4e026-cf25-47d5-b067-78d553c3cad8}";
            };
            "@mozilla.org/permissionmanager;1": {
                getService(): nsIPermissionManagerType;
                name: "@mozilla.org/permissionmanager;1";
                number: "{4f6b5e00-0c36-11d5-a535-0010a401eb10}";
                typeName: "nsIPermissionManager";
                interfaceName: "nsIIPermissionManager";
            };
            "@mozilla.org/permissiondelegatehandler;1": {
                createInstance<I_92 extends CiKeys>(req: CiType[I_92]): CiMap[I_92];
                name: "@mozilla.org/permissiondelegatehandler;1";
                number: "{07611dc6-bf4d-4d8a-a64b-f3a5904dddc7}";
                typeName: "PermissionDelegateHandler";
                interfaceName: "PermissionDelegateHandler";
            };
            "@mozilla.org/readconfig;1": {
                createInstance<I_93 extends CiKeys>(req: CiType[I_93]): CiMap[I_93];
                name: "@mozilla.org/readconfig;1";
                number: "{ba5bc4c6-1dd1-11b2-bb89-b844c6ec0339}";
                typeName: "nsReadConfig";
                interfaceName: "nsIReadConfig";
            };
            "@mozilla.org/spellchecker/engine;1": {
                createInstance<I_94 extends CiKeys>(req: CiType[I_94]): CiMap[I_94];
                name: "@mozilla.org/spellchecker/engine;1";
                number: "{56c778e4-1bee-45f3-a689-886692a97fe7}";
                typeName: "mozHunspell";
                interfaceName: "mozIHunsIpell";
            };
            "@mozilla.org/spellchecker/personaldictionary;1": {
                createInstance<I_95 extends CiKeys>(req: CiType[I_95]): CiMap[I_95];
                name: "@mozilla.org/spellchecker/personaldictionary;1";
                number: "{7ef52eaf-b7e1-462b-87e2-5d1dbaca9048}";
                typeName: "mozPersonalDictionary";
                interfaceName: "mozIPersonalDictionary";
            };
            "@mozilla.org/gfx/fontenumerator;1": {
                createInstance<I_96 extends CiKeys>(req: CiType[I_96]): CiMap[I_96];
                name: "@mozilla.org/gfx/fontenumerator;1";
                number: "{a6cf9115-15b3-11d2-932e-00805f8add32}";
                typeName: "nsThebesFontEnumerator";
                interfaceName: "nsIThebesFontEnumerator";
            };
            "@mozilla.org/fxr/clh;1": {
                createInstance<I_97 extends CiKeys>(req: CiType[I_97]): CiMap[I_97];
                name: "@mozilla.org/fxr/clh;1";
                number: "{5baca10a-4d53-4335-b24d-c69696640a9a}";
                typeName: "nsFxrCommandLineHandler";
                interfaceName: "nsIFxrCommandLineHandler";
            };
            "@mozilla.org/image/cache;1": {
                createInstance<I_98 extends CiKeys>(req: CiType[I_98]): CiMap[I_98];
                name: "@mozilla.org/image/cache;1";
                number: "{c1354898-e3fe-4602-88a7-c4520c21cb4e}";
                typeName: "imgLoader";
                interfaceName: "imgLoader";
            };
            "@mozilla.org/image/loader;1": {
                createInstance<I_99 extends CiKeys>(req: CiType[I_99]): CiMap[I_99];
                name: "@mozilla.org/image/loader;1";
                number: "{c1354898-e3fe-4602-88a7-c4520c21cb4e}";
                typeName: "imgLoader";
                interfaceName: "imgLoader";
            };
            "@mozilla.org/image-blocker-content-policy;1": {
                createInstance<I_100 extends CiKeys>(req: CiType[I_100]): CiMap[I_100];
                name: "@mozilla.org/image-blocker-content-policy;1";
                number: "{f6fcd651-164b-4416-b001-9c8c393fd93b}";
                typeName: "mozilla::image::ImageBlocker";
                interfaceName: "image";
            };
            "@mozilla.org/image/request;1": {
                createInstance<I_101 extends CiKeys>(req: CiType[I_101]): CiMap[I_101];
                name: "@mozilla.org/image/request;1";
                number: "{20557898-1dd2-11b2-8f65-9c462ee2bc95}";
                typeName: "imgRequestProxy";
                interfaceName: "imgRequestProxy";
            };
            "@mozilla.org/image/tools;1": {
                createInstance<I_102 extends CiKeys>(req: CiType[I_102]): CiMap[I_102];
                name: "@mozilla.org/image/tools;1";
                number: "{3d8fa16d-c9e1-4b50-bdef-2c7ae249967a}";
                typeName: "mozilla::image::imgTools";
                interfaceName: "image";
            };
            "@mozilla.org/image/encoder;2?type=image/bmp": {
                createInstance<I_103 extends CiKeys>(req: CiType[I_103]): CiMap[I_103];
                name: "@mozilla.org/image/encoder;2?type=image/bmp";
                number: "{13a5320c-4c91-4fa4-bd16-b081a3ba8c0b}";
                typeName: "nsBMPEncoder";
                interfaceName: "nsIBMPEncoder";
            };
            "@mozilla.org/image/encoder;2?type=image/vnd.microsoft.icon": {
                createInstance<I_104 extends CiKeys>(req: CiType[I_104]): CiMap[I_104];
                name: "@mozilla.org/image/encoder;2?type=image/vnd.microsoft.icon";
                number: "{92ae3ab2-8968-41b1-8709-b6123bceaf21}";
                typeName: "nsICOEncoder";
                interfaceName: "nsIICOEncoder";
            };
            "@mozilla.org/image/encoder;2?type=image/jpeg": {
                createInstance<I_105 extends CiKeys>(req: CiType[I_105]): CiMap[I_105];
                name: "@mozilla.org/image/encoder;2?type=image/jpeg";
                number: "{ac2bb8fe-eeeb-4572-b40f-be03932b56e0}";
                typeName: "nsJPEGEncoder";
                interfaceName: "nsIJPEGEncoder";
            };
            "@mozilla.org/image/encoder;2?type=image/png": {
                createInstance<I_106 extends CiKeys>(req: CiType[I_106]): CiMap[I_106];
                name: "@mozilla.org/image/encoder;2?type=image/png";
                number: "{38d1592e-b81e-432b-86f8-471878bbfe07}";
                typeName: "nsPNGEncoder";
                interfaceName: "nsIPNGEncoder";
            };
            "@mozilla.org/image/encoder;2?type=image/webp": {
                createInstance<I_107 extends CiKeys>(req: CiType[I_107]): CiMap[I_107];
                name: "@mozilla.org/image/encoder;2?type=image/webp";
                number: "{a8e5a8e5-bebf-4512-9f50-e41e4748ce28}";
                typeName: "nsWebPEncoder";
                interfaceName: "nsIWebPEncoder";
            };
            "@mozilla.org/network/protocol;1?name=moz-icon": {
                createInstance<I_108 extends CiKeys>(req: CiType[I_108]): CiMap[I_108];
                name: "@mozilla.org/network/protocol;1?name=moz-icon";
                number: "{d0f9db12-249c-11d5-9905-001083010e9b}";
                typeName: "nsIconProtocolHandler";
                interfaceName: "nsIIconProtocolHandler";
            };
            "@mozilla.org/intl/stringbundle;1": {
                createInstance<I_109 extends CiKeys>(req: CiType[I_109]): CiMap[I_109];
                name: "@mozilla.org/intl/stringbundle;1";
                number: "{d85a17c1-aa7c-11d2-9b8c-00805f8a16d9}";
                typeName: "nsStringBundleService";
                interfaceName: "nsIStringBundleService";
            };
            "@mozilla.org/intl/localeservice;1": {
                getService(): mozILocaleServiceType;
                name: "@mozilla.org/intl/localeservice;1";
                number: "{92735ff4-6384-4ad6-8508-757010e149ee}";
                typeName: "mozilla::intl::LocaleService";
                interfaceName: "intl";
            };
            "@mozilla.org/intl/ospreferences;1": {
                getService(): unknown;
                name: "@mozilla.org/intl/ospreferences;1";
                number: "{65944815-e9ae-48bd-a2bf-f1108720950c}";
                typeName: "mozilla::intl::OSPreferences";
                interfaceName: "intl";
            };
            "@mozilla.org/intl/converter-input-stream;1": {
                createInstance<I_110 extends CiKeys>(req: CiType[I_110]): CiMap[I_110];
                name: "@mozilla.org/intl/converter-input-stream;1";
                number: "{2bc2ad62-ad5d-4b7b-a9db-f74ae203c527}";
                typeName: "nsConverterInputStream";
                interfaceName: "nsIConverterInputStream";
            };
            "@mozilla.org/intl/converter-output-stream;1": {
                createInstance<I_111 extends CiKeys>(req: CiType[I_111]): CiMap[I_111];
                name: "@mozilla.org/intl/converter-output-stream;1";
                number: "{ff8780a5-bbb1-4bc5-8ee7-057e7bc5c925}";
                typeName: "nsConverterOutputStream";
                interfaceName: "nsIConverterOutputStream";
            };
            "@mozilla.org/intl/scriptableunicodeconverter": {
                createInstance<I_112 extends CiKeys>(req: CiType[I_112]): CiMap[I_112];
                name: "@mozilla.org/intl/scriptableunicodeconverter";
                number: "{0a698c44-3bff-11d4-9649-00c0ca135b4e}";
                typeName: "nsScriptableUnicodeConverter";
                interfaceName: "nsIScriptableUnicodeConverter";
            };
            "@mozilla.org/intl/texttosuburi;1": {
                createInstance<I_113 extends CiKeys>(req: CiType[I_113]): CiMap[I_113];
                name: "@mozilla.org/intl/texttosuburi;1";
                number: "{8b042e22-6f87-11d3-b3c8-00805f8a6670}";
                typeName: "nsTextToSubURI";
                interfaceName: "nsITextToSubURI";
            };
            "@mozilla.org/fork-server-launcher;1": {
                getService(): unknown;
                name: "@mozilla.org/fork-server-launcher;1";
                number: "{cdb4757f-f51b-40c0-8b38-66d12c3bff7b}";
                typeName: "mozilla::ipc::ForkServerLauncher";
                interfaceName: "ipc";
            };
            "@mozilla.org/utility-process-test;1": {
                createInstance<I_114 extends CiKeys>(req: CiType[I_114]): CiMap[I_114];
                name: "@mozilla.org/utility-process-test;1";
                number: "{0a4478f4-c5ae-4fb1-8686-d5b09fb99afb}";
                typeName: "mozilla::ipc::UtilityProcessTest";
                interfaceName: "ipc";
            };
            "@mozilla.org/moz/jssubscript-loader;1": {
                createInstance<I_115 extends CiKeys>(req: CiType[I_115]): CiMap[I_115];
                name: "@mozilla.org/moz/jssubscript-loader;1";
                number: "{929814d6-1dd2-11b2-8e08-82fa0a339b00}";
                typeName: "mozJSSubScriptLoader";
                interfaceName: "mozIJSSubScriptLoader";
            };
            "@mozilla.org/childprocessmessagemanager;1": {
                createInstance<I_116 extends CiKeys>(req: CiType[I_116]): CiMap[I_116];
                name: "@mozilla.org/childprocessmessagemanager;1";
                number: "{fe0ff7c3-8e97-448b-9a8a-86afdb9fbbb6}";
                interfaceName: "CreateChildMessageManager";
            };
            "@mozilla.org/content/document-loader-factory;1": {
                createInstance<I_117 extends CiKeys>(req: CiType[I_117]): CiMap[I_117];
                name: "@mozilla.org/content/document-loader-factory;1";
                number: "{fc886801-e768-11d4-9885-00c04fa0cf4b}";
                typeName: "nsIDocumentLoaderFactory";
                interfaceName: "nsIIDocumentLoaderFactory";
            };
            "@mozilla.org/content/plugin/document-loader-factory;1": {
                createInstance<I_118 extends CiKeys>(req: CiType[I_118]): CiMap[I_118];
                name: "@mozilla.org/content/plugin/document-loader-factory;1";
                number: "{0ddf4df8-4dbb-4133-8b79-9afb966514f5}";
                typeName: "nsIDocumentLoaderFactory";
                interfaceName: "nsIIDocumentLoaderFactory";
            };
            "@mozilla.org/content/style-sheet-service;1": {
                createInstance<I_119 extends CiKeys>(req: CiType[I_119]): CiMap[I_119];
                name: "@mozilla.org/content/style-sheet-service;1";
                number: "{3b55e72e-ab7e-431b-89c0-3b06a8b14016}";
                typeName: "nsStyleSheetService";
                interfaceName: "nsIStyleSheetService";
            };
            "@mozilla.org/contentsecuritymanager;1": {
                createInstance<I_120 extends CiKeys>(req: CiType[I_120]): CiMap[I_120];
                name: "@mozilla.org/contentsecuritymanager;1";
                number: "{cdcc1ab8-3cea-4e6c-a294-a651fa35227f}";
                typeName: "nsContentSecurityManager";
                interfaceName: "nsIContentSecurityManager";
            };
            "@mozilla.org/cspcontext;1": {
                createInstance<I_121 extends CiKeys>(req: CiType[I_121]): CiMap[I_121];
                name: "@mozilla.org/cspcontext;1";
                number: "{09d9ed1a-e5d4-4004-bfe0-27ceb923d9ac}";
                typeName: "nsCSPContext";
                interfaceName: "nsICSPContext";
            };
            "@mozilla.org/cspservice;1": {
                createInstance<I_122 extends CiKeys>(req: CiType[I_122]): CiMap[I_122];
                name: "@mozilla.org/cspservice;1";
                number: "{8d2f40b2-4875-4c95-97d9-3f7dca2cb460}";
                typeName: "CSPService";
                interfaceName: "CSPService";
            };
            "@mozilla.org/data-document-content-policy;1": {
                createInstance<I_123 extends CiKeys>(req: CiType[I_123]): CiMap[I_123];
                name: "@mozilla.org/data-document-content-policy;1";
                number: "{1147d32c-215b-4014-b180-07fe7aedf915}";
                typeName: "nsDataDocumentContentPolicy";
                interfaceName: "nsIDataDocumentContentPolicy";
            };
            "@mozilla.org/devicesensors;1": {
                createInstance<I_124 extends CiKeys>(req: CiType[I_124]): CiMap[I_124];
                name: "@mozilla.org/devicesensors;1";
                number: "{ecba5203-77da-465a-865e-78b7af10d8f7}";
                typeName: "nsDeviceSensors";
                interfaceName: "nsIDeviceSensors";
            };
            "@mozilla.org/docshell/structured-clone-container;1": {
                createInstance<I_125 extends CiKeys>(req: CiType[I_125]): CiMap[I_125];
                name: "@mozilla.org/docshell/structured-clone-container;1";
                number: "{38bd0634-0fd4-46f0-b85f-13ced889eeec}";
                typeName: "nsStructuredCloneContainer";
                interfaceName: "nsIStructuredCloneContainer";
            };
            "@mozilla.org/dom/dom-request-service;1": {
                getService(): nsIDOMRequestServiceType;
                name: "@mozilla.org/dom/dom-request-service;1";
                number: "{3160e271-138d-4cc7-9d63-6429f16957c7}";
                typeName: "mozilla::dom::DOMRequestService";
                interfaceName: "dom";
            };
            "@mozilla.org/dom/localStorage-manager;1": {
                createInstance<I_126 extends CiKeys>(req: CiType[I_126]): CiMap[I_126];
                name: "@mozilla.org/dom/localStorage-manager;1";
                number: "{656db07c-aa80-49e4-bce8-e431baae697d}";
                interfaceName: "LocalStorageManagerConsItructor";
            };
            "@mozilla.org/dom/sessionStorage-manager;1": {
                createInstance<I_127 extends CiKeys>(req: CiType[I_127]): CiMap[I_127];
                name: "@mozilla.org/dom/sessionStorage-manager;1";
                number: "{64e4bf03-773e-408e-939a-e11652fdfd28}";
                interfaceName: "SessionStorageManagerConsItructor";
            };
            "@mozilla.org/dom/quota-manager-service;1": {
                getService(): nsIQuotaManagerServiceType;
                name: "@mozilla.org/dom/quota-manager-service;1";
                number: "{5a75c25a-5e7e-4d90-8f7c-07eb15cc0aa8}";
                typeName: "mozilla::dom::quota::QuotaManagerService";
                interfaceName: "quota";
            };
            "@mozilla.org/dom/sdb-connection;1": {
                createInstance<I_128 extends CiKeys>(req: CiType[I_128]): CiMap[I_128];
                name: "@mozilla.org/dom/sdb-connection;1";
                number: "{ae2793c0-2ba3-4adb-9c5e-c23525812c64}";
                interfaceName: "SDBConnection";
            };
            "@mozilla.org/dom/workers/workerdebuggermanager;1": {
                getService(): unknown;
                name: "@mozilla.org/dom/workers/workerdebuggermanager;1";
                number: "{62ec8731-55ad-4246-b2ea-f26c1fe19d2d}";
                typeName: "mozilla::dom::WorkerDebuggerManager";
                interfaceName: "dom";
            };
            "@mozilla.org/eventlistenerservice;1": {
                createInstance<I_129 extends CiKeys>(req: CiType[I_129]): CiMap[I_129];
                name: "@mozilla.org/eventlistenerservice;1";
                number: "{baa34652-f1f1-4185-b224-244ee82a413a}";
                typeName: "nsIEventListenerService";
                interfaceName: "nsIIEventListenerService";
            };
            "@mozilla.org/focus-manager;1": {
                createInstance<I_130 extends CiKeys>(req: CiType[I_130]): CiMap[I_130];
                name: "@mozilla.org/focus-manager;1";
                number: "{cf7fd51f-aba2-44c1-9ff0-11f7508efcd4}";
                typeName: "nsIFocusManager";
                interfaceName: "nsIIFocusManager";
            };
            "@mozilla.org/gecko-media-plugin-service;1": {
                getService(): unknown;
                name: "@mozilla.org/gecko-media-plugin-service;1";
                number: "{7b121f7e-ebe4-43ab-9410-dc9087a1dba6}";
                typeName: "mozilla::gmp::GeckoMediaPluginService";
                interfaceName: "gmp";
            };
            "@mozilla.org/geolocation;1": {
                getService(): unknown;
                name: "@mozilla.org/geolocation;1";
                number: "{01e1c3ff-094a-d048-44b4-62d29c7b4f39}";
                typeName: "mozilla::dom::Geolocation";
                interfaceName: "dom";
            };
            "@mozilla.org/globalmessagemanager;1": {
                createInstance<I_131 extends CiKeys>(req: CiType[I_131]): CiMap[I_131];
                name: "@mozilla.org/globalmessagemanager;1";
                number: "{130b016f-fad7-4526-bc7f-827dabf79265}";
                interfaceName: "CreateGlobalMessageManager";
            };
            "@mozilla.org/inspector/deep-tree-walker;1": {
                createInstance<I_132 extends CiKeys>(req: CiType[I_132]): CiMap[I_132];
                name: "@mozilla.org/inspector/deep-tree-walker;1";
                number: "{bfcb82c2-5611-4318-90d6-baf4a7864252}";
                typeName: "inDeepTreeWalker";
                interfaceName: "inDeepTreeWalker";
            };
            "@mozilla.org/layout/content-policy;1": {
                createInstance<I_133 extends CiKeys>(req: CiType[I_133]): CiMap[I_133];
                name: "@mozilla.org/layout/content-policy;1";
                number: "{0e3afd3d-eb60-4c2b-963b-56d7c439f124}";
                interfaceName: "CreateContentPolicy";
            };
            "@mozilla.org/layout/contentserializer;1?mimetype=application/vnd.mozilla.xul+xml": {
                createInstance<I_134 extends CiKeys>(req: CiType[I_134]): CiMap[I_134];
                name: "@mozilla.org/layout/contentserializer;1?mimetype=application/vnd.mozilla.xul+xml";
                number: "{4aef38b7-6364-4e23-a5e7-12f837fbbd9c}";
                typeName: "nsIContentSerializer";
                interfaceName: "nsIIContentSerializer";
            };
            "@mozilla.org/layout/contentserializer;1?mimetype=application/xml": {
                createInstance<I_135 extends CiKeys>(req: CiType[I_135]): CiMap[I_135];
                name: "@mozilla.org/layout/contentserializer;1?mimetype=application/xml";
                number: "{4aef38b7-6364-4e23-a5e7-12f837fbbd9c}";
                typeName: "nsIContentSerializer";
                interfaceName: "nsIIContentSerializer";
            };
            "@mozilla.org/layout/contentserializer;1?mimetype=image/svg+xml": {
                createInstance<I_136 extends CiKeys>(req: CiType[I_136]): CiMap[I_136];
                name: "@mozilla.org/layout/contentserializer;1?mimetype=image/svg+xml";
                number: "{4aef38b7-6364-4e23-a5e7-12f837fbbd9c}";
                typeName: "nsIContentSerializer";
                interfaceName: "nsIIContentSerializer";
            };
            "@mozilla.org/layout/contentserializer;1?mimetype=text/xml": {
                createInstance<I_137 extends CiKeys>(req: CiType[I_137]): CiMap[I_137];
                name: "@mozilla.org/layout/contentserializer;1?mimetype=text/xml";
                number: "{4aef38b7-6364-4e23-a5e7-12f837fbbd9c}";
                typeName: "nsIContentSerializer";
                interfaceName: "nsIIContentSerializer";
            };
            "@mozilla.org/layout/contentserializer;1?mimetype=application/xhtml+xml": {
                createInstance<I_138 extends CiKeys>(req: CiType[I_138]): CiMap[I_138];
                name: "@mozilla.org/layout/contentserializer;1?mimetype=application/xhtml+xml";
                number: "{e7c2aaf5-c11a-4954-9dbf-e28edec1fd91}";
                interfaceName: "CreateXHTMLContentSerializer";
            };
            "@mozilla.org/layout/contentserializer;1?mimetype=text/html": {
                createInstance<I_139 extends CiKeys>(req: CiType[I_139]): CiMap[I_139];
                name: "@mozilla.org/layout/contentserializer;1?mimetype=text/html";
                number: "{9d3f70da-86e9-11d4-95ec-00b0d03e37b7}";
                typeName: "nsIContentSerializer";
                interfaceName: "nsIIContentSerializer";
            };
            "@mozilla.org/layout/contentserializer;1?mimetype=text/plain": {
                createInstance<I_140 extends CiKeys>(req: CiType[I_140]): CiMap[I_140];
                name: "@mozilla.org/layout/contentserializer;1?mimetype=text/plain";
                number: "{6030f7ef-32ed-46a7-9a63-6a5d3f90445f}";
                interfaceName: "CreatePlainTextSerializer";
            };
            "@mozilla.org/mediaManagerService;1": {
                getService(): unknown;
                name: "@mozilla.org/mediaManagerService;1";
                number: "{abc622ea-9655-4123-80d9-22621bdd5465}";
                typeName: "nsIMediaManagerService";
                interfaceName: "nsIIMediaManagerService";
            };
            "@mozilla.org/mixedcontentblocker;1": {
                createInstance<I_141 extends CiKeys>(req: CiType[I_141]): CiMap[I_141];
                name: "@mozilla.org/mixedcontentblocker;1";
                number: "{daf1461b-bf29-4f88-8d0e-4bcdf332c862}";
                typeName: "nsMixedContentBlocker";
                interfaceName: "nsIMixedContentBlocker";
            };
            "@mozilla.org/referrer-info;1": {
                createInstance<I_142 extends CiKeys>(req: CiType[I_142]): CiMap[I_142];
                name: "@mozilla.org/referrer-info;1";
                number: "{041a129f-10ce-4bda-a60d-e027a26d5ed0}";
                typeName: "mozilla::dom::ReferrerInfo";
                interfaceName: "dom";
            };
            "@mozilla.org/network/protocol;1?name=javascript": {
                createInstance<I_143 extends CiKeys>(req: CiType[I_143]): CiMap[I_143];
                name: "@mozilla.org/network/protocol;1?name=javascript";
                number: "{bfc310d2-38a0-11d3-8cd3-0060b0fc14a3}";
                typeName: "nsJSProtocolHandler";
                interfaceName: "nsIJSProtocolHandler";
            };
            "@mozilla.org/no-data-protocol-content-policy;1": {
                createInstance<I_144 extends CiKeys>(req: CiType[I_144]): CiMap[I_144];
                name: "@mozilla.org/no-data-protocol-content-policy;1";
                number: "{ac9e3e82-bfbd-4f26-941e-f58c8ee178c1}";
                typeName: "nsNoDataProtocolContentPolicy";
                interfaceName: "nsINoDataProtocolContentPolicy";
            };
            "@mozilla.org/parentprocessmessagemanager;1": {
                createInstance<I_145 extends CiKeys>(req: CiType[I_145]): CiMap[I_145];
                name: "@mozilla.org/parentprocessmessagemanager;1";
                number: "{2a058404-fb85-44ec-8cfd-e8cbdc988dc1}";
                interfaceName: "CreateParentMessageManager";
            };
            "@mozilla.org/parserutils;1": {
                createInstance<I_146 extends CiKeys>(req: CiType[I_146]): CiMap[I_146];
                name: "@mozilla.org/parserutils;1";
                number: "{af7b24cb-893f-41bb-961f-5a69388e27c3}";
                typeName: "nsParserUtils";
                interfaceName: "nsIParserUtils";
            };
            "@mozilla.org/push/Notifier;1": {
                createInstance<I_147 extends CiKeys>(req: CiType[I_147]): CiMap[I_147];
                name: "@mozilla.org/push/Notifier;1";
                number: "{2fc2d3e3-020f-404e-b06a-6ecf3ea2334a}";
                typeName: "mozilla::dom::PushNotifier";
                interfaceName: "dom";
            };
            "@mozilla.org/scriptable-content-iterator;1": {
                createInstance<I_148 extends CiKeys>(req: CiType[I_148]): CiMap[I_148];
                name: "@mozilla.org/scriptable-content-iterator;1";
                number: "{f68037ec-2790-44c5-8e5f-df5da58b93a7}";
                typeName: "ScriptableContentIterator";
                interfaceName: "ScriptableContentIterator";
            };
            "@mozilla.org/scripterror;1": {
                createInstance<I_149 extends CiKeys>(req: CiType[I_149]): CiMap[I_149];
                name: "@mozilla.org/scripterror;1";
                number: "{1950539a-90f0-4d22-b5af-71329c68fa35}";
                typeName: "nsScriptError";
                interfaceName: "nsIScriptError";
            };
            "@mozilla.org/scriptsecuritymanager;1": {
                createInstance<I_150 extends CiKeys>(req: CiType[I_150]): CiMap[I_150];
                name: "@mozilla.org/scriptsecuritymanager;1";
                number: "{7ee2a4c0-4b93-17d3-ba18-0060b0f199a2}";
                interfaceName: "ConsItruct_nsIScriptSecurityManager";
            };
            "@mozilla.org/serviceworkers/manager;1": {
                getService(): unknown;
                name: "@mozilla.org/serviceworkers/manager;1";
                number: "{c74bde32-bcc7-4840-8430-c733351b212a}";
                typeName: "mozilla::dom::ServiceWorkerManager";
                interfaceName: "dom";
            };
            "@mozilla.org/storage/activity-service;1": {
                getService(): unknown;
                name: "@mozilla.org/storage/activity-service;1";
                number: "{69da374a-fda3-4a93-9fbc-d9304f66a7fe}";
                typeName: "mozilla::dom::StorageActivityService";
                interfaceName: "dom";
            };
            "@mozilla.org/systemprincipal;1": {
                getService(): unknown;
                name: "@mozilla.org/systemprincipal;1";
                number: "{4a6212db-accb-11d3-b765-0060b0b6cecb}";
                typeName: "nsIPrincipal";
                interfaceName: "nsIIPrincipal";
            };
            "@mozilla.org/text-input-processor;1": {
                createInstance<I_151 extends CiKeys>(req: CiType[I_151]): CiMap[I_151];
                name: "@mozilla.org/text-input-processor;1";
                number: "{caaab47f-1e31-478e-8919-970904e9cb72}";
                typeName: "mozilla::TextInputProcessor";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/thirdpartyutil;1": {
                createInstance<I_152 extends CiKeys>(req: CiType[I_152]): CiMap[I_152];
                name: "@mozilla.org/thirdpartyutil;1";
                number: "{08c6cc8b-cfb0-421d-b1f7-683ff2989681}";
                typeName: "ThirdPartyUtil";
                interfaceName: "ThirdPartyUtil";
            };
            "@mozilla.org/websocketevent/service;1": {
                getService(): unknown;
                name: "@mozilla.org/websocketevent/service;1";
                number: "{31689828-da66-49a6-870c-df62b83fe789}";
                typeName: "mozilla::net::WebSocketEventService";
                interfaceName: "net";
            };
            "@mozilla.org/eventsourceevent/service;1": {
                getService(): unknown;
                name: "@mozilla.org/eventsourceevent/service;1";
                number: "{abfbb785-5a44-49cf-88db-2f300bf727c9}";
                typeName: "mozilla::dom::EventSourceEventService";
                interfaceName: "dom";
            };
            "@mozilla.org/synth-voice-registry;1": {
                getService(): unknown;
                name: "@mozilla.org/synth-voice-registry;1";
                number: "{7090524d-5574-4492-a77f-d8d558ced59d}";
                typeName: "mozilla::dom::nsSynthVoiceRegistry";
                interfaceName: "dom";
            };
            "@mozilla.org/webspeech/service;1?name=online": {
                createInstance<I_153 extends CiKeys>(req: CiType[I_153]): CiMap[I_153];
                name: "@mozilla.org/webspeech/service;1?name=online";
                number: "{0ff5ce56-5b09-4db8-adc6-8266af95f864}";
                typeName: "mozilla::OnlineSpeechRecognitionService";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/webspeech/service;1?name=fake": {
                createInstance<I_154 extends CiKeys>(req: CiType[I_154]): CiMap[I_154];
                name: "@mozilla.org/webspeech/service;1?name=fake";
                number: "{48c345e7-9929-4f9a-a563-f478222dabcd}";
                typeName: "mozilla::FakeSpeechRecognitionService";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/accessibilityService;1": {
                createInstance<I_155 extends CiKeys>(req: CiType[I_155]): CiMap[I_155];
                name: "@mozilla.org/accessibilityService;1";
                number: "{3b265b69-f813-48ff-880d-d88d101af404}";
                typeName: "nsIAccessibilityService";
                interfaceName: "nsIIAccessibilityService";
            };
            "@mozilla.org/layout-debug/layout-debuggingtools;1": {
                createInstance<I_156 extends CiKeys>(req: CiType[I_156]): CiMap[I_156];
                name: "@mozilla.org/layout-debug/layout-debuggingtools;1";
                number: "{3f4c3b63-e640-4712-abbf-fff1301ceb60}";
                typeName: "nsLayoutDebuggingTools";
                interfaceName: "nsILayoutDebuggingTools";
            };
            "@mozilla.org/commandlinehandler/general-startup;1?type=layoutdebug": {
                createInstance<I_157 extends CiKeys>(req: CiType[I_157]): CiMap[I_157];
                name: "@mozilla.org/commandlinehandler/general-startup;1?type=layoutdebug";
                number: "{a8f52633-5ecf-424a-a147-47c322f7bc2e}";
                typeName: "nsLayoutDebugCLH";
                interfaceName: "nsILayoutDebugCLH";
            };
            "@mozilla.org/embedcomp/prompt-collection;1": {
                createInstance<I_158 extends CiKeys>(req: CiType[I_158]): CiMap[I_158];
                name: "@mozilla.org/embedcomp/prompt-collection;1";
                number: "{3e30d2a0-9934-11ea-bb37-0242ac130002}";
            };
            "@mozilla.org/prompter;1": {
                createInstance<I_159 extends CiKeys>(req: CiType[I_159]): CiMap[I_159];
                name: "@mozilla.org/prompter;1";
                number: "{076ac188-23c1-4390-aa08-7ef1f78ca5d9}";
            };
            "@mozilla.org/geckoview/startup;1": {
                createInstance<I_160 extends CiKeys>(req: CiType[I_160]): CiMap[I_160];
                name: "@mozilla.org/geckoview/startup;1";
                number: "{8e993c34-fdd6-432c-967e-f995d888777f}";
            };
            "@mozilla.org/content-permission/prompt;1": {
                createInstance<I_161 extends CiKeys>(req: CiType[I_161]): CiMap[I_161];
                name: "@mozilla.org/content-permission/prompt;1";
                number: "{42f3c238-e8e8-4015-9ca2-148723a8afcf}";
            };
            "@mozilla.org/parent/colorpicker;1": {
                createInstance<I_162 extends CiKeys>(req: CiType[I_162]): CiMap[I_162];
                name: "@mozilla.org/parent/colorpicker;1";
                number: "{fc4bec74-ddd0-4ea8-9a66-9a5081258e32}";
            };
            "@mozilla.org/parent/filepicker;1": {
                createInstance<I_163 extends CiKeys>(req: CiType[I_163]): CiMap[I_163];
                name: "@mozilla.org/parent/filepicker;1";
                number: "{25fdbae6-f684-4bf0-b773-ff2b7a6273c8}";
            };
            "@mozilla.org/sharepicker;1": {
                createInstance<I_164 extends CiKeys>(req: CiType[I_164]): CiMap[I_164];
                name: "@mozilla.org/sharepicker;1";
                number: "{1201d357-8417-4926-a694-e6408fbedcf8}";
            };
            "@mozilla.org/login-manager/prompter;1": {
                createInstance<I_165 extends CiKeys>(req: CiType[I_165]): CiMap[I_165];
                name: "@mozilla.org/login-manager/prompter;1";
                number: "{3d765750-1c3d-11ea-aaef-0800200c9a66}";
            };
            "@mozilla.org/browser/history;1": {
                getService(): unknown;
                name: "@mozilla.org/browser/history;1";
                number: "{0937a705-91a6-417a-8292-b22eb10da86c}";
                typeName: "GeckoViewHistory";
                interfaceName: "GeckoViewHistory";
            };
            "@mozilla.org/libjar/zip-reader;1": {
                createInstance<I_166 extends CiKeys>(req: CiType[I_166]): CiMap[I_166];
                name: "@mozilla.org/libjar/zip-reader;1";
                number: "{88e2fd0b-f7f4-480c-9483-7846b00e8dad}";
                typeName: "nsJAR";
                interfaceName: "nsIJAR";
            };
            "@mozilla.org/network/protocol;1?name=jar": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=jar";
                number: "{c7e410d4-85f2-11d3-9f63-006008a6efe9}";
                typeName: "nsJARProtocolHandler";
                interfaceName: "nsIJARProtocolHandler";
            };
            "@mozilla.org/libjar/zip-reader-cache;1": {
                createInstance<I_167 extends CiKeys>(req: CiType[I_167]): CiMap[I_167];
                name: "@mozilla.org/libjar/zip-reader-cache;1";
                number: "{608b7f6f-4b60-40d6-87ed-d933bf53d8c1}";
                typeName: "nsZipReaderCache";
                interfaceName: "nsIZipReaderCache";
            };
            "@mozilla.org/streamconv;1?from=uncompressed&to=deflate": {
                createInstance<I_168 extends CiKeys>(req: CiType[I_168]): CiMap[I_168];
                name: "@mozilla.org/streamconv;1?from=uncompressed&to=deflate";
                number: "{461cd5dd-73c6-47a4-8cc3-603b37d84a61}";
                typeName: "nsDeflateConverter";
                interfaceName: "nsIDeflateConverter";
            };
            "@mozilla.org/streamconv;1?from=uncompressed&to=gzip": {
                createInstance<I_169 extends CiKeys>(req: CiType[I_169]): CiMap[I_169];
                name: "@mozilla.org/streamconv;1?from=uncompressed&to=gzip";
                number: "{461cd5dd-73c6-47a4-8cc3-603b37d84a61}";
                typeName: "nsDeflateConverter";
                interfaceName: "nsIDeflateConverter";
            };
            "@mozilla.org/streamconv;1?from=uncompressed&to=rawdeflate": {
                createInstance<I_170 extends CiKeys>(req: CiType[I_170]): CiMap[I_170];
                name: "@mozilla.org/streamconv;1?from=uncompressed&to=rawdeflate";
                number: "{461cd5dd-73c6-47a4-8cc3-603b37d84a61}";
                typeName: "nsDeflateConverter";
                interfaceName: "nsIDeflateConverter";
            };
            "@mozilla.org/streamconv;1?from=uncompressed&to=x-gzip": {
                createInstance<I_171 extends CiKeys>(req: CiType[I_171]): CiMap[I_171];
                name: "@mozilla.org/streamconv;1?from=uncompressed&to=x-gzip";
                number: "{461cd5dd-73c6-47a4-8cc3-603b37d84a61}";
                typeName: "nsDeflateConverter";
                interfaceName: "nsIDeflateConverter";
            };
            "@mozilla.org/zipwriter;1": {
                createInstance<I_172 extends CiKeys>(req: CiType[I_172]): CiMap[I_172];
                name: "@mozilla.org/zipwriter;1";
                number: "{430d416c-a722-4ad1-be98-d9a445f85e3f}";
                typeName: "nsZipWriter";
                interfaceName: "nsIZipWriter";
            };
            "@mozilla.org/preferences-service;1": {
                getService(): nsIPrefServiceType;
                name: "@mozilla.org/preferences-service;1";
                number: "{91ca2441-050f-4f7c-9df8-75b40ea40156}";
                typeName: "mozilla::Preferences";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/pref-localizedstring;1": {
                createInstance<I_173 extends CiKeys>(req: CiType[I_173]): CiMap[I_173];
                name: "@mozilla.org/pref-localizedstring;1";
                number: "{064d9cee-1dd2-11b2-83e3-d25ab0193c26}";
                typeName: "nsPrefLocalizedString";
                interfaceName: "nsIPrefLocalizedString";
            };
            "@mozilla.org/io/arraybuffer-input-stream;1": {
                createInstance<I_174 extends CiKeys>(req: CiType[I_174]): CiMap[I_174];
                name: "@mozilla.org/io/arraybuffer-input-stream;1";
                number: "{3014dde6-aa1c-41db-87d0-48764a3710f6}";
                typeName: "ArrayBufferInputStream";
                interfaceName: "ArrayBufferInputStream";
            };
            "@mozilla.org/load-context-info-factory;1": {
                createInstance<I_175 extends CiKeys>(req: CiType[I_175]): CiMap[I_175];
                name: "@mozilla.org/load-context-info-factory;1";
                number: "{62d4b190-3642-4450-b019-d1c1fba56025}";
                typeName: "mozilla::net::LoadContextInfoFactory";
                interfaceName: "net";
            };
            "@mozilla.org/netwerk/cache-storage-service;1": {
                getService(): nsICacheStorageServiceType;
                name: "@mozilla.org/netwerk/cache-storage-service;1";
                number: "{ea70b098-5014-4e21-aee1-75e6b2c4b8e0}";
                typeName: "mozilla::net::CacheStorageService";
                interfaceName: "net";
            };
            "@mozilla.org/network/cache-storage-service;1": {
                getService(): unknown;
                name: "@mozilla.org/network/cache-storage-service;1";
                number: "{ea70b098-5014-4e21-aee1-75e6b2c4b8e0}";
                typeName: "mozilla::net::CacheStorageService";
                interfaceName: "net";
            };
            "@mozilla.org/network/async-stream-copier;1": {
                createInstance<I_176 extends CiKeys>(req: CiType[I_176]): CiMap[I_176];
                name: "@mozilla.org/network/async-stream-copier;1";
                number: "{e746a8b1-c97a-4fc5-baa4-66607521bd08}";
                typeName: "nsAsyncStreamCopier";
                interfaceName: "nsIAsyncStreamCopier";
            };
            "@mozilla.org/network/atomic-file-output-stream;1": {
                createInstance<I_177 extends CiKeys>(req: CiType[I_177]): CiMap[I_177];
                name: "@mozilla.org/network/atomic-file-output-stream;1";
                number: "{6eae857e-4ba9-11e3-9b39-b4036188709b}";
                typeName: "nsAtomicFileOutputStream";
                interfaceName: "nsIAtomicFileOutputStream";
            };
            "@mozilla.org/network/background-file-saver;1?mode=outputstream": {
                createInstance<I_178 extends CiKeys>(req: CiType[I_178]): CiMap[I_178];
                name: "@mozilla.org/network/background-file-saver;1?mode=outputstream";
                number: "{62147d1e-ef6a-40e8-aaf8-d039f5caaa81}";
                typeName: "mozilla::net::BackgroundFileSaverOutputStream";
                interfaceName: "net";
            };
            "@mozilla.org/network/background-file-saver;1?mode=streamlistener": {
                createInstance<I_179 extends CiKeys>(req: CiType[I_179]): CiMap[I_179];
                name: "@mozilla.org/network/background-file-saver;1?mode=streamlistener";
                number: "{208de7fc-a781-4031-bbae-cc0de539f61a}";
                typeName: "mozilla::net::BackgroundFileSaverStreamListener";
                interfaceName: "net";
            };
            "@mozilla.org/network/binary-detector;1": {
                createInstance<I_180 extends CiKeys>(req: CiType[I_180]): CiMap[I_180];
                name: "@mozilla.org/network/binary-detector;1";
                number: "{a2027ec6-ba0d-4c72-805d-148233f5f33c}";
                interfaceName: "CreateNewBinaryDetectorFactory";
            };
            "@mozilla.org/network/buffered-input-stream;1": {
                createInstance<I_181 extends CiKeys>(req: CiType[I_181]): CiMap[I_181];
                name: "@mozilla.org/network/buffered-input-stream;1";
                number: "{9226888e-da08-11d3-8cda-0060b0fc14a3}";
                interfaceName: "nsIBufferedInputStream";
            };
            "@mozilla.org/network/buffered-output-stream;1": {
                createInstance<I_182 extends CiKeys>(req: CiType[I_182]): CiMap[I_182];
                name: "@mozilla.org/network/buffered-output-stream;1";
                number: "{9868b4ce-da08-11d3-8cda-0060b0fc14a3}";
                interfaceName: "nsIBufferedOutputStream";
            };
            "@mozilla.org/network/captive-portal-service;1": {
                getService(): unknown;
                name: "@mozilla.org/network/captive-portal-service;1";
                number: "{bdbe0555-fc3d-4f7b-9205-c309ceb2d641}";
                typeName: "nsICaptivePortalService";
                interfaceName: "nsIICaptivePortalService";
            };
            "@mozilla.org/network/dashboard;1": {
                createInstance<I_183 extends CiKeys>(req: CiType[I_183]): CiMap[I_183];
                name: "@mozilla.org/network/dashboard;1";
                number: "{c79eb3c6-091a-45a6-8544-5a8d1ab79537}";
                typeName: "mozilla::net::Dashboard";
                interfaceName: "net";
            };
            "@mozilla.org/network/dns-service;1": {
                getService(): nsIDNSServiceType;
                name: "@mozilla.org/network/dns-service;1";
                number: "{b0ff4572-dae4-4bef-a092-83c1b88f6be9}";
                typeName: "nsIDNSService";
                interfaceName: "nsIIDNSService";
            };
            "@mozilla.org/network/native-dns-override;1": {
                getService(): unknown;
                name: "@mozilla.org/network/native-dns-override;1";
                number: "{4ffae79e-57bd-4d7a-a0c9-0045a17b3615}";
                typeName: "nsINativeDNSResolverOverride";
                interfaceName: "nsIINativeDNSResolverOverride";
            };
            "@mozilla.org/network/downloader;1": {
                createInstance<I_184 extends CiKeys>(req: CiType[I_184]): CiMap[I_184];
                name: "@mozilla.org/network/downloader;1";
                number: "{510a86bb-6019-4ed1-bb4f-965cffd23ece}";
                typeName: "nsDownloader";
                interfaceName: "nsIDownloader";
            };
            "@mozilla.org/network/effective-tld-service;1": {
                getService(): nsIEffectiveTLDServiceType;
                name: "@mozilla.org/network/effective-tld-service;1";
                number: "{cb9abbae-66b6-4609-8594-5c4ff300888e}";
                typeName: "nsEffectiveTLDService";
                interfaceName: "nsIEffectiveTLDService";
            };
            "@mozilla.org/network/file-input-stream;1": {
                createInstance<I_185 extends CiKeys>(req: CiType[I_185]): CiMap[I_185];
                name: "@mozilla.org/network/file-input-stream;1";
                number: "{be9a53ae-c7e9-11d3-8cda-0060b0fc14a3}";
                interfaceName: "nsIFileInputStream";
            };
            "@mozilla.org/network/file-output-stream;1": {
                createInstance<I_186 extends CiKeys>(req: CiType[I_186]): CiMap[I_186];
                name: "@mozilla.org/network/file-output-stream;1";
                number: "{c272fee0-c7e9-11d3-8cda-0060b0fc14a3}";
                interfaceName: "nsIFileOutputStream";
            };
            "@mozilla.org/network/file-random-access-stream;1": {
                createInstance<I_187 extends CiKeys>(req: CiType[I_187]): CiMap[I_187];
                name: "@mozilla.org/network/file-random-access-stream;1";
                number: "{648705e9-757a-4d4b-a5bF-0248e512c309}";
                interfaceName: "nsIFileRandomAccessStream";
            };
            "@mozilla.org/network/http-activity-distributor;1": {
                createInstance<I_188 extends CiKeys>(req: CiType[I_188]): CiMap[I_188];
                name: "@mozilla.org/network/http-activity-distributor;1";
                number: "{15629ada-a41c-4a09-961f-6553cd60b1a2}";
                typeName: "mozilla::net::nsHttpActivityDistributor";
                interfaceName: "net";
            };
            "@mozilla.org/network/http-auth-manager;1": {
                createInstance<I_189 extends CiKeys>(req: CiType[I_189]): CiMap[I_189];
                name: "@mozilla.org/network/http-auth-manager;1";
                number: "{36b63ef3-e0fa-4c49-9fd4-e065e85568f4}";
                typeName: "mozilla::net::nsHttpAuthManager";
                interfaceName: "net";
            };
            "@mozilla.org/network/idn-service;1": {
                createInstance<I_190 extends CiKeys>(req: CiType[I_190]): CiMap[I_190];
                name: "@mozilla.org/network/idn-service;1";
                number: "{62b778a6-bce3-456b-8c31-2865fbb68c91}";
                typeName: "nsIDNService";
                interfaceName: "nsIIDNService";
            };
            "@mozilla.org/network/incremental-download;1": {
                createInstance<I_191 extends CiKeys>(req: CiType[I_191]): CiMap[I_191];
                name: "@mozilla.org/network/incremental-download;1";
                number: "{a62af1ba-79b3-4896-8aaf-b148bfce4280}";
                interfaceName: "net_NewIncrementalDownload";
            };
            "@mozilla.org/network/incremental-stream-loader;1": {
                createInstance<I_192 extends CiKeys>(req: CiType[I_192]): CiMap[I_192];
                name: "@mozilla.org/network/incremental-stream-loader;1";
                number: "{5d6352a3-b9c3-4fa3-87aa-b2a3c6e5a501}";
                interfaceName: "nsIIncrementalStreamLoader";
            };
            "@mozilla.org/network/input-stream-channel;1": {
                createInstance<I_193 extends CiKeys>(req: CiType[I_193]): CiMap[I_193];
                name: "@mozilla.org/network/input-stream-channel;1";
                number: "{6ddb050c-0d04-11d4-986e-00c04fa0cf4a}";
                typeName: "mozilla::net::nsInputStreamChannel";
                interfaceName: "net";
            };
            "@mozilla.org/network/input-stream-pump;1": {
                createInstance<I_194 extends CiKeys>(req: CiType[I_194]): CiMap[I_194];
                name: "@mozilla.org/network/input-stream-pump;1";
                number: "{ccd0e960-7947-4635-b70e-4c661b63d675}";
                typeName: "nsInputStreamPump";
                interfaceName: "nsIInputStreamPump";
            };
            "@mozilla.org/network/io-service;1": {
                getService(): nsIIOServiceType;
                name: "@mozilla.org/network/io-service;1";
                number: "{9ac9e770-18bc-11d3-9337-00104ba0fd40}";
                typeName: "mozilla::net::nsIOService";
                interfaceName: "net";
            };
            "@mozilla.org/network/util;1": {
                getService(): nsISpeculativeConnectType;
                name: "@mozilla.org/network/util;1";
                number: "{9ac9e770-18bc-11d3-9337-00104ba0fd40}";
                typeName: "mozilla::net::nsIOService";
                interfaceName: "net";
            };
            "@mozilla.org/network/load-group;1": {
                createInstance<I_195 extends CiKeys>(req: CiType[I_195]): CiMap[I_195];
                name: "@mozilla.org/network/load-group;1";
                number: "{e1c61582-2a84-11d3-8cce-0060b0fc14a3}";
                interfaceName: "nsILoadGroupConstructor";
            };
            "@mozilla.org/network/mime-hdrparam;1": {
                createInstance<I_196 extends CiKeys>(req: CiType[I_196]): CiMap[I_196];
                name: "@mozilla.org/network/mime-hdrparam;1";
                number: "{1f4dbcf7-245c-4c8c-943d-8a1da0495e8a}";
                typeName: "nsMIMEHeaderParamImpl";
                interfaceName: "nsIMIMEHeaderParamImpl";
            };
            "@mozilla.org/network/mime-input-stream;1": {
                createInstance<I_197 extends CiKeys>(req: CiType[I_197]): CiMap[I_197];
                name: "@mozilla.org/network/mime-input-stream;1";
                number: "{58a1c31c-1dd2-11b2-a3f6-d36949d48268}";
                interfaceName: "nsIMIMEInputStreamConstructor";
            };
            "@mozilla.org/network/network-connectivity-service;1": {
                getService(): unknown;
                name: "@mozilla.org/network/network-connectivity-service;1";
                number: "{2693457e-3ba5-4455-991f-5350946adb12}";
                typeName: "nsINetworkConnectivityService";
                interfaceName: "nsIINetworkConnectivityService";
            };
            "@mozilla.org/network/predictor;1": {
                getService(): unknown;
                name: "@mozilla.org/network/predictor;1";
                number: "{969adfdf-7221-4419-aecf-05f8faf00c9b}";
                interfaceName: "Predictor";
            };
            "@mozilla.org/network/protocol-proxy-service;1": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol-proxy-service;1";
                number: "{e9b301c0-e0e4-11d3-a1a8-0050041caf44}";
                typeName: "mozilla::net::nsProtocolProxyService";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol/about;1?what=blank": {
                createInstance<I_198 extends CiKeys>(req: CiType[I_198]): CiMap[I_198];
                name: "@mozilla.org/network/protocol/about;1?what=blank";
                number: "{3decd6c8-30ef-11d3-8cd0-0060b0fc14a3}";
                interfaceName: "nsIAboutBlank";
            };
            "@mozilla.org/network/protocol/about;1?what=cache": {
                createInstance<I_199 extends CiKeys>(req: CiType[I_199]): CiMap[I_199];
                name: "@mozilla.org/network/protocol/about;1?what=cache";
                number: "{9158c470-86e4-11d4-9be2-00e09872a416}";
                interfaceName: "nsIAboutCache";
            };
            "@mozilla.org/network/protocol/about;1?what=cache-entry": {
                createInstance<I_200 extends CiKeys>(req: CiType[I_200]): CiMap[I_200];
                name: "@mozilla.org/network/protocol/about;1?what=cache-entry";
                number: "{7fa5237d-b0eb-438f-9e50-ca0166e63788}";
                typeName: "nsAboutCacheEntry";
                interfaceName: "nsIAboutCacheEntry";
            };
            "@mozilla.org/network/protocol;1?name=about": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=about";
                number: "{9e3b6c90-2f75-11d3-8cd0-0060b0fc14a3}";
                typeName: "mozilla::net::nsAboutProtocolHandler";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol;1?name=data": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=data";
                number: "{b6ed3030-6183-11d3-a178-0050041caf44}";
                interfaceName: "nsIDataHandler";
            };
            "@mozilla.org/network/protocol;1?name=file": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=file";
                number: "{fbc81170-1f69-11d3-9344-00104ba0fd40}";
                typeName: "nsFileProtocolHandler";
                interfaceName: "nsIFileProtocolHandler";
            };
            "@mozilla.org/network/protocol;1?name=http": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=http";
                number: "{4f47e42e-4d23-4dd3-bfda-eb29255e9ea3}";
                typeName: "mozilla::net::nsHttpHandler";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol;1?name=https": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=https";
                number: "{dccbe7e4-7750-466b-a557-5ea36c8ff24e}";
                typeName: "mozilla::net::nsHttpsHandler";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol;1?name=moz-extension": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=moz-extension";
                number: "{aea16cd0-f020-4138-b068-0716c4a15b5a}";
                typeName: "mozilla::net::ExtensionProtocolHandler";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol;1?name=moz-page-thumb": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=moz-page-thumb";
                number: "{450a2b55-620a-44b3-9f67-839b3b0c329c}";
                typeName: "mozilla::net::PageThumbProtocolHandler";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol;1?name=moz-safe-about": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=moz-safe-about";
                number: "{1423e739-782c-4081-b5d8-fe6fba68c0ef}";
                typeName: "mozilla::net::nsSafeAboutProtocolHandler";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol;1?name=resource": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=resource";
                number: "{e64f152a-9f07-11d3-8cda-0060b0fc14a3}";
                typeName: "nsResProtocolHandler";
                interfaceName: "nsIResProtocolHandler";
            };
            "@mozilla.org/network/protocol;1?name=view-source": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=view-source";
                number: "{9c7ec5d1-23f9-11d5-aea8-8fcc0793e97f}";
                typeName: "mozilla::net::nsViewSourceHandler";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol;1?name=ws": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=ws";
                number: "{dc01db59-a513-4c90-824b-085cce06c0aa}";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol;1?name=wss": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=wss";
                number: "{dc01dbbb-a5bb-4cbb-82bb-085cce06c0bb}";
                interfaceName: "net";
            };
            "@mozilla.org/network/safe-file-output-stream;1": {
                createInstance<I_201 extends CiKeys>(req: CiType[I_201]): CiMap[I_201];
                name: "@mozilla.org/network/safe-file-output-stream;1";
                number: "{a181af0d-68b8-4308-94db-d4f859058215}";
                typeName: "nsSafeFileOutputStream";
                interfaceName: "nsISafeFileOutputStream";
            };
            "@mozilla.org/network/serialization-helper;1": {
                createInstance<I_202 extends CiKeys>(req: CiType[I_202]): CiMap[I_202];
                name: "@mozilla.org/network/serialization-helper;1";
                number: "{d6ef593d-a429-4b14-a887-d9e2f765d9ed}";
                typeName: "nsSerializationHelper";
                interfaceName: "nsISerializationHelper";
            };
            "@mozilla.org/network/server-socket;1": {
                createInstance<I_203 extends CiKeys>(req: CiType[I_203]): CiMap[I_203];
                name: "@mozilla.org/network/server-socket;1";
                number: "{2ec62893-3b35-48fa-ab1d-5e68a9f45f08}";
                typeName: "mozilla::net::nsServerSocket";
                interfaceName: "net";
            };
            "@mozilla.org/network/simple-stream-listener;1": {
                createInstance<I_204 extends CiKeys>(req: CiType[I_204]): CiMap[I_204];
                name: "@mozilla.org/network/simple-stream-listener;1";
                number: "{fb8cbf4e-4701-4ba1-b1d6-5388e041fb67}";
                typeName: "mozilla::net::nsSimpleStreamListener";
                interfaceName: "net";
            };
            "@mozilla.org/network/simple-uri-mutator;1": {
                createInstance<I_205 extends CiKeys>(req: CiType[I_205]): CiMap[I_205];
                name: "@mozilla.org/network/simple-uri-mutator;1";
                number: "{2be14592-28d4-4a83-8fe9-08e778849f6e}";
                typeName: "mozilla::net::nsSimpleURI::Mutator";
                interfaceName: "nsISimpleURI";
            };
            "@mozilla.org/network/default-uri-mutator;1": {
                createInstance<I_206 extends CiKeys>(req: CiType[I_206]): CiMap[I_206];
                name: "@mozilla.org/network/default-uri-mutator;1";
                number: "{04445aa0-fd27-4c99-bd41-6be6318ae92c}";
                typeName: "mozilla::net::DefaultURI::Mutator";
                interfaceName: "DefaultURI";
            };
            "@mozilla.org/network/socket-transport-service;1": {
                getService(): unknown;
                name: "@mozilla.org/network/socket-transport-service;1";
                number: "{ad56b25f-e6bb-4db3-9f7b-5b7db33fd2b1}";
                typeName: "mozilla::net::nsSocketTransportService";
                interfaceName: "net";
            };
            "@mozilla.org/network/standard-url-mutator;1": {
                createInstance<I_207 extends CiKeys>(req: CiType[I_207]): CiMap[I_207];
                name: "@mozilla.org/network/standard-url-mutator;1";
                number: "{ce7d7da0-fb28-44a3-8c7b-000c165918f4}";
                typeName: "mozilla::net::nsStandardURL::Mutator";
                interfaceName: "nsIStandardURL";
            };
            "@mozilla.org/network/stream-listener-tee;1": {
                createInstance<I_208 extends CiKeys>(req: CiType[I_208]): CiMap[I_208];
                name: "@mozilla.org/network/stream-listener-tee;1";
                number: "{831f8f13-7aa8-485f-b02e-77c881cc5773}";
                typeName: "mozilla::net::nsStreamListenerTee";
                interfaceName: "net";
            };
            "@mozilla.org/network/stream-loader;1": {
                createInstance<I_209 extends CiKeys>(req: CiType[I_209]): CiMap[I_209];
                name: "@mozilla.org/network/stream-loader;1";
                number: "{9879908a-2972-40c0-890b-a91dd7dfb954}";
                interfaceName: "nsIStreamLoader";
            };
            "@mozilla.org/network/stream-transport-service;1": {
                createInstance<I_210 extends CiKeys>(req: CiType[I_210]): CiMap[I_210];
                name: "@mozilla.org/network/stream-transport-service;1";
                number: "{0885d4f8-f7b8-4cda-902e-94ba38bc256e}";
                typeName: "mozilla::net::nsStreamTransportService";
                interfaceName: "net";
            };
            "@mozilla.org/network/throttlequeue;1": {
                createInstance<I_211 extends CiKeys>(req: CiType[I_211]): CiMap[I_211];
                name: "@mozilla.org/network/throttlequeue;1";
                number: "{4c39159c-cd90-4dd3-97a7-06af5e6d84c4}";
                typeName: "nsIInputChannelThrottleQueue";
                interfaceName: "nsIIInputChannelThrottleQueue";
            };
            "@mozilla.org/network/tls-server-socket;1": {
                createInstance<I_212 extends CiKeys>(req: CiType[I_212]): CiMap[I_212];
                name: "@mozilla.org/network/tls-server-socket;1";
                number: "{1813cbb4-c98e-4622-8c7d-839167f3f272}";
                typeName: "mozilla::net::TLSServerSocket";
                interfaceName: "net";
            };
            "@mozilla.org/network/udp-socket;1": {
                createInstance<I_213 extends CiKeys>(req: CiType[I_213]): CiMap[I_213];
                name: "@mozilla.org/network/udp-socket;1";
                number: "{c9f74572-7b8e-4fec-bb4a-03c0d3021bd6}";
                typeName: "mozilla::net::nsUDPSocket";
                interfaceName: "net";
            };
            "@mozilla.org/network/url-parser;1?auth=maybe": {
                createInstance<I_214 extends CiKeys>(req: CiType[I_214]): CiMap[I_214];
                name: "@mozilla.org/network/url-parser;1?auth=maybe";
                number: "{ff41913b-546a-4bff-9201-dc9b2c032eba}";
                typeName: "nsStdURLParser";
                interfaceName: "nsIStdURLParser";
            };
            "@mozilla.org/network/url-parser;1?auth=no": {
                createInstance<I_215 extends CiKeys>(req: CiType[I_215]): CiMap[I_215];
                name: "@mozilla.org/network/url-parser;1?auth=no";
                number: "{78804a84-8173-42b6-bb94-789f0816a810}";
                typeName: "nsNoAuthURLParser";
                interfaceName: "nsINoAuthURLParser";
            };
            "@mozilla.org/network/url-parser;1?auth=yes": {
                createInstance<I_216 extends CiKeys>(req: CiType[I_216]): CiMap[I_216];
                name: "@mozilla.org/network/url-parser;1?auth=yes";
                number: "{275d800e-3f60-4896-adb7-d7f390ce0e42}";
                typeName: "nsAuthURLParser";
                interfaceName: "nsIAuthURLParser";
            };
            "@mozilla.org/streamConverters;1": {
                createInstance<I_217 extends CiKeys>(req: CiType[I_217]): CiMap[I_217];
                name: "@mozilla.org/streamConverters;1";
                number: "{892ffeb0-3f80-11d3-a16c-0050041caf44}";
                interfaceName: "CreateNewStreamConvServiceFactory";
            };
            "@mozilla.org/streamconv;1?from=application/http-index-format&to=text/html": {
                createInstance<I_218 extends CiKeys>(req: CiType[I_218]): CiMap[I_218];
                name: "@mozilla.org/streamconv;1?from=application/http-index-format&to=text/html";
                number: "{cf0f71fd-fafd-4e2b-9fdc-134d972e16e2}";
                interfaceName: "nsIIndexedToHTML";
            };
            "@mozilla.org/streamconv;1?from=application/x-unknown-content-type&to=*/*": {
                createInstance<I_219 extends CiKeys>(req: CiType[I_219]): CiMap[I_219];
                name: "@mozilla.org/streamconv;1?from=application/x-unknown-content-type&to=*/*";
                number: "{7d7008a0-c49a-11d3-9b22-0080c7cb1080}";
                interfaceName: "CreateNewUnknownDecoderFactory";
            };
            "@mozilla.org/streamconv;1?from=br&to=uncompressed": {
                createInstance<I_220 extends CiKeys>(req: CiType[I_220]): CiMap[I_220];
                name: "@mozilla.org/streamconv;1?from=br&to=uncompressed";
                number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
                interfaceName: "CreateNewHTTPCompressConvFactory";
            };
            "@mozilla.org/streamconv;1?from=compress&to=uncompressed": {
                createInstance<I_221 extends CiKeys>(req: CiType[I_221]): CiMap[I_221];
                name: "@mozilla.org/streamconv;1?from=compress&to=uncompressed";
                number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
                interfaceName: "CreateNewHTTPCompressConvFactory";
            };
            "@mozilla.org/streamconv;1?from=deflate&to=uncompressed": {
                createInstance<I_222 extends CiKeys>(req: CiType[I_222]): CiMap[I_222];
                name: "@mozilla.org/streamconv;1?from=deflate&to=uncompressed";
                number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
                interfaceName: "CreateNewHTTPCompressConvFactory";
            };
            "@mozilla.org/streamconv;1?from=gzip&to=uncompressed": {
                createInstance<I_223 extends CiKeys>(req: CiType[I_223]): CiMap[I_223];
                name: "@mozilla.org/streamconv;1?from=gzip&to=uncompressed";
                number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
                interfaceName: "CreateNewHTTPCompressConvFactory";
            };
            "@mozilla.org/streamconv;1?from=x-compress&to=uncompressed": {
                createInstance<I_224 extends CiKeys>(req: CiType[I_224]): CiMap[I_224];
                name: "@mozilla.org/streamconv;1?from=x-compress&to=uncompressed";
                number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
                interfaceName: "CreateNewHTTPCompressConvFactory";
            };
            "@mozilla.org/streamconv;1?from=x-gzip&to=uncompressed": {
                createInstance<I_225 extends CiKeys>(req: CiType[I_225]): CiMap[I_225];
                name: "@mozilla.org/streamconv;1?from=x-gzip&to=uncompressed";
                number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
                interfaceName: "CreateNewHTTPCompressConvFactory";
            };
            "@mozilla.org/streamconv;1?from=multipart/byteranges&to=*/*": {
                createInstance<I_226 extends CiKeys>(req: CiType[I_226]): CiMap[I_226];
                name: "@mozilla.org/streamconv;1?from=multipart/byteranges&to=*/*";
                number: "{7584ce90-5b25-11d3-a175-0050041caf44}";
                interfaceName: "CreateNewMultiMixedConvFactory";
            };
            "@mozilla.org/streamconv;1?from=multipart/mixed&to=*/*": {
                createInstance<I_227 extends CiKeys>(req: CiType[I_227]): CiMap[I_227];
                name: "@mozilla.org/streamconv;1?from=multipart/mixed&to=*/*";
                number: "{7584ce90-5b25-11d3-a175-0050041caf44}";
                interfaceName: "CreateNewMultiMixedConvFactory";
            };
            "@mozilla.org/streamconv;1?from=multipart/x-mixed-replace&to=*/*": {
                createInstance<I_228 extends CiKeys>(req: CiType[I_228]): CiMap[I_228];
                name: "@mozilla.org/streamconv;1?from=multipart/x-mixed-replace&to=*/*";
                number: "{7584ce90-5b25-11d3-a175-0050041caf44}";
                interfaceName: "CreateNewMultiMixedConvFactory";
            };
            "@mozilla.org/txttohtmlconv;1": {
                createInstance<I_229 extends CiKeys>(req: CiType[I_229]): CiMap[I_229];
                name: "@mozilla.org/txttohtmlconv;1";
                number: "{77c0e42a-1dd2-11b2-8ebf-edc6606f2f4b}";
                interfaceName: "CreateNewTXTToHTMLConvFactory";
            };
            "@mozilla.org/cookieService;1": {
                getService(): nsICookieServiceType;
                name: "@mozilla.org/cookieService;1";
                number: "{c375fa80-150f-11d6-a618-0010a401eb10}";
                typeName: "nsICookieService";
                interfaceName: "nsIICookieService";
            };
            "@mozilla.org/cookiemanager;1": {
                getService(): nsICookieManagerType;
                name: "@mozilla.org/cookiemanager;1";
                number: "{c375fa80-150f-11d6-a618-0010a401eb10}";
                typeName: "nsICookieService";
                interfaceName: "nsIICookieService";
            };
            "@mozilla.org/http-sfv-service;1": {
                getService(): unknown;
                name: "@mozilla.org/http-sfv-service;1";
                number: "{e1676f84-e6e5-45d0-a4bf-d9905efc5b2e}";
            };
            "@mozilla.org/cookieJarSettings;1": {
                createInstance<I_230 extends CiKeys>(req: CiType[I_230]): CiMap[I_230];
                name: "@mozilla.org/cookieJarSettings;1";
                number: "{4ce234f1-52e8-47a9-8c8d-b02f815733c7}";
                typeName: "nsICookieJarSettings";
                interfaceName: "nsIICookieJarSettings";
            };
            "@mozilla.org/wifi/monitor;1": {
                getService(): unknown;
                name: "@mozilla.org/wifi/monitor;1";
                number: "{3ff8fb9f-ee63-48df-89f0-dace0242fd82}";
                typeName: "nsWifiMonitor";
                interfaceName: "nsIWifiMonitor";
            };
            "@mozilla.org/net/CachePurgeLock;1": {
                createInstance<I_231 extends CiKeys>(req: CiType[I_231]): CiMap[I_231];
                name: "@mozilla.org/net/CachePurgeLock;1";
                number: "{72da39cc-0b9b-4fff-8ff9-d3b9a41d0dc4}";
                typeName: "mozilla::net::CachePurgeLock";
                interfaceName: "net";
            };
            "@mozilla.org/network/protocol;1?name=moz-gio": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=moz-gio";
                number: "{ee706783-3af8-4d19-9e84-e2ebfe213480}";
                typeName: "nsGIOProtocolHandler";
                interfaceName: "nsIGIOProtocolHandler";
            };
            "@mozilla.org/network/well-known-opportunistic-utils;1": {
                createInstance<I_232 extends CiKeys>(req: CiType[I_232]): CiMap[I_232];
                name: "@mozilla.org/network/well-known-opportunistic-utils;1";
                number: "{b4f96c89-5238-450c-8bda-e12c26f1d150}";
            };
            "@mozilla.org/network/binary-http;1": {
                createInstance<I_233 extends CiKeys>(req: CiType[I_233]): CiMap[I_233];
                name: "@mozilla.org/network/binary-http;1";
                number: "{b43b3f73-8160-4ab2-9f5d-4129a9708081}";
                interfaceName: "binary_http_consItructor";
            };
            "@mozilla.org/network/oblivious-http;1": {
                createInstance<I_234 extends CiKeys>(req: CiType[I_234]): CiMap[I_234];
                name: "@mozilla.org/network/oblivious-http;1";
                number: "{d581149e-3319-4563-b95e-46c64af5c4e8}";
                interfaceName: "oblivious_http_consItructor";
            };
            "@mozilla.org/network/oblivious-http-service;1": {
                createInstance<I_235 extends CiKeys>(req: CiType[I_235]): CiMap[I_235];
                name: "@mozilla.org/network/oblivious-http-service;1";
                number: "{b1f08d56-fca6-4290-9500-d5168dc9d8c3}";
                typeName: "mozilla::net::ObliviousHttpService";
                interfaceName: "net";
            };
            "@mozilla.org/url-classifier/channel-classifier-service;1": {
                getService(): unknown;
                name: "@mozilla.org/url-classifier/channel-classifier-service;1";
                number: "{7a6da992-dbce-4943-b463-5a2dd011fa1a}";
                typeName: "nsIChannelClassifierService";
                interfaceName: "nsIIChannelClassifierService";
            };
            "@mozilla.org/url-classifier/exception-list-service;1": {
                createInstance<I_236 extends CiKeys>(req: CiType[I_236]): CiMap[I_236];
                name: "@mozilla.org/url-classifier/exception-list-service;1";
                number: "{b9f4fd03-9d87-4bfd-9958-85a821750ddc}";
            };
            "@mozilla.org/remote/agent;1": {
                createInstance<I_237 extends CiKeys>(req: CiType[I_237]): CiMap[I_237];
                name: "@mozilla.org/remote/agent;1";
                number: "{8f685a9d-8181-46d6-a71d-869289099c6d}";
            };
            "@mozilla.org/remote/marionette;1": {
                createInstance<I_238 extends CiKeys>(req: CiType[I_238]): CiMap[I_238];
                name: "@mozilla.org/remote/marionette;1";
                number: "{786a1369-dca5-4adc-8486-33d23c88010a}";
            };
            "@mozilla.org/nsCertificateDialogs;1": {
                createInstance<I_239 extends CiKeys>(req: CiType[I_239]): CiMap[I_239];
                name: "@mozilla.org/nsCertificateDialogs;1";
                number: "{518e071f-1dd2-11b2-937e-c45f14def778}";
                typeName: "nsNSSDialogs";
                interfaceName: "nsINSSDialogs";
            };
            "@mozilla.org/nsTokenPasswordDialogs;1": {
                createInstance<I_240 extends CiKeys>(req: CiType[I_240]): CiMap[I_240];
                name: "@mozilla.org/nsTokenPasswordDialogs;1";
                number: "{518e071f-1dd2-11b2-937e-c45f14def778}";
                typeName: "nsNSSDialogs";
                interfaceName: "nsINSSDialogs";
            };
            "@mozilla.org/psm;1": {
                createInstance<I_241 extends CiKeys>(req: CiType[I_241]): CiMap[I_241];
                name: "@mozilla.org/psm;1";
                number: "{4cb64dfd-ca98-4e24-befd-0d9285a33bcb}";
                typeName: "nsNSSComponent";
                interfaceName: "nsINSSComponent";
            };
            "@mozilla.org/nss_errors_service;1": {
                createInstance<I_242 extends CiKeys>(req: CiType[I_242]): CiMap[I_242];
                name: "@mozilla.org/nss_errors_service;1";
                number: "{9ef18451-a157-4d17-8132-47afef213689}";
                typeName: "mozilla::psm::NSSErrorsService";
                interfaceName: "psm";
            };
            "@mozilla.org/security/nssversion;1": {
                createInstance<I_243 extends CiKeys>(req: CiType[I_243]): CiMap[I_243];
                name: "@mozilla.org/security/nssversion;1";
                number: "{23ad3531-11d2-4e8e-805a-6a752e91681a}";
                typeName: "nsNSSVersion";
                interfaceName: "nsINSSVersion";
            };
            "@mozilla.org/security/sdr;1": {
                createInstance<I_244 extends CiKeys>(req: CiType[I_244]): CiMap[I_244];
                name: "@mozilla.org/security/sdr;1";
                number: "{0c4f1ddc-1dd2-11b2-9d95-f2fdf113044b}";
                typeName: "SecretDecoderRing";
                interfaceName: "SecretDecoderRing";
            };
            "@mozilla.org/security/pk11tokendb;1": {
                createInstance<I_245 extends CiKeys>(req: CiType[I_245]): CiMap[I_245];
                name: "@mozilla.org/security/pk11tokendb;1";
                number: "{b084a2ce-1dd1-11b2-bf10-8324f8e065cc}";
                typeName: "nsPK11TokenDB";
                interfaceName: "nsIPK11TokenDB";
            };
            "@mozilla.org/security/pkcs11moduledb;1": {
                createInstance<I_246 extends CiKeys>(req: CiType[I_246]): CiMap[I_246];
                name: "@mozilla.org/security/pkcs11moduledb;1";
                number: "{ff9fbcd7-9517-4334-b97a-ceed78909974}";
                typeName: "mozilla::psm::PKCS11ModuleDB";
                interfaceName: "psm";
            };
            "@mozilla.org/security/x509certdb;1": {
                createInstance<I_247 extends CiKeys>(req: CiType[I_247]): CiMap[I_247];
                name: "@mozilla.org/security/x509certdb;1";
                number: "{fb0bbc5c-452e-4783-b32c-80124693d871}";
                typeName: "nsNSSCertificateDB";
                interfaceName: "nsINSSCertificateDB";
            };
            "@mozilla.org/security/clientAuthRememberService;1": {
                createInstance<I_248 extends CiKeys>(req: CiType[I_248]): CiMap[I_248];
                name: "@mozilla.org/security/clientAuthRememberService;1";
                number: "{1dbc6eb6-0972-4bdb-9dc4-acd0abf72369}";
                typeName: "nsClientAuthRememberService";
                interfaceName: "nsIClientAuthRememberService";
            };
            "@mozilla.org/security/hash;1": {
                createInstance<I_249 extends CiKeys>(req: CiType[I_249]): CiMap[I_249];
                name: "@mozilla.org/security/hash;1";
                number: "{36a1d3b3-d886-4317-96ff-87b0005cfef7}";
                interfaceName: "crypto_hash_consItructor";
            };
            "@mozilla.org/security/contentsignatureverifier;1": {
                createInstance<I_250 extends CiKeys>(req: CiType[I_250]): CiMap[I_250];
                name: "@mozilla.org/security/contentsignatureverifier;1";
                number: "{45a5fe2f-c350-4b86-962d-02d5aaaa955a}";
                typeName: "ContentSignatureVerifier";
                interfaceName: "ContentSignatureVerifier";
            };
            "@mozilla.org/security/certoverride;1": {
                createInstance<I_251 extends CiKeys>(req: CiType[I_251]): CiMap[I_251];
                name: "@mozilla.org/security/certoverride;1";
                number: "{67ba681d-5485-4fff-952c-2ee337ffdcd6}";
                typeName: "nsCertOverrideService";
                interfaceName: "nsICertOverrideService";
            };
            "@mozilla.org/security/random-generator;1": {
                createInstance<I_252 extends CiKeys>(req: CiType[I_252]): CiMap[I_252];
                name: "@mozilla.org/security/random-generator;1";
                number: "{be65e2b7-fe46-4e0f-88e0-4b385db4d68a}";
                typeName: "nsRandomGenerator";
                interfaceName: "nsIRandomGenerator";
            };
            "@mozilla.org/security/transportsecurityinfo;1": {
                createInstance<I_253 extends CiKeys>(req: CiType[I_253]): CiMap[I_253];
                name: "@mozilla.org/security/transportsecurityinfo;1";
                number: "{16786594-0296-4471-8096-8f84497ca428}";
                typeName: "mozilla::psm::TransportSecurityInfo";
                interfaceName: "psm";
            };
            "@mozilla.org/ssservice;1": {
                createInstance<I_254 extends CiKeys>(req: CiType[I_254]): CiMap[I_254];
                name: "@mozilla.org/ssservice;1";
                number: "{16955eee-6c48-4152-9309-c42a465138a1}";
                typeName: "nsSiteSecurityService";
                interfaceName: "nsISiteSecurityService";
            };
            "@mozilla.org/security/oskeystore;1": {
                createInstance<I_255 extends CiKeys>(req: CiType[I_255]): CiMap[I_255];
                name: "@mozilla.org/security/oskeystore;1";
                number: "{57972956-5718-42d2-8070-b3fc72212eaf}";
                typeName: "OSKeyStore";
                interfaceName: "OSKeyStore";
            };
            "@mozilla.org/security/osreauthenticator;1": {
                createInstance<I_256 extends CiKeys>(req: CiType[I_256]): CiMap[I_256];
                name: "@mozilla.org/security/osreauthenticator;1";
                number: "{4fe082ae-6ff0-4b41-b24f-eaa664f6e46a}";
                typeName: "OSReauthenticator";
                interfaceName: "OSReauthenticator";
            };
            "@mozilla.org/security/certstorage;1": {
                createInstance<I_257 extends CiKeys>(req: CiType[I_257]): CiMap[I_257];
                name: "@mozilla.org/security/certstorage;1";
                number: "{16e5c837-f877-4e23-9c64-eddf905e30e6}";
                interfaceName: "cert_storage_consItructor";
            };
            "@mozilla.org/security/publickeypinningservice;1": {
                createInstance<I_258 extends CiKeys>(req: CiType[I_258]): CiMap[I_258];
                name: "@mozilla.org/security/publickeypinningservice;1";
                number: "{f64432b9-e8c6-41b4-b2da-8eb004344bba}";
                typeName: "psm::PublicKeyPinningService";
                interfaceName: "psm";
            };
            "@mozilla.org/security/nsCertTree;1": {
                createInstance<I_259 extends CiKeys>(req: CiType[I_259]): CiMap[I_259];
                name: "@mozilla.org/security/nsCertTree;1";
                number: "{4ea60761-31d6-491d-9e34-4b53a26c416c}";
                typeName: "nsCertTree";
                interfaceName: "nsICertTree";
            };
            "@mozilla.org/security/CRLiteTimestamp;1": {
                createInstance<I_260 extends CiKeys>(req: CiType[I_260]): CiMap[I_260];
                name: "@mozilla.org/security/CRLiteTimestamp;1";
                number: "{9676cfc4-6e84-11ec-a30d-d3cd0af86e01}";
                typeName: "mozilla::psm::CRLiteTimestamp";
                interfaceName: "psm";
            };
            "@mozilla.org/security/datastoragemanager;1": {
                createInstance<I_261 extends CiKeys>(req: CiType[I_261]): CiMap[I_261];
                name: "@mozilla.org/security/datastoragemanager;1";
                number: "{71b49926-fd4e-43e2-ab8d-d9b049413c0b}";
                typeName: "mozilla::DataStorageManager";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/security/ClientAuthDialogService;1": {
                createInstance<I_262 extends CiKeys>(req: CiType[I_262]): CiMap[I_262];
                name: "@mozilla.org/security/ClientAuthDialogService;1";
                number: "{d7d2490d-2640-411b-9f09-a538803c11ee}";
            };
            "@mozilla.org/sandbox/sandbox-settings;1": {
                createInstance<I_263 extends CiKeys>(req: CiType[I_263]): CiMap[I_263];
                name: "@mozilla.org/sandbox/sandbox-settings;1";
                number: "{5516303d-9007-45a0-94b9-940ef134a6e2}";
                typeName: "mozISandboxSettings";
                interfaceName: "mozIISandboxSettings";
            };
            "@mozilla.org/sandbox/sandbox-test;1": {
                createInstance<I_264 extends CiKeys>(req: CiType[I_264]): CiMap[I_264];
                name: "@mozilla.org/sandbox/sandbox-test;1";
                number: "{2306c118-3544-4674-9222-670b88dc07a9}";
                typeName: "mozISandboxTest";
                interfaceName: "mozIISandboxTest";
            };
            "@mozilla.org/sandbox/syscall-reporter;1": {
                createInstance<I_265 extends CiKeys>(req: CiType[I_265]): CiMap[I_265];
                name: "@mozilla.org/sandbox/syscall-reporter;1";
                number: "{5118a6f9-2493-4f97-9552-620663e03cb3}";
                typeName: "mozISandboxReporter";
                interfaceName: "mozIISandboxReporter";
            };
            "@mozilla.org/appservices/logger;1": {
                createInstance<I_266 extends CiKeys>(req: CiType[I_266]): CiMap[I_266];
                name: "@mozilla.org/appservices/logger;1";
                number: "{d2716568-f5fa-4989-91dd-e11599e932a1}";
                typeName: "mozIAppServicesLogger";
                interfaceName: "mozIIAppServicesLogger";
            };
            "@mozilla.org/fxaccounts/push;1": {
                createInstance<I_267 extends CiKeys>(req: CiType[I_267]): CiMap[I_267];
                name: "@mozilla.org/fxaccounts/push;1";
                number: "{1b7db999-2ecd-4abf-bb95-a726896798ca}";
            };
            "@mozilla.org/services/settings;1": {
                createInstance<I_268 extends CiKeys>(req: CiType[I_268]): CiMap[I_268];
                name: "@mozilla.org/services/settings;1";
                number: "{5e756573-234a-49ea-bbe4-59ec7a70657d}";
            };
            "@mozilla.org/weave/service;1": {
                createInstance<I_269 extends CiKeys>(req: CiType[I_269]): CiMap[I_269];
                name: "@mozilla.org/weave/service;1";
                number: "{74b89fb0-f200-4ae8-a3ec-dd164117f6de}";
            };
            "@mozilla.org/network/protocol/about;1?what=sync-log": {
                createInstance<I_270 extends CiKeys>(req: CiType[I_270]): CiMap[I_270];
                name: "@mozilla.org/network/protocol/about;1?what=sync-log";
                number: "{d28f8a0b-95da-48f4-b712-caf37097be41}";
            };
            "@mozilla.org/startupcacheinfo;1": {
                createInstance<I_271 extends CiKeys>(req: CiType[I_271]): CiMap[I_271];
                name: "@mozilla.org/startupcacheinfo;1";
                number: "{a6b2f8b0-7438-11ea-bc55-0242ac130003}";
                typeName: "nsIStartupCacheInfo";
                interfaceName: "nsIIStartupCacheInfo";
            };
            "@mozilla.org/storage/service;1": {
                getService(): mozIStorageServiceType;
                name: "@mozilla.org/storage/service;1";
                number: "{bbbb1d61-438f-4436-92ed-8308e5830fb0}";
                typeName: "mozilla::storage::Service";
                interfaceName: "storage";
            };
            "@mozilla.org/storage/vacuum;1": {
                getService(): unknown;
                name: "@mozilla.org/storage/vacuum;1";
                number: "{3b667ee0-d2da-4ccc-9c3d-95f2ca6a8b4c}";
                typeName: "mozilla::storage::VacuumManager";
                interfaceName: "storage";
            };
            "@mozilla.org/about-thirdparty;1": {
                getService(): unknown;
                name: "@mozilla.org/about-thirdparty;1";
                number: "{bb6afd78-2e02-4e96-b6b9-eef8cbcdc29c}";
                typeName: "AboutThirdParty";
                interfaceName: "AboutThirdParty";
            };
            "@mozilla.org/about-windowsmessages;1": {
                getService(): unknown;
                name: "@mozilla.org/about-windowsmessages;1";
                number: "{ba8cdb8a-9624-493d-aac4-23ee83378d7c}";
                typeName: "AboutWindowsMessages";
                interfaceName: "AboutWindowsMessages";
            };
            "@mozilla.org/bounce-tracking-protection;1": {
                getService(): nsIBounceTrackingProtectionType;
                name: "@mozilla.org/bounce-tracking-protection;1";
                number: "{4866F748-29DA-4C10-8EAA-ED2F7851E6B1}";
                typeName: "mozilla::BounceTrackingProtection";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/tracking-db-service;1": {
                createInstance<I_272 extends CiKeys>(req: CiType[I_272]): CiMap[I_272];
                name: "@mozilla.org/tracking-db-service;1";
                number: "{3c9c43b6-09eb-4ed2-9b87-e29f4221eef0}";
            };
            "@mozilla.org/tracking-url-decoration-service;1": {
                createInstance<I_273 extends CiKeys>(req: CiType[I_273]): CiMap[I_273];
                name: "@mozilla.org/tracking-url-decoration-service;1";
                number: "{5874af6d-5719-4e1b-b155-ef4eae7fcb32}";
            };
            "@mozilla.org/purge-tracker-service;1": {
                createInstance<I_274 extends CiKeys>(req: CiType[I_274]): CiMap[I_274];
                name: "@mozilla.org/purge-tracker-service;1";
                number: "{90d1fd17-2018-4e16-b73c-a04a26fa6dd4}";
            };
            "@mozilla.org/partitioning/exception-list-service;1": {
                createInstance<I_275 extends CiKeys>(req: CiType[I_275]): CiMap[I_275];
                name: "@mozilla.org/partitioning/exception-list-service;1";
                number: "{ab94809d-33f0-4f28-af38-01efbd3baf22}";
            };
            "@mozilla.org/content-blocking-telemetry-service;1": {
                getService(): unknown;
                name: "@mozilla.org/content-blocking-telemetry-service;1";
                number: "{42906796-d16a-44a1-b518-0f108ab38eba}";
                typeName: "mozilla::ContentBlockingTelemetryService";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/query-stripping-list-service;1": {
                getService(): unknown;
                name: "@mozilla.org/query-stripping-list-service;1";
                number: "{afff16f0-3fd2-4153-9ccd-c6d9abd879e4}";
            };
            "@mozilla.org/url-query-string-stripper;1": {
                getService(): nsIURLQueryStringStripperType;
                name: "@mozilla.org/url-query-string-stripper;1";
                number: "{6b42a890-2624-4560-99c4-b25380e8cd77}";
                typeName: "mozilla::URLQueryStringStripper";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/async-shutdown-service;1": {
                createInstance<I_276 extends CiKeys>(req: CiType[I_276]): CiMap[I_276];
                name: "@mozilla.org/async-shutdown-service;1";
                number: "{35c496de-a115-475d-93b5-ffa3f3ae6fe3}";
            };
            "@mozilla.org/autocomplete/controller;1": {
                createInstance<I_277 extends CiKeys>(req: CiType[I_277]): CiMap[I_277];
                name: "@mozilla.org/autocomplete/controller;1";
                number: "{f6d5ebbd-34f4-487d-9d10-3d34123e3eb9}";
                typeName: "nsAutoCompleteController";
                interfaceName: "nsIAutoCompleteController";
            };
            "@mozilla.org/autocomplete/simple-result;1": {
                createInstance<I_278 extends CiKeys>(req: CiType[I_278]): CiMap[I_278];
                name: "@mozilla.org/autocomplete/simple-result;1";
                number: "{2ee3039b-2de4-43d9-93b0-649beacff39a}";
                typeName: "nsAutoCompleteSimpleResult";
                interfaceName: "nsIAutoCompleteSimpleResult";
            };
            "@mozilla.org/bhr-telemetry-service;1": {
                createInstance<I_279 extends CiKeys>(req: CiType[I_279]): CiMap[I_279];
                name: "@mozilla.org/bhr-telemetry-service;1";
                number: "{117c8cdf-69e6-4f31-a439-b8a654c67127}";
            };
            "@mozilla.org/backgroundtasks;1": {
                getService(): unknown;
                name: "@mozilla.org/backgroundtasks;1";
                number: "{cdc33a1f-e8ae-4a4f-85d0-6ec633fe872c}";
                typeName: "BackgroundTasks";
                interfaceName: "BackgroundTasks";
            };
            "@mozilla.org/backgroundtasksmanager;1": {
                createInstance<I_280 extends CiKeys>(req: CiType[I_280]): CiMap[I_280];
                name: "@mozilla.org/backgroundtasksmanager;1";
                number: "{4d48c536-e16f-4699-8f9c-add4f28f92f0}";
            };
            "@mozilla.org/backgroundtasksrunner;1": {
                createInstance<I_281 extends CiKeys>(req: CiType[I_281]): CiMap[I_281];
                name: "@mozilla.org/backgroundtasksrunner;1";
                number: "{8cd92fce-1ec3-470a-ad09-c0de9d98497e}";
                typeName: "BackgroundTasksRunner";
                interfaceName: "BackgroundTasksRunner";
            };
            "@mozilla.org/bits;1": {
                getService(): unknown;
                name: "@mozilla.org/bits;1";
                number: "{495d6f3d-9748-4d30-8ce5-0290c0001edf}";
            };
            "@mozilla.org/addons/content-policy;1": {
                createInstance<I_282 extends CiKeys>(req: CiType[I_282]): CiMap[I_282];
                name: "@mozilla.org/addons/content-policy;1";
                number: "{c26a8241-ecf4-4aed-9f3c-f1f5c713b9a5}";
                typeName: "AddonContentPolicy";
                interfaceName: "AddonContentPolicy";
            };
            "@mozilla.org/addons/addon-manager-startup;1": {
                getService(): unknown;
                name: "@mozilla.org/addons/addon-manager-startup;1";
                number: "{17a59a6b-92b8-42e5-bce0-ab434c7a7135}";
                typeName: "mozilla::AddonManagerStartup";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/alert-notification;1": {
                createInstance<I_283 extends CiKeys>(req: CiType[I_283]): CiMap[I_283];
                name: "@mozilla.org/alert-notification;1";
                number: "{9a7b7a41-0b47-47f7-b61b-15a210d6f020}";
                typeName: "mozilla::AlertNotification";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/reputationservice/application-reputation-service;1": {
                getService(): unknown;
                name: "@mozilla.org/reputationservice/application-reputation-service;1";
                number: "{d21b4c33-716f-4117-8041-2770b59ff8a6}";
                typeName: "ApplicationReputationService";
                interfaceName: "ApplicationReputationService";
            };
            "@mozilla.org/toolkit/download-platform;1": {
                createInstance<I_284 extends CiKeys>(req: CiType[I_284]): CiMap[I_284];
                name: "@mozilla.org/toolkit/download-platform;1";
                number: "{649a14c9-fe5c-48ec-9c85-00cad9ccf32e}";
                typeName: "DownloadPlatform";
                interfaceName: "DownloadPlatform";
            };
            "@mozilla.org/addons/policy-service;1": {
                getService(): unknown;
                name: "@mozilla.org/addons/policy-service;1";
                number: "{562de129-8338-482c-bb96-a1ff09ee53cc}";
                typeName: "mozilla::ExtensionPolicyService";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/toolkit/finalizationwitness;1": {
                createInstance<I_285 extends CiKeys>(req: CiType[I_285]): CiMap[I_285];
                name: "@mozilla.org/toolkit/finalizationwitness;1";
                number: "{15686f9d-483e-4361-98cd-37f1e8f1e61d}";
                typeName: "mozilla::FinalizationWitnessService";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/reputationservice/login-reputation-service;1": {
                getService(): unknown;
                name: "@mozilla.org/reputationservice/login-reputation-service;1";
                number: "{91fa9e67-1427-4ee9-8ee0-1a6ed578bee1}";
                typeName: "mozilla::LoginReputationService";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/alerts-service;1": {
                createInstance<I_286 extends CiKeys>(req: CiType[I_286]): CiMap[I_286];
                name: "@mozilla.org/alerts-service;1";
                number: "{a0ccaaf8-09da-44d8-b250-9ac3e93c8117}";
                typeName: "nsAlertsService";
                interfaceName: "nsIAlertsService";
            };
            "@mozilla.org/toolkit/app-startup;1": {
                createInstance<I_287 extends CiKeys>(req: CiType[I_287]): CiMap[I_287];
                name: "@mozilla.org/toolkit/app-startup;1";
                number: "{7dd4d320-c84b-4624-8d45-7bb9b2356977}";
                typeName: "nsAppStartup";
                interfaceName: "nsIAppStartup";
            };
            "@mozilla.org/appshell/component/browser-status-filter;1": {
                createInstance<I_288 extends CiKeys>(req: CiType[I_288]): CiMap[I_288];
                name: "@mozilla.org/appshell/component/browser-status-filter;1";
                number: "{6356aa16-7916-4215-a825-cbc2692ca87a}";
                typeName: "nsBrowserStatusFilter";
                interfaceName: "nsIBrowserStatusFilter";
            };
            "@mozilla.org/find/find_service;1": {
                createInstance<I_289 extends CiKeys>(req: CiType[I_289]): CiMap[I_289];
                name: "@mozilla.org/find/find_service;1";
                number: "{5060b803-340e-11d5-be5b-b3e063ec6a3c}";
                typeName: "nsFindService";
                interfaceName: "nsIFindService";
            };
            "@mozilla.org/typeaheadfind;1": {
                createInstance<I_290 extends CiKeys>(req: CiType[I_290]): CiMap[I_290];
                name: "@mozilla.org/typeaheadfind;1";
                number: "{e7f70966-9a37-48d7-8aeb-35998f31090e}";
                typeName: "nsTypeAheadFind";
                interfaceName: "nsITypeAheadFind";
            };
            "@mozilla.org/uriclassifierservice": {
                createInstance<I_291 extends CiKeys>(req: CiType[I_291]): CiMap[I_291];
                name: "@mozilla.org/uriclassifierservice";
                number: "{7a258022-6765-11e5-b379-b37b1f2354be}";
                typeName: "nsISupports";
                interfaceName: "nsIISupports";
            };
            "@mozilla.org/url-classifier/dbservice;1": {
                createInstance<I_292 extends CiKeys>(req: CiType[I_292]): CiMap[I_292];
                name: "@mozilla.org/url-classifier/dbservice;1";
                number: "{7a258022-6765-11e5-b379-b37b1f2354be}";
                typeName: "nsISupports";
                interfaceName: "nsIISupports";
            };
            "@mozilla.org/url-classifier/prefixset;1": {
                createInstance<I_293 extends CiKeys>(req: CiType[I_293]): CiMap[I_293];
                name: "@mozilla.org/url-classifier/prefixset;1";
                number: "{3d8579f0-75fa-4e00-ba41-38661d5b5d17}";
                typeName: "nsUrlClassifierPrefixSet";
                interfaceName: "nsIUrlClassifierPrefixSet";
            };
            "@mozilla.org/url-classifier/streamupdater;1": {
                createInstance<I_294 extends CiKeys>(req: CiType[I_294]): CiMap[I_294];
                name: "@mozilla.org/url-classifier/streamupdater;1";
                number: "{e1797597-f4d6-4dd3-a1e1-745ad352cd80}";
                typeName: "nsUrlClassifierStreamUpdater";
                interfaceName: "nsIUrlClassifierStreamUpdater";
            };
            "@mozilla.org/url-classifier/utils;1": {
                createInstance<I_295 extends CiKeys>(req: CiType[I_295]): CiMap[I_295];
                name: "@mozilla.org/url-classifier/utils;1";
                number: "{b7b2ccec-7912-4ea6-a548-b038447004bd}";
                typeName: "nsUrlClassifierUtils";
                interfaceName: "nsIUrlClassifierUtils";
            };
            "@mozilla.org/updates/update-processor;1": {
                createInstance<I_296 extends CiKeys>(req: CiType[I_296]): CiMap[I_296];
                name: "@mozilla.org/updates/update-processor;1";
                number: "{f3dcf644-79e8-4f59-a1bb-878454488ef9}";
                typeName: "nsUpdateProcessor";
                interfaceName: "nsIUpdateProcessor";
            };
            "@mozilla.org/updates/update-sync-manager;1": {
                getService(): unknown;
                name: "@mozilla.org/updates/update-sync-manager;1";
                number: "{cf4c4487-66d9-4e18-a2e9-39002245332f}";
                typeName: "nsUpdateSyncManager";
                interfaceName: "nsIUpdateSyncManager";
            };
            "@mozilla.org/toolkit/shutdown-terminator;1": {
                createInstance<I_297 extends CiKeys>(req: CiType[I_297]): CiMap[I_297];
                name: "@mozilla.org/toolkit/shutdown-terminator;1";
                number: "{2e59cc70-f83a-412f-89d4-453885837217}";
                typeName: "mozilla::nsTerminator";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/toolkit/captive-detector;1": {
                createInstance<I_298 extends CiKeys>(req: CiType[I_298]): CiMap[I_298];
                name: "@mozilla.org/toolkit/captive-detector;1";
                number: "{d9cd00ba-aa4d-47b1-8792-b1fe0cd35060}";
            };
            "@mozilla.org/cascade-filter;1": {
                createInstance<I_299 extends CiKeys>(req: CiType[I_299]): CiMap[I_299];
                name: "@mozilla.org/cascade-filter;1";
                number: "{c8d0b0b3-17f8-458b-9264-7b67b288fe79}";
                typeName: "nsICascadeFilter";
                interfaceName: "nsIICascadeFilter";
            };
            "@mozilla.org/clear-data-service;1": {
                createInstance<I_300 extends CiKeys>(req: CiType[I_300]): CiMap[I_300];
                name: "@mozilla.org/clear-data-service;1";
                number: "{0c06583d-7dd8-4293-b1a5-912205f779aa}";
            };
            "@mozilla.org/toolkit/default-clh;1": {
                createInstance<I_301 extends CiKeys>(req: CiType[I_301]): CiMap[I_301];
                name: "@mozilla.org/toolkit/default-clh;1";
                number: "{6ebc941a-f2ff-4d56-b3b6-f7d0b9d73344}";
            };
            "@mozilla.org/content-blocking-allow-list;1": {
                createInstance<I_302 extends CiKeys>(req: CiType[I_302]): CiMap[I_302];
                name: "@mozilla.org/content-blocking-allow-list;1";
                number: "{00ed5d73-9de5-42cf-868c-e739a94f6b37}";
                typeName: "mozilla::ContentBlockingAllowList";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/content-pref/service;1": {
                createInstance<I_303 extends CiKeys>(req: CiType[I_303]): CiMap[I_303];
                name: "@mozilla.org/content-pref/service;1";
                number: "{e3f772f3-023f-4b32-b074-36cf0fd5d414}";
            };
            "@mozilla.org/cookie-banner-service;1": {
                getService(): nsICookieBannerServiceType;
                name: "@mozilla.org/cookie-banner-service;1";
                number: "{eac9cdc4-ecee-49f2-91da-7627e15c1f3c}";
                typeName: "mozilla::nsCookieBannerService";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/cookie-banner-rule;1": {
                createInstance<I_304 extends CiKeys>(req: CiType[I_304]): CiMap[I_304];
                name: "@mozilla.org/cookie-banner-rule;1";
                number: "{eb1904db-e0d1-4760-a721-db76b1ca3e94}";
                typeName: "mozilla::nsCookieBannerRule";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/cookie-banner-list-service;1": {
                createInstance<I_305 extends CiKeys>(req: CiType[I_305]): CiMap[I_305];
                name: "@mozilla.org/cookie-banner-list-service;1";
                number: "{1d8d9470-97d3-4885-a108-44a5c4fb36e2}";
            };
            "@mozilla.org/crashservice;1": {
                createInstance<I_306 extends CiKeys>(req: CiType[I_306]): CiMap[I_306];
                name: "@mozilla.org/crashservice;1";
                number: "{92668367-1b17-4190-86b2-1061b2179744}";
            };
            "@mozilla.org/crashmanager;1": {
                createInstance<I_307 extends CiKeys>(req: CiType[I_307]): CiMap[I_307];
                name: "@mozilla.org/crashmanager;1";
                number: "{c887b6a9-a5eb-4566-a440-bebaea3e54fd}";
            };
            "@mozilla.org/toolkit/crashmonitor;1": {
                createInstance<I_308 extends CiKeys>(req: CiType[I_308]): CiMap[I_308];
                name: "@mozilla.org/toolkit/crashmonitor;1";
                number: "{d9d75e86-8f17-4c57-993e-f738f0d86d42}";
            };
            "@mozilla.org/browser/identitycredentialpromptservice;1": {
                createInstance<I_309 extends CiKeys>(req: CiType[I_309]): CiMap[I_309];
                name: "@mozilla.org/browser/identitycredentialpromptservice;1";
                number: "{936007db-a957-4f1d-a23d-f7d9403223e6}";
            };
            "@mozilla.org/browser/identity-credential-storage-service;1": {
                getService(): nsIIdentityCredentialStorageServiceType;
                name: "@mozilla.org/browser/identity-credential-storage-service;1";
                number: "{029823d0-0448-46c5-af1f-25cd4501d0d7}";
                typeName: "mozilla::IdentityCredentialStorageService";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/jsctypes;1": {
                createInstance<I_310 extends CiKeys>(req: CiType[I_310]): CiMap[I_310];
                name: "@mozilla.org/jsctypes;1";
                number: "{0c797702-1c60-4051-9dd7-4d7405605642}";
                typeName: "mozilla::ctypes::Module";
                interfaceName: "ctypes";
            };
            "@mozilla.org/transfer;1": {
                createInstance<I_311 extends CiKeys>(req: CiType[I_311]): CiMap[I_311];
                name: "@mozilla.org/transfer;1";
                number: "{1b4c85df-cbdd-4bb6-b04e-613caece083c}";
            };
            "@mozilla.org/enterprisepolicies;1": {
                createInstance<I_312 extends CiKeys>(req: CiType[I_312]): CiMap[I_312];
                name: "@mozilla.org/enterprisepolicies;1";
                number: "{49e8d8ef-a713-492a-a3d2-5c9dad4ce2e5}";
            };
            "@mozilla.org/extensions/child;1": {
                createInstance<I_313 extends CiKeys>(req: CiType[I_313]): CiMap[I_313];
                name: "@mozilla.org/extensions/child;1";
                number: "{db82286d-d649-47fb-8599-ba31673a58c5}";
                typeName: "mozilla::extensions::ExtensionsChild";
                interfaceName: "extensIions";
            };
            "@mozilla.org/extensions/storage/internal/sync-area;1": {
                createInstance<I_314 extends CiKeys>(req: CiType[I_314]): CiMap[I_314];
                name: "@mozilla.org/extensions/storage/internal/sync-area;1";
                number: "{f1e424f2-67fe-4f69-a8f8-3993a71f44fa}";
                typeName: "mozIExtensionStorageArea";
                interfaceName: "mozIIExtensIionStorageArea";
            };
            "@mozilla.org/extensions/storage/sync;1": {
                getService(): unknown;
                name: "@mozilla.org/extensions/storage/sync;1";
                number: "{5b7047b4-fe17-4661-8e13-871402bc2023}";
            };
            "@mozilla.org/extensions/web-navigation-content;1": {
                createInstance<I_315 extends CiKeys>(req: CiType[I_315]): CiMap[I_315];
                name: "@mozilla.org/extensions/web-navigation-content;1";
                number: "{acb22042-2b6c-427b-b550-b9f407c6fff6}";
                typeName: "mozilla::extensions::WebNavigationContent";
                interfaceName: "extensIions";
            };
            "@mozilla.org/sanity-test;1": {
                createInstance<I_316 extends CiKeys>(req: CiType[I_316]): CiMap[I_316];
                name: "@mozilla.org/sanity-test;1";
                number: "{f3a8ca4d-4c83-456b-aee2-6a2cbf11e9bd}";
            };
            "@mozilla.org/toolkit/glean;1": {
                getService(): nsIFOGType;
                name: "@mozilla.org/toolkit/glean;1";
                number: "{98d0e975-9cad-4ce3-ae2f-f878b8be6307}";
                typeName: "mozilla::FOG";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/key-value-service;1": {
                createInstance<I_317 extends CiKeys>(req: CiType[I_317]): CiMap[I_317];
                name: "@mozilla.org/key-value-service;1";
                number: "{6cc1a0a8-af97-4d41-9b4a-58dcec46ebce}";
                interfaceName: "nsIKeyValueServiceConstructor";
            };
            "@mozilla.org/media/sniffer;1": {
                createInstance<I_318 extends CiKeys>(req: CiType[I_318]): CiMap[I_318];
                name: "@mozilla.org/media/sniffer;1";
                number: "{3fdd6c28-5b87-4e3e-8b57-8e83c23c1a6d}";
                typeName: "nsMediaSniffer";
                interfaceName: "nsIMediaSniffer";
            };
            "@mozilla.org/mozintlhelper;1": {
                createInstance<I_319 extends CiKeys>(req: CiType[I_319]): CiMap[I_319];
                name: "@mozilla.org/mozintlhelper;1";
                number: "{b43c96be-2b3a-4dc4-90e9-b06d34219b68}";
                typeName: "mozilla::MozIntlHelper";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/mozintl;1": {
                createInstance<I_320 extends CiKeys>(req: CiType[I_320]): CiMap[I_320];
                name: "@mozilla.org/mozintl;1";
                number: "{35ec195a-e8d0-4300-83af-c8a2cc84b4a3}";
            };
            "@mozilla.org/network/protocol;1?name=moz": {
                createInstance<I_321 extends CiKeys>(req: CiType[I_321]): CiMap[I_321];
                name: "@mozilla.org/network/protocol;1?name=moz";
                number: "{47a45e5f-691e-4799-8686-14f8d3fc0f8c}";
            };
            "@mozilla.org/network/protocol/about;1?what=studies": {
                createInstance<I_322 extends CiKeys>(req: CiType[I_322]): CiMap[I_322];
                name: "@mozilla.org/network/protocol/about;1?what=studies";
                number: "{6ab96943-a163-482c-9622-4faedc0e827f}";
            };
            "@mozilla.org/login-manager;1": {
                createInstance<I_323 extends CiKeys>(req: CiType[I_323]): CiMap[I_323];
                name: "@mozilla.org/login-manager;1";
                number: "{cb9e0de8-3598-4ed7-857b-827f011ad5d8}";
            };
            "@mozilla.org/passwordmanager/authpromptfactory;1": {
                createInstance<I_324 extends CiKeys>(req: CiType[I_324]): CiMap[I_324];
                name: "@mozilla.org/passwordmanager/authpromptfactory;1";
                number: "{749e62f4-60ae-4569-a8a2-de78b649660e}";
            };
            "@mozilla.org/login-manager/autocompletesearch;1": {
                createInstance<I_325 extends CiKeys>(req: CiType[I_325]): CiMap[I_325];
                name: "@mozilla.org/login-manager/autocompletesearch;1";
                number: "{2bdac17c-53f1-4896-a521-682ccdeef3a8}";
            };
            "@mozilla.org/login-manager/authprompter;1": {
                createInstance<I_326 extends CiKeys>(req: CiType[I_326]): CiMap[I_326];
                name: "@mozilla.org/login-manager/authprompter;1";
                number: "{8aa66d77-1bbb-45a6-991e-b8f47751c291}";
            };
            "@mozilla.org/login-manager/loginInfo;1": {
                createInstance<I_327 extends CiKeys>(req: CiType[I_327]): CiMap[I_327];
                name: "@mozilla.org/login-manager/loginInfo;1";
                number: "{0f2f347c-1e4f-40cc-8efd-792dea70a85e}";
            };
            "@mozilla.org/login-manager/crypto/SDR;1": {
                createInstance<I_328 extends CiKeys>(req: CiType[I_328]): CiMap[I_328];
                name: "@mozilla.org/login-manager/crypto/SDR;1";
                number: "{dc6c2976-0f73-4f1f-b9ff-3d72b4e28309}";
            };
            "@mozilla.org/autocomplete/search;1?name=login-doorhanger-username": {
                createInstance<I_329 extends CiKeys>(req: CiType[I_329]): CiMap[I_329];
                name: "@mozilla.org/autocomplete/search;1?name=login-doorhanger-username";
                number: "{dc185a77-ba88-4caa-8f16-465253f7599a}";
            };
            "@mozilla.org/autocomplete/search;1?name=login-doorhanger-password": {
                createInstance<I_330 extends CiKeys>(req: CiType[I_330]): CiMap[I_330];
                name: "@mozilla.org/autocomplete/search;1?name=login-doorhanger-password";
                number: "{dc185a77-ba88-4caa-8f16-465253f7599a}";
            };
            "@mozilla.org/streamconv;1?from=application/pdf&to=*/*": {
                createInstance<I_331 extends CiKeys>(req: CiType[I_331]): CiMap[I_331];
                name: "@mozilla.org/streamconv;1?from=application/pdf&to=*/*";
                number: "{d0c5195d-e798-49d4-b1d3-9324328b2291}";
            };
            "@mozilla.org/streamconv;1?from=application/pdf&to=text/html": {
                createInstance<I_332 extends CiKeys>(req: CiType[I_332]): CiMap[I_332];
                name: "@mozilla.org/streamconv;1?from=application/pdf&to=text/html";
                number: "{d0c5195d-e798-49d4-b1d3-9324328b2291}";
            };
            "@mozilla.org/streamconv;1?from=application/octet-stream&to=*/*": {
                createInstance<I_333 extends CiKeys>(req: CiType[I_333]): CiMap[I_333];
                name: "@mozilla.org/streamconv;1?from=application/octet-stream&to=*/*";
                number: "{d0c5195d-e798-49d4-b1d3-9324328b2291}";
            };
            "@mozilla.org/streamconv;1?from=application/octet-stream&to=text/html": {
                createInstance<I_334 extends CiKeys>(req: CiType[I_334]): CiMap[I_334];
                name: "@mozilla.org/streamconv;1?from=application/octet-stream&to=text/html";
                number: "{d0c5195d-e798-49d4-b1d3-9324328b2291}";
            };
            "@mozilla.org/network/protocol;1?name=moz-anno": {
                createInstance<I_335 extends CiKeys>(req: CiType[I_335]): CiMap[I_335];
                name: "@mozilla.org/network/protocol;1?name=moz-anno";
                number: "{e8b8bdb7-c96c-4d82-9c6f-2b3c585ec7ea}";
                typeName: "nsAnnoProtocolHandler";
                interfaceName: "nsIAnnoProtocolHandler";
            };
            "@mozilla.org/browser/favicon-service;1": {
                getService(): unknown;
                name: "@mozilla.org/browser/favicon-service;1";
                number: "{984e3259-9266-49cf-b605-60b022a00756}";
                typeName: "nsFaviconService";
                interfaceName: "nsIFaviconService";
            };
            "@mozilla.org/browser/nav-bookmarks-service;1": {
                getService(): unknown;
                name: "@mozilla.org/browser/nav-bookmarks-service;1";
                number: "{9de95a0c-39a4-4d64-9a53-17940dd7cabb}";
                typeName: "nsNavBookmarks";
                interfaceName: "nsINavBookmarks";
            };
            "@mozilla.org/browser/nav-history-service;1": {
                getService(): unknown;
                name: "@mozilla.org/browser/nav-history-service;1";
                number: "{88cecbb7-6c63-4b3b-8cd4-84f3b8228c69}";
                typeName: "nsNavHistory";
                interfaceName: "nsINavHistory";
            };
            "@mozilla.org/browser/tagging-service;1": {
                createInstance<I_336 extends CiKeys>(req: CiType[I_336]): CiMap[I_336];
                name: "@mozilla.org/browser/tagging-service;1";
                number: "{bbc23860-2553-479d-8b78-94d9038334f7}";
            };
            "@mozilla.org/autocomplete/search;1?name=places-tag-autocomplete": {
                createInstance<I_337 extends CiKeys>(req: CiType[I_337]): CiMap[I_337];
                name: "@mozilla.org/autocomplete/search;1?name=places-tag-autocomplete";
                number: "{1dcc23b0-d4cb-11dc-9ad6-479d56d89593}";
            };
            "@mozilla.org/places/expiration;1": {
                createInstance<I_338 extends CiKeys>(req: CiType[I_338]): CiMap[I_338];
                name: "@mozilla.org/places/expiration;1";
                number: "{705a423f-2f69-42f3-b9fe-1517e0dee56f}";
            };
            "@mozilla.org/places/databaseUtilsIdleMaintenance;1": {
                createInstance<I_339 extends CiKeys>(req: CiType[I_339]): CiMap[I_339];
                name: "@mozilla.org/places/databaseUtilsIdleMaintenance;1";
                number: "{d38926e0-29c1-11eb-8588-0800200c9a66}";
            };
            "@mozilla.org/network/protocol;1?name=page-icon": {
                getService(): unknown;
                name: "@mozilla.org/network/protocol;1?name=page-icon";
                number: "{60a1f7c6-4ff9-4a42-84d3-5a185faa6f32}";
                typeName: "mozilla::places::PageIconProtocolHandler";
                interfaceName: "places";
            };
            "@mozilla.org/browser/synced-bookmarks-merger;1": {
                createInstance<I_340 extends CiKeys>(req: CiType[I_340]): CiMap[I_340];
                name: "@mozilla.org/browser/synced-bookmarks-merger;1";
                number: "{7d47b41d-7cc5-4882-b293-d8f3f3b48b46}";
                typeName: "mozISyncedBookmarksMerger";
                interfaceName: "mozIISyncedBookmarksMerger";
            };
            "@mozilla.org/places/previews-helper;1": {
                createInstance<I_341 extends CiKeys>(req: CiType[I_341]): CiMap[I_341];
                name: "@mozilla.org/places/previews-helper;1";
                number: "{bd0a4d3b-ff26-4d4d-9a62-a513e1c1bf92}";
            };
            "@mozilla.org/places/frecency-recalculator;1": {
                createInstance<I_342 extends CiKeys>(req: CiType[I_342]): CiMap[I_342];
                name: "@mozilla.org/places/frecency-recalculator;1";
                number: "{1141fd31-4c1a-48eb-8f1a-2f05fad94085}";
            };
            "@mozilla.org/main-process-singleton;1": {
                createInstance<I_343 extends CiKeys>(req: CiType[I_343]): CiMap[I_343];
                name: "@mozilla.org/main-process-singleton;1";
                number: "{0636a680-45cb-11e4-916c-0800200c9a66}";
            };
            "@mozilla.org/processtools-service;1": {
                getService(): unknown;
                name: "@mozilla.org/processtools-service;1";
                number: "{79A13656-A472-4713-B0E1-AB39A15CF790}";
                typeName: "nsIProcessToolsService";
                interfaceName: "nsIIProcessToolsService";
            };
            "@mozilla.org/network/authprompt-adapter-factory;1": {
                createInstance<I_344 extends CiKeys>(req: CiType[I_344]): CiMap[I_344];
                name: "@mozilla.org/network/authprompt-adapter-factory;1";
                number: "{6e134924-6c3a-4d86-81ac-69432dd971dc}";
            };
            "@mozilla.org/jsreflect;1": {
                createInstance<I_345 extends CiKeys>(req: CiType[I_345]): CiMap[I_345];
                name: "@mozilla.org/jsreflect;1";
                number: "{1a817186-357a-47cd-8aea-2850d60e959e}";
                typeName: "mozilla::reflect::Module";
                interfaceName: "reflect";
            };
            "@mozilla.org/rfp-service;1": {
                getService(): nsIRFPServiceType;
                name: "@mozilla.org/rfp-service;1";
                number: "{20093b2e-d5d5-4ce0-8355-96b8d2dc7ff5}";
                typeName: "mozilla::nsRFPService";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/fingerprinting-override;1": {
                createInstance<I_346 extends CiKeys>(req: CiType[I_346]): CiMap[I_346];
                name: "@mozilla.org/fingerprinting-override;1";
                number: "{07f45442-1806-44be-9230-12eb79de9bac}";
            };
            "@mozilla.org/fingerprinting-webcompat-service;1": {
                getService(): unknown;
                name: "@mozilla.org/fingerprinting-webcompat-service;1";
                number: "{e7b1da06-2594-4670-aea4-131070baca4c}";
            };
            "@mozilla.org/satchel/form-fill-controller;1": {
                createInstance<I_347 extends CiKeys>(req: CiType[I_347]): CiMap[I_347];
                name: "@mozilla.org/satchel/form-fill-controller;1";
                number: "{895db6c7-dbdf-40ea-9f64-b175033243dc}";
                typeName: "nsFormFillController";
                interfaceName: "nsIFormFillController";
            };
            "@mozilla.org/autocomplete/search;1?name=form-history": {
                createInstance<I_348 extends CiKeys>(req: CiType[I_348]): CiMap[I_348];
                name: "@mozilla.org/autocomplete/search;1?name=form-history";
                number: "{895db6c7-dbdf-40ea-9f64-b175033243dc}";
                typeName: "nsFormFillController";
                interfaceName: "nsIFormFillController";
            };
            "@mozilla.org/satchel/form-autocomplete;1": {
                createInstance<I_349 extends CiKeys>(req: CiType[I_349]): CiMap[I_349];
                name: "@mozilla.org/satchel/form-autocomplete;1";
                number: "{c11c21b2-71c9-4f87-a0f8-5e13f50495fd}";
            };
            "@mozilla.org/satchel/form-history-startup;1": {
                createInstance<I_350 extends CiKeys>(req: CiType[I_350]): CiMap[I_350];
                name: "@mozilla.org/satchel/form-history-startup;1";
                number: "{3a0012eb-007f-4bb8-aa81-a07385f77a25}";
            };
            "@mozilla.org/browser/search-service;1": {
                createInstance<I_351 extends CiKeys>(req: CiType[I_351]): CiMap[I_351];
                name: "@mozilla.org/browser/search-service;1";
                number: "{7319788a-fe93-4db3-9f39-818cf08f4256}";
            };
            "@mozilla.org/autocomplete/search;1?name=search-autocomplete": {
                createInstance<I_352 extends CiKeys>(req: CiType[I_352]): CiMap[I_352];
                name: "@mozilla.org/autocomplete/search;1?name=search-autocomplete";
                number: "{aa892eb4-ffbf-477d-9f9a-06c995ae9f27}";
            };
            "@mozilla.org/base/telemetry-startup;1": {
                createInstance<I_353 extends CiKeys>(req: CiType[I_353]): CiMap[I_353];
                name: "@mozilla.org/base/telemetry-startup;1";
                number: "{117b219f-92fe-4bd2-a21b-95a342a9d474}";
            };
            "@mozilla.org/base/telemetry-controller-content;1": {
                createInstance<I_354 extends CiKeys>(req: CiType[I_354]): CiMap[I_354];
                name: "@mozilla.org/base/telemetry-controller-content;1";
                number: "{efc1415c-5708-41cc-8226-82bf1d3bee16}";
            };
            "@mozilla.org/base/telemetry;1": {
                getService(): nsITelemetryType;
                name: "@mozilla.org/base/telemetry;1";
                number: "{aea477f2-b3a2-469c-aa29-0a82d132b829}";
                typeName: "nsITelemetry";
                interfaceName: "nsIITelemetry";
            };
            "@mozilla.org/base/daptelemetry;1": {
                createInstance<I_355 extends CiKeys>(req: CiType[I_355]): CiMap[I_355];
                name: "@mozilla.org/base/daptelemetry;1";
                number: "{58a4c579-d2dd-46b7-9c3b-6881a1c36c6a}";
                typeName: "mozilla::DAPTelemetry";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/toolkit/shutdown-terminator-telemetry;1": {
                createInstance<I_356 extends CiKeys>(req: CiType[I_356]): CiMap[I_356];
                name: "@mozilla.org/toolkit/shutdown-terminator-telemetry;1";
                number: "{3f78ada1-cba2-442a-82dd-d5fb300ddea7}";
            };
            "@mozilla.org/thumbnails/pagethumbs-service;1": {
                createInstance<I_357 extends CiKeys>(req: CiType[I_357]): CiMap[I_357];
                name: "@mozilla.org/thumbnails/pagethumbs-service;1";
                number: "{97943eec-0e48-49ef-b7b7-cf4aa0109bb6}";
            };
            "@mozilla.org/updates/timer-manager;1": {
                createInstance<I_358 extends CiKeys>(req: CiType[I_358]): CiMap[I_358];
                name: "@mozilla.org/updates/timer-manager;1";
                number: "{B322A5C0-A419-484E-96BA-D7182163899F}";
            };
            "@mozilla.org/embedcomp/default-tooltiptextprovider;1": {
                createInstance<I_359 extends CiKeys>(req: CiType[I_359]): CiMap[I_359];
                name: "@mozilla.org/embedcomp/default-tooltiptextprovider;1";
                number: "{f376627f-0bbc-47b8-887e-fc92574cc91f}";
            };
            "@mozilla.org/url-classifier/jslib;1": {
                createInstance<I_360 extends CiKeys>(req: CiType[I_360]): CiMap[I_360];
                name: "@mozilla.org/url-classifier/jslib;1";
                number: "{26a4a019-2827-4a89-a85c-5931a678823a}";
            };
            "@mozilla.org/url-classifier/listmanager;1": {
                createInstance<I_361 extends CiKeys>(req: CiType[I_361]): CiMap[I_361];
                name: "@mozilla.org/url-classifier/listmanager;1";
                number: "{ca168834-cc00-48f9-b83c-fd018e58cae3}";
            };
            "@mozilla.org/url-classifier/hashcompleter;1": {
                createInstance<I_362 extends CiKeys>(req: CiType[I_362]): CiMap[I_362];
                name: "@mozilla.org/url-classifier/hashcompleter;1";
                number: "{9111de73-9322-4bfc-8b65-2b727f3e6ec8}";
            };
            "@mozilla.org/url-classifier/list-service;1": {
                createInstance<I_363 extends CiKeys>(req: CiType[I_363]): CiMap[I_363];
                name: "@mozilla.org/url-classifier/list-service;1";
                number: "{1980624c-c50b-4b46-a91c-dfaba7792706}";
            };
            "@mozilla.org/toolkit/URLFormatterService;1": {
                createInstance<I_364 extends CiKeys>(req: CiType[I_364]): CiMap[I_364];
                name: "@mozilla.org/toolkit/URLFormatterService;1";
                number: "{e6156350-2be8-11db-a98b-0800200c9a66}";
            };
            "@mozilla.org/streamconv;1?from=application/vnd.mozilla.webext.unlocalized&to=text/css": {
                createInstance<I_365 extends CiKeys>(req: CiType[I_365]): CiMap[I_365];
                name: "@mozilla.org/streamconv;1?from=application/vnd.mozilla.webext.unlocalized&to=text/css";
                number: "{ded150e3-c92e-4077-a396-0dba9953e39f}";
            };
            "@mozilla.org/content-viewers/http-index-format": {
                createInstance<I_366 extends CiKeys>(req: CiType[I_366]): CiMap[I_366];
                name: "@mozilla.org/content-viewers/http-index-format";
                number: "{742ad274-34c5-43d1-a8b7-293eaf8962d6}";
            };
            "@mozilla.org/xul/xulstore;1": {
                createInstance<I_367 extends CiKeys>(req: CiType[I_367]): CiMap[I_367];
                name: "@mozilla.org/xul/xulstore;1";
                number: "{6f46b6f4-c8b1-4bd4-a4fa-9ebbed0753ea}";
            };
            "@mozilla.org/helperapplauncherdialog;1": {
                createInstance<I_368 extends CiKeys>(req: CiType[I_368]): CiMap[I_368];
                name: "@mozilla.org/helperapplauncherdialog;1";
                number: "{F68578EB-6EC2-4169-AE19-8C6243F0ABE1}";
            };
            "@mozilla.org/extensions/blocklist;1": {
                createInstance<I_369 extends CiKeys>(req: CiType[I_369]): CiMap[I_369];
                name: "@mozilla.org/extensions/blocklist;1";
                number: "{66354bc9-7ed1-4692-ae1d-8da97d6b205e}";
            };
            "@mozilla.org/addons/integration;1": {
                createInstance<I_370 extends CiKeys>(req: CiType[I_370]): CiMap[I_370];
                name: "@mozilla.org/addons/integration;1";
                number: "{4399533d-08d1-458c-a87a-235f74451cfa}";
            };
            "@mozilla.org/addons/installtrigger;1": {
                createInstance<I_371 extends CiKeys>(req: CiType[I_371]): CiMap[I_371];
                name: "@mozilla.org/addons/installtrigger;1";
                number: "{9df8ef2b-94da-45c9-ab9f-132eb55fddf1}";
            };
            "@mozilla.org/addon-web-api/manager;1": {
                createInstance<I_372 extends CiKeys>(req: CiType[I_372]): CiMap[I_372];
                name: "@mozilla.org/addon-web-api/manager;1";
                number: "{8866d8e3-4ea5-48b7-a891-13ba0ac15235}";
            };
            "@mozilla.org/uriloader/content-handler;1?type=application/x-xpinstall": {
                createInstance<I_373 extends CiKeys>(req: CiType[I_373]): CiMap[I_373];
                name: "@mozilla.org/uriloader/content-handler;1?type=application/x-xpinstall";
                number: "{7beb3ba8-6ec3-41b4-b67c-da89b8518922}";
            };
            "@mozilla.org/content-dispatch-chooser;1": {
                createInstance<I_374 extends CiKeys>(req: CiType[I_374]): CiMap[I_374];
                name: "@mozilla.org/content-dispatch-chooser;1";
                number: "{e35d5067-95bc-4029-8432-e8f1e431148d}";
            };
            "@mozilla.org/updates/update-service;1": {
                getService(): unknown;
                name: "@mozilla.org/updates/update-service;1";
                number: "{B3C290A6-3943-4B89-8BBE-C01EB7B3B311}";
            };
            "@mozilla.org/updates/update-manager;1": {
                getService(): unknown;
                name: "@mozilla.org/updates/update-manager;1";
                number: "{093C2356-4843-4C65-8709-D7DBCBBE7DFB}";
            };
            "@mozilla.org/updates/update-checker;1": {
                getService(): unknown;
                name: "@mozilla.org/updates/update-checker;1";
                number: "{898CDC9B-E43F-422F-9CC4-2F6291B415A3}";
            };
            "@mozilla.org/updates/update-service-stub;1": {
                getService(): unknown;
                name: "@mozilla.org/updates/update-service-stub;1";
                number: "{e43b0010-04ba-4da6-b523-1f92580bc150}";
            };
            "@mozilla.org/system-proxy-settings;1": {
                createInstance<I_375 extends CiKeys>(req: CiType[I_375]): CiMap[I_375];
                name: "@mozilla.org/system-proxy-settings;1";
                number: "{f01f0060-3708-478e-b935-3ec38be294b8}";
                typeName: "nsAndroidSystemProxySettings";
                interfaceName: "nsIAndroidSystemProxySettings";
            };
            "@mozilla.org/gio-service;1": {
                createInstance<I_376 extends CiKeys>(req: CiType[I_376]): CiMap[I_376];
                name: "@mozilla.org/gio-service;1";
                number: "{e3a1f3c9-3ae1-4b40-a5e0-7b457fc9a9ad}";
                typeName: "nsGIOService";
                interfaceName: "nsIGIOService";
            };
            "@mozilla.org/gsettings-service;1": {
                createInstance<I_377 extends CiKeys>(req: CiType[I_377]): CiMap[I_377];
                name: "@mozilla.org/gsettings-service;1";
                number: "{bfd4a9d8-d886-4161-81ef-8868da114170}";
                typeName: "nsGSettingsService";
                interfaceName: "nsIGSettingsService";
            };
            "@mozilla.org/system-alerts-service;1": {
                createInstance<I_378 extends CiKeys>(req: CiType[I_378]): CiMap[I_378];
                name: "@mozilla.org/system-alerts-service;1";
                number: "{84e11f80-ca55-11dd-ad8b-0800200c9a66}";
                typeName: "nsSystemAlertsService";
                interfaceName: "nsISystemAlertsService";
            };
            "@mozilla.org/dhcp-client;1": {
                createInstance<I_379 extends CiKeys>(req: CiType[I_379]): CiMap[I_379];
                name: "@mozilla.org/dhcp-client;1";
                number: "{febf1d69-4d7d-4891-9524-045ad18b5592}";
                typeName: "mozilla::toolkit::system::windowsDHCPClient::nsWindowsDHCPClient";
                interfaceName: "windowsDHCPClient";
            };
            "@mozilla.org/windows-package-manager;1": {
                createInstance<I_380 extends CiKeys>(req: CiType[I_380]): CiMap[I_380];
                name: "@mozilla.org/windows-package-manager;1";
                number: "{c75da378-521f-11ec-84cc-336cd3921c24}";
                typeName: "mozilla::toolkit::system::nsWindowsPackageManager";
                interfaceName: "system";
            };
            "@mozilla.org/xre/app-info;1": {
                createInstance<I_381 extends CiKeys>(req: CiType[I_381]): CiMap[I_381];
                name: "@mozilla.org/xre/app-info;1";
                number: "{95d89e3e-a169-41a3-8e56-719978e15b12}";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/xre/runtime;1": {
                createInstance<I_382 extends CiKeys>(req: CiType[I_382]): CiMap[I_382];
                name: "@mozilla.org/xre/runtime;1";
                number: "{95d89e3e-a169-41a3-8e56-719978e15b12}";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/toolkit/crash-reporter;1": {
                createInstance<I_383 extends CiKeys>(req: CiType[I_383]): CiMap[I_383];
                name: "@mozilla.org/toolkit/crash-reporter;1";
                number: "{95d89e3e-a169-41a3-8e56-719978e15b12}";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/embedcomp/rangefind;1": {
                createInstance<I_384 extends CiKeys>(req: CiType[I_384]): CiMap[I_384];
                name: "@mozilla.org/embedcomp/rangefind;1";
                number: "{471f4944-1dd2-11b2-87ac-90be0a51d609}";
                typeName: "nsFind";
                interfaceName: "nsIFind";
            };
            "@mozilla.org/embedding/browser/nsWebBrowserPersist;1": {
                createInstance<I_385 extends CiKeys>(req: CiType[I_385]): CiMap[I_385];
                name: "@mozilla.org/embedding/browser/nsWebBrowserPersist;1";
                number: "{7e677795-c582-4cd1-9e8d-8271b3474d2a}";
                typeName: "nsWebBrowserPersist";
                interfaceName: "nsIWebBrowserPersist";
            };
            "@mozilla.org/embedcomp/window-watcher;1": {
                createInstance<I_386 extends CiKeys>(req: CiType[I_386]): CiMap[I_386];
                name: "@mozilla.org/embedcomp/window-watcher;1";
                number: "{a21bfa01-f349-4394-a84c-8de5cf0737d0}";
                typeName: "nsWindowWatcher";
                interfaceName: "nsIWindowWatcher";
            };
            "@mozilla.org/xre/directory-provider;1": {
                getService(): unknown;
                name: "@mozilla.org/xre/directory-provider;1";
                number: "{5573967d-f6cf-4c63-8e0e-9ac06e04d62b}";
                typeName: "nsXREDirProvider";
                interfaceName: "nsIXREDirProvider";
            };
            "@mozilla.org/embedcomp/dialogparam;1": {
                createInstance<I_387 extends CiKeys>(req: CiType[I_387]): CiMap[I_387];
                name: "@mozilla.org/embedcomp/dialogparam;1";
                number: "{4e4aae11-8901-46cc-8217-dad7c5415873}";
                typeName: "nsDialogParamBlock";
                interfaceName: "nsIDialogParamBlock";
            };
            "@mozilla.org/toolkit/profile-service;1": {
                getService(): unknown;
                name: "@mozilla.org/toolkit/profile-service;1";
                number: "{5f5e59ce-27bc-47eb-9d1f-b09ca9049836}";
                typeName: "nsToolkitProfileService";
                interfaceName: "nsIToolkitProfileService";
            };
            "@mozilla.org/tools/code-coverage;1": {
                createInstance<I_388 extends CiKeys>(req: CiType[I_388]): CiMap[I_388];
                name: "@mozilla.org/tools/code-coverage;1";
                number: "{93576af0-a62f-4c88-bc12-f1855d4e0173}";
                typeName: "nsCodeCoverage";
                interfaceName: "nsICodeCoverage";
            };
            "@mozilla.org/tools/profiler;1": {
                createInstance<I_389 extends CiKeys>(req: CiType[I_389]): CiMap[I_389];
                name: "@mozilla.org/tools/profiler;1";
                number: "{25db9b8e-8123-4de1-b66d-8bbbedf2cdf4}";
                typeName: "nsProfiler";
                interfaceName: "nsIProfiler";
            };
            "@mozilla.org/uriloader/handler-service-parent;1": {
                createInstance<I_390 extends CiKeys>(req: CiType[I_390]): CiMap[I_390];
                name: "@mozilla.org/uriloader/handler-service-parent;1";
                number: "{220cc253-b60f-41f6-b9cf-fdcb325f970f}";
            };
            "@mozilla.org/uriloader/web-handler-app;1": {
                createInstance<I_391 extends CiKeys>(req: CiType[I_391]): CiMap[I_391];
                name: "@mozilla.org/uriloader/web-handler-app;1";
                number: "{8b1ae382-51a9-4972-b930-56977a57919d}";
            };
            "@mozilla.org/widget/appshell/android;1": {
                createInstance<I_392 extends CiKeys>(req: CiType[I_392]): CiMap[I_392];
                name: "@mozilla.org/widget/appshell/android;1";
                number: "{2d96b3df-c051-11d1-a827-0040959a28c9}";
                interfaceName: "nsIAppShellConstructor";
            };
            "@mozilla.org/gfx/parent/screenmanager;1": {
                getService(): unknown;
                name: "@mozilla.org/gfx/parent/screenmanager;1";
                number: "{d594094c-28b6-466b-97d7-66c039c3dea9}";
                typeName: "mozilla::widget::ScreenManager";
                interfaceName: "widget";
            };
            "@mozilla.org/widget/useridleservice;1": {
                getService(): unknown;
                name: "@mozilla.org/widget/useridleservice;1";
                number: "{6987230e-0098-4e78-bc5f-1493ee7519fa}";
                typeName: "nsUserIdleServiceAndroid";
                interfaceName: "nsIUserIdleServiceAndroid";
            };
            "@mozilla.org/widget/transferable;1": {
                createInstance<I_393 extends CiKeys>(req: CiType[I_393]): CiMap[I_393];
                name: "@mozilla.org/widget/transferable;1";
                number: "{8b5314bc-db01-11d2-96ce-0060b0fb9956}";
                typeName: "nsTransferable";
                interfaceName: "nsITransferable";
            };
            "@mozilla.org/widget/parent/clipboard;1": {
                createInstance<I_394 extends CiKeys>(req: CiType[I_394]): CiMap[I_394];
                name: "@mozilla.org/widget/parent/clipboard;1";
                number: "{9d5adbb9-1da4-4162-acba-b373fe3ae837}";
                typeName: "nsClipboard";
                interfaceName: "nsIClipboard";
            };
            "@mozilla.org/widget/clipboardhelper;1": {
                createInstance<I_395 extends CiKeys>(req: CiType[I_395]): CiMap[I_395];
                name: "@mozilla.org/widget/clipboardhelper;1";
                number: "{77221d5a-1dd2-11b2-8c69-c710f15d2ed5}";
                typeName: "nsClipboardHelper";
                interfaceName: "nsIClipboardHelper";
            };
            "@mozilla.org/gfx/printsettings-service;1": {
                createInstance<I_396 extends CiKeys>(req: CiType[I_396]): CiMap[I_396];
                name: "@mozilla.org/gfx/printsettings-service;1";
                number: "{841387c8-72e6-484b-9296-bf6eea80d58a}";
                typeName: "nsPrintSettingsServiceAndroid";
                interfaceName: "nsIPrintSettingsServiceAndroid";
            };
            "@mozilla.org/gfx/devicecontextspec;1": {
                createInstance<I_397 extends CiKeys>(req: CiType[I_397]): CiMap[I_397];
                name: "@mozilla.org/gfx/devicecontextspec;1";
                number: "{d3f69889-e13a-4321-980c-a39332e21f34}";
                typeName: "nsDeviceContextSpecAndroid";
                interfaceName: "nsIDeviceContextSpecAndroid";
            };
            "@mozilla.org/widget/htmlformatconverter;1": {
                createInstance<I_398 extends CiKeys>(req: CiType[I_398]): CiMap[I_398];
                name: "@mozilla.org/widget/htmlformatconverter;1";
                number: "{948a0023-e3a7-11d2-96cf-0060b0fb9956}";
                typeName: "nsHTMLFormatConverter";
                interfaceName: "nsIHTMLFormatConverter";
            };
            "@mozilla.org/gfx/info;1": {
                createInstance<I_399 extends CiKeys>(req: CiType[I_399]): CiMap[I_399];
                name: "@mozilla.org/gfx/info;1";
                number: "{d755a760-9f27-11df-0800-200c9a664242}";
                typeName: "mozilla::widget::GfxInfo";
                interfaceName: "widget";
            };
            "@mozilla.org/android/bridge;1": {
                createInstance<I_400 extends CiKeys>(req: CiType[I_400]): CiMap[I_400];
                name: "@mozilla.org/android/bridge;1";
                number: "{0fe2321d-ebd9-467d-a743-03a68d40599e}";
                typeName: "nsAndroidBridge";
                interfaceName: "nsIAndroidBridge";
            };
            "@mozilla.org/widget/appshell/mac;1": {
                createInstance<I_401 extends CiKeys>(req: CiType[I_401]): CiMap[I_401];
                name: "@mozilla.org/widget/appshell/mac;1";
                number: "{2d96b3df-c051-11d1-a827-0040959a28c9}";
                interfaceName: "nsIAppShellConstructor";
            };
            "@mozilla.org/parent/sound;1": {
                createInstance<I_402 extends CiKeys>(req: CiType[I_402]): CiMap[I_402];
                name: "@mozilla.org/parent/sound;1";
                number: "{15cc80a9-5329-4fcb-9a0b-c6cf1440ae51}";
                typeName: "nsSound";
                interfaceName: "nsISound";
            };
            "@mozilla.org/widget/parent/dragservice;1": {
                createInstance<I_403 extends CiKeys>(req: CiType[I_403]): CiMap[I_403];
                name: "@mozilla.org/widget/parent/dragservice;1";
                number: "{9a155bb2-2b67-45de-83e3-13a9dacf8336}";
                typeName: "nsDragService";
                interfaceName: "nsIDragService";
            };
            "@mozilla.org/gfx/printerlist;1": {
                createInstance<I_404 extends CiKeys>(req: CiType[I_404]): CiMap[I_404];
                name: "@mozilla.org/gfx/printerlist;1";
                number: "{a6cf9129-15b3-11d2-932e-00805f8add32}";
                typeName: "nsPrinterListCUPS";
                interfaceName: "nsIPrinterListCUPS";
            };
            "@mozilla.org/widget/printdialog-service;1": {
                createInstance<I_405 extends CiKeys>(req: CiType[I_405]): CiMap[I_405];
                name: "@mozilla.org/widget/printdialog-service;1";
                number: "{06beec76-a183-4d9f-85dd-085f26da565a}";
                typeName: "nsPrintDialogServiceX";
                interfaceName: "nsIPrintDialogServiceX";
            };
            "@mozilla.org/widget/macdocksupport;1": {
                createInstance<I_406 extends CiKeys>(req: CiType[I_406]): CiMap[I_406];
                name: "@mozilla.org/widget/macdocksupport;1";
                number: "{2451baed-8dc3-46d9-9e30-96e1baa03666}";
                typeName: "nsMacDockSupport";
                interfaceName: "nsIMacDockSupport";
            };
            "@mozilla.org/widget/macfinderprogress;1": {
                createInstance<I_407 extends CiKeys>(req: CiType[I_407]): CiMap[I_407];
                name: "@mozilla.org/widget/macfinderprogress;1";
                number: "{74ea4101-a5bb-49bc-9984-66da8b225a37}";
                typeName: "nsMacFinderProgress";
                interfaceName: "nsIMacFinderProgress";
            };
            "@mozilla.org/widget/macsharingservice;1": {
                createInstance<I_408 extends CiKeys>(req: CiType[I_408]): CiMap[I_408];
                name: "@mozilla.org/widget/macsharingservice;1";
                number: "{de59fe1a-46c8-490f-b04d-34545acb06c9}";
                typeName: "nsMacSharingService";
                interfaceName: "nsIMacSharingService";
            };
            "@mozilla.org/widget/macuseractivityupdater;1": {
                createInstance<I_409 extends CiKeys>(req: CiType[I_409]): CiMap[I_409];
                name: "@mozilla.org/widget/macuseractivityupdater;1";
                number: "{29046c8f-cba6-4ffa-9141-1685e96c4ea0}";
                typeName: "nsMacUserActivityUpdater";
                interfaceName: "nsIMacUserActivityUpdater";
            };
            "@mozilla.org/widget/mac-web-app-utils;1": {
                createInstance<I_410 extends CiKeys>(req: CiType[I_410]): CiMap[I_410];
                name: "@mozilla.org/widget/mac-web-app-utils;1";
                number: "{e9096367-ddd9-45e4-b762-49c0c18b7119}";
                typeName: "nsMacWebAppUtils";
                interfaceName: "nsIMacWebAppUtils";
            };
            "@mozilla.org/widget/standalonenativemenu;1": {
                createInstance<I_411 extends CiKeys>(req: CiType[I_411]): CiMap[I_411];
                name: "@mozilla.org/widget/standalonenativemenu;1";
                number: "{1f39ae50-b6a0-4b37-90f4-60af614193d8}";
                typeName: "nsStandaloneNativeMenu";
                interfaceName: "nsIStandaloneNativeMenu";
            };
            "@mozilla.org/widget/systemstatusbar;1": {
                createInstance<I_412 extends CiKeys>(req: CiType[I_412]): CiMap[I_412];
                name: "@mozilla.org/widget/systemstatusbar;1";
                number: "{b6e1a890-b2b8-4883-a65f-9476f6185313}";
                typeName: "nsSystemStatusBarCocoa";
                interfaceName: "nsISystemStatusBarCocoa";
            };
            "@mozilla.org/widget/touchbarupdater;1": {
                createInstance<I_413 extends CiKeys>(req: CiType[I_413]): CiMap[I_413];
                name: "@mozilla.org/widget/touchbarupdater;1";
                number: "{38f396e2-93c9-4a77-aaf7-2d50b9962186}";
                typeName: "nsTouchBarUpdater";
                interfaceName: "nsITouchBarUpdater";
            };
            "@mozilla.org/widget/clipboard;1": {
                createInstance<I_414 extends CiKeys>(req: CiType[I_414]): CiMap[I_414];
                name: "@mozilla.org/widget/clipboard;1";
                number: "{8b5314ba-db01-11d2-96ce-0060b0fb9956}";
            };
            "@mozilla.org/widget/content/clipboard;1": {
                createInstance<I_415 extends CiKeys>(req: CiType[I_415]): CiMap[I_415];
                name: "@mozilla.org/widget/content/clipboard;1";
                number: "{c0ed2a75-96f8-4166-91d4-2fe8774448dc}";
                typeName: "nsClipboardProxy";
                interfaceName: "nsIClipboardProxy";
            };
            "@mozilla.org/colorpicker;1": {
                createInstance<I_416 extends CiKeys>(req: CiType[I_416]): CiMap[I_416];
                name: "@mozilla.org/colorpicker;1";
                number: "{0f872c8c-3ee6-46bd-92a2-69652c6b474e}";
            };
            "@mozilla.org/content/colorpicker;1": {
                createInstance<I_417 extends CiKeys>(req: CiType[I_417]): CiMap[I_417];
                name: "@mozilla.org/content/colorpicker;1";
                number: "{11a77259-9d16-4386-8ac8-94338ee22f78}";
                typeName: "nsColorPickerProxy";
                interfaceName: "nsIColorPickerProxy";
            };
            "@mozilla.org/widget/dragservice;1": {
                createInstance<I_418 extends CiKeys>(req: CiType[I_418]): CiMap[I_418];
                name: "@mozilla.org/widget/dragservice;1";
                number: "{8b5314bb-db01-11d2-96ce-0060b0fb9956}";
            };
            "@mozilla.org/widget/content/dragservice;1": {
                createInstance<I_419 extends CiKeys>(req: CiType[I_419]): CiMap[I_419];
                name: "@mozilla.org/widget/content/dragservice;1";
                number: "{28be18ae-73ee-494f-8c6d-5d14b7c998c7}";
                typeName: "nsDragServiceProxy";
                interfaceName: "nsIDragServiceProxy";
            };
            "@mozilla.org/filepicker;1": {
                createInstance<I_420 extends CiKeys>(req: CiType[I_420]): CiMap[I_420];
                name: "@mozilla.org/filepicker;1";
                number: "{bd57cee8-1dd1-11b2-9fe7-95cf4709aea3}";
            };
            "@mozilla.org/content/filepicker;1": {
                createInstance<I_421 extends CiKeys>(req: CiType[I_421]): CiMap[I_421];
                name: "@mozilla.org/content/filepicker;1";
                number: "{40fd47f2-463a-4e4a-a33f-27eb148bfee4}";
                typeName: "nsFilePickerProxy";
                interfaceName: "nsIFilePickerProxy";
            };
            "@mozilla.org/sound;1": {
                getService(): unknown;
                name: "@mozilla.org/sound;1";
                number: "{b148eed2-236d-11d3-b35c-00a0cc3c1cde}";
            };
            "@mozilla.org/content/sound;1": {
                createInstance<I_422 extends CiKeys>(req: CiType[I_422]): CiMap[I_422];
                name: "@mozilla.org/content/sound;1";
                number: "{b02c2470-6e5a-4865-a202-8b5ebae52632}";
                typeName: "nsSoundProxy";
                interfaceName: "nsISoundProxy";
            };
            "@mozilla.org/gfx/screenmanager;1": {
                getService(): unknown;
                name: "@mozilla.org/gfx/screenmanager;1";
                number: "{c401eb80-f9ea-11d3-bb6f-e732b73ebe7c}";
            };
            "@mozilla.org/gfx/content/screenmanager;1": {
                getService(): unknown;
                name: "@mozilla.org/gfx/content/screenmanager;1";
                number: "{b2cdd51c-4277-417b-a931-08306c7814c3}";
                typeName: "mozilla::widget::ScreenManager";
                interfaceName: "widget";
            };
            "@mozilla.org/widget/appshell/gtk;1": {
                createInstance<I_423 extends CiKeys>(req: CiType[I_423]): CiMap[I_423];
                name: "@mozilla.org/widget/appshell/gtk;1";
                number: "{2d96b3df-c051-11d1-a827-0040959a28c9}";
                interfaceName: "nsIAppShellConstructor";
            };
            "@mozilla.org/widget/taskbarprogress/gtk;1": {
                createInstance<I_424 extends CiKeys>(req: CiType[I_424]): CiMap[I_424];
                name: "@mozilla.org/widget/taskbarprogress/gtk;1";
                number: "{a9339876-0027-430f-b953-84c9c11c2da3}";
                typeName: "TaskbarProgress";
                interfaceName: "TaskbarProgress";
            };
            "@mozilla.org/applicationchooser;1": {
                createInstance<I_425 extends CiKeys>(req: CiType[I_425]): CiMap[I_425];
                name: "@mozilla.org/applicationchooser;1";
                number: "{e221df9b-3d66-4045-9a66-5720949f8d10}";
                typeName: "nsApplicationChooser";
                interfaceName: "nsIApplicationChooser";
            };
            "@mozilla.org/widget/appshell/win;1": {
                createInstance<I_426 extends CiKeys>(req: CiType[I_426]): CiMap[I_426];
                name: "@mozilla.org/widget/appshell/win;1";
                number: "{2d96b3df-c051-11d1-a827-0040959a28c9}";
                interfaceName: "nsIAppShellConstructor";
            };
            "@mozilla.org/windows-taskbar;1": {
                createInstance<I_427 extends CiKeys>(req: CiType[I_427]): CiMap[I_427];
                name: "@mozilla.org/windows-taskbar;1";
                number: "{b8e5bc54-a22f-4eb2-b061-24cb6d19c15f}";
                typeName: "mozilla::widget::WinTaskbar";
                interfaceName: "widget";
            };
            "@mozilla.org/windows-jumplistbuilder;1": {
                createInstance<I_428 extends CiKeys>(req: CiType[I_428]): CiMap[I_428];
                name: "@mozilla.org/windows-jumplistbuilder;1";
                number: "{73a5946f-608d-454f-9d33-0b8f8c7294b6}";
                typeName: "mozilla::widget::JumpListBuilder";
                interfaceName: "widget";
            };
            "@mozilla.org/windows-jumplistitem;1": {
                createInstance<I_429 extends CiKeys>(req: CiType[I_429]): CiMap[I_429];
                name: "@mozilla.org/windows-jumplistitem;1";
                number: "{2b9a1f2c-27ce-45b6-8d4e-755d0e34f8db}";
                typeName: "mozilla::widget::JumpListItem";
                interfaceName: "widget";
            };
            "@mozilla.org/windows-jumplistseparator;1": {
                createInstance<I_430 extends CiKeys>(req: CiType[I_430]): CiMap[I_430];
                name: "@mozilla.org/windows-jumplistseparator;1";
                number: "{21f1f13b-f75a-42ad-867a-d91ad694447e}";
                typeName: "mozilla::widget::JumpListSeparator";
                interfaceName: "widget";
            };
            "@mozilla.org/windows-jumplistlink;1": {
                createInstance<I_431 extends CiKeys>(req: CiType[I_431]): CiMap[I_431];
                name: "@mozilla.org/windows-jumplistlink;1";
                number: "{f72c5dc4-5a12-47be-be28-ab105f33b08f}";
                typeName: "mozilla::widget::JumpListLink";
                interfaceName: "widget";
            };
            "@mozilla.org/windows-jumplistshortcut;1": {
                createInstance<I_432 extends CiKeys>(req: CiType[I_432]): CiMap[I_432];
                name: "@mozilla.org/windows-jumplistshortcut;1";
                number: "{b16656b2-5187-498f-abf4-56346126bfdb}";
                typeName: "mozilla::widget::JumpListShortcut";
                interfaceName: "widget";
            };
            "@mozilla.org/windows-ui-utils;1": {
                createInstance<I_433 extends CiKeys>(req: CiType[I_433]): CiMap[I_433];
                name: "@mozilla.org/windows-ui-utils;1";
                number: "{e04a55e8-fee3-4ea2-a98b-41d2621adc3c}";
                typeName: "WindowsUIUtils";
                interfaceName: "WindowsUIUtils";
            };
            "@mozilla.org/widget/taskbar-preview-callback;1": {
                createInstance<I_434 extends CiKeys>(req: CiType[I_434]): CiMap[I_434];
                name: "@mozilla.org/widget/taskbar-preview-callback;1";
                number: "{9a0cb62b-d638-4faf-9588-ae96f5e29093}";
                typeName: "mozilla::widget::TaskbarPreviewCallback";
                interfaceName: "widget";
            };
            "@mozilla.org/xpcom/debug;1": {
                createInstance<I_435 extends CiKeys>(req: CiType[I_435]): CiMap[I_435];
                name: "@mozilla.org/xpcom/debug;1";
                number: "{cb6cdb94-e417-4601-b4a5-f991bf41453d}";
                interfaceName: "nsIDebugImpl";
            };
            "@mozilla.org/xpcom/memory-watcher;1": {
                getService(): unknown;
                name: "@mozilla.org/xpcom/memory-watcher;1";
                number: "{68bf4793-5204-45cf-9ee2-69adffbc2e38}";
                typeName: "mozilla::nsAvailableMemoryWatcherBase";
                interfaceName: "mozIilla";
            };
            "@mozilla.org/binaryinputstream;1": {
                createInstance<I_436 extends CiKeys>(req: CiType[I_436]): CiMap[I_436];
                name: "@mozilla.org/binaryinputstream;1";
                number: "{c521a612-2aad-46db-b6ab-3b821fb150b1}";
                typeName: "nsBinaryInputStream";
                interfaceName: "nsIBinaryInputStream";
            };
            "@mozilla.org/binaryoutputstream;1": {
                createInstance<I_437 extends CiKeys>(req: CiType[I_437]): CiMap[I_437];
                name: "@mozilla.org/binaryoutputstream;1";
                number: "{86c37b9a-74e7-4672-844e-6e7dd83ba484}";
                typeName: "nsBinaryOutputStream";
                interfaceName: "nsIBinaryOutputStream";
            };
            "@mozilla.org/network/protocol;1?name=chrome": {
                createInstance<I_438 extends CiKeys>(req: CiType[I_438]): CiMap[I_438];
                name: "@mozilla.org/network/protocol;1?name=chrome";
                number: "{61ba33c0-3031-11d3-8cd0-0060b0fc14a3}";
                typeName: "nsChromeProtocolHandler";
                interfaceName: "nsIChromeProtocolHandler";
            };
            "@mozilla.org/chrome/chrome-registry;1": {
                getService(): unknown;
                name: "@mozilla.org/chrome/chrome-registry;1";
                number: "{47049e42-1d87-482a-984d-56ae185e367a}";
                typeName: "nsChromeRegistry";
                interfaceName: "nsIChromeRegistry";
            };
            "@mozilla.org/consoleservice;1": {
                createInstance<I_439 extends CiKeys>(req: CiType[I_439]): CiMap[I_439];
                name: "@mozilla.org/consoleservice;1";
                number: "{7e3ff85c-1dd2-11b2-8d4b-eb452cb0ff40}";
                typeName: "nsConsoleService";
                interfaceName: "nsIConsoleService";
            };
            "@mozilla.org/hash-property-bag;1": {
                createInstance<I_440 extends CiKeys>(req: CiType[I_440]): CiMap[I_440];
                name: "@mozilla.org/hash-property-bag;1";
                number: "{678c50b8-6bcb-4ad0-b9b8-c81175955199}";
                typeName: "nsHashPropertyBagCC";
                interfaceName: "nsIHashPropertyBagCC";
            };
            "@mozilla.org/io-util;1": {
                createInstance<I_441 extends CiKeys>(req: CiType[I_441]): CiMap[I_441];
                name: "@mozilla.org/io-util;1";
                number: "{eb833911-4f49-4623-845f-e58a8e6de4c2}";
                typeName: "nsIOUtil";
                interfaceName: "nsIIOUtil";
            };
            "@mozilla.org/file/local;1": {
                createInstance<I_442 extends CiKeys>(req: CiType[I_442]): CiMap[I_442];
                name: "@mozilla.org/file/local;1";
                number: "{2e23e220-60be-11d3-8c4a-000064657374}";
                interfaceName: "nsILocalFileConstructor";
            };
            "@mozilla.org/memory-info-dumper;1": {
                createInstance<I_443 extends CiKeys>(req: CiType[I_443]): CiMap[I_443];
                name: "@mozilla.org/memory-info-dumper;1";
                number: "{00bd71fb-7f09-4ec3-96af-a0b522b77969}";
                typeName: "nsMemoryInfoDumper";
                interfaceName: "nsIMemoryInfoDumper";
            };
            "@mozilla.org/memory-reporter-manager;1": {
                createInstance<I_444 extends CiKeys>(req: CiType[I_444]): CiMap[I_444];
                name: "@mozilla.org/memory-reporter-manager;1";
                number: "{fb97e4f5-32dd-497a-baa2-7d1e55079910}";
                typeName: "nsMemoryReporterManager";
                interfaceName: "nsIMemoryReporterManager";
            };
            "@mozilla.org/process/util;1": {
                createInstance<I_445 extends CiKeys>(req: CiType[I_445]): CiMap[I_445];
                name: "@mozilla.org/process/util;1";
                number: "{7b4eeb20-d781-11d4-8a83-0010a4e0c9ca}";
                typeName: "nsProcess";
                interfaceName: "nsIProcess";
            };
            "@mozilla.org/scriptablebase64encoder;1": {
                createInstance<I_446 extends CiKeys>(req: CiType[I_446]): CiMap[I_446];
                name: "@mozilla.org/scriptablebase64encoder;1";
                number: "{aaf68860-f849-40ee-bb7a-b229bce036a3}";
                typeName: "nsScriptableBase64Encoder";
                interfaceName: "nsIScriptableBase64Encoder";
            };
            "@mozilla.org/securityconsole/message;1": {
                createInstance<I_447 extends CiKeys>(req: CiType[I_447]): CiMap[I_447];
                name: "@mozilla.org/securityconsole/message;1";
                number: "{43ebf210-8a7b-4ddb-a83d-b87c51a058db}";
                typeName: "nsSecurityConsoleMessage";
                interfaceName: "nsISecurityConsoleMessage";
            };
            "@mozilla.org/storagestream;1": {
                createInstance<I_448 extends CiKeys>(req: CiType[I_448]): CiMap[I_448];
                name: "@mozilla.org/storagestream;1";
                number: "{669a9795-6ff7-4ed4-9150-c34ce2971b63}";
                typeName: "nsStorageStream";
                interfaceName: "nsIStorageStream";
            };
            "@mozilla.org/supports-cstring;1": {
                createInstance<I_449 extends CiKeys>(req: CiType[I_449]): CiMap[I_449];
                name: "@mozilla.org/supports-cstring;1";
                number: "{acf8dc41-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsCString";
                interfaceName: "nsISupportsCString";
            };
            "@mozilla.org/supports-char;1": {
                createInstance<I_450 extends CiKeys>(req: CiType[I_450]): CiMap[I_450];
                name: "@mozilla.org/supports-char;1";
                number: "{acf8dc4a-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsChar";
                interfaceName: "nsISupportsChar";
            };
            "@mozilla.org/supports-double;1": {
                createInstance<I_451 extends CiKeys>(req: CiType[I_451]): CiMap[I_451];
                name: "@mozilla.org/supports-double;1";
                number: "{cbf86871-4ac0-11d3-baea-00805f8a5dd7}";
                typeName: "nsSupportsDouble";
                interfaceName: "nsISupportsDouble";
            };
            "@mozilla.org/supports-float;1": {
                createInstance<I_452 extends CiKeys>(req: CiType[I_452]): CiMap[I_452];
                name: "@mozilla.org/supports-float;1";
                number: "{cbf86870-4ac0-11d3-baea-00805f8a5dd7}";
                typeName: "nsSupportsFloat";
                interfaceName: "nsISupportsFloat";
            };
            "@mozilla.org/supports-interface-pointer;1": {
                createInstance<I_453 extends CiKeys>(req: CiType[I_453]): CiMap[I_453];
                name: "@mozilla.org/supports-interface-pointer;1";
                number: "{a99febba-1dd1-11b2-a943-b02334a6d083}";
                typeName: "nsSupportsInterfacePointer";
                interfaceName: "nsISupportsInterfacePointer";
            };
            "@mozilla.org/supports-PRBool;1": {
                createInstance<I_454 extends CiKeys>(req: CiType[I_454]): CiMap[I_454];
                name: "@mozilla.org/supports-PRBool;1";
                number: "{acf8dc43-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsPRBool";
                interfaceName: "nsISupportsPRBool";
            };
            "@mozilla.org/supports-PRInt16;1": {
                createInstance<I_455 extends CiKeys>(req: CiType[I_455]): CiMap[I_455];
                name: "@mozilla.org/supports-PRInt16;1";
                number: "{acf8dc4b-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsPRInt16";
                interfaceName: "nsISupportsPRInt16";
            };
            "@mozilla.org/supports-PRInt32;1": {
                createInstance<I_456 extends CiKeys>(req: CiType[I_456]): CiMap[I_456];
                name: "@mozilla.org/supports-PRInt32;1";
                number: "{acf8dc4c-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsPRInt32";
                interfaceName: "nsISupportsPRInt32";
            };
            "@mozilla.org/supports-PRInt64;1": {
                createInstance<I_457 extends CiKeys>(req: CiType[I_457]): CiMap[I_457];
                name: "@mozilla.org/supports-PRInt64;1";
                number: "{acf8dc4d-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsPRInt64";
                interfaceName: "nsISupportsPRInt64";
            };
            "@mozilla.org/supports-PRTime;1": {
                createInstance<I_458 extends CiKeys>(req: CiType[I_458]): CiMap[I_458];
                name: "@mozilla.org/supports-PRTime;1";
                number: "{acf8dc49-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsPRTime";
                interfaceName: "nsISupportsPRTime";
            };
            "@mozilla.org/supports-PRUint16;1": {
                createInstance<I_459 extends CiKeys>(req: CiType[I_459]): CiMap[I_459];
                name: "@mozilla.org/supports-PRUint16;1";
                number: "{acf8dc46-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsPRUint16";
                interfaceName: "nsISupportsPRUint16";
            };
            "@mozilla.org/supports-PRUint32;1": {
                createInstance<I_460 extends CiKeys>(req: CiType[I_460]): CiMap[I_460];
                name: "@mozilla.org/supports-PRUint32;1";
                number: "{acf8dc47-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsPRUint32";
                interfaceName: "nsISupportsPRUint32";
            };
            "@mozilla.org/supports-PRUint64;1": {
                createInstance<I_461 extends CiKeys>(req: CiType[I_461]): CiMap[I_461];
                name: "@mozilla.org/supports-PRUint64;1";
                number: "{acf8dc48-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsPRUint64";
                interfaceName: "nsISupportsPRUint64";
            };
            "@mozilla.org/supports-PRUint8;1": {
                createInstance<I_462 extends CiKeys>(req: CiType[I_462]): CiMap[I_462];
                name: "@mozilla.org/supports-PRUint8;1";
                number: "{acf8dc44-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsPRUint8";
                interfaceName: "nsISupportsPRUint8";
            };
            "@mozilla.org/supports-string;1": {
                createInstance<I_463 extends CiKeys>(req: CiType[I_463]): CiMap[I_463];
                name: "@mozilla.org/supports-string;1";
                number: "{acf8dc42-4a25-11d3-9890-006008962422}";
                typeName: "nsSupportsString";
                interfaceName: "nsISupportsString";
            };
            "@mozilla.org/system-info;1": {
                createInstance<I_464 extends CiKeys>(req: CiType[I_464]): CiMap[I_464];
                name: "@mozilla.org/system-info;1";
                number: "{d962398a-99e5-49b2-857a-c159049c7f6c}";
                typeName: "nsSystemInfo";
                interfaceName: "nsISystemInfo";
            };
            "@mozilla.org/thread-manager;1": {
                createInstance<I_465 extends CiKeys>(req: CiType[I_465]): CiMap[I_465];
                name: "@mozilla.org/thread-manager;1";
                number: "{7a4204c6-e45a-4c37-8ebb-6709a22c917c}";
                interfaceName: "nsIThreadManagerGetSingleton";
            };
            "@mozilla.org/uuid-generator;1": {
                createInstance<I_466 extends CiKeys>(req: CiType[I_466]): CiMap[I_466];
                name: "@mozilla.org/uuid-generator;1";
                number: "{706d36bb-bf79-4293-81f2-8f6828c18f9d}";
                typeName: "nsUUIDGenerator";
                interfaceName: "nsIUUIDGenerator";
            };
            "@mozilla.org/variant;1": {
                createInstance<I_467 extends CiKeys>(req: CiType[I_467]): CiMap[I_467];
                name: "@mozilla.org/variant;1";
                number: "{0d6ea1d0-879c-11d5-90ef-0010a4e73d9a}";
                typeName: "nsVariantCC";
                interfaceName: "nsIVariantCC";
            };
            "@mozilla.org/xpcom/version-comparator;1": {
                createInstance<I_468 extends CiKeys>(req: CiType[I_468]): CiMap[I_468];
                name: "@mozilla.org/xpcom/version-comparator;1";
                number: "{c6e47036-ca94-4be3-963a-9abd8705f7a8}";
                typeName: "nsVersionComparatorImpl";
                interfaceName: "nsIVersionComparatorImpl";
            };
            "@mozilla.org/xpcom/ini-parser-factory;1": {
                createInstance<I_469 extends CiKeys>(req: CiType[I_469]): CiMap[I_469];
                name: "@mozilla.org/xpcom/ini-parser-factory;1";
                number: "{dfac10a9-dd24-43cf-a095-6ffa2e4b6a6c}";
                typeName: "nsINIParserFactory";
                interfaceName: "nsIINIParserFactory";
            };
            "@mozilla.org/categorymanager;1": {
                createInstance<I_470 extends CiKeys>(req: CiType[I_470]): CiMap[I_470];
                name: "@mozilla.org/categorymanager;1";
                number: "{16d222a6-1dd2-11b2-b693-f38b02c021b2}";
                interfaceName: "nsICategoryManager";
            };
            "@mozilla.org/array;1": {
                createInstance<I_471 extends CiKeys>(req: CiType[I_471]): CiMap[I_471];
                name: "@mozilla.org/array;1";
                number: "{35c66fd1-95e9-4e0a-80c5-c3bd2b375481}";
                interfaceName: "nsIArrayBase";
            };
            "@mozilla.org/observer-service;1": {
                createInstance<I_472 extends CiKeys>(req: CiType[I_472]): CiMap[I_472];
                name: "@mozilla.org/observer-service;1";
                number: "{d07f5195-e3d1-11d2-8acd-00105a1b8860}";
                interfaceName: "nsIObserverService";
            };
            "@mozilla.org/file/directory_service;1": {
                createInstance<I_473 extends CiKeys>(req: CiType[I_473]): CiMap[I_473];
                name: "@mozilla.org/file/directory_service;1";
                number: "{f00152d0-b40b-11d3-8c9c-000064657374}";
                interfaceName: "nsIDirectoryService";
            };
            "@mozilla.org/io/multiplex-input-stream;1": {
                createInstance<I_474 extends CiKeys>(req: CiType[I_474]): CiMap[I_474];
                name: "@mozilla.org/io/multiplex-input-stream;1";
                number: "{565e3a2c-1dd2-11b2-8da1-b4cef17e568d}";
                interfaceName: "nsIMultiplexInputStreamConstructor";
            };
            "@mozilla.org/pipe;1": {
                createInstance<I_475 extends CiKeys>(req: CiType[I_475]): CiMap[I_475];
                name: "@mozilla.org/pipe;1";
                number: "{e4a0ee4e-0775-457b-9118-b3ae97a7c758}";
                interfaceName: "nsIPipeConstructor";
            };
            "@mozilla.org/scriptableinputstream;1": {
                createInstance<I_476 extends CiKeys>(req: CiType[I_476]): CiMap[I_476];
                name: "@mozilla.org/scriptableinputstream;1";
                number: "{7225c040-a9bf-11d3-a197-0050041caf44}";
                interfaceName: "nsIScriptableInputStream";
            };
            "@mozilla.org/io/string-input-stream;1": {
                createInstance<I_477 extends CiKeys>(req: CiType[I_477]): CiMap[I_477];
                name: "@mozilla.org/io/string-input-stream;1";
                number: "{0abb0835-5000-4790-af28-61b3ba17c295}";
                interfaceName: "nsIStringInputStreamConstructor";
            };
            "@mozilla.org/process/environment;1": {
                createInstance<I_478 extends CiKeys>(req: CiType[I_478]): CiMap[I_478];
                name: "@mozilla.org/process/environment;1";
                number: "{03d68f92-9513-4e25-9be9-7cb239874172}";
                interfaceName: "nsIEnvironment";
            };
            "@mozilla.org/timer;1": {
                createInstance<I_479 extends CiKeys>(req: CiType[I_479]): CiMap[I_479];
                name: "@mozilla.org/timer;1";
                number: "{5ff24248-1dd2-11b2-8427-fbab44f29bc8}";
                interfaceName: "nsITimer";
            };
            "@mozilla.org/timer-manager;1": {
                createInstance<I_480 extends CiKeys>(req: CiType[I_480]): CiMap[I_480];
                name: "@mozilla.org/timer-manager;1";
                number: "{d39a8904-2e09-4a3a-a273-c3bec7db2bfe}";
                typeName: "nsTimerManager";
                interfaceName: "nsITimerManager";
            };
            "@mozilla.org/appshell/appShellService;1": {
                createInstance<I_481 extends CiKeys>(req: CiType[I_481]): CiMap[I_481];
                name: "@mozilla.org/appshell/appShellService;1";
                number: "{0099907d-123c-4853-a46a-43098b5fb68c}";
                typeName: "nsAppShellService";
                interfaceName: "nsIAppShellService";
            };
            "@mozilla.org/appshell/window-mediator;1": {
                createInstance<I_482 extends CiKeys>(req: CiType[I_482]): CiMap[I_482];
                name: "@mozilla.org/appshell/window-mediator;1";
                number: "{79a2b7cc-f05b-4605-bfa0-fac54f27eec8}";
                typeName: "nsWindowMediator";
                interfaceName: "nsIWindowMediator";
            };
        };
        window: any;
        setTimeout: typeof setTimeout;
        parent: any;
        navigator: any;
        KeyboardEvent: any;
        KeyEvent: any;
    };
    function getReaderReadyPromise(window: any): Promise<any>;
    function waitForNarrateToggle(window: any): any;
    function waitForPrefChange(pref: any): Promise<any>;
    function sendBoundaryEvent(window: any, name: any, charIndex: any, charLength: any): void;
    function isWordHighlightGone(window: any, ok: any): void;
    function getWordHighlights(window: any): {
        word: any;
        left: number;
        top: number;
    }[];
}
import { setTimeout } from "resource://gre/modules/Timer.sys.mjs";
