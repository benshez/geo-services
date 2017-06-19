import { IDictionary, ISelectedKeyValue } from './KeyValuePairs/interfaces';
import { KeyValueArray } from './KeyValuePairs/models';

export class Dictionary implements IDictionary {

    _keys: Array<number> = [];
    _values: Array<any> = [];

    constructor(init: { key: number; value: any; }[]) {
        for (var x = 0; x < init.length; x++) {
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }

    add(key: number, value: any) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    }

    remove(key: number) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);

        delete this[key];
    }

    keys(): number[] {
        return this._keys;
    }

    values(): any[] {
        return this._values;
    }

    containsKey(key: number) {
        if (typeof this[key] === 'undefined') {
            return false;
        }

        return true;
    }

    getItemByKey(key: number): ISelectedKeyValue {
        return this[key];
    }

    toLookup(): IDictionary {
        return this;
    }

    toArray(): Array<ISelectedKeyValue> {
        let arr = [];

        for (let key in this._keys) {
            if (this._keys.hasOwnProperty(key)) {
                arr.push(new KeyValueArray(key, this._values[key]));
            }
        }

        return arr;
    }
}