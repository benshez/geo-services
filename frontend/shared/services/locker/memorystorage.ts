import { IStorage, IStorageSetConfig } from '../../Interfaces/index';

const _cache = new Map();

const getKeys = () => Array.from(_cache.keys());

export class MemoryStorage implements IStorage {
    public hasOwnProperty(key: string) {
        return _cache.has(key);
    }

    public getItem(key: string) {
        return _cache.get(key);
    }

    public setItem(key: string, value: any, config?: IStorageSetConfig) {
        _cache.set(key, value);
    }

    public removeItem(key: string) {
        _cache.delete(key);
    }

    public clear() {
        _cache.clear();
    }

    public key(index: number) {
        return getKeys()[index];
    }

    public get length() {
        return getKeys().length;
    }
}
