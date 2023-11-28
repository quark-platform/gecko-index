export namespace ExperimentTestUtils {
    function _validateSchema(schema: any, value: any, errorMsg: any): any;
    function _validateFeatureValueEnum({ branch }: {
        branch: any;
    }): boolean;
    /**
     * Checks if an experiment is valid acording to existing schema
     */
    function validateExperiment(experiment: any): Promise<any>;
    function validateEnrollment(enrollment: any): any;
    function validateRollouts(rollout: any): Promise<any>;
    /**
     * Add features for tests.
     *
     * These features will only be visible to the JS Nimbus client. The native
     * Nimbus client will have no access.
     *
     * @params features A list of |_NimbusFeature|s.
     *
     * @returns A cleanup function to remove the features once the test has completed.
     */
    function addTestFeatures(...features: any[]): () => void;
}
export namespace ExperimentFakes {
    namespace recipe {
        namespace bucketConfig {
            let namespace: string;
            let randomizationUnit: string;
            let start: number;
            let count: number;
            let total: number;
        }
        const branches: {
            slug: string;
            ratio: number;
            features: {
                featureId: string;
                value: {
                    testInt: number;
                    enabled: boolean;
                };
            }[];
        }[];
    }
}
