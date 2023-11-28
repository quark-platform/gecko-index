/**
 * This class is responsible for communicating with MigrationUtils to do the
 * actual heavy-lifting of any kinds of migration work, based on messages from
 * the associated MigrationWizardChild.
 */
export class MigrationWizardParent {
    didDestroy(): void;
    /**
     * General message handler function for messages received from the
     * associated MigrationWizardChild JSWindowActor.
     *
     * @param {ReceiveMessageArgument} message
     *   The message received from the MigrationWizardChild.
     * @returns {Promise}
     */
    receiveMessage(message: ReceiveMessageArgument): Promise<any>;
    #private;
}
