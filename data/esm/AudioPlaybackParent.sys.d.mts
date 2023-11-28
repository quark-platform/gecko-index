export class AudioPlaybackParent {
    _hasAudioPlayback: boolean;
    _hasBlockMedia: boolean;
    receiveMessage(aMessage: any): void;
    didDestroy(): void;
}
