/// <reference types="gecko-types" />
/**
 * LangPackMatcher.jsm calls out to to the addons store, which involves network requests.
 * Other tests create a fake addons server, and install mock XPIs. At the time of this
 * writing that infrastructure is not available for mochitests.
 *
 * Instead, this test mocks out APIs that have a side-effect, so the addons of the browser
 * are never modified.
 *
 * The calls to get the app's locale and system's locale are also mocked so that the
 * different language mismatch scenarios can be run through.
 *
 * The locales are BCP 47 identifiers:
 *
 * @param {{
 *   sandbox: SinonSandbox,
 *   systemLocale: string,
 *   appLocale, string,
 * }}
 */
export function getAddonAndLocalAPIsMocker(testScope: any, sandbox: any): ({ systemLocale, appLocale }: {
    systemLocale: any;
    appLocale: any;
}) => {
    /**
     * Resolves the addons API call with available langpacks. Call with a list
     * of BCP 47 identifiers.
     *
     * @type {(availableLangpacks: string[]) => {}}
     */
    resolveLangPacks: (availableLangpacks: string[]) => {};
    /**
     * Resolves the pending call to install a langpack.
     *
     * @type {() => {}}
     */
    resolveInstaller: () => {};
    /**
     * The mocked APIs.
     */
    mockable: typeof LangPackMatcher.mockable;
};
import { LangPackMatcher } from "resource://gre/modules/LangPackMatcher.sys.mjs";
