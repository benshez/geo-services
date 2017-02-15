import { Injectable } from '@angular/core';

function rehydrateCache(defaultValue: any) {
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

    if (!isBrowser) { return defaultValue; }
    const win: any = window;
    if (win['UNIVERSAL_CACHE'] && win['UNIVERSAL_CACHE']['Cache']) {
        let serverCache = defaultValue;
        try {
            serverCache = JSON.parse(win['UNIVERSAL_CACHE']['Cache']);
            if (typeof serverCache !== typeof defaultValue) {
                serverCache = defaultValue;
            }
        } catch (e) {
            serverCache = defaultValue;
        }
        return serverCache;
    }
    return defaultValue;
}

@Injectable()
export class Cache {
    _cache: any = {};
    constructor() {
        let isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
        if (isBrowser) {
            let serverCache = rehydrateCache(this._cache);
            this.rehydrate(serverCache);
        }
    }
    has(key: string): boolean {
        return this._cache.hasOwnProperty(key);
    }
    set(key: string, value: any): void {
        this._cache[key] = value;
    }
    get(key: string): any {
        return this._cache[key];
    }
    clear(): void {
        Object.keys(this._cache).forEach((key) => {
            delete this._cache[key];
        });
    }
    dehydrate() {
        let json: any = {};
        Object.keys(this._cache).forEach((key: string) => {
            json[key] = this._cache[key];
        });
        return json;
    }
    rehydrate(json: any) {
        Object.keys(json).forEach((key: string) => {
            this._cache[key] = json[key];
        });
    }

    toJSON() {
        return this.dehydrate();
    }
}

