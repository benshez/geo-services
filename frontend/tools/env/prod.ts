import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
    ENV: 'PROD',
    API: 'http://127.0.0.1:8000/api/',
    GEO_API: 'http://freegeoip.net/json/'
};

export = ProdConfig;

