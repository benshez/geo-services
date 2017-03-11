import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
    ENV: 'DEV',
    API: 'http://127.0.0.1:8000/api/',
    GEO_API: 'http://freegeoip.net/json/'
};

export = DevConfig;

