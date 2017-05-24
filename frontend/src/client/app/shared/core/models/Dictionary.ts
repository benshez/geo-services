import { IDictionary, IKeyValuePair } from '../index';

export class Dictionary<T> implements IDictionary {
    private keysValues: any[] = [];

    constructor(obj: any[] = []) {
        this.keysValues = obj;
    }

    add(obj: any, properties: any[], values: any[]) {
        for (let property in properties) {
            obj[properties[property]] = values[property];
        }

        this.keysValues.push(obj);
    }

    remove(key: string) {
        var index = this.keysValues.indexOf(key, 0);
        this.keysValues.splice(index, 1);
        this.keysValues.splice(index, 1);

        delete this[key];
    }

    keys(): string[] {
        return this.keysValues;
    }

    values(): any[] {
        return this.keysValues;
    }

    containsKey(key: string) {
        if (typeof this[key] === 'undefined') {
            return false;
        }

        return true;
    }

    count(): number {
        return this.keysValues.length;
    }

    toLookup(): IDictionary {
        return this;
    }

    toList(): any[] {
        return this.keysValues;
        
    }
}
