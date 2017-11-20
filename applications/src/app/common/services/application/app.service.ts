import { Injectable } from '@angular/core';
import { AnalyticsService } from '../../modules/analytics/index';
import { LogService } from '../index';
import { Config } from '../../utils/index';

@Injectable()
export class AppService {
    constructor(public analytics: AnalyticsService, public log: LogService) {
        this.log.debug(`AppService -> Config env: ${Config.ENVIRONMENT.ENV}`);
    }
}
