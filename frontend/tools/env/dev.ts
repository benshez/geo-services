import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
    ENV: 'DEV',
    API: 'http://localhost:8000/api/',
    MAP_BOX_API: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    MAP_BOX_API_KEY: 'pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A'
};

export = DevConfig;

