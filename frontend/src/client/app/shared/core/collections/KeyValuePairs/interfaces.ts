export interface IDictionary {
    add(key: number, value: any): void;
    remove(key: number): void;
    containsKey(key: number): boolean;
    keys(): Array<number>;
    values(): Array<any>;
}

export interface IKeyValue {
    value: any;
}

export interface IKeyValueDictionary extends IDictionary {
    [index: number]: IKeyValue;
    values(): Array<IKeyValue>;
}