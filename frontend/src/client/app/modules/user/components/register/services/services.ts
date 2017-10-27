import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Analytics, AnalyticsService } from '../../../../analytics/service';
import { RegistrationActions } from '../actions/actions';
import { Config } from '../../../../core/utils/config';
import { IRegistration } from '../interfaces/interfaces';


@Injectable()
export class RegistrationService extends Analytics {
	constructor(
		public analytics: AnalyticsService,
		private http: Http
	) {
		super(analytics);
		this.category = RegistrationActions.CATEGORY;
	}

	getRoles(): Observable<Array<string>> {
		return this.http.get(`${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/data.json`)
			.map(res => res.json());
	}
}
