/**
 * Show the Heartbeat UI to request user feedback.
 *
 * @param chromeWindow
 *        The chrome window that the heartbeat notification is displayed in.
 * @param {Object} options Options object.
 * @param {String} options.message
 *        The message, or question, to display on the notification.
 * @param {String} options.thanksMessage
 *        The thank you message to display after user votes.
 * @param {String} options.flowId
 *        An identifier for this rating flow. Please note that this is only used to
 *        identify the notification box.
 * @param {String} [options.engagementButtonLabel=null]
 *        The text of the engagement button to use instead of stars. If this is null
 *        or invalid, rating stars are used.
 * @param {String} [options.learnMoreMessage=null]
 *        The label of the learn more link. No link will be shown if this is null.
 * @param {String} [options.learnMoreUrl=null]
 *        The learn more URL to open when clicking on the learn more link. No learn more
 *        will be shown if this is an invalid URL.
 * @param {String} [options.surveyId]
 *        An ID for the survey, reflected in the Telemetry ping.
 * @param {Number} [options.surveyVersion]
 *        Survey's version number, reflected in the Telemetry ping.
 * @param {boolean} [options.testing]
 *        Whether this is a test survey, reflected in the Telemetry ping.
 * @param {String} [options.postAnswerURL=null]
 *        The url to visit after the user answers the question.
 */
export const Heartbeat: {
    new (chromeWindow: any, options: any): {
        chromeWindow: any;
        eventEmitter: any;
        options: any;
        surveyResults: {};
        buttons: ({
            link: any;
            label: any;
            callback: () => boolean;
        } | {
            label: any;
            callback: () => boolean;
            link?: undefined;
        })[];
        handleWindowClosed(): void;
        close(): void;
        notificationBox: any;
        notice: any;
        ratingContainer: any;
        surveyEndTimer: any;
        maybeNotifyHeartbeat(name: any, data?: {}): void;
        pingSent: boolean;
        userEngaged(engagementParams: any): void;
        engagementCloseTimer: any;
        endTimerIfPresent(timerName: any): void;
        cleanup(): void;
    };
};
