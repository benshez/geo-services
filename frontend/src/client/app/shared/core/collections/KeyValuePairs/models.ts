import { Dictionary } from '../dictionary';
import { IKeyValue, IKeyValueDictionary } from './interfaces';

export class KeyValueDictionary extends Dictionary {
    constructor(init: { key: number; value: IKeyValue; }[]) {
        super(init);
    }

    values(): IKeyValue[] {
        return this._values;
    }

    toLookup(): IKeyValueDictionary {
        return this;
    }
}