﻿import { ICustomStorage } from './metadata';
import { Cookie } from './cookie';

export class CookieStorage implements ICustomStorage {
    public hasItem(key) {
        return <boolean>!!Cookie.get(key);
    }

    public getItem(key) {
        return Cookie.get(key);
    }

    public setItem(key, value, config) {
        Cookie.set(key, value, config);
    }

    public removeItem(key) {
        Cookie.remove(key);
    }

    public clear() {
        Object.keys(Cookie.getAll())
            .forEach(key => Cookie.remove(key));
    }

    public key(index) {
        var cookies = Object.keys(Cookie.getAll());

        return cookies[index];
    }

    public get length() {
        return Object.keys(Cookie.getAll()).length;
    }

}
