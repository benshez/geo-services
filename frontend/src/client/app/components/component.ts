// any operators needed throughout your application
import './operators';

// libs
import { Component, OnInit } from '@angular/core';

// app
import { AnalyticsService } from '../modules/analytics/index';
import { LogService, AppService } from '../modules/core/services/index';
import { Config } from '../modules/core/utils/index';

/**
 * This class represents the main application component.
 */
@Component({
	moduleId: module.id,
	selector: 'sd-app',
	templateUrl: Config.COMPONENT_ITEMS.TEMPLATE
})
export class AppComponent {
	constructor(
		public analytics: AnalyticsService,
		public log: LogService,
		private appService: AppService
	) {
		log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
	}
}
