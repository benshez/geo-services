import { Injectable } from '@angular/core';

// app
import { AnalyticsService } from '../../../modules/index';
import { LogService } from '../index';
import { Config } from '../../index';

@Injectable()
export class AppService {
  constructor(public analytics: AnalyticsService, public log: LogService) {
    this.log.debug(`AppService -> Config env: ${Config.ENVIRONMENT().ENV}`);
  }
}
