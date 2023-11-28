export class UniFFITypeError extends TypeError {
    constructor(reason: any);
    reason: any;
    itemDescriptionParts: any[];
    addItemDescriptionPart(part: any): void;
    itemDescription(): string;
    get message(): string;
}
