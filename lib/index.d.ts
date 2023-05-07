import type * as idlParser from './parser.js'
import type { ExportType } from '../scripts/esm.js'

declare module 'gecko-index' {
  export { idlParser }

  /**
   * This references the root directory of the package. It is only intended for
   * internal usage, there is no guarantee that the internal folder structure
   * will not change
   *
   * @private
   */
  export const packageDir: string

  // ===========================================================================
  // Namespaces

  export type VersioningObject<T> = Record<string, T>
  export type NamespaceObject<T> = Record<string, T>

  export type NamespaceHistoryFile = VersioningObject<
    NamespaceObject<{
      methods: string[]
      attributes: string[]
    }>
  >

  export type NamespacesIndex = NamespaceObject<NamespaceInfo>

  export type NamespaceInfo = {
    attributes: NamespaceAttributes[]
    methods: NamespaceMethods[]
  }

  export type NamespaceTypeDef<Type extends string> = {
    type: Type
    extAttrs: unknown[]
    generic: string
    nullable: boolean
    union: boolean
    idlType: IdlType
  }

  export type NamespaceAttributes = {
    type: 'attribute'
    name: string
    trivia: string
    introduced: string
    readonly: boolean
    valueType: NamespaceTypeDef<'argument-type'>
  }

  export type NamespaceMethods = {
    type: 'method'
    name: string
    trivia: string
    introduced: string
    arguments: NamespaceMethodArg[]
    special: string
    return: NamespaceMethodReturn
  }

  export type NamespaceMethodArg = {
    optional: boolean
    varadic: boolean
    name: string
    defaultValue?: {
      type: string
    }
    type: NamespaceTypeDef<'argument-type'>
  }
  export type NamespaceMethodReturn = NamespaceTypeDef<'return-type'>

  export type IdlTypeInner = NamespaceTypeDef<string>
  export type IdlType = IdlTypeInner[] | IdlTypeInner | string

  /**
   * Returns information about what was added to each namespace with each gecko
   * version
   */
  export async function getAddedNamespaces(): Promise<NamespaceHistoryFile>

  /**
   * Returns information about what was removed from each namespace with each
   * gecko version
   */
  export async function getRemovedNamespaces(): Promise<NamespaceHistoryFile>

  /**
   * Returns details about each namespace and their contents
   */
  export async function getNamespaces(): Promise<NamespacesIndex>

  // ===========================================================================
  // Legacy Modules

  export async function getLegacyModules(): Promise<any>

  // ===========================================================================
  // Interfaces

  /**
   * These are all of the available interfaces that can be found under the `Classes`
   * property of `components.conf`
   *
   * Types taken from:
   * {@link https://firefox-source-docs.mozilla.org/build/buildsystem/defining-xpcom-components.html#defining-xpcom-components}
   */
  interface ClassDefinition {
    /**
     * This is the path to the original components.conf file. It might only be
     * valid on the generating computer.
     *
     * This is the only entry that was added by `gecko-index`
     */
    componentFIle: string

    /**
     * If present, this component will generate an entry with the given name in the
     * ``mozilla::components`` namespace in ``mozilla/Components.h``, which gives
     * easy access to its CID, service, and instance constructors as (e.g.,)
     * ``components::Foo::CID()``, ``components::Foo::Service()``, and
     * ``components::Foo::Create()``, respectively.
     */
    name?: string

    /**
     * A UUID string containing this component's CID, in the form
     *   ``'{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}'``.
     */
    cid: string

    /**
     * A list of contract IDs to register for this class.
     */
    contract_ids?: string[]

    /**
     * A dict of category entries to register for this component's contract ID.
     * Each key in the dict is the name of the category. Each value is either a
     * string containing a single entry, or a list of entries.  Each entry is either
     * a string name, or a dictionary of the form ``{'name': 'value', 'backgroundtasks':
     * BackgroundTasksSelector.ALL_TASKS}``.  By default, category entries are registered
     * for **no background tasks**: they have
     * ``'backgroundtasks': BackgroundTasksSelector.NO_TASKS``.
     */
    categories?: Record<string, string>

    /**
     * The fully-qualified type of the class implementing this component. Defaults
     * to ``nsISupports``, but **must** be provided if the ``init_method`` property
     * is specified, or if neither the ``constructor`` nor ``legacy_constructor``
     * properties are provided.
     */
    type?: string

    /**
     * A list of headers to include in order to call this component's constructor,
     * in the same format as the global ``Headers`` property.
     */
    headers?: string[]

    /**
     * The name of a method to call on newly-created instances of this class before
     * returning them. The method must take no arguments, and must return a
     * ``nsresult``. If it returns failure, that failure is propagated to the
     * ``getService`` or ``createInstance`` caller.
     */
    init_method?: string

    /**
     * The fully-qualified name of a constructor function to call in order to
     * create instances of this class. This function must be declared in one of the
     * headers listed in the ``headers`` property, must take no arguments, and must
     * return ``already_AddRefed<iface>`` where ``iface`` is the interface provided
     * in the ``type`` property.
     *
     * This property is incompatible with ``legacy_constructor``.
     */
    constructor?: string

    /**
     * If provided, must be the URL of a JavaScript module which contains a
     * JavaScript implementation of the component. The ``constructor`` property
     * must contain the name of an exported function which can be constructed to
     * create a new instance of the component.
     */
    jsm?: string

    /**
     * This property is deprecated, and should not be used in new code.
     *
     * The fully-qualified name of a constructor function to call in order to
     * create instances of this class. This function must be declared in one of the
     * headers listed in the ``headers`` property, and must have the signature
     * ``nsresult(const nsID& aIID, void** aResult)``, and behave equivalently to
     * ``nsIFactory::CreateInstance``.
     *
     * This property is incompatible with ``constructor``.
     */
    legacy_constructor?: string

    /**
     * If true, this component's constructor is expected to return the same
     * singleton for every call, and no ``mozilla::components::<name>::Create()``
     * method will be generated for it.
     */
    singleton?: boolean

    /**
     * If true, this component's contract ID is expected to be overridden by some
     * tests, and its ``mozilla::components::<name>::Service()`` getter will
     * therefore look it up by contract ID for every call. This component must,
     * therefore, provide at least one contract ID in its ``contract_ids`` array.
     *
     * If false, the ``Service()`` getter will always retrieve the service based on
     * its static data, and it cannot be overridden.
     *
     * Note: Enabling this option is expensive, and should not be done when it can
     * be avoided, or when the getter is used by any hot code.
     */
    overridable?: boolean

    /**
     * If true, a constructor for this component's ``type`` must be defined in
     * another translation unit, using ``NS_IMPL_COMPONENT_FACTORY(type)``. The
     * constructor must return an ``already_AddRefed<nsISupports>``, and will be
     * used to construct instances of this type.
     *
     * This option should only be used in cases where the headers which define the
     * component's concrete type cannot be easily included without local includes.
     *
     * Note: External constructors may not specify an ``init_method``, since the
     * generated code will not have the necessary type information required to call
     * it. This option is also incompatible with ``constructor`` and
     * ``legacy_constructor``.
     */
    external?: boolean

    /**
     * An optional specifier restricting which types of process this component may
     * be loaded in. This must be a property of ``ProcessSelector`` with the same
     * name as one of the values in the ``Module::ProcessSelector`` enum.
     */
    processes?: number

    js_name?: string

    esModule?: string

    interfaces?: string[]
  }

  /**
   * Lists all of the IDL files that have been indexed by the parser
   */
  export async function getInterfaceFileList(): Promise<string[]>

  export async function getInterfaceFile(
    filename: string
  ): Promise<idlParser.idlfile>

  export async function getAllInterfaces(): Promise<
    Record<string, idlParser.idlfile>
  >

  export async function getXPCOMClasses(): Promise<{
    failedFiles: string[]
    classes: ClassDefinition[]
  }>

  // ===========================================================================
  // XUL Elements

  /**
   * Returns a list of XUL Elements detected inside of `toolkit/content/widgets`
   */
  export async function getXULElements(): Promise<
    { tagName: string; className: string }[]
  >

  // ===========================================================================
  // ESM

  export async function getESMList(): Promise<string[]>
  export async function getESMFile(filename: string): Promise<ExportType[]>
}
