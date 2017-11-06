import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { UserActions } from '../actions/index';
import { UserService } from '../services/services';

@Injectable()
export class UserEffects {
	@Effect() init$: Observable<Action> = this.actions$
		.ofType(UserActions.ActionTypes.INIT)
		.startWith(new UserActions.InitAction)
		.switchMap(() => this.userService.getUsers())
		.map(payload => {
			debugger;
			let names = payload;
			return new UserActions.InitializedAction(names);
		})
		.catch(() => Observable.of(new UserActions.InitFailedAction()));

	@Effect() add$: Observable<Action> = this.actions$
		.ofType(UserActions.ActionTypes.ADD)
		.map(action => {
			let name = action.payload;
			// analytics
			this.userService.track(UserActions.ActionTypes.ADD, { label: name });
			return new UserActions.AddAction(name);
		});

	constructor(
		private store: Store<any>,
		private actions$: Actions,
		private userService: UserService
	) { }
}
