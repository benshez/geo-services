import { Component } from '@angular/core';
import { AnalyticsService } from 'geoservice-shared/modules/analytics/index';
import { LogService } from 'geoservice-shared/modules/core/services/index';
import { Config } from 'geoservice-shared/modules/core/utilities/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'geo-service-app',
  template: require('./app.component.html').toString()
})
export class AppComponent {
  constructor(
    public analytics: AnalyticsService,
    public log: LogService
  ) {
    this.log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
  }
}

