// libs
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Config } from '../../../core/utils/config';
import { IAppState, getUser } from '../../../ngrx/index';

@Component({
	moduleId: module.id,
	selector: 'sd-register',
	templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
	styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class RegistrationComponent implements OnInit {
	public registrationUser: FormGroup;
	public form: FormGroup;
	public email = new FormControl('', Validators.required);
	public password = new FormControl('', Validators.required);
	public roles$: Observable<any>;
	public newRole: string;

	constructor(private store: Store<IAppState>, private fb: FormBuilder) {


	}
	//constructor(private fb: FormBuilder) { }

	ngOnInit() {
		debugger;
		this.roles$ = this.store.let(getUser);
		this.newRole = '';

		this.form = this.fb.group({
			email: this.email,
			password: this.password
		});
	}

	/*
     * @param newname  any text as input.
     * @returns return false to prevent default form submit behavior to refresh the page.
     */
	addRegistration(): boolean {
		//this.store.dispatch(new NameList.AddAction(this.newName));
		// this.newName = '';
		return false;
	}
}
