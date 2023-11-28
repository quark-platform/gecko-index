/**
 * Base class for local study actions.
 *
 * This should be subclassed. Subclasses must implement _run() for
 * per-recipe behavior, and may implement _finalize for actions to be
 * taken once after recipes are run.
 *
 * For actions that need to be taken once before recipes are run
 * _preExecution may be overriden but the overridden method must
 * call the parent method to ensure the appropriate checks occur.
 *
 * Other methods should be overridden with care, to maintain the life
 * cycle events and error reporting implemented by this class.
 */
export class BaseStudyAction {
    _preExecution(): void;
}
