export class DecoderDoctorParent {
    getLabelForNotificationBox({ type, decoderDoctorReportId }: {
        type: any;
        decoderDoctorReportId: any;
    }): any;
    getSumoForLearnHowButton({ type, decoderDoctorReportId }: {
        type: any;
        decoderDoctorReportId: any;
    }): "" | "fix-video-audio-problems-firefox-windows" | "fix-common-audio-and-video-issues";
    getEndpointForReportIssueButton(type: any): any;
    receiveMessage(aMessage: any): void;
}
