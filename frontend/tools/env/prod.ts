import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
    ENV: 'PROD',
    API: 'http://localhost:8000/api/'
};

export = ProdConfig;
