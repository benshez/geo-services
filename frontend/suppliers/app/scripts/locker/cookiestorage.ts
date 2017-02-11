import { IStorage, IStorageSetConfig } from './storage';
import { Cookie } from './cookie';

export class CookieStorage implements IStorage {
    public hasOwnProperty(key: string) {
        return <boolean>Cookie.get(key);
    }

    public getItem(key: string) {
        return Cookie.get(key);
    }

    public setItem(key: string, value: any, config?: IStorageSetConfig) {
        Cookie.set(key, value, config);
    }

    public removeItem(key: string) {
        Cookie.remove(key);
    }

    public clear() {
        Object.keys(Cookie.getAll())
            .forEach(key => Cookie.remove(key));
    }

    public key(index: number) {
        var cookies = Object.keys(Cookie.getAll());

        return cookies[index];
    }

    public get length() {
        return Object.keys(Cookie.getAll()).length;
    }

}

