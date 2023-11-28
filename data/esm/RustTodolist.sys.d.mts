export function getDefaultList(): any;
export function setDefaultList(list: any): any;
export function createEntryWith(todo: any): any;
export namespace UnitTestObjs {
    export { uniffiObjectPtr };
}
export class FfiConverterString extends FfiConverter {
    static lift(buf: any): string;
    static lower(value: any): ArrayBufferLike;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
    static computeSize(value: any): number;
}
export class TodoList {
    /**
     * An async constructor for TodoList.
     *
     * @returns {Promise<TodoList>}: A promise that resolves
     *      to a newly constructed TodoList
     */
    static init(): Promise<TodoList>;
    constructor(opts: any);
    addItem(todo: any): any;
    addEntry(entry: any): any;
    getEntries(): any;
    getItems(): any;
    addEntries(entries: any): any;
    addItems(items: any): any;
    getLastEntry(): any;
    getLast(): any;
    getFirst(): any;
    clearItem(todo: any): any;
    makeDefault(): any;
    [uniffiObjectPtr]: any;
}
export class FfiConverterTypeTodoList extends FfiConverter {
    static lift(value: any): TodoList;
    static lower(value: any): any;
    static read(dataStream: any): TodoList;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class TodoEntry {
    constructor(text: any);
    text: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeTodoEntry extends FfiConverterArrayBuffer {
    static read(dataStream: any): TodoEntry;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class TodoError extends Error {
}
export class TodoDoesNotExist extends TodoError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class EmptyTodoList extends TodoError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class DuplicateTodo extends TodoError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class EmptyString extends TodoError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class DeligatedError extends TodoError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class FfiConverterTypeTodoError extends FfiConverterArrayBuffer {
    static read(dataStream: any): TodoDoesNotExist | EmptyTodoList | DuplicateTodo | EmptyString | DeligatedError;
    static computeSize(value: any): number;
    static write(dataStream: any, value: any): void;
    static errorClass: typeof TodoError;
}
export class FfiConverterOptionalTypeTodoList extends FfiConverterArrayBuffer {
    static read(dataStream: any): TodoList;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequencestring extends FfiConverterArrayBuffer {
    static read(dataStream: any): any[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequenceTypeTodoEntry extends FfiConverterArrayBuffer {
    static read(dataStream: any): TodoEntry[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
declare const uniffiObjectPtr: unique symbol;
declare class FfiConverter {
    static checkType(value: any): void;
}
declare class FfiConverterArrayBuffer extends FfiConverter {
    static lift(buf: any): any;
    static lower(value: any): ArrayBuffer;
}
export {};
