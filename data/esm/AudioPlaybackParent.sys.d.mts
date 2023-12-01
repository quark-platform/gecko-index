export class AudioPlaybackParent extends JSWindowActorParent {
    _hasAudioPlayback: boolean;
    _hasBlockMedia: boolean;
    receiveMessage(aMessage: any): void;
    didDestroy(): void;
}
