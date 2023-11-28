export namespace MediaUtils {
    function getMetadata(aElement: any): {
        src: any;
        width: any;
        height: any;
        duration: any;
        seekable: boolean;
        audioTrackCount: number;
        videoTrackCount: number;
    };
    function isVideoElement(aElement: any): boolean;
    function isAudioElement(aElement: any): boolean;
    function isMediaElement(aElement: any): boolean;
    function findMediaElement(aElement: any): any;
    function findVideoElement(aElement: any): any;
    function findAudioElement(aElement: any): any;
}
