import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserActions } from '../actions/actions';
import { Config } from '../../core/utils/config';
import { Analytics, AnalyticsService } from '../../analytics/service';
import { IUser } from '../interfaces/index';
import { debug } from 'util';

@Injectable()
export class UserService extends Analytics {
	constructor(
		public analytics: AnalyticsService,
		private http: Http
	) {
		super(analytics);
		this.category = UserActions.CATEGORY;
	}

	getUsers(): Observable<IUser> {
		return null;
	}
}
