export interface IDictionary {
    add(obj: any, prop: any, value: any): void;
    remove(key: string): void;
    containsKey(key: string): boolean;
    keys(): string[];
    values(): any[];
}
