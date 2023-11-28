export const ActionSchemas: {
    "console-log": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            message: {
                description: string;
                type: string;
                default: string;
            };
        };
    };
    "messaging-experiment": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            slug: {
                description: string;
                type: string;
                pattern: string;
            };
            isEnrollmentPaused: {
                description: string;
                type: string;
                default: boolean;
            };
            branches: {
                description: string;
                type: string;
                minItems: number;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        slug: {
                            description: string;
                            type: string;
                            pattern: string;
                        };
                        value: {
                            description: string;
                            type: string;
                            properties: {};
                        };
                        ratio: {
                            description: string;
                            type: string;
                            minimum: number;
                        };
                        groups: {
                            description: string;
                            type: string;
                            items: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    "preference-rollout": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            slug: {
                description: string;
                type: string;
                pattern: string;
            };
            preferences: {
                description: string;
                type: string;
                minItems: number;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        preferenceName: {
                            description: string;
                            type: string;
                        };
                        value: {
                            description: string;
                            type: string[];
                        };
                    };
                };
            };
        };
    };
    "preference-rollback": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            rolloutSlug: {
                description: string;
                type: string;
                pattern: string;
            };
        };
    };
    "addon-study": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            name: {
                description: string;
                type: string;
                minLength: number;
            };
            description: {
                description: string;
                type: string;
                minLength: number;
            };
            addonUrl: {
                description: string;
                type: string;
                format: string;
                minLength: number;
            };
            extensionApiId: {
                description: string;
                type: string;
            };
            isEnrollmentPaused: {
                description: string;
                type: string;
                default: boolean;
            };
        };
    };
    "addon-rollout": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            extensionApiId: {
                description: string;
                type: string;
            };
            slug: {
                description: string;
                type: string;
                pattern: string;
            };
        };
    };
    "addon-rollback": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            rolloutSlug: {
                description: string;
                type: string;
                pattern: string;
            };
        };
    };
    "branched-addon-study": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            slug: {
                description: string;
                type: string;
                minLength: number;
            };
            userFacingName: {
                description: string;
                type: string;
                minLength: number;
            };
            userFacingDescription: {
                description: string;
                type: string;
                minLength: number;
            };
            isEnrollmentPaused: {
                description: string;
                type: string;
                default: boolean;
            };
            branches: {
                description: string;
                type: string;
                minItems: number;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        slug: {
                            description: string;
                            type: string;
                            pattern: string;
                        };
                        ratio: {
                            description: string;
                            type: string;
                            minimum: number;
                        };
                        extensionApiId: {
                            description: string;
                            type: string[];
                            default: any;
                        };
                    };
                };
            };
        };
    };
    "show-heartbeat": {
        $schema: string;
        title: string;
        description: string;
        type: string;
        required: string[];
        properties: {
            repeatOption: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
            repeatEvery: {
                description: string;
                default: any;
                type: string[];
            };
            includeTelemetryUUID: {
                type: string;
                description: string;
                default: boolean;
            };
            surveyId: {
                type: string;
                description: string;
            };
            message: {
                description: string;
                type: string;
            };
            engagementButtonLabel: {
                description: string;
                default: any;
                type: string[];
            };
            thanksMessage: {
                description: string;
                type: string;
            };
            postAnswerUrl: {
                description: string;
                default: any;
                type: string[];
            };
            learnMoreMessage: {
                description: string;
                default: any;
                type: string[];
            };
            learnMoreUrl: {
                description: string;
                default: any;
                type: string[];
            };
        };
    };
    "multi-preference-experiment": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            slug: {
                description: string;
                type: string;
                pattern: string;
            };
            userFacingName: {
                description: string;
                type: string;
                minLength: number;
            };
            userFacingDescription: {
                description: string;
                type: string;
                minLength: number;
            };
            experimentDocumentUrl: {
                description: string;
                type: string;
                format: string;
                default: string;
            };
            isHighPopulation: {
                description: string;
                type: string;
                default: string;
            };
            isEnrollmentPaused: {
                description: string;
                type: string;
                default: boolean;
            };
            branches: {
                description: string;
                type: string;
                minItems: number;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        slug: {
                            description: string;
                            type: string;
                            pattern: string;
                        };
                        ratio: {
                            description: string;
                            type: string;
                            minimum: number;
                        };
                        preferences: {
                            description: string;
                            type: string;
                            patternProperties: {
                                ".*": {
                                    type: string;
                                    properties: {
                                        preferenceType: {
                                            description: string;
                                            type: string;
                                            enum: string[];
                                        };
                                        preferenceBranchType: {
                                            description: string;
                                            type: string;
                                            enum: string[];
                                            default: string;
                                        };
                                        preferenceValue: {
                                            description: string;
                                            type: string[];
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    "single-preference-experiment": {
        $schema: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            slug: {
                description: string;
                type: string;
                pattern: string;
            };
            experimentDocumentUrl: {
                description: string;
                type: string;
                format: string;
                default: string;
            };
            preferenceName: {
                description: string;
                type: string;
            };
            preferenceType: {
                description: string;
                type: string;
                enum: string[];
            };
            preferenceBranchType: {
                description: string;
                type: string;
                enum: string[];
                default: string;
            };
            isHighPopulation: {
                description: string;
                type: string;
                default: string;
            };
            isEnrollmentPaused: {
                description: string;
                type: string;
                default: boolean;
            };
            branches: {
                description: string;
                type: string;
                minItems: number;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        slug: {
                            description: string;
                            type: string;
                            pattern: string;
                        };
                        value: {
                            description: string;
                            type: string[];
                        };
                        ratio: {
                            description: string;
                            type: string;
                            minimum: number;
                        };
                    };
                };
            };
        };
    };
};
