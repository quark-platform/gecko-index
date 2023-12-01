/**
 * Create an instance of the object to manage recipes in the parent process.
 * Consumers should wait until {@link initializationPromise} resolves before
 * calling methods on the object.
 *
 * @constructor
 * @param {String} [aOptions.defaults=null] the URI to load the recipes from.
 *                                          If it's null, nothing is loaded.
 *
 */
export function LoginRecipesParent(aOptions?: {
    defaults: any;
}): void;
export class LoginRecipesParent {
    /**
     * Create an instance of the object to manage recipes in the parent process.
     * Consumers should wait until {@link initializationPromise} resolves before
     * calling methods on the object.
     *
     * @constructor
     * @param {String} [aOptions.defaults=null] the URI to load the recipes from.
     *                                          If it's null, nothing is loaded.
     *
     */
    constructor(aOptions?: {
        defaults: any;
    });
    _defaults: bool;
    initializationPromise: Promise<any>;
    _recipesByHost: Map<any, any>;
    _rsClient: any;
    /**
     * @param {Object} aRecipes an object containing recipes to load for use. The object
     *                          should be compatible with JSON (e.g. no RegExp).
     * @return {Promise} resolving when the recipes are loaded
     */
    load(aRecipes: any): Promise<any>;
    /**
     * Reset the set of recipes to the ones from the time of construction.
     */
    reset(): void;
    /**
     * Validate the recipe is sane and then add it to the set of recipes.
     *
     * @param {Object} recipe
     */
    add(recipe: any): void;
    /**
     * Currently only exact host matches are returned but this will eventually handle parent domains.
     *
     * @param {String} aHost (e.g. example.com:8080 [non-default port] or sub.example.com)
     * @return {Set} of recipes that apply to the host ordered by host priority
     */
    getRecipesForHost(aHost: string): Set<any>;
    /**
     * Handles the Remote Settings sync event for the "password-recipes" collection.
     *
     * @param {Object} aEvent
     * @param {Array} event.current Records in the "password-recipes" collection after the sync event
     * @param {Array} event.created Records that were created with this particular sync
     * @param {Array} event.updated Records that were updated with this particular sync
     * @param {Array} event.deleted Records that were deleted with this particular sync
     */
    onRemoteSettingsSync(aEvent: any): void;
}
export namespace LoginRecipesContent {
    let _recipeCache: WeakMap<WeakKey, any>;
    function _clearRecipeCache(): void;
    /**
     * Locally caches recipes for a given host.
     *
     * @param {String} aHost (e.g. example.com:8080 [non-default port] or sub.example.com)
     * @param {Object} win - the window of the host
     * @param {Set} recipes - recipes that apply to the host
     */
    function cacheRecipes(aHost: string, win: any, recipes: Set<any>): void;
    /**
     * Tries to fetch recipes for a given host, using a local cache if possible.
     * Otherwise, the recipes are cached for later use.
     *
     * @param {String} aHost (e.g. example.com:8080 [non-default port] or sub.example.com)
     * @param {Object} win - the window of the host
     * @return {Set} of recipes that apply to the host
     */
    function getRecipes(aHost: string, win: any): Set<any>;
    /**
     * @param {Set} aRecipes - Possible recipes that could apply to the form
     * @param {FormLike} aForm - We use a form instead of just a URL so we can later apply
     * tests to the page contents.
     * @return {Set} a subset of recipes that apply to the form with the order preserved
     */
    function _filterRecipesForForm(aRecipes: Set<any>, aForm: FormLike): Set<any>;
    /**
     * Given a set of recipes that apply to the host, choose the one most applicable for
     * overriding login fields in the form.
     *
     * @param {Set} aRecipes The set of recipes to consider for the form
     * @param {FormLike} aForm The form where login fields exist.
     * @return {Object} The recipe that is most applicable for the form.
     */
    function getFieldOverrides(aRecipes: Set<any>, aForm: FormLike): any;
    /**
     * @param {HTMLElement} aParent the element to query for the selector from.
     * @param {CSSSelector} aSelector the CSS selector to query for the login field.
     * @return {HTMLElement|null}
     */
    function queryLoginField(aParent: HTMLElement, aSelector: CSSSelector): HTMLElement;
}
