import { ICustomStorage } from './metadata';

const _cache = new Map();

const getKeys = () => Array.from(_cache.keys());

export class MemoryStorage implements ICustomStorage {
    public hasItem(key) {
        return _cache.has(key);
    }

    public getItem(key) {
        return _cache.get(key);
    }

    public setItem(key, value) {
        _cache.set(key, value);
    }

    public removeItem(key) {
        _cache.delete(key);
    }

    public clear() {
        _cache.clear();
    }

    public key(index) {
        return <string>getKeys()[index];
    }

    public get length() {
        return getKeys().length;
    }
}
