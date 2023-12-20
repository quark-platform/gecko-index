/**
 * This parent is blank because the Translations actor handles most of the features
 * needed in AboutTranslations.
 */
export class AboutTranslationsParent extends JSWindowActorParent {
    didDestroy(): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): Promise<any>;
    #private;
}
