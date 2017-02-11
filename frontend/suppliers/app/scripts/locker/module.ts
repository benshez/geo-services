import { Locker, LockerConfig } from './locker';

export class LockerModule {
    public static forRoot(lockerConfig?: LockerConfig) {
        const config = {
            provide: LockerConfig,
            useFactory: () => lockerConfig || new LockerConfig()
        }

        return {
            ngModule: LockerModule,
            providers: [config, Locker]
        }
    }
}
