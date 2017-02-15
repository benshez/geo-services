import { IStorageSetConfig } from './storage';
import { COOKIE_SEP, encode, decode, toString, isString } from './helpers';

const DEFAULT_CONFIG: IStorageSetConfig = {};

export class Cookie {
    public static getAll(): Object {
        return document.cookie
            .split(COOKIE_SEP)
            .filter(value => !!value)
            .map(items => items.split('='))
            .reduce((res, [key, value]) => (res[decode(key)] = decode(value), res), {});
    }

    public static get(key: string): any {
        return this.getAll()[key];
    }

    public static set(key: string, value: any, config: IStorageSetConfig = DEFAULT_CONFIG): void {
        const {secure, maxAge, domain, path, expires} = config

        var cookie = `${encode(key)}=${encode(value)}`;

        if (secure)
            cookie += ';secure';

        if (!isNaN(maxAge))
            cookie += `;max-age=${maxAge}`;

        if (domain)
            cookie += `;domain=${domain}`;

        if (path)
            cookie += `;path=${path}`;

        if (expires)
            cookie += `;expires=${isString(expires) ? expires : toString(expires)}`;

        document.cookie = cookie;
    }

    public static remove(key: string) {
        this.set(key, this.get(key), { maxAge: 0 });
    }
}
