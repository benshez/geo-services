// components
export * from './components/index';

import { InjectionToken } from '@angular/core';

export const MAPBOX: InjectionToken<any> = new InjectionToken('mapbox-gl');
