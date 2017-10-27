import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { RegistrationActions } from '../actions/index';
import { RegistrationService } from '../services/services';

@Injectable()
export class RegistrationEffects {
	@Effect() init$: Observable<Action> = this.actions$
		.ofType(RegistrationActions.ActionTypes.INIT)
		.startWith(new RegistrationActions.InitAction)
		.switchMap(() => this.registrationService.getRoles())
		.map(payload => {
			let names = payload;
			return new RegistrationActions.InitializedAction(names);
		})
		.catch(() => Observable.of(new RegistrationActions.InitFailedAction()));

	@Effect() add$: Observable<Action> = this.actions$
		.ofType(RegistrationActions.ActionTypes.ADD)
		.map(action => {
			let name = action.payload;
			// analytics
			this.registrationService.track(RegistrationActions.ActionTypes.ADD, { label: name });
			return new RegistrationActions.AddAction(name);
		});

	constructor(
		private store: Store<any>,
		private actions$: Actions,
		private registrationService: RegistrationService
	) { }
}
