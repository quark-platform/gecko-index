/**
 * This class is responsible for updating the state of a <migration-wizard>
 * component, and for listening for events from that component to perform
 * various migration functions.
 */
export class MigrationWizardChild extends JSWindowActorChild {
    /**
     * General event handler function for events dispatched from the
     * <migration-wizard> component.
     *
     * @param {Event} event
     *   The DOM event being handled.
     * @returns {Promise}
     */
    handleEvent(event: Event): Promise<any>;
    /**
     * Sends a message to the parent actor to attempt a migration.
     *
     * See migration-wizard.mjs for a definition of MigrationDetails.
     *
     * @param {object} migrationDetails
     *   A MigrationDetails object.
     * @param {object} extraArgs
     *   Extra argument object to pass to the Event Telemetry for finishing
     *   the migration.
     * @returns {Promise<undefined>}
     *   Returns a Promise that resolves after the parent responds to the migration
     *   message.
     */
    beginMigration(migrationDetails: object, extraArgs: object): Promise<undefined>;
    /**
     * General message handler function for messages received from the
     * associated MigrationWizardParent JSWindowActor.
     *
     * @param {ReceiveMessageArgument} message
     *   The message received from the MigrationWizardParent.
     */
    receiveMessage(message: ReceiveMessageArgument): void;
    /**
     * Calls the `setState` method on the <migration-wizard> component. The
     * state is cloned into the execution scope of this.#wizardEl.
     *
     * @param {object} state The state object that a <migration-wizard>
     *   component expects. See the documentation for the element's setState
     *   method for more details.
     */
    setComponentState(state: object): void;
    #private;
}
