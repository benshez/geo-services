import { Locker, LockerConfig } from './locker';
import { LockerModule } from './Locker.module';

export * from './driver';
export * from './PolyfillDriver';
export * from './Locker.module';
export * from './locker';
export * from './DriverTypes';
export * from './metadata';

// angular-cli
export default {
    ngModule: LockerModule,
    providers: [LockerConfig, Locker]
};
