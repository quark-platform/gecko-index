export const AddonStudies: any;
export type Study = {
    /**
     *   ID of the recipe that created the study. Used as the primary key of the
     *   study.
     */
    recipeId: number;
    /**
     *   String code used to identify the study for use in Telemetry and logging.
     */
    slug: number;
    /**
     *   Name of the study to show to the user
     */
    userFacingName: string;
    /**
     *   Description of the study and its intent.
     */
    userFacingDescription: string;
    /**
     *   The branch the user is enrolled in
     */
    branch: string;
    /**
     *   Is the study still running?
     */
    active: boolean;
    /**
     *   Add-on ID for this particular study.
     */
    addonId: string;
    /**
     *   URL that the study add-on was installed from.
     */
    addonUrl: string;
    /**
     *   Study add-on version number
     */
    addonVersion: string;
    /**
     *   The ID used to look up the extension in Normandy's API.
     */
    extensionApiId: int;
    /**
     *   The hash of the XPI file.
     */
    extensionHash: string;
    /**
     *   The algorithm used to hash the XPI file.
     */
    extensionHashAlgorithm: string;
    /**
     *   Date when the study was started.
     */
    studyStartDate: Date;
    /**
     *   Date when the study was ended.
     */
    studyEndDate: Date | null;
    /**
     *   Date of when temporary errors with this experiment should no longer be
     *   considered temporary. After this point, further errors will result in
     *   unenrollment.
     */
    temporaryErrorDeadline: Date | null;
    /**
     *   A random ID generated at time of enrollment. It should be included on all
     *   telemetry related to this study. It should not be re-used by other studies,
     *   or any other purpose. May be null on old study.
     */
    enrollmentId: string;
};
