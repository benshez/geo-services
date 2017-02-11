declare const sessionStorage: any, localStorage: any

import { IStorageSetConfig } from '../../Interfaces/indes';
import { Driver, DRIVERS } from './Driver';
import { isNil } from './Helpers';

export class LockerConfig {
    constructor(
        public driverNamespace?: string,
        public defaultDriverType?: Driver,
        public namespaceSeparator?: string
    ) {
        if (isNil(this.driverNamespace))
            this.driverNamespace = '';

        if (isNil(this.defaultDriverType))
            this.defaultDriverType = DRIVERS.SESSION;

        if (isNil(this.namespaceSeparator))
            this.namespaceSeparator = ':';
    }
}


export class Locker {
    public static DRIVERS = DRIVERS;

    private driver: Driver;
    private namespace: string;
    private separator: string;

    constructor(public lockerConfig: LockerConfig) {
        const {defaultDriverType} = lockerConfig;

        this.setNamespace();
        this.setSeparator();

        this.driver = defaultDriverType.isSupported() ? defaultDriverType : DRIVERS.MEMORY;
    }

    public setNamespace(namespace: string = this.lockerConfig.driverNamespace) {
        this.namespace = namespace;
    }

    public setSeparator(separator: string = this.lockerConfig.namespaceSeparator) {
        this.separator = separator;
    }

    public useDriver(driver: Driver) {
        return new Locker({
            defaultDriverType: driver.isSupported() ? driver : DRIVERS.MEMORY,
            driverNamespace: this.namespace,
            namespaceSeparator: this.separator
        });
    }

    public set(key: string, data: any) { // , config?: IStorageSetConfig
        this.driver.set(this._makeKey(key), data, {});
    }

    public get(key: string) {
        return this.driver.get(this._makeKey(key));
    }

    public has(key: string) {
        return this.driver.has(this._makeKey(key));
    }

    public remove(key: string) {
        this.driver.remove(this._makeKey(key));
    }

    public key(index?: number) {
        return this.driver.key(index);
    }

    public clear() {
        this.driver.clear();
    }

    private _makeKey(key: string): string {
        return this.namespace ? `${this.namespace}${this.separator}${key}` : key;
    }
}
