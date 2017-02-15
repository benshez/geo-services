import { Locker, LockerConfig } from './locker';

// angular-cli
export default {
    providers: [LockerConfig, Locker]
}

export * from './driver';
export * from './storage';
export * from './module';
export * from './locker';
