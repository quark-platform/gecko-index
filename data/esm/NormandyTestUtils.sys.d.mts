export namespace NormandyTestUtils {
    export function init({ add_task, Assert }?: {
        add_task: any;
        Assert: any;
    }): void;
    export namespace factories {
        function addonStudyFactory(attrs?: {}): {
            recipeId: number;
            slug: any;
            userFacingName: string;
            userFacingDescription: string;
            branch: any;
            active: boolean;
            addonId: string;
            addonUrl: string;
            addonVersion: string;
            studyStartDate: Date;
            studyEndDate: any;
            extensionApiId: number;
            extensionHash: string;
            extensionHashAlgorithm: string;
            enrollmentId: any;
            temporaryErrorDeadline: any;
        };
        function branchedAddonStudyFactory(attrs?: {}): {
            recipeId: number;
            slug: any;
            userFacingName: string;
            userFacingDescription: string;
            branch: any;
            active: boolean;
            addonId: string;
            addonUrl: string;
            addonVersion: string;
            studyStartDate: Date;
            studyEndDate: any;
            extensionApiId: number;
            extensionHash: string;
            extensionHashAlgorithm: string;
            enrollmentId: any;
            temporaryErrorDeadline: any;
        };
        function preferenceStudyFactory(attrs?: {}): {
            userFacingName: any;
            userFacingDescription: string;
            slug: any;
            branch: string;
            expired: boolean;
            lastSeen: string;
            experimentType: string;
            enrollmentId: any;
            actionName: string;
        } & {
            preferences: {};
        };
        function preferenceRolloutFactory(attrs?: {}): {
            slug: string;
            state: string;
            enrollmentId: any;
        } & {
            preferences: any;
        };
    }
    /**
     * Combine a list of functions right to left. The rightmost function is passed
     * to the preceding function as the argument; the result of this is passed to
     * the next function until all are exhausted. For example, this:
     *
     * decorate(func1, func2, func3);
     *
     * is equivalent to this:
     *
     * func1(func2(func3));
     */
    export function decorate(...args: any[]): any;
    /**
     * Wrapper around add_task for declaring tests that use several with-style
     * wrappers. The last argument should be your test function; all other arguments
     * should be functions that accept a single test function argument.
     *
     * The arguments are combined using decorate and passed to add_task as a single
     * test function.
     *
     * @param {[Function]} args
     * @example
     *   decorate_task(
     *     withMockPreferences(),
     *     withMockNormandyApi(),
     *     async function myTest(mockPreferences, mockApi) {
     *       // Do a test
     *     }
     *   );
     */
    export function decorate_task(args_0: Function): any;
    export function isUuid(s: any): boolean;
    export function withMockRecipeCollection(recipes?: any[]): (testFunc: any) => (args: any) => Promise<void>;
    export { MockPreferences };
    export function withMockPreferences(): (testFunction: any) => (args: any) => Promise<void>;
    export function withStub(object: any, method: any, { returnValue, as }?: {
        returnValue: any;
        as?: string;
    }): (testFunction: any) => (args: any) => Promise<void>;
    export function withSpy(object: any, method: any, { as }?: {
        as?: string;
    }): (testFunction: any) => (args: any) => Promise<void>;
}
declare class MockPreferences {
    oldValues: {
        user: {};
        default: {};
    };
    set(name: any, value: any, branch?: string): void;
    preserve(name: any, branch: any): void;
    cleanup(): void;
}
export {};
