import 'core-js/client/shim';
import 'reflect-metadata';
require('zone.js/dist/zone');
// import { environment } from 'geoservice-shared/environments/environment';

import 'ts-helpers';

// if (environment.production) {
// Production

// } else {
// Development

Error['stackTraceLimit'] = Infinity;

require('zone.js/dist/long-stack-trace-zone');
// }
