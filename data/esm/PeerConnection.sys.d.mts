export class GlobalPCList {
    _list: {};
    _networkdown: boolean;
    _lifecycleobservers: {};
    _nextId: number;
    notifyLifecycleObservers(pc: any, type: any): void;
    addPC(pc: any): void;
    findPC(globalPCListId: any): any;
    removeNullRefs(winID: any): void;
    handleGMPCrash(data: any): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    observe(subject: any, topic: any, data: any): void;
    _registerPeerConnectionLifecycleCallback(winID: any, cb: any): void;
}
export class RTCIceCandidate {
    init(win: any): void;
    _win: any;
    __init(dict: any): void;
}
export class RTCSessionDescription {
    init(win: any): void;
    _win: any;
    _winID: any;
    __init({ type, sdp }: {
        type: any;
        sdp: any;
    }): void;
    set type(type: any);
    get type(): any;
    _type: any;
    set sdp(sdp: any);
    get sdp(): any;
    _sdp: any;
    warn(): void;
    _warned: boolean;
    logWarning(msg: any): void;
}
export class RTCPeerConnection {
    _pc: any;
    _closed: boolean;
    _canTrickle: any;
    _iceConnectionState: string;
    _hasStunServer: boolean;
    _hasTurnServer: boolean;
    _iceGatheredRelayCandidates: boolean;
    _pcTelemetry: PeerConnectionTelemetry;
    init(win: any): void;
    _win: any;
    _applyPrefsToConfig(rtcConfig: any): void;
    _validateConfig(rtcConfig: any): void;
    _checkIfIceRestartRequired(rtcConfig: any): void;
    __init(rtcConfig: any): void;
    _winID: any;
    _documentPrincipal: any;
    _certificateReady: Promise<void>;
    getConfiguration(): any;
    setConfiguration(rtcConfig: any): void;
    _config: any;
    _initCertificate(certificate: any): Promise<void>;
    _resetPeerIdentityPromise(): void;
    _peerIdentity: any;
    _resolvePeerIdentity: any;
    _rejectPeerIdentity: any;
    _initIdp(): void;
    _lastIdentityValidation: any;
    _localIdp: any;
    _remoteIdp: any;
    _chain(operation: any): any;
    _async(func: any): any;
    _legacy(...args: any[]): any;
    _auto(onSucc: any, onErr: any, func: any): any;
    _closeWrapper(func: any): Promise<any>;
    _legacyCloseWrapper(onSucc: any, onErr: any, func: any): Promise<void>;
    _queueTaskWithClosedCheck(func: any): Promise<any>;
    /**
     * An RTCConfiguration may look like this:
     *
     * { "iceServers": [ { urls: "stun:stun.example.org", },
     *                   { url: "stun:stun.example.org", }, // deprecated version
     *                   { urls: ["turn:turn1.x.org", "turn:turn2.x.org"],
     *                     username:"jib", credential:"mypass"} ] }
     *
     * This function normalizes the structure of the input for rtcConfig.iceServers for us,
     * so we test well-formed stun/turn urls before passing along to C++.
     *   msg - Error message to detail which array-entry failed, if any.
     */
    _validateIceServers(iceServers: any, msg: any): void;
    _checkClosed(): void;
    dispatchEvent(event: any): void;
    logErrorAndCallOnError(e: any): void;
    logError(msg: any): void;
    logWarning(msg: any): void;
    logStackMsg(msg: any, flag: any): void;
    logMsg(msg: any, file: any, line: any, flag: any): void;
    getEH(type: any): any;
    setEH(type: any, handler: any): void;
    makeGetterSetterEH(name: any): void;
    makeLegacyGetterSetterEH(name: any, msg: any): void;
    createOffer(optionsOrOnSucc: any, onErr: any, options: any): any;
    _ensureOfferToReceive(kind: any): void;
    _ensureTransceiversForOfferToReceive(options: any): void;
    _createOffer(options: any): any;
    _createAnOffer(options?: {}): Promise<any>;
    _onCreateOfferSuccess: (value: any) => void;
    _onCreateOfferFailure: (reason?: any) => void;
    createAnswer(optionsOrOnSucc: any, onErr: any): any;
    _createAnswer(options: any): any;
    _createAnAnswer(): Promise<any>;
    _onCreateAnswerSuccess: (value: any) => void;
    _onCreateAnswerFailure: (reason?: any) => void;
    _getPermission(): Promise<any>;
    _havePermission: Promise<any> | Promise<void>;
    _settlePermission: {
        allow: (value: any) => void;
        deny: (reason?: any) => void;
    };
    _sanityCheckSdp(sdp: any): void;
    setLocalDescription(desc: any, onSucc: any, onErr: any): any;
    _setLocalDescription({ type, sdp }: {
        type: any;
        sdp: any;
    }): any;
    _onSetDescriptionSuccess: (value: any) => void;
    _onSetDescriptionFailure: (reason?: any) => void;
    _validateIdentity(sdp: any, origin: any): Promise<void>;
    setRemoteDescription(desc: any, onSucc: any, onErr: any): any;
    _setRemoteDescription({ type, sdp }: {
        type: any;
        sdp: any;
    }): any;
    setIdentityProvider(provider: any, { protocol, usernameHint, peerIdentity }?: {
        protocol: any;
        usernameHint: any;
        peerIdentity: any;
    }): void;
    _getIdentityAssertion(): Promise<any>;
    getIdentityAssertion(): any;
    get canTrickleIceCandidates(): any;
    _updateCanTrickle(): void;
    addIceCandidate(cand: any, onSucc: any, onErr: any): any;
    _addIceCandidate({ candidate, sdpMid, sdpMLineIndex, usernameFragment, }: {
        candidate: any;
        sdpMid: any;
        sdpMLineIndex: any;
        usernameFragment: any;
    }): Promise<any>;
    _onAddIceCandidateSuccess: (value: any) => void;
    _onAddIceCandidateError: (reason?: any) => void;
    restartIce(): void;
    addStream(stream: any): void;
    addTrack(track: any, ...streams: any[]): any;
    removeTrack(sender: any): void;
    _addTransceiverNoEvents(sendTrackOrKind: any, init: any, addTrackMagic: any): any;
    addTransceiver(sendTrackOrKind: any, init: any): any;
    updateNegotiationNeeded(): void;
    close(): void;
    _suppressEvents: boolean;
    getLocalStreams(): any[];
    getRemoteStreams(): any;
    getSenders(): any;
    getReceivers(): any;
    mozSetPacketCallback(callback: any): void;
    _onPacket: any;
    mozEnablePacketDump(level: any, type: any, sending: any): void;
    mozDisablePacketDump(level: any, type: any, sending: any): void;
    getTransceivers(): any;
    get localDescription(): any;
    get currentLocalDescription(): any;
    get pendingLocalDescription(): any;
    get remoteDescription(): any;
    get currentRemoteDescription(): any;
    get pendingRemoteDescription(): any;
    get peerIdentity(): any;
    get idpLoginUrl(): any;
    set id(s: any);
    get id(): any;
    get iceGatheringState(): any;
    get iceConnectionState(): string;
    get connectionState(): any;
    get signalingState(): any;
    handleIceGatheringStateChange(): void;
    changeIceConnectionState(state: any): void;
    getStats(selector: any, onSucc: any, onErr: any): any;
    get sctp(): any;
    createDataChannel(label: any, { maxRetransmits, ordered, negotiated, id, maxRetransmitTime, maxPacketLifeTime, protocol, }?: {
        maxRetransmits: any;
        ordered: any;
        negotiated: any;
        id?: any;
        maxRetransmitTime: any;
        maxPacketLifeTime: any;
        protocol: any;
    }): any;
}
export class PeerConnectionObserver {
    init(win: any): void;
    _win: any;
    __init(dompc: any): void;
    _dompc: any;
    newError({ message, name }: {
        message: any;
        name: any;
    }): any;
    dispatchEvent(event: any): void;
    onCreateOfferSuccess(sdp: any): void;
    onCreateOfferError(error: any): void;
    onCreateAnswerSuccess(sdp: any): void;
    onCreateAnswerError(error: any): void;
    onSetDescriptionSuccess(): void;
    onSetDescriptionError(error: any): void;
    onAddIceCandidateSuccess(): void;
    onAddIceCandidateError(error: any): void;
    onIceCandidate(sdpMLineIndex: any, sdpMid: any, candidate: any, usernameFragment: any): void;
    handleIceConnectionStateChange(iceConnectionState: any): void;
    onStateChange(state: any): void;
    onTransceiverNeeded(kind: any, transceiverImpl: any): void;
    notifyDataChannel(channel: any): void;
    fireTrackEvent(receiver: any, streams: any): void;
    fireStreamEvent(stream: any): void;
    fireNegotiationNeededEvent(): void;
    onPacket(level: any, type: any, sending: any, packet: any): void;
}
export class RTCPeerConnectionStatic {
    init(win: any): void;
    _winID: any;
    registerPeerConnectionLifecycleCallback(cb: any): void;
}
export class CreateOfferRequest {
    constructor(windowID: any, innerWindowID: any, callID: any, isSecure: any);
}
declare class PeerConnectionTelemetry {
    recordConnected(): void;
    _recordDataChannelCreated(): void;
    _recordMaxRetransmitTime(maxRetransmitTime: any): boolean;
    _recordMaxPacketLifeTime(maxPacketLifeTime: any): boolean;
    recordDataChannelInit(maxRetransmitTime: any, maxPacketLifeTime: any): void;
}
export {};
